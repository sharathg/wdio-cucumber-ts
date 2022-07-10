import BasePage from './base.page';

/**
 * sub page containing specific selectors and methods for the Cookie Alert page
 */
export class CookiePage extends BasePage {
    // ====================================
    // Element Selectors of the Cookie Page
    // ====================================
    titleElement = this.androidID('activityCookieConsentContentHeaderTextView')
    acceptButton = this.androidID('activityCookieConsentContentAcceptButton')

    /**
     * Get the Welcome title element
     */
    getTitleElem(): Promise<Element> {
        return $(this.titleElement)
    }

    /**
     * Get the Accept all button element
     */
    getAcceptAllButton(): Promise<Element> {
        return $(this.acceptButton)
    }

    /**
     * Get the text of the title
     */
    async getTitleText(): Promise<string> {
        return $(this.titleElement).getText()
    }

    /**
     * Get the text of accept all button
     */
    async getAcceptAllButtonText(): Promise<string> {
        return $(this.acceptButton).getText()
    }

    /**
     * Tap the accept all button
     */
    async tapAcceptAllButton(): Promise<void> {
        await $(this.acceptButton).click()
    }
}
