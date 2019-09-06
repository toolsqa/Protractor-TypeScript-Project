/**
 * Author Ganesh Hegde  https://linkedin.com/in/ganeshsirsi/
 * Brought to you by ToolsQA https://www.toolsqa.com/protractor
 */

const { SpecReporter } = require('jasmine-spec-reporter');
var date = new Date(); //Gets the Date
const resultsFolderName = date.getUTCDate() + "-" + (date.getUTCMonth() + 1) + "-" + date.getUTCFullYear() + "-" + date.getUTCHours();
const screenShotsFolder = './TestResults/' + resultsFolderName + '/screenshots/';
const testResultsPath = './TestResults/' + resultsFolderName + '/';

exports.config = {

    framework: 'jasmine', //Type of Framework used 
    directConnect:true,
    specs: ['./src/home/home-spec.ts'], //Name of the Specfile

    //Global Variable access this variable using browser.params.defaultBrowserTimeOut
    //You can add any number of variable inside params
    params: {
        defaultBrowserTimeOut: 30 * 1000
    },

    //Jasmine Options - Optional
    /*
    jasmineNodeOpts: {
            showColors: true,
            defaultTimeoutInterval: 3 * 60 * 1000,
            keepAlive: true,
            print: function () { }
        },
    /*
    //seleniumAddress: 'http://localhost:4444/wd/hub',

    // Configuring Test Suites
    /*suites: {
        home: ['./src/home-spec.ts'],
        search: ['./src/search-spec.ts,./src/search2-spec.ts'],
    }, 
    */

  //  Run Protractor Tests on Specific browser
    capabilities: {
        'browserName': 'chrome',
    },

   /*
    //Run Protractor Tests on multiple browser
    multiCapabilities: [
        {'browserName': 'firefox'}, 
        {'browserName': 'chrome'},
        //Run on Chrome headless mode
        // {
        //     args: ["--headless", "--disable-gpu", "--window-size=1280x1024"]
        // },
    
        //Settings for Internet explorer
        { 
            'browserName': 'internet explorer',
            'ignoreProtectedModeSettings': true,
            'nativeEvents': false,
            'ignoreZoomSetting': true,
            'unexpectedAlertBehaviour': 'accept',
            'enablePersistentHover': true,
            'disable-popup-blocking': true
        }
    ]
    */
    onPrepare() {
       // browser.waitForAngularEnabled(false);
        console.log( browser.params.specs);
        require('ts-node').register({
            project: require('path').join(__dirname, './tsconfig.json')
        });
    }
        //Realtime Test results on Console
        // jasmine.getEnv().addReporter(new SpecReporter({
        //     displayStacktrace: true,
        //     displayFailuresSummary: true,
        //     displayFailuredSpec: true,
        //     displaySpecDuration: true
        // }));

        //Create JunitXML Report
	// 	var jasmineReporters = require('jasmine-reporters');
    //     jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
    //         consolidateAll: true,
    //         savePath: testResultsPath,
    //         filePrefix: 'JunitXMLReport'
    //     }));


    //     // create screenshots for failed tests
    //     var fs = require('fs-extra');
    //     fs.emptyDir(screenShotsFolder, function (err) {
    //         if (err === null || err === undefined) {
    //            // console.log('\x1b[36m%s\x1b[0m', 'No Errors Found, Test Started ....');
    //         }
    //         else {
    //             console.log(err);
    //         }
    //     });
    //     jasmine.getEnv().addReporter({
    //         specDone: function (result) {
    //          //Uncomment the below if you need screencapture only for failed tests
    //          //   if (result.status === 'failed') {
    //                 browser.getCapabilities().then(function (caps) {
    //                     var browserName = caps.get('browserName');

    //                     browser.takeScreenshot().then(function (png) {
    //                         var stream = fs.createWriteStream(screenShotsFolder + browserName + '-' + result.fullName + '.png');
    //                         stream.write(new Buffer(png, 'base64'));
    //                         stream.end();
    //                     });
    //                 });
    //            // }
    //         }
    //     });
    // },

    // onComplete() {
    //     var browserName, browserVersion;
    //     var capsPromise = browser.getCapabilities();

    //     capsPromise.then(function (caps) {
    //         browserName = caps.get('browserName');
    //         browserVersion = caps.get('version');
    //         platform = caps.get('platform');

    //         var HTMLReport = require('protractor-html-reporter-2');

    //         const testConfig = {
    //             reportTitle: 'Sample Test Report',
    //             outputPath: testResultsPath,
    //             outputFilename: 'ProtractorTestReport',
    //             screenshotPath: './screenshots/',
    //             testBrowser: browserName,
    //             browserVersion: browserVersion,
    //             modifiedSuiteName: false,
    //             screenshotsOnlyOnFailure: false,
    //             testPlatform: platform
    //         };
    //         new HTMLReport().from(testResultsPath + '/junitxmlreport.xml', testConfig);
    //     });
    // }
  }
 