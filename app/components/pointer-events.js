import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: [':pointer-events'],

  mouseEnter(e) {
    this.sendAction("on-enter", e);
  },

  mouseLeave(e) {
    this.sendAction("on-leave", e);
  },

  mouseMove(e) {
    this.sendAction("on-move", e);
  },

  mouseDown(e) {
    this.sendAction("on-down", e);
  },

  mouseUp(e) {
    this.sendAction("on-up", e);
  },

  touchStart() {
    this.sendAction("on-down", e);
  },

  touchEnd() {
    this.sendAction("on-up", e);
  },

  touchMove() {
    this.sendAction("on-move", e);
  },

  didInsertElement() {
    $(window).on(`touchstart.${this.element.id}`, (e)=> {
      if (!Ember.$.contains(this.element, e.target)) {
        this.sendAction('on-outside', e);
      }
    });
  },

  willDestroyElement() {
    $(window).off(`touchstart.${this.element.id}`);
  }
});
