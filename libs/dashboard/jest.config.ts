/* eslint-disable */
/* eslint-disable */
export default {
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/libs/dashboard',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
  displayName: 'dashboard',
};
