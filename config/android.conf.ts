import { config } from './wdio.conf'

config.capabilities = [
    {
        platformName: 'Android',
        maxInstances: 1,
        'appium:deviceName': 'Pixel 4 API 31',
        'appium:platformVersion': '12.0',
        'appium:orientation': 'PORTRAIT',
        'appium:automationName': 'UiAutomator2',
        'appium:app': 'apps/trivago.apk',
        'appium:appPackage': 'com.trivago',
        'appium:appWaitActivity': 'ft.platformselection.frontend.PlatformSelectionActivity',
        'appium:newCommandTimeout': 240
    }
]

exports.config = config