module.exports = {
  'Demo Test Foodsaver' : function (browser) {
    browser
      .windowMaximize()
      .url('http://www.foodsaver.com/')
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('.ui-dialog-titlebar-close', 1000)
      .click('.ui-dialog-titlebar-close')
      .pause(1000)
      .setValue('input[type=text]', 'gamesaver')
      .pause(1000)
      .click('input[type=submit]')
      .waitForElementVisible('body', 1000)
      .assert.title('FoodSaver GameSaver Outdoor Vacuum Sealers - the outdoorsman, the wingman, the big game plus, the titanium')
      .pause(1000)
      .click('#gm2050slider > div > div.bx-viewport > ul > li:nth-child(2) > a')
      .waitForElementVisible('body', 1000)
      .assert.title('FoodSaver® GameSaver® Outdoorsman at FoodSaver.com.')
      //.verify.location('http://www.foodsaver.com/vacuum-sealers/wild-game-vacuum-sealers/the-new-foodsaver-gamesaver-outdoorsman-gm2050-food-preservation-system/GM2050-000.html');
      .pause(1000)
      .url('http://www.foodsaver.com/gamesaver-landing/gamesaver-landing.html')
      .waitForElementVisible('body', 1000)
      .pause(1000)
      .assert.title('FoodSaver GameSaver Outdoor Vacuum Sealers - the outdoorsman, the wingman, the big game plus, the titanium')
      .click('#gm2150slider > div > div.bx-viewport > ul > li:nth-child(2) > a')
      .waitForElementVisible('body', 1000)
      .assert.title('FoodSaver® GameSaver® Wingman at FoodSaver.com.')
      .url('http://www.foodsaver.com/gamesaver-landing/gamesaver-landing.html')
      .waitForElementVisible('body', 1000)
      .pause(1000)
      .assert.title('FoodSaver GameSaver Outdoor Vacuum Sealers - the outdoorsman, the wingman, the big game plus, the titanium')
      .click('#gm700slider > div > div.bx-viewport > ul > li:nth-child(2) > a')
      .waitForElementVisible('body', 1000)
      .assert.title('FoodSaver® GameSaver® Big Game at FoodSaver.com.')
      .url('http://www.foodsaver.com/gamesaver-landing/gamesaver-landing.html')
      .waitForElementVisible('body', 1000)
      .pause(1000)
      .assert.title('FoodSaver GameSaver Outdoor Vacuum Sealers - the outdoorsman, the wingman, the big game plus, the titanium')
      .click('#g800slider > div > div.bx-viewport > ul > li:nth-child(2) > a')
      .waitForElementVisible('body', 1000)
      .title('FoodSaver® GameSaver® Titanium Vacuum Sealer w/ Bonus Offer')
      //At this point PI should be set
      //Adding addition URLs for testing purposes 
      
      .url('http://www.foodsaver.com/food-storage-bags-and-containers/wild-game-vacuum-seal-bags-and-rolls/gallon-size-vacuum-sealer-bags/foodsaver-gamesaver-11x14-gallon-vacuum-seal-bags-60--count/GBG60-000.html')
      .waitForElementVisible('body', 1000)
      .pause(1000)

      .url('http://www.foodsaver.com/food-storage-bags-and-containers/wild-game-vacuum-seal-bags-and-rolls/quart-size-vacuum-sealer-bags/foodsaver-gamesaver-8x11-quart-vacuum-seal-bags-100-count/GBQ100-000.html')
      .waitForElementVisible('body', 1000)
      .pause(1000)
      
      
      .url('http://www.foodsaver.com/')
      .waitForElementVisible('body', 1000)
      .click('li.second:nth-child(2) > div:nth-child(2) > div:nth-child(1) > a:nth-child(4)')
      .waitForElementVisible('body', 1000)
      .assert.title('Outdoor Vacuum Sealers | Foodsaver')
      .pause(30000)
    
      .end();
    
  }
};
