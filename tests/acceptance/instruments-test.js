import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var application;
var originalConfirm;
var confirmCalledWith;

module('Acceptance: Instrument', {
  beforeEach: function() {
    application = startApp();
    originalConfirm = window.confirm;
    window.confirm = function() {
      confirmCalledWith = [].slice.call(arguments);
      return true;
    };
  },
  afterEach: function() {
    Ember.run(application, 'destroy');
    window.confirm = originalConfirm;
    confirmCalledWith = null;
  }
});

test('visiting /instruments without data', function(assert) {
  visit('/instruments');

  andThen(function() {
    assert.equal(currentPath(), 'instruments.index');
    assert.equal(find('#blankslate').text().trim(), 'No Instruments found');
  });
});

test('visiting /instruments with data', function(assert) {
  server.create('instrument');
  visit('/instruments');

  andThen(function() {
    assert.equal(currentPath(), 'instruments.index');
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('create a new instrument', function(assert) {
  visit('/instruments');
  click('a:contains(New Instrument)');

  andThen(function() {
    assert.equal(currentPath(), 'instruments.new');

    fillIn('label:contains(Name) input', 'MyString');
    fillIn('label:contains(Folder) input', 'MyString');

    click('input:submit');
  });

  andThen(function() {
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('update an existing instrument', function(assert) {
  server.create('instrument');
  visit('/instruments');
  click('a:contains(Edit)');

  andThen(function() {
    assert.equal(currentPath(), 'instruments.edit');

    fillIn('label:contains(Name) input', 'MyString');
    fillIn('label:contains(Folder) input', 'MyString');

    click('input:submit');
  });

  andThen(function() {
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('show an existing instrument', function(assert) {
  server.create('instrument');
  visit('/instruments');
  click('a:contains(Show)');

  andThen(function() {
    assert.equal(currentPath(), 'instruments.show');

    assert.equal(find('p strong:contains(Name:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Folder:)').next().text(), 'MyString');
  });
});

test('delete a instrument', function(assert) {
  server.create('instrument');
  visit('/instruments');
  click('a:contains(Remove)');

  andThen(function() {
    assert.equal(currentPath(), 'instruments.index');
    assert.deepEqual(confirmCalledWith, ['Are you sure?']);
    assert.equal(find('#blankslate').length, 1);
  });
});
