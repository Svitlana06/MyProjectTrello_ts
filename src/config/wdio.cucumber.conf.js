exports.config = {
  framework: 'cucumber',
  runner: 'local',

  services: [],

  specs: ['../features/features-list/trello.feature'],

  exclude: [],
  maxInstances: 1,
  capabilities: [
    {
      maxInstances: 1,
      browserName: 'chrome',
      'goog:chromeOptions': {
        // args: ['--headless', '--disable-gpu', '--window-size=1920,1080'],
      },
    },
  ],

  reporters: ['spec'],

  cucumberOpts: {
    require: [
      'src/features/support/hook.js',
      'src/features/step-definitions/account_page_steps.js',
      'src/features/step-definitions/base_page_steps.js',
      'src/features/step-definitions/board_page_steps.js',
      'src/features/step-definitions/search_page_steps.js',
      'src/features/step-definitions/setup_page_steps.js',
      'src/features/step-definitions/registration_page_steps.js',
      'src/features/step-definitions/home_page_steps.js',
    ],

    backtrace: false,
    requireModule: [],
    tags: ['@login_on_the_site'],
    timeout: 60000,
    ignoreUndefinedDefinitions: false,
  },
};
