this.flexshopperTest = function (browser) {
  browser
    .url('http://www.flexshopper.com')
    .waitForElementVisible('body', 3000)
    .setValue('input[type=text]', 'iPhone')
    .waitForElementVisible('button[title=Go]', 3000)
    .click('button[title=Go]')
    .waitForElementPresent('#lp-branded-right', 3000
)

	.assert.containsText('#lp-catg', "We don't carry this product, but check out other Apple products below!")
    
	.waitForElementVisible('#lp-catg > section > div.hidden-xs.hidden-sm.col-md-2 > ul > li:nth-child(1) > h5', 3000)

	.assert.containsText('#lp-catg > section > div.hidden-xs.hidden-sm.col-md-2 > ul > li:nth-child(1) > h5', "Shop Apple Products")

	.assert.containsText('#lp-catg > section > div.hidden-xs.hidden-sm.col-md-2 > ul > li:nth-child(1) > ul > li:nth-child(1) > a', "iPads")

	.assert.containsText('#lp-catg > section > div.hidden-xs.hidden-sm.col-md-2 > ul > li:nth-child(1) > ul > li:nth-child(1) > a', href, "http://www.flexshopper.com/computers-tablets/tablets-ebooks/ipads")

	.assert.containsText('#lp-catg > section > div.hidden-xs.hidden-sm.col-md-2 > ul > li:nth-child(1) > ul > li:nth-child(2) > a', "Macbooks") 

	.assert.containsText('#lp-catg > section > div.hidden-xs.hidden-sm.col-md-2 > ul > li:nth-child(1) > ul > li:nth-child(3) > a', "iMac & Mac Mini") 

	.assert.containsText('#lp-catg > section > div.hidden-xs.hidden-sm.col-md-2 > ul > li:nth-child(1) > ul > li:nth-child(4) > a', "iPods") 

	.assert.containsText('#lp-catg > section > div.hidden-xs.hidden-sm.col-md-2 > ul > li:nth-child(1) > ul > li:nth-child(5) > a', "Beats Headphones")
 

.end();
};

