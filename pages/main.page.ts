import BasePage from './base.page';

/**
 * sub page containing specific selectors and methods for the Main page
 */
export class MainPage extends BasePage {
    // ====================================
    // Element Selectors of the Cookie Page
    // ====================================
    logoImage = this.androidID('fragmentHomeLogoImageView')
    searchBar = this.androidID('fragmentHomeExpandedDealformDestinationTextView')
    searchEditTextBar = this.androidID('activitySearchDestinationSearchEditText')
    searchResultList = this.androidID('activitySearchDestinationRecycleView')
    searchResultItem = this.androidClassName('android.view.ViewGroup')
    searchResultCountry = this.androidID('searchDestinationSubtitleTextView')
    applyDatesButton = this.androidID('activityDatesSelectionCalendarApplyTextView')
    hotelResultsList = this.androidID('fragmentAccommodationSearchResultsRecyclerView')
    hotelResultItem = this.androidID('hotelItemCardView')
    hotelResultViewDeal = this.androidID('viewBestDealViewOfferTextView')

    /**
     * Get the Logo Image element
     */
    getLogoElem(): Promise<Element> {
        return $(this.logoImage)
    }

    /**
     * Get Hotels Results list
     */
    async getHotelsResult(): Promise<Element> {
        return $(this.hotelResultsList)
    }

    /**
     * Get Hotels Results items
     */
    async getHotelsItemListLength(): Promise<number> {
        const items = $(this.hotelResultsList).$$(this.hotelResultItem)
        return items.length
    }

    /**
     * Get View Deal button of the first item
     */
    async getViewDealOfFirstItem(): Promise<Element> {
        const firstItem = $(this.hotelResultsList).$(this.hotelResultItem)
        return firstItem.$(this.hotelResultViewDeal)
    }

    /**
     * Tap on the Search Bar
     */
    async tapSearchBar(): Promise<void> {
        await $(this.searchBar).click()
    }

    /**
     * Type in the Search Edit Text Bar
     */
    async typeSearchKeyword(keyword): Promise<void> {
        await $(this.searchEditTextBar).waitForExist()
        await $(this.searchEditTextBar).setValue(keyword)
    }

    /**
     * Select the correct City based on the Country
     */
    async tapCountryFromResults(countryName): Promise<void> {
        const countryList = await $(this.searchResultList).$$(this.searchResultItem)
        for(let country of countryList) {
            const countryText = await country.$(this.searchResultCountry).getText()
            if(countryText.includes(countryName)){
                await country.click()
                break
            }
        }
    }

    /**
     * Tap on the Apply Dates Button
     */
    async tapApplyDatesButton(): Promise<void> {
        await $(this.applyDatesButton).click()
    }
}