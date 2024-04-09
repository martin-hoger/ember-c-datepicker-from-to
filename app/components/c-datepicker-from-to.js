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

Selecting whole month (beginning and end of the the month):
{{c-datepicker-from-to
  storage=session.statsBrokerCommentRatings
  presets=true
  dateChanged=(route-action "dateChanged")
  format="MM.YYYY"
  singleDate=true
  class="ui field input width-50-percent"
}}
*/

import Component from '@ember/component';
import moment from 'moment';

export default Component.extend({
  classNames: ['datepicker-from-to'],
  // should show preset buttons?
  presets       : false,
  calendarIcon  : true,  // default: show calendar icon
  // Possible to pass field names for dateFrom, but default is:
  fieldNameFrom : 'datepickerDateFrom',
  fieldNameTo   : 'datepickerDateTo',
  // Default: use two datepickers 'from', 'to'. With singleDate=true only one datepicker is shown
  // and whole month is used: dateFrom is 1.1. and dateTo is 31.1. (beginning and end of the the month)
  singleDate    : false,

  storage: {},

  actions: {

    setDateFrom: function(date) {
      // If single date, select whole month:
      if (this.get('singleDate')) {
        this.set('storage.' + this.get('fieldNameFrom'), moment(date).startOf('month').format('YYYY-MM-DD'));
        this.set('storage.' + this.get('fieldNameTo'), moment(date).endOf('month').format('YYYY-MM-DD'));
      } else { // otherwise set date from:
        this.set('storage.' + this.get('fieldNameFrom'), moment(date).format('YYYY-MM-DD'));
      }
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
