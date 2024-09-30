exports.config = {
  framework: 'cucumber',
  runner: 'local',

  services: [],

  specs: [
    '../features/features-list/cards.feature',
    '../features/features-list/boards.feature',
    '../features/features-list/1settings.feature',
    '../features/features-list/signup.feature',
  ],

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
      'src/features/step-definitions/change_settings_steps.js',
      'src/features/step-definitions/create_board_steps.js',
      'src/features/step-definitions/create_card_steps.js',
      'src/features/step-definitions/create_list_steps.js',
      'src/features/step-definitions/edit_profile_steps.js',
      'src/features/step-definitions/filter_cards_steps.js',
      'src/features/step-definitions/seek_board_steps.js',
      'src/features/step-definitions/sign_up_steps.js',
    ],

    backtrace: false,
    requireModule: [],
    tags: ['@login'],
    timeout: 60000,
    ignoreUndefinedDefinitions: false,
  },
};
