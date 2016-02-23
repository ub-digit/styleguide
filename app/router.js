import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('type');
  this.route('forms');
  this.route('search');
});

export default Router;
