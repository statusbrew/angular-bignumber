'use strict';

(function(global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['angular'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('angular'));
  } else {
    global.ngBignumber = factory(global.angular);
  }
}(this, function(angular) {

  bignumberFilter.$inject = ['bignumber'];

  return angular.module('ngBignumber', [])
    .provider('bignumber', bignumberProvider)
    .filter('bignumber', bignumberFilter)
    .name;

  function bignumberProvider() {

    // Constant to hold different languages symbols for respective powers.
    var NUMBER_SUFFICES = {
      en: [{
        pow: 3,
        val: 'K',
      }, {
        pow: 6,
        val: 'M',
      }, {
        pow: 9,
        val: 'B',
      }],
      ja: [{
        pow: 3,
        val: '千',
      }, {
        pow: 4,
        val: '万',
      }, {
        pow: 8,
        val: '億',
      }],
      ru: [{
        pow: 3,
        val: 'тыс',
      }, {
        pow: 6,
        val: 'млн',
      }, {
        pow: 9,
        val: 'млрд',
      }],
    };

    var $prefferedLanguage = 'en';
    var $fractionSize = 2;

    this.preferredLanguage = preferredLanguage;
    this.fractionSize = fractionSize;
    this.$get = $get;

    function preferredLanguage(langKey) {
      $prefferedLanguage = (langKey && NUMBER_SUFFICES[langKey]) ? langKey : 'en';
    }

    function fractionSize(fSize) {
      $fractionSize = fSize;
    }

    function $get() {
      return function bignumberService(number, fractionSize, lang) { // jshint ignore:line
        number = Number(number);

        if (!number) {
          return number;
        }

        if (!fractionSize && fractionSize !== 0 || fractionSize < 0) {
          fractionSize = $fractionSize;
        }

        if (!lang || !NUMBER_SUFFICES[lang]) {
          lang = $prefferedLanguage;
        }

        //constants for absolute, negativity, index of number
        var abs = Math.abs(number);
        var isNegative = number < 0;

        var langDef = NUMBER_SUFFICES[lang];

        var pow = Math.log(number) / Math.log(10);

        if (pow >= 3) {
          // Map power to possible smallest mapping symbol for that language.
          for (var i = 0, len = langDef.length; i < len; i++) {
            var j = i + 1;

            var langDefI = langDef[i];
            var langDefJ = langDef[j];

            var symbol;
            var fractionAbs;
            // IF NOT the last item in object
            if (langDefJ) {
              if (pow < langDefJ.pow) {
                symbol = langDefI.val;
                fractionAbs = (abs / Math.pow(10, langDefI.pow)).toFixed(fractionSize);
                return (isNegative ? '-' : '') + fractionAbs + symbol;
              }
            }
            // IF last item in object
            else {
              symbol = langDefI.val;
              fractionAbs = (abs / Math.pow(10, langDefI.pow)).toFixed(fractionSize);
              return (isNegative ? '-' : '') + fractionAbs + symbol;
            }
          }
        }

        return number;
      };
    }
  }

  // filter
  function bignumberFilter(bignumber) {
    return function(number, fractionSize, lang) {
      return bignumber(number, fractionSize, lang);
    };
  }
}));
