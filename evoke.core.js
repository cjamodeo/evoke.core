/*** evoke.core ***/
/**
 * @class String
 * @classdesc These methods are to support newly added String methods in the latest ECMAScript standard which are not supported by earlier browsers and other helpful methods which are not currently part of any standard. These methods are used throughout the evoke namespaces.
 */
if (typeof (String.prototype.trim) != "function") {
/**
 * Trims whitespace from the beginning and end of a string.
 * @memberof String
 * @instance
 * @this String
 * @function trim
 * @returns The modified string.
 * @example
 * var s = " test value ";
 * s = s.trim(); //s = "test value"
 */
    String.prototype.trim = function () {
        return this.replace(/^\s+/, "").replace(/\s+$/, "") 
    };
}
if (typeof (String.prototype.startsWith) != "function") {
/**
* This method determines whether a string begins with the characters of another string, returning true or false as appropriate.
* @memberof String
* @instance
* @this String
* @function startsWith
* @param {string} searchString The characters to be searched for at the start of this string.
* @param {number} [position] The position in this string at which to begin searching for searchString; defaults to 0.
* @returns {boolean}
* @example
* var str = 'To be, or not to be, that is the question.';
* console.log("true = " + str.startsWith('To be'));         // true
* console.log("false = " + str.startsWith('not to be'));     // false
* console.log("true = " + str.startsWith('not to be', 10)); // true
*/
    String.prototype.startsWith = function (searchString, position) {
        if (typeof (searchString) == "string") {
            var index = position || 0;
            return this.indexOf(searchString, index) == index;
        } else {
            return false;
        }
    }
}
if (typeof (String.prototype.startsWithIgnoreCase) != "function") {
/**
* This method determines whether a string begins with the characters of another string ignoring case, returning true or false as appropriate.
* @memberof String
* @instance
* @this String
* @function startsWithIgnoreCase
* @param {string} searchString The characters to be searched for at the start of this string.
* @param {number} [position] The position in this string at which to begin searching for searchString; defaults to 0.
* @returns {boolean}
* @example
* var str = 'To be, or not to be, that is the question.';
* console.log("true = " + str.startsWithIgnoreCase('TO BE'));         // true
* console.log("false = " + str.startsWithIgnoreCase('NOT TO BE'));     // false
* console.log("true = " + str.startsWithIgnoreCase('NOT TO BE', 10)); // true
*/
    String.prototype.startsWithIgnoreCase = function (searchString, position) {
        if (typeof (searchString) == "string") {
            var index = position || 0;
            return this.toLowerCase().indexOf(searchString.toLowerCase(), index) == index;
        } else {
            return false;
        }
    }
}
if (typeof (String.prototype.endsWith) != "function") {
/**
* This method determines whether a string ends with the characters of another string, returning true or false as appropriate.
* @memberof String
* @instance
* @this String
* @function endsWith
* @param {string} searchString The characters to be searched for at the end of this string.
* @param {number} [position] Search within this string as if this string were only this long; defaults to this string's actual length, clamped within the range established by this string's length.
* @returns {boolean}
* @example
* var str = 'To be, or not to be, that is the question.';
* console.log("true = " + str.endsWith('question.')); // true
* console.log("false = " + str.endsWith('to be'));     // false
* console.log("true = " + str.endsWith('to be', 19)); // true
*/
    String.prototype.endsWith = function (searchString, position) {
        if (typeof (searchString) == "string") {
            var _this = this;
            if (typeof (position) == "number") {
                _this = this.substring(0, position);
            }
            var length = position || _this.length;
            return _this.lastIndexOf(searchString) == length - searchString.length;
        } else {
            return false;
        }
    }
}
if (typeof (String.prototype.endsWithIgnoreCase) != "function") {
/**
* This method determines whether a string ends with the characters of another string ignoring case, returning true or false as appropriate.
* @memberof String
* @instance
* @this String
* @function endsWithIgnoreCase
* @param {string} searchString The characters to be searched for at the end of this string.
* @param {number} [position] Search within this string as if this string were only this long; defaults to this string's actual length, clamped within the range established by this string's length.
* @returns {boolean}
* @example
* var str = 'To be, or not to be, that is the question.';
* console.log("true = " + str.endsWithIgnoreCase('QUESTION.')); // true
* console.log("false = " + str.endsWithIgnoreCase('TO BE'));     // false
* console.log("true = " + str.endsWithIgnoreCase('TO BE', 19)); // true
*/
    String.prototype.endsWithIgnoreCase = function (searchString, position) {
        if (typeof (searchString) == "string") {
            var _this = this.toLowerCase();
            if (typeof(position) == "number") {
                _this = this.substring(0, position);
            }
            var length = position || _this.length;
            return _this.toLowerCase().lastIndexOf(searchString.toLowerCase()) == length - searchString.length;
        } else {
            return false;
        }
    }
}
if (typeof (String.format) != "function") {
/**
* This method replaces any number of tokens within a given string. Tokens should be the index of the replacement parameters in between braces ({0}, {1}, {2}, ..., {x})
* @memberof String
* @function format
* @static
* @param {string} format The string to be formatted
* @param {Array|*} replacements An Array or any number of parameters containing the replacements
* @returns {string}
* @example
* var a = String.format("Hello {0}. Welcome to {1}.", "CJ", "Awesomeland");
*/
    String.format = function () {
        var val = "";
        if (arguments.length >= 1) {
            val = arguments[0];
            if (arguments.length >= 2) {
                var args = null;
                if (arguments[1] instanceof Array) {
                    args = arguments[1];
                } else {
                   args = [].slice.call(arguments).slice(1);
                }
                var regex = null;
                for (var i = 0; i < args.length; i++) {
                    regex = new RegExp("\\{" + i.toString() + "\\}", "g");
                    val = val.replace(regex, args[i].toString());
                }
            }
        }
        return val;
    }
}
/**
 * @class Array
 */
if (typeof (Array.prototype.removeEmptyEntries) != "function") {
    /** 
    * Removes any entry that equals undefined, null, or, if it's a string, is an empty string when trimmed.
    * @memberof Array
    * @instance
    * @this Array
    * @function removeEmptyEntries
    * @example
    * var arr = ["one", undefined, "two", null, "", "three", "  "];
    * arr.removeEmptyEntries(); //arr = ["one", "two", "three"]
    */
    Array.prototype.removeEmptyEntries = function () {
        var keep = [];
        var entry = null;
        for (var i = 0; i < this.length; i++) {
            entry = this[i];
            if (entry != undefined && entry != null) {
                if (typeof (entry) == "string") {
                    if (entry.trim() != "") {
                        keep.push(entry);
                    }
                } else {
                    keep.push(entry);
                }
            }
        }
        this.splice(0, this.length);
        for (var i = 0; i < keep.length; i++) {
            this.push(keep[i]);
        }
    }
}
if (typeof (Array.prototype.copyTo) != "function") {
    /**
    * Copies the values contained in this Array to a target Array.
    * @memberof Array
    * @instance
    * @this Array
    * @function copyTo
    * @param {Array} target The target array to copy values to
    * @example
    * var x = [1, 2, 3];
    * var y = [4, 5];
    * y.copyTo(x); //x = [1, 2, 3, 4, 5];
    */
    Array.prototype.copyTo = function(target) {
        if (target instanceof Array) {
            for (var i=0; i<this.length; i++) {
                target.push(this[i]);
            }
        }
    }
}
if (typeof (Array.prototype.pushRange) != "function") {
    /**
    * Pushes and array of items to this Array.
    * @memberof Array
    * @instance
    * @this Array
    * @function pushRange
    * @param {Array} items The array of items to push
    * @example
    * var x = [1, 2, 3];
    * var y = [4, 5];
    * x.pushRange(y); //x = [1, 2, 3, 4, 5];
    */
    Array.prototype.pushRange = function (items) {
        if (items instanceof Array) {
            for (var i = 0; i < items.length; i++) {
                this.push(items[i]);
            }
        } else {
            this.push(items);
        }
    };
}

/**
* @class Date
* @classdesc These methods add helpful methods which are not currently part of any standard.
*/
if (typeof (Date.prototype.addDays) != "function") {
    /**
    * Adds days to the date
    * @memberof Date
    * @instance
    * @function addDays
    * @param {Number} days The number of days to add. Passing a negative number will subtract days
    * @example
    * var d = new Date(2016, 0, 1);
    * d.addDays(1); //d = January 2, 2016
    */
    Date.prototype.addDays = function (days) {
        this.setDate(this.getDate() + days);
    }
}

if (typeof (Date.prototype.isLeapYear) != "function") {
    /**
    * Determines if the year is a leap year
    * @memberof Date
    * @instance
    * @function isLeapYear
    * @returns {Boolean} True if the Date is a leap year.
    * @example
    * var d = new Date(2016, 1, 1);
    * var isLeapYear = d.isLeapYear(); //2016 is a leap year
    */
    Date.prototype.isLeapYear = function() {
        var y = this.getFullYear();
        return (((y % 4 == 0) && ((!(y % 100 == 0)) || (y % 400 == 0))) ? true : false);
    }
}

if (typeof (Date.prototype.toStringFormat) != "function") {
/** 
* Formats a Date according to a specified format string.
<table cellpadding="5" cellspacing="0" border="1">
<tr><td><b>Format specifier</b></td><td><b>Description</b></td></tr>
<tr><td>"d"</td><td>The day of the month, from 1 through 31.</td></tr>
<tr><td>"dd"</td><td>The day of the month, from 01 through 31.</td></tr>
<tr><td>"ddd"</td><td>The abbreviated name of the day of the week.</td></tr>
<tr><td>"ddd"</td><td>The full name of the day of the week.</td></tr>
<tr><td>"f"</td><td>The tenths of a second.</td></tr>
<tr><td>"ff"</td><td>The hundredths of a second.</td></tr>
<tr><td>"fff"</td><td>The milliseconds.</td></tr>
<tr><td>"h"</td><td>The hour, using a 12-hour clock from 1 to 12.</td></tr>
<tr><td>"hh"</td><td>The hour, using a 12-hour clock from 01 to 12.</td></tr>
<tr><td>"H"</td><td>The hour, using a 24-hour clock from 0 to 23.</td></tr>
<tr><td>"HH"</td><td>The hour, using a 24-hour clock from 00 to 23.</td></tr>
<tr><td>"m"</td><td>The minute, from 0 through 59</td></tr>
<tr><td>"mm"</td><td>The minute, from 00 through 59.</td></tr>
<tr><td>"M"</td><td>The month, from 1 through 12.</td></tr>
<tr><td>"MM"</td><td>The month, from 01 through 12.</td></tr>
<tr><td>"MMM"</td><td>The abbreviated name of the month.</td></tr>
<tr><td>"MMMM"</td><td>The full name of the month.</td></tr>
<tr><td>"s"</td><td>The second, from 0 through 59.</td></tr>
<tr><td>"ss"</td><td>The second, from 00 through 59.</td></tr>
<tr><td>"t"</td><td>The first character of the AM/PM designator.</td></tr>
<tr><td>"tt"</td><td>The AM/PM designator.</td></tr>
<tr><td>"yy"</td><td>The year, from 00 to 99.</td></tr>
<tr><td>"yyyy"</td><td>The year as a four-digit number.</td></tr>
</table>
* @memberof Date
* @instance
* @this Date
* @function toStringFormat
* @param {string} formatString The format string
* @param {boolean} [makeUTC] A boolean indicating if the date should be formated as UTC
* @returns {string}
* @example
* var timestamp = new Date().toStringFormat("yyyyMMddHHmmss");
*/
    Date.prototype.toStringFormat = function (formatString, makeUTC) {
        function addLeadingZero(val, zeros) {
            var z = 1;
            if (zeros != undefined && zeros > 1) {
                z = zeros;
            }
            var v = val.toString();
            while (v.length < z + 1) {
                v = "0" + v;
            }
            return v;
            //return val < 10 ? "0" + val.toString() : val.toString();
        }
        if (formatString == undefined || formatString == null || formatString.trim() == "") {
            return this.toString();
        } else {
            var rtnVal = formatString;
            var utc = typeof (makeUTC) == "boolean" ? makeUTC : false;

            rtnVal = rtnVal.replace(/yyyy/g, utc ? this.getUTCFullYear() : this.getFullYear());
            rtnVal = rtnVal.replace(/yy/g, (utc ? this.getUTCFullYear() : this.getFullYear()).toString().substring(2));

            var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            rtnVal = rtnVal.replace(/MMMM/g, "{" + months[utc ? this.getUTCMonth() : this.getMonth()] + "}");
            rtnVal = rtnVal.replace(/MMM/g, "{" + months[utc ? this.getUTCMonth() : this.getMonth()].substring(0, 3) + "}");
            rtnVal = rtnVal.replace(/MM/g, addLeadingZero((utc ? this.getUTCMonth() : this.getMonth()) + 1));
            rtnVal = rtnVal.replace(/M(?!(.*}))/g, (utc ? this.getUTCMonth() : this.getMonth()) + 1);

            var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            rtnVal = rtnVal.replace(/dddd/g, "{" + days[utc ? this.getUTCDay() : this.getDay()] + "}");
            rtnVal = rtnVal.replace(/ddd/g, "{" + days[utc ? this.getUTCDay() : this.getDay()].substring(0, 3) + "}");
            rtnVal = rtnVal.replace(/dd/g, addLeadingZero(utc ? this.getUTCDate() : this.getDate()));
            rtnVal = rtnVal.replace(/d(?!(.*}))/g, utc ? this.getUTCDate() : this.getDate());

            rtnVal = rtnVal.replace(/HH/g, addLeadingZero(utc ? this.getUTCHours() : this.getHours()));
            rtnVal = rtnVal.replace(/H(?![^{].*\})/g, utc ? this.getUTCHours() : this.getHours());
            {
                var h = utc ? this.getUTCHours() : this.getHours();
                if (h == 0) {
                    h = 12;
                } else if (h > 12) {
                    h -= 12;
                }
                rtnVal = rtnVal.replace(/hh/g, addLeadingZero(h));
                rtnVal = rtnVal.replace(/h(?!(.*}))/g, h);
            }

            rtnVal = rtnVal.replace(/mm/g, addLeadingZero(utc ? this.getUTCMinutes() : this.getMinutes()));
            rtnVal = rtnVal.replace(/m(?!(.*}))/g, utc ? this.getUTCMinutes() : this.getMinutes());

            rtnVal = rtnVal.replace(/ss/g, addLeadingZero(utc ? this.getUTCSeconds() : this.getSeconds()));
            rtnVal = rtnVal.replace(/s(?!(.*}))/g, utc ? this.getUTCSeconds() : this.getSeconds());

            {
                var f = utc ? this.getUTCMilliseconds() : this.getMilliseconds();
                var s = f < 10 ? "00" + f.toString() : f < 100 ? "0" + f.toString() : f.toString();
                rtnVal = rtnVal.replace(/fff/g, s);
                rtnVal = rtnVal.replace(/ff/g, s.substring(0, 2));
                rtnVal = rtnVal.replace(/f(?!(.*}))/g, s.substring(0, 1));
            }

            rtnVal = rtnVal.replace(/tt/g, (utc ? this.getUTCHours() : this.getHours()) < 12 ? "AM" : "PM");
            rtnVal = rtnVal.replace(/t(?!(.*}))/g, (utc ? this.getUTCHours() : this.getHours()) < 12 ? "A" : "P");

            return rtnVal.replace(/\{+/g, "").replace(/\}+/g, "");
        }
    }
}
if (typeof (Date.prototype.toUTCStringFormat) != "function") {
    /** 
    * Formats a Date according to a specified format string using UTC
    * @memberof Date
    * @instance
    * @this Date
    * @function toUTCStringFormat
    * @param {string} formatString The format string
    * @returns {string}
    * @example
    * var timestamp = new Date().toUTCStringFormat("yyyyMMddHHmmss");
    */
    Date.prototype.toUTCStringFormat = function (formatString) {
        return this.toStringFormat(formatString, true);
    }
}



/**
 * Defines the <code>window.evoke</code> global object.
 * @namespace evoke
 */
window.evoke = window.evoke || {};
/**
 * Holds functions that will be executed after the evoke library has completed loading.
 * @memberof evoke
 * @member {Array} ready
 * @example
 * <script type="text/javascript">
 * (window.evoke=window.evoke||{}).ready=window.evoke.ready||[];
 * evoke.ready.push(function() { console.log("evoke ready"); });
 * </script>
 * <script type="text/javascript">
 * (window.evoke=window.evoke||{}).settings = { };
 * </script>
 * <script type="text/javascript" src="evoke.js"></script>
 */
window.evoke.ready = window.evoke.ready || [];
window.evoke.isReady = false;

/** 
* Allows the setting of defaults before the evoke library is loaded.
* @namespace evoke.settings
* @memberof evoke
* @example
* <script type="text/javascript">
* (window.evoke=window.evoke||{}).settings = { };
* </script>
*/

/**
* @memberof evoke.settings
* @member {object} core
* @prop {boolean} escapeFrame=false If true evoke.core.escapeFrame will automatically be executed
* @prop {object} console
* @prop {boolean} console.enabled=false Enables writing log output to the browser's console
* @prop {boolean} console.mobileEnabled=false Enables writing log output to a mobile browser's console
* @prop {boolean} console.objectToString=false Write objects as strings
* @example
* <script type="text/javascript">
*   window.evoke = {
*     settings: {
*       core: {
*         console: {
*           enabled: true,
*           mobileEnabled: true
            objectToString: true
*         }
*       }
*     }
*   }
* </script>
* <script type="text/javascript" src="evoke.js"></script>
*/
if (typeof(evoke.settings) != "object") {
    evoke.settings = new Object();
}
if (typeof (evoke.settings.core) != "object") {
    evoke.settings.core = new Object();
}
if (typeof(evoke.settings.core.escapeFrame) != "boolean") {
    evoke.settings.core.escapeFrame = false;
}
if (typeof (evoke.settings.core.console) != "object") {
    evoke.settings.core.console = new Object();
}
if (typeof (evoke.settings.core.console.enabled) != "boolean") {
    evoke.settings.core.console.enabled = false;
}
if (typeof (evoke.settings.core.console.mobileEnabled) != "boolean") {
    evoke.settings.core.console.mobileEnabled = false;
}
if (typeof (evoke.settings.core.console.objectToString) != "boolean") {
    evoke.settings.core.console.objectToString = false;
}
/**
* @namespace evoke.core
* @memberof evoke
*/
evoke.core = (function () {

    function getScript(regex) {
        var script = null;
        var scripts = document.getElementsByTagName("scripts");
        for (var i = 0; i < scripts.length; i++) {
            if (typeof (scripts[i].src) != "undefined" && regex.test(scripts[i].src)) {
                script = scripts[i];
            }
        }
        return script;
    }

    function loadScript(url, appendTo, callback) {
        var e = document.createElement("script");
        e.setAttribute("type", "text/javascript");
        e.setAttribute("src", url);

        var fnCallback = null;
        if (typeof (callback) == "function") {
            fnCallback = callback;
        } else if (typeof (appendTo) == "function") {
            fnCallback = appendTo;
        }
        if (fnCallback != null) {
            if (e.readyState) { //IE<=10
                e.onreadystatechange = function () {
                    if (this.readyState == "loaded" || this.readyState == "complete") {
                        this.onreadystatechange = null;
                        fnCallback();
                    }
                }
            } else {
                e.onload = fnCallback;
            }
        }

        var parent = document.getElementsByTagName("head")[0];
        if (appendTo != undefined && appendTo != null) {
            if (typeof (appendTo) == "string") {
                if (appendTo.toLowerCase() == "body") {
                    parent = document.body;
                }
            } else if (typeof (appendTo) == "object") {
                parent = appendTo;
            }
        }
        parent.appendChild(e);
    }

    function isHigherVersion(version, compareTo) {
        var isHigher = false;
        var v = "";
        var c = "";
        var arrV = [];
        var arrC = [];
        if (typeof (v) == "number") {
            v = verion.toString()
        } else {
            v = version;
        }
        if (typeof (c) == "number") {
            c = c.toString();
        } else {
            c = compareTo;
        }
        arrV = v.split(/[\.\-_]+/);
        arrC = v.split(/[\.\-_]+/);
        if (arrV.length < arrC.length) {
            for (var i = arrV.length; i < arrC.length; i++) {
                arrV.push("0");
            }
        } else if (arrC.length < arrV.length) {
            for (var i = arrC.length; i < arrV.length; i++) {
                arrC.push("0");
            }
        }
        for (var i = 0; i < arrV.length; i++) {
            if (parseInt(arrV[i], 10) > parseInt(arrC[i], 10)) {
                isHigher = true;
                break;
            }
        }
        return isHigher;
    }

    function isUndefinedNullEmpty(obj) {
        if (typeof(obj) == "undefined" || obj == null) {
            return true;
        } else {
            if (typeof (obj) == "string") {
                return obj.replace(/\s/g, '').length < 1;
            } else {
                return false;
            }
        }
    }

    var jsonData = [];
    var jsonLoading = [];
    function loadJson(url, success, error) {
        if (jsonData[url] === undefined) {
            if (jsonLoading[url] === true) {
                setTimeout(function () {
                    loadJson(url, success, error);
                }, 100);
            } else {
                jsonLoading[url] = true;
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == XMLHttpRequest.DONE) {
                        if (xhr.status === 200) {
                            var json = JSON.parse(xhr.responseText);
                            jsonData[url] = json;
                            jsonLoading[url] = false;
                            if (typeof (success) == "function") {
                                success(json);
                            }
                        } else {
                            if (typeof (error) == "function") {
                                error(xhr);
                            }
                        }
                    }
                }
                xhr.open("GET", url, true);
                xhr.send();
            }
        } else {
            if (typeof (success) == "function") {
                success(jsonData[url]);
            } else {
                return jsonData[url];
            }
        }
    }

    var windowLoaded = false;
    window.addEventListener("load", function () { windowLoaded = true; });
    function onWindowLoad(callback) {
        if (typeof (callback) == "function") {
            if (!windowLoaded) {
                window.addEventListener("load", callback);
            } else {
                callback();
            }
        }
    }

    return {
        /**
        * This method tests whether a object is undefined, null or, if the object is a string, has a length < 1 after remove whitespace
        * @memberof evoke.core
        * @function isUndefinedNullEmpty
        * @param {object} obj The object to test
        * @returns {boolean} True if the object is undefined, null or, if the object is a string, empty. Otherwise false.
        * @example
        * console.log(evoke.core.isUndefinedNullEmpty(null)); // true
        * console.log(evoke.core.isUndefinedNullEmpty("hello"));     // false
        * console.log(evoke.core.isUndefinedNullEmpty(""); // true
        * console.log(evoke.core.isUndefinedNullEmpty(1); // false
        * console.log(evoke.core.isUndefinedNullEmpty(new Object()); // false
        * @example
        * <script>
        * var x = undefined;
        * var car = { wheels: true };
        * console.log(evoke.core.isUndefinedNullEmpty(x)); // true
        * console.log(evoke.core.isUndefinedNullEmpty(car.wheels)); // false
        * console.log(evoke.core.isUndefinedNullEmpty(car.wings)); // true
        * console.log(evoke.core.isUndefinedNullEmpty(car.wings.swept)); //EXCEPTION! You can't pass a property of car.wings because car.wings is undefined
        * console.log(evoke.core.isUndefinedNullEmpty(asdf)); //EXCEPTION! Because asdf has never been defined. In this case you must first check typeof(asdf) != "undefined"
        * </script>
        */
        isUndefinedNullEmpty: isUndefinedNullEmpty,
        /**
        * See {@link evoke.core.isUndefinedNullEmpty}
        * @memberof evoke.core
        * @function isUNE
        * @param {object} obj
        * @returns {boolean}
        */
        isUNE: isUndefinedNullEmpty,
        /**
        * Gets the script element whose src attribute matches the regular expression provided.
        * @memberof evoke.core
        * @function getScript
        * @param {RegExp} regex A regular expression which matches the script src attribute to get.
        * @returns {object} The HTML script object.
        * @example
        * var script = evoke.core.getScript(/^.*jquery.*$/); //returns any script with "jquery" in it's src attribute
        */
        getScript: function (regex) {
            return getScript(regex);
        },
        /**
        * Loads a script, appending it to a designated element, and executes a callback when the script finishes loading
        * @memberof evoke.core
        * @function loadScript
        * @param {string} url The URL of the script to load.
        * @param {object|string} [appendTo=head] An object to append the script to or "body" to append to document body. Defaults to <code>&lt;head&gt;</code>.
        * @param {function} [callback] A function to execute after the script has completed loading.
        * @example
        * evoke.core.loadScript("//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js");
        */
        loadScript: function (url, appendTo, callback) {
            loadScript(url, appendTo, callback);
        },
        /**
        * Compares a version number to another version number to determine which is higher.
        * @memberof evoke.core
        * @function isHigherVersion
        * @param {number|string} version The version number.
        * @param {number|string} compareTo The version number to compare to.
        * @example
        * if (evoke.core.isHigherVersion("2.1.4", jQuery.fn.jquery)) {
        *   evoke.core.loadScript("//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js");
        * }
        */
        isHigherVersion: function (version, compareTo) {
            return isHigherVersion(version, compareTo);
        },
        /**
        * Detects if the page is embedded in a frame and, if so, escapes it by setting the window.top.location to the frame's location
        * @memberof evoke.core
        * @function escapeFrame
        * @example
        * evoke.core.escapeFrame();
        */
        escapeFrame: function () {
            try {
                if (window.self != window.top) {
                    window.top.location = window.location.href;
                } 
            } catch (ex) { }
        },
        /**
        * Performs a shallow copy of object into target, similar to <code>jQuery.extend</code>
        * @memberof evoke.core
        * @function extend
        * @param {object} target The target object.
        * @param {object} obj The object to copy into target.
        * @example
        * var obj1 = { first: "John", last: "Doe" };
        * evoke.core.extend(obj1, { first: "Jane", phone: "555-321-8712" }); // obj1 = { first: "Jane", last: "Doe", phone: "555-321-8712" }
        */
        extend: function (target, obj) {
            for (var memName in obj) {
                target[memName] = obj[memName];
            }
        },
        
        /**
        * Returns the width of the window, including the scrollbar width, for matching media queries. $(window).width() does not include the scrollbar width.
        * @memberof evoke.core
        * @function windowWidth
        */
        windowWidth: function () {
            return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        },

        /**
        * Returns a GUID (v4) using Math.random().
        * @memberof evoke.core
        * @function guid
        * @example
        * var g = evoke.core.guid();
        */
        guid: function () {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        },

        /**
        * Generates a random number between min and max
        * @memberof evoke.core
        * @function getRandomInt
        * @param {number} min The inclusive minimum value for the generated number.
        * @param {number} max The exclusice maximum value for the generated number.
        * @param {boolean} [maxInclusive] If true, the maximum value is inclusive.
        * @example
        * var r1 = evoke.core.getRandomInt(1, 11); //returns a number between 1 and 10
        * var r2 = evoke.core.getRandomInt(1, 10, true); //returns a number between 1 and 10
        */
        getRandomInt: function (min, max, maxInclusive) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + (maxInclusive === true ? 1 : 0))) + min;
        },
        /**
        * See {@link evoke.core.getRandomInt}
        * @memberof evoke.core
        * @function random
        * @param {number} min
        * @param {number} max
        * @param {boolean} [maxInclusive]
        */
        random: function (min, max, maxInclusive) {
            return evoke.core.getRandomInt(min, max, maxInclusive);
        },

        /**
        * Retrives JSON data and the caches it
        * @memberof evoke.core
        * @function loadJson
        * @param {string} url The url of the JSON data
        * @param {function} callback A callback function to execute. The JSON data will be passed to this function as the first parameter
        * @returns {Array} If the JSON data was already loaded and a callback was not given, returns the data
        */
        loadJson: loadJson,

        onWindowLoad: onWindowLoad
    }
})();

/**
 * @namespace evoke.core.console
 * @memberof evoke.core
 */
evoke.core.console = (function () {
    var defaultEnabledDomains = ["localhost", ".local."];
    var enabledDomains = ["localhost", ".local."];
    var enabled = evoke.settings.core.console.enabled;
    var isMobile = navigator.userAgent.toLowerCase().match(/^.*(iphone|ipod|ipad|android|blackberry|bb10|playbook|midp|cldc).*$/);
    var hasConsole = (typeof (console) != "undefined" && typeof (console.log) == "function");
    var hasWarn = (typeof (console) != "undefined" && typeof (console.warn) == "function");
    var hasError = (typeof (console) != "undefined" && typeof (console.error) == "function");
    var isLocal = location.hostname.toLowerCase().indexOf("localhost") != -1 || location.hostname.toLowerCase().indexOf(".local.") != -1;
    function isEnabled() {
        if (enabled) {
            return true;
        } else {
            for (var i = 0; i < enabledDomains.length; i++) {
                if (location.hostname.toLowerCase().indexOf(enabledDomains[i].toLowerCase()) != -1) {
                    enabled = true;
                    break;
                }
            }
            return enabled;
        }
    }
    function log(message) {
        if (isEnabled() && (isLocal || !isMobile || evoke.settings.core.console.mobileEnabled) && hasConsole) {
            if (evoke.settings.core.console.objectToString && typeof (message) == "object") {
                console.log(objectToString(message));
            } else {
                console.log(message);
            }
        }
    }
    function warn(message) {
        if (isEnabled() && (isLocal || !isMobile || evoke.settings.core.console.mobileEnabled)) {
            if (hasWarn) {
                console.warn(message);
            } else {
                log(message);
            }
        }
    }
    function error(message) { 
        if (isEnabled() && (isLocal || !isMobile || evoke.settings.core.console.mobileEnabled)) {
            if (hasError) {
                console.error(message);
            } else if (hasConsole) {
                log(message);
            }
        }
    }
    function objectToString(obj, index) {
        var tabCount = index || 0;
        var tabs = "";
        for (var i = 0; i < tabCount; i++) {
            tabs += "  ";
        }
        var str = "{\n\r";
        var memCount = 0;
        for (var mem in obj) {
            memCount++;
            switch (typeof (obj[mem])) {
                case "object":
                    if (obj[mem] === null) {
                        str += (tabs + "  " + mem + ": null,\n\r");
                    } else {
                        str += (tabs + "  " + mem + ": ");
                        if (obj[mem] instanceof Array) {
                            str += "[ ";
                            for (var i = 0; i < obj[mem].length; i++) {
                                switch (typeof (obj[mem][i])) {
                                    case "object":
                                        str += (objectToString(obj[mem][i], tabCount + 1));
                                        str = str.substr(0, str.length - 3);
                                        str += ", ";
                                        break;
                                    case "string":
                                        str += ("\"" + obj[mem][i] + "\", ");
                                        break;
                                    default:
                                        str += (obj[mem][i] + ", ");
                                        break;
                                }
                            }
                            str = str.substr(0, str.length - 2);
                            str += " ],\n\r"
                        } else {
                            str += (objectToString(obj[mem], tabCount + 1));
                        }
                    }
                    break;
                case "string":
                    str += (tabs + "  " + mem + ": \"" + obj[mem] + "\",\n\r");
                    break;
                default:
                    str += (tabs + "  " + mem + ": " + obj[mem] + ",\n\r");
                    break;
            }
        }
        if (memCount > 0) {
            str = str.substr(0, str.length - 3);
            str += "\n\r";
            str += (tabs + "},\n\r");
        } else {
            str += (tabs + "},\n\r");
        }
        if (tabCount == 0) {
            return str.substr(0, str.length - 3);
        } else {
            return str;
        }
    }

    return {
        /**
        * Gets/sets the default list of domains which will always output messages to the log.
        * @memberof evoke.core.console
        * @function enabledDomains
        * @param {Array|String} [domains] The domains to add
        */
        enabledDomains: function (domains) {
            if (domains != undefined && domains != null) {
                if (typeof (domains) == "string") {
                    enabledDomains = [domains];
                    defaultEnabledDomains.copyTo(enabledDomains);
                } else if (domains instanceof Array) {
                    enabledDomains = domains.slice();
                    defaultEnabledDomains.copyTo(enabledDomains);
                }
            }
            return enabledDomains;
        },
        /**
        * Enables console logging. Logging will be enabled automatically if the domain is "localhost" or contains ".local."
        * @memberof evoke.core.console
        * @function enable
        */
        enable: function () {
            enabled = true;
        },
        /**
        * If {@link evoke.core.console.enable|enabled}, writes a message to the console if the browser supports <code>console.log</code>.
        * @memberof evoke.core.console
        * @function log
        * @param {String} message The message to write to the console.
        * @example
        * evoke.core.console.log("Hello World!");
        */
        log: log,
        error: error,
        warn: warn
    };
})();

/**
 * @namespace evoke.core.requires
 * @memberof evoke.core
 */
evoke.core.requires = (function () {
    var timeout = 10000;
    var requireThreads = [];
    function exists(obj) {
        switch (typeof (obj)) {
            case "undefined":
                return false;
                break;
            case "object":
                if (!obj) return false; //null
                else return true;
                break;
            case "boolean":
                if (obj === true) return true;
                else return false;
                break;
            case "string":
                var flag = false;
                try {
                    flag = exists(eval(obj));
                } catch (ex) {
                }
                return flag;
                break;
            case "function":
                return true;
                break;
            default:
                return false;
                break;
        }
    }
    function hasDependencies(dependencies) {
        if (dependencies instanceof Array) {
            var flag = false;
            for (var i = 0; i < dependencies.length; i++) {
                flag = exists(dependencies[i]);
                if (!flag) {
                    return false;
                }
            }
            return true;
        } else {
            return exists(dependencies);
        }
    }
    function require(dependencies, callback, onTimeout, threadID) {
        if (hasDependencies(dependencies)) {
            if (typeof (callback) == "function") {
                callback();
            }
        } else {
            var id = threadID;
            if (typeof (threadID) == "undefined") {
                id = Math.random().toString();
                requireThreads[id] = 0;
            } else {
                requireThreads[id] = requireThreads[id] + 1;
            }
            if (requireThreads[id] < timeout / 100) {
                window.setTimeout(function () {
                    require(dependencies, callback, onTimeout, id);
                }, 100);
            } else {
                if (typeof (onTimeout) == "function") {
                    onTimeout();
                } else {
                    evoke.core.console.log("evoke.core.requires.require: timeout (" + dependencies.toString() + ")");
                }
            }
        }
    }


    return {
        /**
        * Gets/sets the timeout in milliseconds used in {@link evoke.core.requires.require}.
        * @memberof evoke.core.requires
        * @function timeout
        * @param {number} [milliseconds] The timeout in millisecods.
        * @returns {number} The timeout in milliseconds.
        * @example
        * evoke.core.require.timeout(30000);
        * var timeout = evoke.core.requires.timeout(); //returns 30000
        */
        timeout: function (milliseconds) {
            if (milliseconds !== undefined) {
                if (typeof (milliseconds == "string")) {
                    timeout = parseInt(milliseconds, 10);
                } else {
                    timeout = milliseconds;
                }
            }
            return timeout;
        },
        /**
        * Checks if a dependency/dependencies exists.
        * @memberof evoke.core.requires
        * @function hasDependencies
        * @param {string|Array} dependencies A string or an array of strings which will be evaluated to determine if the dependency/dependencies exist.
        * @returns {boolean} True is the dependencies exist. Otherwise false.
        * @example
        * if (!evoke.core.requires.require("jQuery")) {
        *  //do something
        * }
        */
        hasDependencies: function (dependencies) {
            return hasDependencies(dependencies);
        },
        /**
        * Executes a callback function after a dependency/dependencies is found. Executes onTimeout if the timeout is reached before the dependency/dependencies exist.
        * @memberof evoke.core.requires
        * @function require
        * @param {string|Array} dependencies A string or an array of strings which will be evaluated to determine if the dependency/dependencies exist.
        * @param {function} callback A function to execute when the dependencies exist.
        * @param {function} [onTimeout] A function to execute if the timeout is reached before the dependencies exist.
        * @example
        * evoke.core.requires.require("jQuery",
        *   function() {
        *       $(document).ready(function() {
        *           //do something
        *       });
        *   },
        *   function() {
        *       //do something else
        *   }
        * );
        */
        require: function (dependencies, callback, onTimeout) {
            require(dependencies, callback, onTimeout);
        }
    };
})();

/**
 * @namespace evoke.core.events
 * @memberof evoke.core
 */
evoke.core.events = (function () {
    var queue = {};
    function on(eventName, callback, args) {
        if (typeof (callback) == "function") {
            if (queue[eventName] == undefined) {
                queue[eventName] = [{
                    callback: callback,
                    args: args
                }];
            } else {
                var callbackAlreadyAdded = false;
                for (var i = 0; i < queue[eventName].length; i++) {
                    if (queue[eventName][i].callback == callback) {
                        callbackAlreadyAdded = true;
                        break;
                    }
                }
                if (!callbackAlreadyAdded) {
                    queue[eventName].push({
                        callback: callback,
                        args: args
                    });
                }
            }
        }
    }
    function off(eventName, callback) {
        if (typeof (callback) == "function") {
            if (queue[eventName] != undefined) {
                var keep = [];
                for (var i = 0; i < queue[eventName].length; i++) {
                    if (queue[eventName][i].callback != callback) {
                        keep.push(queue[eventName][i]);
                    }
                }
                queue[eventName] = keep;
            }
        }
    }
    function trigger() {
        var callbacks = queue[arguments[0]];
        var args = [].slice.call(arguments).slice(1);
        var callbackArgs = [];
        if (callbacks != undefined) {
            for (var i = 0; i < callbacks.length; i++) {
                callbackArgs = args.slice();
                if (typeof (callbacks[i].args) != "undefined" && callbacks[i].args != null) {
                    callbackArgs.push(callbacks[i].args);
                }
                try {
                    callbacks[i].callback.apply(null, callbackArgs);
                } catch (ex) {
                    throw ex;
                }
            }
        }
    }
    function callback(eventName) {
        return function () {
            trigger.apply(null, [eventName].concat([].slice.call(arguments)));
        }
    }
    return {
        /**
        * Adds an event to the queue
        * @memberof evoke.core.events
        * @function on
        * @param {String} eventName The name of the event
        * @param {function} callback The callback function
        * @param {*} [args] Arguments to be passed when the callback is executed. Will be passed as the last argument.
        * @example
        * <script>
        * evoke.core.events.on("myevent", function() { console.log(arguments); });
        * </script>
        */
        on: on,
        /**
        * Removes an event from the queue
        * @memberof evoke.core.events
        * @function off
        * @param {String} eventName The name of the event
        * @param {function} callback The callback function. Cannot be anonymous
        * @example
        * <script>
        * function doSomething() { }
        * evoke.core.events.on("myevent", doSomething);
        * evoke.core.events.off("myevent", doSomething);
        * </script>
        */
        off: off,
        /**
        * Triggers a queued event
        * @memberof evoke.core.events
        * @function trigger
        * @param {String} eventName The name of the event
        * @param {*} args Any number of arguments to pass to the queued callback functions
        * @example
        * <script>
        * evoke.core.events.trigger("myevent", "param1", { name: "param2" });
        * </script>
        */
        trigger: trigger,
        /**
        * Returns a callback function which will execute all queued callbacks for a given eventName
        * @memberof evoke.core.events
        * @function callback
        * @param {String} eventName The name of the event
        * @param {*} args Any number of arguments to pass to the queued callback functions
        * @example
        * <script>
        * var callback = evoke.core.events.callback("myevent");
        * callback("param1", { name: "param2" });
        * </script>
        */
        callback: callback
    }
})();

if (evoke.settings.core.escapeFrame) {
    evoke.core.escapeFrame();
}