/**
* base page object containing all selectors and methods
* that is shared across all page objects
*/
export default class BasePage {
    androidIDBase = 'com.trivago:id'

    androidID(selector) {
        return `android=new UiSelector().resourceId("${this.androidIDBase}/${selector}")`
    }

    androidClassName(className) {
        return `android=new UiSelector().className("${className}")`
    }
}
