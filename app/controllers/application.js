import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    logState(state) {
      console.log('state = ', state);
    },
    onToggle(state) {
      console.log('toggled to -> ', state);
    }
  }
});
