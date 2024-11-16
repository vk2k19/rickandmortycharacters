// optional: configure or set up a testing framework before each test
// if you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

jest.spyOn(global.console, "log").mockImplementation(() => jest.fn());
jest
  .spyOn(global.console, "groupCollapsed")
  .mockImplementation(() => jest.fn());
