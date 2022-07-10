Feature: Trivago App Onboarding and Search

  Scenario: As a user, on the first launch, the Locale selection should be displayed
    Given It is the first time i launch the app
    When I select the locale as USA and tap Confirm
    Then I should see a Welcome to trivago message

  Scenario: As a user, at the Cookie/Welcome screen, i should be requested to accept cookies
    Given I am on the Cookie-Welcome screen
    When I tap on the Accept all button
    Then I should be taken to the Trivago main screen

  Scenario: As a user, I should be able to search for hotels in London
    Given I am on the Home Screen
    When I tap on the search bar
    And Type and select London
    And Tap on the city with country as England, United Kingdom
    And Select any dates and Tap on Apply Dates
    Then I should be shown with a list of available hotels
    And Show a button for the hotel names View Deal