/*
  Datepicker with year quick-selector dropdown.

  {{c-datepicker-from-to-year
    storage=session.turnover
    dateChanged=(route-action "dateChanged")
  }}

  Options:
    storage      - object with datepickerDateFrom / datepickerDateTo
    dateChanged  - closure action called after any date change
    allowClear   - show "✖ Zrušit výběr" option (default: false)
    yearFrom     - oldest year shown in dropdown (default: 2020)
*/

import Component from '@ember/component';
import { computed } from '@ember/object';
import moment from 'moment';

export default Component.extend({

  tagName    : '',
  allowClear : false,
  yearFrom   : 2020,

  years: computed('yearFrom', function() {
    let thisYear = Number(moment().format('YYYY'));
    let years    = [];
    for (let i = thisYear; i >= this.get('yearFrom'); i--) {
      years.push(i);
    }
    return years;
  }),

  actions: {
    selectYear(year) {
      if (year) {
        this.set('storage.datepickerDateFrom', year + '-01-01');
        this.set('storage.datepickerDateTo',   year + '-12-31');
      } else {
        this.set('storage.datepickerDateFrom', null);
        this.set('storage.datepickerDateTo',   null);
      }
      this.get('dateChanged')();
    },
  },

});
