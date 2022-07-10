import { Given, When, Then } from '@wdio/cucumber-framework'
import { MainPage } from '../pages/main.page'

const pages = {
    main: new MainPage()
}

Given(/^I am on the Home Screen$/, async () => {
    expect(await pages.main.getLogoElem()).toBeDisplayed()
})

When(/^I tap on the search bar$/, async () => {
    await pages.main.tapSearchBar()
})

When(/^Type and select (.*)$/, async (location) => {
    await pages.main.typeSearchKeyword(location)
})

When(/^Tap on the city with country as (.*)$/, async (countryName) => {
    await pages.main.tapCountryFromResults(countryName)
})

When(/^Select any dates and Tap on Apply Dates$/, async () => {
    await pages.main.tapApplyDatesButton()
})

Then(/^I should be taken to the Trivago main screen$/, async () => {
    expect(await pages.main.getLogoElem()).toBeDisplayed()
})

Then(/^I should be shown with a list of available hotels$/, async () => {
    expect(await pages.main.getHotelsResult()).toBeDisplayed()
    expect(await pages.main.getHotelsItemListLength()).toBeGreaterThanOrEqual(1)
})

Then(/^Show a button for the hotel names View Deal$/, async () => {
    expect(await pages.main.getViewDealOfFirstItem()).toBeDisplayed()
})