export const cucumberConfigs = {
    cucumberSpecs: [
        './features/**/*.feature'
        ],
    cucumberOpts: {
        require: ['./steps/*.ts'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    }
}