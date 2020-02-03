module.exports = {
  name: 'accounts',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/accounts',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
