import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    Ember.$(".sidebar-toggle").sideNav({closeOnClick: true});
  }
});
