# features/lowercase_Zumba.feature

Feature: Zumba Brand displays correctly on the zumba.com website
  As a user of zumba.com
  All instances of the Zumba brand name should appear in all capital letters or with the Z capitalized
  So that the Zumba brand name remains consistent

  Scenario: Navigating the zumba.com website
    Given I am on www.zumba.com
    When I navigate through the pages of the website
    Then I should only see Zumba appear as "Zumba" or "ZUMBA"

    	
