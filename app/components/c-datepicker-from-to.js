import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['datepicker-from-to'],

  storage: {},

  actions: {
    setDateFrom: function(date) {
      this.set("storage.datepickerDateFrom", moment(date).format("YYYY-MM-DD"));
      this.sendAction('dateChanged');
    },
    setDateTo: function(date) {
      this.set("storage.datepickerDateTo", moment(date).format("YYYY-MM-DD"));
      this.sendAction('dateChanged');
    }
  },
});
