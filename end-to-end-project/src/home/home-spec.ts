import {browser,element,by} from 'protractor';
describe('Promise Demo',()=> { 
	it('Sample', () => { 
		browser.get('https://material.angularjs.org/latest/demo/autocomplete') 
		.then(() =>element(by.name('basic-usage')).click());
	}); 
});