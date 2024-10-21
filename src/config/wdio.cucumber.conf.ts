import type { Options } from '@wdio/types';

export const config: Options.Testrunner = {
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
      },
    },
  ],

  reporters: ['spec'],

  cucumberOpts: {
    require: [
      'src/features/support/hook.ts',
      'src/features/step-definitions/account_page_steps.ts',
      'src/features/step-definitions/base_page_steps.ts',
      'src/features/step-definitions/board_page_steps.ts',
      'src/features/step-definitions/search_page_steps.ts',
      'src/features/step-definitions/setup_page_steps.ts',
      'src/features/step-definitions/registration_page_steps.ts',
      'src/features/step-definitions/home_page_steps.ts',
    ],

    backtrace: false,
    requireModule: [],
    tags: ['@login_on_the_site'],
    timeout: 60000,
    ignoreUndefinedDefinitions: false,
  },
};
