Package.describe({
  name: 'dnuske:combinatorics',
  version: '0.4.0',
  // Brief, one-line summary of the package.
  summary: 'Simple combinatorics like power set, combination, and permutation in JavaScript',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/dnuske/meteor-combinatorics',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.4.1');
  api.addFiles('combinatorics.js');
  api.export('combinatorics');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('dnuske:combinatorics');
  api.addFiles('combinatorics-tests.js');
});
