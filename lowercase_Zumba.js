// features/lowercase_Zumba.js

module.exports = function () {
this.Given(/^I am on www\.zumba\.com$/, function (callback) {
  // Write code here that turns the phrase above into concrete actions
	this.browser('http://www.zumba.com', callback);
  callback.pending();
});

this.When(/^I click on the FAQS link$/, function (callback) {
  this.visit('https://www.zumba.com/en-US/faq', callback);
  callback.pending();
});

this.When(/^I click on the Instructor Trainings link$/, function (callback) {
  this.visit('https://www.zumba.com/en-US/faq/instructor', callback);
  callback.pending();
});

this.Then(/^I should not see "zumba" in lower case letters$/, function (arg1, callback) {
  browser.assert.text('body', 'zumba');
  callback.pending();
});
}