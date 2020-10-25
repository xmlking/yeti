module.exports = {
  preset: '../../jest.preset.js',
  testMatch: ['**/+(*.)+(e2e-spec|e2e-test).+(ts|js)?(x)'],
  coverageDirectory: '../../../coverage/apps/api-e2e',
  displayName: 'api',
};
