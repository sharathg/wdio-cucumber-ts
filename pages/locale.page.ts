import BasePage from './base.page';

/**
 * sub page containing specific selectors and methods for the Locale Selection page
 */
export class LocalePage extends BasePage {
    // ====================================
    // Element Selectors of the Locale Page
    // ====================================
    titleElement = this.androidID('activityPlatformSelectionWelcomeTextView')
    countryElements = this.androidID('itemPlatformSelectionCountryNameLanguageTextView')
    confirmButton = this.androidID('activityPlatformSelectionConfirmButton')

    /**
     * Get the Welcome Title Element
     */
    async getTitleElem(): Promise<Element> {
        return $(this.titleElement)
    }

    /**
     * Get the Title Text
     */
    async getTitleText(): Promise<string> {
        return $(this.titleElement).getText()
    }

    /**
     * Tap on a country passed as an argument
     * @param country: Pass the name of the country as a string
     */
    async tapCountry(country): Promise<void> {
        const countryList = await $$(this.countryElements)
        for (let c of countryList) {
            const text = await c.getText()
            if (text.startsWith(country)) {
                await c.click()
                break
            }
        }
    }

    /**
     * Tap on the Confirm button
     */
    async tapConfirmButton(): Promise<void> {
        await $(this.confirmButton).click()
    }
}
