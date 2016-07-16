import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  redirects: {
    synth     : 'instrument',
    synths    : 'instruments'
  }
});

Router.map(function() {
  this.route('instruments', function() {
    this.route('new');

    this.route('edit', {
      path: ':instrument_id/edit'
    });

    this.route('show', {
      path: ':instrument_id'
    });
  });
});

export default Router;
