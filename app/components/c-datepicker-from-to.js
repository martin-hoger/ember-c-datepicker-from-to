/*
{{c-datepicker-from-to storage=session}}
shows two labels with calendar (from / to date)

{{c-datepicker-from-to storage=session presets=true}}
shows buttons '1.day of this month', '1.day of previous month'
*/

import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  classNames: ['datepicker-from-to'],
  // should show preset buttons?
  presets   : false,

  storage: {},

  actions: {

    setDateFrom: function(date) {
      this.set('storage.datepickerDateFrom', moment(date).format('YYYY-MM-DD'));
      this.sendAction('dateChanged');
    },

    setDateTo: function(date) {
      this.set('storage.datepickerDateTo', moment(date).format('YYYY-MM-DD'));
      this.sendAction('dateChanged');
    },

    setDateByButton: function(monthsBack) {
      var datetime = moment().format(); // Now
      // how many months back? Returns 1st of month or 1st of previous month or ...
      datetime = moment().subtract(monthsBack,'months').startOf('month').format();

      this.set('storage.datepickerDateFrom', moment(datetime).format('YYYY-MM-DD'));
      this.set('storage.datepickerDateTo', moment(datetime).format('YYYY-MM-DD'));
      this.sendAction('dateChanged');

    },

  },
});
