angular-bignumber
================

This is an Angular module that is made with purpose of converting integers to their big number equivalent for english, japanese and russian languages respectively. This module serves the angular service and filter using an angular provider.

Right now this module supports english, japanese and russian languages only.
Although integrating some other language can be done pretty easily buy just changing **NUMBER_SUFFICES** variable in source code.

For Example: 
* Although english is supported, let's suppose if we wanted to add support for 'English' language. 
    * Append **NUMBER_SUFFICES** object adding another key => value object for 'english'.
    * Appende key => value object should contain key('en').
    * Value should contain an array of objects that MAPS different symbols of english with their respective power for number 10 in numerical system. i.e. Symbols 'K' and 'M' symbolify a power of 3 and 6  respectively in numerical system for number 10. i.e. 1000 and 1 000 000
    * Make sure added array contains powers in ascending order.
    * Make sure added array follows naming convention as given below.

**Important:**
```javascript
{
    pow : power,
    val : 'symbol'
}
```
* pow : power,
* val : 'symbol'
    

Usage Instructions
==================

1. Include the JS file
----------------------

```html
<script src="./dist/bignumber.js"></script>
```

As usual, include this file after the inclusion of the *angular.min.js* file.

2. Import *bignumber* in your app
--------------------------------------

```javascript
angular.module( "TestApp", [ "bignumber" ] );
```

3. Usage example
---------------------------------

**In HTML Binding**

```
{{ number | bignumber : fractionSize : lang }}
```

**In JavaScript**

```
// as a filter
$filter('bignumber')(number, fractionSize, lang);
// OR as a service
bignumber(number, fractionSize, lang);
```

**Here**
> lang ~ {ru, ja, en, ......} // FOR Russian, Japanese or English respectively, default will be 'en' i.e. English.
> fractionSize ~ fraction size // Number of decimals places that is intended after conversion i.e. For fractionSize of 0 gives 15K and fractionSize of 2 will give 15.00K, default will be 0.

5. And...... that's all folks
-----------------------------

Now open your HTML and everything should be working as intended.

Future Improvements
===================

1. Documentation for provider config

Bug reports and pull requests are welcome.
