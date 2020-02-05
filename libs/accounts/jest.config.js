module.exports = {
  name: 'accounts',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/accounts',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
