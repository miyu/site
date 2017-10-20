/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = subtract;

/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function subtract(out, a, b) {
    out[0] = a[0] - b[0]
    out[1] = a[1] - b[1]
    out[2] = a[2] - b[2]
    return out
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = cross;

/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
    var ax = a[0], ay = a[1], az = a[2],
        bx = b[0], by = b[1], bz = b[2]

    out[0] = ay * bz - az * by
    out[1] = az * bx - ax * bz
    out[2] = ax * by - ay * bx
    return out
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (ns) {
  var logger = (0, _debug2.default)(ns);
  var scope = { log: logger };
  function internal(fn) {
    if (_debug2.default.enabled(ns)) {
      fn.call(scope, logger);
    }
  }
  internal.logger = logger;
  return internal;
};

var _debug = __webpack_require__(15);

var _debug2 = _interopRequireDefault(_debug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = normalize;

/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */
function normalize(out, a) {
    var x = a[0],
        y = a[1],
        z = a[2]
    var len = x*x + y*y + z*z
    if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len)
        out[0] = a[0] * len
        out[1] = a[1] * len
        out[2] = a[2] * len
    }
    return out
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = dot;

/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_typed_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_typed_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_typed_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__GraphDemo__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ColorManager__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_scss__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__style_scss__);



var engine = window;
var whiteColorScheme = new __WEBPACK_IMPORTED_MODULE_2__ColorManager__["b" /* ColorScheme */]([0, 0, 0], 'linear-gradient(0deg, rgba(255, 255, 255, $a1) 0%, rgba(255, 255, 255, $a2) 100%)', function (v) { return v; }, function (v) { return v; });
var blackColorScheme = new __WEBPACK_IMPORTED_MODULE_2__ColorManager__["b" /* ColorScheme */]([255, 255, 255], 'linear-gradient(0deg, rgba(0, 0, 0, $a1) 0%, rgba(0, 0, 0, $a2) 100%)', function (v) { return v; }, function (v) { return v; });
var blueGradientColorScheme = new __WEBPACK_IMPORTED_MODULE_2__ColorManager__["b" /* ColorScheme */]([255, 255, 255], 'dummy, replaced on render', function (v) { return v; }, function (v) { return v; });
var darkBlueGradientColorScheme = new __WEBPACK_IMPORTED_MODULE_2__ColorManager__["b" /* ColorScheme */]([255, 255, 255], 'linear-gradient(0deg, rgba(52, 73, 94, $a1) 0%, rgba(44, 62, 80, $a2) 100%)', function (v) { return v; }, function (v) { return v; });
var greenGradientColorScheme = new __WEBPACK_IMPORTED_MODULE_2__ColorManager__["b" /* ColorScheme */]([255, 255, 255], 'linear-gradient(0deg, rgba(46, 204, 113, $a1) 0%, rgba(39, 174, 96, $a2) 100%)', function (v) { return v; }, function (v) { return v; });
var purpleGradientColorScheme = new __WEBPACK_IMPORTED_MODULE_2__ColorManager__["b" /* ColorScheme */]([255, 255, 255], 'linear-gradient(0deg, rgba(155, 89, 182, $a1) 0%, rgba(142, 68, 173, $a2) 100%)', function (v) { return v; }, function (v) { return v; });
var colorManager = new __WEBPACK_IMPORTED_MODULE_2__ColorManager__["a" /* ColorManager */](blackColorScheme);
colorManager.push(blueGradientColorScheme);

window.addEventListener('load', main);
function main() {
    var demo = new __WEBPACK_IMPORTED_MODULE_1__GraphDemo__["a" /* GraphDemo */]();
    engine.init(1280, 720, 60);
    engine.onTickEnter(tick);
    engine.onFrameEnter(render);
    window.addEventListener('resize', handleResize);
    window.addEventListener('resizestart', handleResize);
    window.addEventListener('resizeend', handleResize);
    var isFirstTick = true;
    function tick(dt, t) {
        if (isFirstTick) {
            isFirstTick = false;
            firstTick();
        }
        demo.tick(dt, t);
    }
    function firstTick() {
        handleResize();
        engine.displayCanvas.className = 'render-view';
        var throwaway = new __WEBPACK_IMPORTED_MODULE_0_typed_js___default.a('.whoami', {
            strings: [
                'Software Engineer',
                'UW Seattle CSE \'18',
                'Builds Games',
                'Builds Robots',
                'Software Engineer'
            ],
            typeSpeed: 50,
            backSpeed: 20,
            loop: false,
            cursorChar: '|'
        });
        document.getElementById('resume-link').addEventListener('mouseover', function () { return colorManager.push(purpleGradientColorScheme); });
        document.getElementById('resume-link').addEventListener('mouseleave', function () { return colorManager.push(blueGradientColorScheme); });
        document.getElementById('github-link').addEventListener('mouseover', function () { return colorManager.push(greenGradientColorScheme); });
        document.getElementById('github-link').addEventListener('mouseleave', function () { return colorManager.push(blueGradientColorScheme); });
        document.getElementById('linkedin-link').addEventListener('mouseover', function () { return colorManager.push(darkBlueGradientColorScheme); });
        document.getElementById('linkedin-link').addEventListener('mouseleave', function () { return colorManager.push(blueGradientColorScheme); });
    }
    function render(dt, t) {
        updateBlueGradientBackground();
        colorManager.render(dt);
        demo.render(dt, t);
        var ctx = engine.displayCanvas.getContext('2d');
        ctx.fillStyle = colorManager.computeForegroundColor(1);
        ctx.fillText("MTE " + engine.computeMeanTickExecutionTime() + "ms", 0, 100);
        ctx.fillText("MRE " + engine.computeMeanRenderExecutionTime() + "ms ", 0, 110);
        ctx.fillText("MRI " + engine.computeMeanRenderInterval() + "ms", 0, 120);
        ctx.fillText("FPS ~" + 1 / engine.computeMeanRenderInterval(), 0, 130);
        ctx.fillText("RES " + engine.getScreenRect().width + " x " + engine.getScreenRect().height, 0, 140);
    }
    function handleResize() {
        engine.setDisplaySize(document.body.clientWidth, document.body.clientHeight);
    }
    function updateBlueGradientBackground() {
        var screenRect = engine.getScreenRect();
        var e1 = [0, screenRect.y + screenRect.height * 2 / 5];
        var e2 = [screenRect.x + screenRect.width, screenRect.y + screenRect.height * 3 / 5];
        var theta = engine.atan2(engine.sub(e2, e1)) + 0.5 * Math.PI;
        blueGradientColorScheme.s = "linear-gradient(" + theta * 180 / Math.PI + "deg, rgba(77, 154, 184, $a1) -5%, rgba(70, 58, 132, $a2) 95%)";
    }
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * 
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.6
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Typed"] = factory();
	else
		root["Typed"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _initializerJs = __webpack_require__(1);
	
	var _htmlParserJs = __webpack_require__(3);
	
	/**
	 * Welcome to Typed.js!
	 * @param {string} elementId HTML element ID _OR_ HTML element
	 * @param {object} options options object
	 * @returns {object} a new Typed object
	 */
	
	var Typed = (function () {
	  function Typed(elementId, options) {
	    _classCallCheck(this, Typed);
	
	    // Initialize it up
	    _initializerJs.initializer.load(this, options, elementId);
	    // All systems go!
	    this.begin();
	  }
	
	  /**
	   * Toggle start() and stop() of the Typed instance
	   * @public
	   */
	
	  _createClass(Typed, [{
	    key: 'toggle',
	    value: function toggle() {
	      this.pause.status ? this.start() : this.stop();
	    }
	
	    /**
	     * Stop typing / backspacing and enable cursor blinking
	     * @public
	     */
	  }, {
	    key: 'stop',
	    value: function stop() {
	      if (this.typingComplete) return;
	      if (this.pause.status) return;
	      this.toggleBlinking(true);
	      this.pause.status = true;
	      this.options.onStop(this.arrayPos, this);
	    }
	
	    /**
	     * Start typing / backspacing after being stopped
	     * @public
	     */
	  }, {
	    key: 'start',
	    value: function start() {
	      if (this.typingComplete) return;
	      if (!this.pause.status) return;
	      this.pause.status = false;
	      if (this.pause.typewrite) {
	        this.typewrite(this.pause.curString, this.pause.curStrPos);
	      } else {
	        this.backspace(this.pause.curString, this.pause.curStrPos);
	      }
	      this.options.onStart(this.arrayPos, this);
	    }
	
	    /**
	     * Destroy this instance of Typed
	     * @public
	     */
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.reset(false);
	      this.options.onDestroy(this);
	    }
	
	    /**
	     * Reset Typed and optionally restarts
	     * @param {boolean} restart
	     * @public
	     */
	  }, {
	    key: 'reset',
	    value: function reset() {
	      var restart = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
	
	      clearInterval(this.timeout);
	      this.replaceText('');
	      if (this.cursor && this.cursor.parentNode) {
	        this.cursor.parentNode.removeChild(this.cursor);
	        this.cursor = null;
	      }
	      this.strPos = 0;
	      this.arrayPos = 0;
	      this.curLoop = 0;
	      if (restart) {
	        this.insertCursor();
	        this.options.onReset(this);
	        this.begin();
	      }
	    }
	
	    /**
	     * Begins the typing animation
	     * @private
	     */
	  }, {
	    key: 'begin',
	    value: function begin() {
	      var _this = this;
	
	      this.typingComplete = false;
	      this.shuffleStringsIfNeeded(this);
	      this.insertCursor();
	      if (this.bindInputFocusEvents) this.bindFocusEvents();
	      this.timeout = setTimeout(function () {
	        // Check if there is some text in the element, if yes start by backspacing the default message
	        if (!_this.currentElContent || _this.currentElContent.length === 0) {
	          _this.typewrite(_this.strings[_this.sequence[_this.arrayPos]], _this.strPos);
	        } else {
	          // Start typing
	          _this.backspace(_this.currentElContent, _this.currentElContent.length);
	        }
	      }, this.startDelay);
	    }
	
	    /**
	     * Called for each character typed
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */
	  }, {
	    key: 'typewrite',
	    value: function typewrite(curString, curStrPos) {
	      var _this2 = this;
	
	      if (this.fadeOut && this.el.classList.contains(this.fadeOutClass)) {
	        this.el.classList.remove(this.fadeOutClass);
	        if (this.cursor) this.cursor.classList.remove(this.fadeOutClass);
	      }
	
	      var humanize = this.humanizer(this.typeSpeed);
	      var numChars = 1;
	
	      if (this.pause.status === true) {
	        this.setPauseStatus(curString, curStrPos, true);
	        return;
	      }
	
	      // contain typing function in a timeout humanize'd delay
	      this.timeout = setTimeout(function () {
	        // skip over any HTML chars
	        curStrPos = _htmlParserJs.htmlParser.typeHtmlChars(curString, curStrPos, _this2);
	
	        var pauseTime = 0;
	        var substr = curString.substr(curStrPos);
	        // check for an escape character before a pause value
	        // format: \^\d+ .. eg: ^1000 .. should be able to print the ^ too using ^^
	        // single ^ are removed from string
	        if (substr.charAt(0) === '^') {
	          if (/^\^\d+/.test(substr)) {
	            var skip = 1; // skip at least 1
	            substr = /\d+/.exec(substr)[0];
	            skip += substr.length;
	            pauseTime = parseInt(substr);
	            _this2.temporaryPause = true;
	            _this2.options.onTypingPaused(_this2.arrayPos, _this2);
	            // strip out the escape character and pause value so they're not printed
	            curString = curString.substring(0, curStrPos) + curString.substring(curStrPos + skip);
	            _this2.toggleBlinking(true);
	          }
	        }
	
	        // check for skip characters formatted as
	        // "this is a `string to print NOW` ..."
	        if (substr.charAt(0) === '`') {
	          while (curString.substr(curStrPos + numChars).charAt(0) !== '`') {
	            numChars++;
	            if (curStrPos + numChars > curString.length) break;
	          }
	          // strip out the escape characters and append all the string in between
	          var stringBeforeSkip = curString.substring(0, curStrPos);
	          var stringSkipped = curString.substring(stringBeforeSkip.length + 1, curStrPos + numChars);
	          var stringAfterSkip = curString.substring(curStrPos + numChars + 1);
	          curString = stringBeforeSkip + stringSkipped + stringAfterSkip;
	          numChars--;
	        }
	
	        // timeout for any pause after a character
	        _this2.timeout = setTimeout(function () {
	          // Accounts for blinking while paused
	          _this2.toggleBlinking(false);
	
	          // We're done with this sentence!
	          if (curStrPos === curString.length) {
	            _this2.doneTyping(curString, curStrPos);
	          } else {
	            _this2.keepTyping(curString, curStrPos, numChars);
	          }
	          // end of character pause
	          if (_this2.temporaryPause) {
	            _this2.temporaryPause = false;
	            _this2.options.onTypingResumed(_this2.arrayPos, _this2);
	          }
	        }, pauseTime);
	
	        // humanized value for typing
	      }, humanize);
	    }
	
	    /**
	     * Continue to the next string & begin typing
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */
	  }, {
	    key: 'keepTyping',
	    value: function keepTyping(curString, curStrPos, numChars) {
	      // call before functions if applicable
	      if (curStrPos === 0) {
	        this.toggleBlinking(false);
	        this.options.preStringTyped(this.arrayPos, this);
	      }
	      // start typing each new char into existing string
	      // curString: arg, this.el.html: original text inside element
	      curStrPos += numChars;
	      var nextString = curString.substr(0, curStrPos);
	      this.replaceText(nextString);
	      // loop the function
	      this.typewrite(curString, curStrPos);
	    }
	
	    /**
	     * We're done typing all strings
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */
	  }, {
	    key: 'doneTyping',
	    value: function doneTyping(curString, curStrPos) {
	      var _this3 = this;
	
	      // fires callback function
	      this.options.onStringTyped(this.arrayPos, this);
	      this.toggleBlinking(true);
	      // is this the final string
	      if (this.arrayPos === this.strings.length - 1) {
	        // callback that occurs on the last typed string
	        this.complete();
	        // quit if we wont loop back
	        if (this.loop === false || this.curLoop === this.loopCount) {
	          return;
	        }
	      }
	      this.timeout = setTimeout(function () {
	        _this3.backspace(curString, curStrPos);
	      }, this.backDelay);
	    }
	
	    /**
	     * Backspaces 1 character at a time
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */
	  }, {
	    key: 'backspace',
	    value: function backspace(curString, curStrPos) {
	      var _this4 = this;
	
	      if (this.pause.status === true) {
	        this.setPauseStatus(curString, curStrPos, true);
	        return;
	      }
	      if (this.fadeOut) return this.initFadeOut();
	
	      this.toggleBlinking(false);
	      var humanize = this.humanizer(this.backSpeed);
	
	      this.timeout = setTimeout(function () {
	        curStrPos = _htmlParserJs.htmlParser.backSpaceHtmlChars(curString, curStrPos, _this4);
	        // replace text with base text + typed characters
	        var curStringAtPosition = curString.substr(0, curStrPos);
	        _this4.replaceText(curStringAtPosition);
	
	        // if smartBack is enabled
	        if (_this4.smartBackspace) {
	          // the remaining part of the current string is equal of the same part of the new string
	          var nextString = _this4.strings[_this4.arrayPos + 1];
	          if (nextString && curStringAtPosition === nextString.substr(0, curStrPos)) {
	            _this4.stopNum = curStrPos;
	          } else {
	            _this4.stopNum = 0;
	          }
	        }
	
	        // if the number (id of character in current string) is
	        // less than the stop number, keep going
	        if (curStrPos > _this4.stopNum) {
	          // subtract characters one by one
	          curStrPos--;
	          // loop the function
	          _this4.backspace(curString, curStrPos);
	        } else if (curStrPos <= _this4.stopNum) {
	          // if the stop number has been reached, increase
	          // array position to next string
	          _this4.arrayPos++;
	          // When looping, begin at the beginning after backspace complete
	          if (_this4.arrayPos === _this4.strings.length) {
	            _this4.arrayPos = 0;
	            _this4.options.onLastStringBackspaced();
	            _this4.shuffleStringsIfNeeded();
	            _this4.begin();
	          } else {
	            _this4.typewrite(_this4.strings[_this4.sequence[_this4.arrayPos]], curStrPos);
	          }
	        }
	        // humanized value for typing
	      }, humanize);
	    }
	
	    /**
	     * Full animation is complete
	     * @private
	     */
	  }, {
	    key: 'complete',
	    value: function complete() {
	      this.options.onComplete(this);
	      if (this.loop) {
	        this.curLoop++;
	      } else {
	        this.typingComplete = true;
	      }
	    }
	
	    /**
	     * Has the typing been stopped
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @param {boolean} isTyping
	     * @private
	     */
	  }, {
	    key: 'setPauseStatus',
	    value: function setPauseStatus(curString, curStrPos, isTyping) {
	      this.pause.typewrite = isTyping;
	      this.pause.curString = curString;
	      this.pause.curStrPos = curStrPos;
	    }
	
	    /**
	     * Toggle the blinking cursor
	     * @param {boolean} isBlinking
	     * @private
	     */
	  }, {
	    key: 'toggleBlinking',
	    value: function toggleBlinking(isBlinking) {
	      if (!this.cursor) return;
	      // if in paused state, don't toggle blinking a 2nd time
	      if (this.pause.status) return;
	      if (this.cursorBlinking === isBlinking) return;
	      this.cursorBlinking = isBlinking;
	      var status = isBlinking ? 'infinite' : 0;
	      this.cursor.style.animationIterationCount = status;
	    }
	
	    /**
	     * Speed in MS to type
	     * @param {number} speed
	     * @private
	     */
	  }, {
	    key: 'humanizer',
	    value: function humanizer(speed) {
	      return Math.round(Math.random() * speed / 2) + speed;
	    }
	
	    /**
	     * Shuffle the sequence of the strings array
	     * @private
	     */
	  }, {
	    key: 'shuffleStringsIfNeeded',
	    value: function shuffleStringsIfNeeded() {
	      if (!this.shuffle) return;
	      this.sequence = this.sequence.sort(function () {
	        return Math.random() - 0.5;
	      });
	    }
	
	    /**
	     * Adds a CSS class to fade out current string
	     * @private
	     */
	  }, {
	    key: 'initFadeOut',
	    value: function initFadeOut() {
	      var _this5 = this;
	
	      this.el.className += ' ' + this.fadeOutClass;
	      if (this.cursor) this.cursor.className += ' ' + this.fadeOutClass;
	      return setTimeout(function () {
	        _this5.arrayPos++;
	        _this5.replaceText('');
	
	        // Resets current string if end of loop reached
	        if (_this5.strings.length > _this5.arrayPos) {
	          _this5.typewrite(_this5.strings[_this5.sequence[_this5.arrayPos]], 0);
	        } else {
	          _this5.typewrite(_this5.strings[0], 0);
	          _this5.arrayPos = 0;
	        }
	      }, this.fadeOutDelay);
	    }
	
	    /**
	     * Replaces current text in the HTML element
	     * depending on element type
	     * @param {string} str
	     * @private
	     */
	  }, {
	    key: 'replaceText',
	    value: function replaceText(str) {
	      if (this.attr) {
	        this.el.setAttribute(this.attr, str);
	      } else {
	        if (this.isInput) {
	          this.el.value = str;
	        } else if (this.contentType === 'html') {
	          this.el.innerHTML = str;
	        } else {
	          this.el.textContent = str;
	        }
	      }
	    }
	
	    /**
	     * If using input elements, bind focus in order to
	     * start and stop the animation
	     * @private
	     */
	  }, {
	    key: 'bindFocusEvents',
	    value: function bindFocusEvents() {
	      var _this6 = this;
	
	      if (!this.isInput) return;
	      this.el.addEventListener('focus', function (e) {
	        _this6.stop();
	      });
	      this.el.addEventListener('blur', function (e) {
	        if (_this6.el.value && _this6.el.value.length !== 0) {
	          return;
	        }
	        _this6.start();
	      });
	    }
	
	    /**
	     * On init, insert the cursor element
	     * @private
	     */
	  }, {
	    key: 'insertCursor',
	    value: function insertCursor() {
	      if (!this.showCursor) return;
	      if (this.cursor) return;
	      this.cursor = document.createElement('span');
	      this.cursor.className = 'typed-cursor';
	      this.cursor.innerHTML = this.cursorChar;
	      this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling);
	    }
	  }]);
	
	  return Typed;
	})();
	
	exports['default'] = Typed;
	module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _defaultsJs = __webpack_require__(2);
	
	var _defaultsJs2 = _interopRequireDefault(_defaultsJs);
	
	/**
	 * Initialize the Typed object
	 */
	
	var Initializer = (function () {
	  function Initializer() {
	    _classCallCheck(this, Initializer);
	  }
	
	  _createClass(Initializer, [{
	    key: 'load',
	
	    /**
	     * Load up defaults & options on the Typed instance
	     * @param {Typed} self instance of Typed
	     * @param {object} options options object
	     * @param {string} elementId HTML element ID _OR_ instance of HTML element
	     * @private
	     */
	
	    value: function load(self, options, elementId) {
	      // chosen element to manipulate text
	      if (typeof elementId === 'string') {
	        self.el = document.querySelector(elementId);
	      } else {
	        self.el = elementId;
	      }
	
	      self.options = _extends({}, _defaultsJs2['default'], options);
	
	      // attribute to type into
	      self.isInput = self.el.tagName.toLowerCase() === 'input';
	      self.attr = self.options.attr;
	      self.bindInputFocusEvents = self.options.bindInputFocusEvents;
	
	      // show cursor
	      self.showCursor = self.isInput ? false : self.options.showCursor;
	
	      // custom cursor
	      self.cursorChar = self.options.cursorChar;
	
	      // Is the cursor blinking
	      self.cursorBlinking = true;
	
	      // text content of element
	      self.elContent = self.attr ? self.el.getAttribute(self.attr) : self.el.textContent;
	
	      // html or plain text
	      self.contentType = self.options.contentType;
	
	      // typing speed
	      self.typeSpeed = self.options.typeSpeed;
	
	      // add a delay before typing starts
	      self.startDelay = self.options.startDelay;
	
	      // backspacing speed
	      self.backSpeed = self.options.backSpeed;
	
	      // only backspace what doesn't match the previous string
	      self.smartBackspace = self.options.smartBackspace;
	
	      // amount of time to wait before backspacing
	      self.backDelay = self.options.backDelay;
	
	      // Fade out instead of backspace
	      self.fadeOut = self.options.fadeOut;
	      self.fadeOutClass = self.options.fadeOutClass;
	      self.fadeOutDelay = self.options.fadeOutDelay;
	
	      // variable to check whether typing is currently paused
	      self.isPaused = false;
	
	      // input strings of text
	      self.strings = self.options.strings.map(function (s) {
	        return s.trim();
	      });
	
	      // div containing strings
	      if (typeof self.options.stringsElement === 'string') {
	        self.stringsElement = document.querySelector(self.options.stringsElement);
	      } else {
	        self.stringsElement = self.options.stringsElement;
	      }
	
	      if (self.stringsElement) {
	        self.strings = [];
	        self.stringsElement.style.display = 'none';
	        var strings = Array.prototype.slice.apply(self.stringsElement.children);
	        var stringsLength = strings.length;
	
	        if (stringsLength) {
	          for (var i = 0; i < stringsLength; i += 1) {
	            var stringEl = strings[i];
	            self.strings.push(stringEl.innerHTML.trim());
	          }
	        }
	      }
	
	      // character number position of current string
	      self.strPos = 0;
	
	      // current array position
	      self.arrayPos = 0;
	
	      // index of string to stop backspacing on
	      self.stopNum = 0;
	
	      // Looping logic
	      self.loop = self.options.loop;
	      self.loopCount = self.options.loopCount;
	      self.curLoop = 0;
	
	      // shuffle the strings
	      self.shuffle = self.options.shuffle;
	      // the order of strings
	      self.sequence = [];
	
	      self.pause = {
	        status: false,
	        typewrite: true,
	        curString: '',
	        curStrPos: 0
	      };
	
	      // When the typing is complete (when not looped)
	      self.typingComplete = false;
	
	      // Set the order in which the strings are typed
	      for (var i in self.strings) {
	        self.sequence[i] = i;
	      }
	
	      // If there is some text in the element
	      self.currentElContent = this.getCurrentElContent(self);
	
	      self.autoInsertCss = self.options.autoInsertCss;
	
	      this.appendAnimationCss(self);
	    }
	  }, {
	    key: 'getCurrentElContent',
	    value: function getCurrentElContent(self) {
	      var elContent = '';
	      if (self.attr) {
	        elContent = self.el.getAttribute(self.attr);
	      } else if (self.isInput) {
	        elContent = self.el.value;
	      } else if (self.contentType === 'html') {
	        elContent = self.el.innerHTML;
	      } else {
	        elContent = self.el.textContent;
	      }
	      return elContent;
	    }
	  }, {
	    key: 'appendAnimationCss',
	    value: function appendAnimationCss(self) {
	      if (!self.autoInsertCss) {
	        return;
	      }
	      if (!self.showCursor || !self.fadeOut) {
	        return;
	      }
	
	      var css = document.createElement('style');
	      css.type = 'text/css';
	      var innerCss = '';
	      if (self.showCursor) {
	        innerCss += '\n        .typed-cursor{\n          opacity: 1;\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ';
	      }
	      if (self.fadeOut) {
	        innerCss += '\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n          -webkit-animation: 0;\n                  animation: 0;\n        }\n      ';
	      }
	      if (css.length === 0) {
	        return;
	      }
	      css.innerHTML = innerCss;
	      document.head.appendChild(css);
	    }
	  }]);
	
	  return Initializer;
	})();
	
	exports['default'] = Initializer;
	var initializer = new Initializer();
	exports.initializer = initializer;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	/**
	 * Defaults & options
	 * @returns {object} Typed defaults & options
	 * @public
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var defaults = {
	  /**
	   * @property {array} strings strings to be typed
	   * @property {string} stringsElement ID of element containing string children
	   */
	  strings: ['These are the default values...', 'You know what you should do?', 'Use your own!', 'Have a great day!'],
	  stringsElement: null,
	
	  /**
	   * @property {number} typeSpeed type speed in milliseconds
	   */
	  typeSpeed: 0,
	
	  /**
	   * @property {number} startDelay time before typing starts in milliseconds
	   */
	  startDelay: 0,
	
	  /**
	   * @property {number} backSpeed backspacing speed in milliseconds
	   */
	  backSpeed: 0,
	
	  /**
	   * @property {boolean} smartBackspace only backspace what doesn't match the previous string
	   */
	  smartBackspace: true,
	
	  /**
	   * @property {boolean} shuffle shuffle the strings
	   */
	  shuffle: false,
	
	  /**
	   * @property {number} backDelay time before backspacing in milliseconds
	   */
	  backDelay: 700,
	
	  /**
	   * @property {boolean} fadeOut Fade out instead of backspace
	   * @property {string} fadeOutClass css class for fade animation
	   * @property {boolean} fadeOutDelay Fade out delay in milliseconds
	   */
	  fadeOut: false,
	  fadeOutClass: 'typed-fade-out',
	  fadeOutDelay: 500,
	
	  /**
	   * @property {boolean} loop loop strings
	   * @property {number} loopCount amount of loops
	   */
	  loop: false,
	  loopCount: Infinity,
	
	  /**
	   * @property {boolean} showCursor show cursor
	   * @property {string} cursorChar character for cursor
	   * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
	   */
	  showCursor: true,
	  cursorChar: '|',
	  autoInsertCss: true,
	
	  /**
	   * @property {string} attr attribute for typing
	   * Ex: input placeholder, value, or just HTML text
	   */
	  attr: null,
	
	  /**
	   * @property {boolean} bindInputFocusEvents bind to focus and blur if el is text input
	   */
	  bindInputFocusEvents: false,
	
	  /**
	   * @property {string} contentType 'html' or 'null' for plaintext
	   */
	  contentType: 'html',
	
	  /**
	   * All typing is complete
	   * @param {Typed} self
	   */
	  onComplete: function onComplete(self) {},
	
	  /**
	   * Before each string is typed
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  preStringTyped: function preStringTyped(arrayPos, self) {},
	
	  /**
	   * After each string is typed
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onStringTyped: function onStringTyped(arrayPos, self) {},
	
	  /**
	   * During looping, after last string is typed
	   * @param {Typed} self
	   */
	  onLastStringBackspaced: function onLastStringBackspaced(self) {},
	
	  /**
	   * Typing has been stopped
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onTypingPaused: function onTypingPaused(arrayPos, self) {},
	
	  /**
	   * Typing has been started after being stopped
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onTypingResumed: function onTypingResumed(arrayPos, self) {},
	
	  /**
	   * After reset
	   * @param {Typed} self
	   */
	  onReset: function onReset(self) {},
	
	  /**
	   * After stop
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onStop: function onStop(arrayPos, self) {},
	
	  /**
	   * After start
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onStart: function onStart(arrayPos, self) {},
	
	  /**
	   * After destroy
	   * @param {Typed} self
	   */
	  onDestroy: function onDestroy(self) {}
	};
	
	exports['default'] = defaults;
	module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	
	/**
	 * TODO: These methods can probably be combined somehow
	 * Parse HTML tags & HTML Characters
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var HTMLParser = (function () {
	  function HTMLParser() {
	    _classCallCheck(this, HTMLParser);
	  }
	
	  _createClass(HTMLParser, [{
	    key: 'typeHtmlChars',
	
	    /**
	     * Type HTML tags & HTML Characters
	     * @param {string} curString Current string
	     * @param {number} curStrPos Position in current string
	     * @param {Typed} self instance of Typed
	     * @returns {number} a new string position
	     * @private
	     */
	
	    value: function typeHtmlChars(curString, curStrPos, self) {
	      if (self.contentType !== 'html') return curStrPos;
	      var curChar = curString.substr(curStrPos).charAt(0);
	      if (curChar === '<' || curChar === '&') {
	        var endTag = '';
	        if (curChar === '<') {
	          endTag = '>';
	        } else {
	          endTag = ';';
	        }
	        while (curString.substr(curStrPos + 1).charAt(0) !== endTag) {
	          curStrPos++;
	          if (curStrPos + 1 > curString.length) {
	            break;
	          }
	        }
	        curStrPos++;
	      }
	      return curStrPos;
	    }
	
	    /**
	     * Backspace HTML tags and HTML Characters
	     * @param {string} curString Current string
	     * @param {number} curStrPos Position in current string
	     * @param {Typed} self instance of Typed
	     * @returns {number} a new string position
	     * @private
	     */
	  }, {
	    key: 'backSpaceHtmlChars',
	    value: function backSpaceHtmlChars(curString, curStrPos, self) {
	      if (self.contentType !== 'html') return curStrPos;
	      var curChar = curString.substr(curStrPos).charAt(0);
	      if (curChar === '>' || curChar === ';') {
	        var endTag = '';
	        if (curChar === '>') {
	          endTag = '<';
	        } else {
	          endTag = '&';
	        }
	        while (curString.substr(curStrPos - 1).charAt(0) !== endTag) {
	          curStrPos--;
	          if (curStrPos < 0) {
	            break;
	          }
	        }
	        curStrPos--;
	      }
	      return curStrPos;
	    }
	  }]);
	
	  return HTMLParser;
	})();
	
	exports['default'] = HTMLParser;
	var htmlParser = new HTMLParser();
	exports.htmlParser = htmlParser;

/***/ })
/******/ ])
});
;

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_quickhull3d__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_quickhull3d___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_quickhull3d__);

var e = window;
var enumerate = e.enumerate;
var zoom = 1.5;
var GraphDemo = (function () {
    function GraphDemo() {
        var _this = this;
        var n = 24;
        this.starts = enumerate(n).map(function () { return _this.randomSpherePoint(0, 0, 0, 1); });
        this.points = this.starts.map(function (p) { return p.map(function (v) { return v; }); });
        this.dest1 = enumerate(n).map(function () { return _this.randomSpherePoint(0, 0, 0, 1); });
        this.dest2 = enumerate(n).map(function () { return _this.randomSpherePoint(0, 0, 0, 1); });
        this.offscreenRenderContext = e.createDisplaySizedRenderContext();
        this.highlights = enumerate(3).map(function (i) { return [i, 0]; });
    }
    GraphDemo.prototype.tick = function (dt, t) {
        for (var i = 0; i < this.points.length; i++) {
            var p = this.points[i];
            var d1 = this.dest1[i];
            var d2 = this.dest2[i];
            var distPd1 = e.dist(p, d1);
            var distPd2 = e.dist(p, d2);
            var d2Strength = 0.5 * (distPd2 / (distPd1 + distPd2));
            var delta = e.lerp(e.normalize(e.sub(d1, p)), e.normalize(e.sub(d2, p)), d2Strength);
            if (distPd1 < 0.1) {
                this.starts[i] = p.map(function (v) { return v; });
                this.dest1[i] = d2;
                this.dest2[i] = this.randomSpherePoint(0, 0, 0, 1);
            }
            this.points[i] = e.add(p, e.mul(delta, 0.1 * dt));
        }
    };
    GraphDemo.prototype.render = function (dt, t) {
        var screenRect = e.getScreenRect();
        e.clear();
        var oscillatePoint = function (world) {
            var oscillate = 2;
            return [
                world[0] + oscillate * 0.006 * Math.sin(1.0 * t + world[1] * 4.0 + world[2] * 2.3)
                    + oscillate * 0.010 * Math.sin(0.2 * t + world[1] * 2.7 + world[2] * 3.0),
                world[1] + oscillate * 0.012 * Math.sin(0.8 * t + world[2] * 4.0 + world[0] * 2.3)
                    + oscillate * 0.014 * Math.sin(0.3 * t + world[2] * 2.7 + world[0] * 3.0),
                world[2] + oscillate * 0.01 * Math.sin(0.5 * t + world[0] * 4.0 + world[1] * 2.3)
                    + oscillate * 0.01 * Math.sin(0.2 * t + world[0] * 2.7 + world[1] * 3.0)
            ];
        };
        var pointToScale = function (world) {
            var dist = (world[2] + 1) / 2;
            return (1 - dist) * 0.9 + 0.1;
        };
        var pointToScreen = function (world) {
            var scale = pointToScale(world);
            var smallerDimension = Math.min(screenRect.width, screenRect.height);
            var screenScale = [smallerDimension, smallerDimension];
            var screenOffset = e.mul(e.sub([screenRect.width, screenRect.height], screenScale), 0.5);
            return e.add(screenOffset, e.cmul(screenScale, [
                (world[0] * scale * zoom + 1) / 2,
                (world[1] * scale * zoom + 1) / 2
            ]));
        };
        var pointToScreenRect = function (world) {
            var scale = pointToScale(world);
            var center = pointToScreen(world);
            var pointScale = 5;
            return e.makeRectangle(center[0] - pointScale * scale, center[1] - pointScale * scale, pointScale * 2 * scale, pointScale * 2 * scale);
        };
        var oscillatedPoints = this.points.map(oscillatePoint);
        var screenPoints = oscillatedPoints.map(pointToScreen);
        var screenRects = oscillatedPoints.map(pointToScreenRect);
        var alphas = oscillatedPoints.map(function (p) { return Math.pow(pointToScale(p), 2) * 0.38 + 0.02; });
        var renderEdge = function (i, j) {
            var p1 = screenPoints[i];
            var p2 = screenPoints[j];
            var r1 = screenRects[i];
            var r2 = screenRects[j];
            var perp = e.normalize(e.perp(e.sub(p2, p1)));
            var perp1 = e.mul(perp, 0.25 * r1.width / 2);
            var perp2 = e.mul(perp, 0.25 * r2.width / 2);
            var poly = [
                e.add(p1, perp1),
                e.sub(p1, perp1),
                e.sub(p2, perp2),
                e.add(p2, perp2)
            ];
            e.setCompositeOperation('hard-light');
            var stroke = e.createLinearGradient(p1, p2, "rgba(255, 255, 255, " + alphas[i] + ")", "rgba(255, 255, 255, " + alphas[j] + ")");
            e.fillPoly(stroke, poly);
        };
        var hull = __WEBPACK_IMPORTED_MODULE_0_quickhull3d___default()(this.points);
        hull.forEach(function (_a) {
            var i1 = _a[0], i2 = _a[1], i3 = _a[2];
            renderEdge(i1, i2);
            renderEdge(i2, i3);
            renderEdge(i3, i1);
        });
        this.highlights = this.highlights.map(function (_a) {
            var i = _a[0], t = _a[1];
            if (i >= hull.length || t - dt < 0) {
                i = e.randomInt(0, hull.length);
                t = Math.random() * 2 + 0.2;
            }
            var alpha = t > 1 ? 0 : e.lerp(0, 0.08, t);
            var highlightTriangle = hull[i].map(function (ind) { return screenPoints[ind]; });
            e.fillPoly("rgba(255, 255, 255, " + alpha + ")", highlightTriangle);
            return [i, t - dt];
        });
        e.setCompositeOperation('hard-light');
        e.zip(screenRects, alphas, function (rect, alpha) { return e.fillEllipse("rgba(255, 255, 255, 255)", rect); });
        e.zip(e.enumerate(screenPoints), screenRects, function (_a, rect) {
            var i = _a[0], p = _a[1];
        });
    };
    GraphDemo.prototype.randomUnitCubePoint = function () {
        return [
            Math.random() * 2 - 1,
            Math.random() * 2 - 1,
            Math.random() * 2 - 1
        ];
    };
    GraphDemo.prototype.randomSpherePoint = function (x0, y0, z0, radius) {
        var u = Math.random();
        var v = Math.random();
        var theta = 2 * Math.PI * u;
        var phi = Math.acos(2 * v - 1);
        var x = x0 + (radius * Math.sin(phi) * Math.cos(theta));
        var y = y0 + (radius * Math.sin(phi) * Math.sin(theta));
        var z = z0 + (radius * Math.cos(phi));
        return [x, y, z];
    };
    return GraphDemo;
}());



/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = runner;

var _QuickHull = __webpack_require__(10);

var _QuickHull2 = _interopRequireDefault(_QuickHull);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function runner(points) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var instance = new _QuickHull2.default(points);
  instance.build();
  return instance.collectFaces(options.skipTriangulation);
}
module.exports = exports['default'];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pointLineDistance = __webpack_require__(11);

var _pointLineDistance2 = _interopRequireDefault(_pointLineDistance);

var _getPlaneNormal = __webpack_require__(14);

var _getPlaneNormal2 = _interopRequireDefault(_getPlaneNormal);

var _debugFn = __webpack_require__(2);

var _debugFn2 = _interopRequireDefault(_debugFn);

var _dot = __webpack_require__(4);

var _dot2 = _interopRequireDefault(_dot);

var _VertexList = __webpack_require__(19);

var _VertexList2 = _interopRequireDefault(_VertexList);

var _Vertex = __webpack_require__(20);

var _Vertex2 = _interopRequireDefault(_Vertex);

var _Face = __webpack_require__(21);

var _Face2 = _interopRequireDefault(_Face);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var debug = (0, _debugFn2.default)('quickhull');

// merge types
// non convex with respect to the large face
var MERGE_NON_CONVEX_WRT_LARGER_FACE = 1;
var MERGE_NON_CONVEX = 2;

var QuickHull = function () {
  function QuickHull(points) {
    _classCallCheck(this, QuickHull);

    if (!Array.isArray(points)) {
      throw TypeError('input is not a valid array');
    }
    if (points.length < 4) {
      throw Error('cannot build a simplex out of <4 points');
    }

    this.tolerance = -1;

    // buffers
    this.nFaces = 0;
    this.nPoints = points.length;

    this.faces = [];
    this.newFaces = [];
    // helpers
    //
    // let `a`, `b` be `Face` instances
    // let `v` be points wrapped as instance of `Vertex`
    //
    //     [v, v, ..., v, v, v, ...]
    //      ^             ^
    //      |             |
    //  a.outside     b.outside
    //
    this.claimed = new _VertexList2.default();
    this.unclaimed = new _VertexList2.default();

    // vertices of the hull(internal representation of points)
    this.vertices = [];
    for (var i = 0; i < points.length; i += 1) {
      this.vertices.push(new _Vertex2.default(points[i], i));
    }
    this.discardedFaces = [];
    this.vertexPointIndices = [];
  }

  _createClass(QuickHull, [{
    key: 'addVertexToFace',
    value: function addVertexToFace(vertex, face) {
      vertex.face = face;
      if (!face.outside) {
        this.claimed.add(vertex);
      } else {
        this.claimed.insertBefore(face.outside, vertex);
      }
      face.outside = vertex;
    }

    /**
     * Removes `vertex` for the `claimed` list of vertices, it also makes sure
     * that the link from `face` to the first vertex it sees in `claimed` is
     * linked correctly after the removal
     *
     * @param {Vertex} vertex
     * @param {Face} face
     */

  }, {
    key: 'removeVertexFromFace',
    value: function removeVertexFromFace(vertex, face) {
      if (vertex === face.outside) {
        // fix face.outside link
        if (vertex.next && vertex.next.face === face) {
          // face has at least 2 outside vertices, move the `outside` reference
          face.outside = vertex.next;
        } else {
          // vertex was the only outside vertex that face had
          face.outside = null;
        }
      }
      this.claimed.remove(vertex);
    }

    /**
     * Removes all the visible vertices that `face` is able to see which are
     * stored in the `claimed` vertext list
     *
     * @param {Face} face
     * @return {Vertex|undefined} If face had visible vertices returns
     * `face.outside`, otherwise undefined
     */

  }, {
    key: 'removeAllVerticesFromFace',
    value: function removeAllVerticesFromFace(face) {
      if (face.outside) {
        // pointer to the last vertex of this face
        // [..., outside, ..., end, outside, ...]
        //          |           |      |
        //          a           a      b
        var end = face.outside;
        while (end.next && end.next.face === face) {
          end = end.next;
        }
        this.claimed.removeChain(face.outside, end);
        //                            b
        //                       [ outside, ...]
        //                            |  removes this link
        //     [ outside, ..., end ] -┘
        //          |           |
        //          a           a
        end.next = null;
        return face.outside;
      }
    }

    /**
     * Removes all the visible vertices that `face` is able to see, additionally
     * checking the following:
     *
     * If `absorbingFace` doesn't exist then all the removed vertices will be
     * added to the `unclaimed` vertex list
     *
     * If `absorbingFace` exists then this method will assign all the vertices of
     * `face` that can see `absorbingFace`, if a vertex cannot see `absorbingFace`
     * it's added to the `unclaimed` vertex list
     *
     * @param {Face} face
     * @param {Face} [absorbingFace]
     */

  }, {
    key: 'deleteFaceVertices',
    value: function deleteFaceVertices(face, absorbingFace) {
      var faceVertices = this.removeAllVerticesFromFace(face);
      if (faceVertices) {
        if (!absorbingFace) {
          // mark the vertices to be reassigned to some other face
          this.unclaimed.addAll(faceVertices);
        } else {
          // if there's an absorbing face try to assign as many vertices
          // as possible to it

          // the reference `vertex.next` might be destroyed on
          // `this.addVertexToFace` (see VertexList#add), nextVertex is a
          // reference to it
          var nextVertex = void 0;
          for (var vertex = faceVertices; vertex; vertex = nextVertex) {
            nextVertex = vertex.next;
            var distance = absorbingFace.distanceToPlane(vertex.point);

            // check if `vertex` is able to see `absorbingFace`
            if (distance > this.tolerance) {
              this.addVertexToFace(vertex, absorbingFace);
            } else {
              this.unclaimed.add(vertex);
            }
          }
        }
      }
    }

    /**
     * Reassigns as many vertices as possible from the unclaimed list to the new
     * faces
     *
     * @param {Faces[]} newFaces
     */

  }, {
    key: 'resolveUnclaimedPoints',
    value: function resolveUnclaimedPoints(newFaces) {
      // cache next vertex so that if `vertex.next` is destroyed it's still
      // recoverable
      var vertexNext = this.unclaimed.first();
      for (var vertex = vertexNext; vertex; vertex = vertexNext) {
        vertexNext = vertex.next;
        var maxDistance = this.tolerance;
        var maxFace = void 0;
        for (var i = 0; i < newFaces.length; i += 1) {
          var face = newFaces[i];
          if (face.mark === _Face.VISIBLE) {
            var dist = face.distanceToPlane(vertex.point);
            if (dist > maxDistance) {
              maxDistance = dist;
              maxFace = face;
            }
            if (maxDistance > 1000 * this.tolerance) {
              break;
            }
          }
        }

        if (maxFace) {
          this.addVertexToFace(vertex, maxFace);
        }
      }
    }

    /**
     * Computes the extremes of a tetrahedron which will be the initial hull
     *
     * @return {number[]} The min/max vertices in the x,y,z directions
     */

  }, {
    key: 'computeExtremes',
    value: function computeExtremes() {
      var me = this;
      var min = [];
      var max = [];

      // min vertex on the x,y,z directions
      var minVertices = [];
      // max vertex on the x,y,z directions
      var maxVertices = [];

      var i = void 0,
          j = void 0;

      // initially assume that the first vertex is the min/max
      for (i = 0; i < 3; i += 1) {
        minVertices[i] = maxVertices[i] = this.vertices[0];
      }
      // copy the coordinates of the first vertex to min/max
      for (i = 0; i < 3; i += 1) {
        min[i] = max[i] = this.vertices[0].point[i];
      }

      // compute the min/max vertex on all 6 directions
      for (i = 1; i < this.vertices.length; i += 1) {
        var vertex = this.vertices[i];
        var point = vertex.point;
        // update the min coordinates
        for (j = 0; j < 3; j += 1) {
          if (point[j] < min[j]) {
            min[j] = point[j];
            minVertices[j] = vertex;
          }
        }
        // update the max coordinates
        for (j = 0; j < 3; j += 1) {
          if (point[j] > max[j]) {
            max[j] = point[j];
            maxVertices[j] = vertex;
          }
        }
      }

      // compute epsilon
      this.tolerance = 3 * Number.EPSILON * (Math.max(Math.abs(min[0]), Math.abs(max[0])) + Math.max(Math.abs(min[1]), Math.abs(max[1])) + Math.max(Math.abs(min[2]), Math.abs(max[2])));
      debug(function () {
        this.log('tolerance %d', me.tolerance);
      });
      return [minVertices, maxVertices];
    }

    /**
     * Compues the initial tetrahedron assigning to its faces all the points that
     * are candidates to form part of the hull
     */

  }, {
    key: 'createInitialSimplex',
    value: function createInitialSimplex() {
      var vertices = this.vertices;

      var _computeExtremes = this.computeExtremes(),
          _computeExtremes2 = _slicedToArray(_computeExtremes, 2),
          min = _computeExtremes2[0],
          max = _computeExtremes2[1];

      var v0 = void 0,
          v1 = void 0,
          v2 = void 0,
          v3 = void 0;
      var i = void 0,
          j = void 0;

      // Find the two vertices with the greatest 1d separation
      // (max.x - min.x)
      // (max.y - min.y)
      // (max.z - min.z)
      var maxDistance = 0;
      var indexMax = 0;
      for (i = 0; i < 3; i += 1) {
        var distance = max[i].point[i] - min[i].point[i];
        if (distance > maxDistance) {
          maxDistance = distance;
          indexMax = i;
        }
      }
      v0 = min[indexMax];
      v1 = max[indexMax];

      // the next vertex is the one farthest to the line formed by `v0` and `v1`
      maxDistance = 0;
      for (i = 0; i < this.vertices.length; i += 1) {
        var vertex = this.vertices[i];
        if (vertex !== v0 && vertex !== v1) {
          var _distance = (0, _pointLineDistance2.default)(vertex.point, v0.point, v1.point);
          if (_distance > maxDistance) {
            maxDistance = _distance;
            v2 = vertex;
          }
        }
      }

      // the next vertes is the one farthest to the plane `v0`, `v1`, `v2`
      // normalize((v2 - v1) x (v0 - v1))
      var normal = (0, _getPlaneNormal2.default)([], v0.point, v1.point, v2.point);
      // distance from the origin to the plane
      var distPO = (0, _dot2.default)(v0.point, normal);
      maxDistance = -1;
      for (i = 0; i < this.vertices.length; i += 1) {
        var _vertex = this.vertices[i];
        if (_vertex !== v0 && _vertex !== v1 && _vertex !== v2) {
          var _distance2 = Math.abs((0, _dot2.default)(normal, _vertex.point) - distPO);
          if (_distance2 > maxDistance) {
            maxDistance = _distance2;
            v3 = _vertex;
          }
        }
      }

      // initial simplex
      // Taken from http://everything2.com/title/How+to+paint+a+tetrahedron
      //
      //                              v2
      //                             ,|,
      //                           ,7``\'VA,
      //                         ,7`   |, `'VA,
      //                       ,7`     `\    `'VA,
      //                     ,7`        |,      `'VA,
      //                   ,7`          `\         `'VA,
      //                 ,7`             |,           `'VA,
      //               ,7`               `\       ,..ooOOTK` v3
      //             ,7`                  |,.ooOOT''`    AV
      //           ,7`            ,..ooOOT`\`           /7
      //         ,7`      ,..ooOOT''`      |,          AV
      //        ,T,..ooOOT''`              `\         /7
      //     v0 `'TTs.,                     |,       AV
      //            `'TTs.,                 `\      /7
      //                 `'TTs.,             |,    AV
      //                      `'TTs.,        `\   /7
      //                           `'TTs.,    |, AV
      //                                `'TTs.,\/7
      //                                     `'T`
      //                                       v1
      //
      var faces = [];
      if ((0, _dot2.default)(v3.point, normal) - distPO < 0) {
        // the face is not able to see the point so `planeNormal`
        // is pointing outside the tetrahedron
        faces.push(_Face2.default.createTriangle(v0, v1, v2), _Face2.default.createTriangle(v3, v1, v0), _Face2.default.createTriangle(v3, v2, v1), _Face2.default.createTriangle(v3, v0, v2));

        // set the opposite edge
        for (i = 0; i < 3; i += 1) {
          var _j = (i + 1) % 3;
          // join face[i] i > 0, with the first face
          faces[i + 1].getEdge(2).setOpposite(faces[0].getEdge(_j));
          // join face[i] with face[i + 1], 1 <= i <= 3
          faces[i + 1].getEdge(1).setOpposite(faces[_j + 1].getEdge(0));
        }
      } else {
        // the face is able to see the point so `planeNormal`
        // is pointing inside the tetrahedron
        faces.push(_Face2.default.createTriangle(v0, v2, v1), _Face2.default.createTriangle(v3, v0, v1), _Face2.default.createTriangle(v3, v1, v2), _Face2.default.createTriangle(v3, v2, v0));

        // set the opposite edge
        for (i = 0; i < 3; i += 1) {
          var _j2 = (i + 1) % 3;
          // join face[i] i > 0, with the first face
          faces[i + 1].getEdge(2).setOpposite(faces[0].getEdge((3 - i) % 3));
          // join face[i] with face[i + 1]
          faces[i + 1].getEdge(0).setOpposite(faces[_j2 + 1].getEdge(1));
        }
      }

      // the initial hull is the tetrahedron
      for (i = 0; i < 4; i += 1) {
        this.faces.push(faces[i]);
      }

      // initial assignment of vertices to the faces of the tetrahedron
      for (i = 0; i < vertices.length; i += 1) {
        var _vertex2 = vertices[i];
        if (_vertex2 !== v0 && _vertex2 !== v1 && _vertex2 !== v3 && _vertex2 !== v3) {
          maxDistance = this.tolerance;
          var maxFace = void 0;
          for (j = 0; j < 4; j += 1) {
            var _distance3 = faces[j].distanceToPlane(_vertex2.point);
            if (_distance3 > maxDistance) {
              maxDistance = _distance3;
              maxFace = faces[j];
            }
          }

          if (maxFace) {
            this.addVertexToFace(_vertex2, maxFace);
          }
        }
      }
    }
  }, {
    key: 'reindexFaceAndVertices',
    value: function reindexFaceAndVertices() {
      // remove inactive faces
      var activeFaces = [];
      for (var i = 0; i < this.faces.length; i += 1) {
        var face = this.faces[i];
        if (face.mark === _Face.VISIBLE) {
          activeFaces.push(face);
        }
      }
      this.faces = activeFaces;
    }
  }, {
    key: 'collectFaces',
    value: function collectFaces(skipTriangulation) {
      var faceIndices = [];
      for (var i = 0; i < this.faces.length; i += 1) {
        if (this.faces[i].mark !== _Face.VISIBLE) {
          throw Error('attempt to include a destroyed face in the hull');
        }
        var indices = this.faces[i].collectIndices();
        if (skipTriangulation) {
          faceIndices.push(indices);
        } else {
          for (var j = 0; j < indices.length - 2; j += 1) {
            faceIndices.push([indices[0], indices[j + 1], indices[j + 2]]);
          }
        }
      }
      return faceIndices;
    }

    /**
     * Finds the next vertex to make faces with the current hull
     *
     * - let `face` be the first face existing in the `claimed` vertex list
     *  - if `face` doesn't exist then return since there're no vertices left
     *  - otherwise for each `vertex` that face sees find the one furthest away
     *  from `face`
     *
     * @return {Vertex|undefined} Returns undefined when there're no more
     * visible vertices
     */

  }, {
    key: 'nextVertexToAdd',
    value: function nextVertexToAdd() {
      if (!this.claimed.isEmpty()) {
        var eyeVertex = void 0,
            vertex = void 0;
        var maxDistance = 0;
        var eyeFace = this.claimed.first().face;
        for (vertex = eyeFace.outside; vertex && vertex.face === eyeFace; vertex = vertex.next) {
          var distance = eyeFace.distanceToPlane(vertex.point);
          if (distance > maxDistance) {
            maxDistance = distance;
            eyeVertex = vertex;
          }
        }
        return eyeVertex;
      }
    }

    /**
     * Computes a chain of half edges in ccw order called the `horizon`, for an
     * edge to be part of the horizon it must join a face that can see
     * `eyePoint` and a face that cannot see `eyePoint`
     *
     * @param {number[]} eyePoint - The coordinates of a point
     * @param {HalfEdge} crossEdge - The edge used to jump to the current `face`
     * @param {Face} face - The current face being tested
     * @param {HalfEdge[]} horizon - The edges that form part of the horizon in
     * ccw order
     */

  }, {
    key: 'computeHorizon',
    value: function computeHorizon(eyePoint, crossEdge, face, horizon) {
      // moves face's vertices to the `unclaimed` vertex list
      this.deleteFaceVertices(face);

      face.mark = _Face.DELETED;

      var edge = void 0;
      if (!crossEdge) {
        edge = crossEdge = face.getEdge(0);
      } else {
        // start from the next edge since `crossEdge` was already analyzed
        // (actually `crossEdge.opposite` was the face who called this method
        // recursively)
        edge = crossEdge.next;
      }

      // All the faces that are able to see `eyeVertex` are defined as follows
      //
      //       v    /
      //           / <== visible face
      //          /
      //         |
      //         | <== not visible face
      //
      //  dot(v, visible face normal) - visible face offset > this.tolerance
      //
      do {
        var oppositeEdge = edge.opposite;
        var oppositeFace = oppositeEdge.face;
        if (oppositeFace.mark === _Face.VISIBLE) {
          if (oppositeFace.distanceToPlane(eyePoint) > this.tolerance) {
            this.computeHorizon(eyePoint, oppositeEdge, oppositeFace, horizon);
          } else {
            horizon.push(edge);
          }
        }
        edge = edge.next;
      } while (edge !== crossEdge);
    }

    /**
     * Creates a face with the points `eyeVertex.point`, `horizonEdge.tail` and
     * `horizonEdge.tail` in ccw order
     *
     * @param {Vertex} eyeVertex
     * @param {HalfEdge} horizonEdge
     * @return {HalfEdge} The half edge whose vertex is the eyeVertex
     */

  }, {
    key: 'addAdjoiningFace',
    value: function addAdjoiningFace(eyeVertex, horizonEdge) {
      // all the half edges are created in ccw order thus the face is always
      // pointing outside the hull
      // edges:
      //
      //                  eyeVertex.point
      //                       / \
      //                      /   \
      //                  1  /     \  0
      //                    /       \
      //                   /         \
      //                  /           \
      //          horizon.tail --- horizon.head
      //                        2
      //
      var face = _Face2.default.createTriangle(eyeVertex, horizonEdge.tail(), horizonEdge.head());
      this.faces.push(face);
      // join face.getEdge(-1) with the horizon's opposite edge
      // face.getEdge(-1) = face.getEdge(2)
      face.getEdge(-1).setOpposite(horizonEdge.opposite);
      return face.getEdge(0);
    }

    /**
     * Adds horizon.length faces to the hull, each face will be 'linked' with the
     * horizon opposite face and the face on the left/right
     *
     * @param {Vertex} eyeVertex
     * @param {HalfEdge[]} horizon - A chain of half edges in ccw order
     */

  }, {
    key: 'addNewFaces',
    value: function addNewFaces(eyeVertex, horizon) {
      this.newFaces = [];
      var firstSideEdge = void 0,
          previousSideEdge = void 0;
      for (var i = 0; i < horizon.length; i += 1) {
        var horizonEdge = horizon[i];
        // returns the right side edge
        var sideEdge = this.addAdjoiningFace(eyeVertex, horizonEdge);
        if (!firstSideEdge) {
          firstSideEdge = sideEdge;
        } else {
          // joins face.getEdge(1) with previousFace.getEdge(0)
          sideEdge.next.setOpposite(previousSideEdge);
        }
        this.newFaces.push(sideEdge.face);
        previousSideEdge = sideEdge;
      }
      firstSideEdge.next.setOpposite(previousSideEdge);
    }

    /**
     * Computes the distance from `edge` opposite face's centroid to
     * `edge.face`
     *
     * @param {HalfEdge} edge
     * @return {number}
     * - A positive number when the centroid of the opposite face is above the
     *   face i.e. when the faces are concave
     * - A negative number when the centroid of the opposite face is below the
     *   face i.e. when the faces are convex
     */

  }, {
    key: 'oppositeFaceDistance',
    value: function oppositeFaceDistance(edge) {
      return edge.face.distanceToPlane(edge.opposite.face.centroid);
    }

    /**
     * Merges a face with none/any/all its neighbors according to the strategy
     * used
     *
     * if `mergeType` is MERGE_NON_CONVEX_WRT_LARGER_FACE then the merge will be
     * decided based on the face with the larger area, the centroid of the face
     * with the smaller area will be checked against the one with the larger area
     * to see if it's in the merge range [tolerance, -tolerance] i.e.
     *
     *    dot(centroid smaller face, larger face normal) - larger face offset > -tolerance
     *
     * Note that the first check (with +tolerance) was done on `computeHorizon`
     *
     * If the above is not true then the check is done with respect to the smaller
     * face i.e.
     *
     *    dot(centroid larger face, smaller face normal) - smaller face offset > -tolerance
     *
     * If true then it means that two faces are non convex (concave), even if the
     * dot(...) - offset value is > 0 (that's the point of doing the merge in the
     * first place)
     *
     * If two faces are concave then the check must also be done on the other face
     * but this is done in another merge pass, for this to happen the face is
     * marked in a temporal NON_CONVEX state
     *
     * if `mergeType` is MERGE_NON_CONVEX then two faces will be merged only if
     * they pass the following conditions
     *
     *    dot(centroid smaller face, larger face normal) - larger face offset > -tolerance
     *    dot(centroid larger face, smaller face normal) - smaller face offset > -tolerance
     *
     * @param {Face} face
     * @param {number} mergeType - Either MERGE_NON_CONVEX_WRT_LARGER_FACE or
     * MERGE_NON_CONVEX
     */

  }, {
    key: 'doAdjacentMerge',
    value: function doAdjacentMerge(face, mergeType) {
      var edge = face.edge;
      var convex = true;
      var it = 0;
      do {
        if (it >= face.nVertices) {
          throw Error('merge recursion limit exceeded');
        }
        var oppositeFace = edge.opposite.face;
        var merge = false;

        // Important notes about the algorithm to merge faces
        //
        // - Given a vertex `eyeVertex` that will be added to the hull
        //   all the faces that cannot see `eyeVertex` are defined as follows
        //
        //      dot(v, not visible face normal) - not visible offset < tolerance
        //
        // - Two faces can be merged when the centroid of one of these faces
        // projected to the normal of the other face minus the other face offset
        // is in the range [tolerance, -tolerance]
        // - Since `face` (given in the input for this method) has passed the
        // check above we only have to check the lower bound e.g.
        //
        //      dot(v, not visible face normal) - not visible offset > -tolerance
        //
        if (mergeType === MERGE_NON_CONVEX) {
          if (this.oppositeFaceDistance(edge) > -this.tolerance || this.oppositeFaceDistance(edge.opposite) > -this.tolerance) {
            merge = true;
          }
        } else {
          if (face.area > oppositeFace.area) {
            if (this.oppositeFaceDistance(edge) > -this.tolerance) {
              merge = true;
            } else if (this.oppositeFaceDistance(edge.opposite) > -this.tolerance) {
              convex = false;
            }
          } else {
            if (this.oppositeFaceDistance(edge.opposite) > -this.tolerance) {
              merge = true;
            } else if (this.oppositeFaceDistance(edge) > -this.tolerance) {
              convex = false;
            }
          }

          if (merge) {
            debug.logger('face merge');
            // when two faces are merged it might be possible that redundant faces
            // are destroyed, in that case move all the visible vertices from the
            // destroyed faces to the `unclaimed` vertex list
            var discardedFaces = face.mergeAdjacentFaces(edge, []);
            for (var i = 0; i < discardedFaces.length; i += 1) {
              this.deleteFaceVertices(discardedFaces[i], face);
            }
            return true;
          }
        }
        edge = edge.next;
        it += 1;
      } while (edge !== face.edge);
      if (!convex) {
        face.mark = _Face.NON_CONVEX;
      }
      return false;
    }

    /**
     * Adds a vertex to the hull with the following algorithm
     *
     * - Compute the `horizon` which is a chain of half edges, for an edge to
     *   belong to this group it must be the edge connecting a face that can
     *   see `eyeVertex` and a face which cannot see `eyeVertex`
     * - All the faces that can see `eyeVertex` have its visible vertices removed
     *   from the claimed VertexList
     * - A new set of faces is created with each edge of the `horizon` and
     *   `eyeVertex`, each face is connected with the opposite horizon face and
     *   the face on the left/right
     * - The new faces are merged if possible with the opposite horizon face first
     *   and then the faces on the right/left
     * - The vertices removed from all the visible faces are assigned to the new
     *   faces if possible
     *
     * @param {Vertex} eyeVertex
     */

  }, {
    key: 'addVertexToHull',
    value: function addVertexToHull(eyeVertex) {
      var horizon = [];

      this.unclaimed.clear();

      // remove `eyeVertex` from `eyeVertex.face` so that it can't be added to the
      // `unclaimed` vertex list
      this.removeVertexFromFace(eyeVertex, eyeVertex.face);
      this.computeHorizon(eyeVertex.point, null, eyeVertex.face, horizon);
      debug(function () {
        this.log('horizon %j', horizon.map(function (edge) {
          return edge.head().index;
        }));
      });
      this.addNewFaces(eyeVertex, horizon);

      debug.logger('first merge');

      // first merge pass
      // Do the merge with respect to the larger face
      for (var i = 0; i < this.newFaces.length; i += 1) {
        var face = this.newFaces[i];
        if (face.mark === _Face.VISIBLE) {
          while (this.doAdjacentMerge(face, MERGE_NON_CONVEX_WRT_LARGER_FACE)) {}
        }
      }

      debug.logger('second merge');

      // second merge pass
      // Do the merge on non convex faces (a face is marked as non convex in the
      // first pass)
      for (var _i = 0; _i < this.newFaces.length; _i += 1) {
        var _face = this.newFaces[_i];
        if (_face.mark === _Face.NON_CONVEX) {
          _face.mark = _Face.VISIBLE;
          while (this.doAdjacentMerge(_face, MERGE_NON_CONVEX)) {}
        }
      }

      debug.logger('reassigning points to newFaces');
      // reassign `unclaimed` vertices to the new faces
      this.resolveUnclaimedPoints(this.newFaces);
    }
  }, {
    key: 'build',
    value: function build() {
      var iterations = 0;
      var eyeVertex = void 0;
      this.createInitialSimplex();
      while (eyeVertex = this.nextVertexToAdd()) {
        iterations += 1;
        debug.logger('== iteration %j ==', iterations);
        debug.logger('next vertex to add = %d %j', eyeVertex.index, eyeVertex.point);
        this.addVertexToHull(eyeVertex);
        debug.logger('end');
      }
      this.reindexFaceAndVertices();
    }
  }]);

  return QuickHull;
}();

exports.default = QuickHull;
module.exports = exports['default'];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * point-line-distance
 *
 * Copyright (c) 2015 Mauricio Poppe
 * Licensed under the MIT license.
 */



var distanceSquared = __webpack_require__(12)

module.exports = function (point, a, b) {
  return Math.sqrt(distanceSquared(point, a, b))
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var subtract = __webpack_require__(0)
var cross = __webpack_require__(1)
var squaredLength = __webpack_require__(13)
var ab = []
var ap = []
var cr = []

module.exports = function (p, a, b) {
  // // == vector solution
  // var normalize = require('gl-vec3/normalize')
  // var scaleAndAdd = require('gl-vec3/scaleAndAdd')
  // var dot = require('gl-vec3/dot')
  // var squaredDistance = require('gl-vec3/squaredDistance')
  // // n = vector `ab` normalized
  // var n = []
  // // projection = projection of `point` on `n`
  // var projection = []
  // normalize(n, subtract(n, a, b))
  // scaleAndAdd(projection, a, n, dot(n, p))
  // return squaredDistance(projection, p)

  // == parallelogram solution
  //
  //            s
  //      __a________b__
  //       /   |    /
  //      /   h|   /
  //     /_____|__/
  //    p
  //
  //  s = b - a
  //  area = s * h
  //  |ap x s| = s * h
  //  h = |ap x s| / s
  //
  subtract(ab, b, a)
  subtract(ap, p, a)
  var area = squaredLength(cross(cr, ap, ab))
  var s = squaredLength(ab)
  if (s === 0) {
    throw Error('a and b are the same point')
  }
  return area / s
}


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = squaredLength;

/**
 * Calculates the squared length of a vec3
 *
 * @param {vec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
    var x = a[0],
        y = a[1],
        z = a[2]
    return x*x + y*y + z*z
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var normalize = __webpack_require__(3)
var sub = __webpack_require__(0)
var cross = __webpack_require__(1)
var tmp = [0, 0, 0]

module.exports = planeNormal

function planeNormal (out, point1, point2, point3) {
  sub(out, point1, point2)
  sub(tmp, point2, point3)
  cross(out, out, tmp)
  return normalize(out, out)
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(17);
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)))

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(18);

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),
/* 18 */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VertexList = function () {
  function VertexList() {
    _classCallCheck(this, VertexList);

    this.head = null;
    this.tail = null;
  }

  _createClass(VertexList, [{
    key: "clear",
    value: function clear() {
      this.head = this.tail = null;
    }

    /**
     * Inserts a `node` before `target`, it's assumed that
     * `target` belongs to this doubly linked list
     *
     * @param {*} target
     * @param {*} node
     */

  }, {
    key: "insertBefore",
    value: function insertBefore(target, node) {
      node.prev = target.prev;
      node.next = target;
      if (!node.prev) {
        this.head = node;
      } else {
        node.prev.next = node;
      }
      target.prev = node;
    }

    /**
     * Inserts a `node` after `target`, it's assumed that
     * `target` belongs to this doubly linked list
     *
     * @param {Vertex} target
     * @param {Vertex} node
     */

  }, {
    key: "insertAfter",
    value: function insertAfter(target, node) {
      node.prev = target;
      node.next = target.next;
      if (!node.next) {
        this.tail = node;
      } else {
        node.next.prev = node;
      }
      target.next = node;
    }

    /**
     * Appends a `node` to the end of this doubly linked list
     * Note: `node.next` will be unlinked from `node`
     * Note: if `node` is part of another linked list call `addAll` instead
     *
     * @param {*} node
     */

  }, {
    key: "add",
    value: function add(node) {
      if (!this.head) {
        this.head = node;
      } else {
        this.tail.next = node;
      }
      node.prev = this.tail;
      // since node is the new end it doesn't have a next node
      node.next = null;
      this.tail = node;
    }

    /**
     * Appends a chain of nodes where `node` is the head,
     * the difference with `add` is that it correctly sets the position
     * of the node list `tail` property
     *
     * @param {*} node
     */

  }, {
    key: "addAll",
    value: function addAll(node) {
      if (!this.head) {
        this.head = node;
      } else {
        this.tail.next = node;
      }
      node.prev = this.tail;

      // find the end of the list
      while (node.next) {
        node = node.next;
      }
      this.tail = node;
    }

    /**
     * Deletes a `node` from this linked list, it's assumed that `node` is a
     * member of this linked list
     *
     * @param {*} node
     */

  }, {
    key: "remove",
    value: function remove(node) {
      if (!node.prev) {
        this.head = node.next;
      } else {
        node.prev.next = node.next;
      }

      if (!node.next) {
        this.tail = node.prev;
      } else {
        node.next.prev = node.prev;
      }
    }

    /**
     * Removes a chain of nodes whose head is `a` and whose tail is `b`,
     * it's assumed that `a` and `b` belong to this list and also that `a`
     * comes before `b` in the linked list
     *
     * @param {*} a
     * @param {*} b
     */

  }, {
    key: "removeChain",
    value: function removeChain(a, b) {
      if (!a.prev) {
        this.head = b.next;
      } else {
        a.prev.next = b.next;
      }

      if (!b.next) {
        this.tail = a.prev;
      } else {
        b.next.prev = a.prev;
      }
    }
  }, {
    key: "first",
    value: function first() {
      return this.head;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return !this.head;
    }
  }]);

  return VertexList;
}();

exports.default = VertexList;
module.exports = exports["default"];

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vertex = function Vertex(point, index) {
  _classCallCheck(this, Vertex);

  this.point = point;
  // index in the input array
  this.index = index;
  // vertex is a double linked list node
  this.next = null;
  this.prev = null;
  // the face that is able to see this point
  this.face = null;
};

exports.default = Vertex;
module.exports = exports["default"];

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DELETED = exports.NON_CONVEX = exports.VISIBLE = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _debugFn = __webpack_require__(2);

var _debugFn2 = _interopRequireDefault(_debugFn);

var _dot = __webpack_require__(4);

var _dot2 = _interopRequireDefault(_dot);

var _add = __webpack_require__(22);

var _add2 = _interopRequireDefault(_add);

var _subtract = __webpack_require__(0);

var _subtract2 = _interopRequireDefault(_subtract);

var _cross = __webpack_require__(1);

var _cross2 = _interopRequireDefault(_cross);

var _copy = __webpack_require__(23);

var _copy2 = _interopRequireDefault(_copy);

var _length = __webpack_require__(24);

var _length2 = _interopRequireDefault(_length);

var _scale = __webpack_require__(25);

var _scale2 = _interopRequireDefault(_scale);

var _scaleAndAdd = __webpack_require__(26);

var _scaleAndAdd2 = _interopRequireDefault(_scaleAndAdd);

var _normalize = __webpack_require__(3);

var _normalize2 = _interopRequireDefault(_normalize);

var _HalfEdge = __webpack_require__(27);

var _HalfEdge2 = _interopRequireDefault(_HalfEdge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var debug = (0, _debugFn2.default)('face');

var VISIBLE = exports.VISIBLE = 0;
var NON_CONVEX = exports.NON_CONVEX = 1;
var DELETED = exports.DELETED = 2;

var Face = function () {
  function Face() {
    _classCallCheck(this, Face);

    this.normal = [];
    this.centroid = [];
    // signed distance from face to the origin
    this.offset = 0;
    // pointer to the a vertex in a double linked list this face can see
    this.outside = null;
    this.mark = VISIBLE;
    this.edge = null;
    this.nVertices = 0;
  }

  _createClass(Face, [{
    key: 'getEdge',
    value: function getEdge(i) {
      if (typeof i !== 'number') {
        throw Error('requires a number');
      }
      var it = this.edge;
      while (i > 0) {
        it = it.next;
        i -= 1;
      }
      while (i < 0) {
        it = it.prev;
        i += 1;
      }
      return it;
    }
  }, {
    key: 'computeNormal',
    value: function computeNormal() {
      var e0 = this.edge;
      var e1 = e0.next;
      var e2 = e1.next;
      var v2 = (0, _subtract2.default)([], e1.head().point, e0.head().point);
      var t = [];
      var v1 = [];

      this.nVertices = 2;
      this.normal = [0, 0, 0];
      while (e2 !== e0) {
        (0, _copy2.default)(v1, v2);
        (0, _subtract2.default)(v2, e2.head().point, e0.head().point);
        (0, _add2.default)(this.normal, this.normal, (0, _cross2.default)(t, v1, v2));
        e2 = e2.next;
        this.nVertices += 1;
      }
      this.area = (0, _length2.default)(this.normal);
      // normalize the vector, since we've already calculated the area
      // it's cheaper to scale the vector using this quantity instead of
      // doing the same operation again
      this.normal = (0, _scale2.default)(this.normal, this.normal, 1 / this.area);
    }
  }, {
    key: 'computeNormalMinArea',
    value: function computeNormalMinArea(minArea) {
      this.computeNormal();
      if (this.area < minArea) {
        // compute the normal without the longest edge
        var maxEdge = void 0;
        var maxSquaredLength = 0;
        var edge = this.edge;

        // find the longest edge (in length) in the chain of edges
        do {
          var lengthSquared = edge.lengthSquared();
          if (lengthSquared > maxSquaredLength) {
            maxEdge = edge;
            maxSquaredLength = lengthSquared;
          }
          edge = edge.next;
        } while (edge !== this.edge);

        var p1 = maxEdge.tail().point;
        var p2 = maxEdge.head().point;
        var maxVector = (0, _subtract2.default)([], p2, p1);
        var maxLength = Math.sqrt(maxSquaredLength);
        // maxVector is normalized after this operation
        (0, _scale2.default)(maxVector, maxVector, 1 / maxLength);
        // compute the projection of maxVector over this face normal
        var maxProjection = (0, _dot2.default)(this.normal, maxVector);
        // subtract the quantity maxEdge adds on the normal
        (0, _scaleAndAdd2.default)(this.normal, this.normal, maxVector, -maxProjection);
        // renormalize `this.normal`
        (0, _normalize2.default)(this.normal, this.normal);
      }
    }
  }, {
    key: 'computeCentroid',
    value: function computeCentroid() {
      this.centroid = [0, 0, 0];
      var edge = this.edge;
      do {
        (0, _add2.default)(this.centroid, this.centroid, edge.head().point);
        edge = edge.next;
      } while (edge !== this.edge);
      (0, _scale2.default)(this.centroid, this.centroid, 1 / this.nVertices);
    }
  }, {
    key: 'computeNormalAndCentroid',
    value: function computeNormalAndCentroid(minArea) {
      if (typeof minArea !== 'undefined') {
        this.computeNormalMinArea(minArea);
      } else {
        this.computeNormal();
      }
      this.computeCentroid();
      this.offset = (0, _dot2.default)(this.normal, this.centroid);
    }
  }, {
    key: 'distanceToPlane',
    value: function distanceToPlane(point) {
      return (0, _dot2.default)(this.normal, point) - this.offset;
    }

    /**
     * @private
     *
     * Connects two edges assuming that prev.head().point === next.tail().point
     *
     * @param {HalfEdge} prev
     * @param {HalfEdge} next
     */

  }, {
    key: 'connectHalfEdges',
    value: function connectHalfEdges(prev, next) {
      var discardedFace = void 0;
      if (prev.opposite.face === next.opposite.face) {
        // `prev` is remove a redundant edge
        var oppositeFace = next.opposite.face;
        var oppositeEdge = void 0;
        if (prev === this.edge) {
          this.edge = next;
        }
        if (oppositeFace.nVertices === 3) {
          // case:
          // remove the face on the right
          //
          //       /|\
          //      / | \ the face on the right
          //     /  |  \ --> opposite edge
          //    / a |   \
          //   *----*----*
          //  /     b  |  \
          //           ▾
          //      redundant edge
          //
          // Note: the opposite edge is actually in the face to the right
          // of the face to be destroyed
          oppositeEdge = next.opposite.prev.opposite;
          oppositeFace.mark = DELETED;
          discardedFace = oppositeFace;
        } else {
          // case:
          //          t
          //        *----
          //       /| <- right face's redundant edge
          //      / | opposite edge
          //     /  |  ▴   /
          //    / a |  |  /
          //   *----*----*
          //  /     b  |  \
          //           ▾
          //      redundant edge
          oppositeEdge = next.opposite.next;
          // make sure that the link `oppositeFace.edge` points correctly even
          // after the right face redundant edge is removed
          if (oppositeFace.edge === oppositeEdge.prev) {
            oppositeFace.edge = oppositeEdge;
          }

          //       /|   /
          //      / | t/opposite edge
          //     /  | / ▴  /
          //    / a |/  | /
          //   *----*----*
          //  /     b     \
          oppositeEdge.prev = oppositeEdge.prev.prev;
          oppositeEdge.prev.next = oppositeEdge;
        }
        //       /|
        //      / |
        //     /  |
        //    / a |
        //   *----*----*
        //  /     b  ▴  \
        //           |
        //     redundant edge
        next.prev = prev.prev;
        next.prev.next = next;

        //       / \  \
        //      /   \->\
        //     /     \<-\ opposite edge
        //    / a     \  \
        //   *----*----*
        //  /     b  ^  \
        next.setOpposite(oppositeEdge);

        oppositeFace.computeNormalAndCentroid();
      } else {
        // trivial case
        //        *
        //       /|\
        //      / | \
        //     /  |--> next
        //    / a |   \
        //   *----*----*
        //    \ b |   /
        //     \  |--> prev
        //      \ | /
        //       \|/
        //        *
        prev.next = next;
        next.prev = prev;
      }
      return discardedFace;
    }
  }, {
    key: 'mergeAdjacentFaces',
    value: function mergeAdjacentFaces(adjacentEdge, discardedFaces) {
      var oppositeEdge = adjacentEdge.opposite;
      var oppositeFace = oppositeEdge.face;

      discardedFaces.push(oppositeFace);
      oppositeFace.mark = DELETED;

      // find the chain of edges whose opposite face is `oppositeFace`
      //
      //                ===>
      //      \         face         /
      //       * ---- * ---- * ---- *
      //      /     opposite face    \
      //                <===
      //
      var adjacentEdgePrev = adjacentEdge.prev;
      var adjacentEdgeNext = adjacentEdge.next;
      var oppositeEdgePrev = oppositeEdge.prev;
      var oppositeEdgeNext = oppositeEdge.next;

      // left edge
      while (adjacentEdgePrev.opposite.face === oppositeFace) {
        adjacentEdgePrev = adjacentEdgePrev.prev;
        oppositeEdgeNext = oppositeEdgeNext.next;
      }
      // right edge
      while (adjacentEdgeNext.opposite.face === oppositeFace) {
        adjacentEdgeNext = adjacentEdgeNext.next;
        oppositeEdgePrev = oppositeEdgePrev.prev;
      }
      // adjacentEdgePrev  \         face         / adjacentEdgeNext
      //                    * ---- * ---- * ---- *
      // oppositeEdgeNext  /     opposite face    \ oppositeEdgePrev

      // fix the face reference of all the opposite edges that are not part of
      // the edges whose opposite face is not `face` i.e. all the edges that
      // `face` and `oppositeFace` do not have in common
      var edge = void 0;
      for (edge = oppositeEdgeNext; edge !== oppositeEdgePrev.next; edge = edge.next) {
        edge.face = this;
      }

      // make sure that `face.edge` is not one of the edges to be destroyed
      // Note: it's important for it to be a `next` edge since `prev` edges
      // might be destroyed on `connectHalfEdges`
      this.edge = adjacentEdgeNext;

      // connect the extremes
      // Note: it might be possible that after connecting the edges a triangular
      // face might be redundant
      var discardedFace = void 0;
      discardedFace = this.connectHalfEdges(oppositeEdgePrev, adjacentEdgeNext);
      if (discardedFace) {
        discardedFaces.push(discardedFace);
      }
      discardedFace = this.connectHalfEdges(adjacentEdgePrev, oppositeEdgeNext);
      if (discardedFace) {
        discardedFaces.push(discardedFace);
      }

      this.computeNormalAndCentroid();
      // TODO: additional consistency checks
      return discardedFaces;
    }
  }, {
    key: 'collectIndices',
    value: function collectIndices() {
      var indices = [];
      var edge = this.edge;
      do {
        indices.push(edge.head().index);
        edge = edge.next;
      } while (edge !== this.edge);
      return indices;
    }
  }], [{
    key: 'createTriangle',
    value: function createTriangle(v0, v1, v2) {
      var minArea = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

      var face = new Face();
      var e0 = new _HalfEdge2.default(v0, face);
      var e1 = new _HalfEdge2.default(v1, face);
      var e2 = new _HalfEdge2.default(v2, face);

      // join edges
      e0.next = e2.prev = e1;
      e1.next = e0.prev = e2;
      e2.next = e1.prev = e0;

      // main half edge reference
      face.edge = e0;
      face.computeNormalAndCentroid(minArea);
      debug(function () {
        this.log('face created %j', face.collectIndices());
      });
      return face;
    }
  }]);

  return Face;
}();

exports.default = Face;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = add;

/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function add(out, a, b) {
    out[0] = a[0] + b[0]
    out[1] = a[1] + b[1]
    out[2] = a[2] + b[2]
    return out
}

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = copy;

/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the source vector
 * @returns {vec3} out
 */
function copy(out, a) {
    out[0] = a[0]
    out[1] = a[1]
    out[2] = a[2]
    return out
}

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = length;

/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
    var x = a[0],
        y = a[1],
        z = a[2]
    return Math.sqrt(x*x + y*y + z*z)
}

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = scale;

/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */
function scale(out, a, b) {
    out[0] = a[0] * b
    out[1] = a[1] * b
    out[2] = a[2] * b
    return out
}

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = scaleAndAdd;

/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */
function scaleAndAdd(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale)
    out[1] = a[1] + (b[1] * scale)
    out[2] = a[2] + (b[2] * scale)
    return out
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _distance = __webpack_require__(28);

var _distance2 = _interopRequireDefault(_distance);

var _squaredDistance = __webpack_require__(29);

var _squaredDistance2 = _interopRequireDefault(_squaredDistance);

var _debugFn = __webpack_require__(2);

var _debugFn2 = _interopRequireDefault(_debugFn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var debug = (0, _debugFn2.default)('halfedge');

var HalfEdge = function () {
  function HalfEdge(vertex, face) {
    _classCallCheck(this, HalfEdge);

    this.vertex = vertex;
    this.face = face;
    this.next = null;
    this.prev = null;
    this.opposite = null;
  }

  _createClass(HalfEdge, [{
    key: 'head',
    value: function head() {
      return this.vertex;
    }
  }, {
    key: 'tail',
    value: function tail() {
      return this.prev ? this.prev.vertex : null;
    }
  }, {
    key: 'length',
    value: function length() {
      if (this.tail()) {
        return (0, _distance2.default)(this.tail().point, this.head().point);
      }
      return -1;
    }
  }, {
    key: 'lengthSquared',
    value: function lengthSquared() {
      if (this.tail()) {
        return (0, _squaredDistance2.default)(this.tail().point, this.head().point);
      }
      return -1;
    }
  }, {
    key: 'setOpposite',
    value: function setOpposite(edge) {
      var me = this;
      debug(function () {
        this.log('opposite ' + me.tail().index + ' <--> ' + me.head().index + ' between ' + me.face.collectIndices() + ', ' + edge.face.collectIndices());
      });
      this.opposite = edge;
      edge.opposite = this;
    }
  }]);

  return HalfEdge;
}();

exports.default = HalfEdge;
module.exports = exports['default'];

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = distance;

/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2]
    return Math.sqrt(x*x + y*y + z*z)
}

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = squaredDistance;

/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2]
    return x*x + y*y + z*z
}

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ColorScheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorManager; });
var engine = window;
var ColorScheme = (function () {
    function ColorScheme(foreground, s, a1, a2) {
        this.foreground = foreground;
        this.s = s;
        this.a1 = a1;
        this.a2 = a2;
    }
    ColorScheme.prototype.compute = function (t) {
        return this.s.replace('$a1', this.a1(t).toString()).replace('$a2', this.a2(t).toString());
    };
    return ColorScheme;
}());

var swipeTime = 0.1;
var ColorManager = (function () {
    function ColorManager(currentColorScheme) {
        this.currentColorScheme = currentColorScheme;
        this.s = [];
        this.t = 0;
    }
    ColorManager.prototype.render = function (dt) {
        var tNext = this.t + dt;
        while (tNext > swipeTime) {
            tNext -= swipeTime;
            if (this.s.length !== 0) {
                this.currentColorScheme = this.s.shift();
            }
        }
        this.t = tNext;
        if (this.s.length === 0) {
            window.document.body.style.background = this.currentColorScheme.compute(1);
        }
        else {
            var newPercent = this.t / swipeTime;
            var bgString = this.currentColorScheme.compute(1 - newPercent) + ', ' + this.s[0].compute(1);
            window.document.body.style.background = bgString;
        }
        window.document.body.style.color = this.computeForegroundColor(1);
    };
    ColorManager.prototype.computeForegroundColor = function (alpha) {
        var color = this.s.length === 0
            ? this.currentColorScheme.foreground
            : engine.lerp(this.currentColorScheme.foreground, this.s[0].foreground, 1 - this.t / swipeTime);
        return "rgba(" + color.join(', ') + ", " + alpha + ")";
    };
    ColorManager.prototype.push = function (bg) {
        if (this.s.length === 0) {
            this.t = 0;
        }
        while (this.s.length > 1) {
            this.s.pop();
        }
        this.s.push(bg);
    };
    return ColorManager;
}());



/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(32);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(34)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./style.scss", function() {
			var newContent = require("!!./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./style.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports
exports.i(__webpack_require__(33), "");
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat);", ""]);

// module
exports.push([module.i, "@keyframes blink {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\nbody {\n  font-family: 'Montserrat', sans-serif; }\n  body h1 {\n    font-weight: 700; }\n\n.intro {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  font-size: 0.8vw; }\n  .intro header {\n    padding-left: 5%;\n    padding-top: 5%;\n    opacity: 0.8; }\n    .intro header h1 {\n      font-size: 8em;\n      display: inline;\n      margin-right: 0.15em; }\n    .intro header h2 {\n      font-size: 4em;\n      display: inline;\n      min-width: 50vw; }\n    .intro header .link-list {\n      margin-left: 0.15em; }\n      .intro header .link-list li {\n        display: inline-block;\n        margin-top: 0.3em;\n        margin-right: 0.5em;\n        font-size: 3em; }\n    .intro header .typed-cursor {\n      opacity: 1;\n      animation: blink 2s infinite; }\n    .intro header a {\n      position: relative;\n      text-decoration: none;\n      margin: 0 -0.2em;\n      padding: 0 0.2em;\n      opacity: 0.9; }\n      .intro header a:hover {\n        opacity: 1; }\n        .intro header a:hover::after {\n          display: block;\n          position: absolute;\n          top: 100%;\n          left: 0.2em;\n          right: 0.2em;\n          content: \"\";\n          height: 0.1em;\n          background-color: currentColor; }\n      .intro header a:visited {\n        color: inherit; }\n  .intro nav.blog-post-list {\n    position: absolute;\n    left: 5vw;\n    bottom: 4vw; }\n    .intro nav.blog-post-list h1 {\n      font-size: 4em;\n      opacity: 0.8; }\n    .intro nav.blog-post-list li {\n      display: block;\n      margin-left: 0.05em;\n      padding-top: 0.3em;\n      font-size: 2.5em; }\n    .intro nav.blog-post-list a {\n      opacity: 0.7;\n      text-decoration: none; }\n      .intro nav.blog-post-list a:hover {\n        opacity: 0.9;\n        text-decoration: underline; }\n      .intro nav.blog-post-list a:visited {\n        color: inherit; }\n  .intro aside {\n    position: absolute;\n    right: 5vw;\n    bottom: 4vw;\n    font-size: 2em;\n    opacity: 0.3; }\n\n.blog {\n  min-height: 100vh; }\n  .blog header section, .blog section section {\n    margin: 0 5vw; }\n  .blog header {\n    margin-top: 15vh; }\n    .blog header h1 {\n      font-size: 2em; }\n\n.render-view {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1000; }\n", ""]);

// exports


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed,\r\nfigure, figcaption, footer, header, hgroup,\r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    font-size: 100%;\r\n    font: inherit;\r\n    vertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure,\r\nfooter, header, hgroup, menu, nav, section {\r\n    display: block;\r\n}\r\n\r\nbody {\r\n    line-height: 1;\r\n}\r\n\r\nol, ul {\r\n    list-style: none;\r\n}\r\n\r\nblockquote, q {\r\n    quotes: none;\r\n}\r\n\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n    content: '';\r\n    content: none;\r\n}\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}\r\n", ""]);

// exports


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(35);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 35 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzBhZTUwNTE0ODY0ODE0ZmUwZDAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsLXZlYzMvc3VidHJhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsLXZlYzMvY3Jvc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RlYnVnLWZuL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsLXZlYzMvbm9ybWFsaXplLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nbC12ZWMzL2RvdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3R5cGVkLmpzL2xpYi90eXBlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvR3JhcGhEZW1vLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9xdWlja2h1bGwzZC9kaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9xdWlja2h1bGwzZC9kaXN0L1F1aWNrSHVsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcG9pbnQtbGluZS1kaXN0YW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcG9pbnQtbGluZS1kaXN0YW5jZS9zcXVhcmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nbC12ZWMzL3NxdWFyZWRMZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dldC1wbGFuZS1ub3JtYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9kZWJ1Zy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3F1aWNraHVsbDNkL2Rpc3QvVmVydGV4TGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcXVpY2todWxsM2QvZGlzdC9WZXJ0ZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3F1aWNraHVsbDNkL2Rpc3QvRmFjZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2wtdmVjMy9hZGQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsLXZlYzMvY29weS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2wtdmVjMy9sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsLXZlYzMvc2NhbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsLXZlYzMvc2NhbGVBbmRBZGQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3F1aWNraHVsbDNkL2Rpc3QvSGFsZkVkZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsLXZlYzMvZGlzdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsLXZlYzMvc3F1YXJlZERpc3RhbmNlLmpzIiwid2VicGFjazovLy8uL3NyYy9Db2xvck1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGUuc2Nzcz8wZjM5Iiwid2VicGFjazovLy8uL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbWV5ZXJyZXNldDIuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyJdLCJuYW1lcyI6W10sIm1h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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QixnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTs7QUFFVjtBQUNBLFFBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0Es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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLG9DOzs7Ozs7O0FDdjBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMzQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7OztBQ3hMQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOzs7Ozs7OztBQ3RMdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FB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Q0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDNVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxXQUFXLEVBQUU7QUFDckQsd0NBQXdDLFdBQVcsRUFBRTs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxzQ0FBc0M7QUFDdEMsR0FBRztBQUNIO0FBQ0EsOERBQThEO0FBQzlEOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3MGFlNTA1MTQ4NjQ4MTRmZTBkMCIsIm1vZHVsZS5leHBvcnRzID0gc3VidHJhY3Q7XG5cbi8qKlxuICogU3VidHJhY3RzIHZlY3RvciBiIGZyb20gdmVjdG9yIGFcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIHN1YnRyYWN0KG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gLSBiWzBdXG4gICAgb3V0WzFdID0gYVsxXSAtIGJbMV1cbiAgICBvdXRbMl0gPSBhWzJdIC0gYlsyXVxuICAgIHJldHVybiBvdXRcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nbC12ZWMzL3N1YnRyYWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gY3Jvc3M7XG5cbi8qKlxuICogQ29tcHV0ZXMgdGhlIGNyb3NzIHByb2R1Y3Qgb2YgdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gY3Jvc3Mob3V0LCBhLCBiKSB7XG4gICAgdmFyIGF4ID0gYVswXSwgYXkgPSBhWzFdLCBheiA9IGFbMl0sXG4gICAgICAgIGJ4ID0gYlswXSwgYnkgPSBiWzFdLCBieiA9IGJbMl1cblxuICAgIG91dFswXSA9IGF5ICogYnogLSBheiAqIGJ5XG4gICAgb3V0WzFdID0gYXogKiBieCAtIGF4ICogYnpcbiAgICBvdXRbMl0gPSBheCAqIGJ5IC0gYXkgKiBieFxuICAgIHJldHVybiBvdXRcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nbC12ZWMzL2Nyb3NzLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG5zKSB7XG4gIHZhciBsb2dnZXIgPSAoMCwgX2RlYnVnMi5kZWZhdWx0KShucyk7XG4gIHZhciBzY29wZSA9IHsgbG9nOiBsb2dnZXIgfTtcbiAgZnVuY3Rpb24gaW50ZXJuYWwoZm4pIHtcbiAgICBpZiAoX2RlYnVnMi5kZWZhdWx0LmVuYWJsZWQobnMpKSB7XG4gICAgICBmbi5jYWxsKHNjb3BlLCBsb2dnZXIpO1xuICAgIH1cbiAgfVxuICBpbnRlcm5hbC5sb2dnZXIgPSBsb2dnZXI7XG4gIHJldHVybiBpbnRlcm5hbDtcbn07XG5cbnZhciBfZGVidWcgPSByZXF1aXJlKCdkZWJ1ZycpO1xuXG52YXIgX2RlYnVnMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlYnVnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGVidWctZm4vZGlzdC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IG5vcm1hbGl6ZTtcblxuLyoqXG4gKiBOb3JtYWxpemUgYSB2ZWMzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB2ZWN0b3IgdG8gbm9ybWFsaXplXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZShvdXQsIGEpIHtcbiAgICB2YXIgeCA9IGFbMF0sXG4gICAgICAgIHkgPSBhWzFdLFxuICAgICAgICB6ID0gYVsyXVxuICAgIHZhciBsZW4gPSB4KnggKyB5KnkgKyB6KnpcbiAgICBpZiAobGVuID4gMCkge1xuICAgICAgICAvL1RPRE86IGV2YWx1YXRlIHVzZSBvZiBnbG1faW52c3FydCBoZXJlP1xuICAgICAgICBsZW4gPSAxIC8gTWF0aC5zcXJ0KGxlbilcbiAgICAgICAgb3V0WzBdID0gYVswXSAqIGxlblxuICAgICAgICBvdXRbMV0gPSBhWzFdICogbGVuXG4gICAgICAgIG91dFsyXSA9IGFbMl0gKiBsZW5cbiAgICB9XG4gICAgcmV0dXJuIG91dFxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dsLXZlYzMvbm9ybWFsaXplLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZG90O1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRvdCBwcm9kdWN0IG9mIGEgYW5kIGJcbiAqL1xuZnVuY3Rpb24gZG90KGEsIGIpIHtcbiAgICByZXR1cm4gYVswXSAqIGJbMF0gKyBhWzFdICogYlsxXSArIGFbMl0gKiBiWzJdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2wtdmVjMy9kb3QuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFR5cGVkIGZyb20gJ3R5cGVkLmpzJztcclxuXHJcbmltcG9ydCB7IEdyYXBoRGVtbyB9IGZyb20gJy4vR3JhcGhEZW1vJztcclxuaW1wb3J0IHsgQ29sb3JTY2hlbWUsIENvbG9yTWFuYWdlciB9IGZyb20gJy4vQ29sb3JNYW5hZ2VyJztcclxuY29uc3QgZW5naW5lOiBCb2lsZXJwbGF0ZUVuZ2luZSA9IHdpbmRvdztcclxuY29uc3Qgd2hpdGVDb2xvclNjaGVtZSA9IG5ldyBDb2xvclNjaGVtZShbMCwgMCwgMF0sICdsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAkYTEpIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsICRhMikgMTAwJSknLCB2ID0+IHYsIHYgPT4gdik7XHJcbmNvbnN0IGJsYWNrQ29sb3JTY2hlbWUgPSBuZXcgQ29sb3JTY2hlbWUoWzI1NSwgMjU1LCAyNTVdLCAnbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMCwgMCwgMCwgJGExKSAwJSwgcmdiYSgwLCAwLCAwLCAkYTIpIDEwMCUpJywgdiA9PiB2LCB2ID0+IHYpO1xyXG5jb25zdCBibHVlR3JhZGllbnRDb2xvclNjaGVtZSA9IG5ldyBDb2xvclNjaGVtZShbMjU1LCAyNTUsIDI1NV0sICdkdW1teSwgcmVwbGFjZWQgb24gcmVuZGVyJywgdiA9PiB2LCB2ID0+IHYpO1xyXG5jb25zdCBkYXJrQmx1ZUdyYWRpZW50Q29sb3JTY2hlbWUgPSBuZXcgQ29sb3JTY2hlbWUoWzI1NSwgMjU1LCAyNTVdLCAnbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoNTIsIDczLCA5NCwgJGExKSAwJSwgcmdiYSg0NCwgNjIsIDgwLCAkYTIpIDEwMCUpJywgdiA9PiB2LCB2ID0+IHYpO1xyXG5jb25zdCBncmVlbkdyYWRpZW50Q29sb3JTY2hlbWUgPSBuZXcgQ29sb3JTY2hlbWUoWzI1NSwgMjU1LCAyNTVdLCAnbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoNDYsIDIwNCwgMTEzLCAkYTEpIDAlLCByZ2JhKDM5LCAxNzQsIDk2LCAkYTIpIDEwMCUpJywgdiA9PiB2LCB2ID0+IHYpO1xyXG5jb25zdCBwdXJwbGVHcmFkaWVudENvbG9yU2NoZW1lID0gbmV3IENvbG9yU2NoZW1lKFsyNTUsIDI1NSwgMjU1XSwgJ2xpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDE1NSwgODksIDE4MiwgJGExKSAwJSwgcmdiYSgxNDIsIDY4LCAxNzMsICRhMikgMTAwJSknLCB2ID0+IHYsIHYgPT4gdik7XHJcbmNvbnN0IGNvbG9yTWFuYWdlciA9IG5ldyBDb2xvck1hbmFnZXIoYmxhY2tDb2xvclNjaGVtZSk7XHJcbmNvbG9yTWFuYWdlci5wdXNoKGJsdWVHcmFkaWVudENvbG9yU2NoZW1lKTtcclxuXHJcbmltcG9ydCAnLi4vc3R5bGUuc2Nzcyc7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgbWFpbik7XHJcblxyXG5mdW5jdGlvbiBtYWluKCkge1xyXG4gICAgY29uc3QgZGVtbyA9IG5ldyBHcmFwaERlbW8oKTtcclxuICAgIGVuZ2luZS5pbml0KDEyODAsIDcyMCwgNjApO1xyXG4gICAgZW5naW5lLm9uVGlja0VudGVyKHRpY2spO1xyXG4gICAgZW5naW5lLm9uRnJhbWVFbnRlcihyZW5kZXIpO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZXN0YXJ0JywgaGFuZGxlUmVzaXplKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemVlbmQnLCBoYW5kbGVSZXNpemUpO1xyXG5cclxuICAgIGxldCBpc0ZpcnN0VGljayA9IHRydWU7XHJcbiAgICBmdW5jdGlvbiB0aWNrKGR0OiBudW1iZXIsIHQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmIChpc0ZpcnN0VGljaykge1xyXG4gICAgICAgICAgICBpc0ZpcnN0VGljayA9IGZhbHNlO1xyXG4gICAgICAgICAgICBmaXJzdFRpY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVtby50aWNrKGR0LCB0KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmaXJzdFRpY2soKSB7XHJcbiAgICAgICAgaGFuZGxlUmVzaXplKCk7XHJcbiAgICAgICAgZW5naW5lLmRpc3BsYXlDYW52YXMuY2xhc3NOYW1lID0gJ3JlbmRlci12aWV3JztcclxuXHJcbiAgICAgICAgY29uc3QgdGhyb3dhd2F5ID0gbmV3IFR5cGVkKCcud2hvYW1pJywge1xyXG4gICAgICAgICAgICBzdHJpbmdzOiBbXHJcbiAgICAgICAgICAgICAgICAnU29mdHdhcmUgRW5naW5lZXInLFxyXG4gICAgICAgICAgICAgICAgJ1VXIFNlYXR0bGUgQ1NFIFxcJzE4JyxcclxuICAgICAgICAgICAgICAgICdCdWlsZHMgR2FtZXMnLFxyXG4gICAgICAgICAgICAgICAgJ0J1aWxkcyBSb2JvdHMnLFxyXG4gICAgICAgICAgICAgICAgJ1NvZnR3YXJlIEVuZ2luZWVyJ1xyXG4gICAgICAgICAgICBdLFxyXG4vLyAgICAgICAgICAgIHN0cmluZ3M6IFsnU29mdHdhcmUgRW5naW5lZXInLCAnU3R1ZGVudCBhdCBVVyBTZWF0dGxlJ10sXHJcbiAgICAgICAgICAgIHR5cGVTcGVlZDogNTAsXHJcbiAgICAgICAgICAgIGJhY2tTcGVlZDogMjAsXHJcbiAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgICAgICAgICBjdXJzb3JDaGFyOiAnfCdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VtZS1saW5rJykuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4gY29sb3JNYW5hZ2VyLnB1c2gocHVycGxlR3JhZGllbnRDb2xvclNjaGVtZSkpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bWUtbGluaycpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiBjb2xvck1hbmFnZXIucHVzaChibHVlR3JhZGllbnRDb2xvclNjaGVtZSkpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2l0aHViLWxpbmsnKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiBjb2xvck1hbmFnZXIucHVzaChncmVlbkdyYWRpZW50Q29sb3JTY2hlbWUpKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2l0aHViLWxpbmsnKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4gY29sb3JNYW5hZ2VyLnB1c2goYmx1ZUdyYWRpZW50Q29sb3JTY2hlbWUpKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpbmtlZGluLWxpbmsnKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiBjb2xvck1hbmFnZXIucHVzaChkYXJrQmx1ZUdyYWRpZW50Q29sb3JTY2hlbWUpKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlua2VkaW4tbGluaycpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiBjb2xvck1hbmFnZXIucHVzaChibHVlR3JhZGllbnRDb2xvclNjaGVtZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbmRlcihkdDogbnVtYmVyLCB0OiBudW1iZXIpIHtcclxuICAgICAgICB1cGRhdGVCbHVlR3JhZGllbnRCYWNrZ3JvdW5kKCk7XHJcbiAgICAgICAgY29sb3JNYW5hZ2VyLnJlbmRlcihkdCk7XHJcbiAgICAgICAgZGVtby5yZW5kZXIoZHQsIHQpO1xyXG5cclxuICAgICAgICBjb25zdCBjdHggPSBlbmdpbmUuZGlzcGxheUNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvck1hbmFnZXIuY29tcHV0ZUZvcmVncm91bmRDb2xvcigxKTtcclxuICAgICAgICBjdHguZmlsbFRleHQoYE1URSAke2VuZ2luZS5jb21wdXRlTWVhblRpY2tFeGVjdXRpb25UaW1lKCl9bXNgLCAwLCAxMDApO1xyXG4gICAgICAgIGN0eC5maWxsVGV4dChgTVJFICR7ZW5naW5lLmNvbXB1dGVNZWFuUmVuZGVyRXhlY3V0aW9uVGltZSgpfW1zIGAsIDAsIDExMCk7XHJcbiAgICAgICAgY3R4LmZpbGxUZXh0KGBNUkkgJHtlbmdpbmUuY29tcHV0ZU1lYW5SZW5kZXJJbnRlcnZhbCgpfW1zYCwgMCwgMTIwKTtcclxuICAgICAgICBjdHguZmlsbFRleHQoYEZQUyB+JHsxIC8gZW5naW5lLmNvbXB1dGVNZWFuUmVuZGVySW50ZXJ2YWwoKX1gLCAwLCAxMzApO1xyXG4gICAgICAgIGN0eC5maWxsVGV4dChgUkVTICR7ZW5naW5lLmdldFNjcmVlblJlY3QoKS53aWR0aH0geCAke2VuZ2luZS5nZXRTY3JlZW5SZWN0KCkuaGVpZ2h0fWAsIDAsIDE0MCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlUmVzaXplKCkge1xyXG4gICAgICAgIGVuZ2luZS5zZXREaXNwbGF5U2l6ZShkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlQmx1ZUdyYWRpZW50QmFja2dyb3VuZCgpIHtcclxuICAgICAgICBjb25zdCBzY3JlZW5SZWN0ID0gZW5naW5lLmdldFNjcmVlblJlY3QoKTtcclxuICAgICAgICBjb25zdCBlMSA9IFswLCBzY3JlZW5SZWN0LnkgKyBzY3JlZW5SZWN0LmhlaWdodCAqIDIgLyA1XTtcclxuICAgICAgICBjb25zdCBlMiA9IFtzY3JlZW5SZWN0LnggKyBzY3JlZW5SZWN0LndpZHRoLCBzY3JlZW5SZWN0LnkgKyBzY3JlZW5SZWN0LmhlaWdodCAqIDMgLyA1XTtcclxuICAgICAgICBjb25zdCB0aGV0YSA9IGVuZ2luZS5hdGFuMihlbmdpbmUuc3ViKGUyLCBlMSkpICsgMC41ICogTWF0aC5QSTtcclxuICAgICAgICBibHVlR3JhZGllbnRDb2xvclNjaGVtZS5zID0gYGxpbmVhci1ncmFkaWVudCgke3RoZXRhICogMTgwIC8gTWF0aC5QSX1kZWcsIHJnYmEoNzcsIDE1NCwgMTg0LCAkYTEpIC01JSwgcmdiYSg3MCwgNTgsIDEzMiwgJGEyKSA5NSUpYDtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFpbi50cyIsIi8qIVxuICogXG4gKiAgIHR5cGVkLmpzIC0gQSBKYXZhU2NyaXB0IFR5cGluZyBBbmltYXRpb24gTGlicmFyeVxuICogICBBdXRob3I6IE1hdHQgQm9sZHQgPG1lQG1hdHRib2xkdC5jb20+XG4gKiAgIFZlcnNpb246IHYyLjAuNlxuICogICBVcmw6IGh0dHBzOi8vZ2l0aHViLmNvbS9tYXR0Ym9sZHQvdHlwZWQuanNcbiAqICAgTGljZW5zZShzKTogTUlUXG4gKiBcbiAqL1xuKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiVHlwZWRcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiVHlwZWRcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fSxcbi8qKioqKiovIFx0XHRcdGlkOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGxvYWRlZDogZmFsc2Vcbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgdmFsdWU6IHRydWVcblx0fSk7XG5cdFxuXHR2YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXHRcblx0ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cdFxuXHR2YXIgX2luaXRpYWxpemVySnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXHRcblx0dmFyIF9odG1sUGFyc2VySnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXHRcblx0LyoqXG5cdCAqIFdlbGNvbWUgdG8gVHlwZWQuanMhXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBlbGVtZW50SWQgSFRNTCBlbGVtZW50IElEIF9PUl8gSFRNTCBlbGVtZW50XG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIG9wdGlvbnMgb2JqZWN0XG5cdCAqIEByZXR1cm5zIHtvYmplY3R9IGEgbmV3IFR5cGVkIG9iamVjdFxuXHQgKi9cblx0XG5cdHZhciBUeXBlZCA9IChmdW5jdGlvbiAoKSB7XG5cdCAgZnVuY3Rpb24gVHlwZWQoZWxlbWVudElkLCBvcHRpb25zKSB7XG5cdCAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHlwZWQpO1xuXHRcblx0ICAgIC8vIEluaXRpYWxpemUgaXQgdXBcblx0ICAgIF9pbml0aWFsaXplckpzLmluaXRpYWxpemVyLmxvYWQodGhpcywgb3B0aW9ucywgZWxlbWVudElkKTtcblx0ICAgIC8vIEFsbCBzeXN0ZW1zIGdvIVxuXHQgICAgdGhpcy5iZWdpbigpO1xuXHQgIH1cblx0XG5cdCAgLyoqXG5cdCAgICogVG9nZ2xlIHN0YXJ0KCkgYW5kIHN0b3AoKSBvZiB0aGUgVHlwZWQgaW5zdGFuY2Vcblx0ICAgKiBAcHVibGljXG5cdCAgICovXG5cdFxuXHQgIF9jcmVhdGVDbGFzcyhUeXBlZCwgW3tcblx0ICAgIGtleTogJ3RvZ2dsZScsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gdG9nZ2xlKCkge1xuXHQgICAgICB0aGlzLnBhdXNlLnN0YXR1cyA/IHRoaXMuc3RhcnQoKSA6IHRoaXMuc3RvcCgpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogU3RvcCB0eXBpbmcgLyBiYWNrc3BhY2luZyBhbmQgZW5hYmxlIGN1cnNvciBibGlua2luZ1xuXHQgICAgICogQHB1YmxpY1xuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnc3RvcCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcCgpIHtcblx0ICAgICAgaWYgKHRoaXMudHlwaW5nQ29tcGxldGUpIHJldHVybjtcblx0ICAgICAgaWYgKHRoaXMucGF1c2Uuc3RhdHVzKSByZXR1cm47XG5cdCAgICAgIHRoaXMudG9nZ2xlQmxpbmtpbmcodHJ1ZSk7XG5cdCAgICAgIHRoaXMucGF1c2Uuc3RhdHVzID0gdHJ1ZTtcblx0ICAgICAgdGhpcy5vcHRpb25zLm9uU3RvcCh0aGlzLmFycmF5UG9zLCB0aGlzKTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIFN0YXJ0IHR5cGluZyAvIGJhY2tzcGFjaW5nIGFmdGVyIGJlaW5nIHN0b3BwZWRcblx0ICAgICAqIEBwdWJsaWNcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ3N0YXJ0Jyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBzdGFydCgpIHtcblx0ICAgICAgaWYgKHRoaXMudHlwaW5nQ29tcGxldGUpIHJldHVybjtcblx0ICAgICAgaWYgKCF0aGlzLnBhdXNlLnN0YXR1cykgcmV0dXJuO1xuXHQgICAgICB0aGlzLnBhdXNlLnN0YXR1cyA9IGZhbHNlO1xuXHQgICAgICBpZiAodGhpcy5wYXVzZS50eXBld3JpdGUpIHtcblx0ICAgICAgICB0aGlzLnR5cGV3cml0ZSh0aGlzLnBhdXNlLmN1clN0cmluZywgdGhpcy5wYXVzZS5jdXJTdHJQb3MpO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHRoaXMuYmFja3NwYWNlKHRoaXMucGF1c2UuY3VyU3RyaW5nLCB0aGlzLnBhdXNlLmN1clN0clBvcyk7XG5cdCAgICAgIH1cblx0ICAgICAgdGhpcy5vcHRpb25zLm9uU3RhcnQodGhpcy5hcnJheVBvcywgdGhpcyk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBEZXN0cm95IHRoaXMgaW5zdGFuY2Ugb2YgVHlwZWRcblx0ICAgICAqIEBwdWJsaWNcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2Rlc3Ryb3knLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG5cdCAgICAgIHRoaXMucmVzZXQoZmFsc2UpO1xuXHQgICAgICB0aGlzLm9wdGlvbnMub25EZXN0cm95KHRoaXMpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogUmVzZXQgVHlwZWQgYW5kIG9wdGlvbmFsbHkgcmVzdGFydHNcblx0ICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVzdGFydFxuXHQgICAgICogQHB1YmxpY1xuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAncmVzZXQnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0KCkge1xuXHQgICAgICB2YXIgcmVzdGFydCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHRydWUgOiBhcmd1bWVudHNbMF07XG5cdFxuXHQgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZW91dCk7XG5cdCAgICAgIHRoaXMucmVwbGFjZVRleHQoJycpO1xuXHQgICAgICBpZiAodGhpcy5jdXJzb3IgJiYgdGhpcy5jdXJzb3IucGFyZW50Tm9kZSkge1xuXHQgICAgICAgIHRoaXMuY3Vyc29yLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5jdXJzb3IpO1xuXHQgICAgICAgIHRoaXMuY3Vyc29yID0gbnVsbDtcblx0ICAgICAgfVxuXHQgICAgICB0aGlzLnN0clBvcyA9IDA7XG5cdCAgICAgIHRoaXMuYXJyYXlQb3MgPSAwO1xuXHQgICAgICB0aGlzLmN1ckxvb3AgPSAwO1xuXHQgICAgICBpZiAocmVzdGFydCkge1xuXHQgICAgICAgIHRoaXMuaW5zZXJ0Q3Vyc29yKCk7XG5cdCAgICAgICAgdGhpcy5vcHRpb25zLm9uUmVzZXQodGhpcyk7XG5cdCAgICAgICAgdGhpcy5iZWdpbigpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBCZWdpbnMgdGhlIHR5cGluZyBhbmltYXRpb25cblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdiZWdpbicsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gYmVnaW4oKSB7XG5cdCAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cdFxuXHQgICAgICB0aGlzLnR5cGluZ0NvbXBsZXRlID0gZmFsc2U7XG5cdCAgICAgIHRoaXMuc2h1ZmZsZVN0cmluZ3NJZk5lZWRlZCh0aGlzKTtcblx0ICAgICAgdGhpcy5pbnNlcnRDdXJzb3IoKTtcblx0ICAgICAgaWYgKHRoaXMuYmluZElucHV0Rm9jdXNFdmVudHMpIHRoaXMuYmluZEZvY3VzRXZlbnRzKCk7XG5cdCAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIHNvbWUgdGV4dCBpbiB0aGUgZWxlbWVudCwgaWYgeWVzIHN0YXJ0IGJ5IGJhY2tzcGFjaW5nIHRoZSBkZWZhdWx0IG1lc3NhZ2Vcblx0ICAgICAgICBpZiAoIV90aGlzLmN1cnJlbnRFbENvbnRlbnQgfHwgX3RoaXMuY3VycmVudEVsQ29udGVudC5sZW5ndGggPT09IDApIHtcblx0ICAgICAgICAgIF90aGlzLnR5cGV3cml0ZShfdGhpcy5zdHJpbmdzW190aGlzLnNlcXVlbmNlW190aGlzLmFycmF5UG9zXV0sIF90aGlzLnN0clBvcyk7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIC8vIFN0YXJ0IHR5cGluZ1xuXHQgICAgICAgICAgX3RoaXMuYmFja3NwYWNlKF90aGlzLmN1cnJlbnRFbENvbnRlbnQsIF90aGlzLmN1cnJlbnRFbENvbnRlbnQubGVuZ3RoKTtcblx0ICAgICAgICB9XG5cdCAgICAgIH0sIHRoaXMuc3RhcnREZWxheSk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBDYWxsZWQgZm9yIGVhY2ggY2hhcmFjdGVyIHR5cGVkXG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gY3VyU3RyaW5nIHRoZSBjdXJyZW50IHN0cmluZyBpbiB0aGUgc3RyaW5ncyBhcnJheVxuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IGN1clN0clBvcyB0aGUgY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgY3VyU3RyaW5nXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAndHlwZXdyaXRlJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiB0eXBld3JpdGUoY3VyU3RyaW5nLCBjdXJTdHJQb3MpIHtcblx0ICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cdFxuXHQgICAgICBpZiAodGhpcy5mYWRlT3V0ICYmIHRoaXMuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuZmFkZU91dENsYXNzKSkge1xuXHQgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmZhZGVPdXRDbGFzcyk7XG5cdCAgICAgICAgaWYgKHRoaXMuY3Vyc29yKSB0aGlzLmN1cnNvci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuZmFkZU91dENsYXNzKTtcblx0ICAgICAgfVxuXHRcblx0ICAgICAgdmFyIGh1bWFuaXplID0gdGhpcy5odW1hbml6ZXIodGhpcy50eXBlU3BlZWQpO1xuXHQgICAgICB2YXIgbnVtQ2hhcnMgPSAxO1xuXHRcblx0ICAgICAgaWYgKHRoaXMucGF1c2Uuc3RhdHVzID09PSB0cnVlKSB7XG5cdCAgICAgICAgdGhpcy5zZXRQYXVzZVN0YXR1cyhjdXJTdHJpbmcsIGN1clN0clBvcywgdHJ1ZSk7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICAvLyBjb250YWluIHR5cGluZyBmdW5jdGlvbiBpbiBhIHRpbWVvdXQgaHVtYW5pemUnZCBkZWxheVxuXHQgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAvLyBza2lwIG92ZXIgYW55IEhUTUwgY2hhcnNcblx0ICAgICAgICBjdXJTdHJQb3MgPSBfaHRtbFBhcnNlckpzLmh0bWxQYXJzZXIudHlwZUh0bWxDaGFycyhjdXJTdHJpbmcsIGN1clN0clBvcywgX3RoaXMyKTtcblx0XG5cdCAgICAgICAgdmFyIHBhdXNlVGltZSA9IDA7XG5cdCAgICAgICAgdmFyIHN1YnN0ciA9IGN1clN0cmluZy5zdWJzdHIoY3VyU3RyUG9zKTtcblx0ICAgICAgICAvLyBjaGVjayBmb3IgYW4gZXNjYXBlIGNoYXJhY3RlciBiZWZvcmUgYSBwYXVzZSB2YWx1ZVxuXHQgICAgICAgIC8vIGZvcm1hdDogXFxeXFxkKyAuLiBlZzogXjEwMDAgLi4gc2hvdWxkIGJlIGFibGUgdG8gcHJpbnQgdGhlIF4gdG9vIHVzaW5nIF5eXG5cdCAgICAgICAgLy8gc2luZ2xlIF4gYXJlIHJlbW92ZWQgZnJvbSBzdHJpbmdcblx0ICAgICAgICBpZiAoc3Vic3RyLmNoYXJBdCgwKSA9PT0gJ14nKSB7XG5cdCAgICAgICAgICBpZiAoL15cXF5cXGQrLy50ZXN0KHN1YnN0cikpIHtcblx0ICAgICAgICAgICAgdmFyIHNraXAgPSAxOyAvLyBza2lwIGF0IGxlYXN0IDFcblx0ICAgICAgICAgICAgc3Vic3RyID0gL1xcZCsvLmV4ZWMoc3Vic3RyKVswXTtcblx0ICAgICAgICAgICAgc2tpcCArPSBzdWJzdHIubGVuZ3RoO1xuXHQgICAgICAgICAgICBwYXVzZVRpbWUgPSBwYXJzZUludChzdWJzdHIpO1xuXHQgICAgICAgICAgICBfdGhpczIudGVtcG9yYXJ5UGF1c2UgPSB0cnVlO1xuXHQgICAgICAgICAgICBfdGhpczIub3B0aW9ucy5vblR5cGluZ1BhdXNlZChfdGhpczIuYXJyYXlQb3MsIF90aGlzMik7XG5cdCAgICAgICAgICAgIC8vIHN0cmlwIG91dCB0aGUgZXNjYXBlIGNoYXJhY3RlciBhbmQgcGF1c2UgdmFsdWUgc28gdGhleSdyZSBub3QgcHJpbnRlZFxuXHQgICAgICAgICAgICBjdXJTdHJpbmcgPSBjdXJTdHJpbmcuc3Vic3RyaW5nKDAsIGN1clN0clBvcykgKyBjdXJTdHJpbmcuc3Vic3RyaW5nKGN1clN0clBvcyArIHNraXApO1xuXHQgICAgICAgICAgICBfdGhpczIudG9nZ2xlQmxpbmtpbmcodHJ1ZSk7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHRcblx0ICAgICAgICAvLyBjaGVjayBmb3Igc2tpcCBjaGFyYWN0ZXJzIGZvcm1hdHRlZCBhc1xuXHQgICAgICAgIC8vIFwidGhpcyBpcyBhIGBzdHJpbmcgdG8gcHJpbnQgTk9XYCAuLi5cIlxuXHQgICAgICAgIGlmIChzdWJzdHIuY2hhckF0KDApID09PSAnYCcpIHtcblx0ICAgICAgICAgIHdoaWxlIChjdXJTdHJpbmcuc3Vic3RyKGN1clN0clBvcyArIG51bUNoYXJzKS5jaGFyQXQoMCkgIT09ICdgJykge1xuXHQgICAgICAgICAgICBudW1DaGFycysrO1xuXHQgICAgICAgICAgICBpZiAoY3VyU3RyUG9zICsgbnVtQ2hhcnMgPiBjdXJTdHJpbmcubGVuZ3RoKSBicmVhaztcblx0ICAgICAgICAgIH1cblx0ICAgICAgICAgIC8vIHN0cmlwIG91dCB0aGUgZXNjYXBlIGNoYXJhY3RlcnMgYW5kIGFwcGVuZCBhbGwgdGhlIHN0cmluZyBpbiBiZXR3ZWVuXG5cdCAgICAgICAgICB2YXIgc3RyaW5nQmVmb3JlU2tpcCA9IGN1clN0cmluZy5zdWJzdHJpbmcoMCwgY3VyU3RyUG9zKTtcblx0ICAgICAgICAgIHZhciBzdHJpbmdTa2lwcGVkID0gY3VyU3RyaW5nLnN1YnN0cmluZyhzdHJpbmdCZWZvcmVTa2lwLmxlbmd0aCArIDEsIGN1clN0clBvcyArIG51bUNoYXJzKTtcblx0ICAgICAgICAgIHZhciBzdHJpbmdBZnRlclNraXAgPSBjdXJTdHJpbmcuc3Vic3RyaW5nKGN1clN0clBvcyArIG51bUNoYXJzICsgMSk7XG5cdCAgICAgICAgICBjdXJTdHJpbmcgPSBzdHJpbmdCZWZvcmVTa2lwICsgc3RyaW5nU2tpcHBlZCArIHN0cmluZ0FmdGVyU2tpcDtcblx0ICAgICAgICAgIG51bUNoYXJzLS07XG5cdCAgICAgICAgfVxuXHRcblx0ICAgICAgICAvLyB0aW1lb3V0IGZvciBhbnkgcGF1c2UgYWZ0ZXIgYSBjaGFyYWN0ZXJcblx0ICAgICAgICBfdGhpczIudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgLy8gQWNjb3VudHMgZm9yIGJsaW5raW5nIHdoaWxlIHBhdXNlZFxuXHQgICAgICAgICAgX3RoaXMyLnRvZ2dsZUJsaW5raW5nKGZhbHNlKTtcblx0XG5cdCAgICAgICAgICAvLyBXZSdyZSBkb25lIHdpdGggdGhpcyBzZW50ZW5jZSFcblx0ICAgICAgICAgIGlmIChjdXJTdHJQb3MgPT09IGN1clN0cmluZy5sZW5ndGgpIHtcblx0ICAgICAgICAgICAgX3RoaXMyLmRvbmVUeXBpbmcoY3VyU3RyaW5nLCBjdXJTdHJQb3MpO1xuXHQgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgX3RoaXMyLmtlZXBUeXBpbmcoY3VyU3RyaW5nLCBjdXJTdHJQb3MsIG51bUNoYXJzKTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICAgIC8vIGVuZCBvZiBjaGFyYWN0ZXIgcGF1c2Vcblx0ICAgICAgICAgIGlmIChfdGhpczIudGVtcG9yYXJ5UGF1c2UpIHtcblx0ICAgICAgICAgICAgX3RoaXMyLnRlbXBvcmFyeVBhdXNlID0gZmFsc2U7XG5cdCAgICAgICAgICAgIF90aGlzMi5vcHRpb25zLm9uVHlwaW5nUmVzdW1lZChfdGhpczIuYXJyYXlQb3MsIF90aGlzMik7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfSwgcGF1c2VUaW1lKTtcblx0XG5cdCAgICAgICAgLy8gaHVtYW5pemVkIHZhbHVlIGZvciB0eXBpbmdcblx0ICAgICAgfSwgaHVtYW5pemUpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogQ29udGludWUgdG8gdGhlIG5leHQgc3RyaW5nICYgYmVnaW4gdHlwaW5nXG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gY3VyU3RyaW5nIHRoZSBjdXJyZW50IHN0cmluZyBpbiB0aGUgc3RyaW5ncyBhcnJheVxuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IGN1clN0clBvcyB0aGUgY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgY3VyU3RyaW5nXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAna2VlcFR5cGluZycsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24ga2VlcFR5cGluZyhjdXJTdHJpbmcsIGN1clN0clBvcywgbnVtQ2hhcnMpIHtcblx0ICAgICAgLy8gY2FsbCBiZWZvcmUgZnVuY3Rpb25zIGlmIGFwcGxpY2FibGVcblx0ICAgICAgaWYgKGN1clN0clBvcyA9PT0gMCkge1xuXHQgICAgICAgIHRoaXMudG9nZ2xlQmxpbmtpbmcoZmFsc2UpO1xuXHQgICAgICAgIHRoaXMub3B0aW9ucy5wcmVTdHJpbmdUeXBlZCh0aGlzLmFycmF5UG9zLCB0aGlzKTtcblx0ICAgICAgfVxuXHQgICAgICAvLyBzdGFydCB0eXBpbmcgZWFjaCBuZXcgY2hhciBpbnRvIGV4aXN0aW5nIHN0cmluZ1xuXHQgICAgICAvLyBjdXJTdHJpbmc6IGFyZywgdGhpcy5lbC5odG1sOiBvcmlnaW5hbCB0ZXh0IGluc2lkZSBlbGVtZW50XG5cdCAgICAgIGN1clN0clBvcyArPSBudW1DaGFycztcblx0ICAgICAgdmFyIG5leHRTdHJpbmcgPSBjdXJTdHJpbmcuc3Vic3RyKDAsIGN1clN0clBvcyk7XG5cdCAgICAgIHRoaXMucmVwbGFjZVRleHQobmV4dFN0cmluZyk7XG5cdCAgICAgIC8vIGxvb3AgdGhlIGZ1bmN0aW9uXG5cdCAgICAgIHRoaXMudHlwZXdyaXRlKGN1clN0cmluZywgY3VyU3RyUG9zKTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIFdlJ3JlIGRvbmUgdHlwaW5nIGFsbCBzdHJpbmdzXG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gY3VyU3RyaW5nIHRoZSBjdXJyZW50IHN0cmluZyBpbiB0aGUgc3RyaW5ncyBhcnJheVxuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IGN1clN0clBvcyB0aGUgY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgY3VyU3RyaW5nXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnZG9uZVR5cGluZycsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gZG9uZVR5cGluZyhjdXJTdHJpbmcsIGN1clN0clBvcykge1xuXHQgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblx0XG5cdCAgICAgIC8vIGZpcmVzIGNhbGxiYWNrIGZ1bmN0aW9uXG5cdCAgICAgIHRoaXMub3B0aW9ucy5vblN0cmluZ1R5cGVkKHRoaXMuYXJyYXlQb3MsIHRoaXMpO1xuXHQgICAgICB0aGlzLnRvZ2dsZUJsaW5raW5nKHRydWUpO1xuXHQgICAgICAvLyBpcyB0aGlzIHRoZSBmaW5hbCBzdHJpbmdcblx0ICAgICAgaWYgKHRoaXMuYXJyYXlQb3MgPT09IHRoaXMuc3RyaW5ncy5sZW5ndGggLSAxKSB7XG5cdCAgICAgICAgLy8gY2FsbGJhY2sgdGhhdCBvY2N1cnMgb24gdGhlIGxhc3QgdHlwZWQgc3RyaW5nXG5cdCAgICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuXHQgICAgICAgIC8vIHF1aXQgaWYgd2Ugd29udCBsb29wIGJhY2tcblx0ICAgICAgICBpZiAodGhpcy5sb29wID09PSBmYWxzZSB8fCB0aGlzLmN1ckxvb3AgPT09IHRoaXMubG9vcENvdW50KSB7XG5cdCAgICAgICAgICByZXR1cm47XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIF90aGlzMy5iYWNrc3BhY2UoY3VyU3RyaW5nLCBjdXJTdHJQb3MpO1xuXHQgICAgICB9LCB0aGlzLmJhY2tEZWxheSk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBCYWNrc3BhY2VzIDEgY2hhcmFjdGVyIGF0IGEgdGltZVxuXHQgICAgICogQHBhcmFtIHtzdHJpbmd9IGN1clN0cmluZyB0aGUgY3VycmVudCBzdHJpbmcgaW4gdGhlIHN0cmluZ3MgYXJyYXlcblx0ICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjdXJTdHJQb3MgdGhlIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGN1clN0cmluZ1xuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2JhY2tzcGFjZScsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gYmFja3NwYWNlKGN1clN0cmluZywgY3VyU3RyUG9zKSB7XG5cdCAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXHRcblx0ICAgICAgaWYgKHRoaXMucGF1c2Uuc3RhdHVzID09PSB0cnVlKSB7XG5cdCAgICAgICAgdGhpcy5zZXRQYXVzZVN0YXR1cyhjdXJTdHJpbmcsIGN1clN0clBvcywgdHJ1ZSk7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICB9XG5cdCAgICAgIGlmICh0aGlzLmZhZGVPdXQpIHJldHVybiB0aGlzLmluaXRGYWRlT3V0KCk7XG5cdFxuXHQgICAgICB0aGlzLnRvZ2dsZUJsaW5raW5nKGZhbHNlKTtcblx0ICAgICAgdmFyIGh1bWFuaXplID0gdGhpcy5odW1hbml6ZXIodGhpcy5iYWNrU3BlZWQpO1xuXHRcblx0ICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgY3VyU3RyUG9zID0gX2h0bWxQYXJzZXJKcy5odG1sUGFyc2VyLmJhY2tTcGFjZUh0bWxDaGFycyhjdXJTdHJpbmcsIGN1clN0clBvcywgX3RoaXM0KTtcblx0ICAgICAgICAvLyByZXBsYWNlIHRleHQgd2l0aCBiYXNlIHRleHQgKyB0eXBlZCBjaGFyYWN0ZXJzXG5cdCAgICAgICAgdmFyIGN1clN0cmluZ0F0UG9zaXRpb24gPSBjdXJTdHJpbmcuc3Vic3RyKDAsIGN1clN0clBvcyk7XG5cdCAgICAgICAgX3RoaXM0LnJlcGxhY2VUZXh0KGN1clN0cmluZ0F0UG9zaXRpb24pO1xuXHRcblx0ICAgICAgICAvLyBpZiBzbWFydEJhY2sgaXMgZW5hYmxlZFxuXHQgICAgICAgIGlmIChfdGhpczQuc21hcnRCYWNrc3BhY2UpIHtcblx0ICAgICAgICAgIC8vIHRoZSByZW1haW5pbmcgcGFydCBvZiB0aGUgY3VycmVudCBzdHJpbmcgaXMgZXF1YWwgb2YgdGhlIHNhbWUgcGFydCBvZiB0aGUgbmV3IHN0cmluZ1xuXHQgICAgICAgICAgdmFyIG5leHRTdHJpbmcgPSBfdGhpczQuc3RyaW5nc1tfdGhpczQuYXJyYXlQb3MgKyAxXTtcblx0ICAgICAgICAgIGlmIChuZXh0U3RyaW5nICYmIGN1clN0cmluZ0F0UG9zaXRpb24gPT09IG5leHRTdHJpbmcuc3Vic3RyKDAsIGN1clN0clBvcykpIHtcblx0ICAgICAgICAgICAgX3RoaXM0LnN0b3BOdW0gPSBjdXJTdHJQb3M7XG5cdCAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICBfdGhpczQuc3RvcE51bSA9IDA7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHRcblx0ICAgICAgICAvLyBpZiB0aGUgbnVtYmVyIChpZCBvZiBjaGFyYWN0ZXIgaW4gY3VycmVudCBzdHJpbmcpIGlzXG5cdCAgICAgICAgLy8gbGVzcyB0aGFuIHRoZSBzdG9wIG51bWJlciwga2VlcCBnb2luZ1xuXHQgICAgICAgIGlmIChjdXJTdHJQb3MgPiBfdGhpczQuc3RvcE51bSkge1xuXHQgICAgICAgICAgLy8gc3VidHJhY3QgY2hhcmFjdGVycyBvbmUgYnkgb25lXG5cdCAgICAgICAgICBjdXJTdHJQb3MtLTtcblx0ICAgICAgICAgIC8vIGxvb3AgdGhlIGZ1bmN0aW9uXG5cdCAgICAgICAgICBfdGhpczQuYmFja3NwYWNlKGN1clN0cmluZywgY3VyU3RyUG9zKTtcblx0ICAgICAgICB9IGVsc2UgaWYgKGN1clN0clBvcyA8PSBfdGhpczQuc3RvcE51bSkge1xuXHQgICAgICAgICAgLy8gaWYgdGhlIHN0b3AgbnVtYmVyIGhhcyBiZWVuIHJlYWNoZWQsIGluY3JlYXNlXG5cdCAgICAgICAgICAvLyBhcnJheSBwb3NpdGlvbiB0byBuZXh0IHN0cmluZ1xuXHQgICAgICAgICAgX3RoaXM0LmFycmF5UG9zKys7XG5cdCAgICAgICAgICAvLyBXaGVuIGxvb3BpbmcsIGJlZ2luIGF0IHRoZSBiZWdpbm5pbmcgYWZ0ZXIgYmFja3NwYWNlIGNvbXBsZXRlXG5cdCAgICAgICAgICBpZiAoX3RoaXM0LmFycmF5UG9zID09PSBfdGhpczQuc3RyaW5ncy5sZW5ndGgpIHtcblx0ICAgICAgICAgICAgX3RoaXM0LmFycmF5UG9zID0gMDtcblx0ICAgICAgICAgICAgX3RoaXM0Lm9wdGlvbnMub25MYXN0U3RyaW5nQmFja3NwYWNlZCgpO1xuXHQgICAgICAgICAgICBfdGhpczQuc2h1ZmZsZVN0cmluZ3NJZk5lZWRlZCgpO1xuXHQgICAgICAgICAgICBfdGhpczQuYmVnaW4oKTtcblx0ICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIF90aGlzNC50eXBld3JpdGUoX3RoaXM0LnN0cmluZ3NbX3RoaXM0LnNlcXVlbmNlW190aGlzNC5hcnJheVBvc11dLCBjdXJTdHJQb3MpO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgICAvLyBodW1hbml6ZWQgdmFsdWUgZm9yIHR5cGluZ1xuXHQgICAgICB9LCBodW1hbml6ZSk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBGdWxsIGFuaW1hdGlvbiBpcyBjb21wbGV0ZVxuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2NvbXBsZXRlJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcblx0ICAgICAgdGhpcy5vcHRpb25zLm9uQ29tcGxldGUodGhpcyk7XG5cdCAgICAgIGlmICh0aGlzLmxvb3ApIHtcblx0ICAgICAgICB0aGlzLmN1ckxvb3ArKztcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICB0aGlzLnR5cGluZ0NvbXBsZXRlID0gdHJ1ZTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogSGFzIHRoZSB0eXBpbmcgYmVlbiBzdG9wcGVkXG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gY3VyU3RyaW5nIHRoZSBjdXJyZW50IHN0cmluZyBpbiB0aGUgc3RyaW5ncyBhcnJheVxuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IGN1clN0clBvcyB0aGUgY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgY3VyU3RyaW5nXG5cdCAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzVHlwaW5nXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnc2V0UGF1c2VTdGF0dXMnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHNldFBhdXNlU3RhdHVzKGN1clN0cmluZywgY3VyU3RyUG9zLCBpc1R5cGluZykge1xuXHQgICAgICB0aGlzLnBhdXNlLnR5cGV3cml0ZSA9IGlzVHlwaW5nO1xuXHQgICAgICB0aGlzLnBhdXNlLmN1clN0cmluZyA9IGN1clN0cmluZztcblx0ICAgICAgdGhpcy5wYXVzZS5jdXJTdHJQb3MgPSBjdXJTdHJQb3M7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBUb2dnbGUgdGhlIGJsaW5raW5nIGN1cnNvclxuXHQgICAgICogQHBhcmFtIHtib29sZWFufSBpc0JsaW5raW5nXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAndG9nZ2xlQmxpbmtpbmcnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHRvZ2dsZUJsaW5raW5nKGlzQmxpbmtpbmcpIHtcblx0ICAgICAgaWYgKCF0aGlzLmN1cnNvcikgcmV0dXJuO1xuXHQgICAgICAvLyBpZiBpbiBwYXVzZWQgc3RhdGUsIGRvbid0IHRvZ2dsZSBibGlua2luZyBhIDJuZCB0aW1lXG5cdCAgICAgIGlmICh0aGlzLnBhdXNlLnN0YXR1cykgcmV0dXJuO1xuXHQgICAgICBpZiAodGhpcy5jdXJzb3JCbGlua2luZyA9PT0gaXNCbGlua2luZykgcmV0dXJuO1xuXHQgICAgICB0aGlzLmN1cnNvckJsaW5raW5nID0gaXNCbGlua2luZztcblx0ICAgICAgdmFyIHN0YXR1cyA9IGlzQmxpbmtpbmcgPyAnaW5maW5pdGUnIDogMDtcblx0ICAgICAgdGhpcy5jdXJzb3Iuc3R5bGUuYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQgPSBzdGF0dXM7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBTcGVlZCBpbiBNUyB0byB0eXBlXG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gc3BlZWRcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdodW1hbml6ZXInLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGh1bWFuaXplcihzcGVlZCkge1xuXHQgICAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogc3BlZWQgLyAyKSArIHNwZWVkO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogU2h1ZmZsZSB0aGUgc2VxdWVuY2Ugb2YgdGhlIHN0cmluZ3MgYXJyYXlcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdzaHVmZmxlU3RyaW5nc0lmTmVlZGVkJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBzaHVmZmxlU3RyaW5nc0lmTmVlZGVkKCkge1xuXHQgICAgICBpZiAoIXRoaXMuc2h1ZmZsZSkgcmV0dXJuO1xuXHQgICAgICB0aGlzLnNlcXVlbmNlID0gdGhpcy5zZXF1ZW5jZS5zb3J0KGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAtIDAuNTtcblx0ICAgICAgfSk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBBZGRzIGEgQ1NTIGNsYXNzIHRvIGZhZGUgb3V0IGN1cnJlbnQgc3RyaW5nXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnaW5pdEZhZGVPdXQnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGluaXRGYWRlT3V0KCkge1xuXHQgICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblx0XG5cdCAgICAgIHRoaXMuZWwuY2xhc3NOYW1lICs9ICcgJyArIHRoaXMuZmFkZU91dENsYXNzO1xuXHQgICAgICBpZiAodGhpcy5jdXJzb3IpIHRoaXMuY3Vyc29yLmNsYXNzTmFtZSArPSAnICcgKyB0aGlzLmZhZGVPdXRDbGFzcztcblx0ICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIF90aGlzNS5hcnJheVBvcysrO1xuXHQgICAgICAgIF90aGlzNS5yZXBsYWNlVGV4dCgnJyk7XG5cdFxuXHQgICAgICAgIC8vIFJlc2V0cyBjdXJyZW50IHN0cmluZyBpZiBlbmQgb2YgbG9vcCByZWFjaGVkXG5cdCAgICAgICAgaWYgKF90aGlzNS5zdHJpbmdzLmxlbmd0aCA+IF90aGlzNS5hcnJheVBvcykge1xuXHQgICAgICAgICAgX3RoaXM1LnR5cGV3cml0ZShfdGhpczUuc3RyaW5nc1tfdGhpczUuc2VxdWVuY2VbX3RoaXM1LmFycmF5UG9zXV0sIDApO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICBfdGhpczUudHlwZXdyaXRlKF90aGlzNS5zdHJpbmdzWzBdLCAwKTtcblx0ICAgICAgICAgIF90aGlzNS5hcnJheVBvcyA9IDA7XG5cdCAgICAgICAgfVxuXHQgICAgICB9LCB0aGlzLmZhZGVPdXREZWxheSk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBSZXBsYWNlcyBjdXJyZW50IHRleHQgaW4gdGhlIEhUTUwgZWxlbWVudFxuXHQgICAgICogZGVwZW5kaW5nIG9uIGVsZW1lbnQgdHlwZVxuXHQgICAgICogQHBhcmFtIHtzdHJpbmd9IHN0clxuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ3JlcGxhY2VUZXh0Jyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiByZXBsYWNlVGV4dChzdHIpIHtcblx0ICAgICAgaWYgKHRoaXMuYXR0cikge1xuXHQgICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKHRoaXMuYXR0ciwgc3RyKTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBpZiAodGhpcy5pc0lucHV0KSB7XG5cdCAgICAgICAgICB0aGlzLmVsLnZhbHVlID0gc3RyO1xuXHQgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jb250ZW50VHlwZSA9PT0gJ2h0bWwnKSB7XG5cdCAgICAgICAgICB0aGlzLmVsLmlubmVySFRNTCA9IHN0cjtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgdGhpcy5lbC50ZXh0Q29udGVudCA9IHN0cjtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIElmIHVzaW5nIGlucHV0IGVsZW1lbnRzLCBiaW5kIGZvY3VzIGluIG9yZGVyIHRvXG5cdCAgICAgKiBzdGFydCBhbmQgc3RvcCB0aGUgYW5pbWF0aW9uXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnYmluZEZvY3VzRXZlbnRzJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBiaW5kRm9jdXNFdmVudHMoKSB7XG5cdCAgICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXHRcblx0ICAgICAgaWYgKCF0aGlzLmlzSW5wdXQpIHJldHVybjtcblx0ICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZ1bmN0aW9uIChlKSB7XG5cdCAgICAgICAgX3RoaXM2LnN0b3AoKTtcblx0ICAgICAgfSk7XG5cdCAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGZ1bmN0aW9uIChlKSB7XG5cdCAgICAgICAgaWYgKF90aGlzNi5lbC52YWx1ZSAmJiBfdGhpczYuZWwudmFsdWUubGVuZ3RoICE9PSAwKSB7XG5cdCAgICAgICAgICByZXR1cm47XG5cdCAgICAgICAgfVxuXHQgICAgICAgIF90aGlzNi5zdGFydCgpO1xuXHQgICAgICB9KTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIE9uIGluaXQsIGluc2VydCB0aGUgY3Vyc29yIGVsZW1lbnRcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdpbnNlcnRDdXJzb3InLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGluc2VydEN1cnNvcigpIHtcblx0ICAgICAgaWYgKCF0aGlzLnNob3dDdXJzb3IpIHJldHVybjtcblx0ICAgICAgaWYgKHRoaXMuY3Vyc29yKSByZXR1cm47XG5cdCAgICAgIHRoaXMuY3Vyc29yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHQgICAgICB0aGlzLmN1cnNvci5jbGFzc05hbWUgPSAndHlwZWQtY3Vyc29yJztcblx0ICAgICAgdGhpcy5jdXJzb3IuaW5uZXJIVE1MID0gdGhpcy5jdXJzb3JDaGFyO1xuXHQgICAgICB0aGlzLmVsLnBhcmVudE5vZGUgJiYgdGhpcy5lbC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLmN1cnNvciwgdGhpcy5lbC5uZXh0U2libGluZyk7XG5cdCAgICB9XG5cdCAgfV0pO1xuXHRcblx0ICByZXR1cm4gVHlwZWQ7XG5cdH0pKCk7XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBUeXBlZDtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0XG5cdHZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cdFxuXHR2YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXHRcblx0ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXHRcblx0ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cdFxuXHR2YXIgX2RlZmF1bHRzSnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXHRcblx0dmFyIF9kZWZhdWx0c0pzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmF1bHRzSnMpO1xuXHRcblx0LyoqXG5cdCAqIEluaXRpYWxpemUgdGhlIFR5cGVkIG9iamVjdFxuXHQgKi9cblx0XG5cdHZhciBJbml0aWFsaXplciA9IChmdW5jdGlvbiAoKSB7XG5cdCAgZnVuY3Rpb24gSW5pdGlhbGl6ZXIoKSB7XG5cdCAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5pdGlhbGl6ZXIpO1xuXHQgIH1cblx0XG5cdCAgX2NyZWF0ZUNsYXNzKEluaXRpYWxpemVyLCBbe1xuXHQgICAga2V5OiAnbG9hZCcsXG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBMb2FkIHVwIGRlZmF1bHRzICYgb3B0aW9ucyBvbiB0aGUgVHlwZWQgaW5zdGFuY2Vcblx0ICAgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGYgaW5zdGFuY2Ugb2YgVHlwZWRcblx0ICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIG9wdGlvbnMgb2JqZWN0XG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gZWxlbWVudElkIEhUTUwgZWxlbWVudCBJRCBfT1JfIGluc3RhbmNlIG9mIEhUTUwgZWxlbWVudFxuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHRcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkKHNlbGYsIG9wdGlvbnMsIGVsZW1lbnRJZCkge1xuXHQgICAgICAvLyBjaG9zZW4gZWxlbWVudCB0byBtYW5pcHVsYXRlIHRleHRcblx0ICAgICAgaWYgKHR5cGVvZiBlbGVtZW50SWQgPT09ICdzdHJpbmcnKSB7XG5cdCAgICAgICAgc2VsZi5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudElkKTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBzZWxmLmVsID0gZWxlbWVudElkO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICBzZWxmLm9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgX2RlZmF1bHRzSnMyWydkZWZhdWx0J10sIG9wdGlvbnMpO1xuXHRcblx0ICAgICAgLy8gYXR0cmlidXRlIHRvIHR5cGUgaW50b1xuXHQgICAgICBzZWxmLmlzSW5wdXQgPSBzZWxmLmVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lucHV0Jztcblx0ICAgICAgc2VsZi5hdHRyID0gc2VsZi5vcHRpb25zLmF0dHI7XG5cdCAgICAgIHNlbGYuYmluZElucHV0Rm9jdXNFdmVudHMgPSBzZWxmLm9wdGlvbnMuYmluZElucHV0Rm9jdXNFdmVudHM7XG5cdFxuXHQgICAgICAvLyBzaG93IGN1cnNvclxuXHQgICAgICBzZWxmLnNob3dDdXJzb3IgPSBzZWxmLmlzSW5wdXQgPyBmYWxzZSA6IHNlbGYub3B0aW9ucy5zaG93Q3Vyc29yO1xuXHRcblx0ICAgICAgLy8gY3VzdG9tIGN1cnNvclxuXHQgICAgICBzZWxmLmN1cnNvckNoYXIgPSBzZWxmLm9wdGlvbnMuY3Vyc29yQ2hhcjtcblx0XG5cdCAgICAgIC8vIElzIHRoZSBjdXJzb3IgYmxpbmtpbmdcblx0ICAgICAgc2VsZi5jdXJzb3JCbGlua2luZyA9IHRydWU7XG5cdFxuXHQgICAgICAvLyB0ZXh0IGNvbnRlbnQgb2YgZWxlbWVudFxuXHQgICAgICBzZWxmLmVsQ29udGVudCA9IHNlbGYuYXR0ciA/IHNlbGYuZWwuZ2V0QXR0cmlidXRlKHNlbGYuYXR0cikgOiBzZWxmLmVsLnRleHRDb250ZW50O1xuXHRcblx0ICAgICAgLy8gaHRtbCBvciBwbGFpbiB0ZXh0XG5cdCAgICAgIHNlbGYuY29udGVudFR5cGUgPSBzZWxmLm9wdGlvbnMuY29udGVudFR5cGU7XG5cdFxuXHQgICAgICAvLyB0eXBpbmcgc3BlZWRcblx0ICAgICAgc2VsZi50eXBlU3BlZWQgPSBzZWxmLm9wdGlvbnMudHlwZVNwZWVkO1xuXHRcblx0ICAgICAgLy8gYWRkIGEgZGVsYXkgYmVmb3JlIHR5cGluZyBzdGFydHNcblx0ICAgICAgc2VsZi5zdGFydERlbGF5ID0gc2VsZi5vcHRpb25zLnN0YXJ0RGVsYXk7XG5cdFxuXHQgICAgICAvLyBiYWNrc3BhY2luZyBzcGVlZFxuXHQgICAgICBzZWxmLmJhY2tTcGVlZCA9IHNlbGYub3B0aW9ucy5iYWNrU3BlZWQ7XG5cdFxuXHQgICAgICAvLyBvbmx5IGJhY2tzcGFjZSB3aGF0IGRvZXNuJ3QgbWF0Y2ggdGhlIHByZXZpb3VzIHN0cmluZ1xuXHQgICAgICBzZWxmLnNtYXJ0QmFja3NwYWNlID0gc2VsZi5vcHRpb25zLnNtYXJ0QmFja3NwYWNlO1xuXHRcblx0ICAgICAgLy8gYW1vdW50IG9mIHRpbWUgdG8gd2FpdCBiZWZvcmUgYmFja3NwYWNpbmdcblx0ICAgICAgc2VsZi5iYWNrRGVsYXkgPSBzZWxmLm9wdGlvbnMuYmFja0RlbGF5O1xuXHRcblx0ICAgICAgLy8gRmFkZSBvdXQgaW5zdGVhZCBvZiBiYWNrc3BhY2Vcblx0ICAgICAgc2VsZi5mYWRlT3V0ID0gc2VsZi5vcHRpb25zLmZhZGVPdXQ7XG5cdCAgICAgIHNlbGYuZmFkZU91dENsYXNzID0gc2VsZi5vcHRpb25zLmZhZGVPdXRDbGFzcztcblx0ICAgICAgc2VsZi5mYWRlT3V0RGVsYXkgPSBzZWxmLm9wdGlvbnMuZmFkZU91dERlbGF5O1xuXHRcblx0ICAgICAgLy8gdmFyaWFibGUgdG8gY2hlY2sgd2hldGhlciB0eXBpbmcgaXMgY3VycmVudGx5IHBhdXNlZFxuXHQgICAgICBzZWxmLmlzUGF1c2VkID0gZmFsc2U7XG5cdFxuXHQgICAgICAvLyBpbnB1dCBzdHJpbmdzIG9mIHRleHRcblx0ICAgICAgc2VsZi5zdHJpbmdzID0gc2VsZi5vcHRpb25zLnN0cmluZ3MubWFwKGZ1bmN0aW9uIChzKSB7XG5cdCAgICAgICAgcmV0dXJuIHMudHJpbSgpO1xuXHQgICAgICB9KTtcblx0XG5cdCAgICAgIC8vIGRpdiBjb250YWluaW5nIHN0cmluZ3Ncblx0ICAgICAgaWYgKHR5cGVvZiBzZWxmLm9wdGlvbnMuc3RyaW5nc0VsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG5cdCAgICAgICAgc2VsZi5zdHJpbmdzRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZi5vcHRpb25zLnN0cmluZ3NFbGVtZW50KTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBzZWxmLnN0cmluZ3NFbGVtZW50ID0gc2VsZi5vcHRpb25zLnN0cmluZ3NFbGVtZW50O1xuXHQgICAgICB9XG5cdFxuXHQgICAgICBpZiAoc2VsZi5zdHJpbmdzRWxlbWVudCkge1xuXHQgICAgICAgIHNlbGYuc3RyaW5ncyA9IFtdO1xuXHQgICAgICAgIHNlbGYuc3RyaW5nc0VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0ICAgICAgICB2YXIgc3RyaW5ncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShzZWxmLnN0cmluZ3NFbGVtZW50LmNoaWxkcmVuKTtcblx0ICAgICAgICB2YXIgc3RyaW5nc0xlbmd0aCA9IHN0cmluZ3MubGVuZ3RoO1xuXHRcblx0ICAgICAgICBpZiAoc3RyaW5nc0xlbmd0aCkge1xuXHQgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHJpbmdzTGVuZ3RoOyBpICs9IDEpIHtcblx0ICAgICAgICAgICAgdmFyIHN0cmluZ0VsID0gc3RyaW5nc1tpXTtcblx0ICAgICAgICAgICAgc2VsZi5zdHJpbmdzLnB1c2goc3RyaW5nRWwuaW5uZXJIVE1MLnRyaW0oKSk7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdFxuXHQgICAgICAvLyBjaGFyYWN0ZXIgbnVtYmVyIHBvc2l0aW9uIG9mIGN1cnJlbnQgc3RyaW5nXG5cdCAgICAgIHNlbGYuc3RyUG9zID0gMDtcblx0XG5cdCAgICAgIC8vIGN1cnJlbnQgYXJyYXkgcG9zaXRpb25cblx0ICAgICAgc2VsZi5hcnJheVBvcyA9IDA7XG5cdFxuXHQgICAgICAvLyBpbmRleCBvZiBzdHJpbmcgdG8gc3RvcCBiYWNrc3BhY2luZyBvblxuXHQgICAgICBzZWxmLnN0b3BOdW0gPSAwO1xuXHRcblx0ICAgICAgLy8gTG9vcGluZyBsb2dpY1xuXHQgICAgICBzZWxmLmxvb3AgPSBzZWxmLm9wdGlvbnMubG9vcDtcblx0ICAgICAgc2VsZi5sb29wQ291bnQgPSBzZWxmLm9wdGlvbnMubG9vcENvdW50O1xuXHQgICAgICBzZWxmLmN1ckxvb3AgPSAwO1xuXHRcblx0ICAgICAgLy8gc2h1ZmZsZSB0aGUgc3RyaW5nc1xuXHQgICAgICBzZWxmLnNodWZmbGUgPSBzZWxmLm9wdGlvbnMuc2h1ZmZsZTtcblx0ICAgICAgLy8gdGhlIG9yZGVyIG9mIHN0cmluZ3Ncblx0ICAgICAgc2VsZi5zZXF1ZW5jZSA9IFtdO1xuXHRcblx0ICAgICAgc2VsZi5wYXVzZSA9IHtcblx0ICAgICAgICBzdGF0dXM6IGZhbHNlLFxuXHQgICAgICAgIHR5cGV3cml0ZTogdHJ1ZSxcblx0ICAgICAgICBjdXJTdHJpbmc6ICcnLFxuXHQgICAgICAgIGN1clN0clBvczogMFxuXHQgICAgICB9O1xuXHRcblx0ICAgICAgLy8gV2hlbiB0aGUgdHlwaW5nIGlzIGNvbXBsZXRlICh3aGVuIG5vdCBsb29wZWQpXG5cdCAgICAgIHNlbGYudHlwaW5nQ29tcGxldGUgPSBmYWxzZTtcblx0XG5cdCAgICAgIC8vIFNldCB0aGUgb3JkZXIgaW4gd2hpY2ggdGhlIHN0cmluZ3MgYXJlIHR5cGVkXG5cdCAgICAgIGZvciAodmFyIGkgaW4gc2VsZi5zdHJpbmdzKSB7XG5cdCAgICAgICAgc2VsZi5zZXF1ZW5jZVtpXSA9IGk7XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIC8vIElmIHRoZXJlIGlzIHNvbWUgdGV4dCBpbiB0aGUgZWxlbWVudFxuXHQgICAgICBzZWxmLmN1cnJlbnRFbENvbnRlbnQgPSB0aGlzLmdldEN1cnJlbnRFbENvbnRlbnQoc2VsZik7XG5cdFxuXHQgICAgICBzZWxmLmF1dG9JbnNlcnRDc3MgPSBzZWxmLm9wdGlvbnMuYXV0b0luc2VydENzcztcblx0XG5cdCAgICAgIHRoaXMuYXBwZW5kQW5pbWF0aW9uQ3NzKHNlbGYpO1xuXHQgICAgfVxuXHQgIH0sIHtcblx0ICAgIGtleTogJ2dldEN1cnJlbnRFbENvbnRlbnQnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEN1cnJlbnRFbENvbnRlbnQoc2VsZikge1xuXHQgICAgICB2YXIgZWxDb250ZW50ID0gJyc7XG5cdCAgICAgIGlmIChzZWxmLmF0dHIpIHtcblx0ICAgICAgICBlbENvbnRlbnQgPSBzZWxmLmVsLmdldEF0dHJpYnV0ZShzZWxmLmF0dHIpO1xuXHQgICAgICB9IGVsc2UgaWYgKHNlbGYuaXNJbnB1dCkge1xuXHQgICAgICAgIGVsQ29udGVudCA9IHNlbGYuZWwudmFsdWU7XG5cdCAgICAgIH0gZWxzZSBpZiAoc2VsZi5jb250ZW50VHlwZSA9PT0gJ2h0bWwnKSB7XG5cdCAgICAgICAgZWxDb250ZW50ID0gc2VsZi5lbC5pbm5lckhUTUw7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgZWxDb250ZW50ID0gc2VsZi5lbC50ZXh0Q29udGVudDtcblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gZWxDb250ZW50O1xuXHQgICAgfVxuXHQgIH0sIHtcblx0ICAgIGtleTogJ2FwcGVuZEFuaW1hdGlvbkNzcycsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kQW5pbWF0aW9uQ3NzKHNlbGYpIHtcblx0ICAgICAgaWYgKCFzZWxmLmF1dG9JbnNlcnRDc3MpIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKCFzZWxmLnNob3dDdXJzb3IgfHwgIXNlbGYuZmFkZU91dCkge1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfVxuXHRcblx0ICAgICAgdmFyIGNzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cdCAgICAgIGNzcy50eXBlID0gJ3RleHQvY3NzJztcblx0ICAgICAgdmFyIGlubmVyQ3NzID0gJyc7XG5cdCAgICAgIGlmIChzZWxmLnNob3dDdXJzb3IpIHtcblx0ICAgICAgICBpbm5lckNzcyArPSAnXFxuICAgICAgICAudHlwZWQtY3Vyc29ye1xcbiAgICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgICBhbmltYXRpb246IHR5cGVkanNCbGluayAwLjdzIGluZmluaXRlO1xcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogdHlwZWRqc0JsaW5rIDAuN3MgaW5maW5pdGU7XFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiB0eXBlZGpzQmxpbmsgMC43cyBpbmZpbml0ZTtcXG4gICAgICAgIH1cXG4gICAgICAgIEBrZXlmcmFtZXMgdHlwZWRqc0JsaW5re1xcbiAgICAgICAgICA1MCUgeyBvcGFjaXR5OiAwLjA7IH1cXG4gICAgICAgIH1cXG4gICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyB0eXBlZGpzQmxpbmt7XFxuICAgICAgICAgIDAlIHsgb3BhY2l0eTogMTsgfVxcbiAgICAgICAgICA1MCUgeyBvcGFjaXR5OiAwLjA7IH1cXG4gICAgICAgICAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cXG4gICAgICAgIH1cXG4gICAgICAnO1xuXHQgICAgICB9XG5cdCAgICAgIGlmIChzZWxmLmZhZGVPdXQpIHtcblx0ICAgICAgICBpbm5lckNzcyArPSAnXFxuICAgICAgICAudHlwZWQtZmFkZS1vdXR7XFxuICAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjI1cztcXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IDA7XFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiAwO1xcbiAgICAgICAgfVxcbiAgICAgICc7XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKGNzcy5sZW5ndGggPT09IDApIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblx0ICAgICAgY3NzLmlubmVySFRNTCA9IGlubmVyQ3NzO1xuXHQgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGNzcyk7XG5cdCAgICB9XG5cdCAgfV0pO1xuXHRcblx0ICByZXR1cm4gSW5pdGlhbGl6ZXI7XG5cdH0pKCk7XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBJbml0aWFsaXplcjtcblx0dmFyIGluaXRpYWxpemVyID0gbmV3IEluaXRpYWxpemVyKCk7XG5cdGV4cG9ydHMuaW5pdGlhbGl6ZXIgPSBpbml0aWFsaXplcjtcblxuLyoqKi8gfSksXG4vKiAyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0LyoqXG5cdCAqIERlZmF1bHRzICYgb3B0aW9uc1xuXHQgKiBAcmV0dXJucyB7b2JqZWN0fSBUeXBlZCBkZWZhdWx0cyAmIG9wdGlvbnNcblx0ICogQHB1YmxpY1xuXHQgKi9cblx0XG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0dmFyIGRlZmF1bHRzID0ge1xuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7YXJyYXl9IHN0cmluZ3Mgc3RyaW5ncyB0byBiZSB0eXBlZFxuXHQgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBzdHJpbmdzRWxlbWVudCBJRCBvZiBlbGVtZW50IGNvbnRhaW5pbmcgc3RyaW5nIGNoaWxkcmVuXG5cdCAgICovXG5cdCAgc3RyaW5nczogWydUaGVzZSBhcmUgdGhlIGRlZmF1bHQgdmFsdWVzLi4uJywgJ1lvdSBrbm93IHdoYXQgeW91IHNob3VsZCBkbz8nLCAnVXNlIHlvdXIgb3duIScsICdIYXZlIGEgZ3JlYXQgZGF5ISddLFxuXHQgIHN0cmluZ3NFbGVtZW50OiBudWxsLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge251bWJlcn0gdHlwZVNwZWVkIHR5cGUgc3BlZWQgaW4gbWlsbGlzZWNvbmRzXG5cdCAgICovXG5cdCAgdHlwZVNwZWVkOiAwLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge251bWJlcn0gc3RhcnREZWxheSB0aW1lIGJlZm9yZSB0eXBpbmcgc3RhcnRzIGluIG1pbGxpc2Vjb25kc1xuXHQgICAqL1xuXHQgIHN0YXJ0RGVsYXk6IDAsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBiYWNrU3BlZWQgYmFja3NwYWNpbmcgc3BlZWQgaW4gbWlsbGlzZWNvbmRzXG5cdCAgICovXG5cdCAgYmFja1NwZWVkOiAwLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHNtYXJ0QmFja3NwYWNlIG9ubHkgYmFja3NwYWNlIHdoYXQgZG9lc24ndCBtYXRjaCB0aGUgcHJldmlvdXMgc3RyaW5nXG5cdCAgICovXG5cdCAgc21hcnRCYWNrc3BhY2U6IHRydWUsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gc2h1ZmZsZSBzaHVmZmxlIHRoZSBzdHJpbmdzXG5cdCAgICovXG5cdCAgc2h1ZmZsZTogZmFsc2UsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBiYWNrRGVsYXkgdGltZSBiZWZvcmUgYmFja3NwYWNpbmcgaW4gbWlsbGlzZWNvbmRzXG5cdCAgICovXG5cdCAgYmFja0RlbGF5OiA3MDAsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZmFkZU91dCBGYWRlIG91dCBpbnN0ZWFkIG9mIGJhY2tzcGFjZVxuXHQgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBmYWRlT3V0Q2xhc3MgY3NzIGNsYXNzIGZvciBmYWRlIGFuaW1hdGlvblxuXHQgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZmFkZU91dERlbGF5IEZhZGUgb3V0IGRlbGF5IGluIG1pbGxpc2Vjb25kc1xuXHQgICAqL1xuXHQgIGZhZGVPdXQ6IGZhbHNlLFxuXHQgIGZhZGVPdXRDbGFzczogJ3R5cGVkLWZhZGUtb3V0Jyxcblx0ICBmYWRlT3V0RGVsYXk6IDUwMCxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtib29sZWFufSBsb29wIGxvb3Agc3RyaW5nc1xuXHQgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBsb29wQ291bnQgYW1vdW50IG9mIGxvb3BzXG5cdCAgICovXG5cdCAgbG9vcDogZmFsc2UsXG5cdCAgbG9vcENvdW50OiBJbmZpbml0eSxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtib29sZWFufSBzaG93Q3Vyc29yIHNob3cgY3Vyc29yXG5cdCAgICogQHByb3BlcnR5IHtzdHJpbmd9IGN1cnNvckNoYXIgY2hhcmFjdGVyIGZvciBjdXJzb3Jcblx0ICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGF1dG9JbnNlcnRDc3MgaW5zZXJ0IENTUyBmb3IgY3Vyc29yIGFuZCBmYWRlT3V0IGludG8gSFRNTCA8aGVhZD5cblx0ICAgKi9cblx0ICBzaG93Q3Vyc29yOiB0cnVlLFxuXHQgIGN1cnNvckNoYXI6ICd8Jyxcblx0ICBhdXRvSW5zZXJ0Q3NzOiB0cnVlLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge3N0cmluZ30gYXR0ciBhdHRyaWJ1dGUgZm9yIHR5cGluZ1xuXHQgICAqIEV4OiBpbnB1dCBwbGFjZWhvbGRlciwgdmFsdWUsIG9yIGp1c3QgSFRNTCB0ZXh0XG5cdCAgICovXG5cdCAgYXR0cjogbnVsbCxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtib29sZWFufSBiaW5kSW5wdXRGb2N1c0V2ZW50cyBiaW5kIHRvIGZvY3VzIGFuZCBibHVyIGlmIGVsIGlzIHRleHQgaW5wdXRcblx0ICAgKi9cblx0ICBiaW5kSW5wdXRGb2N1c0V2ZW50czogZmFsc2UsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBjb250ZW50VHlwZSAnaHRtbCcgb3IgJ251bGwnIGZvciBwbGFpbnRleHRcblx0ICAgKi9cblx0ICBjb250ZW50VHlwZTogJ2h0bWwnLFxuXHRcblx0ICAvKipcblx0ICAgKiBBbGwgdHlwaW5nIGlzIGNvbXBsZXRlXG5cdCAgICogQHBhcmFtIHtUeXBlZH0gc2VsZlxuXHQgICAqL1xuXHQgIG9uQ29tcGxldGU6IGZ1bmN0aW9uIG9uQ29tcGxldGUoc2VsZikge30sXG5cdFxuXHQgIC8qKlxuXHQgICAqIEJlZm9yZSBlYWNoIHN0cmluZyBpcyB0eXBlZFxuXHQgICAqIEBwYXJhbSB7bnVtYmVyfSBhcnJheVBvc1xuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBwcmVTdHJpbmdUeXBlZDogZnVuY3Rpb24gcHJlU3RyaW5nVHlwZWQoYXJyYXlQb3MsIHNlbGYpIHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBBZnRlciBlYWNoIHN0cmluZyBpcyB0eXBlZFxuXHQgICAqIEBwYXJhbSB7bnVtYmVyfSBhcnJheVBvc1xuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBvblN0cmluZ1R5cGVkOiBmdW5jdGlvbiBvblN0cmluZ1R5cGVkKGFycmF5UG9zLCBzZWxmKSB7fSxcblx0XG5cdCAgLyoqXG5cdCAgICogRHVyaW5nIGxvb3BpbmcsIGFmdGVyIGxhc3Qgc3RyaW5nIGlzIHR5cGVkXG5cdCAgICogQHBhcmFtIHtUeXBlZH0gc2VsZlxuXHQgICAqL1xuXHQgIG9uTGFzdFN0cmluZ0JhY2tzcGFjZWQ6IGZ1bmN0aW9uIG9uTGFzdFN0cmluZ0JhY2tzcGFjZWQoc2VsZikge30sXG5cdFxuXHQgIC8qKlxuXHQgICAqIFR5cGluZyBoYXMgYmVlbiBzdG9wcGVkXG5cdCAgICogQHBhcmFtIHtudW1iZXJ9IGFycmF5UG9zXG5cdCAgICogQHBhcmFtIHtUeXBlZH0gc2VsZlxuXHQgICAqL1xuXHQgIG9uVHlwaW5nUGF1c2VkOiBmdW5jdGlvbiBvblR5cGluZ1BhdXNlZChhcnJheVBvcywgc2VsZikge30sXG5cdFxuXHQgIC8qKlxuXHQgICAqIFR5cGluZyBoYXMgYmVlbiBzdGFydGVkIGFmdGVyIGJlaW5nIHN0b3BwZWRcblx0ICAgKiBAcGFyYW0ge251bWJlcn0gYXJyYXlQb3Ncblx0ICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmXG5cdCAgICovXG5cdCAgb25UeXBpbmdSZXN1bWVkOiBmdW5jdGlvbiBvblR5cGluZ1Jlc3VtZWQoYXJyYXlQb3MsIHNlbGYpIHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBBZnRlciByZXNldFxuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBvblJlc2V0OiBmdW5jdGlvbiBvblJlc2V0KHNlbGYpIHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBBZnRlciBzdG9wXG5cdCAgICogQHBhcmFtIHtudW1iZXJ9IGFycmF5UG9zXG5cdCAgICogQHBhcmFtIHtUeXBlZH0gc2VsZlxuXHQgICAqL1xuXHQgIG9uU3RvcDogZnVuY3Rpb24gb25TdG9wKGFycmF5UG9zLCBzZWxmKSB7fSxcblx0XG5cdCAgLyoqXG5cdCAgICogQWZ0ZXIgc3RhcnRcblx0ICAgKiBAcGFyYW0ge251bWJlcn0gYXJyYXlQb3Ncblx0ICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmXG5cdCAgICovXG5cdCAgb25TdGFydDogZnVuY3Rpb24gb25TdGFydChhcnJheVBvcywgc2VsZikge30sXG5cdFxuXHQgIC8qKlxuXHQgICAqIEFmdGVyIGRlc3Ryb3lcblx0ICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmXG5cdCAgICovXG5cdCAgb25EZXN0cm95OiBmdW5jdGlvbiBvbkRlc3Ryb3koc2VsZikge31cblx0fTtcblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IGRlZmF1bHRzO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiAzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0XG5cdC8qKlxuXHQgKiBUT0RPOiBUaGVzZSBtZXRob2RzIGNhbiBwcm9iYWJseSBiZSBjb21iaW5lZCBzb21laG93XG5cdCAqIFBhcnNlIEhUTUwgdGFncyAmIEhUTUwgQ2hhcmFjdGVyc1xuXHQgKi9cblx0XG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0XG5cdHZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cdFxuXHRmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblx0XG5cdHZhciBIVE1MUGFyc2VyID0gKGZ1bmN0aW9uICgpIHtcblx0ICBmdW5jdGlvbiBIVE1MUGFyc2VyKCkge1xuXHQgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhUTUxQYXJzZXIpO1xuXHQgIH1cblx0XG5cdCAgX2NyZWF0ZUNsYXNzKEhUTUxQYXJzZXIsIFt7XG5cdCAgICBrZXk6ICd0eXBlSHRtbENoYXJzJyxcblx0XG5cdCAgICAvKipcblx0ICAgICAqIFR5cGUgSFRNTCB0YWdzICYgSFRNTCBDaGFyYWN0ZXJzXG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gY3VyU3RyaW5nIEN1cnJlbnQgc3RyaW5nXG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gY3VyU3RyUG9zIFBvc2l0aW9uIGluIGN1cnJlbnQgc3RyaW5nXG5cdCAgICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmIGluc3RhbmNlIG9mIFR5cGVkXG5cdCAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSBhIG5ldyBzdHJpbmcgcG9zaXRpb25cblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0XG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gdHlwZUh0bWxDaGFycyhjdXJTdHJpbmcsIGN1clN0clBvcywgc2VsZikge1xuXHQgICAgICBpZiAoc2VsZi5jb250ZW50VHlwZSAhPT0gJ2h0bWwnKSByZXR1cm4gY3VyU3RyUG9zO1xuXHQgICAgICB2YXIgY3VyQ2hhciA9IGN1clN0cmluZy5zdWJzdHIoY3VyU3RyUG9zKS5jaGFyQXQoMCk7XG5cdCAgICAgIGlmIChjdXJDaGFyID09PSAnPCcgfHwgY3VyQ2hhciA9PT0gJyYnKSB7XG5cdCAgICAgICAgdmFyIGVuZFRhZyA9ICcnO1xuXHQgICAgICAgIGlmIChjdXJDaGFyID09PSAnPCcpIHtcblx0ICAgICAgICAgIGVuZFRhZyA9ICc+Jztcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgZW5kVGFnID0gJzsnO1xuXHQgICAgICAgIH1cblx0ICAgICAgICB3aGlsZSAoY3VyU3RyaW5nLnN1YnN0cihjdXJTdHJQb3MgKyAxKS5jaGFyQXQoMCkgIT09IGVuZFRhZykge1xuXHQgICAgICAgICAgY3VyU3RyUG9zKys7XG5cdCAgICAgICAgICBpZiAoY3VyU3RyUG9zICsgMSA+IGN1clN0cmluZy5sZW5ndGgpIHtcblx0ICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGN1clN0clBvcysrO1xuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiBjdXJTdHJQb3M7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBCYWNrc3BhY2UgSFRNTCB0YWdzIGFuZCBIVE1MIENoYXJhY3RlcnNcblx0ICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjdXJTdHJpbmcgQ3VycmVudCBzdHJpbmdcblx0ICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjdXJTdHJQb3MgUG9zaXRpb24gaW4gY3VycmVudCBzdHJpbmdcblx0ICAgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGYgaW5zdGFuY2Ugb2YgVHlwZWRcblx0ICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IGEgbmV3IHN0cmluZyBwb3NpdGlvblxuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2JhY2tTcGFjZUh0bWxDaGFycycsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gYmFja1NwYWNlSHRtbENoYXJzKGN1clN0cmluZywgY3VyU3RyUG9zLCBzZWxmKSB7XG5cdCAgICAgIGlmIChzZWxmLmNvbnRlbnRUeXBlICE9PSAnaHRtbCcpIHJldHVybiBjdXJTdHJQb3M7XG5cdCAgICAgIHZhciBjdXJDaGFyID0gY3VyU3RyaW5nLnN1YnN0cihjdXJTdHJQb3MpLmNoYXJBdCgwKTtcblx0ICAgICAgaWYgKGN1ckNoYXIgPT09ICc+JyB8fCBjdXJDaGFyID09PSAnOycpIHtcblx0ICAgICAgICB2YXIgZW5kVGFnID0gJyc7XG5cdCAgICAgICAgaWYgKGN1ckNoYXIgPT09ICc+Jykge1xuXHQgICAgICAgICAgZW5kVGFnID0gJzwnO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICBlbmRUYWcgPSAnJic7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHdoaWxlIChjdXJTdHJpbmcuc3Vic3RyKGN1clN0clBvcyAtIDEpLmNoYXJBdCgwKSAhPT0gZW5kVGFnKSB7XG5cdCAgICAgICAgICBjdXJTdHJQb3MtLTtcblx0ICAgICAgICAgIGlmIChjdXJTdHJQb3MgPCAwKSB7XG5cdCAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgICBjdXJTdHJQb3MtLTtcblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gY3VyU3RyUG9zO1xuXHQgICAgfVxuXHQgIH1dKTtcblx0XG5cdCAgcmV0dXJuIEhUTUxQYXJzZXI7XG5cdH0pKCk7XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBIVE1MUGFyc2VyO1xuXHR2YXIgaHRtbFBhcnNlciA9IG5ldyBIVE1MUGFyc2VyKCk7XG5cdGV4cG9ydHMuaHRtbFBhcnNlciA9IGh0bWxQYXJzZXI7XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKVxufSk7XG47XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdHlwZWQuanMvbGliL3R5cGVkLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBxaCBmcm9tICdxdWlja2h1bGwzZCc7XHJcblxyXG50eXBlIFBvaW50MyA9IG51bWJlcltdO1xyXG5jb25zdCBlOiBCb2lsZXJwbGF0ZUVuZ2luZSA9IHdpbmRvdztcclxuY29uc3QgZW51bWVyYXRlID0gZS5lbnVtZXJhdGU7XHJcbmNvbnN0IHpvb20gPSAxLjU7XHJcblxyXG5leHBvcnQgY2xhc3MgR3JhcGhEZW1vIHtcclxuICAgIHN0YXJ0czogUG9pbnQzW107XHJcbiAgICBwb2ludHM6IFBvaW50M1tdO1xyXG4gICAgZGVzdDE6IFBvaW50M1tdO1xyXG4gICAgZGVzdDI6IFBvaW50M1tdO1xyXG4gICAgaGlnaGxpZ2h0czogbnVtYmVyW11bXTtcclxuXHJcbiAgICBvZmZzY3JlZW5SZW5kZXJDb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy8gd29ybGQgaXMgdW5pdCBjdWJlXHJcbiAgICAgICAgY29uc3QgbiA9IDI0O1xyXG4gICAgICAgIHRoaXMuc3RhcnRzID0gZW51bWVyYXRlKG4pLm1hcCgoKSA9PiB0aGlzLnJhbmRvbVNwaGVyZVBvaW50KDAsIDAsIDAsIDEpKTtcclxuICAgICAgICB0aGlzLnBvaW50cyA9IHRoaXMuc3RhcnRzLm1hcChwID0+IHAubWFwKHYgPT4gdikpO1xyXG4gICAgICAgIHRoaXMuZGVzdDEgPSBlbnVtZXJhdGUobikubWFwKCgpID0+IHRoaXMucmFuZG9tU3BoZXJlUG9pbnQoMCwgMCwgMCwgMSkpO1xyXG4gICAgICAgIHRoaXMuZGVzdDIgPSBlbnVtZXJhdGUobikubWFwKCgpID0+IHRoaXMucmFuZG9tU3BoZXJlUG9pbnQoMCwgMCwgMCwgMSkpO1xyXG5cclxuICAgICAgICB0aGlzLm9mZnNjcmVlblJlbmRlckNvbnRleHQgPSBlLmNyZWF0ZURpc3BsYXlTaXplZFJlbmRlckNvbnRleHQoKTtcclxuICAgICAgICB0aGlzLmhpZ2hsaWdodHMgPSBlbnVtZXJhdGUoMykubWFwKGkgPT4gW2ksIDBdKTtcclxuICAgIH1cclxuXHJcbiAgICB0aWNrIChkdDogbnVtYmVyLCB0OiBudW1iZXIpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucG9pbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSB0aGlzLnBvaW50c1tpXTtcclxuICAgICAgICAgICAgY29uc3QgZDEgPSB0aGlzLmRlc3QxW2ldO1xyXG4gICAgICAgICAgICBjb25zdCBkMiA9IHRoaXMuZGVzdDJbaV07XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkaXN0UGQxID0gZS5kaXN0KHAsIGQxKTtcclxuICAgICAgICAgICAgY29uc3QgZGlzdFBkMiA9IGUuZGlzdChwLCBkMik7XHJcbiAgICAgICAgICAgIGNvbnN0IGQyU3RyZW5ndGggPSAwLjUgKiAoZGlzdFBkMiAvIChkaXN0UGQxICsgZGlzdFBkMikpO1xyXG4gICAgICAgICAgICBjb25zdCBkZWx0YSA9IGUubGVycChlLm5vcm1hbGl6ZShlLnN1YihkMSwgcCkpLCBlLm5vcm1hbGl6ZShlLnN1YihkMiwgcCkpLCBkMlN0cmVuZ3RoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkaXN0UGQxIDwgMC4xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0c1tpXSA9IHAubWFwKHYgPT4gdik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlc3QxW2ldID0gZDI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlc3QyW2ldID0gdGhpcy5yYW5kb21TcGhlcmVQb2ludCgwLCAwLCAwLCAxKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5wb2ludHNbaV0gPSBlLmFkZChwLCBlLm11bChkZWx0YSwgMC4xICogZHQpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKGR0OiBudW1iZXIsIHQ6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IHNjcmVlblJlY3QgPSBlLmdldFNjcmVlblJlY3QoKTtcclxuICAgICAgICBlLmNsZWFyKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qgb3NjaWxsYXRlUG9pbnQgPSAod29ybGQ6IFBvaW50Myk6IFBvaW50MyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9zY2lsbGF0ZSA9IDI7XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICB3b3JsZFswXSArIG9zY2lsbGF0ZSAqIDAuMDA2ICogTWF0aC5zaW4oMS4wICogdCArIHdvcmxkWzFdICogNC4wICsgd29ybGRbMl0gKiAyLjMpXHJcbiAgICAgICAgICAgICAgICArIG9zY2lsbGF0ZSAqIDAuMDEwICogTWF0aC5zaW4oMC4yICogdCArIHdvcmxkWzFdICogMi43ICsgd29ybGRbMl0gKiAzLjApLFxyXG4gICAgICAgICAgICAgICAgd29ybGRbMV0gKyBvc2NpbGxhdGUgKiAwLjAxMiAqIE1hdGguc2luKDAuOCAqIHQgKyB3b3JsZFsyXSAqIDQuMCArIHdvcmxkWzBdICogMi4zKVxyXG4gICAgICAgICAgICAgICAgKyBvc2NpbGxhdGUgKiAwLjAxNCAqIE1hdGguc2luKDAuMyAqIHQgKyB3b3JsZFsyXSAqIDIuNyArIHdvcmxkWzBdICogMy4wKSxcclxuICAgICAgICAgICAgICAgIHdvcmxkWzJdICsgb3NjaWxsYXRlICogMC4wMSAqIE1hdGguc2luKDAuNSAqIHQgKyB3b3JsZFswXSAqIDQuMCArIHdvcmxkWzFdICogMi4zKVxyXG4gICAgICAgICAgICAgICAgKyBvc2NpbGxhdGUgKiAwLjAxICogTWF0aC5zaW4oMC4yICogdCArIHdvcmxkWzBdICogMi43ICsgd29ybGRbMV0gKiAzLjApXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwb2ludFRvU2NhbGUgPSAod29ybGQ6IFBvaW50MykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkaXN0ID0gKHdvcmxkWzJdICsgMSkgLyAyOyAvLyAwID0gbmVhciwgMSA9IGZhclxyXG4gICAgICAgICAgICByZXR1cm4gKDEgLSBkaXN0KSAqIDAuOSArIDAuMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHBvaW50VG9TY3JlZW4gPSAod29ybGQ6IFBvaW50MykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzY2FsZSA9IHBvaW50VG9TY2FsZSh3b3JsZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNtYWxsZXJEaW1lbnNpb24gPSBNYXRoLm1pbihzY3JlZW5SZWN0LndpZHRoLCBzY3JlZW5SZWN0LmhlaWdodCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjcmVlblNjYWxlID0gW3NtYWxsZXJEaW1lbnNpb24sIHNtYWxsZXJEaW1lbnNpb25dO1xyXG4gICAgICAgICAgICBjb25zdCBzY3JlZW5PZmZzZXQgPSBlLm11bChlLnN1Yihbc2NyZWVuUmVjdC53aWR0aCwgc2NyZWVuUmVjdC5oZWlnaHRdLCBzY3JlZW5TY2FsZSksIDAuNSk7XHJcbiAgICAgICAgICAgIHJldHVybiBlLmFkZChzY3JlZW5PZmZzZXQsIGUuY211bChzY3JlZW5TY2FsZSwgW1xyXG4gICAgICAgICAgICAgICAgKHdvcmxkWzBdICogc2NhbGUgKiB6b29tICsgMSkgLyAyLFxyXG4gICAgICAgICAgICAgICAgKHdvcmxkWzFdICogc2NhbGUgKiB6b29tICsgMSkgLyAyXHJcbiAgICAgICAgICAgIF0pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHBvaW50VG9TY3JlZW5SZWN0ID0gKHdvcmxkOiBQb2ludDMpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2NhbGUgPSBwb2ludFRvU2NhbGUod29ybGQpO1xyXG4gICAgICAgICAgICBjb25zdCBjZW50ZXIgPSBwb2ludFRvU2NyZWVuKHdvcmxkKTtcclxuICAgICAgICAgICAgY29uc3QgcG9pbnRTY2FsZSA9IDU7XHJcbiAgICAgICAgICAgIHJldHVybiBlLm1ha2VSZWN0YW5nbGUoY2VudGVyWzBdIC0gcG9pbnRTY2FsZSAqIHNjYWxlLCBjZW50ZXJbMV0gLSBwb2ludFNjYWxlICogc2NhbGUsIHBvaW50U2NhbGUgKiAyICogc2NhbGUsIHBvaW50U2NhbGUgKiAyICogc2NhbGUpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IG9zY2lsbGF0ZWRQb2ludHMgPSB0aGlzLnBvaW50cy5tYXAob3NjaWxsYXRlUG9pbnQpO1xyXG4gICAgICAgIGNvbnN0IHNjcmVlblBvaW50cyA9IG9zY2lsbGF0ZWRQb2ludHMubWFwKHBvaW50VG9TY3JlZW4pO1xyXG4gICAgICAgIGNvbnN0IHNjcmVlblJlY3RzID0gb3NjaWxsYXRlZFBvaW50cy5tYXAocG9pbnRUb1NjcmVlblJlY3QpO1xyXG4gICAgICAgIGNvbnN0IGFscGhhcyA9IG9zY2lsbGF0ZWRQb2ludHMubWFwKHAgPT4gTWF0aC5wb3cocG9pbnRUb1NjYWxlKHApLCAyKSAqIDAuMzggKyAwLjAyKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVuZGVyRWRnZSA9IChpOiBudW1iZXIsIGo6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwMSA9IHNjcmVlblBvaW50c1tpXTtcclxuICAgICAgICAgICAgY29uc3QgcDIgPSBzY3JlZW5Qb2ludHNbal07XHJcbiAgICAgICAgICAgIGNvbnN0IHIxID0gc2NyZWVuUmVjdHNbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IHIyID0gc2NyZWVuUmVjdHNbal07XHJcbiAgICAgICAgICAgIGNvbnN0IHBlcnAgPSBlLm5vcm1hbGl6ZShlLnBlcnAoZS5zdWIocDIsIHAxKSkpO1xyXG4gICAgICAgICAgICBjb25zdCBwZXJwMSA9IGUubXVsKHBlcnAsIDAuMjUgKiByMS53aWR0aCAvIDIpO1xyXG4gICAgICAgICAgICBjb25zdCBwZXJwMiA9IGUubXVsKHBlcnAsIDAuMjUgKiByMi53aWR0aCAvIDIpO1xyXG4gICAgICAgICAgICBjb25zdCBwb2x5ID0gW1xyXG4gICAgICAgICAgICAgICAgZS5hZGQocDEsIHBlcnAxKSxcclxuICAgICAgICAgICAgICAgIGUuc3ViKHAxLCBwZXJwMSksXHJcbiAgICAgICAgICAgICAgICBlLnN1YihwMiwgcGVycDIpLFxyXG4gICAgICAgICAgICAgICAgZS5hZGQocDIsIHBlcnAyKVxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICBlLnNldENvbXBvc2l0ZU9wZXJhdGlvbignaGFyZC1saWdodCcpO1xyXG4gICAgICAgICAgICBjb25zdCBzdHJva2UgPSBlLmNyZWF0ZUxpbmVhckdyYWRpZW50KHAxLCBwMiwgYHJnYmEoMjU1LCAyNTUsIDI1NSwgJHthbHBoYXNbaV19KWAsIGByZ2JhKDI1NSwgMjU1LCAyNTUsICR7YWxwaGFzW2pdfSlgKTtcclxuICAgICAgICAgICAgZS5maWxsUG9seShzdHJva2UsIHBvbHkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaHVsbCA9IHFoKHRoaXMucG9pbnRzKTtcclxuLy8gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3NjaWxsYXRlZFBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4vLyAgICAgICAgICAgIGZvciAodmFyIGogPSBpICsgMTsgaiA8IG9zY2lsbGF0ZWRQb2ludHMubGVuZ3RoOyBqKyspIHtcclxuLy8gICAgICAgICAgICAgICAgaWYgKGUuZGlzdCh0aGlzLnBvaW50c1tpXSwgdGhpcy5wb2ludHNbal0pID4gMSkgY29udGludWU7XHJcbi8vICAgICAgICAgICAgICAgIHJlbmRlckVkZ2UoaSwgaik7XHJcbi8vICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgfVxyXG5cclxuICAgICAgICBodWxsLmZvckVhY2goKFtpMSwgaTIsIGkzXSkgPT4ge1xyXG4gICAgICAgICAgICByZW5kZXJFZGdlKGkxLCBpMik7XHJcbiAgICAgICAgICAgIHJlbmRlckVkZ2UoaTIsIGkzKTtcclxuICAgICAgICAgICAgcmVuZGVyRWRnZShpMywgaTEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmhpZ2hsaWdodHMgPSB0aGlzLmhpZ2hsaWdodHMubWFwKChbaSwgdF0pID0+IHtcclxuICAgICAgICAgICAgaWYgKGkgPj0gaHVsbC5sZW5ndGggfHwgdCAtIGR0IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgaSA9IGUucmFuZG9tSW50KDAsIGh1bGwubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIHQgPSBNYXRoLnJhbmRvbSgpICogMiArIDAuMjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYWxwaGEgPSB0ID4gMSA/IDAgOiBlLmxlcnAoMCwgMC4wOCwgdCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGhpZ2hsaWdodFRyaWFuZ2xlID0gaHVsbFtpXS5tYXAoaW5kID0+IHNjcmVlblBvaW50c1tpbmRdKTtcclxuICAgICAgICAgICAgZS5maWxsUG9seShgcmdiYSgyNTUsIDI1NSwgMjU1LCAke2FscGhhfSlgLCBoaWdobGlnaHRUcmlhbmdsZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBbaSwgdCAtIGR0XTtcclxuICAgICAgICB9KTtcclxuXHJcbi8vICAgICAgICBlLnNldENvbXBvc2l0ZU9wZXJhdGlvbignc291cmNlLW92ZXInKTtcclxuLy8gICAgICAgIHNjcmVlblJlY3RzLmZvckVhY2gocmVjdCA9PiBlLmZpbGxFbGxpcHNlKGJnLCByZWN0KSk7XHJcblxyXG4gICAgICAgIGUuc2V0Q29tcG9zaXRlT3BlcmF0aW9uKCdoYXJkLWxpZ2h0Jyk7XHJcbiAgICAgICAgZS56aXAoc2NyZWVuUmVjdHMsIGFscGhhcywgKHJlY3Q6IFJlY3QsIGFscGhhOiBudW1iZXIpID0+IGUuZmlsbEVsbGlwc2UoYHJnYmEoMjU1LCAyNTUsIDI1NSwgMjU1KWAsIHJlY3QpKTtcclxuXHJcbiAgICAgICAgZS56aXAoZS5lbnVtZXJhdGUoc2NyZWVuUG9pbnRzKSwgc2NyZWVuUmVjdHMsIChbaSwgcF0sIHJlY3Q6IFJlY3QpID0+IHtcclxuICAgICAgICB9KTtcclxuLy9cclxuLy8gICAgICAgIGUuc3dhcEFjdGl2ZVJlbmRlckNvbnRleHQoc2NyZWVuQ29udGV4dCk7XHJcbi8vICAgICAgICBlLnNldENvbXBvc2l0ZU9wZXJhdGlvbignc291cmNlLW92ZXInKTtcclxuLy8gICAgICAgIGUuY2xlYXIoJyNGRkZGRkYnKTtcclxuLy8gICAgICAgIGUuc2V0Q29tcG9zaXRlT3BlcmF0aW9uKCdjb2xvci1idXJuJyk7XHJcbi8vICAgICAgICBzY3JlZW5Db250ZXh0LmRyYXdJbWFnZSh0aGlzLm9mZnNjcmVlblJlbmRlckNvbnRleHQuY2FudmFzLCAwLCAwLCB0aGlzLm9mZnNjcmVlblJlbmRlckNvbnRleHQuY2FudmFzLndpZHRoLCB0aGlzLm9mZnNjcmVlblJlbmRlckNvbnRleHQuY2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgICAgIC8vIGUuZHJhd0xpbmUoJyNGRkZGRkYnLCBlLnN1YihwLCBbMCwgM10pLCBlLmFkZChwLCBbMCwgM10pKVxyXG4gICAgICAgICAgICAvLyBlLmRyYXdMaW5lKCcjRkZGRkZGJywgZS5zdWIocCwgWzMsIDBdKSwgZS5hZGQocCwgWzMsIDBdKSlcclxuXHJcbiAgICAgICAgICAgIGUuc2V0Q29tcG9zaXRlT3BlcmF0aW9uKCdzb3VyY2Utb3ZlcicpO1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydCA9IHBvaW50VG9TY3JlZW4odGhpcy5zdGFydHNbaV0pO1xyXG4gICAgICAgICAgICBjb25zdCBkMSA9IHBvaW50VG9TY3JlZW4odGhpcy5kZXN0MVtpXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGQyID0gcG9pbnRUb1NjcmVlbih0aGlzLmRlc3QyW2ldKTtcclxuICAgICAgICAgICAgLy8gZS5kcmF3TGluZShcInJnYmEoMjU1LCAwLCAwLCAwLjI1KVwiLCBwLCBzdGFydCk7XHJcbiAgICAgICAgICAgIC8vIGUuZHJhd0xpbmUoXCJyZ2JhKDAsIDI1NSwgMCwgMC4yNSlcIiwgcCwgZDEpO1xyXG4gICAgICAgICAgICAvLyBlLmRyYXdMaW5lKFwicmdiYSgwLCAwLCAyNTUsIDAuMjUpXCIsIHAsIGQyKTtcclxuICAgICAgICAqL1xyXG4gICAgfVxyXG5cclxuICAgIHJhbmRvbVVuaXRDdWJlUG9pbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqIDIgLSAxLFxyXG4gICAgICAgICAgICBNYXRoLnJhbmRvbSgpICogMiAtIDEsXHJcbiAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiAyIC0gMVxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgUmV0dXJucyBhIHJhbmRvbSBwb2ludCBvZiBhIHNwaGVyZSwgZXZlbmx5IGRpc3RyaWJ1dGVkIG92ZXIgdGhlIHNwaGVyZS5cclxuICAgIFRoZSBzcGhlcmUgaXMgY2VudGVyZWQgYXQgKHgwLHkwLHowKSB3aXRoIHRoZSBwYXNzZWQgaW4gcmFkaXVzLlxyXG4gICAgVGhlIHJldHVybmVkIHBvaW50IGlzIHJldHVybmVkIGFzIGEgdGhyZWUgZWxlbWVudCBhcnJheSBbeCx5LHpdLlxyXG4gICAgKi9cclxuICAgIHJhbmRvbVNwaGVyZVBvaW50KHgwOiBudW1iZXIsIHkwOiBudW1iZXIsIHowOiBudW1iZXIsIHJhZGl1czogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgdSA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgY29uc3QgdiA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgY29uc3QgdGhldGEgPSAyICogTWF0aC5QSSAqIHU7XHJcbiAgICAgICAgY29uc3QgcGhpID0gTWF0aC5hY29zKDIgKiB2IC0gMSk7XHJcbiAgICAgICAgY29uc3QgeCA9IHgwICsgKHJhZGl1cyAqIE1hdGguc2luKHBoaSkgKiBNYXRoLmNvcyh0aGV0YSkpO1xyXG4gICAgICAgIGNvbnN0IHkgPSB5MCArIChyYWRpdXMgKiBNYXRoLnNpbihwaGkpICogTWF0aC5zaW4odGhldGEpKTtcclxuICAgICAgICBjb25zdCB6ID0gejAgKyAocmFkaXVzICogTWF0aC5jb3MocGhpKSk7XHJcbiAgICAgICAgcmV0dXJuIFt4LCB5LCB6XTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9HcmFwaERlbW8udHMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBydW5uZXI7XG5cbnZhciBfUXVpY2tIdWxsID0gcmVxdWlyZSgnLi9RdWlja0h1bGwnKTtcblxudmFyIF9RdWlja0h1bGwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUXVpY2tIdWxsKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gcnVubmVyKHBvaW50cykge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgdmFyIGluc3RhbmNlID0gbmV3IF9RdWlja0h1bGwyLmRlZmF1bHQocG9pbnRzKTtcbiAgaW5zdGFuY2UuYnVpbGQoKTtcbiAgcmV0dXJuIGluc3RhbmNlLmNvbGxlY3RGYWNlcyhvcHRpb25zLnNraXBUcmlhbmd1bGF0aW9uKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3F1aWNraHVsbDNkL2Rpc3QvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3NsaWNlZFRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH0gcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyByZXR1cm4gYXJyOyB9IGVsc2UgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkgeyByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpOyB9IGVsc2UgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTsgfSB9OyB9KCk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcG9pbnRMaW5lRGlzdGFuY2UgPSByZXF1aXJlKCdwb2ludC1saW5lLWRpc3RhbmNlJyk7XG5cbnZhciBfcG9pbnRMaW5lRGlzdGFuY2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9pbnRMaW5lRGlzdGFuY2UpO1xuXG52YXIgX2dldFBsYW5lTm9ybWFsID0gcmVxdWlyZSgnZ2V0LXBsYW5lLW5vcm1hbCcpO1xuXG52YXIgX2dldFBsYW5lTm9ybWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFBsYW5lTm9ybWFsKTtcblxudmFyIF9kZWJ1Z0ZuID0gcmVxdWlyZSgnZGVidWctZm4nKTtcblxudmFyIF9kZWJ1Z0ZuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlYnVnRm4pO1xuXG52YXIgX2RvdCA9IHJlcXVpcmUoJ2dsLXZlYzMvZG90Jyk7XG5cbnZhciBfZG90MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RvdCk7XG5cbnZhciBfVmVydGV4TGlzdCA9IHJlcXVpcmUoJy4vVmVydGV4TGlzdCcpO1xuXG52YXIgX1ZlcnRleExpc3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVmVydGV4TGlzdCk7XG5cbnZhciBfVmVydGV4ID0gcmVxdWlyZSgnLi9WZXJ0ZXgnKTtcblxudmFyIF9WZXJ0ZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVmVydGV4KTtcblxudmFyIF9GYWNlID0gcmVxdWlyZSgnLi9GYWNlJyk7XG5cbnZhciBfRmFjZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9GYWNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIGRlYnVnID0gKDAsIF9kZWJ1Z0ZuMi5kZWZhdWx0KSgncXVpY2todWxsJyk7XG5cbi8vIG1lcmdlIHR5cGVzXG4vLyBub24gY29udmV4IHdpdGggcmVzcGVjdCB0byB0aGUgbGFyZ2UgZmFjZVxudmFyIE1FUkdFX05PTl9DT05WRVhfV1JUX0xBUkdFUl9GQUNFID0gMTtcbnZhciBNRVJHRV9OT05fQ09OVkVYID0gMjtcblxudmFyIFF1aWNrSHVsbCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUXVpY2tIdWxsKHBvaW50cykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBRdWlja0h1bGwpO1xuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHBvaW50cykpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcignaW5wdXQgaXMgbm90IGEgdmFsaWQgYXJyYXknKTtcbiAgICB9XG4gICAgaWYgKHBvaW50cy5sZW5ndGggPCA0KSB7XG4gICAgICB0aHJvdyBFcnJvcignY2Fubm90IGJ1aWxkIGEgc2ltcGxleCBvdXQgb2YgPDQgcG9pbnRzJyk7XG4gICAgfVxuXG4gICAgdGhpcy50b2xlcmFuY2UgPSAtMTtcblxuICAgIC8vIGJ1ZmZlcnNcbiAgICB0aGlzLm5GYWNlcyA9IDA7XG4gICAgdGhpcy5uUG9pbnRzID0gcG9pbnRzLmxlbmd0aDtcblxuICAgIHRoaXMuZmFjZXMgPSBbXTtcbiAgICB0aGlzLm5ld0ZhY2VzID0gW107XG4gICAgLy8gaGVscGVyc1xuICAgIC8vXG4gICAgLy8gbGV0IGBhYCwgYGJgIGJlIGBGYWNlYCBpbnN0YW5jZXNcbiAgICAvLyBsZXQgYHZgIGJlIHBvaW50cyB3cmFwcGVkIGFzIGluc3RhbmNlIG9mIGBWZXJ0ZXhgXG4gICAgLy9cbiAgICAvLyAgICAgW3YsIHYsIC4uLiwgdiwgdiwgdiwgLi4uXVxuICAgIC8vICAgICAgXiAgICAgICAgICAgICBeXG4gICAgLy8gICAgICB8ICAgICAgICAgICAgIHxcbiAgICAvLyAgYS5vdXRzaWRlICAgICBiLm91dHNpZGVcbiAgICAvL1xuICAgIHRoaXMuY2xhaW1lZCA9IG5ldyBfVmVydGV4TGlzdDIuZGVmYXVsdCgpO1xuICAgIHRoaXMudW5jbGFpbWVkID0gbmV3IF9WZXJ0ZXhMaXN0Mi5kZWZhdWx0KCk7XG5cbiAgICAvLyB2ZXJ0aWNlcyBvZiB0aGUgaHVsbChpbnRlcm5hbCByZXByZXNlbnRhdGlvbiBvZiBwb2ludHMpXG4gICAgdGhpcy52ZXJ0aWNlcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICB0aGlzLnZlcnRpY2VzLnB1c2gobmV3IF9WZXJ0ZXgyLmRlZmF1bHQocG9pbnRzW2ldLCBpKSk7XG4gICAgfVxuICAgIHRoaXMuZGlzY2FyZGVkRmFjZXMgPSBbXTtcbiAgICB0aGlzLnZlcnRleFBvaW50SW5kaWNlcyA9IFtdO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFF1aWNrSHVsbCwgW3tcbiAgICBrZXk6ICdhZGRWZXJ0ZXhUb0ZhY2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRWZXJ0ZXhUb0ZhY2UodmVydGV4LCBmYWNlKSB7XG4gICAgICB2ZXJ0ZXguZmFjZSA9IGZhY2U7XG4gICAgICBpZiAoIWZhY2Uub3V0c2lkZSkge1xuICAgICAgICB0aGlzLmNsYWltZWQuYWRkKHZlcnRleCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsYWltZWQuaW5zZXJ0QmVmb3JlKGZhY2Uub3V0c2lkZSwgdmVydGV4KTtcbiAgICAgIH1cbiAgICAgIGZhY2Uub3V0c2lkZSA9IHZlcnRleDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGB2ZXJ0ZXhgIGZvciB0aGUgYGNsYWltZWRgIGxpc3Qgb2YgdmVydGljZXMsIGl0IGFsc28gbWFrZXMgc3VyZVxuICAgICAqIHRoYXQgdGhlIGxpbmsgZnJvbSBgZmFjZWAgdG8gdGhlIGZpcnN0IHZlcnRleCBpdCBzZWVzIGluIGBjbGFpbWVkYCBpc1xuICAgICAqIGxpbmtlZCBjb3JyZWN0bHkgYWZ0ZXIgdGhlIHJlbW92YWxcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVydGV4fSB2ZXJ0ZXhcbiAgICAgKiBAcGFyYW0ge0ZhY2V9IGZhY2VcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAncmVtb3ZlVmVydGV4RnJvbUZhY2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVWZXJ0ZXhGcm9tRmFjZSh2ZXJ0ZXgsIGZhY2UpIHtcbiAgICAgIGlmICh2ZXJ0ZXggPT09IGZhY2Uub3V0c2lkZSkge1xuICAgICAgICAvLyBmaXggZmFjZS5vdXRzaWRlIGxpbmtcbiAgICAgICAgaWYgKHZlcnRleC5uZXh0ICYmIHZlcnRleC5uZXh0LmZhY2UgPT09IGZhY2UpIHtcbiAgICAgICAgICAvLyBmYWNlIGhhcyBhdCBsZWFzdCAyIG91dHNpZGUgdmVydGljZXMsIG1vdmUgdGhlIGBvdXRzaWRlYCByZWZlcmVuY2VcbiAgICAgICAgICBmYWNlLm91dHNpZGUgPSB2ZXJ0ZXgubmV4dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyB2ZXJ0ZXggd2FzIHRoZSBvbmx5IG91dHNpZGUgdmVydGV4IHRoYXQgZmFjZSBoYWRcbiAgICAgICAgICBmYWNlLm91dHNpZGUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmNsYWltZWQucmVtb3ZlKHZlcnRleCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbGwgdGhlIHZpc2libGUgdmVydGljZXMgdGhhdCBgZmFjZWAgaXMgYWJsZSB0byBzZWUgd2hpY2ggYXJlXG4gICAgICogc3RvcmVkIGluIHRoZSBgY2xhaW1lZGAgdmVydGV4dCBsaXN0XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0ZhY2V9IGZhY2VcbiAgICAgKiBAcmV0dXJuIHtWZXJ0ZXh8dW5kZWZpbmVkfSBJZiBmYWNlIGhhZCB2aXNpYmxlIHZlcnRpY2VzIHJldHVybnNcbiAgICAgKiBgZmFjZS5vdXRzaWRlYCwgb3RoZXJ3aXNlIHVuZGVmaW5lZFxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdyZW1vdmVBbGxWZXJ0aWNlc0Zyb21GYWNlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlQWxsVmVydGljZXNGcm9tRmFjZShmYWNlKSB7XG4gICAgICBpZiAoZmFjZS5vdXRzaWRlKSB7XG4gICAgICAgIC8vIHBvaW50ZXIgdG8gdGhlIGxhc3QgdmVydGV4IG9mIHRoaXMgZmFjZVxuICAgICAgICAvLyBbLi4uLCBvdXRzaWRlLCAuLi4sIGVuZCwgb3V0c2lkZSwgLi4uXVxuICAgICAgICAvLyAgICAgICAgICB8ICAgICAgICAgICB8ICAgICAgfFxuICAgICAgICAvLyAgICAgICAgICBhICAgICAgICAgICBhICAgICAgYlxuICAgICAgICB2YXIgZW5kID0gZmFjZS5vdXRzaWRlO1xuICAgICAgICB3aGlsZSAoZW5kLm5leHQgJiYgZW5kLm5leHQuZmFjZSA9PT0gZmFjZSkge1xuICAgICAgICAgIGVuZCA9IGVuZC5uZXh0O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2xhaW1lZC5yZW1vdmVDaGFpbihmYWNlLm91dHNpZGUsIGVuZCk7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgIFsgb3V0c2lkZSwgLi4uXVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICByZW1vdmVzIHRoaXMgbGlua1xuICAgICAgICAvLyAgICAgWyBvdXRzaWRlLCAuLi4sIGVuZCBdIC3ilJhcbiAgICAgICAgLy8gICAgICAgICAgfCAgICAgICAgICAgfFxuICAgICAgICAvLyAgICAgICAgICBhICAgICAgICAgICBhXG4gICAgICAgIGVuZC5uZXh0ID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIGZhY2Uub3V0c2lkZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFsbCB0aGUgdmlzaWJsZSB2ZXJ0aWNlcyB0aGF0IGBmYWNlYCBpcyBhYmxlIHRvIHNlZSwgYWRkaXRpb25hbGx5XG4gICAgICogY2hlY2tpbmcgdGhlIGZvbGxvd2luZzpcbiAgICAgKlxuICAgICAqIElmIGBhYnNvcmJpbmdGYWNlYCBkb2Vzbid0IGV4aXN0IHRoZW4gYWxsIHRoZSByZW1vdmVkIHZlcnRpY2VzIHdpbGwgYmVcbiAgICAgKiBhZGRlZCB0byB0aGUgYHVuY2xhaW1lZGAgdmVydGV4IGxpc3RcbiAgICAgKlxuICAgICAqIElmIGBhYnNvcmJpbmdGYWNlYCBleGlzdHMgdGhlbiB0aGlzIG1ldGhvZCB3aWxsIGFzc2lnbiBhbGwgdGhlIHZlcnRpY2VzIG9mXG4gICAgICogYGZhY2VgIHRoYXQgY2FuIHNlZSBgYWJzb3JiaW5nRmFjZWAsIGlmIGEgdmVydGV4IGNhbm5vdCBzZWUgYGFic29yYmluZ0ZhY2VgXG4gICAgICogaXQncyBhZGRlZCB0byB0aGUgYHVuY2xhaW1lZGAgdmVydGV4IGxpc3RcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RmFjZX0gZmFjZVxuICAgICAqIEBwYXJhbSB7RmFjZX0gW2Fic29yYmluZ0ZhY2VdXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2RlbGV0ZUZhY2VWZXJ0aWNlcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlbGV0ZUZhY2VWZXJ0aWNlcyhmYWNlLCBhYnNvcmJpbmdGYWNlKSB7XG4gICAgICB2YXIgZmFjZVZlcnRpY2VzID0gdGhpcy5yZW1vdmVBbGxWZXJ0aWNlc0Zyb21GYWNlKGZhY2UpO1xuICAgICAgaWYgKGZhY2VWZXJ0aWNlcykge1xuICAgICAgICBpZiAoIWFic29yYmluZ0ZhY2UpIHtcbiAgICAgICAgICAvLyBtYXJrIHRoZSB2ZXJ0aWNlcyB0byBiZSByZWFzc2lnbmVkIHRvIHNvbWUgb3RoZXIgZmFjZVxuICAgICAgICAgIHRoaXMudW5jbGFpbWVkLmFkZEFsbChmYWNlVmVydGljZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGlmIHRoZXJlJ3MgYW4gYWJzb3JiaW5nIGZhY2UgdHJ5IHRvIGFzc2lnbiBhcyBtYW55IHZlcnRpY2VzXG4gICAgICAgICAgLy8gYXMgcG9zc2libGUgdG8gaXRcblxuICAgICAgICAgIC8vIHRoZSByZWZlcmVuY2UgYHZlcnRleC5uZXh0YCBtaWdodCBiZSBkZXN0cm95ZWQgb25cbiAgICAgICAgICAvLyBgdGhpcy5hZGRWZXJ0ZXhUb0ZhY2VgIChzZWUgVmVydGV4TGlzdCNhZGQpLCBuZXh0VmVydGV4IGlzIGFcbiAgICAgICAgICAvLyByZWZlcmVuY2UgdG8gaXRcbiAgICAgICAgICB2YXIgbmV4dFZlcnRleCA9IHZvaWQgMDtcbiAgICAgICAgICBmb3IgKHZhciB2ZXJ0ZXggPSBmYWNlVmVydGljZXM7IHZlcnRleDsgdmVydGV4ID0gbmV4dFZlcnRleCkge1xuICAgICAgICAgICAgbmV4dFZlcnRleCA9IHZlcnRleC5uZXh0O1xuICAgICAgICAgICAgdmFyIGRpc3RhbmNlID0gYWJzb3JiaW5nRmFjZS5kaXN0YW5jZVRvUGxhbmUodmVydGV4LnBvaW50KTtcblxuICAgICAgICAgICAgLy8gY2hlY2sgaWYgYHZlcnRleGAgaXMgYWJsZSB0byBzZWUgYGFic29yYmluZ0ZhY2VgXG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPiB0aGlzLnRvbGVyYW5jZSkge1xuICAgICAgICAgICAgICB0aGlzLmFkZFZlcnRleFRvRmFjZSh2ZXJ0ZXgsIGFic29yYmluZ0ZhY2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy51bmNsYWltZWQuYWRkKHZlcnRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVhc3NpZ25zIGFzIG1hbnkgdmVydGljZXMgYXMgcG9zc2libGUgZnJvbSB0aGUgdW5jbGFpbWVkIGxpc3QgdG8gdGhlIG5ld1xuICAgICAqIGZhY2VzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0ZhY2VzW119IG5ld0ZhY2VzXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3Jlc29sdmVVbmNsYWltZWRQb2ludHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNvbHZlVW5jbGFpbWVkUG9pbnRzKG5ld0ZhY2VzKSB7XG4gICAgICAvLyBjYWNoZSBuZXh0IHZlcnRleCBzbyB0aGF0IGlmIGB2ZXJ0ZXgubmV4dGAgaXMgZGVzdHJveWVkIGl0J3Mgc3RpbGxcbiAgICAgIC8vIHJlY292ZXJhYmxlXG4gICAgICB2YXIgdmVydGV4TmV4dCA9IHRoaXMudW5jbGFpbWVkLmZpcnN0KCk7XG4gICAgICBmb3IgKHZhciB2ZXJ0ZXggPSB2ZXJ0ZXhOZXh0OyB2ZXJ0ZXg7IHZlcnRleCA9IHZlcnRleE5leHQpIHtcbiAgICAgICAgdmVydGV4TmV4dCA9IHZlcnRleC5uZXh0O1xuICAgICAgICB2YXIgbWF4RGlzdGFuY2UgPSB0aGlzLnRvbGVyYW5jZTtcbiAgICAgICAgdmFyIG1heEZhY2UgPSB2b2lkIDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmV3RmFjZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICB2YXIgZmFjZSA9IG5ld0ZhY2VzW2ldO1xuICAgICAgICAgIGlmIChmYWNlLm1hcmsgPT09IF9GYWNlLlZJU0lCTEUpIHtcbiAgICAgICAgICAgIHZhciBkaXN0ID0gZmFjZS5kaXN0YW5jZVRvUGxhbmUodmVydGV4LnBvaW50KTtcbiAgICAgICAgICAgIGlmIChkaXN0ID4gbWF4RGlzdGFuY2UpIHtcbiAgICAgICAgICAgICAgbWF4RGlzdGFuY2UgPSBkaXN0O1xuICAgICAgICAgICAgICBtYXhGYWNlID0gZmFjZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtYXhEaXN0YW5jZSA+IDEwMDAgKiB0aGlzLnRvbGVyYW5jZSkge1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWF4RmFjZSkge1xuICAgICAgICAgIHRoaXMuYWRkVmVydGV4VG9GYWNlKHZlcnRleCwgbWF4RmFjZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyB0aGUgZXh0cmVtZXMgb2YgYSB0ZXRyYWhlZHJvbiB3aGljaCB3aWxsIGJlIHRoZSBpbml0aWFsIGh1bGxcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge251bWJlcltdfSBUaGUgbWluL21heCB2ZXJ0aWNlcyBpbiB0aGUgeCx5LHogZGlyZWN0aW9uc1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdjb21wdXRlRXh0cmVtZXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wdXRlRXh0cmVtZXMoKSB7XG4gICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgdmFyIG1pbiA9IFtdO1xuICAgICAgdmFyIG1heCA9IFtdO1xuXG4gICAgICAvLyBtaW4gdmVydGV4IG9uIHRoZSB4LHkseiBkaXJlY3Rpb25zXG4gICAgICB2YXIgbWluVmVydGljZXMgPSBbXTtcbiAgICAgIC8vIG1heCB2ZXJ0ZXggb24gdGhlIHgseSx6IGRpcmVjdGlvbnNcbiAgICAgIHZhciBtYXhWZXJ0aWNlcyA9IFtdO1xuXG4gICAgICB2YXIgaSA9IHZvaWQgMCxcbiAgICAgICAgICBqID0gdm9pZCAwO1xuXG4gICAgICAvLyBpbml0aWFsbHkgYXNzdW1lIHRoYXQgdGhlIGZpcnN0IHZlcnRleCBpcyB0aGUgbWluL21heFxuICAgICAgZm9yIChpID0gMDsgaSA8IDM7IGkgKz0gMSkge1xuICAgICAgICBtaW5WZXJ0aWNlc1tpXSA9IG1heFZlcnRpY2VzW2ldID0gdGhpcy52ZXJ0aWNlc1swXTtcbiAgICAgIH1cbiAgICAgIC8vIGNvcHkgdGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBmaXJzdCB2ZXJ0ZXggdG8gbWluL21heFxuICAgICAgZm9yIChpID0gMDsgaSA8IDM7IGkgKz0gMSkge1xuICAgICAgICBtaW5baV0gPSBtYXhbaV0gPSB0aGlzLnZlcnRpY2VzWzBdLnBvaW50W2ldO1xuICAgICAgfVxuXG4gICAgICAvLyBjb21wdXRlIHRoZSBtaW4vbWF4IHZlcnRleCBvbiBhbGwgNiBkaXJlY3Rpb25zXG4gICAgICBmb3IgKGkgPSAxOyBpIDwgdGhpcy52ZXJ0aWNlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB2YXIgdmVydGV4ID0gdGhpcy52ZXJ0aWNlc1tpXTtcbiAgICAgICAgdmFyIHBvaW50ID0gdmVydGV4LnBvaW50O1xuICAgICAgICAvLyB1cGRhdGUgdGhlIG1pbiBjb29yZGluYXRlc1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgMzsgaiArPSAxKSB7XG4gICAgICAgICAgaWYgKHBvaW50W2pdIDwgbWluW2pdKSB7XG4gICAgICAgICAgICBtaW5bal0gPSBwb2ludFtqXTtcbiAgICAgICAgICAgIG1pblZlcnRpY2VzW2pdID0gdmVydGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyB1cGRhdGUgdGhlIG1heCBjb29yZGluYXRlc1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgMzsgaiArPSAxKSB7XG4gICAgICAgICAgaWYgKHBvaW50W2pdID4gbWF4W2pdKSB7XG4gICAgICAgICAgICBtYXhbal0gPSBwb2ludFtqXTtcbiAgICAgICAgICAgIG1heFZlcnRpY2VzW2pdID0gdmVydGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBjb21wdXRlIGVwc2lsb25cbiAgICAgIHRoaXMudG9sZXJhbmNlID0gMyAqIE51bWJlci5FUFNJTE9OICogKE1hdGgubWF4KE1hdGguYWJzKG1pblswXSksIE1hdGguYWJzKG1heFswXSkpICsgTWF0aC5tYXgoTWF0aC5hYnMobWluWzFdKSwgTWF0aC5hYnMobWF4WzFdKSkgKyBNYXRoLm1heChNYXRoLmFicyhtaW5bMl0pLCBNYXRoLmFicyhtYXhbMl0pKSk7XG4gICAgICBkZWJ1ZyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubG9nKCd0b2xlcmFuY2UgJWQnLCBtZS50b2xlcmFuY2UpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gW21pblZlcnRpY2VzLCBtYXhWZXJ0aWNlc107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29tcHVlcyB0aGUgaW5pdGlhbCB0ZXRyYWhlZHJvbiBhc3NpZ25pbmcgdG8gaXRzIGZhY2VzIGFsbCB0aGUgcG9pbnRzIHRoYXRcbiAgICAgKiBhcmUgY2FuZGlkYXRlcyB0byBmb3JtIHBhcnQgb2YgdGhlIGh1bGxcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnY3JlYXRlSW5pdGlhbFNpbXBsZXgnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVJbml0aWFsU2ltcGxleCgpIHtcbiAgICAgIHZhciB2ZXJ0aWNlcyA9IHRoaXMudmVydGljZXM7XG5cbiAgICAgIHZhciBfY29tcHV0ZUV4dHJlbWVzID0gdGhpcy5jb21wdXRlRXh0cmVtZXMoKSxcbiAgICAgICAgICBfY29tcHV0ZUV4dHJlbWVzMiA9IF9zbGljZWRUb0FycmF5KF9jb21wdXRlRXh0cmVtZXMsIDIpLFxuICAgICAgICAgIG1pbiA9IF9jb21wdXRlRXh0cmVtZXMyWzBdLFxuICAgICAgICAgIG1heCA9IF9jb21wdXRlRXh0cmVtZXMyWzFdO1xuXG4gICAgICB2YXIgdjAgPSB2b2lkIDAsXG4gICAgICAgICAgdjEgPSB2b2lkIDAsXG4gICAgICAgICAgdjIgPSB2b2lkIDAsXG4gICAgICAgICAgdjMgPSB2b2lkIDA7XG4gICAgICB2YXIgaSA9IHZvaWQgMCxcbiAgICAgICAgICBqID0gdm9pZCAwO1xuXG4gICAgICAvLyBGaW5kIHRoZSB0d28gdmVydGljZXMgd2l0aCB0aGUgZ3JlYXRlc3QgMWQgc2VwYXJhdGlvblxuICAgICAgLy8gKG1heC54IC0gbWluLngpXG4gICAgICAvLyAobWF4LnkgLSBtaW4ueSlcbiAgICAgIC8vIChtYXgueiAtIG1pbi56KVxuICAgICAgdmFyIG1heERpc3RhbmNlID0gMDtcbiAgICAgIHZhciBpbmRleE1heCA9IDA7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgMzsgaSArPSAxKSB7XG4gICAgICAgIHZhciBkaXN0YW5jZSA9IG1heFtpXS5wb2ludFtpXSAtIG1pbltpXS5wb2ludFtpXTtcbiAgICAgICAgaWYgKGRpc3RhbmNlID4gbWF4RGlzdGFuY2UpIHtcbiAgICAgICAgICBtYXhEaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgICAgICAgIGluZGV4TWF4ID0gaTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdjAgPSBtaW5baW5kZXhNYXhdO1xuICAgICAgdjEgPSBtYXhbaW5kZXhNYXhdO1xuXG4gICAgICAvLyB0aGUgbmV4dCB2ZXJ0ZXggaXMgdGhlIG9uZSBmYXJ0aGVzdCB0byB0aGUgbGluZSBmb3JtZWQgYnkgYHYwYCBhbmQgYHYxYFxuICAgICAgbWF4RGlzdGFuY2UgPSAwO1xuICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMudmVydGljZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgdmFyIHZlcnRleCA9IHRoaXMudmVydGljZXNbaV07XG4gICAgICAgIGlmICh2ZXJ0ZXggIT09IHYwICYmIHZlcnRleCAhPT0gdjEpIHtcbiAgICAgICAgICB2YXIgX2Rpc3RhbmNlID0gKDAsIF9wb2ludExpbmVEaXN0YW5jZTIuZGVmYXVsdCkodmVydGV4LnBvaW50LCB2MC5wb2ludCwgdjEucG9pbnQpO1xuICAgICAgICAgIGlmIChfZGlzdGFuY2UgPiBtYXhEaXN0YW5jZSkge1xuICAgICAgICAgICAgbWF4RGlzdGFuY2UgPSBfZGlzdGFuY2U7XG4gICAgICAgICAgICB2MiA9IHZlcnRleDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gdGhlIG5leHQgdmVydGVzIGlzIHRoZSBvbmUgZmFydGhlc3QgdG8gdGhlIHBsYW5lIGB2MGAsIGB2MWAsIGB2MmBcbiAgICAgIC8vIG5vcm1hbGl6ZSgodjIgLSB2MSkgeCAodjAgLSB2MSkpXG4gICAgICB2YXIgbm9ybWFsID0gKDAsIF9nZXRQbGFuZU5vcm1hbDIuZGVmYXVsdCkoW10sIHYwLnBvaW50LCB2MS5wb2ludCwgdjIucG9pbnQpO1xuICAgICAgLy8gZGlzdGFuY2UgZnJvbSB0aGUgb3JpZ2luIHRvIHRoZSBwbGFuZVxuICAgICAgdmFyIGRpc3RQTyA9ICgwLCBfZG90Mi5kZWZhdWx0KSh2MC5wb2ludCwgbm9ybWFsKTtcbiAgICAgIG1heERpc3RhbmNlID0gLTE7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy52ZXJ0aWNlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB2YXIgX3ZlcnRleCA9IHRoaXMudmVydGljZXNbaV07XG4gICAgICAgIGlmIChfdmVydGV4ICE9PSB2MCAmJiBfdmVydGV4ICE9PSB2MSAmJiBfdmVydGV4ICE9PSB2Mikge1xuICAgICAgICAgIHZhciBfZGlzdGFuY2UyID0gTWF0aC5hYnMoKDAsIF9kb3QyLmRlZmF1bHQpKG5vcm1hbCwgX3ZlcnRleC5wb2ludCkgLSBkaXN0UE8pO1xuICAgICAgICAgIGlmIChfZGlzdGFuY2UyID4gbWF4RGlzdGFuY2UpIHtcbiAgICAgICAgICAgIG1heERpc3RhbmNlID0gX2Rpc3RhbmNlMjtcbiAgICAgICAgICAgIHYzID0gX3ZlcnRleDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gaW5pdGlhbCBzaW1wbGV4XG4gICAgICAvLyBUYWtlbiBmcm9tIGh0dHA6Ly9ldmVyeXRoaW5nMi5jb20vdGl0bGUvSG93K3RvK3BhaW50K2ErdGV0cmFoZWRyb25cbiAgICAgIC8vXG4gICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYyXG4gICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLHwsXG4gICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICw3YGBcXCdWQSxcbiAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICw3YCAgIHwsIGAnVkEsXG4gICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgLDdgICAgICBgXFwgICAgYCdWQSxcbiAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgLDdgICAgICAgICB8LCAgICAgIGAnVkEsXG4gICAgICAvLyAgICAgICAgICAgICAgICAgICAsN2AgICAgICAgICAgYFxcICAgICAgICAgYCdWQSxcbiAgICAgIC8vICAgICAgICAgICAgICAgICAsN2AgICAgICAgICAgICAgfCwgICAgICAgICAgIGAnVkEsXG4gICAgICAvLyAgICAgICAgICAgICAgICw3YCAgICAgICAgICAgICAgIGBcXCAgICAgICAsLi5vb09PVEtgIHYzXG4gICAgICAvLyAgICAgICAgICAgICAsN2AgICAgICAgICAgICAgICAgICB8LC5vb09PVCcnYCAgICBBVlxuICAgICAgLy8gICAgICAgICAgICw3YCAgICAgICAgICAgICwuLm9vT09UYFxcYCAgICAgICAgICAgLzdcbiAgICAgIC8vICAgICAgICAgLDdgICAgICAgLC4ub29PT1QnJ2AgICAgICB8LCAgICAgICAgICBBVlxuICAgICAgLy8gICAgICAgICxULC4ub29PT1QnJ2AgICAgICAgICAgICAgIGBcXCAgICAgICAgIC83XG4gICAgICAvLyAgICAgdjAgYCdUVHMuLCAgICAgICAgICAgICAgICAgICAgIHwsICAgICAgIEFWXG4gICAgICAvLyAgICAgICAgICAgIGAnVFRzLiwgICAgICAgICAgICAgICAgIGBcXCAgICAgIC83XG4gICAgICAvLyAgICAgICAgICAgICAgICAgYCdUVHMuLCAgICAgICAgICAgICB8LCAgICBBVlxuICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgYCdUVHMuLCAgICAgICAgYFxcICAgLzdcbiAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgYCdUVHMuLCAgICB8LCBBVlxuICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAnVFRzLixcXC83XG4gICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJ1RgXG4gICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYxXG4gICAgICAvL1xuICAgICAgdmFyIGZhY2VzID0gW107XG4gICAgICBpZiAoKDAsIF9kb3QyLmRlZmF1bHQpKHYzLnBvaW50LCBub3JtYWwpIC0gZGlzdFBPIDwgMCkge1xuICAgICAgICAvLyB0aGUgZmFjZSBpcyBub3QgYWJsZSB0byBzZWUgdGhlIHBvaW50IHNvIGBwbGFuZU5vcm1hbGBcbiAgICAgICAgLy8gaXMgcG9pbnRpbmcgb3V0c2lkZSB0aGUgdGV0cmFoZWRyb25cbiAgICAgICAgZmFjZXMucHVzaChfRmFjZTIuZGVmYXVsdC5jcmVhdGVUcmlhbmdsZSh2MCwgdjEsIHYyKSwgX0ZhY2UyLmRlZmF1bHQuY3JlYXRlVHJpYW5nbGUodjMsIHYxLCB2MCksIF9GYWNlMi5kZWZhdWx0LmNyZWF0ZVRyaWFuZ2xlKHYzLCB2MiwgdjEpLCBfRmFjZTIuZGVmYXVsdC5jcmVhdGVUcmlhbmdsZSh2MywgdjAsIHYyKSk7XG5cbiAgICAgICAgLy8gc2V0IHRoZSBvcHBvc2l0ZSBlZGdlXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCAzOyBpICs9IDEpIHtcbiAgICAgICAgICB2YXIgX2ogPSAoaSArIDEpICUgMztcbiAgICAgICAgICAvLyBqb2luIGZhY2VbaV0gaSA+IDAsIHdpdGggdGhlIGZpcnN0IGZhY2VcbiAgICAgICAgICBmYWNlc1tpICsgMV0uZ2V0RWRnZSgyKS5zZXRPcHBvc2l0ZShmYWNlc1swXS5nZXRFZGdlKF9qKSk7XG4gICAgICAgICAgLy8gam9pbiBmYWNlW2ldIHdpdGggZmFjZVtpICsgMV0sIDEgPD0gaSA8PSAzXG4gICAgICAgICAgZmFjZXNbaSArIDFdLmdldEVkZ2UoMSkuc2V0T3Bwb3NpdGUoZmFjZXNbX2ogKyAxXS5nZXRFZGdlKDApKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdGhlIGZhY2UgaXMgYWJsZSB0byBzZWUgdGhlIHBvaW50IHNvIGBwbGFuZU5vcm1hbGBcbiAgICAgICAgLy8gaXMgcG9pbnRpbmcgaW5zaWRlIHRoZSB0ZXRyYWhlZHJvblxuICAgICAgICBmYWNlcy5wdXNoKF9GYWNlMi5kZWZhdWx0LmNyZWF0ZVRyaWFuZ2xlKHYwLCB2MiwgdjEpLCBfRmFjZTIuZGVmYXVsdC5jcmVhdGVUcmlhbmdsZSh2MywgdjAsIHYxKSwgX0ZhY2UyLmRlZmF1bHQuY3JlYXRlVHJpYW5nbGUodjMsIHYxLCB2MiksIF9GYWNlMi5kZWZhdWx0LmNyZWF0ZVRyaWFuZ2xlKHYzLCB2MiwgdjApKTtcblxuICAgICAgICAvLyBzZXQgdGhlIG9wcG9zaXRlIGVkZ2VcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IDM7IGkgKz0gMSkge1xuICAgICAgICAgIHZhciBfajIgPSAoaSArIDEpICUgMztcbiAgICAgICAgICAvLyBqb2luIGZhY2VbaV0gaSA+IDAsIHdpdGggdGhlIGZpcnN0IGZhY2VcbiAgICAgICAgICBmYWNlc1tpICsgMV0uZ2V0RWRnZSgyKS5zZXRPcHBvc2l0ZShmYWNlc1swXS5nZXRFZGdlKCgzIC0gaSkgJSAzKSk7XG4gICAgICAgICAgLy8gam9pbiBmYWNlW2ldIHdpdGggZmFjZVtpICsgMV1cbiAgICAgICAgICBmYWNlc1tpICsgMV0uZ2V0RWRnZSgwKS5zZXRPcHBvc2l0ZShmYWNlc1tfajIgKyAxXS5nZXRFZGdlKDEpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyB0aGUgaW5pdGlhbCBodWxsIGlzIHRoZSB0ZXRyYWhlZHJvblxuICAgICAgZm9yIChpID0gMDsgaSA8IDQ7IGkgKz0gMSkge1xuICAgICAgICB0aGlzLmZhY2VzLnB1c2goZmFjZXNbaV0pO1xuICAgICAgfVxuXG4gICAgICAvLyBpbml0aWFsIGFzc2lnbm1lbnQgb2YgdmVydGljZXMgdG8gdGhlIGZhY2VzIG9mIHRoZSB0ZXRyYWhlZHJvblxuICAgICAgZm9yIChpID0gMDsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHZhciBfdmVydGV4MiA9IHZlcnRpY2VzW2ldO1xuICAgICAgICBpZiAoX3ZlcnRleDIgIT09IHYwICYmIF92ZXJ0ZXgyICE9PSB2MSAmJiBfdmVydGV4MiAhPT0gdjMgJiYgX3ZlcnRleDIgIT09IHYzKSB7XG4gICAgICAgICAgbWF4RGlzdGFuY2UgPSB0aGlzLnRvbGVyYW5jZTtcbiAgICAgICAgICB2YXIgbWF4RmFjZSA9IHZvaWQgMDtcbiAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgNDsgaiArPSAxKSB7XG4gICAgICAgICAgICB2YXIgX2Rpc3RhbmNlMyA9IGZhY2VzW2pdLmRpc3RhbmNlVG9QbGFuZShfdmVydGV4Mi5wb2ludCk7XG4gICAgICAgICAgICBpZiAoX2Rpc3RhbmNlMyA+IG1heERpc3RhbmNlKSB7XG4gICAgICAgICAgICAgIG1heERpc3RhbmNlID0gX2Rpc3RhbmNlMztcbiAgICAgICAgICAgICAgbWF4RmFjZSA9IGZhY2VzW2pdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChtYXhGYWNlKSB7XG4gICAgICAgICAgICB0aGlzLmFkZFZlcnRleFRvRmFjZShfdmVydGV4MiwgbWF4RmFjZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVpbmRleEZhY2VBbmRWZXJ0aWNlcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlaW5kZXhGYWNlQW5kVmVydGljZXMoKSB7XG4gICAgICAvLyByZW1vdmUgaW5hY3RpdmUgZmFjZXNcbiAgICAgIHZhciBhY3RpdmVGYWNlcyA9IFtdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmZhY2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHZhciBmYWNlID0gdGhpcy5mYWNlc1tpXTtcbiAgICAgICAgaWYgKGZhY2UubWFyayA9PT0gX0ZhY2UuVklTSUJMRSkge1xuICAgICAgICAgIGFjdGl2ZUZhY2VzLnB1c2goZmFjZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuZmFjZXMgPSBhY3RpdmVGYWNlcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb2xsZWN0RmFjZXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb2xsZWN0RmFjZXMoc2tpcFRyaWFuZ3VsYXRpb24pIHtcbiAgICAgIHZhciBmYWNlSW5kaWNlcyA9IFtdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmZhY2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmICh0aGlzLmZhY2VzW2ldLm1hcmsgIT09IF9GYWNlLlZJU0lCTEUpIHtcbiAgICAgICAgICB0aHJvdyBFcnJvcignYXR0ZW1wdCB0byBpbmNsdWRlIGEgZGVzdHJveWVkIGZhY2UgaW4gdGhlIGh1bGwnKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW5kaWNlcyA9IHRoaXMuZmFjZXNbaV0uY29sbGVjdEluZGljZXMoKTtcbiAgICAgICAgaWYgKHNraXBUcmlhbmd1bGF0aW9uKSB7XG4gICAgICAgICAgZmFjZUluZGljZXMucHVzaChpbmRpY2VzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGluZGljZXMubGVuZ3RoIC0gMjsgaiArPSAxKSB7XG4gICAgICAgICAgICBmYWNlSW5kaWNlcy5wdXNoKFtpbmRpY2VzWzBdLCBpbmRpY2VzW2ogKyAxXSwgaW5kaWNlc1tqICsgMl1dKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWNlSW5kaWNlcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kcyB0aGUgbmV4dCB2ZXJ0ZXggdG8gbWFrZSBmYWNlcyB3aXRoIHRoZSBjdXJyZW50IGh1bGxcbiAgICAgKlxuICAgICAqIC0gbGV0IGBmYWNlYCBiZSB0aGUgZmlyc3QgZmFjZSBleGlzdGluZyBpbiB0aGUgYGNsYWltZWRgIHZlcnRleCBsaXN0XG4gICAgICogIC0gaWYgYGZhY2VgIGRvZXNuJ3QgZXhpc3QgdGhlbiByZXR1cm4gc2luY2UgdGhlcmUncmUgbm8gdmVydGljZXMgbGVmdFxuICAgICAqICAtIG90aGVyd2lzZSBmb3IgZWFjaCBgdmVydGV4YCB0aGF0IGZhY2Ugc2VlcyBmaW5kIHRoZSBvbmUgZnVydGhlc3QgYXdheVxuICAgICAqICBmcm9tIGBmYWNlYFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVydGV4fHVuZGVmaW5lZH0gUmV0dXJucyB1bmRlZmluZWQgd2hlbiB0aGVyZSdyZSBubyBtb3JlXG4gICAgICogdmlzaWJsZSB2ZXJ0aWNlc1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICduZXh0VmVydGV4VG9BZGQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBuZXh0VmVydGV4VG9BZGQoKSB7XG4gICAgICBpZiAoIXRoaXMuY2xhaW1lZC5pc0VtcHR5KCkpIHtcbiAgICAgICAgdmFyIGV5ZVZlcnRleCA9IHZvaWQgMCxcbiAgICAgICAgICAgIHZlcnRleCA9IHZvaWQgMDtcbiAgICAgICAgdmFyIG1heERpc3RhbmNlID0gMDtcbiAgICAgICAgdmFyIGV5ZUZhY2UgPSB0aGlzLmNsYWltZWQuZmlyc3QoKS5mYWNlO1xuICAgICAgICBmb3IgKHZlcnRleCA9IGV5ZUZhY2Uub3V0c2lkZTsgdmVydGV4ICYmIHZlcnRleC5mYWNlID09PSBleWVGYWNlOyB2ZXJ0ZXggPSB2ZXJ0ZXgubmV4dCkge1xuICAgICAgICAgIHZhciBkaXN0YW5jZSA9IGV5ZUZhY2UuZGlzdGFuY2VUb1BsYW5lKHZlcnRleC5wb2ludCk7XG4gICAgICAgICAgaWYgKGRpc3RhbmNlID4gbWF4RGlzdGFuY2UpIHtcbiAgICAgICAgICAgIG1heERpc3RhbmNlID0gZGlzdGFuY2U7XG4gICAgICAgICAgICBleWVWZXJ0ZXggPSB2ZXJ0ZXg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBleWVWZXJ0ZXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29tcHV0ZXMgYSBjaGFpbiBvZiBoYWxmIGVkZ2VzIGluIGNjdyBvcmRlciBjYWxsZWQgdGhlIGBob3Jpem9uYCwgZm9yIGFuXG4gICAgICogZWRnZSB0byBiZSBwYXJ0IG9mIHRoZSBob3Jpem9uIGl0IG11c3Qgam9pbiBhIGZhY2UgdGhhdCBjYW4gc2VlXG4gICAgICogYGV5ZVBvaW50YCBhbmQgYSBmYWNlIHRoYXQgY2Fubm90IHNlZSBgZXllUG9pbnRgXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcltdfSBleWVQb2ludCAtIFRoZSBjb29yZGluYXRlcyBvZiBhIHBvaW50XG4gICAgICogQHBhcmFtIHtIYWxmRWRnZX0gY3Jvc3NFZGdlIC0gVGhlIGVkZ2UgdXNlZCB0byBqdW1wIHRvIHRoZSBjdXJyZW50IGBmYWNlYFxuICAgICAqIEBwYXJhbSB7RmFjZX0gZmFjZSAtIFRoZSBjdXJyZW50IGZhY2UgYmVpbmcgdGVzdGVkXG4gICAgICogQHBhcmFtIHtIYWxmRWRnZVtdfSBob3Jpem9uIC0gVGhlIGVkZ2VzIHRoYXQgZm9ybSBwYXJ0IG9mIHRoZSBob3Jpem9uIGluXG4gICAgICogY2N3IG9yZGVyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2NvbXB1dGVIb3Jpem9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcHV0ZUhvcml6b24oZXllUG9pbnQsIGNyb3NzRWRnZSwgZmFjZSwgaG9yaXpvbikge1xuICAgICAgLy8gbW92ZXMgZmFjZSdzIHZlcnRpY2VzIHRvIHRoZSBgdW5jbGFpbWVkYCB2ZXJ0ZXggbGlzdFxuICAgICAgdGhpcy5kZWxldGVGYWNlVmVydGljZXMoZmFjZSk7XG5cbiAgICAgIGZhY2UubWFyayA9IF9GYWNlLkRFTEVURUQ7XG5cbiAgICAgIHZhciBlZGdlID0gdm9pZCAwO1xuICAgICAgaWYgKCFjcm9zc0VkZ2UpIHtcbiAgICAgICAgZWRnZSA9IGNyb3NzRWRnZSA9IGZhY2UuZ2V0RWRnZSgwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHN0YXJ0IGZyb20gdGhlIG5leHQgZWRnZSBzaW5jZSBgY3Jvc3NFZGdlYCB3YXMgYWxyZWFkeSBhbmFseXplZFxuICAgICAgICAvLyAoYWN0dWFsbHkgYGNyb3NzRWRnZS5vcHBvc2l0ZWAgd2FzIHRoZSBmYWNlIHdobyBjYWxsZWQgdGhpcyBtZXRob2RcbiAgICAgICAgLy8gcmVjdXJzaXZlbHkpXG4gICAgICAgIGVkZ2UgPSBjcm9zc0VkZ2UubmV4dDtcbiAgICAgIH1cblxuICAgICAgLy8gQWxsIHRoZSBmYWNlcyB0aGF0IGFyZSBhYmxlIHRvIHNlZSBgZXllVmVydGV4YCBhcmUgZGVmaW5lZCBhcyBmb2xsb3dzXG4gICAgICAvL1xuICAgICAgLy8gICAgICAgdiAgICAvXG4gICAgICAvLyAgICAgICAgICAgLyA8PT0gdmlzaWJsZSBmYWNlXG4gICAgICAvLyAgICAgICAgICAvXG4gICAgICAvLyAgICAgICAgIHxcbiAgICAgIC8vICAgICAgICAgfCA8PT0gbm90IHZpc2libGUgZmFjZVxuICAgICAgLy9cbiAgICAgIC8vICBkb3QodiwgdmlzaWJsZSBmYWNlIG5vcm1hbCkgLSB2aXNpYmxlIGZhY2Ugb2Zmc2V0ID4gdGhpcy50b2xlcmFuY2VcbiAgICAgIC8vXG4gICAgICBkbyB7XG4gICAgICAgIHZhciBvcHBvc2l0ZUVkZ2UgPSBlZGdlLm9wcG9zaXRlO1xuICAgICAgICB2YXIgb3Bwb3NpdGVGYWNlID0gb3Bwb3NpdGVFZGdlLmZhY2U7XG4gICAgICAgIGlmIChvcHBvc2l0ZUZhY2UubWFyayA9PT0gX0ZhY2UuVklTSUJMRSkge1xuICAgICAgICAgIGlmIChvcHBvc2l0ZUZhY2UuZGlzdGFuY2VUb1BsYW5lKGV5ZVBvaW50KSA+IHRoaXMudG9sZXJhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXB1dGVIb3Jpem9uKGV5ZVBvaW50LCBvcHBvc2l0ZUVkZ2UsIG9wcG9zaXRlRmFjZSwgaG9yaXpvbik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhvcml6b24ucHVzaChlZGdlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWRnZSA9IGVkZ2UubmV4dDtcbiAgICAgIH0gd2hpbGUgKGVkZ2UgIT09IGNyb3NzRWRnZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGZhY2Ugd2l0aCB0aGUgcG9pbnRzIGBleWVWZXJ0ZXgucG9pbnRgLCBgaG9yaXpvbkVkZ2UudGFpbGAgYW5kXG4gICAgICogYGhvcml6b25FZGdlLnRhaWxgIGluIGNjdyBvcmRlclxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZXJ0ZXh9IGV5ZVZlcnRleFxuICAgICAqIEBwYXJhbSB7SGFsZkVkZ2V9IGhvcml6b25FZGdlXG4gICAgICogQHJldHVybiB7SGFsZkVkZ2V9IFRoZSBoYWxmIGVkZ2Ugd2hvc2UgdmVydGV4IGlzIHRoZSBleWVWZXJ0ZXhcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnYWRkQWRqb2luaW5nRmFjZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEFkam9pbmluZ0ZhY2UoZXllVmVydGV4LCBob3Jpem9uRWRnZSkge1xuICAgICAgLy8gYWxsIHRoZSBoYWxmIGVkZ2VzIGFyZSBjcmVhdGVkIGluIGNjdyBvcmRlciB0aHVzIHRoZSBmYWNlIGlzIGFsd2F5c1xuICAgICAgLy8gcG9pbnRpbmcgb3V0c2lkZSB0aGUgaHVsbFxuICAgICAgLy8gZWRnZXM6XG4gICAgICAvL1xuICAgICAgLy8gICAgICAgICAgICAgICAgICBleWVWZXJ0ZXgucG9pbnRcbiAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAvIFxcXG4gICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAvICAgXFxcbiAgICAgIC8vICAgICAgICAgICAgICAgICAgMSAgLyAgICAgXFwgIDBcbiAgICAgIC8vICAgICAgICAgICAgICAgICAgICAvICAgICAgIFxcXG4gICAgICAvLyAgICAgICAgICAgICAgICAgICAvICAgICAgICAgXFxcbiAgICAgIC8vICAgICAgICAgICAgICAgICAgLyAgICAgICAgICAgXFxcbiAgICAgIC8vICAgICAgICAgIGhvcml6b24udGFpbCAtLS0gaG9yaXpvbi5oZWFkXG4gICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgIC8vXG4gICAgICB2YXIgZmFjZSA9IF9GYWNlMi5kZWZhdWx0LmNyZWF0ZVRyaWFuZ2xlKGV5ZVZlcnRleCwgaG9yaXpvbkVkZ2UudGFpbCgpLCBob3Jpem9uRWRnZS5oZWFkKCkpO1xuICAgICAgdGhpcy5mYWNlcy5wdXNoKGZhY2UpO1xuICAgICAgLy8gam9pbiBmYWNlLmdldEVkZ2UoLTEpIHdpdGggdGhlIGhvcml6b24ncyBvcHBvc2l0ZSBlZGdlXG4gICAgICAvLyBmYWNlLmdldEVkZ2UoLTEpID0gZmFjZS5nZXRFZGdlKDIpXG4gICAgICBmYWNlLmdldEVkZ2UoLTEpLnNldE9wcG9zaXRlKGhvcml6b25FZGdlLm9wcG9zaXRlKTtcbiAgICAgIHJldHVybiBmYWNlLmdldEVkZ2UoMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBob3Jpem9uLmxlbmd0aCBmYWNlcyB0byB0aGUgaHVsbCwgZWFjaCBmYWNlIHdpbGwgYmUgJ2xpbmtlZCcgd2l0aCB0aGVcbiAgICAgKiBob3Jpem9uIG9wcG9zaXRlIGZhY2UgYW5kIHRoZSBmYWNlIG9uIHRoZSBsZWZ0L3JpZ2h0XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlcnRleH0gZXllVmVydGV4XG4gICAgICogQHBhcmFtIHtIYWxmRWRnZVtdfSBob3Jpem9uIC0gQSBjaGFpbiBvZiBoYWxmIGVkZ2VzIGluIGNjdyBvcmRlclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdhZGROZXdGYWNlcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZE5ld0ZhY2VzKGV5ZVZlcnRleCwgaG9yaXpvbikge1xuICAgICAgdGhpcy5uZXdGYWNlcyA9IFtdO1xuICAgICAgdmFyIGZpcnN0U2lkZUVkZ2UgPSB2b2lkIDAsXG4gICAgICAgICAgcHJldmlvdXNTaWRlRWRnZSA9IHZvaWQgMDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaG9yaXpvbi5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB2YXIgaG9yaXpvbkVkZ2UgPSBob3Jpem9uW2ldO1xuICAgICAgICAvLyByZXR1cm5zIHRoZSByaWdodCBzaWRlIGVkZ2VcbiAgICAgICAgdmFyIHNpZGVFZGdlID0gdGhpcy5hZGRBZGpvaW5pbmdGYWNlKGV5ZVZlcnRleCwgaG9yaXpvbkVkZ2UpO1xuICAgICAgICBpZiAoIWZpcnN0U2lkZUVkZ2UpIHtcbiAgICAgICAgICBmaXJzdFNpZGVFZGdlID0gc2lkZUVkZ2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gam9pbnMgZmFjZS5nZXRFZGdlKDEpIHdpdGggcHJldmlvdXNGYWNlLmdldEVkZ2UoMClcbiAgICAgICAgICBzaWRlRWRnZS5uZXh0LnNldE9wcG9zaXRlKHByZXZpb3VzU2lkZUVkZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubmV3RmFjZXMucHVzaChzaWRlRWRnZS5mYWNlKTtcbiAgICAgICAgcHJldmlvdXNTaWRlRWRnZSA9IHNpZGVFZGdlO1xuICAgICAgfVxuICAgICAgZmlyc3RTaWRlRWRnZS5uZXh0LnNldE9wcG9zaXRlKHByZXZpb3VzU2lkZUVkZ2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbXB1dGVzIHRoZSBkaXN0YW5jZSBmcm9tIGBlZGdlYCBvcHBvc2l0ZSBmYWNlJ3MgY2VudHJvaWQgdG9cbiAgICAgKiBgZWRnZS5mYWNlYFxuICAgICAqXG4gICAgICogQHBhcmFtIHtIYWxmRWRnZX0gZWRnZVxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKiAtIEEgcG9zaXRpdmUgbnVtYmVyIHdoZW4gdGhlIGNlbnRyb2lkIG9mIHRoZSBvcHBvc2l0ZSBmYWNlIGlzIGFib3ZlIHRoZVxuICAgICAqICAgZmFjZSBpLmUuIHdoZW4gdGhlIGZhY2VzIGFyZSBjb25jYXZlXG4gICAgICogLSBBIG5lZ2F0aXZlIG51bWJlciB3aGVuIHRoZSBjZW50cm9pZCBvZiB0aGUgb3Bwb3NpdGUgZmFjZSBpcyBiZWxvdyB0aGVcbiAgICAgKiAgIGZhY2UgaS5lLiB3aGVuIHRoZSBmYWNlcyBhcmUgY29udmV4XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ29wcG9zaXRlRmFjZURpc3RhbmNlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb3Bwb3NpdGVGYWNlRGlzdGFuY2UoZWRnZSkge1xuICAgICAgcmV0dXJuIGVkZ2UuZmFjZS5kaXN0YW5jZVRvUGxhbmUoZWRnZS5vcHBvc2l0ZS5mYWNlLmNlbnRyb2lkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNZXJnZXMgYSBmYWNlIHdpdGggbm9uZS9hbnkvYWxsIGl0cyBuZWlnaGJvcnMgYWNjb3JkaW5nIHRvIHRoZSBzdHJhdGVneVxuICAgICAqIHVzZWRcbiAgICAgKlxuICAgICAqIGlmIGBtZXJnZVR5cGVgIGlzIE1FUkdFX05PTl9DT05WRVhfV1JUX0xBUkdFUl9GQUNFIHRoZW4gdGhlIG1lcmdlIHdpbGwgYmVcbiAgICAgKiBkZWNpZGVkIGJhc2VkIG9uIHRoZSBmYWNlIHdpdGggdGhlIGxhcmdlciBhcmVhLCB0aGUgY2VudHJvaWQgb2YgdGhlIGZhY2VcbiAgICAgKiB3aXRoIHRoZSBzbWFsbGVyIGFyZWEgd2lsbCBiZSBjaGVja2VkIGFnYWluc3QgdGhlIG9uZSB3aXRoIHRoZSBsYXJnZXIgYXJlYVxuICAgICAqIHRvIHNlZSBpZiBpdCdzIGluIHRoZSBtZXJnZSByYW5nZSBbdG9sZXJhbmNlLCAtdG9sZXJhbmNlXSBpLmUuXG4gICAgICpcbiAgICAgKiAgICBkb3QoY2VudHJvaWQgc21hbGxlciBmYWNlLCBsYXJnZXIgZmFjZSBub3JtYWwpIC0gbGFyZ2VyIGZhY2Ugb2Zmc2V0ID4gLXRvbGVyYW5jZVxuICAgICAqXG4gICAgICogTm90ZSB0aGF0IHRoZSBmaXJzdCBjaGVjayAod2l0aCArdG9sZXJhbmNlKSB3YXMgZG9uZSBvbiBgY29tcHV0ZUhvcml6b25gXG4gICAgICpcbiAgICAgKiBJZiB0aGUgYWJvdmUgaXMgbm90IHRydWUgdGhlbiB0aGUgY2hlY2sgaXMgZG9uZSB3aXRoIHJlc3BlY3QgdG8gdGhlIHNtYWxsZXJcbiAgICAgKiBmYWNlIGkuZS5cbiAgICAgKlxuICAgICAqICAgIGRvdChjZW50cm9pZCBsYXJnZXIgZmFjZSwgc21hbGxlciBmYWNlIG5vcm1hbCkgLSBzbWFsbGVyIGZhY2Ugb2Zmc2V0ID4gLXRvbGVyYW5jZVxuICAgICAqXG4gICAgICogSWYgdHJ1ZSB0aGVuIGl0IG1lYW5zIHRoYXQgdHdvIGZhY2VzIGFyZSBub24gY29udmV4IChjb25jYXZlKSwgZXZlbiBpZiB0aGVcbiAgICAgKiBkb3QoLi4uKSAtIG9mZnNldCB2YWx1ZSBpcyA+IDAgKHRoYXQncyB0aGUgcG9pbnQgb2YgZG9pbmcgdGhlIG1lcmdlIGluIHRoZVxuICAgICAqIGZpcnN0IHBsYWNlKVxuICAgICAqXG4gICAgICogSWYgdHdvIGZhY2VzIGFyZSBjb25jYXZlIHRoZW4gdGhlIGNoZWNrIG11c3QgYWxzbyBiZSBkb25lIG9uIHRoZSBvdGhlciBmYWNlXG4gICAgICogYnV0IHRoaXMgaXMgZG9uZSBpbiBhbm90aGVyIG1lcmdlIHBhc3MsIGZvciB0aGlzIHRvIGhhcHBlbiB0aGUgZmFjZSBpc1xuICAgICAqIG1hcmtlZCBpbiBhIHRlbXBvcmFsIE5PTl9DT05WRVggc3RhdGVcbiAgICAgKlxuICAgICAqIGlmIGBtZXJnZVR5cGVgIGlzIE1FUkdFX05PTl9DT05WRVggdGhlbiB0d28gZmFjZXMgd2lsbCBiZSBtZXJnZWQgb25seSBpZlxuICAgICAqIHRoZXkgcGFzcyB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnNcbiAgICAgKlxuICAgICAqICAgIGRvdChjZW50cm9pZCBzbWFsbGVyIGZhY2UsIGxhcmdlciBmYWNlIG5vcm1hbCkgLSBsYXJnZXIgZmFjZSBvZmZzZXQgPiAtdG9sZXJhbmNlXG4gICAgICogICAgZG90KGNlbnRyb2lkIGxhcmdlciBmYWNlLCBzbWFsbGVyIGZhY2Ugbm9ybWFsKSAtIHNtYWxsZXIgZmFjZSBvZmZzZXQgPiAtdG9sZXJhbmNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0ZhY2V9IGZhY2VcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWVyZ2VUeXBlIC0gRWl0aGVyIE1FUkdFX05PTl9DT05WRVhfV1JUX0xBUkdFUl9GQUNFIG9yXG4gICAgICogTUVSR0VfTk9OX0NPTlZFWFxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdkb0FkamFjZW50TWVyZ2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb0FkamFjZW50TWVyZ2UoZmFjZSwgbWVyZ2VUeXBlKSB7XG4gICAgICB2YXIgZWRnZSA9IGZhY2UuZWRnZTtcbiAgICAgIHZhciBjb252ZXggPSB0cnVlO1xuICAgICAgdmFyIGl0ID0gMDtcbiAgICAgIGRvIHtcbiAgICAgICAgaWYgKGl0ID49IGZhY2UublZlcnRpY2VzKSB7XG4gICAgICAgICAgdGhyb3cgRXJyb3IoJ21lcmdlIHJlY3Vyc2lvbiBsaW1pdCBleGNlZWRlZCcpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcHBvc2l0ZUZhY2UgPSBlZGdlLm9wcG9zaXRlLmZhY2U7XG4gICAgICAgIHZhciBtZXJnZSA9IGZhbHNlO1xuXG4gICAgICAgIC8vIEltcG9ydGFudCBub3RlcyBhYm91dCB0aGUgYWxnb3JpdGhtIHRvIG1lcmdlIGZhY2VzXG4gICAgICAgIC8vXG4gICAgICAgIC8vIC0gR2l2ZW4gYSB2ZXJ0ZXggYGV5ZVZlcnRleGAgdGhhdCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBodWxsXG4gICAgICAgIC8vICAgYWxsIHRoZSBmYWNlcyB0aGF0IGNhbm5vdCBzZWUgYGV5ZVZlcnRleGAgYXJlIGRlZmluZWQgYXMgZm9sbG93c1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgIGRvdCh2LCBub3QgdmlzaWJsZSBmYWNlIG5vcm1hbCkgLSBub3QgdmlzaWJsZSBvZmZzZXQgPCB0b2xlcmFuY2VcbiAgICAgICAgLy9cbiAgICAgICAgLy8gLSBUd28gZmFjZXMgY2FuIGJlIG1lcmdlZCB3aGVuIHRoZSBjZW50cm9pZCBvZiBvbmUgb2YgdGhlc2UgZmFjZXNcbiAgICAgICAgLy8gcHJvamVjdGVkIHRvIHRoZSBub3JtYWwgb2YgdGhlIG90aGVyIGZhY2UgbWludXMgdGhlIG90aGVyIGZhY2Ugb2Zmc2V0XG4gICAgICAgIC8vIGlzIGluIHRoZSByYW5nZSBbdG9sZXJhbmNlLCAtdG9sZXJhbmNlXVxuICAgICAgICAvLyAtIFNpbmNlIGBmYWNlYCAoZ2l2ZW4gaW4gdGhlIGlucHV0IGZvciB0aGlzIG1ldGhvZCkgaGFzIHBhc3NlZCB0aGVcbiAgICAgICAgLy8gY2hlY2sgYWJvdmUgd2Ugb25seSBoYXZlIHRvIGNoZWNrIHRoZSBsb3dlciBib3VuZCBlLmcuXG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICAgZG90KHYsIG5vdCB2aXNpYmxlIGZhY2Ugbm9ybWFsKSAtIG5vdCB2aXNpYmxlIG9mZnNldCA+IC10b2xlcmFuY2VcbiAgICAgICAgLy9cbiAgICAgICAgaWYgKG1lcmdlVHlwZSA9PT0gTUVSR0VfTk9OX0NPTlZFWCkge1xuICAgICAgICAgIGlmICh0aGlzLm9wcG9zaXRlRmFjZURpc3RhbmNlKGVkZ2UpID4gLXRoaXMudG9sZXJhbmNlIHx8IHRoaXMub3Bwb3NpdGVGYWNlRGlzdGFuY2UoZWRnZS5vcHBvc2l0ZSkgPiAtdGhpcy50b2xlcmFuY2UpIHtcbiAgICAgICAgICAgIG1lcmdlID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGZhY2UuYXJlYSA+IG9wcG9zaXRlRmFjZS5hcmVhKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHBvc2l0ZUZhY2VEaXN0YW5jZShlZGdlKSA+IC10aGlzLnRvbGVyYW5jZSkge1xuICAgICAgICAgICAgICBtZXJnZSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMub3Bwb3NpdGVGYWNlRGlzdGFuY2UoZWRnZS5vcHBvc2l0ZSkgPiAtdGhpcy50b2xlcmFuY2UpIHtcbiAgICAgICAgICAgICAgY29udmV4ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wcG9zaXRlRmFjZURpc3RhbmNlKGVkZ2Uub3Bwb3NpdGUpID4gLXRoaXMudG9sZXJhbmNlKSB7XG4gICAgICAgICAgICAgIG1lcmdlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHBvc2l0ZUZhY2VEaXN0YW5jZShlZGdlKSA+IC10aGlzLnRvbGVyYW5jZSkge1xuICAgICAgICAgICAgICBjb252ZXggPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobWVyZ2UpIHtcbiAgICAgICAgICAgIGRlYnVnLmxvZ2dlcignZmFjZSBtZXJnZScpO1xuICAgICAgICAgICAgLy8gd2hlbiB0d28gZmFjZXMgYXJlIG1lcmdlZCBpdCBtaWdodCBiZSBwb3NzaWJsZSB0aGF0IHJlZHVuZGFudCBmYWNlc1xuICAgICAgICAgICAgLy8gYXJlIGRlc3Ryb3llZCwgaW4gdGhhdCBjYXNlIG1vdmUgYWxsIHRoZSB2aXNpYmxlIHZlcnRpY2VzIGZyb20gdGhlXG4gICAgICAgICAgICAvLyBkZXN0cm95ZWQgZmFjZXMgdG8gdGhlIGB1bmNsYWltZWRgIHZlcnRleCBsaXN0XG4gICAgICAgICAgICB2YXIgZGlzY2FyZGVkRmFjZXMgPSBmYWNlLm1lcmdlQWRqYWNlbnRGYWNlcyhlZGdlLCBbXSk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRpc2NhcmRlZEZhY2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgIHRoaXMuZGVsZXRlRmFjZVZlcnRpY2VzKGRpc2NhcmRlZEZhY2VzW2ldLCBmYWNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlZGdlID0gZWRnZS5uZXh0O1xuICAgICAgICBpdCArPSAxO1xuICAgICAgfSB3aGlsZSAoZWRnZSAhPT0gZmFjZS5lZGdlKTtcbiAgICAgIGlmICghY29udmV4KSB7XG4gICAgICAgIGZhY2UubWFyayA9IF9GYWNlLk5PTl9DT05WRVg7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIHZlcnRleCB0byB0aGUgaHVsbCB3aXRoIHRoZSBmb2xsb3dpbmcgYWxnb3JpdGhtXG4gICAgICpcbiAgICAgKiAtIENvbXB1dGUgdGhlIGBob3Jpem9uYCB3aGljaCBpcyBhIGNoYWluIG9mIGhhbGYgZWRnZXMsIGZvciBhbiBlZGdlIHRvXG4gICAgICogICBiZWxvbmcgdG8gdGhpcyBncm91cCBpdCBtdXN0IGJlIHRoZSBlZGdlIGNvbm5lY3RpbmcgYSBmYWNlIHRoYXQgY2FuXG4gICAgICogICBzZWUgYGV5ZVZlcnRleGAgYW5kIGEgZmFjZSB3aGljaCBjYW5ub3Qgc2VlIGBleWVWZXJ0ZXhgXG4gICAgICogLSBBbGwgdGhlIGZhY2VzIHRoYXQgY2FuIHNlZSBgZXllVmVydGV4YCBoYXZlIGl0cyB2aXNpYmxlIHZlcnRpY2VzIHJlbW92ZWRcbiAgICAgKiAgIGZyb20gdGhlIGNsYWltZWQgVmVydGV4TGlzdFxuICAgICAqIC0gQSBuZXcgc2V0IG9mIGZhY2VzIGlzIGNyZWF0ZWQgd2l0aCBlYWNoIGVkZ2Ugb2YgdGhlIGBob3Jpem9uYCBhbmRcbiAgICAgKiAgIGBleWVWZXJ0ZXhgLCBlYWNoIGZhY2UgaXMgY29ubmVjdGVkIHdpdGggdGhlIG9wcG9zaXRlIGhvcml6b24gZmFjZSBhbmRcbiAgICAgKiAgIHRoZSBmYWNlIG9uIHRoZSBsZWZ0L3JpZ2h0XG4gICAgICogLSBUaGUgbmV3IGZhY2VzIGFyZSBtZXJnZWQgaWYgcG9zc2libGUgd2l0aCB0aGUgb3Bwb3NpdGUgaG9yaXpvbiBmYWNlIGZpcnN0XG4gICAgICogICBhbmQgdGhlbiB0aGUgZmFjZXMgb24gdGhlIHJpZ2h0L2xlZnRcbiAgICAgKiAtIFRoZSB2ZXJ0aWNlcyByZW1vdmVkIGZyb20gYWxsIHRoZSB2aXNpYmxlIGZhY2VzIGFyZSBhc3NpZ25lZCB0byB0aGUgbmV3XG4gICAgICogICBmYWNlcyBpZiBwb3NzaWJsZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZXJ0ZXh9IGV5ZVZlcnRleFxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdhZGRWZXJ0ZXhUb0h1bGwnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRWZXJ0ZXhUb0h1bGwoZXllVmVydGV4KSB7XG4gICAgICB2YXIgaG9yaXpvbiA9IFtdO1xuXG4gICAgICB0aGlzLnVuY2xhaW1lZC5jbGVhcigpO1xuXG4gICAgICAvLyByZW1vdmUgYGV5ZVZlcnRleGAgZnJvbSBgZXllVmVydGV4LmZhY2VgIHNvIHRoYXQgaXQgY2FuJ3QgYmUgYWRkZWQgdG8gdGhlXG4gICAgICAvLyBgdW5jbGFpbWVkYCB2ZXJ0ZXggbGlzdFxuICAgICAgdGhpcy5yZW1vdmVWZXJ0ZXhGcm9tRmFjZShleWVWZXJ0ZXgsIGV5ZVZlcnRleC5mYWNlKTtcbiAgICAgIHRoaXMuY29tcHV0ZUhvcml6b24oZXllVmVydGV4LnBvaW50LCBudWxsLCBleWVWZXJ0ZXguZmFjZSwgaG9yaXpvbik7XG4gICAgICBkZWJ1ZyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubG9nKCdob3Jpem9uICVqJywgaG9yaXpvbi5tYXAoZnVuY3Rpb24gKGVkZ2UpIHtcbiAgICAgICAgICByZXR1cm4gZWRnZS5oZWFkKCkuaW5kZXg7XG4gICAgICAgIH0pKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5hZGROZXdGYWNlcyhleWVWZXJ0ZXgsIGhvcml6b24pO1xuXG4gICAgICBkZWJ1Zy5sb2dnZXIoJ2ZpcnN0IG1lcmdlJyk7XG5cbiAgICAgIC8vIGZpcnN0IG1lcmdlIHBhc3NcbiAgICAgIC8vIERvIHRoZSBtZXJnZSB3aXRoIHJlc3BlY3QgdG8gdGhlIGxhcmdlciBmYWNlXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubmV3RmFjZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgdmFyIGZhY2UgPSB0aGlzLm5ld0ZhY2VzW2ldO1xuICAgICAgICBpZiAoZmFjZS5tYXJrID09PSBfRmFjZS5WSVNJQkxFKSB7XG4gICAgICAgICAgd2hpbGUgKHRoaXMuZG9BZGphY2VudE1lcmdlKGZhY2UsIE1FUkdFX05PTl9DT05WRVhfV1JUX0xBUkdFUl9GQUNFKSkge31cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBkZWJ1Zy5sb2dnZXIoJ3NlY29uZCBtZXJnZScpO1xuXG4gICAgICAvLyBzZWNvbmQgbWVyZ2UgcGFzc1xuICAgICAgLy8gRG8gdGhlIG1lcmdlIG9uIG5vbiBjb252ZXggZmFjZXMgKGEgZmFjZSBpcyBtYXJrZWQgYXMgbm9uIGNvbnZleCBpbiB0aGVcbiAgICAgIC8vIGZpcnN0IHBhc3MpXG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5uZXdGYWNlcy5sZW5ndGg7IF9pICs9IDEpIHtcbiAgICAgICAgdmFyIF9mYWNlID0gdGhpcy5uZXdGYWNlc1tfaV07XG4gICAgICAgIGlmIChfZmFjZS5tYXJrID09PSBfRmFjZS5OT05fQ09OVkVYKSB7XG4gICAgICAgICAgX2ZhY2UubWFyayA9IF9GYWNlLlZJU0lCTEU7XG4gICAgICAgICAgd2hpbGUgKHRoaXMuZG9BZGphY2VudE1lcmdlKF9mYWNlLCBNRVJHRV9OT05fQ09OVkVYKSkge31cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBkZWJ1Zy5sb2dnZXIoJ3JlYXNzaWduaW5nIHBvaW50cyB0byBuZXdGYWNlcycpO1xuICAgICAgLy8gcmVhc3NpZ24gYHVuY2xhaW1lZGAgdmVydGljZXMgdG8gdGhlIG5ldyBmYWNlc1xuICAgICAgdGhpcy5yZXNvbHZlVW5jbGFpbWVkUG9pbnRzKHRoaXMubmV3RmFjZXMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2J1aWxkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYnVpbGQoKSB7XG4gICAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgICB2YXIgZXllVmVydGV4ID0gdm9pZCAwO1xuICAgICAgdGhpcy5jcmVhdGVJbml0aWFsU2ltcGxleCgpO1xuICAgICAgd2hpbGUgKGV5ZVZlcnRleCA9IHRoaXMubmV4dFZlcnRleFRvQWRkKCkpIHtcbiAgICAgICAgaXRlcmF0aW9ucyArPSAxO1xuICAgICAgICBkZWJ1Zy5sb2dnZXIoJz09IGl0ZXJhdGlvbiAlaiA9PScsIGl0ZXJhdGlvbnMpO1xuICAgICAgICBkZWJ1Zy5sb2dnZXIoJ25leHQgdmVydGV4IHRvIGFkZCA9ICVkICVqJywgZXllVmVydGV4LmluZGV4LCBleWVWZXJ0ZXgucG9pbnQpO1xuICAgICAgICB0aGlzLmFkZFZlcnRleFRvSHVsbChleWVWZXJ0ZXgpO1xuICAgICAgICBkZWJ1Zy5sb2dnZXIoJ2VuZCcpO1xuICAgICAgfVxuICAgICAgdGhpcy5yZWluZGV4RmFjZUFuZFZlcnRpY2VzKCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFF1aWNrSHVsbDtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUXVpY2tIdWxsO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcXVpY2todWxsM2QvZGlzdC9RdWlja0h1bGwuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiBwb2ludC1saW5lLWRpc3RhbmNlXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1IE1hdXJpY2lvIFBvcHBlXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbnZhciBkaXN0YW5jZVNxdWFyZWQgPSByZXF1aXJlKCcuL3NxdWFyZWQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChwb2ludCwgYSwgYikge1xuICByZXR1cm4gTWF0aC5zcXJ0KGRpc3RhbmNlU3F1YXJlZChwb2ludCwgYSwgYikpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wb2ludC1saW5lLWRpc3RhbmNlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgc3VidHJhY3QgPSByZXF1aXJlKCdnbC12ZWMzL3N1YnRyYWN0JylcbnZhciBjcm9zcyA9IHJlcXVpcmUoJ2dsLXZlYzMvY3Jvc3MnKVxudmFyIHNxdWFyZWRMZW5ndGggPSByZXF1aXJlKCdnbC12ZWMzL3NxdWFyZWRMZW5ndGgnKVxudmFyIGFiID0gW11cbnZhciBhcCA9IFtdXG52YXIgY3IgPSBbXVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChwLCBhLCBiKSB7XG4gIC8vIC8vID09IHZlY3RvciBzb2x1dGlvblxuICAvLyB2YXIgbm9ybWFsaXplID0gcmVxdWlyZSgnZ2wtdmVjMy9ub3JtYWxpemUnKVxuICAvLyB2YXIgc2NhbGVBbmRBZGQgPSByZXF1aXJlKCdnbC12ZWMzL3NjYWxlQW5kQWRkJylcbiAgLy8gdmFyIGRvdCA9IHJlcXVpcmUoJ2dsLXZlYzMvZG90JylcbiAgLy8gdmFyIHNxdWFyZWREaXN0YW5jZSA9IHJlcXVpcmUoJ2dsLXZlYzMvc3F1YXJlZERpc3RhbmNlJylcbiAgLy8gLy8gbiA9IHZlY3RvciBgYWJgIG5vcm1hbGl6ZWRcbiAgLy8gdmFyIG4gPSBbXVxuICAvLyAvLyBwcm9qZWN0aW9uID0gcHJvamVjdGlvbiBvZiBgcG9pbnRgIG9uIGBuYFxuICAvLyB2YXIgcHJvamVjdGlvbiA9IFtdXG4gIC8vIG5vcm1hbGl6ZShuLCBzdWJ0cmFjdChuLCBhLCBiKSlcbiAgLy8gc2NhbGVBbmRBZGQocHJvamVjdGlvbiwgYSwgbiwgZG90KG4sIHApKVxuICAvLyByZXR1cm4gc3F1YXJlZERpc3RhbmNlKHByb2plY3Rpb24sIHApXG5cbiAgLy8gPT0gcGFyYWxsZWxvZ3JhbSBzb2x1dGlvblxuICAvL1xuICAvLyAgICAgICAgICAgIHNcbiAgLy8gICAgICBfX2FfX19fX19fX2JfX1xuICAvLyAgICAgICAvICAgfCAgICAvXG4gIC8vICAgICAgLyAgIGh8ICAgL1xuICAvLyAgICAgL19fX19ffF9fL1xuICAvLyAgICBwXG4gIC8vXG4gIC8vICBzID0gYiAtIGFcbiAgLy8gIGFyZWEgPSBzICogaFxuICAvLyAgfGFwIHggc3wgPSBzICogaFxuICAvLyAgaCA9IHxhcCB4IHN8IC8gc1xuICAvL1xuICBzdWJ0cmFjdChhYiwgYiwgYSlcbiAgc3VidHJhY3QoYXAsIHAsIGEpXG4gIHZhciBhcmVhID0gc3F1YXJlZExlbmd0aChjcm9zcyhjciwgYXAsIGFiKSlcbiAgdmFyIHMgPSBzcXVhcmVkTGVuZ3RoKGFiKVxuICBpZiAocyA9PT0gMCkge1xuICAgIHRocm93IEVycm9yKCdhIGFuZCBiIGFyZSB0aGUgc2FtZSBwb2ludCcpXG4gIH1cbiAgcmV0dXJuIGFyZWEgLyBzXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wb2ludC1saW5lLWRpc3RhbmNlL3NxdWFyZWQuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gc3F1YXJlZExlbmd0aDtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBzcXVhcmVkIGxlbmd0aCBvZiBhIHZlYzNcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdmVjdG9yIHRvIGNhbGN1bGF0ZSBzcXVhcmVkIGxlbmd0aCBvZlxuICogQHJldHVybnMge051bWJlcn0gc3F1YXJlZCBsZW5ndGggb2YgYVxuICovXG5mdW5jdGlvbiBzcXVhcmVkTGVuZ3RoKGEpIHtcbiAgICB2YXIgeCA9IGFbMF0sXG4gICAgICAgIHkgPSBhWzFdLFxuICAgICAgICB6ID0gYVsyXVxuICAgIHJldHVybiB4KnggKyB5KnkgKyB6Knpcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nbC12ZWMzL3NxdWFyZWRMZW5ndGguanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBub3JtYWxpemUgPSByZXF1aXJlKCdnbC12ZWMzL25vcm1hbGl6ZScpXG52YXIgc3ViID0gcmVxdWlyZSgnZ2wtdmVjMy9zdWJ0cmFjdCcpXG52YXIgY3Jvc3MgPSByZXF1aXJlKCdnbC12ZWMzL2Nyb3NzJylcbnZhciB0bXAgPSBbMCwgMCwgMF1cblxubW9kdWxlLmV4cG9ydHMgPSBwbGFuZU5vcm1hbFxuXG5mdW5jdGlvbiBwbGFuZU5vcm1hbCAob3V0LCBwb2ludDEsIHBvaW50MiwgcG9pbnQzKSB7XG4gIHN1YihvdXQsIHBvaW50MSwgcG9pbnQyKVxuICBzdWIodG1wLCBwb2ludDIsIHBvaW50MylcbiAgY3Jvc3Mob3V0LCBvdXQsIHRtcClcbiAgcmV0dXJuIG5vcm1hbGl6ZShvdXQsIG91dClcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXQtcGxhbmUtbm9ybWFsL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFRoaXMgaXMgdGhlIHdlYiBicm93c2VyIGltcGxlbWVudGF0aW9uIG9mIGBkZWJ1ZygpYC5cbiAqXG4gKiBFeHBvc2UgYGRlYnVnKClgIGFzIHRoZSBtb2R1bGUuXG4gKi9cblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kZWJ1ZycpO1xuZXhwb3J0cy5sb2cgPSBsb2c7XG5leHBvcnRzLmZvcm1hdEFyZ3MgPSBmb3JtYXRBcmdzO1xuZXhwb3J0cy5zYXZlID0gc2F2ZTtcbmV4cG9ydHMubG9hZCA9IGxvYWQ7XG5leHBvcnRzLnVzZUNvbG9ycyA9IHVzZUNvbG9ycztcbmV4cG9ydHMuc3RvcmFnZSA9ICd1bmRlZmluZWQnICE9IHR5cGVvZiBjaHJvbWVcbiAgICAgICAgICAgICAgICYmICd1bmRlZmluZWQnICE9IHR5cGVvZiBjaHJvbWUuc3RvcmFnZVxuICAgICAgICAgICAgICAgICAgPyBjaHJvbWUuc3RvcmFnZS5sb2NhbFxuICAgICAgICAgICAgICAgICAgOiBsb2NhbHN0b3JhZ2UoKTtcblxuLyoqXG4gKiBDb2xvcnMuXG4gKi9cblxuZXhwb3J0cy5jb2xvcnMgPSBbXG4gICdsaWdodHNlYWdyZWVuJyxcbiAgJ2ZvcmVzdGdyZWVuJyxcbiAgJ2dvbGRlbnJvZCcsXG4gICdkb2RnZXJibHVlJyxcbiAgJ2RhcmtvcmNoaWQnLFxuICAnY3JpbXNvbidcbl07XG5cbi8qKlxuICogQ3VycmVudGx5IG9ubHkgV2ViS2l0LWJhc2VkIFdlYiBJbnNwZWN0b3JzLCBGaXJlZm94ID49IHYzMSxcbiAqIGFuZCB0aGUgRmlyZWJ1ZyBleHRlbnNpb24gKGFueSBGaXJlZm94IHZlcnNpb24pIGFyZSBrbm93blxuICogdG8gc3VwcG9ydCBcIiVjXCIgQ1NTIGN1c3RvbWl6YXRpb25zLlxuICpcbiAqIFRPRE86IGFkZCBhIGBsb2NhbFN0b3JhZ2VgIHZhcmlhYmxlIHRvIGV4cGxpY2l0bHkgZW5hYmxlL2Rpc2FibGUgY29sb3JzXG4gKi9cblxuZnVuY3Rpb24gdXNlQ29sb3JzKCkge1xuICAvLyBOQjogSW4gYW4gRWxlY3Ryb24gcHJlbG9hZCBzY3JpcHQsIGRvY3VtZW50IHdpbGwgYmUgZGVmaW5lZCBidXQgbm90IGZ1bGx5XG4gIC8vIGluaXRpYWxpemVkLiBTaW5jZSB3ZSBrbm93IHdlJ3JlIGluIENocm9tZSwgd2UnbGwganVzdCBkZXRlY3QgdGhpcyBjYXNlXG4gIC8vIGV4cGxpY2l0bHlcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5wcm9jZXNzICYmIHdpbmRvdy5wcm9jZXNzLnR5cGUgPT09ICdyZW5kZXJlcicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIGlzIHdlYmtpdD8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTY0NTk2MDYvMzc2NzczXG4gIC8vIGRvY3VtZW50IGlzIHVuZGVmaW5lZCBpbiByZWFjdC1uYXRpdmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmUvcHVsbC8xNjMyXG4gIHJldHVybiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5XZWJraXRBcHBlYXJhbmNlKSB8fFxuICAgIC8vIGlzIGZpcmVidWc/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM5ODEyMC8zNzY3NzNcbiAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmNvbnNvbGUgJiYgKHdpbmRvdy5jb25zb2xlLmZpcmVidWcgfHwgKHdpbmRvdy5jb25zb2xlLmV4Y2VwdGlvbiAmJiB3aW5kb3cuY29uc29sZS50YWJsZSkpKSB8fFxuICAgIC8vIGlzIGZpcmVmb3ggPj0gdjMxP1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvVG9vbHMvV2ViX0NvbnNvbGUjU3R5bGluZ19tZXNzYWdlc1xuICAgICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvZmlyZWZveFxcLyhcXGQrKS8pICYmIHBhcnNlSW50KFJlZ0V4cC4kMSwgMTApID49IDMxKSB8fFxuICAgIC8vIGRvdWJsZSBjaGVjayB3ZWJraXQgaW4gdXNlckFnZW50IGp1c3QgaW4gY2FzZSB3ZSBhcmUgaW4gYSB3b3JrZXJcbiAgICAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2FwcGxld2Via2l0XFwvKFxcZCspLykpO1xufVxuXG4vKipcbiAqIE1hcCAlaiB0byBgSlNPTi5zdHJpbmdpZnkoKWAsIHNpbmNlIG5vIFdlYiBJbnNwZWN0b3JzIGRvIHRoYXQgYnkgZGVmYXVsdC5cbiAqL1xuXG5leHBvcnRzLmZvcm1hdHRlcnMuaiA9IGZ1bmN0aW9uKHYpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiAnW1VuZXhwZWN0ZWRKU09OUGFyc2VFcnJvcl06ICcgKyBlcnIubWVzc2FnZTtcbiAgfVxufTtcblxuXG4vKipcbiAqIENvbG9yaXplIGxvZyBhcmd1bWVudHMgaWYgZW5hYmxlZC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGZvcm1hdEFyZ3MoYXJncykge1xuICB2YXIgdXNlQ29sb3JzID0gdGhpcy51c2VDb2xvcnM7XG5cbiAgYXJnc1swXSA9ICh1c2VDb2xvcnMgPyAnJWMnIDogJycpXG4gICAgKyB0aGlzLm5hbWVzcGFjZVxuICAgICsgKHVzZUNvbG9ycyA/ICcgJWMnIDogJyAnKVxuICAgICsgYXJnc1swXVxuICAgICsgKHVzZUNvbG9ycyA/ICclYyAnIDogJyAnKVxuICAgICsgJysnICsgZXhwb3J0cy5odW1hbml6ZSh0aGlzLmRpZmYpO1xuXG4gIGlmICghdXNlQ29sb3JzKSByZXR1cm47XG5cbiAgdmFyIGMgPSAnY29sb3I6ICcgKyB0aGlzLmNvbG9yO1xuICBhcmdzLnNwbGljZSgxLCAwLCBjLCAnY29sb3I6IGluaGVyaXQnKVxuXG4gIC8vIHRoZSBmaW5hbCBcIiVjXCIgaXMgc29tZXdoYXQgdHJpY2t5LCBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIG90aGVyXG4gIC8vIGFyZ3VtZW50cyBwYXNzZWQgZWl0aGVyIGJlZm9yZSBvciBhZnRlciB0aGUgJWMsIHNvIHdlIG5lZWQgdG9cbiAgLy8gZmlndXJlIG91dCB0aGUgY29ycmVjdCBpbmRleCB0byBpbnNlcnQgdGhlIENTUyBpbnRvXG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsYXN0QyA9IDA7XG4gIGFyZ3NbMF0ucmVwbGFjZSgvJVthLXpBLVolXS9nLCBmdW5jdGlvbihtYXRjaCkge1xuICAgIGlmICgnJSUnID09PSBtYXRjaCkgcmV0dXJuO1xuICAgIGluZGV4Kys7XG4gICAgaWYgKCclYycgPT09IG1hdGNoKSB7XG4gICAgICAvLyB3ZSBvbmx5IGFyZSBpbnRlcmVzdGVkIGluIHRoZSAqbGFzdCogJWNcbiAgICAgIC8vICh0aGUgdXNlciBtYXkgaGF2ZSBwcm92aWRlZCB0aGVpciBvd24pXG4gICAgICBsYXN0QyA9IGluZGV4O1xuICAgIH1cbiAgfSk7XG5cbiAgYXJncy5zcGxpY2UobGFzdEMsIDAsIGMpO1xufVxuXG4vKipcbiAqIEludm9rZXMgYGNvbnNvbGUubG9nKClgIHdoZW4gYXZhaWxhYmxlLlxuICogTm8tb3Agd2hlbiBgY29uc29sZS5sb2dgIGlzIG5vdCBhIFwiZnVuY3Rpb25cIi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGxvZygpIHtcbiAgLy8gdGhpcyBoYWNrZXJ5IGlzIHJlcXVpcmVkIGZvciBJRTgvOSwgd2hlcmVcbiAgLy8gdGhlIGBjb25zb2xlLmxvZ2AgZnVuY3Rpb24gZG9lc24ndCBoYXZlICdhcHBseSdcbiAgcmV0dXJuICdvYmplY3QnID09PSB0eXBlb2YgY29uc29sZVxuICAgICYmIGNvbnNvbGUubG9nXG4gICAgJiYgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZS5sb2csIGNvbnNvbGUsIGFyZ3VtZW50cyk7XG59XG5cbi8qKlxuICogU2F2ZSBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHNhdmUobmFtZXNwYWNlcykge1xuICB0cnkge1xuICAgIGlmIChudWxsID09IG5hbWVzcGFjZXMpIHtcbiAgICAgIGV4cG9ydHMuc3RvcmFnZS5yZW1vdmVJdGVtKCdkZWJ1ZycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleHBvcnRzLnN0b3JhZ2UuZGVidWcgPSBuYW1lc3BhY2VzO1xuICAgIH1cbiAgfSBjYXRjaChlKSB7fVxufVxuXG4vKipcbiAqIExvYWQgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEByZXR1cm4ge1N0cmluZ30gcmV0dXJucyB0aGUgcHJldmlvdXNseSBwZXJzaXN0ZWQgZGVidWcgbW9kZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGxvYWQoKSB7XG4gIHZhciByO1xuICB0cnkge1xuICAgIHIgPSBleHBvcnRzLnN0b3JhZ2UuZGVidWc7XG4gIH0gY2F0Y2goZSkge31cblxuICAvLyBJZiBkZWJ1ZyBpc24ndCBzZXQgaW4gTFMsIGFuZCB3ZSdyZSBpbiBFbGVjdHJvbiwgdHJ5IHRvIGxvYWQgJERFQlVHXG4gIGlmICghciAmJiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ2VudicgaW4gcHJvY2Vzcykge1xuICAgIHIgPSBwcm9jZXNzLmVudi5ERUJVRztcbiAgfVxuXG4gIHJldHVybiByO1xufVxuXG4vKipcbiAqIEVuYWJsZSBuYW1lc3BhY2VzIGxpc3RlZCBpbiBgbG9jYWxTdG9yYWdlLmRlYnVnYCBpbml0aWFsbHkuXG4gKi9cblxuZXhwb3J0cy5lbmFibGUobG9hZCgpKTtcblxuLyoqXG4gKiBMb2NhbHN0b3JhZ2UgYXR0ZW1wdHMgdG8gcmV0dXJuIHRoZSBsb2NhbHN0b3JhZ2UuXG4gKlxuICogVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSBzYWZhcmkgdGhyb3dzXG4gKiB3aGVuIGEgdXNlciBkaXNhYmxlcyBjb29raWVzL2xvY2Fsc3RvcmFnZVxuICogYW5kIHlvdSBhdHRlbXB0IHRvIGFjY2VzcyBpdC5cbiAqXG4gKiBAcmV0dXJuIHtMb2NhbFN0b3JhZ2V9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb2NhbHN0b3JhZ2UoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG4gIH0gY2F0Y2ggKGUpIHt9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKipcbiAqIFRoaXMgaXMgdGhlIGNvbW1vbiBsb2dpYyBmb3IgYm90aCB0aGUgTm9kZS5qcyBhbmQgd2ViIGJyb3dzZXJcbiAqIGltcGxlbWVudGF0aW9ucyBvZiBgZGVidWcoKWAuXG4gKlxuICogRXhwb3NlIGBkZWJ1ZygpYCBhcyB0aGUgbW9kdWxlLlxuICovXG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZURlYnVnLmRlYnVnID0gY3JlYXRlRGVidWdbJ2RlZmF1bHQnXSA9IGNyZWF0ZURlYnVnO1xuZXhwb3J0cy5jb2VyY2UgPSBjb2VyY2U7XG5leHBvcnRzLmRpc2FibGUgPSBkaXNhYmxlO1xuZXhwb3J0cy5lbmFibGUgPSBlbmFibGU7XG5leHBvcnRzLmVuYWJsZWQgPSBlbmFibGVkO1xuZXhwb3J0cy5odW1hbml6ZSA9IHJlcXVpcmUoJ21zJyk7XG5cbi8qKlxuICogVGhlIGN1cnJlbnRseSBhY3RpdmUgZGVidWcgbW9kZSBuYW1lcywgYW5kIG5hbWVzIHRvIHNraXAuXG4gKi9cblxuZXhwb3J0cy5uYW1lcyA9IFtdO1xuZXhwb3J0cy5za2lwcyA9IFtdO1xuXG4vKipcbiAqIE1hcCBvZiBzcGVjaWFsIFwiJW5cIiBoYW5kbGluZyBmdW5jdGlvbnMsIGZvciB0aGUgZGVidWcgXCJmb3JtYXRcIiBhcmd1bWVudC5cbiAqXG4gKiBWYWxpZCBrZXkgbmFtZXMgYXJlIGEgc2luZ2xlLCBsb3dlciBvciB1cHBlci1jYXNlIGxldHRlciwgaS5lLiBcIm5cIiBhbmQgXCJOXCIuXG4gKi9cblxuZXhwb3J0cy5mb3JtYXR0ZXJzID0ge307XG5cbi8qKlxuICogUHJldmlvdXMgbG9nIHRpbWVzdGFtcC5cbiAqL1xuXG52YXIgcHJldlRpbWU7XG5cbi8qKlxuICogU2VsZWN0IGEgY29sb3IuXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBzZWxlY3RDb2xvcihuYW1lc3BhY2UpIHtcbiAgdmFyIGhhc2ggPSAwLCBpO1xuXG4gIGZvciAoaSBpbiBuYW1lc3BhY2UpIHtcbiAgICBoYXNoICA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgbmFtZXNwYWNlLmNoYXJDb2RlQXQoaSk7XG4gICAgaGFzaCB8PSAwOyAvLyBDb252ZXJ0IHRvIDMyYml0IGludGVnZXJcbiAgfVxuXG4gIHJldHVybiBleHBvcnRzLmNvbG9yc1tNYXRoLmFicyhoYXNoKSAlIGV4cG9ydHMuY29sb3JzLmxlbmd0aF07XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgZGVidWdnZXIgd2l0aCB0aGUgZ2l2ZW4gYG5hbWVzcGFjZWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZVxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZURlYnVnKG5hbWVzcGFjZSkge1xuXG4gIGZ1bmN0aW9uIGRlYnVnKCkge1xuICAgIC8vIGRpc2FibGVkP1xuICAgIGlmICghZGVidWcuZW5hYmxlZCkgcmV0dXJuO1xuXG4gICAgdmFyIHNlbGYgPSBkZWJ1ZztcblxuICAgIC8vIHNldCBgZGlmZmAgdGltZXN0YW1wXG4gICAgdmFyIGN1cnIgPSArbmV3IERhdGUoKTtcbiAgICB2YXIgbXMgPSBjdXJyIC0gKHByZXZUaW1lIHx8IGN1cnIpO1xuICAgIHNlbGYuZGlmZiA9IG1zO1xuICAgIHNlbGYucHJldiA9IHByZXZUaW1lO1xuICAgIHNlbGYuY3VyciA9IGN1cnI7XG4gICAgcHJldlRpbWUgPSBjdXJyO1xuXG4gICAgLy8gdHVybiB0aGUgYGFyZ3VtZW50c2AgaW50byBhIHByb3BlciBBcnJheVxuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG5cbiAgICBhcmdzWzBdID0gZXhwb3J0cy5jb2VyY2UoYXJnc1swXSk7XG5cbiAgICBpZiAoJ3N0cmluZycgIT09IHR5cGVvZiBhcmdzWzBdKSB7XG4gICAgICAvLyBhbnl0aGluZyBlbHNlIGxldCdzIGluc3BlY3Qgd2l0aCAlT1xuICAgICAgYXJncy51bnNoaWZ0KCclTycpO1xuICAgIH1cblxuICAgIC8vIGFwcGx5IGFueSBgZm9ybWF0dGVyc2AgdHJhbnNmb3JtYXRpb25zXG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICBhcmdzWzBdID0gYXJnc1swXS5yZXBsYWNlKC8lKFthLXpBLVolXSkvZywgZnVuY3Rpb24obWF0Y2gsIGZvcm1hdCkge1xuICAgICAgLy8gaWYgd2UgZW5jb3VudGVyIGFuIGVzY2FwZWQgJSB0aGVuIGRvbid0IGluY3JlYXNlIHRoZSBhcnJheSBpbmRleFxuICAgICAgaWYgKG1hdGNoID09PSAnJSUnKSByZXR1cm4gbWF0Y2g7XG4gICAgICBpbmRleCsrO1xuICAgICAgdmFyIGZvcm1hdHRlciA9IGV4cG9ydHMuZm9ybWF0dGVyc1tmb3JtYXRdO1xuICAgICAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBmb3JtYXR0ZXIpIHtcbiAgICAgICAgdmFyIHZhbCA9IGFyZ3NbaW5kZXhdO1xuICAgICAgICBtYXRjaCA9IGZvcm1hdHRlci5jYWxsKHNlbGYsIHZhbCk7XG5cbiAgICAgICAgLy8gbm93IHdlIG5lZWQgdG8gcmVtb3ZlIGBhcmdzW2luZGV4XWAgc2luY2UgaXQncyBpbmxpbmVkIGluIHRoZSBgZm9ybWF0YFxuICAgICAgICBhcmdzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGluZGV4LS07XG4gICAgICB9XG4gICAgICByZXR1cm4gbWF0Y2g7XG4gICAgfSk7XG5cbiAgICAvLyBhcHBseSBlbnYtc3BlY2lmaWMgZm9ybWF0dGluZyAoY29sb3JzLCBldGMuKVxuICAgIGV4cG9ydHMuZm9ybWF0QXJncy5jYWxsKHNlbGYsIGFyZ3MpO1xuXG4gICAgdmFyIGxvZ0ZuID0gZGVidWcubG9nIHx8IGV4cG9ydHMubG9nIHx8IGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSk7XG4gICAgbG9nRm4uYXBwbHkoc2VsZiwgYXJncyk7XG4gIH1cblxuICBkZWJ1Zy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG4gIGRlYnVnLmVuYWJsZWQgPSBleHBvcnRzLmVuYWJsZWQobmFtZXNwYWNlKTtcbiAgZGVidWcudXNlQ29sb3JzID0gZXhwb3J0cy51c2VDb2xvcnMoKTtcbiAgZGVidWcuY29sb3IgPSBzZWxlY3RDb2xvcihuYW1lc3BhY2UpO1xuXG4gIC8vIGVudi1zcGVjaWZpYyBpbml0aWFsaXphdGlvbiBsb2dpYyBmb3IgZGVidWcgaW5zdGFuY2VzXG4gIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZXhwb3J0cy5pbml0KSB7XG4gICAgZXhwb3J0cy5pbml0KGRlYnVnKTtcbiAgfVxuXG4gIHJldHVybiBkZWJ1Zztcbn1cblxuLyoqXG4gKiBFbmFibGVzIGEgZGVidWcgbW9kZSBieSBuYW1lc3BhY2VzLiBUaGlzIGNhbiBpbmNsdWRlIG1vZGVzXG4gKiBzZXBhcmF0ZWQgYnkgYSBjb2xvbiBhbmQgd2lsZGNhcmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGVuYWJsZShuYW1lc3BhY2VzKSB7XG4gIGV4cG9ydHMuc2F2ZShuYW1lc3BhY2VzKTtcblxuICBleHBvcnRzLm5hbWVzID0gW107XG4gIGV4cG9ydHMuc2tpcHMgPSBbXTtcblxuICB2YXIgc3BsaXQgPSAodHlwZW9mIG5hbWVzcGFjZXMgPT09ICdzdHJpbmcnID8gbmFtZXNwYWNlcyA6ICcnKS5zcGxpdCgvW1xccyxdKy8pO1xuICB2YXIgbGVuID0gc3BsaXQubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoIXNwbGl0W2ldKSBjb250aW51ZTsgLy8gaWdub3JlIGVtcHR5IHN0cmluZ3NcbiAgICBuYW1lc3BhY2VzID0gc3BsaXRbaV0ucmVwbGFjZSgvXFwqL2csICcuKj8nKTtcbiAgICBpZiAobmFtZXNwYWNlc1swXSA9PT0gJy0nKSB7XG4gICAgICBleHBvcnRzLnNraXBzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzLnN1YnN0cigxKSArICckJykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleHBvcnRzLm5hbWVzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzICsgJyQnKSk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogRGlzYWJsZSBkZWJ1ZyBvdXRwdXQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBkaXNhYmxlKCkge1xuICBleHBvcnRzLmVuYWJsZSgnJyk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBtb2RlIG5hbWUgaXMgZW5hYmxlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBlbmFibGVkKG5hbWUpIHtcbiAgdmFyIGksIGxlbjtcbiAgZm9yIChpID0gMCwgbGVuID0gZXhwb3J0cy5za2lwcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChleHBvcnRzLnNraXBzW2ldLnRlc3QobmFtZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChpID0gMCwgbGVuID0gZXhwb3J0cy5uYW1lcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChleHBvcnRzLm5hbWVzW2ldLnRlc3QobmFtZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQ29lcmNlIGB2YWxgLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbFxuICogQHJldHVybiB7TWl4ZWR9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBjb2VyY2UodmFsKSB7XG4gIGlmICh2YWwgaW5zdGFuY2VvZiBFcnJvcikgcmV0dXJuIHZhbC5zdGFjayB8fCB2YWwubWVzc2FnZTtcbiAgcmV0dXJuIHZhbDtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9kZWJ1Zy5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBIZWxwZXJzLlxuICovXG5cbnZhciBzID0gMTAwMDtcbnZhciBtID0gcyAqIDYwO1xudmFyIGggPSBtICogNjA7XG52YXIgZCA9IGggKiAyNDtcbnZhciB5ID0gZCAqIDM2NS4yNTtcblxuLyoqXG4gKiBQYXJzZSBvciBmb3JtYXQgdGhlIGdpdmVuIGB2YWxgLlxuICpcbiAqIE9wdGlvbnM6XG4gKlxuICogIC0gYGxvbmdgIHZlcmJvc2UgZm9ybWF0dGluZyBbZmFsc2VdXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSB2YWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEB0aHJvd3Mge0Vycm9yfSB0aHJvdyBhbiBlcnJvciBpZiB2YWwgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyBvciBhIG51bWJlclxuICogQHJldHVybiB7U3RyaW5nfE51bWJlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih2YWwsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcbiAgaWYgKHR5cGUgPT09ICdzdHJpbmcnICYmIHZhbC5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHBhcnNlKHZhbCk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ251bWJlcicgJiYgaXNOYU4odmFsKSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5sb25nID8gZm10TG9uZyh2YWwpIDogZm10U2hvcnQodmFsKTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3ZhbCBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nIG9yIGEgdmFsaWQgbnVtYmVyLiB2YWw9JyArXG4gICAgICBKU09OLnN0cmluZ2lmeSh2YWwpXG4gICk7XG59O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBgc3RyYCBhbmQgcmV0dXJuIG1pbGxpc2Vjb25kcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZShzdHIpIHtcbiAgc3RyID0gU3RyaW5nKHN0cik7XG4gIGlmIChzdHIubGVuZ3RoID4gMTAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBtYXRjaCA9IC9eKCg/OlxcZCspP1xcLj9cXGQrKSAqKG1pbGxpc2Vjb25kcz98bXNlY3M/fG1zfHNlY29uZHM/fHNlY3M/fHN8bWludXRlcz98bWlucz98bXxob3Vycz98aHJzP3xofGRheXM/fGR8eWVhcnM/fHlycz98eSk/JC9pLmV4ZWMoXG4gICAgc3RyXG4gICk7XG4gIGlmICghbWF0Y2gpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG4gPSBwYXJzZUZsb2F0KG1hdGNoWzFdKTtcbiAgdmFyIHR5cGUgPSAobWF0Y2hbMl0gfHwgJ21zJykudG9Mb3dlckNhc2UoKTtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAneWVhcnMnOlxuICAgIGNhc2UgJ3llYXInOlxuICAgIGNhc2UgJ3lycyc6XG4gICAgY2FzZSAneXInOlxuICAgIGNhc2UgJ3knOlxuICAgICAgcmV0dXJuIG4gKiB5O1xuICAgIGNhc2UgJ2RheXMnOlxuICAgIGNhc2UgJ2RheSc6XG4gICAgY2FzZSAnZCc6XG4gICAgICByZXR1cm4gbiAqIGQ7XG4gICAgY2FzZSAnaG91cnMnOlxuICAgIGNhc2UgJ2hvdXInOlxuICAgIGNhc2UgJ2hycyc6XG4gICAgY2FzZSAnaHInOlxuICAgIGNhc2UgJ2gnOlxuICAgICAgcmV0dXJuIG4gKiBoO1xuICAgIGNhc2UgJ21pbnV0ZXMnOlxuICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgY2FzZSAnbWlucyc6XG4gICAgY2FzZSAnbWluJzpcbiAgICBjYXNlICdtJzpcbiAgICAgIHJldHVybiBuICogbTtcbiAgICBjYXNlICdzZWNvbmRzJzpcbiAgICBjYXNlICdzZWNvbmQnOlxuICAgIGNhc2UgJ3NlY3MnOlxuICAgIGNhc2UgJ3NlYyc6XG4gICAgY2FzZSAncyc6XG4gICAgICByZXR1cm4gbiAqIHM7XG4gICAgY2FzZSAnbWlsbGlzZWNvbmRzJzpcbiAgICBjYXNlICdtaWxsaXNlY29uZCc6XG4gICAgY2FzZSAnbXNlY3MnOlxuICAgIGNhc2UgJ21zZWMnOlxuICAgIGNhc2UgJ21zJzpcbiAgICAgIHJldHVybiBuO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cbi8qKlxuICogU2hvcnQgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10U2hvcnQobXMpIHtcbiAgaWYgKG1zID49IGQpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGQpICsgJ2QnO1xuICB9XG4gIGlmIChtcyA+PSBoKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBoKSArICdoJztcbiAgfVxuICBpZiAobXMgPj0gbSkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gbSkgKyAnbSc7XG4gIH1cbiAgaWYgKG1zID49IHMpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIHMpICsgJ3MnO1xuICB9XG4gIHJldHVybiBtcyArICdtcyc7XG59XG5cbi8qKlxuICogTG9uZyBmb3JtYXQgZm9yIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmbXRMb25nKG1zKSB7XG4gIHJldHVybiBwbHVyYWwobXMsIGQsICdkYXknKSB8fFxuICAgIHBsdXJhbChtcywgaCwgJ2hvdXInKSB8fFxuICAgIHBsdXJhbChtcywgbSwgJ21pbnV0ZScpIHx8XG4gICAgcGx1cmFsKG1zLCBzLCAnc2Vjb25kJykgfHxcbiAgICBtcyArICcgbXMnO1xufVxuXG4vKipcbiAqIFBsdXJhbGl6YXRpb24gaGVscGVyLlxuICovXG5cbmZ1bmN0aW9uIHBsdXJhbChtcywgbiwgbmFtZSkge1xuICBpZiAobXMgPCBuKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChtcyA8IG4gKiAxLjUpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihtcyAvIG4pICsgJyAnICsgbmFtZTtcbiAgfVxuICByZXR1cm4gTWF0aC5jZWlsKG1zIC8gbikgKyAnICcgKyBuYW1lICsgJ3MnO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgVmVydGV4TGlzdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVmVydGV4TGlzdCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVmVydGV4TGlzdCk7XG5cbiAgICB0aGlzLmhlYWQgPSBudWxsO1xuICAgIHRoaXMudGFpbCA9IG51bGw7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVmVydGV4TGlzdCwgW3tcbiAgICBrZXk6IFwiY2xlYXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICB0aGlzLmhlYWQgPSB0aGlzLnRhaWwgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluc2VydHMgYSBgbm9kZWAgYmVmb3JlIGB0YXJnZXRgLCBpdCdzIGFzc3VtZWQgdGhhdFxuICAgICAqIGB0YXJnZXRgIGJlbG9uZ3MgdG8gdGhpcyBkb3VibHkgbGlua2VkIGxpc3RcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Kn0gdGFyZ2V0XG4gICAgICogQHBhcmFtIHsqfSBub2RlXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpbnNlcnRCZWZvcmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5zZXJ0QmVmb3JlKHRhcmdldCwgbm9kZSkge1xuICAgICAgbm9kZS5wcmV2ID0gdGFyZ2V0LnByZXY7XG4gICAgICBub2RlLm5leHQgPSB0YXJnZXQ7XG4gICAgICBpZiAoIW5vZGUucHJldikge1xuICAgICAgICB0aGlzLmhlYWQgPSBub2RlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZS5wcmV2Lm5leHQgPSBub2RlO1xuICAgICAgfVxuICAgICAgdGFyZ2V0LnByZXYgPSBub2RlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluc2VydHMgYSBgbm9kZWAgYWZ0ZXIgYHRhcmdldGAsIGl0J3MgYXNzdW1lZCB0aGF0XG4gICAgICogYHRhcmdldGAgYmVsb25ncyB0byB0aGlzIGRvdWJseSBsaW5rZWQgbGlzdFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZXJ0ZXh9IHRhcmdldFxuICAgICAqIEBwYXJhbSB7VmVydGV4fSBub2RlXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpbnNlcnRBZnRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbnNlcnRBZnRlcih0YXJnZXQsIG5vZGUpIHtcbiAgICAgIG5vZGUucHJldiA9IHRhcmdldDtcbiAgICAgIG5vZGUubmV4dCA9IHRhcmdldC5uZXh0O1xuICAgICAgaWYgKCFub2RlLm5leHQpIHtcbiAgICAgICAgdGhpcy50YWlsID0gbm9kZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUubmV4dC5wcmV2ID0gbm9kZTtcbiAgICAgIH1cbiAgICAgIHRhcmdldC5uZXh0ID0gbm9kZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBcHBlbmRzIGEgYG5vZGVgIHRvIHRoZSBlbmQgb2YgdGhpcyBkb3VibHkgbGlua2VkIGxpc3RcbiAgICAgKiBOb3RlOiBgbm9kZS5uZXh0YCB3aWxsIGJlIHVubGlua2VkIGZyb20gYG5vZGVgXG4gICAgICogTm90ZTogaWYgYG5vZGVgIGlzIHBhcnQgb2YgYW5vdGhlciBsaW5rZWQgbGlzdCBjYWxsIGBhZGRBbGxgIGluc3RlYWRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Kn0gbm9kZVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZChub2RlKSB7XG4gICAgICBpZiAoIXRoaXMuaGVhZCkge1xuICAgICAgICB0aGlzLmhlYWQgPSBub2RlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50YWlsLm5leHQgPSBub2RlO1xuICAgICAgfVxuICAgICAgbm9kZS5wcmV2ID0gdGhpcy50YWlsO1xuICAgICAgLy8gc2luY2Ugbm9kZSBpcyB0aGUgbmV3IGVuZCBpdCBkb2Vzbid0IGhhdmUgYSBuZXh0IG5vZGVcbiAgICAgIG5vZGUubmV4dCA9IG51bGw7XG4gICAgICB0aGlzLnRhaWwgPSBub2RlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFwcGVuZHMgYSBjaGFpbiBvZiBub2RlcyB3aGVyZSBgbm9kZWAgaXMgdGhlIGhlYWQsXG4gICAgICogdGhlIGRpZmZlcmVuY2Ugd2l0aCBgYWRkYCBpcyB0aGF0IGl0IGNvcnJlY3RseSBzZXRzIHRoZSBwb3NpdGlvblxuICAgICAqIG9mIHRoZSBub2RlIGxpc3QgYHRhaWxgIHByb3BlcnR5XG4gICAgICpcbiAgICAgKiBAcGFyYW0geyp9IG5vZGVcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFkZEFsbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRBbGwobm9kZSkge1xuICAgICAgaWYgKCF0aGlzLmhlYWQpIHtcbiAgICAgICAgdGhpcy5oZWFkID0gbm9kZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGFpbC5uZXh0ID0gbm9kZTtcbiAgICAgIH1cbiAgICAgIG5vZGUucHJldiA9IHRoaXMudGFpbDtcblxuICAgICAgLy8gZmluZCB0aGUgZW5kIG9mIHRoZSBsaXN0XG4gICAgICB3aGlsZSAobm9kZS5uZXh0KSB7XG4gICAgICAgIG5vZGUgPSBub2RlLm5leHQ7XG4gICAgICB9XG4gICAgICB0aGlzLnRhaWwgPSBub2RlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlbGV0ZXMgYSBgbm9kZWAgZnJvbSB0aGlzIGxpbmtlZCBsaXN0LCBpdCdzIGFzc3VtZWQgdGhhdCBgbm9kZWAgaXMgYVxuICAgICAqIG1lbWJlciBvZiB0aGlzIGxpbmtlZCBsaXN0XG4gICAgICpcbiAgICAgKiBAcGFyYW0geyp9IG5vZGVcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUobm9kZSkge1xuICAgICAgaWYgKCFub2RlLnByZXYpIHtcbiAgICAgICAgdGhpcy5oZWFkID0gbm9kZS5uZXh0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZS5wcmV2Lm5leHQgPSBub2RlLm5leHQ7XG4gICAgICB9XG5cbiAgICAgIGlmICghbm9kZS5uZXh0KSB7XG4gICAgICAgIHRoaXMudGFpbCA9IG5vZGUucHJldjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUubmV4dC5wcmV2ID0gbm9kZS5wcmV2O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBjaGFpbiBvZiBub2RlcyB3aG9zZSBoZWFkIGlzIGBhYCBhbmQgd2hvc2UgdGFpbCBpcyBgYmAsXG4gICAgICogaXQncyBhc3N1bWVkIHRoYXQgYGFgIGFuZCBgYmAgYmVsb25nIHRvIHRoaXMgbGlzdCBhbmQgYWxzbyB0aGF0IGBhYFxuICAgICAqIGNvbWVzIGJlZm9yZSBgYmAgaW4gdGhlIGxpbmtlZCBsaXN0XG4gICAgICpcbiAgICAgKiBAcGFyYW0geyp9IGFcbiAgICAgKiBAcGFyYW0geyp9IGJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZUNoYWluXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUNoYWluKGEsIGIpIHtcbiAgICAgIGlmICghYS5wcmV2KSB7XG4gICAgICAgIHRoaXMuaGVhZCA9IGIubmV4dDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGEucHJldi5uZXh0ID0gYi5uZXh0O1xuICAgICAgfVxuXG4gICAgICBpZiAoIWIubmV4dCkge1xuICAgICAgICB0aGlzLnRhaWwgPSBhLnByZXY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiLm5leHQucHJldiA9IGEucHJldjtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZmlyc3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZmlyc3QoKSB7XG4gICAgICByZXR1cm4gdGhpcy5oZWFkO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc0VtcHR5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzRW1wdHkoKSB7XG4gICAgICByZXR1cm4gIXRoaXMuaGVhZDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVmVydGV4TGlzdDtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVmVydGV4TGlzdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcXVpY2todWxsM2QvZGlzdC9WZXJ0ZXhMaXN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFZlcnRleCA9IGZ1bmN0aW9uIFZlcnRleChwb2ludCwgaW5kZXgpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFZlcnRleCk7XG5cbiAgdGhpcy5wb2ludCA9IHBvaW50O1xuICAvLyBpbmRleCBpbiB0aGUgaW5wdXQgYXJyYXlcbiAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAvLyB2ZXJ0ZXggaXMgYSBkb3VibGUgbGlua2VkIGxpc3Qgbm9kZVxuICB0aGlzLm5leHQgPSBudWxsO1xuICB0aGlzLnByZXYgPSBudWxsO1xuICAvLyB0aGUgZmFjZSB0aGF0IGlzIGFibGUgdG8gc2VlIHRoaXMgcG9pbnRcbiAgdGhpcy5mYWNlID0gbnVsbDtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFZlcnRleDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcXVpY2todWxsM2QvZGlzdC9WZXJ0ZXguanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuREVMRVRFRCA9IGV4cG9ydHMuTk9OX0NPTlZFWCA9IGV4cG9ydHMuVklTSUJMRSA9IHVuZGVmaW5lZDtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9kZWJ1Z0ZuID0gcmVxdWlyZSgnZGVidWctZm4nKTtcblxudmFyIF9kZWJ1Z0ZuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlYnVnRm4pO1xuXG52YXIgX2RvdCA9IHJlcXVpcmUoJ2dsLXZlYzMvZG90Jyk7XG5cbnZhciBfZG90MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RvdCk7XG5cbnZhciBfYWRkID0gcmVxdWlyZSgnZ2wtdmVjMy9hZGQnKTtcblxudmFyIF9hZGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRkKTtcblxudmFyIF9zdWJ0cmFjdCA9IHJlcXVpcmUoJ2dsLXZlYzMvc3VidHJhY3QnKTtcblxudmFyIF9zdWJ0cmFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdWJ0cmFjdCk7XG5cbnZhciBfY3Jvc3MgPSByZXF1aXJlKCdnbC12ZWMzL2Nyb3NzJyk7XG5cbnZhciBfY3Jvc3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3Jvc3MpO1xuXG52YXIgX2NvcHkgPSByZXF1aXJlKCdnbC12ZWMzL2NvcHknKTtcblxudmFyIF9jb3B5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvcHkpO1xuXG52YXIgX2xlbmd0aCA9IHJlcXVpcmUoJ2dsLXZlYzMvbGVuZ3RoJyk7XG5cbnZhciBfbGVuZ3RoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xlbmd0aCk7XG5cbnZhciBfc2NhbGUgPSByZXF1aXJlKCdnbC12ZWMzL3NjYWxlJyk7XG5cbnZhciBfc2NhbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2NhbGUpO1xuXG52YXIgX3NjYWxlQW5kQWRkID0gcmVxdWlyZSgnZ2wtdmVjMy9zY2FsZUFuZEFkZCcpO1xuXG52YXIgX3NjYWxlQW5kQWRkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NjYWxlQW5kQWRkKTtcblxudmFyIF9ub3JtYWxpemUgPSByZXF1aXJlKCdnbC12ZWMzL25vcm1hbGl6ZScpO1xuXG52YXIgX25vcm1hbGl6ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ub3JtYWxpemUpO1xuXG52YXIgX0hhbGZFZGdlID0gcmVxdWlyZSgnLi9IYWxmRWRnZScpO1xuXG52YXIgX0hhbGZFZGdlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0hhbGZFZGdlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIGRlYnVnID0gKDAsIF9kZWJ1Z0ZuMi5kZWZhdWx0KSgnZmFjZScpO1xuXG52YXIgVklTSUJMRSA9IGV4cG9ydHMuVklTSUJMRSA9IDA7XG52YXIgTk9OX0NPTlZFWCA9IGV4cG9ydHMuTk9OX0NPTlZFWCA9IDE7XG52YXIgREVMRVRFRCA9IGV4cG9ydHMuREVMRVRFRCA9IDI7XG5cbnZhciBGYWNlID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBGYWNlKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGYWNlKTtcblxuICAgIHRoaXMubm9ybWFsID0gW107XG4gICAgdGhpcy5jZW50cm9pZCA9IFtdO1xuICAgIC8vIHNpZ25lZCBkaXN0YW5jZSBmcm9tIGZhY2UgdG8gdGhlIG9yaWdpblxuICAgIHRoaXMub2Zmc2V0ID0gMDtcbiAgICAvLyBwb2ludGVyIHRvIHRoZSBhIHZlcnRleCBpbiBhIGRvdWJsZSBsaW5rZWQgbGlzdCB0aGlzIGZhY2UgY2FuIHNlZVxuICAgIHRoaXMub3V0c2lkZSA9IG51bGw7XG4gICAgdGhpcy5tYXJrID0gVklTSUJMRTtcbiAgICB0aGlzLmVkZ2UgPSBudWxsO1xuICAgIHRoaXMublZlcnRpY2VzID0gMDtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhGYWNlLCBbe1xuICAgIGtleTogJ2dldEVkZ2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRFZGdlKGkpIHtcbiAgICAgIGlmICh0eXBlb2YgaSAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ3JlcXVpcmVzIGEgbnVtYmVyJyk7XG4gICAgICB9XG4gICAgICB2YXIgaXQgPSB0aGlzLmVkZ2U7XG4gICAgICB3aGlsZSAoaSA+IDApIHtcbiAgICAgICAgaXQgPSBpdC5uZXh0O1xuICAgICAgICBpIC09IDE7XG4gICAgICB9XG4gICAgICB3aGlsZSAoaSA8IDApIHtcbiAgICAgICAgaXQgPSBpdC5wcmV2O1xuICAgICAgICBpICs9IDE7XG4gICAgICB9XG4gICAgICByZXR1cm4gaXQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcHV0ZU5vcm1hbCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXB1dGVOb3JtYWwoKSB7XG4gICAgICB2YXIgZTAgPSB0aGlzLmVkZ2U7XG4gICAgICB2YXIgZTEgPSBlMC5uZXh0O1xuICAgICAgdmFyIGUyID0gZTEubmV4dDtcbiAgICAgIHZhciB2MiA9ICgwLCBfc3VidHJhY3QyLmRlZmF1bHQpKFtdLCBlMS5oZWFkKCkucG9pbnQsIGUwLmhlYWQoKS5wb2ludCk7XG4gICAgICB2YXIgdCA9IFtdO1xuICAgICAgdmFyIHYxID0gW107XG5cbiAgICAgIHRoaXMublZlcnRpY2VzID0gMjtcbiAgICAgIHRoaXMubm9ybWFsID0gWzAsIDAsIDBdO1xuICAgICAgd2hpbGUgKGUyICE9PSBlMCkge1xuICAgICAgICAoMCwgX2NvcHkyLmRlZmF1bHQpKHYxLCB2Mik7XG4gICAgICAgICgwLCBfc3VidHJhY3QyLmRlZmF1bHQpKHYyLCBlMi5oZWFkKCkucG9pbnQsIGUwLmhlYWQoKS5wb2ludCk7XG4gICAgICAgICgwLCBfYWRkMi5kZWZhdWx0KSh0aGlzLm5vcm1hbCwgdGhpcy5ub3JtYWwsICgwLCBfY3Jvc3MyLmRlZmF1bHQpKHQsIHYxLCB2MikpO1xuICAgICAgICBlMiA9IGUyLm5leHQ7XG4gICAgICAgIHRoaXMublZlcnRpY2VzICs9IDE7XG4gICAgICB9XG4gICAgICB0aGlzLmFyZWEgPSAoMCwgX2xlbmd0aDIuZGVmYXVsdCkodGhpcy5ub3JtYWwpO1xuICAgICAgLy8gbm9ybWFsaXplIHRoZSB2ZWN0b3IsIHNpbmNlIHdlJ3ZlIGFscmVhZHkgY2FsY3VsYXRlZCB0aGUgYXJlYVxuICAgICAgLy8gaXQncyBjaGVhcGVyIHRvIHNjYWxlIHRoZSB2ZWN0b3IgdXNpbmcgdGhpcyBxdWFudGl0eSBpbnN0ZWFkIG9mXG4gICAgICAvLyBkb2luZyB0aGUgc2FtZSBvcGVyYXRpb24gYWdhaW5cbiAgICAgIHRoaXMubm9ybWFsID0gKDAsIF9zY2FsZTIuZGVmYXVsdCkodGhpcy5ub3JtYWwsIHRoaXMubm9ybWFsLCAxIC8gdGhpcy5hcmVhKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wdXRlTm9ybWFsTWluQXJlYScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXB1dGVOb3JtYWxNaW5BcmVhKG1pbkFyZWEpIHtcbiAgICAgIHRoaXMuY29tcHV0ZU5vcm1hbCgpO1xuICAgICAgaWYgKHRoaXMuYXJlYSA8IG1pbkFyZWEpIHtcbiAgICAgICAgLy8gY29tcHV0ZSB0aGUgbm9ybWFsIHdpdGhvdXQgdGhlIGxvbmdlc3QgZWRnZVxuICAgICAgICB2YXIgbWF4RWRnZSA9IHZvaWQgMDtcbiAgICAgICAgdmFyIG1heFNxdWFyZWRMZW5ndGggPSAwO1xuICAgICAgICB2YXIgZWRnZSA9IHRoaXMuZWRnZTtcblxuICAgICAgICAvLyBmaW5kIHRoZSBsb25nZXN0IGVkZ2UgKGluIGxlbmd0aCkgaW4gdGhlIGNoYWluIG9mIGVkZ2VzXG4gICAgICAgIGRvIHtcbiAgICAgICAgICB2YXIgbGVuZ3RoU3F1YXJlZCA9IGVkZ2UubGVuZ3RoU3F1YXJlZCgpO1xuICAgICAgICAgIGlmIChsZW5ndGhTcXVhcmVkID4gbWF4U3F1YXJlZExlbmd0aCkge1xuICAgICAgICAgICAgbWF4RWRnZSA9IGVkZ2U7XG4gICAgICAgICAgICBtYXhTcXVhcmVkTGVuZ3RoID0gbGVuZ3RoU3F1YXJlZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWRnZSA9IGVkZ2UubmV4dDtcbiAgICAgICAgfSB3aGlsZSAoZWRnZSAhPT0gdGhpcy5lZGdlKTtcblxuICAgICAgICB2YXIgcDEgPSBtYXhFZGdlLnRhaWwoKS5wb2ludDtcbiAgICAgICAgdmFyIHAyID0gbWF4RWRnZS5oZWFkKCkucG9pbnQ7XG4gICAgICAgIHZhciBtYXhWZWN0b3IgPSAoMCwgX3N1YnRyYWN0Mi5kZWZhdWx0KShbXSwgcDIsIHAxKTtcbiAgICAgICAgdmFyIG1heExlbmd0aCA9IE1hdGguc3FydChtYXhTcXVhcmVkTGVuZ3RoKTtcbiAgICAgICAgLy8gbWF4VmVjdG9yIGlzIG5vcm1hbGl6ZWQgYWZ0ZXIgdGhpcyBvcGVyYXRpb25cbiAgICAgICAgKDAsIF9zY2FsZTIuZGVmYXVsdCkobWF4VmVjdG9yLCBtYXhWZWN0b3IsIDEgLyBtYXhMZW5ndGgpO1xuICAgICAgICAvLyBjb21wdXRlIHRoZSBwcm9qZWN0aW9uIG9mIG1heFZlY3RvciBvdmVyIHRoaXMgZmFjZSBub3JtYWxcbiAgICAgICAgdmFyIG1heFByb2plY3Rpb24gPSAoMCwgX2RvdDIuZGVmYXVsdCkodGhpcy5ub3JtYWwsIG1heFZlY3Rvcik7XG4gICAgICAgIC8vIHN1YnRyYWN0IHRoZSBxdWFudGl0eSBtYXhFZGdlIGFkZHMgb24gdGhlIG5vcm1hbFxuICAgICAgICAoMCwgX3NjYWxlQW5kQWRkMi5kZWZhdWx0KSh0aGlzLm5vcm1hbCwgdGhpcy5ub3JtYWwsIG1heFZlY3RvciwgLW1heFByb2plY3Rpb24pO1xuICAgICAgICAvLyByZW5vcm1hbGl6ZSBgdGhpcy5ub3JtYWxgXG4gICAgICAgICgwLCBfbm9ybWFsaXplMi5kZWZhdWx0KSh0aGlzLm5vcm1hbCwgdGhpcy5ub3JtYWwpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXB1dGVDZW50cm9pZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXB1dGVDZW50cm9pZCgpIHtcbiAgICAgIHRoaXMuY2VudHJvaWQgPSBbMCwgMCwgMF07XG4gICAgICB2YXIgZWRnZSA9IHRoaXMuZWRnZTtcbiAgICAgIGRvIHtcbiAgICAgICAgKDAsIF9hZGQyLmRlZmF1bHQpKHRoaXMuY2VudHJvaWQsIHRoaXMuY2VudHJvaWQsIGVkZ2UuaGVhZCgpLnBvaW50KTtcbiAgICAgICAgZWRnZSA9IGVkZ2UubmV4dDtcbiAgICAgIH0gd2hpbGUgKGVkZ2UgIT09IHRoaXMuZWRnZSk7XG4gICAgICAoMCwgX3NjYWxlMi5kZWZhdWx0KSh0aGlzLmNlbnRyb2lkLCB0aGlzLmNlbnRyb2lkLCAxIC8gdGhpcy5uVmVydGljZXMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXB1dGVOb3JtYWxBbmRDZW50cm9pZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXB1dGVOb3JtYWxBbmRDZW50cm9pZChtaW5BcmVhKSB7XG4gICAgICBpZiAodHlwZW9mIG1pbkFyZWEgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuY29tcHV0ZU5vcm1hbE1pbkFyZWEobWluQXJlYSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbXB1dGVOb3JtYWwoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY29tcHV0ZUNlbnRyb2lkKCk7XG4gICAgICB0aGlzLm9mZnNldCA9ICgwLCBfZG90Mi5kZWZhdWx0KSh0aGlzLm5vcm1hbCwgdGhpcy5jZW50cm9pZCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZGlzdGFuY2VUb1BsYW5lJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGlzdGFuY2VUb1BsYW5lKHBvaW50KSB7XG4gICAgICByZXR1cm4gKDAsIF9kb3QyLmRlZmF1bHQpKHRoaXMubm9ybWFsLCBwb2ludCkgLSB0aGlzLm9mZnNldDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqXG4gICAgICogQ29ubmVjdHMgdHdvIGVkZ2VzIGFzc3VtaW5nIHRoYXQgcHJldi5oZWFkKCkucG9pbnQgPT09IG5leHQudGFpbCgpLnBvaW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hhbGZFZGdlfSBwcmV2XG4gICAgICogQHBhcmFtIHtIYWxmRWRnZX0gbmV4dFxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdjb25uZWN0SGFsZkVkZ2VzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29ubmVjdEhhbGZFZGdlcyhwcmV2LCBuZXh0KSB7XG4gICAgICB2YXIgZGlzY2FyZGVkRmFjZSA9IHZvaWQgMDtcbiAgICAgIGlmIChwcmV2Lm9wcG9zaXRlLmZhY2UgPT09IG5leHQub3Bwb3NpdGUuZmFjZSkge1xuICAgICAgICAvLyBgcHJldmAgaXMgcmVtb3ZlIGEgcmVkdW5kYW50IGVkZ2VcbiAgICAgICAgdmFyIG9wcG9zaXRlRmFjZSA9IG5leHQub3Bwb3NpdGUuZmFjZTtcbiAgICAgICAgdmFyIG9wcG9zaXRlRWRnZSA9IHZvaWQgMDtcbiAgICAgICAgaWYgKHByZXYgPT09IHRoaXMuZWRnZSkge1xuICAgICAgICAgIHRoaXMuZWRnZSA9IG5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wcG9zaXRlRmFjZS5uVmVydGljZXMgPT09IDMpIHtcbiAgICAgICAgICAvLyBjYXNlOlxuICAgICAgICAgIC8vIHJlbW92ZSB0aGUgZmFjZSBvbiB0aGUgcmlnaHRcbiAgICAgICAgICAvL1xuICAgICAgICAgIC8vICAgICAgIC98XFxcbiAgICAgICAgICAvLyAgICAgIC8gfCBcXCB0aGUgZmFjZSBvbiB0aGUgcmlnaHRcbiAgICAgICAgICAvLyAgICAgLyAgfCAgXFwgLS0+IG9wcG9zaXRlIGVkZ2VcbiAgICAgICAgICAvLyAgICAvIGEgfCAgIFxcXG4gICAgICAgICAgLy8gICAqLS0tLSotLS0tKlxuICAgICAgICAgIC8vICAvICAgICBiICB8ICBcXFxuICAgICAgICAgIC8vICAgICAgICAgICDilr5cbiAgICAgICAgICAvLyAgICAgIHJlZHVuZGFudCBlZGdlXG4gICAgICAgICAgLy9cbiAgICAgICAgICAvLyBOb3RlOiB0aGUgb3Bwb3NpdGUgZWRnZSBpcyBhY3R1YWxseSBpbiB0aGUgZmFjZSB0byB0aGUgcmlnaHRcbiAgICAgICAgICAvLyBvZiB0aGUgZmFjZSB0byBiZSBkZXN0cm95ZWRcbiAgICAgICAgICBvcHBvc2l0ZUVkZ2UgPSBuZXh0Lm9wcG9zaXRlLnByZXYub3Bwb3NpdGU7XG4gICAgICAgICAgb3Bwb3NpdGVGYWNlLm1hcmsgPSBERUxFVEVEO1xuICAgICAgICAgIGRpc2NhcmRlZEZhY2UgPSBvcHBvc2l0ZUZhY2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gY2FzZTpcbiAgICAgICAgICAvLyAgICAgICAgICB0XG4gICAgICAgICAgLy8gICAgICAgICotLS0tXG4gICAgICAgICAgLy8gICAgICAgL3wgPC0gcmlnaHQgZmFjZSdzIHJlZHVuZGFudCBlZGdlXG4gICAgICAgICAgLy8gICAgICAvIHwgb3Bwb3NpdGUgZWRnZVxuICAgICAgICAgIC8vICAgICAvICB8ICDilrQgICAvXG4gICAgICAgICAgLy8gICAgLyBhIHwgIHwgIC9cbiAgICAgICAgICAvLyAgICotLS0tKi0tLS0qXG4gICAgICAgICAgLy8gIC8gICAgIGIgIHwgIFxcXG4gICAgICAgICAgLy8gICAgICAgICAgIOKWvlxuICAgICAgICAgIC8vICAgICAgcmVkdW5kYW50IGVkZ2VcbiAgICAgICAgICBvcHBvc2l0ZUVkZ2UgPSBuZXh0Lm9wcG9zaXRlLm5leHQ7XG4gICAgICAgICAgLy8gbWFrZSBzdXJlIHRoYXQgdGhlIGxpbmsgYG9wcG9zaXRlRmFjZS5lZGdlYCBwb2ludHMgY29ycmVjdGx5IGV2ZW5cbiAgICAgICAgICAvLyBhZnRlciB0aGUgcmlnaHQgZmFjZSByZWR1bmRhbnQgZWRnZSBpcyByZW1vdmVkXG4gICAgICAgICAgaWYgKG9wcG9zaXRlRmFjZS5lZGdlID09PSBvcHBvc2l0ZUVkZ2UucHJldikge1xuICAgICAgICAgICAgb3Bwb3NpdGVGYWNlLmVkZ2UgPSBvcHBvc2l0ZUVkZ2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gICAgICAgL3wgICAvXG4gICAgICAgICAgLy8gICAgICAvIHwgdC9vcHBvc2l0ZSBlZGdlXG4gICAgICAgICAgLy8gICAgIC8gIHwgLyDilrQgIC9cbiAgICAgICAgICAvLyAgICAvIGEgfC8gIHwgL1xuICAgICAgICAgIC8vICAgKi0tLS0qLS0tLSpcbiAgICAgICAgICAvLyAgLyAgICAgYiAgICAgXFxcbiAgICAgICAgICBvcHBvc2l0ZUVkZ2UucHJldiA9IG9wcG9zaXRlRWRnZS5wcmV2LnByZXY7XG4gICAgICAgICAgb3Bwb3NpdGVFZGdlLnByZXYubmV4dCA9IG9wcG9zaXRlRWRnZTtcbiAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAvfFxuICAgICAgICAvLyAgICAgIC8gfFxuICAgICAgICAvLyAgICAgLyAgfFxuICAgICAgICAvLyAgICAvIGEgfFxuICAgICAgICAvLyAgICotLS0tKi0tLS0qXG4gICAgICAgIC8vICAvICAgICBiICDilrQgIFxcXG4gICAgICAgIC8vICAgICAgICAgICB8XG4gICAgICAgIC8vICAgICByZWR1bmRhbnQgZWRnZVxuICAgICAgICBuZXh0LnByZXYgPSBwcmV2LnByZXY7XG4gICAgICAgIG5leHQucHJldi5uZXh0ID0gbmV4dDtcblxuICAgICAgICAvLyAgICAgICAvIFxcICBcXFxuICAgICAgICAvLyAgICAgIC8gICBcXC0+XFxcbiAgICAgICAgLy8gICAgIC8gICAgIFxcPC1cXCBvcHBvc2l0ZSBlZGdlXG4gICAgICAgIC8vICAgIC8gYSAgICAgXFwgIFxcXG4gICAgICAgIC8vICAgKi0tLS0qLS0tLSpcbiAgICAgICAgLy8gIC8gICAgIGIgIF4gIFxcXG4gICAgICAgIG5leHQuc2V0T3Bwb3NpdGUob3Bwb3NpdGVFZGdlKTtcblxuICAgICAgICBvcHBvc2l0ZUZhY2UuY29tcHV0ZU5vcm1hbEFuZENlbnRyb2lkKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB0cml2aWFsIGNhc2VcbiAgICAgICAgLy8gICAgICAgICpcbiAgICAgICAgLy8gICAgICAgL3xcXFxuICAgICAgICAvLyAgICAgIC8gfCBcXFxuICAgICAgICAvLyAgICAgLyAgfC0tPiBuZXh0XG4gICAgICAgIC8vICAgIC8gYSB8ICAgXFxcbiAgICAgICAgLy8gICAqLS0tLSotLS0tKlxuICAgICAgICAvLyAgICBcXCBiIHwgICAvXG4gICAgICAgIC8vICAgICBcXCAgfC0tPiBwcmV2XG4gICAgICAgIC8vICAgICAgXFwgfCAvXG4gICAgICAgIC8vICAgICAgIFxcfC9cbiAgICAgICAgLy8gICAgICAgICpcbiAgICAgICAgcHJldi5uZXh0ID0gbmV4dDtcbiAgICAgICAgbmV4dC5wcmV2ID0gcHJldjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkaXNjYXJkZWRGYWNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ21lcmdlQWRqYWNlbnRGYWNlcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1lcmdlQWRqYWNlbnRGYWNlcyhhZGphY2VudEVkZ2UsIGRpc2NhcmRlZEZhY2VzKSB7XG4gICAgICB2YXIgb3Bwb3NpdGVFZGdlID0gYWRqYWNlbnRFZGdlLm9wcG9zaXRlO1xuICAgICAgdmFyIG9wcG9zaXRlRmFjZSA9IG9wcG9zaXRlRWRnZS5mYWNlO1xuXG4gICAgICBkaXNjYXJkZWRGYWNlcy5wdXNoKG9wcG9zaXRlRmFjZSk7XG4gICAgICBvcHBvc2l0ZUZhY2UubWFyayA9IERFTEVURUQ7XG5cbiAgICAgIC8vIGZpbmQgdGhlIGNoYWluIG9mIGVkZ2VzIHdob3NlIG9wcG9zaXRlIGZhY2UgaXMgYG9wcG9zaXRlRmFjZWBcbiAgICAgIC8vXG4gICAgICAvLyAgICAgICAgICAgICAgICA9PT0+XG4gICAgICAvLyAgICAgIFxcICAgICAgICAgZmFjZSAgICAgICAgIC9cbiAgICAgIC8vICAgICAgICogLS0tLSAqIC0tLS0gKiAtLS0tICpcbiAgICAgIC8vICAgICAgLyAgICAgb3Bwb3NpdGUgZmFjZSAgICBcXFxuICAgICAgLy8gICAgICAgICAgICAgICAgPD09PVxuICAgICAgLy9cbiAgICAgIHZhciBhZGphY2VudEVkZ2VQcmV2ID0gYWRqYWNlbnRFZGdlLnByZXY7XG4gICAgICB2YXIgYWRqYWNlbnRFZGdlTmV4dCA9IGFkamFjZW50RWRnZS5uZXh0O1xuICAgICAgdmFyIG9wcG9zaXRlRWRnZVByZXYgPSBvcHBvc2l0ZUVkZ2UucHJldjtcbiAgICAgIHZhciBvcHBvc2l0ZUVkZ2VOZXh0ID0gb3Bwb3NpdGVFZGdlLm5leHQ7XG5cbiAgICAgIC8vIGxlZnQgZWRnZVxuICAgICAgd2hpbGUgKGFkamFjZW50RWRnZVByZXYub3Bwb3NpdGUuZmFjZSA9PT0gb3Bwb3NpdGVGYWNlKSB7XG4gICAgICAgIGFkamFjZW50RWRnZVByZXYgPSBhZGphY2VudEVkZ2VQcmV2LnByZXY7XG4gICAgICAgIG9wcG9zaXRlRWRnZU5leHQgPSBvcHBvc2l0ZUVkZ2VOZXh0Lm5leHQ7XG4gICAgICB9XG4gICAgICAvLyByaWdodCBlZGdlXG4gICAgICB3aGlsZSAoYWRqYWNlbnRFZGdlTmV4dC5vcHBvc2l0ZS5mYWNlID09PSBvcHBvc2l0ZUZhY2UpIHtcbiAgICAgICAgYWRqYWNlbnRFZGdlTmV4dCA9IGFkamFjZW50RWRnZU5leHQubmV4dDtcbiAgICAgICAgb3Bwb3NpdGVFZGdlUHJldiA9IG9wcG9zaXRlRWRnZVByZXYucHJldjtcbiAgICAgIH1cbiAgICAgIC8vIGFkamFjZW50RWRnZVByZXYgIFxcICAgICAgICAgZmFjZSAgICAgICAgIC8gYWRqYWNlbnRFZGdlTmV4dFxuICAgICAgLy8gICAgICAgICAgICAgICAgICAgICogLS0tLSAqIC0tLS0gKiAtLS0tICpcbiAgICAgIC8vIG9wcG9zaXRlRWRnZU5leHQgIC8gICAgIG9wcG9zaXRlIGZhY2UgICAgXFwgb3Bwb3NpdGVFZGdlUHJldlxuXG4gICAgICAvLyBmaXggdGhlIGZhY2UgcmVmZXJlbmNlIG9mIGFsbCB0aGUgb3Bwb3NpdGUgZWRnZXMgdGhhdCBhcmUgbm90IHBhcnQgb2ZcbiAgICAgIC8vIHRoZSBlZGdlcyB3aG9zZSBvcHBvc2l0ZSBmYWNlIGlzIG5vdCBgZmFjZWAgaS5lLiBhbGwgdGhlIGVkZ2VzIHRoYXRcbiAgICAgIC8vIGBmYWNlYCBhbmQgYG9wcG9zaXRlRmFjZWAgZG8gbm90IGhhdmUgaW4gY29tbW9uXG4gICAgICB2YXIgZWRnZSA9IHZvaWQgMDtcbiAgICAgIGZvciAoZWRnZSA9IG9wcG9zaXRlRWRnZU5leHQ7IGVkZ2UgIT09IG9wcG9zaXRlRWRnZVByZXYubmV4dDsgZWRnZSA9IGVkZ2UubmV4dCkge1xuICAgICAgICBlZGdlLmZhY2UgPSB0aGlzO1xuICAgICAgfVxuXG4gICAgICAvLyBtYWtlIHN1cmUgdGhhdCBgZmFjZS5lZGdlYCBpcyBub3Qgb25lIG9mIHRoZSBlZGdlcyB0byBiZSBkZXN0cm95ZWRcbiAgICAgIC8vIE5vdGU6IGl0J3MgaW1wb3J0YW50IGZvciBpdCB0byBiZSBhIGBuZXh0YCBlZGdlIHNpbmNlIGBwcmV2YCBlZGdlc1xuICAgICAgLy8gbWlnaHQgYmUgZGVzdHJveWVkIG9uIGBjb25uZWN0SGFsZkVkZ2VzYFxuICAgICAgdGhpcy5lZGdlID0gYWRqYWNlbnRFZGdlTmV4dDtcblxuICAgICAgLy8gY29ubmVjdCB0aGUgZXh0cmVtZXNcbiAgICAgIC8vIE5vdGU6IGl0IG1pZ2h0IGJlIHBvc3NpYmxlIHRoYXQgYWZ0ZXIgY29ubmVjdGluZyB0aGUgZWRnZXMgYSB0cmlhbmd1bGFyXG4gICAgICAvLyBmYWNlIG1pZ2h0IGJlIHJlZHVuZGFudFxuICAgICAgdmFyIGRpc2NhcmRlZEZhY2UgPSB2b2lkIDA7XG4gICAgICBkaXNjYXJkZWRGYWNlID0gdGhpcy5jb25uZWN0SGFsZkVkZ2VzKG9wcG9zaXRlRWRnZVByZXYsIGFkamFjZW50RWRnZU5leHQpO1xuICAgICAgaWYgKGRpc2NhcmRlZEZhY2UpIHtcbiAgICAgICAgZGlzY2FyZGVkRmFjZXMucHVzaChkaXNjYXJkZWRGYWNlKTtcbiAgICAgIH1cbiAgICAgIGRpc2NhcmRlZEZhY2UgPSB0aGlzLmNvbm5lY3RIYWxmRWRnZXMoYWRqYWNlbnRFZGdlUHJldiwgb3Bwb3NpdGVFZGdlTmV4dCk7XG4gICAgICBpZiAoZGlzY2FyZGVkRmFjZSkge1xuICAgICAgICBkaXNjYXJkZWRGYWNlcy5wdXNoKGRpc2NhcmRlZEZhY2UpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNvbXB1dGVOb3JtYWxBbmRDZW50cm9pZCgpO1xuICAgICAgLy8gVE9ETzogYWRkaXRpb25hbCBjb25zaXN0ZW5jeSBjaGVja3NcbiAgICAgIHJldHVybiBkaXNjYXJkZWRGYWNlcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb2xsZWN0SW5kaWNlcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbGxlY3RJbmRpY2VzKCkge1xuICAgICAgdmFyIGluZGljZXMgPSBbXTtcbiAgICAgIHZhciBlZGdlID0gdGhpcy5lZGdlO1xuICAgICAgZG8ge1xuICAgICAgICBpbmRpY2VzLnB1c2goZWRnZS5oZWFkKCkuaW5kZXgpO1xuICAgICAgICBlZGdlID0gZWRnZS5uZXh0O1xuICAgICAgfSB3aGlsZSAoZWRnZSAhPT0gdGhpcy5lZGdlKTtcbiAgICAgIHJldHVybiBpbmRpY2VzO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiAnY3JlYXRlVHJpYW5nbGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVUcmlhbmdsZSh2MCwgdjEsIHYyKSB7XG4gICAgICB2YXIgbWluQXJlYSA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogMDtcblxuICAgICAgdmFyIGZhY2UgPSBuZXcgRmFjZSgpO1xuICAgICAgdmFyIGUwID0gbmV3IF9IYWxmRWRnZTIuZGVmYXVsdCh2MCwgZmFjZSk7XG4gICAgICB2YXIgZTEgPSBuZXcgX0hhbGZFZGdlMi5kZWZhdWx0KHYxLCBmYWNlKTtcbiAgICAgIHZhciBlMiA9IG5ldyBfSGFsZkVkZ2UyLmRlZmF1bHQodjIsIGZhY2UpO1xuXG4gICAgICAvLyBqb2luIGVkZ2VzXG4gICAgICBlMC5uZXh0ID0gZTIucHJldiA9IGUxO1xuICAgICAgZTEubmV4dCA9IGUwLnByZXYgPSBlMjtcbiAgICAgIGUyLm5leHQgPSBlMS5wcmV2ID0gZTA7XG5cbiAgICAgIC8vIG1haW4gaGFsZiBlZGdlIHJlZmVyZW5jZVxuICAgICAgZmFjZS5lZGdlID0gZTA7XG4gICAgICBmYWNlLmNvbXB1dGVOb3JtYWxBbmRDZW50cm9pZChtaW5BcmVhKTtcbiAgICAgIGRlYnVnKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5sb2coJ2ZhY2UgY3JlYXRlZCAlaicsIGZhY2UuY29sbGVjdEluZGljZXMoKSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmYWNlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBGYWNlO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBGYWNlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3F1aWNraHVsbDNkL2Rpc3QvRmFjZS5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBhZGQ7XG5cbi8qKlxuICogQWRkcyB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiBhZGQob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gYVswXSArIGJbMF1cbiAgICBvdXRbMV0gPSBhWzFdICsgYlsxXVxuICAgIG91dFsyXSA9IGFbMl0gKyBiWzJdXG4gICAgcmV0dXJuIG91dFxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dsLXZlYzMvYWRkLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGNvcHk7XG5cbi8qKlxuICogQ29weSB0aGUgdmFsdWVzIGZyb20gb25lIHZlYzMgdG8gYW5vdGhlclxuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIHNvdXJjZSB2ZWN0b3JcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gY29weShvdXQsIGEpIHtcbiAgICBvdXRbMF0gPSBhWzBdXG4gICAgb3V0WzFdID0gYVsxXVxuICAgIG91dFsyXSA9IGFbMl1cbiAgICByZXR1cm4gb3V0XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2wtdmVjMy9jb3B5LmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGxlbmd0aDtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBsZW5ndGggb2YgYSB2ZWMzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBhIHZlY3RvciB0byBjYWxjdWxhdGUgbGVuZ3RoIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBsZW5ndGggb2YgYVxuICovXG5mdW5jdGlvbiBsZW5ndGgoYSkge1xuICAgIHZhciB4ID0gYVswXSxcbiAgICAgICAgeSA9IGFbMV0sXG4gICAgICAgIHogPSBhWzJdXG4gICAgcmV0dXJuIE1hdGguc3FydCh4KnggKyB5KnkgKyB6KnopXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2wtdmVjMy9sZW5ndGguanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gc2NhbGU7XG5cbi8qKlxuICogU2NhbGVzIGEgdmVjMyBieSBhIHNjYWxhciBudW1iZXJcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSB2ZWN0b3IgdG8gc2NhbGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBiIGFtb3VudCB0byBzY2FsZSB0aGUgdmVjdG9yIGJ5XG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIHNjYWxlKG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gKiBiXG4gICAgb3V0WzFdID0gYVsxXSAqIGJcbiAgICBvdXRbMl0gPSBhWzJdICogYlxuICAgIHJldHVybiBvdXRcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nbC12ZWMzL3NjYWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHNjYWxlQW5kQWRkO1xuXG4vKipcbiAqIEFkZHMgdHdvIHZlYzMncyBhZnRlciBzY2FsaW5nIHRoZSBzZWNvbmQgb3BlcmFuZCBieSBhIHNjYWxhciB2YWx1ZVxuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsZSB0aGUgYW1vdW50IHRvIHNjYWxlIGIgYnkgYmVmb3JlIGFkZGluZ1xuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiBzY2FsZUFuZEFkZChvdXQsIGEsIGIsIHNjYWxlKSB7XG4gICAgb3V0WzBdID0gYVswXSArIChiWzBdICogc2NhbGUpXG4gICAgb3V0WzFdID0gYVsxXSArIChiWzFdICogc2NhbGUpXG4gICAgb3V0WzJdID0gYVsyXSArIChiWzJdICogc2NhbGUpXG4gICAgcmV0dXJuIG91dFxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dsLXZlYzMvc2NhbGVBbmRBZGQuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9kaXN0YW5jZSA9IHJlcXVpcmUoJ2dsLXZlYzMvZGlzdGFuY2UnKTtcblxudmFyIF9kaXN0YW5jZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kaXN0YW5jZSk7XG5cbnZhciBfc3F1YXJlZERpc3RhbmNlID0gcmVxdWlyZSgnZ2wtdmVjMy9zcXVhcmVkRGlzdGFuY2UnKTtcblxudmFyIF9zcXVhcmVkRGlzdGFuY2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3F1YXJlZERpc3RhbmNlKTtcblxudmFyIF9kZWJ1Z0ZuID0gcmVxdWlyZSgnZGVidWctZm4nKTtcblxudmFyIF9kZWJ1Z0ZuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlYnVnRm4pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgZGVidWcgPSAoMCwgX2RlYnVnRm4yLmRlZmF1bHQpKCdoYWxmZWRnZScpO1xuXG52YXIgSGFsZkVkZ2UgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEhhbGZFZGdlKHZlcnRleCwgZmFjZSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIYWxmRWRnZSk7XG5cbiAgICB0aGlzLnZlcnRleCA9IHZlcnRleDtcbiAgICB0aGlzLmZhY2UgPSBmYWNlO1xuICAgIHRoaXMubmV4dCA9IG51bGw7XG4gICAgdGhpcy5wcmV2ID0gbnVsbDtcbiAgICB0aGlzLm9wcG9zaXRlID0gbnVsbDtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhIYWxmRWRnZSwgW3tcbiAgICBrZXk6ICdoZWFkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGVhZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnZlcnRleDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd0YWlsJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdGFpbCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnByZXYgPyB0aGlzLnByZXYudmVydGV4IDogbnVsbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdsZW5ndGgnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsZW5ndGgoKSB7XG4gICAgICBpZiAodGhpcy50YWlsKCkpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfZGlzdGFuY2UyLmRlZmF1bHQpKHRoaXMudGFpbCgpLnBvaW50LCB0aGlzLmhlYWQoKS5wb2ludCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnbGVuZ3RoU3F1YXJlZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxlbmd0aFNxdWFyZWQoKSB7XG4gICAgICBpZiAodGhpcy50YWlsKCkpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfc3F1YXJlZERpc3RhbmNlMi5kZWZhdWx0KSh0aGlzLnRhaWwoKS5wb2ludCwgdGhpcy5oZWFkKCkucG9pbnQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldE9wcG9zaXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0T3Bwb3NpdGUoZWRnZSkge1xuICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgIGRlYnVnKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5sb2coJ29wcG9zaXRlICcgKyBtZS50YWlsKCkuaW5kZXggKyAnIDwtLT4gJyArIG1lLmhlYWQoKS5pbmRleCArICcgYmV0d2VlbiAnICsgbWUuZmFjZS5jb2xsZWN0SW5kaWNlcygpICsgJywgJyArIGVkZ2UuZmFjZS5jb2xsZWN0SW5kaWNlcygpKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5vcHBvc2l0ZSA9IGVkZ2U7XG4gICAgICBlZGdlLm9wcG9zaXRlID0gdGhpcztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSGFsZkVkZ2U7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEhhbGZFZGdlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcXVpY2todWxsM2QvZGlzdC9IYWxmRWRnZS5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBkaXN0YW5jZTtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBldWNsaWRpYW4gZGlzdGFuY2UgYmV0d2VlbiB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkaXN0YW5jZSBiZXR3ZWVuIGEgYW5kIGJcbiAqL1xuZnVuY3Rpb24gZGlzdGFuY2UoYSwgYikge1xuICAgIHZhciB4ID0gYlswXSAtIGFbMF0sXG4gICAgICAgIHkgPSBiWzFdIC0gYVsxXSxcbiAgICAgICAgeiA9IGJbMl0gLSBhWzJdXG4gICAgcmV0dXJuIE1hdGguc3FydCh4KnggKyB5KnkgKyB6KnopXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2wtdmVjMy9kaXN0YW5jZS5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBzcXVhcmVkRGlzdGFuY2U7XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgc3F1YXJlZCBldWNsaWRpYW4gZGlzdGFuY2UgYmV0d2VlbiB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzcXVhcmVkIGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxuICovXG5mdW5jdGlvbiBzcXVhcmVkRGlzdGFuY2UoYSwgYikge1xuICAgIHZhciB4ID0gYlswXSAtIGFbMF0sXG4gICAgICAgIHkgPSBiWzFdIC0gYVsxXSxcbiAgICAgICAgeiA9IGJbMl0gLSBhWzJdXG4gICAgcmV0dXJuIHgqeCArIHkqeSArIHoqelxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dsLXZlYzMvc3F1YXJlZERpc3RhbmNlLmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBlbmdpbmU6IEJvaWxlcnBsYXRlRW5naW5lID0gd2luZG93O1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbG9yU2NoZW1lIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBmb3JlZ3JvdW5kOiBudW1iZXJbXSwgcHVibGljIHM6IHN0cmluZywgcHVibGljIGExOiAodDogbnVtYmVyKSA9PiBudW1iZXIsIHB1YmxpYyBhMjogKHQ6IG51bWJlcikgPT4gbnVtYmVyKSB7IH1cclxuXHJcbiAgICBjb21wdXRlKHQ6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucy5yZXBsYWNlKCckYTEnLCB0aGlzLmExKHQpLnRvU3RyaW5nKCkpLnJlcGxhY2UoJyRhMicsIHRoaXMuYTIodCkudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHN3aXBlVGltZSA9IDAuMTtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb2xvck1hbmFnZXIge1xyXG4gICAgcHJpdmF0ZSBzOiBDb2xvclNjaGVtZVtdID0gW107XHJcbiAgICBwcml2YXRlIHQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgY3VycmVudENvbG9yU2NoZW1lOiBDb2xvclNjaGVtZSkge31cclxuXHJcbiAgICByZW5kZXIoZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCB0TmV4dCA9IHRoaXMudCArIGR0O1xyXG4gICAgICAgIHdoaWxlICh0TmV4dCA+IHN3aXBlVGltZSkge1xyXG4gICAgICAgICAgICB0TmV4dCAtPSBzd2lwZVRpbWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRDb2xvclNjaGVtZSA9IHRoaXMucy5zaGlmdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudCA9IHROZXh0O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gdGhpcy5jdXJyZW50Q29sb3JTY2hlbWUuY29tcHV0ZSgxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdQZXJjZW50ID0gdGhpcy50IC8gc3dpcGVUaW1lO1xyXG4gICAgICAgICAgICBjb25zdCBiZ1N0cmluZyA9IHRoaXMuY3VycmVudENvbG9yU2NoZW1lLmNvbXB1dGUoMSAtIG5ld1BlcmNlbnQpICsgJywgJyArIHRoaXMuc1swXS5jb21wdXRlKDEpO1xyXG4gICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gYmdTdHJpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LnN0eWxlLmNvbG9yID0gdGhpcy5jb21wdXRlRm9yZWdyb3VuZENvbG9yKDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXB1dGVGb3JlZ3JvdW5kQ29sb3IoYWxwaGE6IGFueSkge1xyXG4gICAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5zLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICAgICA/IHRoaXMuY3VycmVudENvbG9yU2NoZW1lLmZvcmVncm91bmRcclxuICAgICAgICAgICAgOiBlbmdpbmUubGVycCh0aGlzLmN1cnJlbnRDb2xvclNjaGVtZS5mb3JlZ3JvdW5kLCB0aGlzLnNbMF0uZm9yZWdyb3VuZCwgMSAtIHRoaXMudCAvIHN3aXBlVGltZSk7XHJcbiAgICAgICAgcmV0dXJuIGByZ2JhKCR7Y29sb3Iuam9pbignLCAnKX0sICR7YWxwaGF9KWA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVzaChiZzogQ29sb3JTY2hlbWUpIHtcclxuICAgICAgICBpZiAodGhpcy5zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnQgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAodGhpcy5zLmxlbmd0aCA+IDEpIHsgLy8gZG9uJ3QgYWxsb3cgbW9yZSB0aGFuIDIgaW4gcSAoZmlyc3QgY2FuIGJlIGluLXRyYW5zaXRpb24sIHNlY29uZCBjZXJ0YWlubHkgbm90KVxyXG4gICAgICAgICAgICB0aGlzLnMucG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucy5wdXNoKGJnKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db2xvck1hbmFnZXIudHMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGUuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZS5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuZXhwb3J0cy5pKHJlcXVpcmUoXCItIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9tZXllcnJlc2V0Mi5zY3NzXCIpLCBcIlwiKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0KTtcIiwgXCJcIl0pO1xuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBrZXlmcmFtZXMgYmxpbmsge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxOyB9XFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiAwOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTsgfSB9XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmOyB9XFxuICBib2R5IGgxIHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDsgfVxcblxcbi5pbnRybyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBmb250LXNpemU6IDAuOHZ3OyB9XFxuICAuaW50cm8gaGVhZGVyIHtcXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcXG4gICAgcGFkZGluZy10b3A6IDUlO1xcbiAgICBvcGFjaXR5OiAwLjg7IH1cXG4gICAgLmludHJvIGhlYWRlciBoMSB7XFxuICAgICAgZm9udC1zaXplOiA4ZW07XFxuICAgICAgZGlzcGxheTogaW5saW5lO1xcbiAgICAgIG1hcmdpbi1yaWdodDogMC4xNWVtOyB9XFxuICAgIC5pbnRybyBoZWFkZXIgaDIge1xcbiAgICAgIGZvbnQtc2l6ZTogNGVtO1xcbiAgICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgICBtaW4td2lkdGg6IDUwdnc7IH1cXG4gICAgLmludHJvIGhlYWRlciAubGluay1saXN0IHtcXG4gICAgICBtYXJnaW4tbGVmdDogMC4xNWVtOyB9XFxuICAgICAgLmludHJvIGhlYWRlciAubGluay1saXN0IGxpIHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIG1hcmdpbi10b3A6IDAuM2VtO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcXG4gICAgICAgIGZvbnQtc2l6ZTogM2VtOyB9XFxuICAgIC5pbnRybyBoZWFkZXIgLnR5cGVkLWN1cnNvciB7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgICBhbmltYXRpb246IGJsaW5rIDJzIGluZmluaXRlOyB9XFxuICAgIC5pbnRybyBoZWFkZXIgYSB7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICBtYXJnaW46IDAgLTAuMmVtO1xcbiAgICAgIHBhZGRpbmc6IDAgMC4yZW07XFxuICAgICAgb3BhY2l0eTogMC45OyB9XFxuICAgICAgLmludHJvIGhlYWRlciBhOmhvdmVyIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7IH1cXG4gICAgICAgIC5pbnRybyBoZWFkZXIgYTpob3Zlcjo6YWZ0ZXIge1xcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICB0b3A6IDEwMCU7XFxuICAgICAgICAgIGxlZnQ6IDAuMmVtO1xcbiAgICAgICAgICByaWdodDogMC4yZW07XFxuICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgICBoZWlnaHQ6IDAuMWVtO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7IH1cXG4gICAgICAuaW50cm8gaGVhZGVyIGE6dmlzaXRlZCB7XFxuICAgICAgICBjb2xvcjogaW5oZXJpdDsgfVxcbiAgLmludHJvIG5hdi5ibG9nLXBvc3QtbGlzdCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNXZ3O1xcbiAgICBib3R0b206IDR2dzsgfVxcbiAgICAuaW50cm8gbmF2LmJsb2ctcG9zdC1saXN0IGgxIHtcXG4gICAgICBmb250LXNpemU6IDRlbTtcXG4gICAgICBvcGFjaXR5OiAwLjg7IH1cXG4gICAgLmludHJvIG5hdi5ibG9nLXBvc3QtbGlzdCBsaSB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDAuMDVlbTtcXG4gICAgICBwYWRkaW5nLXRvcDogMC4zZW07XFxuICAgICAgZm9udC1zaXplOiAyLjVlbTsgfVxcbiAgICAuaW50cm8gbmF2LmJsb2ctcG9zdC1saXN0IGEge1xcbiAgICAgIG9wYWNpdHk6IDAuNztcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG4gICAgICAuaW50cm8gbmF2LmJsb2ctcG9zdC1saXN0IGE6aG92ZXIge1xcbiAgICAgICAgb3BhY2l0eTogMC45O1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cXG4gICAgICAuaW50cm8gbmF2LmJsb2ctcG9zdC1saXN0IGE6dmlzaXRlZCB7XFxuICAgICAgICBjb2xvcjogaW5oZXJpdDsgfVxcbiAgLmludHJvIGFzaWRlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogNXZ3O1xcbiAgICBib3R0b206IDR2dztcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIG9wYWNpdHk6IDAuMzsgfVxcblxcbi5ibG9nIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoOyB9XFxuICAuYmxvZyBoZWFkZXIgc2VjdGlvbiwgLmJsb2cgc2VjdGlvbiBzZWN0aW9uIHtcXG4gICAgbWFyZ2luOiAwIDV2dzsgfVxcbiAgLmJsb2cgaGVhZGVyIHtcXG4gICAgbWFyZ2luLXRvcDogMTV2aDsgfVxcbiAgICAuYmxvZyBoZWFkZXIgaDEge1xcbiAgICAgIGZvbnQtc2l6ZTogMmVtOyB9XFxuXFxuLnJlbmRlci12aWV3IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHotaW5kZXg6IC0xMDAwOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXHJcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXHJcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcclxcbiovXFxyXFxuXFxyXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcclxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXHJcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxyXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcclxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxyXFxuYiwgdSwgaSwgY2VudGVyLFxcclxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxyXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxyXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXFxyXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxcclxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcclxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBmb250LXNpemU6IDEwMCU7XFxyXFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcclxcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXFxyXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBsaW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxuXFxyXFxub2wsIHVsIHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYmxvY2txdW90ZSwgcSB7XFxyXFxuICAgIHF1b3Rlczogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxyXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgY29udGVudDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxudGFibGUge1xcclxcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcbiAgICBib3JkZXItc3BhY2luZzogMDtcXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL21leWVycmVzZXQyLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbihzZWxlY3Rvcikge1xuXHRcdGlmICh0eXBlb2YgbWVtb1tzZWxlY3Rvcl0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGZuLmNhbGwodGhpcywgc2VsZWN0b3IpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmIChzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bc2VsZWN0b3JdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3NlbGVjdG9yXVxuXHR9O1xufSkoZnVuY3Rpb24gKHRhcmdldCkge1xuXHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpXG59KTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24pIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG5cdGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvICsgXCIgXCIgKyBvcHRpb25zLmluc2VydEF0LmJlZm9yZSk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC8pL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=