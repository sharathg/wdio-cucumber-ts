import { Given, When, Then } from '@wdio/cucumber-framework'
import { CookiePage } from '../pages/cookie.page'
import { LocalePage } from '../pages/locale.page'

const pages = {
    locale: new LocalePage(),
    cookie: new CookiePage()
}

Given(/^It is the first time i launch the app$/, async () => {
    expect(await pages.locale.getTitleElem()).toBeDisplayed()
    expect(await pages.locale.getTitleText()).toBe('Welcome!')
})

Given(/^I am on the Cookie-Welcome screen$/, async () => {
    expect(await pages.cookie.getTitleElem()).toBeDisplayed()
})

When(/^I select the locale as (.*) and tap Confirm$/, async (country) => {
    await pages.locale.tapCountry(country)
    await pages.locale.tapConfirmButton()
})

When(/^I tap on the (.*) button$/, async (btnText) => {
    expect(await pages.cookie.getAcceptAllButton()).toBeDisplayed()
    expect(await pages.cookie.getAcceptAllButtonText()).toBe(btnText)
    await pages.cookie.tapAcceptAllButton()
})

Then(/^I should see a (.*) message$/, async (message) => {
    expect(await pages.cookie.getTitleText()).toContain(message)
})

