import { moduleForModel, test } from 'ember-qunit';

moduleForModel('instrument', 'Unit | Model | instrument', {
  // Specify the other units that are required for this test.
  needs: ['model:instrument-folder']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
