import { appiumConf } from './appium.conf'
import { compileOpts } from './compiler.conf'
import { cucumberConfigs } from './cucumber.conf'
import { generate } from 'multiple-cucumber-html-reporter'
import type { Options } from '@wdio/types'

export const config: Options.Testrunner = {
    //
    // ====================
    // Runner Configuration
    // ====================
    runner: "local",
    //
    // =====================
    // ts-node Configurations
    // =====================

    autoCompileOpts: compileOpts,

    // ==================
    // Specify Test Files
    // ==================

    specs: cucumberConfigs.cucumberSpecs,

    // ============
    // Capabilities
    // ============

    maxInstances: 10,

    /*
    Defined appium/device capabilities later in the respective config file
     */
    capabilities: [],

    // ===================
    // Test Configurations
    // ===================

    logLevel: 'debug',

    // If you only want to run your tests until a specific amount of tests have failed use
    bail: 0,

    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,

    // Default timeout in milliseconds for request
    connectionRetryTimeout: 120000,

    // Default request retries count
    connectionRetryCount: 3,

    // Test runner services
    services: [[appiumConf.appiumService, appiumConf.appiumOptions]],
    port: appiumConf.appiumPort,

    // Framework you want to run your specs with.
    framework: 'cucumber',

    // Test reporter for stdout.
    reporters: [
        [ 'cucumberjs-json', {
                jsonFolder: './reports/json/',
                language: 'en',
            },
        ],
    ],

    // If you are using Cucumber you need to specify the location of your step definitions.
    cucumberOpts: cucumberConfigs.cucumberOpts,

    // =====
    // Hooks
    // =====
    /**
     * Gets executed after all workers got shut down and the process is about to exit. An error
     * thrown in the onComplete hook will result in the test run failing.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {<Object>} results object containing test results
     */
    onComplete: function(exitCode, config, capabilities, results) {
        generate({
            jsonDir: './reports/json',
            reportPath: './reports/html',
            openReportInBrowser: true
        });
    },
}
