import Ember from 'ember';

export default Ember.Controller.extend({

  thingies: ["Yes", "No", "Meh"],

  actions: {
    logState(state) {
      console.log('state = ', state);
    },
    onToggle(state) {
      console.log('toggled to -> ', state);
    }
  }
});
