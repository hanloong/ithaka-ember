import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('project', params.project_id).then(function(project) {
      return Ember.RSVP.hash({
        project: project,
        ideas: project.get('ideas')
      });
    });
  }
});
