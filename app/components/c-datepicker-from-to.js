/*
{{c-datepicker-from-to storage=session}}
shows two labels with calendar (from / to date)

{{c-datepicker-from-to storage=session presets=true}}
shows buttons 'this month', 'previous month',
sets date from firs day of the month to the last day of the month

Use 'fieldNameFrom' and 'fieldNameTo': using projectReport.dateFrom, projectReport.dateTo.
Recomended to use class="ui input"
{{c-datepicker-from-to
  storage=projectReport
  class="ui input"
  fieldNameFrom="dateFrom"
  fieldNameTo="dateTo"
}}
*/

import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  classNames: ['datepicker-from-to'],
  // should show preset buttons?
  presets       : false,
<<<<<<< HEAD
  calendarIcon  : true,  // default: show calendar icon
=======
>>>>>>> 0abd084b031a6adeac4d6c31ae01c8c1300c110f
  // Possible to pass field names for dateFrom, but default is:
  fieldNameFrom : 'datepickerDateFrom',
  fieldNameTo   : 'datepickerDateTo',

  storage: {},

  actions: {

    setDateFrom: function(date) {
      this.set('storage.' + this.get('fieldNameFrom'), moment(date).format('YYYY-MM-DD'));
      this.sendAction('dateChanged');
    },

    setDateTo: function(date) {
      this.set('storage.' + this.get('fieldNameTo'), moment(date).format('YYYY-MM-DD'));
      this.sendAction('dateChanged');
    },

    setDateByButton: function(monthsBack) {
      var datetime = moment().format(); // Now
      // how many months back? Returns 1st of month or 1st of previous month or ...
      datetime = moment().subtract(monthsBack,'months').startOf('month').format();
      // save start of month and end of month
      this.set('storage.' + this.get('fieldNameFrom'), moment(datetime).format('YYYY-MM-DD'));
      this.set('storage.' + this.get('fieldNameTo'), moment(datetime).endOf('month').format('YYYY-MM-DD'));
      this.sendAction('dateChanged');
    },
  },

});
