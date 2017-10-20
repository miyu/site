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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDk0NDQwNjllNzE3MDZmN2E5MjQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsLXZlYzMvc3VidHJhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsLXZlYzMvY3Jvc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RlYnVnLWZuL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsLXZlYzMvbm9ybWFsaXplLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nbC12ZWMzL2RvdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3R5cGVkLmpzL2xpYi90eXBlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvR3JhcGhEZW1vLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9xdWlja2h1bGwzZC9kaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9xdWlja2h1bGwzZC9kaXN0L1F1aWNrSHVsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcG9pbnQtbGluZS1kaXN0YW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcG9pbnQtbGluZS1kaXN0YW5jZS9zcXVhcmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nbC12ZWMzL3NxdWFyZWRMZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dldC1wbGFuZS1ub3JtYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9kZWJ1Zy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3F1aWNraHVsbDNkL2Rpc3QvVmVydGV4TGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcXVpY2todWxsM2QvZGlzdC9WZXJ0ZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3F1aWNraHVsbDNkL2Rpc3QvRmFjZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2wtdmVjMy9hZGQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsLXZlYzMvY29weS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2wtdmVjMy9sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsLXZlYzMvc2NhbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsLXZlYzMvc2NhbGVBbmRBZGQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3F1aWNraHVsbDNkL2Rpc3QvSGFsZkVkZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsLXZlYzMvZGlzdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsLXZlYzMvc3F1YXJlZERpc3RhbmNlLmpzIiwid2VicGFjazovLy8uL3NyYy9Db2xvck1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGUuc2Nzcz8wZjM5Iiwid2VicGFjazovLy8uL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbWV5ZXJyZXNldDIuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyJdLCJuYW1lcyI6W10sIm1h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SyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7c0JBQ2hGLFNBQVMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztnQkFDekUsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztzQkFDaEYsU0FBUyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO2dCQUN6RSxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO3NCQUMvRSxTQUFTLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7YUFDM0UsQ0FBQztRQUNOLENBQUM7UUFFRCxJQUFNLFlBQVksR0FBRyxVQUFDLEtB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Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMzQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7OztBQ3hMQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtB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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsU0FBUztBQUN4QixlQUFlLFNBQVM7QUFDeEI7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxnQ0FBZ0M7QUFDbkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDNVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxXQUFXLEVBQUU7QUFDckQsd0NBQXdDLFdBQVcsRUFBRTs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxzQ0FBc0M7QUFDdEMsR0FBRztBQUNIO0FBQ0EsOERBQThEO0FBQzlEOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkOTQ0NDA2OWU3MTcwNmY3YTkyNCIsIm1vZHVsZS5leHBvcnRzID0gc3VidHJhY3Q7XG5cbi8qKlxuICogU3VidHJhY3RzIHZlY3RvciBiIGZyb20gdmVjdG9yIGFcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIHN1YnRyYWN0KG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gLSBiWzBdXG4gICAgb3V0WzFdID0gYVsxXSAtIGJbMV1cbiAgICBvdXRbMl0gPSBhWzJdIC0gYlsyXVxuICAgIHJldHVybiBvdXRcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nbC12ZWMzL3N1YnRyYWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gY3Jvc3M7XG5cbi8qKlxuICogQ29tcHV0ZXMgdGhlIGNyb3NzIHByb2R1Y3Qgb2YgdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gY3Jvc3Mob3V0LCBhLCBiKSB7XG4gICAgdmFyIGF4ID0gYVswXSwgYXkgPSBhWzFdLCBheiA9IGFbMl0sXG4gICAgICAgIGJ4ID0gYlswXSwgYnkgPSBiWzFdLCBieiA9IGJbMl1cblxuICAgIG91dFswXSA9IGF5ICogYnogLSBheiAqIGJ5XG4gICAgb3V0WzFdID0gYXogKiBieCAtIGF4ICogYnpcbiAgICBvdXRbMl0gPSBheCAqIGJ5IC0gYXkgKiBieFxuICAgIHJldHVybiBvdXRcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nbC12ZWMzL2Nyb3NzLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG5zKSB7XG4gIHZhciBsb2dnZXIgPSAoMCwgX2RlYnVnMi5kZWZhdWx0KShucyk7XG4gIHZhciBzY29wZSA9IHsgbG9nOiBsb2dnZXIgfTtcbiAgZnVuY3Rpb24gaW50ZXJuYWwoZm4pIHtcbiAgICBpZiAoX2RlYnVnMi5kZWZhdWx0LmVuYWJsZWQobnMpKSB7XG4gICAgICBmbi5jYWxsKHNjb3BlLCBsb2dnZXIpO1xuICAgIH1cbiAgfVxuICBpbnRlcm5hbC5sb2dnZXIgPSBsb2dnZXI7XG4gIHJldHVybiBpbnRlcm5hbDtcbn07XG5cbnZhciBfZGVidWcgPSByZXF1aXJlKCdkZWJ1ZycpO1xuXG52YXIgX2RlYnVnMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlYnVnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGVidWctZm4vZGlzdC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IG5vcm1hbGl6ZTtcblxuLyoqXG4gKiBOb3JtYWxpemUgYSB2ZWMzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB2ZWN0b3IgdG8gbm9ybWFsaXplXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZShvdXQsIGEpIHtcbiAgICB2YXIgeCA9IGFbMF0sXG4gICAgICAgIHkgPSBhWzFdLFxuICAgICAgICB6ID0gYVsyXVxuICAgIHZhciBsZW4gPSB4KnggKyB5KnkgKyB6KnpcbiAgICBpZiAobGVuID4gMCkge1xuICAgICAgICAvL1RPRE86IGV2YWx1YXRlIHVzZSBvZiBnbG1faW52c3FydCBoZXJlP1xuICAgICAgICBsZW4gPSAxIC8gTWF0aC5zcXJ0KGxlbilcbiAgICAgICAgb3V0WzBdID0gYVswXSAqIGxlblxuICAgICAgICBvdXRbMV0gPSBhWzFdICogbGVuXG4gICAgICAgIG91dFsyXSA9IGFbMl0gKiBsZW5cbiAgICB9XG4gICAgcmV0dXJuIG91dFxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dsLXZlYzMvbm9ybWFsaXplLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZG90O1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRvdCBwcm9kdWN0IG9mIGEgYW5kIGJcbiAqL1xuZnVuY3Rpb24gZG90KGEsIGIpIHtcbiAgICByZXR1cm4gYVswXSAqIGJbMF0gKyBhWzFdICogYlsxXSArIGFbMl0gKiBiWzJdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2wtdmVjMy9kb3QuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFR5cGVkIGZyb20gJ3R5cGVkLmpzJztcclxuXHJcbmltcG9ydCB7IEdyYXBoRGVtbyB9IGZyb20gJy4vR3JhcGhEZW1vJztcclxuaW1wb3J0IHsgQ29sb3JTY2hlbWUsIENvbG9yTWFuYWdlciB9IGZyb20gJy4vQ29sb3JNYW5hZ2VyJztcclxuY29uc3QgZW5naW5lOiBCb2lsZXJwbGF0ZUVuZ2luZSA9IHdpbmRvdztcclxuY29uc3Qgd2hpdGVDb2xvclNjaGVtZSA9IG5ldyBDb2xvclNjaGVtZShbMCwgMCwgMF0sICdsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAkYTEpIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsICRhMikgMTAwJSknLCB2ID0+IHYsIHYgPT4gdik7XHJcbmNvbnN0IGJsYWNrQ29sb3JTY2hlbWUgPSBuZXcgQ29sb3JTY2hlbWUoWzI1NSwgMjU1LCAyNTVdLCAnbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMCwgMCwgMCwgJGExKSAwJSwgcmdiYSgwLCAwLCAwLCAkYTIpIDEwMCUpJywgdiA9PiB2LCB2ID0+IHYpO1xyXG5jb25zdCBibHVlR3JhZGllbnRDb2xvclNjaGVtZSA9IG5ldyBDb2xvclNjaGVtZShbMjU1LCAyNTUsIDI1NV0sICdkdW1teSwgcmVwbGFjZWQgb24gcmVuZGVyJywgdiA9PiB2LCB2ID0+IHYpO1xyXG5jb25zdCBkYXJrQmx1ZUdyYWRpZW50Q29sb3JTY2hlbWUgPSBuZXcgQ29sb3JTY2hlbWUoWzI1NSwgMjU1LCAyNTVdLCAnbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoNTIsIDczLCA5NCwgJGExKSAwJSwgcmdiYSg0NCwgNjIsIDgwLCAkYTIpIDEwMCUpJywgdiA9PiB2LCB2ID0+IHYpO1xyXG5jb25zdCBncmVlbkdyYWRpZW50Q29sb3JTY2hlbWUgPSBuZXcgQ29sb3JTY2hlbWUoWzI1NSwgMjU1LCAyNTVdLCAnbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoNDYsIDIwNCwgMTEzLCAkYTEpIDAlLCByZ2JhKDM5LCAxNzQsIDk2LCAkYTIpIDEwMCUpJywgdiA9PiB2LCB2ID0+IHYpO1xyXG5jb25zdCBwdXJwbGVHcmFkaWVudENvbG9yU2NoZW1lID0gbmV3IENvbG9yU2NoZW1lKFsyNTUsIDI1NSwgMjU1XSwgJ2xpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDE1NSwgODksIDE4MiwgJGExKSAwJSwgcmdiYSgxNDIsIDY4LCAxNzMsICRhMikgMTAwJSknLCB2ID0+IHYsIHYgPT4gdik7XHJcbmNvbnN0IGNvbG9yTWFuYWdlciA9IG5ldyBDb2xvck1hbmFnZXIoYmxhY2tDb2xvclNjaGVtZSk7XHJcbmNvbG9yTWFuYWdlci5wdXNoKGJsdWVHcmFkaWVudENvbG9yU2NoZW1lKTtcclxuXHJcbmltcG9ydCAnLi4vc3R5bGUuc2Nzcyc7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgbWFpbik7XHJcblxyXG5mdW5jdGlvbiBtYWluKCkge1xyXG4gICAgY29uc3QgZGVtbyA9IG5ldyBHcmFwaERlbW8oKTtcclxuICAgIGVuZ2luZS5pbml0KDEyODAsIDcyMCwgNjApO1xyXG4gICAgZW5naW5lLm9uVGlja0VudGVyKHRpY2spO1xyXG4gICAgZW5naW5lLm9uRnJhbWVFbnRlcihyZW5kZXIpO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZXN0YXJ0JywgaGFuZGxlUmVzaXplKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemVlbmQnLCBoYW5kbGVSZXNpemUpO1xyXG5cclxuICAgIGxldCBpc0ZpcnN0VGljayA9IHRydWU7XHJcbiAgICBmdW5jdGlvbiB0aWNrKGR0OiBudW1iZXIsIHQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmIChpc0ZpcnN0VGljaykge1xyXG4gICAgICAgICAgICBpc0ZpcnN0VGljayA9IGZhbHNlO1xyXG4gICAgICAgICAgICBmaXJzdFRpY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVtby50aWNrKGR0LCB0KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmaXJzdFRpY2soKSB7XHJcbiAgICAgICAgaGFuZGxlUmVzaXplKCk7XHJcbiAgICAgICAgZW5naW5lLmRpc3BsYXlDYW52YXMuY2xhc3NOYW1lID0gJ3JlbmRlci12aWV3JztcclxuXHJcbiAgICAgICAgY29uc3QgdGhyb3dhd2F5ID0gbmV3IFR5cGVkKCcud2hvYW1pJywge1xyXG4gICAgICAgICAgICBzdHJpbmdzOiBbXHJcbiAgICAgICAgICAgICAgICAnU29mdHdhcmUgRW5naW5lZXInLFxyXG4gICAgICAgICAgICAgICAgJ1VXIFNlYXR0bGUgQ1NFIFxcJzE4JyxcclxuICAgICAgICAgICAgICAgICdCdWlsZHMgR2FtZXMnLFxyXG4gICAgICAgICAgICAgICAgJ0J1aWxkcyBSb2JvdHMnLFxyXG4gICAgICAgICAgICAgICAgJ1NvZnR3YXJlIEVuZ2luZWVyJ1xyXG4gICAgICAgICAgICBdLFxyXG4vLyAgICAgICAgICAgIHN0cmluZ3M6IFsnU29mdHdhcmUgRW5naW5lZXInLCAnU3R1ZGVudCBhdCBVVyBTZWF0dGxlJ10sXHJcbiAgICAgICAgICAgIHR5cGVTcGVlZDogNTAsXHJcbiAgICAgICAgICAgIGJhY2tTcGVlZDogMjAsXHJcbiAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgICAgICAgICBjdXJzb3JDaGFyOiAnfCdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VtZS1saW5rJykuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4gY29sb3JNYW5hZ2VyLnB1c2gocHVycGxlR3JhZGllbnRDb2xvclNjaGVtZSkpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bWUtbGluaycpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiBjb2xvck1hbmFnZXIucHVzaChibHVlR3JhZGllbnRDb2xvclNjaGVtZSkpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2l0aHViLWxpbmsnKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiBjb2xvck1hbmFnZXIucHVzaChncmVlbkdyYWRpZW50Q29sb3JTY2hlbWUpKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2l0aHViLWxpbmsnKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4gY29sb3JNYW5hZ2VyLnB1c2goYmx1ZUdyYWRpZW50Q29sb3JTY2hlbWUpKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpbmtlZGluLWxpbmsnKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiBjb2xvck1hbmFnZXIucHVzaChkYXJrQmx1ZUdyYWRpZW50Q29sb3JTY2hlbWUpKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlua2VkaW4tbGluaycpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiBjb2xvck1hbmFnZXIucHVzaChibHVlR3JhZGllbnRDb2xvclNjaGVtZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbmRlcihkdDogbnVtYmVyLCB0OiBudW1iZXIpIHtcclxuICAgICAgICB1cGRhdGVCbHVlR3JhZGllbnRCYWNrZ3JvdW5kKCk7XHJcbiAgICAgICAgY29sb3JNYW5hZ2VyLnJlbmRlcihkdCk7XHJcbiAgICAgICAgZGVtby5yZW5kZXIoZHQsIHQpO1xyXG5cclxuICAgICAgICBjb25zdCBjdHggPSBlbmdpbmUuZGlzcGxheUNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvck1hbmFnZXIuY29tcHV0ZUZvcmVncm91bmRDb2xvcigxKTtcclxuICAgICAgICBjdHguZmlsbFRleHQoYE1URSAke2VuZ2luZS5jb21wdXRlTWVhblRpY2tFeGVjdXRpb25UaW1lKCl9bXNgLCAwLCAxMDApO1xyXG4gICAgICAgIGN0eC5maWxsVGV4dChgTVJFICR7ZW5naW5lLmNvbXB1dGVNZWFuUmVuZGVyRXhlY3V0aW9uVGltZSgpfW1zIGAsIDAsIDExMCk7XHJcbiAgICAgICAgY3R4LmZpbGxUZXh0KGBNUkkgJHtlbmdpbmUuY29tcHV0ZU1lYW5SZW5kZXJJbnRlcnZhbCgpfW1zYCwgMCwgMTIwKTtcclxuICAgICAgICBjdHguZmlsbFRleHQoYEZQUyB+JHsxIC8gZW5naW5lLmNvbXB1dGVNZWFuUmVuZGVySW50ZXJ2YWwoKX1gLCAwLCAxMzApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVJlc2l6ZSgpIHtcclxuICAgICAgICBlbmdpbmUuc2V0RGlzcGxheVNpemUoZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCwgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZUJsdWVHcmFkaWVudEJhY2tncm91bmQoKSB7XHJcbiAgICAgICAgY29uc3Qgc2NyZWVuUmVjdCA9IGVuZ2luZS5nZXRTY3JlZW5SZWN0KCk7XHJcbiAgICAgICAgY29uc3QgZTEgPSBbMCwgc2NyZWVuUmVjdC55ICsgc2NyZWVuUmVjdC5oZWlnaHQgKiAyIC8gNV07XHJcbiAgICAgICAgY29uc3QgZTIgPSBbc2NyZWVuUmVjdC54ICsgc2NyZWVuUmVjdC53aWR0aCwgc2NyZWVuUmVjdC55ICsgc2NyZWVuUmVjdC5oZWlnaHQgKiAzIC8gNV07XHJcbiAgICAgICAgY29uc3QgdGhldGEgPSBlbmdpbmUuYXRhbjIoZW5naW5lLnN1YihlMiwgZTEpKSArIDAuNSAqIE1hdGguUEk7XHJcbiAgICAgICAgYmx1ZUdyYWRpZW50Q29sb3JTY2hlbWUucyA9IGBsaW5lYXItZ3JhZGllbnQoJHt0aGV0YSAqIDE4MCAvIE1hdGguUEl9ZGVnLCByZ2JhKDc3LCAxNTQsIDE4NCwgJGExKSAtNSUsIHJnYmEoNzAsIDU4LCAxMzIsICRhMikgOTUlKWA7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4udHMiLCIvKiFcbiAqIFxuICogICB0eXBlZC5qcyAtIEEgSmF2YVNjcmlwdCBUeXBpbmcgQW5pbWF0aW9uIExpYnJhcnlcbiAqICAgQXV0aG9yOiBNYXR0IEJvbGR0IDxtZUBtYXR0Ym9sZHQuY29tPlxuICogICBWZXJzaW9uOiB2Mi4wLjZcbiAqICAgVXJsOiBodHRwczovL2dpdGh1Yi5jb20vbWF0dGJvbGR0L3R5cGVkLmpzXG4gKiAgIExpY2Vuc2Uocyk6IE1JVFxuICogXG4gKi9cbihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlR5cGVkXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlR5cGVkXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge30sXG4vKioqKioqLyBcdFx0XHRpZDogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRcblx0dmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblx0XG5cdGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXHRcblx0dmFyIF9pbml0aWFsaXplckpzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblx0XG5cdHZhciBfaHRtbFBhcnNlckpzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblx0XG5cdC8qKlxuXHQgKiBXZWxjb21lIHRvIFR5cGVkLmpzIVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZWxlbWVudElkIEhUTUwgZWxlbWVudCBJRCBfT1JfIEhUTUwgZWxlbWVudFxuXHQgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBvcHRpb25zIG9iamVjdFxuXHQgKiBAcmV0dXJucyB7b2JqZWN0fSBhIG5ldyBUeXBlZCBvYmplY3Rcblx0ICovXG5cdFxuXHR2YXIgVHlwZWQgPSAoZnVuY3Rpb24gKCkge1xuXHQgIGZ1bmN0aW9uIFR5cGVkKGVsZW1lbnRJZCwgb3B0aW9ucykge1xuXHQgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFR5cGVkKTtcblx0XG5cdCAgICAvLyBJbml0aWFsaXplIGl0IHVwXG5cdCAgICBfaW5pdGlhbGl6ZXJKcy5pbml0aWFsaXplci5sb2FkKHRoaXMsIG9wdGlvbnMsIGVsZW1lbnRJZCk7XG5cdCAgICAvLyBBbGwgc3lzdGVtcyBnbyFcblx0ICAgIHRoaXMuYmVnaW4oKTtcblx0ICB9XG5cdFxuXHQgIC8qKlxuXHQgICAqIFRvZ2dsZSBzdGFydCgpIGFuZCBzdG9wKCkgb2YgdGhlIFR5cGVkIGluc3RhbmNlXG5cdCAgICogQHB1YmxpY1xuXHQgICAqL1xuXHRcblx0ICBfY3JlYXRlQ2xhc3MoVHlwZWQsIFt7XG5cdCAgICBrZXk6ICd0b2dnbGUnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHRvZ2dsZSgpIHtcblx0ICAgICAgdGhpcy5wYXVzZS5zdGF0dXMgPyB0aGlzLnN0YXJ0KCkgOiB0aGlzLnN0b3AoKTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIFN0b3AgdHlwaW5nIC8gYmFja3NwYWNpbmcgYW5kIGVuYWJsZSBjdXJzb3IgYmxpbmtpbmdcblx0ICAgICAqIEBwdWJsaWNcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ3N0b3AnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3AoKSB7XG5cdCAgICAgIGlmICh0aGlzLnR5cGluZ0NvbXBsZXRlKSByZXR1cm47XG5cdCAgICAgIGlmICh0aGlzLnBhdXNlLnN0YXR1cykgcmV0dXJuO1xuXHQgICAgICB0aGlzLnRvZ2dsZUJsaW5raW5nKHRydWUpO1xuXHQgICAgICB0aGlzLnBhdXNlLnN0YXR1cyA9IHRydWU7XG5cdCAgICAgIHRoaXMub3B0aW9ucy5vblN0b3AodGhpcy5hcnJheVBvcywgdGhpcyk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBTdGFydCB0eXBpbmcgLyBiYWNrc3BhY2luZyBhZnRlciBiZWluZyBzdG9wcGVkXG5cdCAgICAgKiBAcHVibGljXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdzdGFydCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnQoKSB7XG5cdCAgICAgIGlmICh0aGlzLnR5cGluZ0NvbXBsZXRlKSByZXR1cm47XG5cdCAgICAgIGlmICghdGhpcy5wYXVzZS5zdGF0dXMpIHJldHVybjtcblx0ICAgICAgdGhpcy5wYXVzZS5zdGF0dXMgPSBmYWxzZTtcblx0ICAgICAgaWYgKHRoaXMucGF1c2UudHlwZXdyaXRlKSB7XG5cdCAgICAgICAgdGhpcy50eXBld3JpdGUodGhpcy5wYXVzZS5jdXJTdHJpbmcsIHRoaXMucGF1c2UuY3VyU3RyUG9zKTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICB0aGlzLmJhY2tzcGFjZSh0aGlzLnBhdXNlLmN1clN0cmluZywgdGhpcy5wYXVzZS5jdXJTdHJQb3MpO1xuXHQgICAgICB9XG5cdCAgICAgIHRoaXMub3B0aW9ucy5vblN0YXJ0KHRoaXMuYXJyYXlQb3MsIHRoaXMpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogRGVzdHJveSB0aGlzIGluc3RhbmNlIG9mIFR5cGVkXG5cdCAgICAgKiBAcHVibGljXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdkZXN0cm95Jyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuXHQgICAgICB0aGlzLnJlc2V0KGZhbHNlKTtcblx0ICAgICAgdGhpcy5vcHRpb25zLm9uRGVzdHJveSh0aGlzKTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIFJlc2V0IFR5cGVkIGFuZCBvcHRpb25hbGx5IHJlc3RhcnRzXG5cdCAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlc3RhcnRcblx0ICAgICAqIEBwdWJsaWNcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ3Jlc2V0Jyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiByZXNldCgpIHtcblx0ICAgICAgdmFyIHJlc3RhcnQgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB0cnVlIDogYXJndW1lbnRzWzBdO1xuXHRcblx0ICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVvdXQpO1xuXHQgICAgICB0aGlzLnJlcGxhY2VUZXh0KCcnKTtcblx0ICAgICAgaWYgKHRoaXMuY3Vyc29yICYmIHRoaXMuY3Vyc29yLnBhcmVudE5vZGUpIHtcblx0ICAgICAgICB0aGlzLmN1cnNvci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuY3Vyc29yKTtcblx0ICAgICAgICB0aGlzLmN1cnNvciA9IG51bGw7XG5cdCAgICAgIH1cblx0ICAgICAgdGhpcy5zdHJQb3MgPSAwO1xuXHQgICAgICB0aGlzLmFycmF5UG9zID0gMDtcblx0ICAgICAgdGhpcy5jdXJMb29wID0gMDtcblx0ICAgICAgaWYgKHJlc3RhcnQpIHtcblx0ICAgICAgICB0aGlzLmluc2VydEN1cnNvcigpO1xuXHQgICAgICAgIHRoaXMub3B0aW9ucy5vblJlc2V0KHRoaXMpO1xuXHQgICAgICAgIHRoaXMuYmVnaW4oKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogQmVnaW5zIHRoZSB0eXBpbmcgYW5pbWF0aW9uXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnYmVnaW4nLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGJlZ2luKCkge1xuXHQgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXHRcblx0ICAgICAgdGhpcy50eXBpbmdDb21wbGV0ZSA9IGZhbHNlO1xuXHQgICAgICB0aGlzLnNodWZmbGVTdHJpbmdzSWZOZWVkZWQodGhpcyk7XG5cdCAgICAgIHRoaXMuaW5zZXJ0Q3Vyc29yKCk7XG5cdCAgICAgIGlmICh0aGlzLmJpbmRJbnB1dEZvY3VzRXZlbnRzKSB0aGlzLmJpbmRGb2N1c0V2ZW50cygpO1xuXHQgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBzb21lIHRleHQgaW4gdGhlIGVsZW1lbnQsIGlmIHllcyBzdGFydCBieSBiYWNrc3BhY2luZyB0aGUgZGVmYXVsdCBtZXNzYWdlXG5cdCAgICAgICAgaWYgKCFfdGhpcy5jdXJyZW50RWxDb250ZW50IHx8IF90aGlzLmN1cnJlbnRFbENvbnRlbnQubGVuZ3RoID09PSAwKSB7XG5cdCAgICAgICAgICBfdGhpcy50eXBld3JpdGUoX3RoaXMuc3RyaW5nc1tfdGhpcy5zZXF1ZW5jZVtfdGhpcy5hcnJheVBvc11dLCBfdGhpcy5zdHJQb3MpO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAvLyBTdGFydCB0eXBpbmdcblx0ICAgICAgICAgIF90aGlzLmJhY2tzcGFjZShfdGhpcy5jdXJyZW50RWxDb250ZW50LCBfdGhpcy5jdXJyZW50RWxDb250ZW50Lmxlbmd0aCk7XG5cdCAgICAgICAgfVxuXHQgICAgICB9LCB0aGlzLnN0YXJ0RGVsYXkpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogQ2FsbGVkIGZvciBlYWNoIGNoYXJhY3RlciB0eXBlZFxuXHQgICAgICogQHBhcmFtIHtzdHJpbmd9IGN1clN0cmluZyB0aGUgY3VycmVudCBzdHJpbmcgaW4gdGhlIHN0cmluZ3MgYXJyYXlcblx0ICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjdXJTdHJQb3MgdGhlIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGN1clN0cmluZ1xuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ3R5cGV3cml0ZScsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gdHlwZXdyaXRlKGN1clN0cmluZywgY3VyU3RyUG9zKSB7XG5cdCAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXHRcblx0ICAgICAgaWYgKHRoaXMuZmFkZU91dCAmJiB0aGlzLmVsLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmZhZGVPdXRDbGFzcykpIHtcblx0ICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5mYWRlT3V0Q2xhc3MpO1xuXHQgICAgICAgIGlmICh0aGlzLmN1cnNvcikgdGhpcy5jdXJzb3IuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmZhZGVPdXRDbGFzcyk7XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIHZhciBodW1hbml6ZSA9IHRoaXMuaHVtYW5pemVyKHRoaXMudHlwZVNwZWVkKTtcblx0ICAgICAgdmFyIG51bUNoYXJzID0gMTtcblx0XG5cdCAgICAgIGlmICh0aGlzLnBhdXNlLnN0YXR1cyA9PT0gdHJ1ZSkge1xuXHQgICAgICAgIHRoaXMuc2V0UGF1c2VTdGF0dXMoY3VyU3RyaW5nLCBjdXJTdHJQb3MsIHRydWUpO1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfVxuXHRcblx0ICAgICAgLy8gY29udGFpbiB0eXBpbmcgZnVuY3Rpb24gaW4gYSB0aW1lb3V0IGh1bWFuaXplJ2QgZGVsYXlcblx0ICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgLy8gc2tpcCBvdmVyIGFueSBIVE1MIGNoYXJzXG5cdCAgICAgICAgY3VyU3RyUG9zID0gX2h0bWxQYXJzZXJKcy5odG1sUGFyc2VyLnR5cGVIdG1sQ2hhcnMoY3VyU3RyaW5nLCBjdXJTdHJQb3MsIF90aGlzMik7XG5cdFxuXHQgICAgICAgIHZhciBwYXVzZVRpbWUgPSAwO1xuXHQgICAgICAgIHZhciBzdWJzdHIgPSBjdXJTdHJpbmcuc3Vic3RyKGN1clN0clBvcyk7XG5cdCAgICAgICAgLy8gY2hlY2sgZm9yIGFuIGVzY2FwZSBjaGFyYWN0ZXIgYmVmb3JlIGEgcGF1c2UgdmFsdWVcblx0ICAgICAgICAvLyBmb3JtYXQ6IFxcXlxcZCsgLi4gZWc6IF4xMDAwIC4uIHNob3VsZCBiZSBhYmxlIHRvIHByaW50IHRoZSBeIHRvbyB1c2luZyBeXlxuXHQgICAgICAgIC8vIHNpbmdsZSBeIGFyZSByZW1vdmVkIGZyb20gc3RyaW5nXG5cdCAgICAgICAgaWYgKHN1YnN0ci5jaGFyQXQoMCkgPT09ICdeJykge1xuXHQgICAgICAgICAgaWYgKC9eXFxeXFxkKy8udGVzdChzdWJzdHIpKSB7XG5cdCAgICAgICAgICAgIHZhciBza2lwID0gMTsgLy8gc2tpcCBhdCBsZWFzdCAxXG5cdCAgICAgICAgICAgIHN1YnN0ciA9IC9cXGQrLy5leGVjKHN1YnN0cilbMF07XG5cdCAgICAgICAgICAgIHNraXAgKz0gc3Vic3RyLmxlbmd0aDtcblx0ICAgICAgICAgICAgcGF1c2VUaW1lID0gcGFyc2VJbnQoc3Vic3RyKTtcblx0ICAgICAgICAgICAgX3RoaXMyLnRlbXBvcmFyeVBhdXNlID0gdHJ1ZTtcblx0ICAgICAgICAgICAgX3RoaXMyLm9wdGlvbnMub25UeXBpbmdQYXVzZWQoX3RoaXMyLmFycmF5UG9zLCBfdGhpczIpO1xuXHQgICAgICAgICAgICAvLyBzdHJpcCBvdXQgdGhlIGVzY2FwZSBjaGFyYWN0ZXIgYW5kIHBhdXNlIHZhbHVlIHNvIHRoZXkncmUgbm90IHByaW50ZWRcblx0ICAgICAgICAgICAgY3VyU3RyaW5nID0gY3VyU3RyaW5nLnN1YnN0cmluZygwLCBjdXJTdHJQb3MpICsgY3VyU3RyaW5nLnN1YnN0cmluZyhjdXJTdHJQb3MgKyBza2lwKTtcblx0ICAgICAgICAgICAgX3RoaXMyLnRvZ2dsZUJsaW5raW5nKHRydWUpO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0XG5cdCAgICAgICAgLy8gY2hlY2sgZm9yIHNraXAgY2hhcmFjdGVycyBmb3JtYXR0ZWQgYXNcblx0ICAgICAgICAvLyBcInRoaXMgaXMgYSBgc3RyaW5nIHRvIHByaW50IE5PV2AgLi4uXCJcblx0ICAgICAgICBpZiAoc3Vic3RyLmNoYXJBdCgwKSA9PT0gJ2AnKSB7XG5cdCAgICAgICAgICB3aGlsZSAoY3VyU3RyaW5nLnN1YnN0cihjdXJTdHJQb3MgKyBudW1DaGFycykuY2hhckF0KDApICE9PSAnYCcpIHtcblx0ICAgICAgICAgICAgbnVtQ2hhcnMrKztcblx0ICAgICAgICAgICAgaWYgKGN1clN0clBvcyArIG51bUNoYXJzID4gY3VyU3RyaW5nLmxlbmd0aCkgYnJlYWs7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgICAvLyBzdHJpcCBvdXQgdGhlIGVzY2FwZSBjaGFyYWN0ZXJzIGFuZCBhcHBlbmQgYWxsIHRoZSBzdHJpbmcgaW4gYmV0d2VlblxuXHQgICAgICAgICAgdmFyIHN0cmluZ0JlZm9yZVNraXAgPSBjdXJTdHJpbmcuc3Vic3RyaW5nKDAsIGN1clN0clBvcyk7XG5cdCAgICAgICAgICB2YXIgc3RyaW5nU2tpcHBlZCA9IGN1clN0cmluZy5zdWJzdHJpbmcoc3RyaW5nQmVmb3JlU2tpcC5sZW5ndGggKyAxLCBjdXJTdHJQb3MgKyBudW1DaGFycyk7XG5cdCAgICAgICAgICB2YXIgc3RyaW5nQWZ0ZXJTa2lwID0gY3VyU3RyaW5nLnN1YnN0cmluZyhjdXJTdHJQb3MgKyBudW1DaGFycyArIDEpO1xuXHQgICAgICAgICAgY3VyU3RyaW5nID0gc3RyaW5nQmVmb3JlU2tpcCArIHN0cmluZ1NraXBwZWQgKyBzdHJpbmdBZnRlclNraXA7XG5cdCAgICAgICAgICBudW1DaGFycy0tO1xuXHQgICAgICAgIH1cblx0XG5cdCAgICAgICAgLy8gdGltZW91dCBmb3IgYW55IHBhdXNlIGFmdGVyIGEgY2hhcmFjdGVyXG5cdCAgICAgICAgX3RoaXMyLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgIC8vIEFjY291bnRzIGZvciBibGlua2luZyB3aGlsZSBwYXVzZWRcblx0ICAgICAgICAgIF90aGlzMi50b2dnbGVCbGlua2luZyhmYWxzZSk7XG5cdFxuXHQgICAgICAgICAgLy8gV2UncmUgZG9uZSB3aXRoIHRoaXMgc2VudGVuY2UhXG5cdCAgICAgICAgICBpZiAoY3VyU3RyUG9zID09PSBjdXJTdHJpbmcubGVuZ3RoKSB7XG5cdCAgICAgICAgICAgIF90aGlzMi5kb25lVHlwaW5nKGN1clN0cmluZywgY3VyU3RyUG9zKTtcblx0ICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIF90aGlzMi5rZWVwVHlwaW5nKGN1clN0cmluZywgY3VyU3RyUG9zLCBudW1DaGFycyk7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgICAvLyBlbmQgb2YgY2hhcmFjdGVyIHBhdXNlXG5cdCAgICAgICAgICBpZiAoX3RoaXMyLnRlbXBvcmFyeVBhdXNlKSB7XG5cdCAgICAgICAgICAgIF90aGlzMi50ZW1wb3JhcnlQYXVzZSA9IGZhbHNlO1xuXHQgICAgICAgICAgICBfdGhpczIub3B0aW9ucy5vblR5cGluZ1Jlc3VtZWQoX3RoaXMyLmFycmF5UG9zLCBfdGhpczIpO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH0sIHBhdXNlVGltZSk7XG5cdFxuXHQgICAgICAgIC8vIGh1bWFuaXplZCB2YWx1ZSBmb3IgdHlwaW5nXG5cdCAgICAgIH0sIGh1bWFuaXplKTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIENvbnRpbnVlIHRvIHRoZSBuZXh0IHN0cmluZyAmIGJlZ2luIHR5cGluZ1xuXHQgICAgICogQHBhcmFtIHtzdHJpbmd9IGN1clN0cmluZyB0aGUgY3VycmVudCBzdHJpbmcgaW4gdGhlIHN0cmluZ3MgYXJyYXlcblx0ICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjdXJTdHJQb3MgdGhlIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGN1clN0cmluZ1xuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2tlZXBUeXBpbmcnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGtlZXBUeXBpbmcoY3VyU3RyaW5nLCBjdXJTdHJQb3MsIG51bUNoYXJzKSB7XG5cdCAgICAgIC8vIGNhbGwgYmVmb3JlIGZ1bmN0aW9ucyBpZiBhcHBsaWNhYmxlXG5cdCAgICAgIGlmIChjdXJTdHJQb3MgPT09IDApIHtcblx0ICAgICAgICB0aGlzLnRvZ2dsZUJsaW5raW5nKGZhbHNlKTtcblx0ICAgICAgICB0aGlzLm9wdGlvbnMucHJlU3RyaW5nVHlwZWQodGhpcy5hcnJheVBvcywgdGhpcyk7XG5cdCAgICAgIH1cblx0ICAgICAgLy8gc3RhcnQgdHlwaW5nIGVhY2ggbmV3IGNoYXIgaW50byBleGlzdGluZyBzdHJpbmdcblx0ICAgICAgLy8gY3VyU3RyaW5nOiBhcmcsIHRoaXMuZWwuaHRtbDogb3JpZ2luYWwgdGV4dCBpbnNpZGUgZWxlbWVudFxuXHQgICAgICBjdXJTdHJQb3MgKz0gbnVtQ2hhcnM7XG5cdCAgICAgIHZhciBuZXh0U3RyaW5nID0gY3VyU3RyaW5nLnN1YnN0cigwLCBjdXJTdHJQb3MpO1xuXHQgICAgICB0aGlzLnJlcGxhY2VUZXh0KG5leHRTdHJpbmcpO1xuXHQgICAgICAvLyBsb29wIHRoZSBmdW5jdGlvblxuXHQgICAgICB0aGlzLnR5cGV3cml0ZShjdXJTdHJpbmcsIGN1clN0clBvcyk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBXZSdyZSBkb25lIHR5cGluZyBhbGwgc3RyaW5nc1xuXHQgICAgICogQHBhcmFtIHtzdHJpbmd9IGN1clN0cmluZyB0aGUgY3VycmVudCBzdHJpbmcgaW4gdGhlIHN0cmluZ3MgYXJyYXlcblx0ICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjdXJTdHJQb3MgdGhlIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGN1clN0cmluZ1xuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2RvbmVUeXBpbmcnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGRvbmVUeXBpbmcoY3VyU3RyaW5nLCBjdXJTdHJQb3MpIHtcblx0ICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cdFxuXHQgICAgICAvLyBmaXJlcyBjYWxsYmFjayBmdW5jdGlvblxuXHQgICAgICB0aGlzLm9wdGlvbnMub25TdHJpbmdUeXBlZCh0aGlzLmFycmF5UG9zLCB0aGlzKTtcblx0ICAgICAgdGhpcy50b2dnbGVCbGlua2luZyh0cnVlKTtcblx0ICAgICAgLy8gaXMgdGhpcyB0aGUgZmluYWwgc3RyaW5nXG5cdCAgICAgIGlmICh0aGlzLmFycmF5UG9zID09PSB0aGlzLnN0cmluZ3MubGVuZ3RoIC0gMSkge1xuXHQgICAgICAgIC8vIGNhbGxiYWNrIHRoYXQgb2NjdXJzIG9uIHRoZSBsYXN0IHR5cGVkIHN0cmluZ1xuXHQgICAgICAgIHRoaXMuY29tcGxldGUoKTtcblx0ICAgICAgICAvLyBxdWl0IGlmIHdlIHdvbnQgbG9vcCBiYWNrXG5cdCAgICAgICAgaWYgKHRoaXMubG9vcCA9PT0gZmFsc2UgfHwgdGhpcy5jdXJMb29wID09PSB0aGlzLmxvb3BDb3VudCkge1xuXHQgICAgICAgICAgcmV0dXJuO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBfdGhpczMuYmFja3NwYWNlKGN1clN0cmluZywgY3VyU3RyUG9zKTtcblx0ICAgICAgfSwgdGhpcy5iYWNrRGVsYXkpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogQmFja3NwYWNlcyAxIGNoYXJhY3RlciBhdCBhIHRpbWVcblx0ICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjdXJTdHJpbmcgdGhlIGN1cnJlbnQgc3RyaW5nIGluIHRoZSBzdHJpbmdzIGFycmF5XG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gY3VyU3RyUG9zIHRoZSBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBjdXJTdHJpbmdcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdiYWNrc3BhY2UnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGJhY2tzcGFjZShjdXJTdHJpbmcsIGN1clN0clBvcykge1xuXHQgICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblx0XG5cdCAgICAgIGlmICh0aGlzLnBhdXNlLnN0YXR1cyA9PT0gdHJ1ZSkge1xuXHQgICAgICAgIHRoaXMuc2V0UGF1c2VTdGF0dXMoY3VyU3RyaW5nLCBjdXJTdHJQb3MsIHRydWUpO1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfVxuXHQgICAgICBpZiAodGhpcy5mYWRlT3V0KSByZXR1cm4gdGhpcy5pbml0RmFkZU91dCgpO1xuXHRcblx0ICAgICAgdGhpcy50b2dnbGVCbGlua2luZyhmYWxzZSk7XG5cdCAgICAgIHZhciBodW1hbml6ZSA9IHRoaXMuaHVtYW5pemVyKHRoaXMuYmFja1NwZWVkKTtcblx0XG5cdCAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIGN1clN0clBvcyA9IF9odG1sUGFyc2VySnMuaHRtbFBhcnNlci5iYWNrU3BhY2VIdG1sQ2hhcnMoY3VyU3RyaW5nLCBjdXJTdHJQb3MsIF90aGlzNCk7XG5cdCAgICAgICAgLy8gcmVwbGFjZSB0ZXh0IHdpdGggYmFzZSB0ZXh0ICsgdHlwZWQgY2hhcmFjdGVyc1xuXHQgICAgICAgIHZhciBjdXJTdHJpbmdBdFBvc2l0aW9uID0gY3VyU3RyaW5nLnN1YnN0cigwLCBjdXJTdHJQb3MpO1xuXHQgICAgICAgIF90aGlzNC5yZXBsYWNlVGV4dChjdXJTdHJpbmdBdFBvc2l0aW9uKTtcblx0XG5cdCAgICAgICAgLy8gaWYgc21hcnRCYWNrIGlzIGVuYWJsZWRcblx0ICAgICAgICBpZiAoX3RoaXM0LnNtYXJ0QmFja3NwYWNlKSB7XG5cdCAgICAgICAgICAvLyB0aGUgcmVtYWluaW5nIHBhcnQgb2YgdGhlIGN1cnJlbnQgc3RyaW5nIGlzIGVxdWFsIG9mIHRoZSBzYW1lIHBhcnQgb2YgdGhlIG5ldyBzdHJpbmdcblx0ICAgICAgICAgIHZhciBuZXh0U3RyaW5nID0gX3RoaXM0LnN0cmluZ3NbX3RoaXM0LmFycmF5UG9zICsgMV07XG5cdCAgICAgICAgICBpZiAobmV4dFN0cmluZyAmJiBjdXJTdHJpbmdBdFBvc2l0aW9uID09PSBuZXh0U3RyaW5nLnN1YnN0cigwLCBjdXJTdHJQb3MpKSB7XG5cdCAgICAgICAgICAgIF90aGlzNC5zdG9wTnVtID0gY3VyU3RyUG9zO1xuXHQgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgX3RoaXM0LnN0b3BOdW0gPSAwO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0XG5cdCAgICAgICAgLy8gaWYgdGhlIG51bWJlciAoaWQgb2YgY2hhcmFjdGVyIGluIGN1cnJlbnQgc3RyaW5nKSBpc1xuXHQgICAgICAgIC8vIGxlc3MgdGhhbiB0aGUgc3RvcCBudW1iZXIsIGtlZXAgZ29pbmdcblx0ICAgICAgICBpZiAoY3VyU3RyUG9zID4gX3RoaXM0LnN0b3BOdW0pIHtcblx0ICAgICAgICAgIC8vIHN1YnRyYWN0IGNoYXJhY3RlcnMgb25lIGJ5IG9uZVxuXHQgICAgICAgICAgY3VyU3RyUG9zLS07XG5cdCAgICAgICAgICAvLyBsb29wIHRoZSBmdW5jdGlvblxuXHQgICAgICAgICAgX3RoaXM0LmJhY2tzcGFjZShjdXJTdHJpbmcsIGN1clN0clBvcyk7XG5cdCAgICAgICAgfSBlbHNlIGlmIChjdXJTdHJQb3MgPD0gX3RoaXM0LnN0b3BOdW0pIHtcblx0ICAgICAgICAgIC8vIGlmIHRoZSBzdG9wIG51bWJlciBoYXMgYmVlbiByZWFjaGVkLCBpbmNyZWFzZVxuXHQgICAgICAgICAgLy8gYXJyYXkgcG9zaXRpb24gdG8gbmV4dCBzdHJpbmdcblx0ICAgICAgICAgIF90aGlzNC5hcnJheVBvcysrO1xuXHQgICAgICAgICAgLy8gV2hlbiBsb29waW5nLCBiZWdpbiBhdCB0aGUgYmVnaW5uaW5nIGFmdGVyIGJhY2tzcGFjZSBjb21wbGV0ZVxuXHQgICAgICAgICAgaWYgKF90aGlzNC5hcnJheVBvcyA9PT0gX3RoaXM0LnN0cmluZ3MubGVuZ3RoKSB7XG5cdCAgICAgICAgICAgIF90aGlzNC5hcnJheVBvcyA9IDA7XG5cdCAgICAgICAgICAgIF90aGlzNC5vcHRpb25zLm9uTGFzdFN0cmluZ0JhY2tzcGFjZWQoKTtcblx0ICAgICAgICAgICAgX3RoaXM0LnNodWZmbGVTdHJpbmdzSWZOZWVkZWQoKTtcblx0ICAgICAgICAgICAgX3RoaXM0LmJlZ2luKCk7XG5cdCAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICBfdGhpczQudHlwZXdyaXRlKF90aGlzNC5zdHJpbmdzW190aGlzNC5zZXF1ZW5jZVtfdGhpczQuYXJyYXlQb3NdXSwgY3VyU3RyUG9zKTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgICAgLy8gaHVtYW5pemVkIHZhbHVlIGZvciB0eXBpbmdcblx0ICAgICAgfSwgaHVtYW5pemUpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogRnVsbCBhbmltYXRpb24gaXMgY29tcGxldGVcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdjb21wbGV0ZScsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gY29tcGxldGUoKSB7XG5cdCAgICAgIHRoaXMub3B0aW9ucy5vbkNvbXBsZXRlKHRoaXMpO1xuXHQgICAgICBpZiAodGhpcy5sb29wKSB7XG5cdCAgICAgICAgdGhpcy5jdXJMb29wKys7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgdGhpcy50eXBpbmdDb21wbGV0ZSA9IHRydWU7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIEhhcyB0aGUgdHlwaW5nIGJlZW4gc3RvcHBlZFxuXHQgICAgICogQHBhcmFtIHtzdHJpbmd9IGN1clN0cmluZyB0aGUgY3VycmVudCBzdHJpbmcgaW4gdGhlIHN0cmluZ3MgYXJyYXlcblx0ICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjdXJTdHJQb3MgdGhlIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGN1clN0cmluZ1xuXHQgICAgICogQHBhcmFtIHtib29sZWFufSBpc1R5cGluZ1xuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ3NldFBhdXNlU3RhdHVzJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRQYXVzZVN0YXR1cyhjdXJTdHJpbmcsIGN1clN0clBvcywgaXNUeXBpbmcpIHtcblx0ICAgICAgdGhpcy5wYXVzZS50eXBld3JpdGUgPSBpc1R5cGluZztcblx0ICAgICAgdGhpcy5wYXVzZS5jdXJTdHJpbmcgPSBjdXJTdHJpbmc7XG5cdCAgICAgIHRoaXMucGF1c2UuY3VyU3RyUG9zID0gY3VyU3RyUG9zO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogVG9nZ2xlIHRoZSBibGlua2luZyBjdXJzb3Jcblx0ICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNCbGlua2luZ1xuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ3RvZ2dsZUJsaW5raW5nJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiB0b2dnbGVCbGlua2luZyhpc0JsaW5raW5nKSB7XG5cdCAgICAgIGlmICghdGhpcy5jdXJzb3IpIHJldHVybjtcblx0ICAgICAgLy8gaWYgaW4gcGF1c2VkIHN0YXRlLCBkb24ndCB0b2dnbGUgYmxpbmtpbmcgYSAybmQgdGltZVxuXHQgICAgICBpZiAodGhpcy5wYXVzZS5zdGF0dXMpIHJldHVybjtcblx0ICAgICAgaWYgKHRoaXMuY3Vyc29yQmxpbmtpbmcgPT09IGlzQmxpbmtpbmcpIHJldHVybjtcblx0ICAgICAgdGhpcy5jdXJzb3JCbGlua2luZyA9IGlzQmxpbmtpbmc7XG5cdCAgICAgIHZhciBzdGF0dXMgPSBpc0JsaW5raW5nID8gJ2luZmluaXRlJyA6IDA7XG5cdCAgICAgIHRoaXMuY3Vyc29yLnN0eWxlLmFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50ID0gc3RhdHVzO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogU3BlZWQgaW4gTVMgdG8gdHlwZVxuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IHNwZWVkXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnaHVtYW5pemVyJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBodW1hbml6ZXIoc3BlZWQpIHtcblx0ICAgICAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIHNwZWVkIC8gMikgKyBzcGVlZDtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIFNodWZmbGUgdGhlIHNlcXVlbmNlIG9mIHRoZSBzdHJpbmdzIGFycmF5XG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnc2h1ZmZsZVN0cmluZ3NJZk5lZWRlZCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gc2h1ZmZsZVN0cmluZ3NJZk5lZWRlZCgpIHtcblx0ICAgICAgaWYgKCF0aGlzLnNodWZmbGUpIHJldHVybjtcblx0ICAgICAgdGhpcy5zZXF1ZW5jZSA9IHRoaXMuc2VxdWVuY2Uuc29ydChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgLSAwLjU7XG5cdCAgICAgIH0pO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogQWRkcyBhIENTUyBjbGFzcyB0byBmYWRlIG91dCBjdXJyZW50IHN0cmluZ1xuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2luaXRGYWRlT3V0Jyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0RmFkZU91dCgpIHtcblx0ICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cdFxuXHQgICAgICB0aGlzLmVsLmNsYXNzTmFtZSArPSAnICcgKyB0aGlzLmZhZGVPdXRDbGFzcztcblx0ICAgICAgaWYgKHRoaXMuY3Vyc29yKSB0aGlzLmN1cnNvci5jbGFzc05hbWUgKz0gJyAnICsgdGhpcy5mYWRlT3V0Q2xhc3M7XG5cdCAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBfdGhpczUuYXJyYXlQb3MrKztcblx0ICAgICAgICBfdGhpczUucmVwbGFjZVRleHQoJycpO1xuXHRcblx0ICAgICAgICAvLyBSZXNldHMgY3VycmVudCBzdHJpbmcgaWYgZW5kIG9mIGxvb3AgcmVhY2hlZFxuXHQgICAgICAgIGlmIChfdGhpczUuc3RyaW5ncy5sZW5ndGggPiBfdGhpczUuYXJyYXlQb3MpIHtcblx0ICAgICAgICAgIF90aGlzNS50eXBld3JpdGUoX3RoaXM1LnN0cmluZ3NbX3RoaXM1LnNlcXVlbmNlW190aGlzNS5hcnJheVBvc11dLCAwKTtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgX3RoaXM1LnR5cGV3cml0ZShfdGhpczUuc3RyaW5nc1swXSwgMCk7XG5cdCAgICAgICAgICBfdGhpczUuYXJyYXlQb3MgPSAwO1xuXHQgICAgICAgIH1cblx0ICAgICAgfSwgdGhpcy5mYWRlT3V0RGVsYXkpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogUmVwbGFjZXMgY3VycmVudCB0ZXh0IGluIHRoZSBIVE1MIGVsZW1lbnRcblx0ICAgICAqIGRlcGVuZGluZyBvbiBlbGVtZW50IHR5cGVcblx0ICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdyZXBsYWNlVGV4dCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gcmVwbGFjZVRleHQoc3RyKSB7XG5cdCAgICAgIGlmICh0aGlzLmF0dHIpIHtcblx0ICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSh0aGlzLmF0dHIsIHN0cik7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgaWYgKHRoaXMuaXNJbnB1dCkge1xuXHQgICAgICAgICAgdGhpcy5lbC52YWx1ZSA9IHN0cjtcblx0ICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY29udGVudFR5cGUgPT09ICdodG1sJykge1xuXHQgICAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSBzdHI7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIHRoaXMuZWwudGV4dENvbnRlbnQgPSBzdHI7XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBJZiB1c2luZyBpbnB1dCBlbGVtZW50cywgYmluZCBmb2N1cyBpbiBvcmRlciB0b1xuXHQgICAgICogc3RhcnQgYW5kIHN0b3AgdGhlIGFuaW1hdGlvblxuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2JpbmRGb2N1c0V2ZW50cycsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gYmluZEZvY3VzRXZlbnRzKCkge1xuXHQgICAgICB2YXIgX3RoaXM2ID0gdGhpcztcblx0XG5cdCAgICAgIGlmICghdGhpcy5pc0lucHV0KSByZXR1cm47XG5cdCAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBmdW5jdGlvbiAoZSkge1xuXHQgICAgICAgIF90aGlzNi5zdG9wKCk7XG5cdCAgICAgIH0pO1xuXHQgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBmdW5jdGlvbiAoZSkge1xuXHQgICAgICAgIGlmIChfdGhpczYuZWwudmFsdWUgJiYgX3RoaXM2LmVsLnZhbHVlLmxlbmd0aCAhPT0gMCkge1xuXHQgICAgICAgICAgcmV0dXJuO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBfdGhpczYuc3RhcnQoKTtcblx0ICAgICAgfSk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBPbiBpbml0LCBpbnNlcnQgdGhlIGN1cnNvciBlbGVtZW50XG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnaW5zZXJ0Q3Vyc29yJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBpbnNlcnRDdXJzb3IoKSB7XG5cdCAgICAgIGlmICghdGhpcy5zaG93Q3Vyc29yKSByZXR1cm47XG5cdCAgICAgIGlmICh0aGlzLmN1cnNvcikgcmV0dXJuO1xuXHQgICAgICB0aGlzLmN1cnNvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0ICAgICAgdGhpcy5jdXJzb3IuY2xhc3NOYW1lID0gJ3R5cGVkLWN1cnNvcic7XG5cdCAgICAgIHRoaXMuY3Vyc29yLmlubmVySFRNTCA9IHRoaXMuY3Vyc29yQ2hhcjtcblx0ICAgICAgdGhpcy5lbC5wYXJlbnROb2RlICYmIHRoaXMuZWwucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpcy5jdXJzb3IsIHRoaXMuZWwubmV4dFNpYmxpbmcpO1xuXHQgICAgfVxuXHQgIH1dKTtcblx0XG5cdCAgcmV0dXJuIFR5cGVkO1xuXHR9KSgpO1xuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gVHlwZWQ7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgdmFsdWU6IHRydWVcblx0fSk7XG5cdFxuXHR2YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXHRcblx0dmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblx0XG5cdGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblx0XG5cdGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXHRcblx0dmFyIF9kZWZhdWx0c0pzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblx0XG5cdHZhciBfZGVmYXVsdHNKczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZhdWx0c0pzKTtcblx0XG5cdC8qKlxuXHQgKiBJbml0aWFsaXplIHRoZSBUeXBlZCBvYmplY3Rcblx0ICovXG5cdFxuXHR2YXIgSW5pdGlhbGl6ZXIgPSAoZnVuY3Rpb24gKCkge1xuXHQgIGZ1bmN0aW9uIEluaXRpYWxpemVyKCkge1xuXHQgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEluaXRpYWxpemVyKTtcblx0ICB9XG5cdFxuXHQgIF9jcmVhdGVDbGFzcyhJbml0aWFsaXplciwgW3tcblx0ICAgIGtleTogJ2xvYWQnLFxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogTG9hZCB1cCBkZWZhdWx0cyAmIG9wdGlvbnMgb24gdGhlIFR5cGVkIGluc3RhbmNlXG5cdCAgICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmIGluc3RhbmNlIG9mIFR5cGVkXG5cdCAgICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBvcHRpb25zIG9iamVjdFxuXHQgICAgICogQHBhcmFtIHtzdHJpbmd9IGVsZW1lbnRJZCBIVE1MIGVsZW1lbnQgSUQgX09SXyBpbnN0YW5jZSBvZiBIVE1MIGVsZW1lbnRcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0XG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZChzZWxmLCBvcHRpb25zLCBlbGVtZW50SWQpIHtcblx0ICAgICAgLy8gY2hvc2VuIGVsZW1lbnQgdG8gbWFuaXB1bGF0ZSB0ZXh0XG5cdCAgICAgIGlmICh0eXBlb2YgZWxlbWVudElkID09PSAnc3RyaW5nJykge1xuXHQgICAgICAgIHNlbGYuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnRJZCk7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgc2VsZi5lbCA9IGVsZW1lbnRJZDtcblx0ICAgICAgfVxuXHRcblx0ICAgICAgc2VsZi5vcHRpb25zID0gX2V4dGVuZHMoe30sIF9kZWZhdWx0c0pzMlsnZGVmYXVsdCddLCBvcHRpb25zKTtcblx0XG5cdCAgICAgIC8vIGF0dHJpYnV0ZSB0byB0eXBlIGludG9cblx0ICAgICAgc2VsZi5pc0lucHV0ID0gc2VsZi5lbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpbnB1dCc7XG5cdCAgICAgIHNlbGYuYXR0ciA9IHNlbGYub3B0aW9ucy5hdHRyO1xuXHQgICAgICBzZWxmLmJpbmRJbnB1dEZvY3VzRXZlbnRzID0gc2VsZi5vcHRpb25zLmJpbmRJbnB1dEZvY3VzRXZlbnRzO1xuXHRcblx0ICAgICAgLy8gc2hvdyBjdXJzb3Jcblx0ICAgICAgc2VsZi5zaG93Q3Vyc29yID0gc2VsZi5pc0lucHV0ID8gZmFsc2UgOiBzZWxmLm9wdGlvbnMuc2hvd0N1cnNvcjtcblx0XG5cdCAgICAgIC8vIGN1c3RvbSBjdXJzb3Jcblx0ICAgICAgc2VsZi5jdXJzb3JDaGFyID0gc2VsZi5vcHRpb25zLmN1cnNvckNoYXI7XG5cdFxuXHQgICAgICAvLyBJcyB0aGUgY3Vyc29yIGJsaW5raW5nXG5cdCAgICAgIHNlbGYuY3Vyc29yQmxpbmtpbmcgPSB0cnVlO1xuXHRcblx0ICAgICAgLy8gdGV4dCBjb250ZW50IG9mIGVsZW1lbnRcblx0ICAgICAgc2VsZi5lbENvbnRlbnQgPSBzZWxmLmF0dHIgPyBzZWxmLmVsLmdldEF0dHJpYnV0ZShzZWxmLmF0dHIpIDogc2VsZi5lbC50ZXh0Q29udGVudDtcblx0XG5cdCAgICAgIC8vIGh0bWwgb3IgcGxhaW4gdGV4dFxuXHQgICAgICBzZWxmLmNvbnRlbnRUeXBlID0gc2VsZi5vcHRpb25zLmNvbnRlbnRUeXBlO1xuXHRcblx0ICAgICAgLy8gdHlwaW5nIHNwZWVkXG5cdCAgICAgIHNlbGYudHlwZVNwZWVkID0gc2VsZi5vcHRpb25zLnR5cGVTcGVlZDtcblx0XG5cdCAgICAgIC8vIGFkZCBhIGRlbGF5IGJlZm9yZSB0eXBpbmcgc3RhcnRzXG5cdCAgICAgIHNlbGYuc3RhcnREZWxheSA9IHNlbGYub3B0aW9ucy5zdGFydERlbGF5O1xuXHRcblx0ICAgICAgLy8gYmFja3NwYWNpbmcgc3BlZWRcblx0ICAgICAgc2VsZi5iYWNrU3BlZWQgPSBzZWxmLm9wdGlvbnMuYmFja1NwZWVkO1xuXHRcblx0ICAgICAgLy8gb25seSBiYWNrc3BhY2Ugd2hhdCBkb2Vzbid0IG1hdGNoIHRoZSBwcmV2aW91cyBzdHJpbmdcblx0ICAgICAgc2VsZi5zbWFydEJhY2tzcGFjZSA9IHNlbGYub3B0aW9ucy5zbWFydEJhY2tzcGFjZTtcblx0XG5cdCAgICAgIC8vIGFtb3VudCBvZiB0aW1lIHRvIHdhaXQgYmVmb3JlIGJhY2tzcGFjaW5nXG5cdCAgICAgIHNlbGYuYmFja0RlbGF5ID0gc2VsZi5vcHRpb25zLmJhY2tEZWxheTtcblx0XG5cdCAgICAgIC8vIEZhZGUgb3V0IGluc3RlYWQgb2YgYmFja3NwYWNlXG5cdCAgICAgIHNlbGYuZmFkZU91dCA9IHNlbGYub3B0aW9ucy5mYWRlT3V0O1xuXHQgICAgICBzZWxmLmZhZGVPdXRDbGFzcyA9IHNlbGYub3B0aW9ucy5mYWRlT3V0Q2xhc3M7XG5cdCAgICAgIHNlbGYuZmFkZU91dERlbGF5ID0gc2VsZi5vcHRpb25zLmZhZGVPdXREZWxheTtcblx0XG5cdCAgICAgIC8vIHZhcmlhYmxlIHRvIGNoZWNrIHdoZXRoZXIgdHlwaW5nIGlzIGN1cnJlbnRseSBwYXVzZWRcblx0ICAgICAgc2VsZi5pc1BhdXNlZCA9IGZhbHNlO1xuXHRcblx0ICAgICAgLy8gaW5wdXQgc3RyaW5ncyBvZiB0ZXh0XG5cdCAgICAgIHNlbGYuc3RyaW5ncyA9IHNlbGYub3B0aW9ucy5zdHJpbmdzLm1hcChmdW5jdGlvbiAocykge1xuXHQgICAgICAgIHJldHVybiBzLnRyaW0oKTtcblx0ICAgICAgfSk7XG5cdFxuXHQgICAgICAvLyBkaXYgY29udGFpbmluZyBzdHJpbmdzXG5cdCAgICAgIGlmICh0eXBlb2Ygc2VsZi5vcHRpb25zLnN0cmluZ3NFbGVtZW50ID09PSAnc3RyaW5nJykge1xuXHQgICAgICAgIHNlbGYuc3RyaW5nc0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGYub3B0aW9ucy5zdHJpbmdzRWxlbWVudCk7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgc2VsZi5zdHJpbmdzRWxlbWVudCA9IHNlbGYub3B0aW9ucy5zdHJpbmdzRWxlbWVudDtcblx0ICAgICAgfVxuXHRcblx0ICAgICAgaWYgKHNlbGYuc3RyaW5nc0VsZW1lbnQpIHtcblx0ICAgICAgICBzZWxmLnN0cmluZ3MgPSBbXTtcblx0ICAgICAgICBzZWxmLnN0cmluZ3NFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdCAgICAgICAgdmFyIHN0cmluZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoc2VsZi5zdHJpbmdzRWxlbWVudC5jaGlsZHJlbik7XG5cdCAgICAgICAgdmFyIHN0cmluZ3NMZW5ndGggPSBzdHJpbmdzLmxlbmd0aDtcblx0XG5cdCAgICAgICAgaWYgKHN0cmluZ3NMZW5ndGgpIHtcblx0ICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyaW5nc0xlbmd0aDsgaSArPSAxKSB7XG5cdCAgICAgICAgICAgIHZhciBzdHJpbmdFbCA9IHN0cmluZ3NbaV07XG5cdCAgICAgICAgICAgIHNlbGYuc3RyaW5ncy5wdXNoKHN0cmluZ0VsLmlubmVySFRNTC50cmltKCkpO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHRcblx0ICAgICAgLy8gY2hhcmFjdGVyIG51bWJlciBwb3NpdGlvbiBvZiBjdXJyZW50IHN0cmluZ1xuXHQgICAgICBzZWxmLnN0clBvcyA9IDA7XG5cdFxuXHQgICAgICAvLyBjdXJyZW50IGFycmF5IHBvc2l0aW9uXG5cdCAgICAgIHNlbGYuYXJyYXlQb3MgPSAwO1xuXHRcblx0ICAgICAgLy8gaW5kZXggb2Ygc3RyaW5nIHRvIHN0b3AgYmFja3NwYWNpbmcgb25cblx0ICAgICAgc2VsZi5zdG9wTnVtID0gMDtcblx0XG5cdCAgICAgIC8vIExvb3BpbmcgbG9naWNcblx0ICAgICAgc2VsZi5sb29wID0gc2VsZi5vcHRpb25zLmxvb3A7XG5cdCAgICAgIHNlbGYubG9vcENvdW50ID0gc2VsZi5vcHRpb25zLmxvb3BDb3VudDtcblx0ICAgICAgc2VsZi5jdXJMb29wID0gMDtcblx0XG5cdCAgICAgIC8vIHNodWZmbGUgdGhlIHN0cmluZ3Ncblx0ICAgICAgc2VsZi5zaHVmZmxlID0gc2VsZi5vcHRpb25zLnNodWZmbGU7XG5cdCAgICAgIC8vIHRoZSBvcmRlciBvZiBzdHJpbmdzXG5cdCAgICAgIHNlbGYuc2VxdWVuY2UgPSBbXTtcblx0XG5cdCAgICAgIHNlbGYucGF1c2UgPSB7XG5cdCAgICAgICAgc3RhdHVzOiBmYWxzZSxcblx0ICAgICAgICB0eXBld3JpdGU6IHRydWUsXG5cdCAgICAgICAgY3VyU3RyaW5nOiAnJyxcblx0ICAgICAgICBjdXJTdHJQb3M6IDBcblx0ICAgICAgfTtcblx0XG5cdCAgICAgIC8vIFdoZW4gdGhlIHR5cGluZyBpcyBjb21wbGV0ZSAod2hlbiBub3QgbG9vcGVkKVxuXHQgICAgICBzZWxmLnR5cGluZ0NvbXBsZXRlID0gZmFsc2U7XG5cdFxuXHQgICAgICAvLyBTZXQgdGhlIG9yZGVyIGluIHdoaWNoIHRoZSBzdHJpbmdzIGFyZSB0eXBlZFxuXHQgICAgICBmb3IgKHZhciBpIGluIHNlbGYuc3RyaW5ncykge1xuXHQgICAgICAgIHNlbGYuc2VxdWVuY2VbaV0gPSBpO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICAvLyBJZiB0aGVyZSBpcyBzb21lIHRleHQgaW4gdGhlIGVsZW1lbnRcblx0ICAgICAgc2VsZi5jdXJyZW50RWxDb250ZW50ID0gdGhpcy5nZXRDdXJyZW50RWxDb250ZW50KHNlbGYpO1xuXHRcblx0ICAgICAgc2VsZi5hdXRvSW5zZXJ0Q3NzID0gc2VsZi5vcHRpb25zLmF1dG9JbnNlcnRDc3M7XG5cdFxuXHQgICAgICB0aGlzLmFwcGVuZEFuaW1hdGlvbkNzcyhzZWxmKTtcblx0ICAgIH1cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdnZXRDdXJyZW50RWxDb250ZW50Jyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDdXJyZW50RWxDb250ZW50KHNlbGYpIHtcblx0ICAgICAgdmFyIGVsQ29udGVudCA9ICcnO1xuXHQgICAgICBpZiAoc2VsZi5hdHRyKSB7XG5cdCAgICAgICAgZWxDb250ZW50ID0gc2VsZi5lbC5nZXRBdHRyaWJ1dGUoc2VsZi5hdHRyKTtcblx0ICAgICAgfSBlbHNlIGlmIChzZWxmLmlzSW5wdXQpIHtcblx0ICAgICAgICBlbENvbnRlbnQgPSBzZWxmLmVsLnZhbHVlO1xuXHQgICAgICB9IGVsc2UgaWYgKHNlbGYuY29udGVudFR5cGUgPT09ICdodG1sJykge1xuXHQgICAgICAgIGVsQ29udGVudCA9IHNlbGYuZWwuaW5uZXJIVE1MO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIGVsQ29udGVudCA9IHNlbGYuZWwudGV4dENvbnRlbnQ7XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIGVsQ29udGVudDtcblx0ICAgIH1cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdhcHBlbmRBbmltYXRpb25Dc3MnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZEFuaW1hdGlvbkNzcyhzZWxmKSB7XG5cdCAgICAgIGlmICghc2VsZi5hdXRvSW5zZXJ0Q3NzKSB7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICB9XG5cdCAgICAgIGlmICghc2VsZi5zaG93Q3Vyc29yIHx8ICFzZWxmLmZhZGVPdXQpIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIHZhciBjc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXHQgICAgICBjc3MudHlwZSA9ICd0ZXh0L2Nzcyc7XG5cdCAgICAgIHZhciBpbm5lckNzcyA9ICcnO1xuXHQgICAgICBpZiAoc2VsZi5zaG93Q3Vyc29yKSB7XG5cdCAgICAgICAgaW5uZXJDc3MgKz0gJ1xcbiAgICAgICAgLnR5cGVkLWN1cnNvcntcXG4gICAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiB0eXBlZGpzQmxpbmsgMC43cyBpbmZpbml0ZTtcXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHR5cGVkanNCbGluayAwLjdzIGluZmluaXRlO1xcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogdHlwZWRqc0JsaW5rIDAuN3MgaW5maW5pdGU7XFxuICAgICAgICB9XFxuICAgICAgICBAa2V5ZnJhbWVzIHR5cGVkanNCbGlua3tcXG4gICAgICAgICAgNTAlIHsgb3BhY2l0eTogMC4wOyB9XFxuICAgICAgICB9XFxuICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgdHlwZWRqc0JsaW5re1xcbiAgICAgICAgICAwJSB7IG9wYWNpdHk6IDE7IH1cXG4gICAgICAgICAgNTAlIHsgb3BhY2l0eTogMC4wOyB9XFxuICAgICAgICAgIDEwMCUgeyBvcGFjaXR5OiAxOyB9XFxuICAgICAgICB9XFxuICAgICAgJztcblx0ICAgICAgfVxuXHQgICAgICBpZiAoc2VsZi5mYWRlT3V0KSB7XG5cdCAgICAgICAgaW5uZXJDc3MgKz0gJ1xcbiAgICAgICAgLnR5cGVkLWZhZGUtb3V0e1xcbiAgICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4yNXM7XFxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiAwO1xcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogMDtcXG4gICAgICAgIH1cXG4gICAgICAnO1xuXHQgICAgICB9XG5cdCAgICAgIGlmIChjc3MubGVuZ3RoID09PSAwKSB7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICB9XG5cdCAgICAgIGNzcy5pbm5lckhUTUwgPSBpbm5lckNzcztcblx0ICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChjc3MpO1xuXHQgICAgfVxuXHQgIH1dKTtcblx0XG5cdCAgcmV0dXJuIEluaXRpYWxpemVyO1xuXHR9KSgpO1xuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gSW5pdGlhbGl6ZXI7XG5cdHZhciBpbml0aWFsaXplciA9IG5ldyBJbml0aWFsaXplcigpO1xuXHRleHBvcnRzLmluaXRpYWxpemVyID0gaW5pdGlhbGl6ZXI7XG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8qKlxuXHQgKiBEZWZhdWx0cyAmIG9wdGlvbnNcblx0ICogQHJldHVybnMge29iamVjdH0gVHlwZWQgZGVmYXVsdHMgJiBvcHRpb25zXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdFxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgdmFsdWU6IHRydWVcblx0fSk7XG5cdHZhciBkZWZhdWx0cyA9IHtcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge2FycmF5fSBzdHJpbmdzIHN0cmluZ3MgdG8gYmUgdHlwZWRcblx0ICAgKiBAcHJvcGVydHkge3N0cmluZ30gc3RyaW5nc0VsZW1lbnQgSUQgb2YgZWxlbWVudCBjb250YWluaW5nIHN0cmluZyBjaGlsZHJlblxuXHQgICAqL1xuXHQgIHN0cmluZ3M6IFsnVGhlc2UgYXJlIHRoZSBkZWZhdWx0IHZhbHVlcy4uLicsICdZb3Uga25vdyB3aGF0IHlvdSBzaG91bGQgZG8/JywgJ1VzZSB5b3VyIG93biEnLCAnSGF2ZSBhIGdyZWF0IGRheSEnXSxcblx0ICBzdHJpbmdzRWxlbWVudDogbnVsbCxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtudW1iZXJ9IHR5cGVTcGVlZCB0eXBlIHNwZWVkIGluIG1pbGxpc2Vjb25kc1xuXHQgICAqL1xuXHQgIHR5cGVTcGVlZDogMCxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtudW1iZXJ9IHN0YXJ0RGVsYXkgdGltZSBiZWZvcmUgdHlwaW5nIHN0YXJ0cyBpbiBtaWxsaXNlY29uZHNcblx0ICAgKi9cblx0ICBzdGFydERlbGF5OiAwLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge251bWJlcn0gYmFja1NwZWVkIGJhY2tzcGFjaW5nIHNwZWVkIGluIG1pbGxpc2Vjb25kc1xuXHQgICAqL1xuXHQgIGJhY2tTcGVlZDogMCxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtib29sZWFufSBzbWFydEJhY2tzcGFjZSBvbmx5IGJhY2tzcGFjZSB3aGF0IGRvZXNuJ3QgbWF0Y2ggdGhlIHByZXZpb3VzIHN0cmluZ1xuXHQgICAqL1xuXHQgIHNtYXJ0QmFja3NwYWNlOiB0cnVlLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHNodWZmbGUgc2h1ZmZsZSB0aGUgc3RyaW5nc1xuXHQgICAqL1xuXHQgIHNodWZmbGU6IGZhbHNlLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge251bWJlcn0gYmFja0RlbGF5IHRpbWUgYmVmb3JlIGJhY2tzcGFjaW5nIGluIG1pbGxpc2Vjb25kc1xuXHQgICAqL1xuXHQgIGJhY2tEZWxheTogNzAwLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGZhZGVPdXQgRmFkZSBvdXQgaW5zdGVhZCBvZiBiYWNrc3BhY2Vcblx0ICAgKiBAcHJvcGVydHkge3N0cmluZ30gZmFkZU91dENsYXNzIGNzcyBjbGFzcyBmb3IgZmFkZSBhbmltYXRpb25cblx0ICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGZhZGVPdXREZWxheSBGYWRlIG91dCBkZWxheSBpbiBtaWxsaXNlY29uZHNcblx0ICAgKi9cblx0ICBmYWRlT3V0OiBmYWxzZSxcblx0ICBmYWRlT3V0Q2xhc3M6ICd0eXBlZC1mYWRlLW91dCcsXG5cdCAgZmFkZU91dERlbGF5OiA1MDAsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbG9vcCBsb29wIHN0cmluZ3Ncblx0ICAgKiBAcHJvcGVydHkge251bWJlcn0gbG9vcENvdW50IGFtb3VudCBvZiBsb29wc1xuXHQgICAqL1xuXHQgIGxvb3A6IGZhbHNlLFxuXHQgIGxvb3BDb3VudDogSW5maW5pdHksXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gc2hvd0N1cnNvciBzaG93IGN1cnNvclxuXHQgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBjdXJzb3JDaGFyIGNoYXJhY3RlciBmb3IgY3Vyc29yXG5cdCAgICogQHByb3BlcnR5IHtib29sZWFufSBhdXRvSW5zZXJ0Q3NzIGluc2VydCBDU1MgZm9yIGN1cnNvciBhbmQgZmFkZU91dCBpbnRvIEhUTUwgPGhlYWQ+XG5cdCAgICovXG5cdCAgc2hvd0N1cnNvcjogdHJ1ZSxcblx0ICBjdXJzb3JDaGFyOiAnfCcsXG5cdCAgYXV0b0luc2VydENzczogdHJ1ZSxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtzdHJpbmd9IGF0dHIgYXR0cmlidXRlIGZvciB0eXBpbmdcblx0ICAgKiBFeDogaW5wdXQgcGxhY2Vob2xkZXIsIHZhbHVlLCBvciBqdXN0IEhUTUwgdGV4dFxuXHQgICAqL1xuXHQgIGF0dHI6IG51bGwsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gYmluZElucHV0Rm9jdXNFdmVudHMgYmluZCB0byBmb2N1cyBhbmQgYmx1ciBpZiBlbCBpcyB0ZXh0IGlucHV0XG5cdCAgICovXG5cdCAgYmluZElucHV0Rm9jdXNFdmVudHM6IGZhbHNlLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge3N0cmluZ30gY29udGVudFR5cGUgJ2h0bWwnIG9yICdudWxsJyBmb3IgcGxhaW50ZXh0XG5cdCAgICovXG5cdCAgY29udGVudFR5cGU6ICdodG1sJyxcblx0XG5cdCAgLyoqXG5cdCAgICogQWxsIHR5cGluZyBpcyBjb21wbGV0ZVxuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBvbkNvbXBsZXRlOiBmdW5jdGlvbiBvbkNvbXBsZXRlKHNlbGYpIHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBCZWZvcmUgZWFjaCBzdHJpbmcgaXMgdHlwZWRcblx0ICAgKiBAcGFyYW0ge251bWJlcn0gYXJyYXlQb3Ncblx0ICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmXG5cdCAgICovXG5cdCAgcHJlU3RyaW5nVHlwZWQ6IGZ1bmN0aW9uIHByZVN0cmluZ1R5cGVkKGFycmF5UG9zLCBzZWxmKSB7fSxcblx0XG5cdCAgLyoqXG5cdCAgICogQWZ0ZXIgZWFjaCBzdHJpbmcgaXMgdHlwZWRcblx0ICAgKiBAcGFyYW0ge251bWJlcn0gYXJyYXlQb3Ncblx0ICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmXG5cdCAgICovXG5cdCAgb25TdHJpbmdUeXBlZDogZnVuY3Rpb24gb25TdHJpbmdUeXBlZChhcnJheVBvcywgc2VsZikge30sXG5cdFxuXHQgIC8qKlxuXHQgICAqIER1cmluZyBsb29waW5nLCBhZnRlciBsYXN0IHN0cmluZyBpcyB0eXBlZFxuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBvbkxhc3RTdHJpbmdCYWNrc3BhY2VkOiBmdW5jdGlvbiBvbkxhc3RTdHJpbmdCYWNrc3BhY2VkKHNlbGYpIHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBUeXBpbmcgaGFzIGJlZW4gc3RvcHBlZFxuXHQgICAqIEBwYXJhbSB7bnVtYmVyfSBhcnJheVBvc1xuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBvblR5cGluZ1BhdXNlZDogZnVuY3Rpb24gb25UeXBpbmdQYXVzZWQoYXJyYXlQb3MsIHNlbGYpIHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBUeXBpbmcgaGFzIGJlZW4gc3RhcnRlZCBhZnRlciBiZWluZyBzdG9wcGVkXG5cdCAgICogQHBhcmFtIHtudW1iZXJ9IGFycmF5UG9zXG5cdCAgICogQHBhcmFtIHtUeXBlZH0gc2VsZlxuXHQgICAqL1xuXHQgIG9uVHlwaW5nUmVzdW1lZDogZnVuY3Rpb24gb25UeXBpbmdSZXN1bWVkKGFycmF5UG9zLCBzZWxmKSB7fSxcblx0XG5cdCAgLyoqXG5cdCAgICogQWZ0ZXIgcmVzZXRcblx0ICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmXG5cdCAgICovXG5cdCAgb25SZXNldDogZnVuY3Rpb24gb25SZXNldChzZWxmKSB7fSxcblx0XG5cdCAgLyoqXG5cdCAgICogQWZ0ZXIgc3RvcFxuXHQgICAqIEBwYXJhbSB7bnVtYmVyfSBhcnJheVBvc1xuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBvblN0b3A6IGZ1bmN0aW9uIG9uU3RvcChhcnJheVBvcywgc2VsZikge30sXG5cdFxuXHQgIC8qKlxuXHQgICAqIEFmdGVyIHN0YXJ0XG5cdCAgICogQHBhcmFtIHtudW1iZXJ9IGFycmF5UG9zXG5cdCAgICogQHBhcmFtIHtUeXBlZH0gc2VsZlxuXHQgICAqL1xuXHQgIG9uU3RhcnQ6IGZ1bmN0aW9uIG9uU3RhcnQoYXJyYXlQb3MsIHNlbGYpIHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBBZnRlciBkZXN0cm95XG5cdCAgICogQHBhcmFtIHtUeXBlZH0gc2VsZlxuXHQgICAqL1xuXHQgIG9uRGVzdHJveTogZnVuY3Rpb24gb25EZXN0cm95KHNlbGYpIHt9XG5cdH07XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBkZWZhdWx0cztcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdFxuXHQvKipcblx0ICogVE9ETzogVGhlc2UgbWV0aG9kcyBjYW4gcHJvYmFibHkgYmUgY29tYmluZWQgc29tZWhvd1xuXHQgKiBQYXJzZSBIVE1MIHRhZ3MgJiBIVE1MIENoYXJhY3RlcnNcblx0ICovXG5cdFxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgdmFsdWU6IHRydWVcblx0fSk7XG5cdFxuXHR2YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXHRcblx0ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cdFxuXHR2YXIgSFRNTFBhcnNlciA9IChmdW5jdGlvbiAoKSB7XG5cdCAgZnVuY3Rpb24gSFRNTFBhcnNlcigpIHtcblx0ICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIVE1MUGFyc2VyKTtcblx0ICB9XG5cdFxuXHQgIF9jcmVhdGVDbGFzcyhIVE1MUGFyc2VyLCBbe1xuXHQgICAga2V5OiAndHlwZUh0bWxDaGFycycsXG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBUeXBlIEhUTUwgdGFncyAmIEhUTUwgQ2hhcmFjdGVyc1xuXHQgICAgICogQHBhcmFtIHtzdHJpbmd9IGN1clN0cmluZyBDdXJyZW50IHN0cmluZ1xuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IGN1clN0clBvcyBQb3NpdGlvbiBpbiBjdXJyZW50IHN0cmluZ1xuXHQgICAgICogQHBhcmFtIHtUeXBlZH0gc2VsZiBpbnN0YW5jZSBvZiBUeXBlZFxuXHQgICAgICogQHJldHVybnMge251bWJlcn0gYSBuZXcgc3RyaW5nIHBvc2l0aW9uXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHR5cGVIdG1sQ2hhcnMoY3VyU3RyaW5nLCBjdXJTdHJQb3MsIHNlbGYpIHtcblx0ICAgICAgaWYgKHNlbGYuY29udGVudFR5cGUgIT09ICdodG1sJykgcmV0dXJuIGN1clN0clBvcztcblx0ICAgICAgdmFyIGN1ckNoYXIgPSBjdXJTdHJpbmcuc3Vic3RyKGN1clN0clBvcykuY2hhckF0KDApO1xuXHQgICAgICBpZiAoY3VyQ2hhciA9PT0gJzwnIHx8IGN1ckNoYXIgPT09ICcmJykge1xuXHQgICAgICAgIHZhciBlbmRUYWcgPSAnJztcblx0ICAgICAgICBpZiAoY3VyQ2hhciA9PT0gJzwnKSB7XG5cdCAgICAgICAgICBlbmRUYWcgPSAnPic7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIGVuZFRhZyA9ICc7Jztcblx0ICAgICAgICB9XG5cdCAgICAgICAgd2hpbGUgKGN1clN0cmluZy5zdWJzdHIoY3VyU3RyUG9zICsgMSkuY2hhckF0KDApICE9PSBlbmRUYWcpIHtcblx0ICAgICAgICAgIGN1clN0clBvcysrO1xuXHQgICAgICAgICAgaWYgKGN1clN0clBvcyArIDEgPiBjdXJTdHJpbmcubGVuZ3RoKSB7XG5cdCAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgICBjdXJTdHJQb3MrKztcblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gY3VyU3RyUG9zO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogQmFja3NwYWNlIEhUTUwgdGFncyBhbmQgSFRNTCBDaGFyYWN0ZXJzXG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gY3VyU3RyaW5nIEN1cnJlbnQgc3RyaW5nXG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gY3VyU3RyUG9zIFBvc2l0aW9uIGluIGN1cnJlbnQgc3RyaW5nXG5cdCAgICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmIGluc3RhbmNlIG9mIFR5cGVkXG5cdCAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSBhIG5ldyBzdHJpbmcgcG9zaXRpb25cblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdiYWNrU3BhY2VIdG1sQ2hhcnMnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGJhY2tTcGFjZUh0bWxDaGFycyhjdXJTdHJpbmcsIGN1clN0clBvcywgc2VsZikge1xuXHQgICAgICBpZiAoc2VsZi5jb250ZW50VHlwZSAhPT0gJ2h0bWwnKSByZXR1cm4gY3VyU3RyUG9zO1xuXHQgICAgICB2YXIgY3VyQ2hhciA9IGN1clN0cmluZy5zdWJzdHIoY3VyU3RyUG9zKS5jaGFyQXQoMCk7XG5cdCAgICAgIGlmIChjdXJDaGFyID09PSAnPicgfHwgY3VyQ2hhciA9PT0gJzsnKSB7XG5cdCAgICAgICAgdmFyIGVuZFRhZyA9ICcnO1xuXHQgICAgICAgIGlmIChjdXJDaGFyID09PSAnPicpIHtcblx0ICAgICAgICAgIGVuZFRhZyA9ICc8Jztcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgZW5kVGFnID0gJyYnO1xuXHQgICAgICAgIH1cblx0ICAgICAgICB3aGlsZSAoY3VyU3RyaW5nLnN1YnN0cihjdXJTdHJQb3MgLSAxKS5jaGFyQXQoMCkgIT09IGVuZFRhZykge1xuXHQgICAgICAgICAgY3VyU3RyUG9zLS07XG5cdCAgICAgICAgICBpZiAoY3VyU3RyUG9zIDwgMCkge1xuXHQgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgICAgY3VyU3RyUG9zLS07XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIGN1clN0clBvcztcblx0ICAgIH1cblx0ICB9XSk7XG5cdFxuXHQgIHJldHVybiBIVE1MUGFyc2VyO1xuXHR9KSgpO1xuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gSFRNTFBhcnNlcjtcblx0dmFyIGh0bWxQYXJzZXIgPSBuZXcgSFRNTFBhcnNlcigpO1xuXHRleHBvcnRzLmh0bWxQYXJzZXIgPSBodG1sUGFyc2VyO1xuXG4vKioqLyB9KVxuLyoqKioqKi8gXSlcbn0pO1xuO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3R5cGVkLmpzL2xpYi90eXBlZC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgcWggZnJvbSAncXVpY2todWxsM2QnO1xyXG5cclxudHlwZSBQb2ludDMgPSBudW1iZXJbXTtcclxuY29uc3QgZTogQm9pbGVycGxhdGVFbmdpbmUgPSB3aW5kb3c7XHJcbmNvbnN0IGVudW1lcmF0ZSA9IGUuZW51bWVyYXRlO1xyXG5jb25zdCB6b29tID0gMS41O1xyXG5cclxuZXhwb3J0IGNsYXNzIEdyYXBoRGVtbyB7XHJcbiAgICBzdGFydHM6IFBvaW50M1tdO1xyXG4gICAgcG9pbnRzOiBQb2ludDNbXTtcclxuICAgIGRlc3QxOiBQb2ludDNbXTtcclxuICAgIGRlc3QyOiBQb2ludDNbXTtcclxuICAgIGhpZ2hsaWdodHM6IG51bWJlcltdW107XHJcblxyXG4gICAgb2Zmc2NyZWVuUmVuZGVyQ29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vIHdvcmxkIGlzIHVuaXQgY3ViZVxyXG4gICAgICAgIGNvbnN0IG4gPSAyNDtcclxuICAgICAgICB0aGlzLnN0YXJ0cyA9IGVudW1lcmF0ZShuKS5tYXAoKCkgPT4gdGhpcy5yYW5kb21TcGhlcmVQb2ludCgwLCAwLCAwLCAxKSk7XHJcbiAgICAgICAgdGhpcy5wb2ludHMgPSB0aGlzLnN0YXJ0cy5tYXAocCA9PiBwLm1hcCh2ID0+IHYpKTtcclxuICAgICAgICB0aGlzLmRlc3QxID0gZW51bWVyYXRlKG4pLm1hcCgoKSA9PiB0aGlzLnJhbmRvbVNwaGVyZVBvaW50KDAsIDAsIDAsIDEpKTtcclxuICAgICAgICB0aGlzLmRlc3QyID0gZW51bWVyYXRlKG4pLm1hcCgoKSA9PiB0aGlzLnJhbmRvbVNwaGVyZVBvaW50KDAsIDAsIDAsIDEpKTtcclxuXHJcbiAgICAgICAgdGhpcy5vZmZzY3JlZW5SZW5kZXJDb250ZXh0ID0gZS5jcmVhdGVEaXNwbGF5U2l6ZWRSZW5kZXJDb250ZXh0KCk7XHJcbiAgICAgICAgdGhpcy5oaWdobGlnaHRzID0gZW51bWVyYXRlKDMpLm1hcChpID0+IFtpLCAwXSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGljayAoZHQ6IG51bWJlciwgdDogbnVtYmVyKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBwID0gdGhpcy5wb2ludHNbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IGQxID0gdGhpcy5kZXN0MVtpXTtcclxuICAgICAgICAgICAgY29uc3QgZDIgPSB0aGlzLmRlc3QyW2ldO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGlzdFBkMSA9IGUuZGlzdChwLCBkMSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpc3RQZDIgPSBlLmRpc3QocCwgZDIpO1xyXG4gICAgICAgICAgICBjb25zdCBkMlN0cmVuZ3RoID0gMC41ICogKGRpc3RQZDIgLyAoZGlzdFBkMSArIGRpc3RQZDIpKTtcclxuICAgICAgICAgICAgY29uc3QgZGVsdGEgPSBlLmxlcnAoZS5ub3JtYWxpemUoZS5zdWIoZDEsIHApKSwgZS5ub3JtYWxpemUoZS5zdWIoZDIsIHApKSwgZDJTdHJlbmd0aCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGlzdFBkMSA8IDAuMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydHNbaV0gPSBwLm1hcCh2ID0+IHYpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXN0MVtpXSA9IGQyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXN0MltpXSA9IHRoaXMucmFuZG9tU3BoZXJlUG9pbnQoMCwgMCwgMCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMucG9pbnRzW2ldID0gZS5hZGQocCwgZS5tdWwoZGVsdGEsIDAuMSAqIGR0KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihkdDogbnVtYmVyLCB0OiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBzY3JlZW5SZWN0ID0gZS5nZXRTY3JlZW5SZWN0KCk7XHJcbiAgICAgICAgZS5jbGVhcigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IG9zY2lsbGF0ZVBvaW50ID0gKHdvcmxkOiBQb2ludDMpOiBQb2ludDMgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBvc2NpbGxhdGUgPSAyO1xyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgd29ybGRbMF0gKyBvc2NpbGxhdGUgKiAwLjAwNiAqIE1hdGguc2luKDEuMCAqIHQgKyB3b3JsZFsxXSAqIDQuMCArIHdvcmxkWzJdICogMi4zKVxyXG4gICAgICAgICAgICAgICAgKyBvc2NpbGxhdGUgKiAwLjAxMCAqIE1hdGguc2luKDAuMiAqIHQgKyB3b3JsZFsxXSAqIDIuNyArIHdvcmxkWzJdICogMy4wKSxcclxuICAgICAgICAgICAgICAgIHdvcmxkWzFdICsgb3NjaWxsYXRlICogMC4wMTIgKiBNYXRoLnNpbigwLjggKiB0ICsgd29ybGRbMl0gKiA0LjAgKyB3b3JsZFswXSAqIDIuMylcclxuICAgICAgICAgICAgICAgICsgb3NjaWxsYXRlICogMC4wMTQgKiBNYXRoLnNpbigwLjMgKiB0ICsgd29ybGRbMl0gKiAyLjcgKyB3b3JsZFswXSAqIDMuMCksXHJcbiAgICAgICAgICAgICAgICB3b3JsZFsyXSArIG9zY2lsbGF0ZSAqIDAuMDEgKiBNYXRoLnNpbigwLjUgKiB0ICsgd29ybGRbMF0gKiA0LjAgKyB3b3JsZFsxXSAqIDIuMylcclxuICAgICAgICAgICAgICAgICsgb3NjaWxsYXRlICogMC4wMSAqIE1hdGguc2luKDAuMiAqIHQgKyB3b3JsZFswXSAqIDIuNyArIHdvcmxkWzFdICogMy4wKVxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcG9pbnRUb1NjYWxlID0gKHdvcmxkOiBQb2ludDMpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZGlzdCA9ICh3b3JsZFsyXSArIDEpIC8gMjsgLy8gMCA9IG5lYXIsIDEgPSBmYXJcclxuICAgICAgICAgICAgcmV0dXJuICgxIC0gZGlzdCkgKiAwLjkgKyAwLjE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwb2ludFRvU2NyZWVuID0gKHdvcmxkOiBQb2ludDMpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2NhbGUgPSBwb2ludFRvU2NhbGUod29ybGQpO1xyXG4gICAgICAgICAgICBjb25zdCBzbWFsbGVyRGltZW5zaW9uID0gTWF0aC5taW4oc2NyZWVuUmVjdC53aWR0aCwgc2NyZWVuUmVjdC5oZWlnaHQpO1xyXG4gICAgICAgICAgICBjb25zdCBzY3JlZW5TY2FsZSA9IFtzbWFsbGVyRGltZW5zaW9uLCBzbWFsbGVyRGltZW5zaW9uXTtcclxuICAgICAgICAgICAgY29uc3Qgc2NyZWVuT2Zmc2V0ID0gZS5tdWwoZS5zdWIoW3NjcmVlblJlY3Qud2lkdGgsIHNjcmVlblJlY3QuaGVpZ2h0XSwgc2NyZWVuU2NhbGUpLCAwLjUpO1xyXG4gICAgICAgICAgICByZXR1cm4gZS5hZGQoc2NyZWVuT2Zmc2V0LCBlLmNtdWwoc2NyZWVuU2NhbGUsIFtcclxuICAgICAgICAgICAgICAgICh3b3JsZFswXSAqIHNjYWxlICogem9vbSArIDEpIC8gMixcclxuICAgICAgICAgICAgICAgICh3b3JsZFsxXSAqIHNjYWxlICogem9vbSArIDEpIC8gMlxyXG4gICAgICAgICAgICBdKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwb2ludFRvU2NyZWVuUmVjdCA9ICh3b3JsZDogUG9pbnQzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjYWxlID0gcG9pbnRUb1NjYWxlKHdvcmxkKTtcclxuICAgICAgICAgICAgY29uc3QgY2VudGVyID0gcG9pbnRUb1NjcmVlbih3b3JsZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvaW50U2NhbGUgPSA1O1xyXG4gICAgICAgICAgICByZXR1cm4gZS5tYWtlUmVjdGFuZ2xlKGNlbnRlclswXSAtIHBvaW50U2NhbGUgKiBzY2FsZSwgY2VudGVyWzFdIC0gcG9pbnRTY2FsZSAqIHNjYWxlLCBwb2ludFNjYWxlICogMiAqIHNjYWxlLCBwb2ludFNjYWxlICogMiAqIHNjYWxlKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBvc2NpbGxhdGVkUG9pbnRzID0gdGhpcy5wb2ludHMubWFwKG9zY2lsbGF0ZVBvaW50KTtcclxuICAgICAgICBjb25zdCBzY3JlZW5Qb2ludHMgPSBvc2NpbGxhdGVkUG9pbnRzLm1hcChwb2ludFRvU2NyZWVuKTtcclxuICAgICAgICBjb25zdCBzY3JlZW5SZWN0cyA9IG9zY2lsbGF0ZWRQb2ludHMubWFwKHBvaW50VG9TY3JlZW5SZWN0KTtcclxuICAgICAgICBjb25zdCBhbHBoYXMgPSBvc2NpbGxhdGVkUG9pbnRzLm1hcChwID0+IE1hdGgucG93KHBvaW50VG9TY2FsZShwKSwgMikgKiAwLjM4ICsgMC4wMik7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlbmRlckVkZ2UgPSAoaTogbnVtYmVyLCBqOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcDEgPSBzY3JlZW5Qb2ludHNbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IHAyID0gc2NyZWVuUG9pbnRzW2pdO1xyXG4gICAgICAgICAgICBjb25zdCByMSA9IHNjcmVlblJlY3RzW2ldO1xyXG4gICAgICAgICAgICBjb25zdCByMiA9IHNjcmVlblJlY3RzW2pdO1xyXG4gICAgICAgICAgICBjb25zdCBwZXJwID0gZS5ub3JtYWxpemUoZS5wZXJwKGUuc3ViKHAyLCBwMSkpKTtcclxuICAgICAgICAgICAgY29uc3QgcGVycDEgPSBlLm11bChwZXJwLCAwLjI1ICogcjEud2lkdGggLyAyKTtcclxuICAgICAgICAgICAgY29uc3QgcGVycDIgPSBlLm11bChwZXJwLCAwLjI1ICogcjIud2lkdGggLyAyKTtcclxuICAgICAgICAgICAgY29uc3QgcG9seSA9IFtcclxuICAgICAgICAgICAgICAgIGUuYWRkKHAxLCBwZXJwMSksXHJcbiAgICAgICAgICAgICAgICBlLnN1YihwMSwgcGVycDEpLFxyXG4gICAgICAgICAgICAgICAgZS5zdWIocDIsIHBlcnAyKSxcclxuICAgICAgICAgICAgICAgIGUuYWRkKHAyLCBwZXJwMilcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgZS5zZXRDb21wb3NpdGVPcGVyYXRpb24oJ2hhcmQtbGlnaHQnKTtcclxuICAgICAgICAgICAgY29uc3Qgc3Ryb2tlID0gZS5jcmVhdGVMaW5lYXJHcmFkaWVudChwMSwgcDIsIGByZ2JhKDI1NSwgMjU1LCAyNTUsICR7YWxwaGFzW2ldfSlgLCBgcmdiYSgyNTUsIDI1NSwgMjU1LCAke2FscGhhc1tqXX0pYCk7XHJcbiAgICAgICAgICAgIGUuZmlsbFBvbHkoc3Ryb2tlLCBwb2x5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGh1bGwgPSBxaCh0aGlzLnBvaW50cyk7XHJcbi8vICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9zY2lsbGF0ZWRQb2ludHMubGVuZ3RoOyBpKyspIHtcclxuLy8gICAgICAgICAgICBmb3IgKHZhciBqID0gaSArIDE7IGogPCBvc2NpbGxhdGVkUG9pbnRzLmxlbmd0aDsgaisrKSB7XHJcbi8vICAgICAgICAgICAgICAgIGlmIChlLmRpc3QodGhpcy5wb2ludHNbaV0sIHRoaXMucG9pbnRzW2pdKSA+IDEpIGNvbnRpbnVlO1xyXG4vLyAgICAgICAgICAgICAgICByZW5kZXJFZGdlKGksIGopO1xyXG4vLyAgICAgICAgICAgIH1cclxuLy8gICAgICAgIH1cclxuXHJcbiAgICAgICAgaHVsbC5mb3JFYWNoKChbaTEsIGkyLCBpM10pID0+IHtcclxuICAgICAgICAgICAgcmVuZGVyRWRnZShpMSwgaTIpO1xyXG4gICAgICAgICAgICByZW5kZXJFZGdlKGkyLCBpMyk7XHJcbiAgICAgICAgICAgIHJlbmRlckVkZ2UoaTMsIGkxKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5oaWdobGlnaHRzID0gdGhpcy5oaWdobGlnaHRzLm1hcCgoW2ksIHRdKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpID49IGh1bGwubGVuZ3RoIHx8IHQgLSBkdCA8IDApIHtcclxuICAgICAgICAgICAgICAgIGkgPSBlLnJhbmRvbUludCgwLCBodWxsLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICB0ID0gTWF0aC5yYW5kb20oKSAqIDIgKyAwLjI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFscGhhID0gdCA+IDEgPyAwIDogZS5sZXJwKDAsIDAuMDgsIHQpO1xyXG4gICAgICAgICAgICBjb25zdCBoaWdobGlnaHRUcmlhbmdsZSA9IGh1bGxbaV0ubWFwKGluZCA9PiBzY3JlZW5Qb2ludHNbaW5kXSk7XHJcbiAgICAgICAgICAgIGUuZmlsbFBvbHkoYHJnYmEoMjU1LCAyNTUsIDI1NSwgJHthbHBoYX0pYCwgaGlnaGxpZ2h0VHJpYW5nbGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gW2ksIHQgLSBkdF07XHJcbiAgICAgICAgfSk7XHJcblxyXG4vLyAgICAgICAgZS5zZXRDb21wb3NpdGVPcGVyYXRpb24oJ3NvdXJjZS1vdmVyJyk7XHJcbi8vICAgICAgICBzY3JlZW5SZWN0cy5mb3JFYWNoKHJlY3QgPT4gZS5maWxsRWxsaXBzZShiZywgcmVjdCkpO1xyXG5cclxuICAgICAgICBlLnNldENvbXBvc2l0ZU9wZXJhdGlvbignaGFyZC1saWdodCcpO1xyXG4gICAgICAgIGUuemlwKHNjcmVlblJlY3RzLCBhbHBoYXMsIChyZWN0OiBSZWN0LCBhbHBoYTogbnVtYmVyKSA9PiBlLmZpbGxFbGxpcHNlKGByZ2JhKDI1NSwgMjU1LCAyNTUsIDI1NSlgLCByZWN0KSk7XHJcblxyXG4gICAgICAgIGUuemlwKGUuZW51bWVyYXRlKHNjcmVlblBvaW50cyksIHNjcmVlblJlY3RzLCAoW2ksIHBdLCByZWN0OiBSZWN0KSA9PiB7XHJcbiAgICAgICAgfSk7XHJcbi8vXHJcbi8vICAgICAgICBlLnN3YXBBY3RpdmVSZW5kZXJDb250ZXh0KHNjcmVlbkNvbnRleHQpO1xyXG4vLyAgICAgICAgZS5zZXRDb21wb3NpdGVPcGVyYXRpb24oJ3NvdXJjZS1vdmVyJyk7XHJcbi8vICAgICAgICBlLmNsZWFyKCcjRkZGRkZGJyk7XHJcbi8vICAgICAgICBlLnNldENvbXBvc2l0ZU9wZXJhdGlvbignY29sb3ItYnVybicpO1xyXG4vLyAgICAgICAgc2NyZWVuQ29udGV4dC5kcmF3SW1hZ2UodGhpcy5vZmZzY3JlZW5SZW5kZXJDb250ZXh0LmNhbnZhcywgMCwgMCwgdGhpcy5vZmZzY3JlZW5SZW5kZXJDb250ZXh0LmNhbnZhcy53aWR0aCwgdGhpcy5vZmZzY3JlZW5SZW5kZXJDb250ZXh0LmNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgICAgICAvLyBlLmRyYXdMaW5lKCcjRkZGRkZGJywgZS5zdWIocCwgWzAsIDNdKSwgZS5hZGQocCwgWzAsIDNdKSlcclxuICAgICAgICAgICAgLy8gZS5kcmF3TGluZSgnI0ZGRkZGRicsIGUuc3ViKHAsIFszLCAwXSksIGUuYWRkKHAsIFszLCAwXSkpXHJcblxyXG4gICAgICAgICAgICBlLnNldENvbXBvc2l0ZU9wZXJhdGlvbignc291cmNlLW92ZXInKTtcclxuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBwb2ludFRvU2NyZWVuKHRoaXMuc3RhcnRzW2ldKTtcclxuICAgICAgICAgICAgY29uc3QgZDEgPSBwb2ludFRvU2NyZWVuKHRoaXMuZGVzdDFbaV0pO1xyXG4gICAgICAgICAgICBjb25zdCBkMiA9IHBvaW50VG9TY3JlZW4odGhpcy5kZXN0MltpXSk7XHJcbiAgICAgICAgICAgIC8vIGUuZHJhd0xpbmUoXCJyZ2JhKDI1NSwgMCwgMCwgMC4yNSlcIiwgcCwgc3RhcnQpO1xyXG4gICAgICAgICAgICAvLyBlLmRyYXdMaW5lKFwicmdiYSgwLCAyNTUsIDAsIDAuMjUpXCIsIHAsIGQxKTtcclxuICAgICAgICAgICAgLy8gZS5kcmF3TGluZShcInJnYmEoMCwgMCwgMjU1LCAwLjI1KVwiLCBwLCBkMik7XHJcbiAgICAgICAgKi9cclxuICAgIH1cclxuXHJcbiAgICByYW5kb21Vbml0Q3ViZVBvaW50KCkge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiAyIC0gMSxcclxuICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqIDIgLSAxLFxyXG4gICAgICAgICAgICBNYXRoLnJhbmRvbSgpICogMiAtIDFcclxuICAgICAgICBdXHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgIFJldHVybnMgYSByYW5kb20gcG9pbnQgb2YgYSBzcGhlcmUsIGV2ZW5seSBkaXN0cmlidXRlZCBvdmVyIHRoZSBzcGhlcmUuXHJcbiAgICBUaGUgc3BoZXJlIGlzIGNlbnRlcmVkIGF0ICh4MCx5MCx6MCkgd2l0aCB0aGUgcGFzc2VkIGluIHJhZGl1cy5cclxuICAgIFRoZSByZXR1cm5lZCBwb2ludCBpcyByZXR1cm5lZCBhcyBhIHRocmVlIGVsZW1lbnQgYXJyYXkgW3gseSx6XS5cclxuICAgICovXHJcbiAgICByYW5kb21TcGhlcmVQb2ludCh4MDogbnVtYmVyLCB5MDogbnVtYmVyLCB6MDogbnVtYmVyLCByYWRpdXM6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IHUgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgIGNvbnN0IHYgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgIGNvbnN0IHRoZXRhID0gMiAqIE1hdGguUEkgKiB1O1xyXG4gICAgICAgIGNvbnN0IHBoaSA9IE1hdGguYWNvcygyICogdiAtIDEpO1xyXG4gICAgICAgIGNvbnN0IHggPSB4MCArIChyYWRpdXMgKiBNYXRoLnNpbihwaGkpICogTWF0aC5jb3ModGhldGEpKTtcclxuICAgICAgICBjb25zdCB5ID0geTAgKyAocmFkaXVzICogTWF0aC5zaW4ocGhpKSAqIE1hdGguc2luKHRoZXRhKSk7XHJcbiAgICAgICAgY29uc3QgeiA9IHowICsgKHJhZGl1cyAqIE1hdGguY29zKHBoaSkpO1xyXG4gICAgICAgIHJldHVybiBbeCwgeSwgel07XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvR3JhcGhEZW1vLnRzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gcnVubmVyO1xuXG52YXIgX1F1aWNrSHVsbCA9IHJlcXVpcmUoJy4vUXVpY2tIdWxsJyk7XG5cbnZhciBfUXVpY2tIdWxsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1F1aWNrSHVsbCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHJ1bm5lcihwb2ludHMpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gIHZhciBpbnN0YW5jZSA9IG5ldyBfUXVpY2tIdWxsMi5kZWZhdWx0KHBvaW50cyk7XG4gIGluc3RhbmNlLmJ1aWxkKCk7XG4gIHJldHVybiBpbnN0YW5jZS5jb2xsZWN0RmFjZXMob3B0aW9ucy5za2lwVHJpYW5ndWxhdGlvbik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9xdWlja2h1bGwzZC9kaXN0L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9zbGljZWRUb0FycmF5ID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkgeyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9IHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgcmV0dXJuIGFycjsgfSBlbHNlIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpIHsgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTsgfSBlbHNlIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7IH0gfTsgfSgpO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3BvaW50TGluZURpc3RhbmNlID0gcmVxdWlyZSgncG9pbnQtbGluZS1kaXN0YW5jZScpO1xuXG52YXIgX3BvaW50TGluZURpc3RhbmNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BvaW50TGluZURpc3RhbmNlKTtcblxudmFyIF9nZXRQbGFuZU5vcm1hbCA9IHJlcXVpcmUoJ2dldC1wbGFuZS1ub3JtYWwnKTtcblxudmFyIF9nZXRQbGFuZU5vcm1hbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQbGFuZU5vcm1hbCk7XG5cbnZhciBfZGVidWdGbiA9IHJlcXVpcmUoJ2RlYnVnLWZuJyk7XG5cbnZhciBfZGVidWdGbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWJ1Z0ZuKTtcblxudmFyIF9kb3QgPSByZXF1aXJlKCdnbC12ZWMzL2RvdCcpO1xuXG52YXIgX2RvdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kb3QpO1xuXG52YXIgX1ZlcnRleExpc3QgPSByZXF1aXJlKCcuL1ZlcnRleExpc3QnKTtcblxudmFyIF9WZXJ0ZXhMaXN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1ZlcnRleExpc3QpO1xuXG52YXIgX1ZlcnRleCA9IHJlcXVpcmUoJy4vVmVydGV4Jyk7XG5cbnZhciBfVmVydGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1ZlcnRleCk7XG5cbnZhciBfRmFjZSA9IHJlcXVpcmUoJy4vRmFjZScpO1xuXG52YXIgX0ZhY2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRmFjZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBkZWJ1ZyA9ICgwLCBfZGVidWdGbjIuZGVmYXVsdCkoJ3F1aWNraHVsbCcpO1xuXG4vLyBtZXJnZSB0eXBlc1xuLy8gbm9uIGNvbnZleCB3aXRoIHJlc3BlY3QgdG8gdGhlIGxhcmdlIGZhY2VcbnZhciBNRVJHRV9OT05fQ09OVkVYX1dSVF9MQVJHRVJfRkFDRSA9IDE7XG52YXIgTUVSR0VfTk9OX0NPTlZFWCA9IDI7XG5cbnZhciBRdWlja0h1bGwgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFF1aWNrSHVsbChwb2ludHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUXVpY2tIdWxsKTtcblxuICAgIGlmICghQXJyYXkuaXNBcnJheShwb2ludHMpKSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ2lucHV0IGlzIG5vdCBhIHZhbGlkIGFycmF5Jyk7XG4gICAgfVxuICAgIGlmIChwb2ludHMubGVuZ3RoIDwgNCkge1xuICAgICAgdGhyb3cgRXJyb3IoJ2Nhbm5vdCBidWlsZCBhIHNpbXBsZXggb3V0IG9mIDw0IHBvaW50cycpO1xuICAgIH1cblxuICAgIHRoaXMudG9sZXJhbmNlID0gLTE7XG5cbiAgICAvLyBidWZmZXJzXG4gICAgdGhpcy5uRmFjZXMgPSAwO1xuICAgIHRoaXMublBvaW50cyA9IHBvaW50cy5sZW5ndGg7XG5cbiAgICB0aGlzLmZhY2VzID0gW107XG4gICAgdGhpcy5uZXdGYWNlcyA9IFtdO1xuICAgIC8vIGhlbHBlcnNcbiAgICAvL1xuICAgIC8vIGxldCBgYWAsIGBiYCBiZSBgRmFjZWAgaW5zdGFuY2VzXG4gICAgLy8gbGV0IGB2YCBiZSBwb2ludHMgd3JhcHBlZCBhcyBpbnN0YW5jZSBvZiBgVmVydGV4YFxuICAgIC8vXG4gICAgLy8gICAgIFt2LCB2LCAuLi4sIHYsIHYsIHYsIC4uLl1cbiAgICAvLyAgICAgIF4gICAgICAgICAgICAgXlxuICAgIC8vICAgICAgfCAgICAgICAgICAgICB8XG4gICAgLy8gIGEub3V0c2lkZSAgICAgYi5vdXRzaWRlXG4gICAgLy9cbiAgICB0aGlzLmNsYWltZWQgPSBuZXcgX1ZlcnRleExpc3QyLmRlZmF1bHQoKTtcbiAgICB0aGlzLnVuY2xhaW1lZCA9IG5ldyBfVmVydGV4TGlzdDIuZGVmYXVsdCgpO1xuXG4gICAgLy8gdmVydGljZXMgb2YgdGhlIGh1bGwoaW50ZXJuYWwgcmVwcmVzZW50YXRpb24gb2YgcG9pbnRzKVxuICAgIHRoaXMudmVydGljZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKG5ldyBfVmVydGV4Mi5kZWZhdWx0KHBvaW50c1tpXSwgaSkpO1xuICAgIH1cbiAgICB0aGlzLmRpc2NhcmRlZEZhY2VzID0gW107XG4gICAgdGhpcy52ZXJ0ZXhQb2ludEluZGljZXMgPSBbXTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhRdWlja0h1bGwsIFt7XG4gICAga2V5OiAnYWRkVmVydGV4VG9GYWNlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkVmVydGV4VG9GYWNlKHZlcnRleCwgZmFjZSkge1xuICAgICAgdmVydGV4LmZhY2UgPSBmYWNlO1xuICAgICAgaWYgKCFmYWNlLm91dHNpZGUpIHtcbiAgICAgICAgdGhpcy5jbGFpbWVkLmFkZCh2ZXJ0ZXgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbGFpbWVkLmluc2VydEJlZm9yZShmYWNlLm91dHNpZGUsIHZlcnRleCk7XG4gICAgICB9XG4gICAgICBmYWNlLm91dHNpZGUgPSB2ZXJ0ZXg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBgdmVydGV4YCBmb3IgdGhlIGBjbGFpbWVkYCBsaXN0IG9mIHZlcnRpY2VzLCBpdCBhbHNvIG1ha2VzIHN1cmVcbiAgICAgKiB0aGF0IHRoZSBsaW5rIGZyb20gYGZhY2VgIHRvIHRoZSBmaXJzdCB2ZXJ0ZXggaXQgc2VlcyBpbiBgY2xhaW1lZGAgaXNcbiAgICAgKiBsaW5rZWQgY29ycmVjdGx5IGFmdGVyIHRoZSByZW1vdmFsXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlcnRleH0gdmVydGV4XG4gICAgICogQHBhcmFtIHtGYWNlfSBmYWNlXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3JlbW92ZVZlcnRleEZyb21GYWNlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlVmVydGV4RnJvbUZhY2UodmVydGV4LCBmYWNlKSB7XG4gICAgICBpZiAodmVydGV4ID09PSBmYWNlLm91dHNpZGUpIHtcbiAgICAgICAgLy8gZml4IGZhY2Uub3V0c2lkZSBsaW5rXG4gICAgICAgIGlmICh2ZXJ0ZXgubmV4dCAmJiB2ZXJ0ZXgubmV4dC5mYWNlID09PSBmYWNlKSB7XG4gICAgICAgICAgLy8gZmFjZSBoYXMgYXQgbGVhc3QgMiBvdXRzaWRlIHZlcnRpY2VzLCBtb3ZlIHRoZSBgb3V0c2lkZWAgcmVmZXJlbmNlXG4gICAgICAgICAgZmFjZS5vdXRzaWRlID0gdmVydGV4Lm5leHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gdmVydGV4IHdhcyB0aGUgb25seSBvdXRzaWRlIHZlcnRleCB0aGF0IGZhY2UgaGFkXG4gICAgICAgICAgZmFjZS5vdXRzaWRlID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5jbGFpbWVkLnJlbW92ZSh2ZXJ0ZXgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIHRoZSB2aXNpYmxlIHZlcnRpY2VzIHRoYXQgYGZhY2VgIGlzIGFibGUgdG8gc2VlIHdoaWNoIGFyZVxuICAgICAqIHN0b3JlZCBpbiB0aGUgYGNsYWltZWRgIHZlcnRleHQgbGlzdFxuICAgICAqXG4gICAgICogQHBhcmFtIHtGYWNlfSBmYWNlXG4gICAgICogQHJldHVybiB7VmVydGV4fHVuZGVmaW5lZH0gSWYgZmFjZSBoYWQgdmlzaWJsZSB2ZXJ0aWNlcyByZXR1cm5zXG4gICAgICogYGZhY2Uub3V0c2lkZWAsIG90aGVyd2lzZSB1bmRlZmluZWRcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAncmVtb3ZlQWxsVmVydGljZXNGcm9tRmFjZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUFsbFZlcnRpY2VzRnJvbUZhY2UoZmFjZSkge1xuICAgICAgaWYgKGZhY2Uub3V0c2lkZSkge1xuICAgICAgICAvLyBwb2ludGVyIHRvIHRoZSBsYXN0IHZlcnRleCBvZiB0aGlzIGZhY2VcbiAgICAgICAgLy8gWy4uLiwgb3V0c2lkZSwgLi4uLCBlbmQsIG91dHNpZGUsIC4uLl1cbiAgICAgICAgLy8gICAgICAgICAgfCAgICAgICAgICAgfCAgICAgIHxcbiAgICAgICAgLy8gICAgICAgICAgYSAgICAgICAgICAgYSAgICAgIGJcbiAgICAgICAgdmFyIGVuZCA9IGZhY2Uub3V0c2lkZTtcbiAgICAgICAgd2hpbGUgKGVuZC5uZXh0ICYmIGVuZC5uZXh0LmZhY2UgPT09IGZhY2UpIHtcbiAgICAgICAgICBlbmQgPSBlbmQubmV4dDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNsYWltZWQucmVtb3ZlQ2hhaW4oZmFjZS5vdXRzaWRlLCBlbmQpO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICBiXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICBbIG91dHNpZGUsIC4uLl1cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgcmVtb3ZlcyB0aGlzIGxpbmtcbiAgICAgICAgLy8gICAgIFsgb3V0c2lkZSwgLi4uLCBlbmQgXSAt4pSYXG4gICAgICAgIC8vICAgICAgICAgIHwgICAgICAgICAgIHxcbiAgICAgICAgLy8gICAgICAgICAgYSAgICAgICAgICAgYVxuICAgICAgICBlbmQubmV4dCA9IG51bGw7XG4gICAgICAgIHJldHVybiBmYWNlLm91dHNpZGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbGwgdGhlIHZpc2libGUgdmVydGljZXMgdGhhdCBgZmFjZWAgaXMgYWJsZSB0byBzZWUsIGFkZGl0aW9uYWxseVxuICAgICAqIGNoZWNraW5nIHRoZSBmb2xsb3dpbmc6XG4gICAgICpcbiAgICAgKiBJZiBgYWJzb3JiaW5nRmFjZWAgZG9lc24ndCBleGlzdCB0aGVuIGFsbCB0aGUgcmVtb3ZlZCB2ZXJ0aWNlcyB3aWxsIGJlXG4gICAgICogYWRkZWQgdG8gdGhlIGB1bmNsYWltZWRgIHZlcnRleCBsaXN0XG4gICAgICpcbiAgICAgKiBJZiBgYWJzb3JiaW5nRmFjZWAgZXhpc3RzIHRoZW4gdGhpcyBtZXRob2Qgd2lsbCBhc3NpZ24gYWxsIHRoZSB2ZXJ0aWNlcyBvZlxuICAgICAqIGBmYWNlYCB0aGF0IGNhbiBzZWUgYGFic29yYmluZ0ZhY2VgLCBpZiBhIHZlcnRleCBjYW5ub3Qgc2VlIGBhYnNvcmJpbmdGYWNlYFxuICAgICAqIGl0J3MgYWRkZWQgdG8gdGhlIGB1bmNsYWltZWRgIHZlcnRleCBsaXN0XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0ZhY2V9IGZhY2VcbiAgICAgKiBAcGFyYW0ge0ZhY2V9IFthYnNvcmJpbmdGYWNlXVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdkZWxldGVGYWNlVmVydGljZXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZWxldGVGYWNlVmVydGljZXMoZmFjZSwgYWJzb3JiaW5nRmFjZSkge1xuICAgICAgdmFyIGZhY2VWZXJ0aWNlcyA9IHRoaXMucmVtb3ZlQWxsVmVydGljZXNGcm9tRmFjZShmYWNlKTtcbiAgICAgIGlmIChmYWNlVmVydGljZXMpIHtcbiAgICAgICAgaWYgKCFhYnNvcmJpbmdGYWNlKSB7XG4gICAgICAgICAgLy8gbWFyayB0aGUgdmVydGljZXMgdG8gYmUgcmVhc3NpZ25lZCB0byBzb21lIG90aGVyIGZhY2VcbiAgICAgICAgICB0aGlzLnVuY2xhaW1lZC5hZGRBbGwoZmFjZVZlcnRpY2VzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBpZiB0aGVyZSdzIGFuIGFic29yYmluZyBmYWNlIHRyeSB0byBhc3NpZ24gYXMgbWFueSB2ZXJ0aWNlc1xuICAgICAgICAgIC8vIGFzIHBvc3NpYmxlIHRvIGl0XG5cbiAgICAgICAgICAvLyB0aGUgcmVmZXJlbmNlIGB2ZXJ0ZXgubmV4dGAgbWlnaHQgYmUgZGVzdHJveWVkIG9uXG4gICAgICAgICAgLy8gYHRoaXMuYWRkVmVydGV4VG9GYWNlYCAoc2VlIFZlcnRleExpc3QjYWRkKSwgbmV4dFZlcnRleCBpcyBhXG4gICAgICAgICAgLy8gcmVmZXJlbmNlIHRvIGl0XG4gICAgICAgICAgdmFyIG5leHRWZXJ0ZXggPSB2b2lkIDA7XG4gICAgICAgICAgZm9yICh2YXIgdmVydGV4ID0gZmFjZVZlcnRpY2VzOyB2ZXJ0ZXg7IHZlcnRleCA9IG5leHRWZXJ0ZXgpIHtcbiAgICAgICAgICAgIG5leHRWZXJ0ZXggPSB2ZXJ0ZXgubmV4dDtcbiAgICAgICAgICAgIHZhciBkaXN0YW5jZSA9IGFic29yYmluZ0ZhY2UuZGlzdGFuY2VUb1BsYW5lKHZlcnRleC5wb2ludCk7XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIGB2ZXJ0ZXhgIGlzIGFibGUgdG8gc2VlIGBhYnNvcmJpbmdGYWNlYFxuICAgICAgICAgICAgaWYgKGRpc3RhbmNlID4gdGhpcy50b2xlcmFuY2UpIHtcbiAgICAgICAgICAgICAgdGhpcy5hZGRWZXJ0ZXhUb0ZhY2UodmVydGV4LCBhYnNvcmJpbmdGYWNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMudW5jbGFpbWVkLmFkZCh2ZXJ0ZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlYXNzaWducyBhcyBtYW55IHZlcnRpY2VzIGFzIHBvc3NpYmxlIGZyb20gdGhlIHVuY2xhaW1lZCBsaXN0IHRvIHRoZSBuZXdcbiAgICAgKiBmYWNlc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtGYWNlc1tdfSBuZXdGYWNlc1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdyZXNvbHZlVW5jbGFpbWVkUG9pbnRzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzb2x2ZVVuY2xhaW1lZFBvaW50cyhuZXdGYWNlcykge1xuICAgICAgLy8gY2FjaGUgbmV4dCB2ZXJ0ZXggc28gdGhhdCBpZiBgdmVydGV4Lm5leHRgIGlzIGRlc3Ryb3llZCBpdCdzIHN0aWxsXG4gICAgICAvLyByZWNvdmVyYWJsZVxuICAgICAgdmFyIHZlcnRleE5leHQgPSB0aGlzLnVuY2xhaW1lZC5maXJzdCgpO1xuICAgICAgZm9yICh2YXIgdmVydGV4ID0gdmVydGV4TmV4dDsgdmVydGV4OyB2ZXJ0ZXggPSB2ZXJ0ZXhOZXh0KSB7XG4gICAgICAgIHZlcnRleE5leHQgPSB2ZXJ0ZXgubmV4dDtcbiAgICAgICAgdmFyIG1heERpc3RhbmNlID0gdGhpcy50b2xlcmFuY2U7XG4gICAgICAgIHZhciBtYXhGYWNlID0gdm9pZCAwO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5ld0ZhY2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgdmFyIGZhY2UgPSBuZXdGYWNlc1tpXTtcbiAgICAgICAgICBpZiAoZmFjZS5tYXJrID09PSBfRmFjZS5WSVNJQkxFKSB7XG4gICAgICAgICAgICB2YXIgZGlzdCA9IGZhY2UuZGlzdGFuY2VUb1BsYW5lKHZlcnRleC5wb2ludCk7XG4gICAgICAgICAgICBpZiAoZGlzdCA+IG1heERpc3RhbmNlKSB7XG4gICAgICAgICAgICAgIG1heERpc3RhbmNlID0gZGlzdDtcbiAgICAgICAgICAgICAgbWF4RmFjZSA9IGZhY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobWF4RGlzdGFuY2UgPiAxMDAwICogdGhpcy50b2xlcmFuY2UpIHtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1heEZhY2UpIHtcbiAgICAgICAgICB0aGlzLmFkZFZlcnRleFRvRmFjZSh2ZXJ0ZXgsIG1heEZhY2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29tcHV0ZXMgdGhlIGV4dHJlbWVzIG9mIGEgdGV0cmFoZWRyb24gd2hpY2ggd2lsbCBiZSB0aGUgaW5pdGlhbCBodWxsXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJbXX0gVGhlIG1pbi9tYXggdmVydGljZXMgaW4gdGhlIHgseSx6IGRpcmVjdGlvbnNcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnY29tcHV0ZUV4dHJlbWVzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcHV0ZUV4dHJlbWVzKCkge1xuICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgIHZhciBtaW4gPSBbXTtcbiAgICAgIHZhciBtYXggPSBbXTtcblxuICAgICAgLy8gbWluIHZlcnRleCBvbiB0aGUgeCx5LHogZGlyZWN0aW9uc1xuICAgICAgdmFyIG1pblZlcnRpY2VzID0gW107XG4gICAgICAvLyBtYXggdmVydGV4IG9uIHRoZSB4LHkseiBkaXJlY3Rpb25zXG4gICAgICB2YXIgbWF4VmVydGljZXMgPSBbXTtcblxuICAgICAgdmFyIGkgPSB2b2lkIDAsXG4gICAgICAgICAgaiA9IHZvaWQgMDtcblxuICAgICAgLy8gaW5pdGlhbGx5IGFzc3VtZSB0aGF0IHRoZSBmaXJzdCB2ZXJ0ZXggaXMgdGhlIG1pbi9tYXhcbiAgICAgIGZvciAoaSA9IDA7IGkgPCAzOyBpICs9IDEpIHtcbiAgICAgICAgbWluVmVydGljZXNbaV0gPSBtYXhWZXJ0aWNlc1tpXSA9IHRoaXMudmVydGljZXNbMF07XG4gICAgICB9XG4gICAgICAvLyBjb3B5IHRoZSBjb29yZGluYXRlcyBvZiB0aGUgZmlyc3QgdmVydGV4IHRvIG1pbi9tYXhcbiAgICAgIGZvciAoaSA9IDA7IGkgPCAzOyBpICs9IDEpIHtcbiAgICAgICAgbWluW2ldID0gbWF4W2ldID0gdGhpcy52ZXJ0aWNlc1swXS5wb2ludFtpXTtcbiAgICAgIH1cblxuICAgICAgLy8gY29tcHV0ZSB0aGUgbWluL21heCB2ZXJ0ZXggb24gYWxsIDYgZGlyZWN0aW9uc1xuICAgICAgZm9yIChpID0gMTsgaSA8IHRoaXMudmVydGljZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgdmFyIHZlcnRleCA9IHRoaXMudmVydGljZXNbaV07XG4gICAgICAgIHZhciBwb2ludCA9IHZlcnRleC5wb2ludDtcbiAgICAgICAgLy8gdXBkYXRlIHRoZSBtaW4gY29vcmRpbmF0ZXNcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IDM7IGogKz0gMSkge1xuICAgICAgICAgIGlmIChwb2ludFtqXSA8IG1pbltqXSkge1xuICAgICAgICAgICAgbWluW2pdID0gcG9pbnRbal07XG4gICAgICAgICAgICBtaW5WZXJ0aWNlc1tqXSA9IHZlcnRleDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gdXBkYXRlIHRoZSBtYXggY29vcmRpbmF0ZXNcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IDM7IGogKz0gMSkge1xuICAgICAgICAgIGlmIChwb2ludFtqXSA+IG1heFtqXSkge1xuICAgICAgICAgICAgbWF4W2pdID0gcG9pbnRbal07XG4gICAgICAgICAgICBtYXhWZXJ0aWNlc1tqXSA9IHZlcnRleDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gY29tcHV0ZSBlcHNpbG9uXG4gICAgICB0aGlzLnRvbGVyYW5jZSA9IDMgKiBOdW1iZXIuRVBTSUxPTiAqIChNYXRoLm1heChNYXRoLmFicyhtaW5bMF0pLCBNYXRoLmFicyhtYXhbMF0pKSArIE1hdGgubWF4KE1hdGguYWJzKG1pblsxXSksIE1hdGguYWJzKG1heFsxXSkpICsgTWF0aC5tYXgoTWF0aC5hYnMobWluWzJdKSwgTWF0aC5hYnMobWF4WzJdKSkpO1xuICAgICAgZGVidWcoZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmxvZygndG9sZXJhbmNlICVkJywgbWUudG9sZXJhbmNlKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIFttaW5WZXJ0aWNlcywgbWF4VmVydGljZXNdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbXB1ZXMgdGhlIGluaXRpYWwgdGV0cmFoZWRyb24gYXNzaWduaW5nIHRvIGl0cyBmYWNlcyBhbGwgdGhlIHBvaW50cyB0aGF0XG4gICAgICogYXJlIGNhbmRpZGF0ZXMgdG8gZm9ybSBwYXJ0IG9mIHRoZSBodWxsXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2NyZWF0ZUluaXRpYWxTaW1wbGV4JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlSW5pdGlhbFNpbXBsZXgoKSB7XG4gICAgICB2YXIgdmVydGljZXMgPSB0aGlzLnZlcnRpY2VzO1xuXG4gICAgICB2YXIgX2NvbXB1dGVFeHRyZW1lcyA9IHRoaXMuY29tcHV0ZUV4dHJlbWVzKCksXG4gICAgICAgICAgX2NvbXB1dGVFeHRyZW1lczIgPSBfc2xpY2VkVG9BcnJheShfY29tcHV0ZUV4dHJlbWVzLCAyKSxcbiAgICAgICAgICBtaW4gPSBfY29tcHV0ZUV4dHJlbWVzMlswXSxcbiAgICAgICAgICBtYXggPSBfY29tcHV0ZUV4dHJlbWVzMlsxXTtcblxuICAgICAgdmFyIHYwID0gdm9pZCAwLFxuICAgICAgICAgIHYxID0gdm9pZCAwLFxuICAgICAgICAgIHYyID0gdm9pZCAwLFxuICAgICAgICAgIHYzID0gdm9pZCAwO1xuICAgICAgdmFyIGkgPSB2b2lkIDAsXG4gICAgICAgICAgaiA9IHZvaWQgMDtcblxuICAgICAgLy8gRmluZCB0aGUgdHdvIHZlcnRpY2VzIHdpdGggdGhlIGdyZWF0ZXN0IDFkIHNlcGFyYXRpb25cbiAgICAgIC8vIChtYXgueCAtIG1pbi54KVxuICAgICAgLy8gKG1heC55IC0gbWluLnkpXG4gICAgICAvLyAobWF4LnogLSBtaW4ueilcbiAgICAgIHZhciBtYXhEaXN0YW5jZSA9IDA7XG4gICAgICB2YXIgaW5kZXhNYXggPSAwO1xuICAgICAgZm9yIChpID0gMDsgaSA8IDM7IGkgKz0gMSkge1xuICAgICAgICB2YXIgZGlzdGFuY2UgPSBtYXhbaV0ucG9pbnRbaV0gLSBtaW5baV0ucG9pbnRbaV07XG4gICAgICAgIGlmIChkaXN0YW5jZSA+IG1heERpc3RhbmNlKSB7XG4gICAgICAgICAgbWF4RGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAgICAgICAgICBpbmRleE1heCA9IGk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHYwID0gbWluW2luZGV4TWF4XTtcbiAgICAgIHYxID0gbWF4W2luZGV4TWF4XTtcblxuICAgICAgLy8gdGhlIG5leHQgdmVydGV4IGlzIHRoZSBvbmUgZmFydGhlc3QgdG8gdGhlIGxpbmUgZm9ybWVkIGJ5IGB2MGAgYW5kIGB2MWBcbiAgICAgIG1heERpc3RhbmNlID0gMDtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLnZlcnRpY2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHZhciB2ZXJ0ZXggPSB0aGlzLnZlcnRpY2VzW2ldO1xuICAgICAgICBpZiAodmVydGV4ICE9PSB2MCAmJiB2ZXJ0ZXggIT09IHYxKSB7XG4gICAgICAgICAgdmFyIF9kaXN0YW5jZSA9ICgwLCBfcG9pbnRMaW5lRGlzdGFuY2UyLmRlZmF1bHQpKHZlcnRleC5wb2ludCwgdjAucG9pbnQsIHYxLnBvaW50KTtcbiAgICAgICAgICBpZiAoX2Rpc3RhbmNlID4gbWF4RGlzdGFuY2UpIHtcbiAgICAgICAgICAgIG1heERpc3RhbmNlID0gX2Rpc3RhbmNlO1xuICAgICAgICAgICAgdjIgPSB2ZXJ0ZXg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIHRoZSBuZXh0IHZlcnRlcyBpcyB0aGUgb25lIGZhcnRoZXN0IHRvIHRoZSBwbGFuZSBgdjBgLCBgdjFgLCBgdjJgXG4gICAgICAvLyBub3JtYWxpemUoKHYyIC0gdjEpIHggKHYwIC0gdjEpKVxuICAgICAgdmFyIG5vcm1hbCA9ICgwLCBfZ2V0UGxhbmVOb3JtYWwyLmRlZmF1bHQpKFtdLCB2MC5wb2ludCwgdjEucG9pbnQsIHYyLnBvaW50KTtcbiAgICAgIC8vIGRpc3RhbmNlIGZyb20gdGhlIG9yaWdpbiB0byB0aGUgcGxhbmVcbiAgICAgIHZhciBkaXN0UE8gPSAoMCwgX2RvdDIuZGVmYXVsdCkodjAucG9pbnQsIG5vcm1hbCk7XG4gICAgICBtYXhEaXN0YW5jZSA9IC0xO1xuICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMudmVydGljZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgdmFyIF92ZXJ0ZXggPSB0aGlzLnZlcnRpY2VzW2ldO1xuICAgICAgICBpZiAoX3ZlcnRleCAhPT0gdjAgJiYgX3ZlcnRleCAhPT0gdjEgJiYgX3ZlcnRleCAhPT0gdjIpIHtcbiAgICAgICAgICB2YXIgX2Rpc3RhbmNlMiA9IE1hdGguYWJzKCgwLCBfZG90Mi5kZWZhdWx0KShub3JtYWwsIF92ZXJ0ZXgucG9pbnQpIC0gZGlzdFBPKTtcbiAgICAgICAgICBpZiAoX2Rpc3RhbmNlMiA+IG1heERpc3RhbmNlKSB7XG4gICAgICAgICAgICBtYXhEaXN0YW5jZSA9IF9kaXN0YW5jZTI7XG4gICAgICAgICAgICB2MyA9IF92ZXJ0ZXg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGluaXRpYWwgc2ltcGxleFxuICAgICAgLy8gVGFrZW4gZnJvbSBodHRwOi8vZXZlcnl0aGluZzIuY29tL3RpdGxlL0hvdyt0bytwYWludCthK3RldHJhaGVkcm9uXG4gICAgICAvL1xuICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2MlxuICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICx8LFxuICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAsN2BgXFwnVkEsXG4gICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAsN2AgICB8LCBgJ1ZBLFxuICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICw3YCAgICAgYFxcICAgIGAnVkEsXG4gICAgICAvLyAgICAgICAgICAgICAgICAgICAgICw3YCAgICAgICAgfCwgICAgICBgJ1ZBLFxuICAgICAgLy8gICAgICAgICAgICAgICAgICAgLDdgICAgICAgICAgIGBcXCAgICAgICAgIGAnVkEsXG4gICAgICAvLyAgICAgICAgICAgICAgICAgLDdgICAgICAgICAgICAgIHwsICAgICAgICAgICBgJ1ZBLFxuICAgICAgLy8gICAgICAgICAgICAgICAsN2AgICAgICAgICAgICAgICBgXFwgICAgICAgLC4ub29PT1RLYCB2M1xuICAgICAgLy8gICAgICAgICAgICAgLDdgICAgICAgICAgICAgICAgICAgfCwub29PT1QnJ2AgICAgQVZcbiAgICAgIC8vICAgICAgICAgICAsN2AgICAgICAgICAgICAsLi5vb09PVGBcXGAgICAgICAgICAgIC83XG4gICAgICAvLyAgICAgICAgICw3YCAgICAgICwuLm9vT09UJydgICAgICAgfCwgICAgICAgICAgQVZcbiAgICAgIC8vICAgICAgICAsVCwuLm9vT09UJydgICAgICAgICAgICAgICBgXFwgICAgICAgICAvN1xuICAgICAgLy8gICAgIHYwIGAnVFRzLiwgICAgICAgICAgICAgICAgICAgICB8LCAgICAgICBBVlxuICAgICAgLy8gICAgICAgICAgICBgJ1RUcy4sICAgICAgICAgICAgICAgICBgXFwgICAgICAvN1xuICAgICAgLy8gICAgICAgICAgICAgICAgIGAnVFRzLiwgICAgICAgICAgICAgfCwgICAgQVZcbiAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgIGAnVFRzLiwgICAgICAgIGBcXCAgIC83XG4gICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIGAnVFRzLiwgICAgfCwgQVZcbiAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJ1RUcy4sXFwvN1xuICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCdUYFxuICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2MVxuICAgICAgLy9cbiAgICAgIHZhciBmYWNlcyA9IFtdO1xuICAgICAgaWYgKCgwLCBfZG90Mi5kZWZhdWx0KSh2My5wb2ludCwgbm9ybWFsKSAtIGRpc3RQTyA8IDApIHtcbiAgICAgICAgLy8gdGhlIGZhY2UgaXMgbm90IGFibGUgdG8gc2VlIHRoZSBwb2ludCBzbyBgcGxhbmVOb3JtYWxgXG4gICAgICAgIC8vIGlzIHBvaW50aW5nIG91dHNpZGUgdGhlIHRldHJhaGVkcm9uXG4gICAgICAgIGZhY2VzLnB1c2goX0ZhY2UyLmRlZmF1bHQuY3JlYXRlVHJpYW5nbGUodjAsIHYxLCB2MiksIF9GYWNlMi5kZWZhdWx0LmNyZWF0ZVRyaWFuZ2xlKHYzLCB2MSwgdjApLCBfRmFjZTIuZGVmYXVsdC5jcmVhdGVUcmlhbmdsZSh2MywgdjIsIHYxKSwgX0ZhY2UyLmRlZmF1bHQuY3JlYXRlVHJpYW5nbGUodjMsIHYwLCB2MikpO1xuXG4gICAgICAgIC8vIHNldCB0aGUgb3Bwb3NpdGUgZWRnZVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgMzsgaSArPSAxKSB7XG4gICAgICAgICAgdmFyIF9qID0gKGkgKyAxKSAlIDM7XG4gICAgICAgICAgLy8gam9pbiBmYWNlW2ldIGkgPiAwLCB3aXRoIHRoZSBmaXJzdCBmYWNlXG4gICAgICAgICAgZmFjZXNbaSArIDFdLmdldEVkZ2UoMikuc2V0T3Bwb3NpdGUoZmFjZXNbMF0uZ2V0RWRnZShfaikpO1xuICAgICAgICAgIC8vIGpvaW4gZmFjZVtpXSB3aXRoIGZhY2VbaSArIDFdLCAxIDw9IGkgPD0gM1xuICAgICAgICAgIGZhY2VzW2kgKyAxXS5nZXRFZGdlKDEpLnNldE9wcG9zaXRlKGZhY2VzW19qICsgMV0uZ2V0RWRnZSgwKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHRoZSBmYWNlIGlzIGFibGUgdG8gc2VlIHRoZSBwb2ludCBzbyBgcGxhbmVOb3JtYWxgXG4gICAgICAgIC8vIGlzIHBvaW50aW5nIGluc2lkZSB0aGUgdGV0cmFoZWRyb25cbiAgICAgICAgZmFjZXMucHVzaChfRmFjZTIuZGVmYXVsdC5jcmVhdGVUcmlhbmdsZSh2MCwgdjIsIHYxKSwgX0ZhY2UyLmRlZmF1bHQuY3JlYXRlVHJpYW5nbGUodjMsIHYwLCB2MSksIF9GYWNlMi5kZWZhdWx0LmNyZWF0ZVRyaWFuZ2xlKHYzLCB2MSwgdjIpLCBfRmFjZTIuZGVmYXVsdC5jcmVhdGVUcmlhbmdsZSh2MywgdjIsIHYwKSk7XG5cbiAgICAgICAgLy8gc2V0IHRoZSBvcHBvc2l0ZSBlZGdlXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCAzOyBpICs9IDEpIHtcbiAgICAgICAgICB2YXIgX2oyID0gKGkgKyAxKSAlIDM7XG4gICAgICAgICAgLy8gam9pbiBmYWNlW2ldIGkgPiAwLCB3aXRoIHRoZSBmaXJzdCBmYWNlXG4gICAgICAgICAgZmFjZXNbaSArIDFdLmdldEVkZ2UoMikuc2V0T3Bwb3NpdGUoZmFjZXNbMF0uZ2V0RWRnZSgoMyAtIGkpICUgMykpO1xuICAgICAgICAgIC8vIGpvaW4gZmFjZVtpXSB3aXRoIGZhY2VbaSArIDFdXG4gICAgICAgICAgZmFjZXNbaSArIDFdLmdldEVkZ2UoMCkuc2V0T3Bwb3NpdGUoZmFjZXNbX2oyICsgMV0uZ2V0RWRnZSgxKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gdGhlIGluaXRpYWwgaHVsbCBpcyB0aGUgdGV0cmFoZWRyb25cbiAgICAgIGZvciAoaSA9IDA7IGkgPCA0OyBpICs9IDEpIHtcbiAgICAgICAgdGhpcy5mYWNlcy5wdXNoKGZhY2VzW2ldKTtcbiAgICAgIH1cblxuICAgICAgLy8gaW5pdGlhbCBhc3NpZ25tZW50IG9mIHZlcnRpY2VzIHRvIHRoZSBmYWNlcyBvZiB0aGUgdGV0cmFoZWRyb25cbiAgICAgIGZvciAoaSA9IDA7IGkgPCB2ZXJ0aWNlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB2YXIgX3ZlcnRleDIgPSB2ZXJ0aWNlc1tpXTtcbiAgICAgICAgaWYgKF92ZXJ0ZXgyICE9PSB2MCAmJiBfdmVydGV4MiAhPT0gdjEgJiYgX3ZlcnRleDIgIT09IHYzICYmIF92ZXJ0ZXgyICE9PSB2Mykge1xuICAgICAgICAgIG1heERpc3RhbmNlID0gdGhpcy50b2xlcmFuY2U7XG4gICAgICAgICAgdmFyIG1heEZhY2UgPSB2b2lkIDA7XG4gICAgICAgICAgZm9yIChqID0gMDsgaiA8IDQ7IGogKz0gMSkge1xuICAgICAgICAgICAgdmFyIF9kaXN0YW5jZTMgPSBmYWNlc1tqXS5kaXN0YW5jZVRvUGxhbmUoX3ZlcnRleDIucG9pbnQpO1xuICAgICAgICAgICAgaWYgKF9kaXN0YW5jZTMgPiBtYXhEaXN0YW5jZSkge1xuICAgICAgICAgICAgICBtYXhEaXN0YW5jZSA9IF9kaXN0YW5jZTM7XG4gICAgICAgICAgICAgIG1heEZhY2UgPSBmYWNlc1tqXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobWF4RmFjZSkge1xuICAgICAgICAgICAgdGhpcy5hZGRWZXJ0ZXhUb0ZhY2UoX3ZlcnRleDIsIG1heEZhY2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlaW5kZXhGYWNlQW5kVmVydGljZXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZWluZGV4RmFjZUFuZFZlcnRpY2VzKCkge1xuICAgICAgLy8gcmVtb3ZlIGluYWN0aXZlIGZhY2VzXG4gICAgICB2YXIgYWN0aXZlRmFjZXMgPSBbXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5mYWNlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB2YXIgZmFjZSA9IHRoaXMuZmFjZXNbaV07XG4gICAgICAgIGlmIChmYWNlLm1hcmsgPT09IF9GYWNlLlZJU0lCTEUpIHtcbiAgICAgICAgICBhY3RpdmVGYWNlcy5wdXNoKGZhY2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmZhY2VzID0gYWN0aXZlRmFjZXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29sbGVjdEZhY2VzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29sbGVjdEZhY2VzKHNraXBUcmlhbmd1bGF0aW9uKSB7XG4gICAgICB2YXIgZmFjZUluZGljZXMgPSBbXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5mYWNlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAodGhpcy5mYWNlc1tpXS5tYXJrICE9PSBfRmFjZS5WSVNJQkxFKSB7XG4gICAgICAgICAgdGhyb3cgRXJyb3IoJ2F0dGVtcHQgdG8gaW5jbHVkZSBhIGRlc3Ryb3llZCBmYWNlIGluIHRoZSBodWxsJyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGluZGljZXMgPSB0aGlzLmZhY2VzW2ldLmNvbGxlY3RJbmRpY2VzKCk7XG4gICAgICAgIGlmIChza2lwVHJpYW5ndWxhdGlvbikge1xuICAgICAgICAgIGZhY2VJbmRpY2VzLnB1c2goaW5kaWNlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBpbmRpY2VzLmxlbmd0aCAtIDI7IGogKz0gMSkge1xuICAgICAgICAgICAgZmFjZUluZGljZXMucHVzaChbaW5kaWNlc1swXSwgaW5kaWNlc1tqICsgMV0sIGluZGljZXNbaiArIDJdXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFjZUluZGljZXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZHMgdGhlIG5leHQgdmVydGV4IHRvIG1ha2UgZmFjZXMgd2l0aCB0aGUgY3VycmVudCBodWxsXG4gICAgICpcbiAgICAgKiAtIGxldCBgZmFjZWAgYmUgdGhlIGZpcnN0IGZhY2UgZXhpc3RpbmcgaW4gdGhlIGBjbGFpbWVkYCB2ZXJ0ZXggbGlzdFxuICAgICAqICAtIGlmIGBmYWNlYCBkb2Vzbid0IGV4aXN0IHRoZW4gcmV0dXJuIHNpbmNlIHRoZXJlJ3JlIG5vIHZlcnRpY2VzIGxlZnRcbiAgICAgKiAgLSBvdGhlcndpc2UgZm9yIGVhY2ggYHZlcnRleGAgdGhhdCBmYWNlIHNlZXMgZmluZCB0aGUgb25lIGZ1cnRoZXN0IGF3YXlcbiAgICAgKiAgZnJvbSBgZmFjZWBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlcnRleHx1bmRlZmluZWR9IFJldHVybnMgdW5kZWZpbmVkIHdoZW4gdGhlcmUncmUgbm8gbW9yZVxuICAgICAqIHZpc2libGUgdmVydGljZXNcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnbmV4dFZlcnRleFRvQWRkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbmV4dFZlcnRleFRvQWRkKCkge1xuICAgICAgaWYgKCF0aGlzLmNsYWltZWQuaXNFbXB0eSgpKSB7XG4gICAgICAgIHZhciBleWVWZXJ0ZXggPSB2b2lkIDAsXG4gICAgICAgICAgICB2ZXJ0ZXggPSB2b2lkIDA7XG4gICAgICAgIHZhciBtYXhEaXN0YW5jZSA9IDA7XG4gICAgICAgIHZhciBleWVGYWNlID0gdGhpcy5jbGFpbWVkLmZpcnN0KCkuZmFjZTtcbiAgICAgICAgZm9yICh2ZXJ0ZXggPSBleWVGYWNlLm91dHNpZGU7IHZlcnRleCAmJiB2ZXJ0ZXguZmFjZSA9PT0gZXllRmFjZTsgdmVydGV4ID0gdmVydGV4Lm5leHQpIHtcbiAgICAgICAgICB2YXIgZGlzdGFuY2UgPSBleWVGYWNlLmRpc3RhbmNlVG9QbGFuZSh2ZXJ0ZXgucG9pbnQpO1xuICAgICAgICAgIGlmIChkaXN0YW5jZSA+IG1heERpc3RhbmNlKSB7XG4gICAgICAgICAgICBtYXhEaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgICAgICAgICAgZXllVmVydGV4ID0gdmVydGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXllVmVydGV4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbXB1dGVzIGEgY2hhaW4gb2YgaGFsZiBlZGdlcyBpbiBjY3cgb3JkZXIgY2FsbGVkIHRoZSBgaG9yaXpvbmAsIGZvciBhblxuICAgICAqIGVkZ2UgdG8gYmUgcGFydCBvZiB0aGUgaG9yaXpvbiBpdCBtdXN0IGpvaW4gYSBmYWNlIHRoYXQgY2FuIHNlZVxuICAgICAqIGBleWVQb2ludGAgYW5kIGEgZmFjZSB0aGF0IGNhbm5vdCBzZWUgYGV5ZVBvaW50YFxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJbXX0gZXllUG9pbnQgLSBUaGUgY29vcmRpbmF0ZXMgb2YgYSBwb2ludFxuICAgICAqIEBwYXJhbSB7SGFsZkVkZ2V9IGNyb3NzRWRnZSAtIFRoZSBlZGdlIHVzZWQgdG8ganVtcCB0byB0aGUgY3VycmVudCBgZmFjZWBcbiAgICAgKiBAcGFyYW0ge0ZhY2V9IGZhY2UgLSBUaGUgY3VycmVudCBmYWNlIGJlaW5nIHRlc3RlZFxuICAgICAqIEBwYXJhbSB7SGFsZkVkZ2VbXX0gaG9yaXpvbiAtIFRoZSBlZGdlcyB0aGF0IGZvcm0gcGFydCBvZiB0aGUgaG9yaXpvbiBpblxuICAgICAqIGNjdyBvcmRlclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdjb21wdXRlSG9yaXpvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXB1dGVIb3Jpem9uKGV5ZVBvaW50LCBjcm9zc0VkZ2UsIGZhY2UsIGhvcml6b24pIHtcbiAgICAgIC8vIG1vdmVzIGZhY2UncyB2ZXJ0aWNlcyB0byB0aGUgYHVuY2xhaW1lZGAgdmVydGV4IGxpc3RcbiAgICAgIHRoaXMuZGVsZXRlRmFjZVZlcnRpY2VzKGZhY2UpO1xuXG4gICAgICBmYWNlLm1hcmsgPSBfRmFjZS5ERUxFVEVEO1xuXG4gICAgICB2YXIgZWRnZSA9IHZvaWQgMDtcbiAgICAgIGlmICghY3Jvc3NFZGdlKSB7XG4gICAgICAgIGVkZ2UgPSBjcm9zc0VkZ2UgPSBmYWNlLmdldEVkZ2UoMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBzdGFydCBmcm9tIHRoZSBuZXh0IGVkZ2Ugc2luY2UgYGNyb3NzRWRnZWAgd2FzIGFscmVhZHkgYW5hbHl6ZWRcbiAgICAgICAgLy8gKGFjdHVhbGx5IGBjcm9zc0VkZ2Uub3Bwb3NpdGVgIHdhcyB0aGUgZmFjZSB3aG8gY2FsbGVkIHRoaXMgbWV0aG9kXG4gICAgICAgIC8vIHJlY3Vyc2l2ZWx5KVxuICAgICAgICBlZGdlID0gY3Jvc3NFZGdlLm5leHQ7XG4gICAgICB9XG5cbiAgICAgIC8vIEFsbCB0aGUgZmFjZXMgdGhhdCBhcmUgYWJsZSB0byBzZWUgYGV5ZVZlcnRleGAgYXJlIGRlZmluZWQgYXMgZm9sbG93c1xuICAgICAgLy9cbiAgICAgIC8vICAgICAgIHYgICAgL1xuICAgICAgLy8gICAgICAgICAgIC8gPD09IHZpc2libGUgZmFjZVxuICAgICAgLy8gICAgICAgICAgL1xuICAgICAgLy8gICAgICAgICB8XG4gICAgICAvLyAgICAgICAgIHwgPD09IG5vdCB2aXNpYmxlIGZhY2VcbiAgICAgIC8vXG4gICAgICAvLyAgZG90KHYsIHZpc2libGUgZmFjZSBub3JtYWwpIC0gdmlzaWJsZSBmYWNlIG9mZnNldCA+IHRoaXMudG9sZXJhbmNlXG4gICAgICAvL1xuICAgICAgZG8ge1xuICAgICAgICB2YXIgb3Bwb3NpdGVFZGdlID0gZWRnZS5vcHBvc2l0ZTtcbiAgICAgICAgdmFyIG9wcG9zaXRlRmFjZSA9IG9wcG9zaXRlRWRnZS5mYWNlO1xuICAgICAgICBpZiAob3Bwb3NpdGVGYWNlLm1hcmsgPT09IF9GYWNlLlZJU0lCTEUpIHtcbiAgICAgICAgICBpZiAob3Bwb3NpdGVGYWNlLmRpc3RhbmNlVG9QbGFuZShleWVQb2ludCkgPiB0aGlzLnRvbGVyYW5jZSkge1xuICAgICAgICAgICAgdGhpcy5jb21wdXRlSG9yaXpvbihleWVQb2ludCwgb3Bwb3NpdGVFZGdlLCBvcHBvc2l0ZUZhY2UsIGhvcml6b24pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBob3Jpem9uLnB1c2goZWRnZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVkZ2UgPSBlZGdlLm5leHQ7XG4gICAgICB9IHdoaWxlIChlZGdlICE9PSBjcm9zc0VkZ2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBmYWNlIHdpdGggdGhlIHBvaW50cyBgZXllVmVydGV4LnBvaW50YCwgYGhvcml6b25FZGdlLnRhaWxgIGFuZFxuICAgICAqIGBob3Jpem9uRWRnZS50YWlsYCBpbiBjY3cgb3JkZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVydGV4fSBleWVWZXJ0ZXhcbiAgICAgKiBAcGFyYW0ge0hhbGZFZGdlfSBob3Jpem9uRWRnZVxuICAgICAqIEByZXR1cm4ge0hhbGZFZGdlfSBUaGUgaGFsZiBlZGdlIHdob3NlIHZlcnRleCBpcyB0aGUgZXllVmVydGV4XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2FkZEFkam9pbmluZ0ZhY2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRBZGpvaW5pbmdGYWNlKGV5ZVZlcnRleCwgaG9yaXpvbkVkZ2UpIHtcbiAgICAgIC8vIGFsbCB0aGUgaGFsZiBlZGdlcyBhcmUgY3JlYXRlZCBpbiBjY3cgb3JkZXIgdGh1cyB0aGUgZmFjZSBpcyBhbHdheXNcbiAgICAgIC8vIHBvaW50aW5nIG91dHNpZGUgdGhlIGh1bGxcbiAgICAgIC8vIGVkZ2VzOlxuICAgICAgLy9cbiAgICAgIC8vICAgICAgICAgICAgICAgICAgZXllVmVydGV4LnBvaW50XG4gICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgLyBcXFxuICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgLyAgIFxcXG4gICAgICAvLyAgICAgICAgICAgICAgICAgIDEgIC8gICAgIFxcICAwXG4gICAgICAvLyAgICAgICAgICAgICAgICAgICAgLyAgICAgICBcXFxuICAgICAgLy8gICAgICAgICAgICAgICAgICAgLyAgICAgICAgIFxcXG4gICAgICAvLyAgICAgICAgICAgICAgICAgIC8gICAgICAgICAgIFxcXG4gICAgICAvLyAgICAgICAgICBob3Jpem9uLnRhaWwgLS0tIGhvcml6b24uaGVhZFxuICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAvL1xuICAgICAgdmFyIGZhY2UgPSBfRmFjZTIuZGVmYXVsdC5jcmVhdGVUcmlhbmdsZShleWVWZXJ0ZXgsIGhvcml6b25FZGdlLnRhaWwoKSwgaG9yaXpvbkVkZ2UuaGVhZCgpKTtcbiAgICAgIHRoaXMuZmFjZXMucHVzaChmYWNlKTtcbiAgICAgIC8vIGpvaW4gZmFjZS5nZXRFZGdlKC0xKSB3aXRoIHRoZSBob3Jpem9uJ3Mgb3Bwb3NpdGUgZWRnZVxuICAgICAgLy8gZmFjZS5nZXRFZGdlKC0xKSA9IGZhY2UuZ2V0RWRnZSgyKVxuICAgICAgZmFjZS5nZXRFZGdlKC0xKS5zZXRPcHBvc2l0ZShob3Jpem9uRWRnZS5vcHBvc2l0ZSk7XG4gICAgICByZXR1cm4gZmFjZS5nZXRFZGdlKDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgaG9yaXpvbi5sZW5ndGggZmFjZXMgdG8gdGhlIGh1bGwsIGVhY2ggZmFjZSB3aWxsIGJlICdsaW5rZWQnIHdpdGggdGhlXG4gICAgICogaG9yaXpvbiBvcHBvc2l0ZSBmYWNlIGFuZCB0aGUgZmFjZSBvbiB0aGUgbGVmdC9yaWdodFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZXJ0ZXh9IGV5ZVZlcnRleFxuICAgICAqIEBwYXJhbSB7SGFsZkVkZ2VbXX0gaG9yaXpvbiAtIEEgY2hhaW4gb2YgaGFsZiBlZGdlcyBpbiBjY3cgb3JkZXJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnYWRkTmV3RmFjZXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGROZXdGYWNlcyhleWVWZXJ0ZXgsIGhvcml6b24pIHtcbiAgICAgIHRoaXMubmV3RmFjZXMgPSBbXTtcbiAgICAgIHZhciBmaXJzdFNpZGVFZGdlID0gdm9pZCAwLFxuICAgICAgICAgIHByZXZpb3VzU2lkZUVkZ2UgPSB2b2lkIDA7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhvcml6b24ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgdmFyIGhvcml6b25FZGdlID0gaG9yaXpvbltpXTtcbiAgICAgICAgLy8gcmV0dXJucyB0aGUgcmlnaHQgc2lkZSBlZGdlXG4gICAgICAgIHZhciBzaWRlRWRnZSA9IHRoaXMuYWRkQWRqb2luaW5nRmFjZShleWVWZXJ0ZXgsIGhvcml6b25FZGdlKTtcbiAgICAgICAgaWYgKCFmaXJzdFNpZGVFZGdlKSB7XG4gICAgICAgICAgZmlyc3RTaWRlRWRnZSA9IHNpZGVFZGdlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGpvaW5zIGZhY2UuZ2V0RWRnZSgxKSB3aXRoIHByZXZpb3VzRmFjZS5nZXRFZGdlKDApXG4gICAgICAgICAgc2lkZUVkZ2UubmV4dC5zZXRPcHBvc2l0ZShwcmV2aW91c1NpZGVFZGdlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5ld0ZhY2VzLnB1c2goc2lkZUVkZ2UuZmFjZSk7XG4gICAgICAgIHByZXZpb3VzU2lkZUVkZ2UgPSBzaWRlRWRnZTtcbiAgICAgIH1cbiAgICAgIGZpcnN0U2lkZUVkZ2UubmV4dC5zZXRPcHBvc2l0ZShwcmV2aW91c1NpZGVFZGdlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyB0aGUgZGlzdGFuY2UgZnJvbSBgZWRnZWAgb3Bwb3NpdGUgZmFjZSdzIGNlbnRyb2lkIHRvXG4gICAgICogYGVkZ2UuZmFjZWBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SGFsZkVkZ2V9IGVkZ2VcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICogLSBBIHBvc2l0aXZlIG51bWJlciB3aGVuIHRoZSBjZW50cm9pZCBvZiB0aGUgb3Bwb3NpdGUgZmFjZSBpcyBhYm92ZSB0aGVcbiAgICAgKiAgIGZhY2UgaS5lLiB3aGVuIHRoZSBmYWNlcyBhcmUgY29uY2F2ZVxuICAgICAqIC0gQSBuZWdhdGl2ZSBudW1iZXIgd2hlbiB0aGUgY2VudHJvaWQgb2YgdGhlIG9wcG9zaXRlIGZhY2UgaXMgYmVsb3cgdGhlXG4gICAgICogICBmYWNlIGkuZS4gd2hlbiB0aGUgZmFjZXMgYXJlIGNvbnZleFxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdvcHBvc2l0ZUZhY2VEaXN0YW5jZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9wcG9zaXRlRmFjZURpc3RhbmNlKGVkZ2UpIHtcbiAgICAgIHJldHVybiBlZGdlLmZhY2UuZGlzdGFuY2VUb1BsYW5lKGVkZ2Uub3Bwb3NpdGUuZmFjZS5jZW50cm9pZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWVyZ2VzIGEgZmFjZSB3aXRoIG5vbmUvYW55L2FsbCBpdHMgbmVpZ2hib3JzIGFjY29yZGluZyB0byB0aGUgc3RyYXRlZ3lcbiAgICAgKiB1c2VkXG4gICAgICpcbiAgICAgKiBpZiBgbWVyZ2VUeXBlYCBpcyBNRVJHRV9OT05fQ09OVkVYX1dSVF9MQVJHRVJfRkFDRSB0aGVuIHRoZSBtZXJnZSB3aWxsIGJlXG4gICAgICogZGVjaWRlZCBiYXNlZCBvbiB0aGUgZmFjZSB3aXRoIHRoZSBsYXJnZXIgYXJlYSwgdGhlIGNlbnRyb2lkIG9mIHRoZSBmYWNlXG4gICAgICogd2l0aCB0aGUgc21hbGxlciBhcmVhIHdpbGwgYmUgY2hlY2tlZCBhZ2FpbnN0IHRoZSBvbmUgd2l0aCB0aGUgbGFyZ2VyIGFyZWFcbiAgICAgKiB0byBzZWUgaWYgaXQncyBpbiB0aGUgbWVyZ2UgcmFuZ2UgW3RvbGVyYW5jZSwgLXRvbGVyYW5jZV0gaS5lLlxuICAgICAqXG4gICAgICogICAgZG90KGNlbnRyb2lkIHNtYWxsZXIgZmFjZSwgbGFyZ2VyIGZhY2Ugbm9ybWFsKSAtIGxhcmdlciBmYWNlIG9mZnNldCA+IC10b2xlcmFuY2VcbiAgICAgKlxuICAgICAqIE5vdGUgdGhhdCB0aGUgZmlyc3QgY2hlY2sgKHdpdGggK3RvbGVyYW5jZSkgd2FzIGRvbmUgb24gYGNvbXB1dGVIb3Jpem9uYFxuICAgICAqXG4gICAgICogSWYgdGhlIGFib3ZlIGlzIG5vdCB0cnVlIHRoZW4gdGhlIGNoZWNrIGlzIGRvbmUgd2l0aCByZXNwZWN0IHRvIHRoZSBzbWFsbGVyXG4gICAgICogZmFjZSBpLmUuXG4gICAgICpcbiAgICAgKiAgICBkb3QoY2VudHJvaWQgbGFyZ2VyIGZhY2UsIHNtYWxsZXIgZmFjZSBub3JtYWwpIC0gc21hbGxlciBmYWNlIG9mZnNldCA+IC10b2xlcmFuY2VcbiAgICAgKlxuICAgICAqIElmIHRydWUgdGhlbiBpdCBtZWFucyB0aGF0IHR3byBmYWNlcyBhcmUgbm9uIGNvbnZleCAoY29uY2F2ZSksIGV2ZW4gaWYgdGhlXG4gICAgICogZG90KC4uLikgLSBvZmZzZXQgdmFsdWUgaXMgPiAwICh0aGF0J3MgdGhlIHBvaW50IG9mIGRvaW5nIHRoZSBtZXJnZSBpbiB0aGVcbiAgICAgKiBmaXJzdCBwbGFjZSlcbiAgICAgKlxuICAgICAqIElmIHR3byBmYWNlcyBhcmUgY29uY2F2ZSB0aGVuIHRoZSBjaGVjayBtdXN0IGFsc28gYmUgZG9uZSBvbiB0aGUgb3RoZXIgZmFjZVxuICAgICAqIGJ1dCB0aGlzIGlzIGRvbmUgaW4gYW5vdGhlciBtZXJnZSBwYXNzLCBmb3IgdGhpcyB0byBoYXBwZW4gdGhlIGZhY2UgaXNcbiAgICAgKiBtYXJrZWQgaW4gYSB0ZW1wb3JhbCBOT05fQ09OVkVYIHN0YXRlXG4gICAgICpcbiAgICAgKiBpZiBgbWVyZ2VUeXBlYCBpcyBNRVJHRV9OT05fQ09OVkVYIHRoZW4gdHdvIGZhY2VzIHdpbGwgYmUgbWVyZ2VkIG9ubHkgaWZcbiAgICAgKiB0aGV5IHBhc3MgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zXG4gICAgICpcbiAgICAgKiAgICBkb3QoY2VudHJvaWQgc21hbGxlciBmYWNlLCBsYXJnZXIgZmFjZSBub3JtYWwpIC0gbGFyZ2VyIGZhY2Ugb2Zmc2V0ID4gLXRvbGVyYW5jZVxuICAgICAqICAgIGRvdChjZW50cm9pZCBsYXJnZXIgZmFjZSwgc21hbGxlciBmYWNlIG5vcm1hbCkgLSBzbWFsbGVyIGZhY2Ugb2Zmc2V0ID4gLXRvbGVyYW5jZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtGYWNlfSBmYWNlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1lcmdlVHlwZSAtIEVpdGhlciBNRVJHRV9OT05fQ09OVkVYX1dSVF9MQVJHRVJfRkFDRSBvclxuICAgICAqIE1FUkdFX05PTl9DT05WRVhcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZG9BZGphY2VudE1lcmdlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZG9BZGphY2VudE1lcmdlKGZhY2UsIG1lcmdlVHlwZSkge1xuICAgICAgdmFyIGVkZ2UgPSBmYWNlLmVkZ2U7XG4gICAgICB2YXIgY29udmV4ID0gdHJ1ZTtcbiAgICAgIHZhciBpdCA9IDA7XG4gICAgICBkbyB7XG4gICAgICAgIGlmIChpdCA+PSBmYWNlLm5WZXJ0aWNlcykge1xuICAgICAgICAgIHRocm93IEVycm9yKCdtZXJnZSByZWN1cnNpb24gbGltaXQgZXhjZWVkZWQnKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3Bwb3NpdGVGYWNlID0gZWRnZS5vcHBvc2l0ZS5mYWNlO1xuICAgICAgICB2YXIgbWVyZ2UgPSBmYWxzZTtcblxuICAgICAgICAvLyBJbXBvcnRhbnQgbm90ZXMgYWJvdXQgdGhlIGFsZ29yaXRobSB0byBtZXJnZSBmYWNlc1xuICAgICAgICAvL1xuICAgICAgICAvLyAtIEdpdmVuIGEgdmVydGV4IGBleWVWZXJ0ZXhgIHRoYXQgd2lsbCBiZSBhZGRlZCB0byB0aGUgaHVsbFxuICAgICAgICAvLyAgIGFsbCB0aGUgZmFjZXMgdGhhdCBjYW5ub3Qgc2VlIGBleWVWZXJ0ZXhgIGFyZSBkZWZpbmVkIGFzIGZvbGxvd3NcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgICBkb3Qodiwgbm90IHZpc2libGUgZmFjZSBub3JtYWwpIC0gbm90IHZpc2libGUgb2Zmc2V0IDwgdG9sZXJhbmNlXG4gICAgICAgIC8vXG4gICAgICAgIC8vIC0gVHdvIGZhY2VzIGNhbiBiZSBtZXJnZWQgd2hlbiB0aGUgY2VudHJvaWQgb2Ygb25lIG9mIHRoZXNlIGZhY2VzXG4gICAgICAgIC8vIHByb2plY3RlZCB0byB0aGUgbm9ybWFsIG9mIHRoZSBvdGhlciBmYWNlIG1pbnVzIHRoZSBvdGhlciBmYWNlIG9mZnNldFxuICAgICAgICAvLyBpcyBpbiB0aGUgcmFuZ2UgW3RvbGVyYW5jZSwgLXRvbGVyYW5jZV1cbiAgICAgICAgLy8gLSBTaW5jZSBgZmFjZWAgKGdpdmVuIGluIHRoZSBpbnB1dCBmb3IgdGhpcyBtZXRob2QpIGhhcyBwYXNzZWQgdGhlXG4gICAgICAgIC8vIGNoZWNrIGFib3ZlIHdlIG9ubHkgaGF2ZSB0byBjaGVjayB0aGUgbG93ZXIgYm91bmQgZS5nLlxuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgIGRvdCh2LCBub3QgdmlzaWJsZSBmYWNlIG5vcm1hbCkgLSBub3QgdmlzaWJsZSBvZmZzZXQgPiAtdG9sZXJhbmNlXG4gICAgICAgIC8vXG4gICAgICAgIGlmIChtZXJnZVR5cGUgPT09IE1FUkdFX05PTl9DT05WRVgpIHtcbiAgICAgICAgICBpZiAodGhpcy5vcHBvc2l0ZUZhY2VEaXN0YW5jZShlZGdlKSA+IC10aGlzLnRvbGVyYW5jZSB8fCB0aGlzLm9wcG9zaXRlRmFjZURpc3RhbmNlKGVkZ2Uub3Bwb3NpdGUpID4gLXRoaXMudG9sZXJhbmNlKSB7XG4gICAgICAgICAgICBtZXJnZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChmYWNlLmFyZWEgPiBvcHBvc2l0ZUZhY2UuYXJlYSkge1xuICAgICAgICAgICAgaWYgKHRoaXMub3Bwb3NpdGVGYWNlRGlzdGFuY2UoZWRnZSkgPiAtdGhpcy50b2xlcmFuY2UpIHtcbiAgICAgICAgICAgICAgbWVyZ2UgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm9wcG9zaXRlRmFjZURpc3RhbmNlKGVkZ2Uub3Bwb3NpdGUpID4gLXRoaXMudG9sZXJhbmNlKSB7XG4gICAgICAgICAgICAgIGNvbnZleCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHBvc2l0ZUZhY2VEaXN0YW5jZShlZGdlLm9wcG9zaXRlKSA+IC10aGlzLnRvbGVyYW5jZSkge1xuICAgICAgICAgICAgICBtZXJnZSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMub3Bwb3NpdGVGYWNlRGlzdGFuY2UoZWRnZSkgPiAtdGhpcy50b2xlcmFuY2UpIHtcbiAgICAgICAgICAgICAgY29udmV4ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG1lcmdlKSB7XG4gICAgICAgICAgICBkZWJ1Zy5sb2dnZXIoJ2ZhY2UgbWVyZ2UnKTtcbiAgICAgICAgICAgIC8vIHdoZW4gdHdvIGZhY2VzIGFyZSBtZXJnZWQgaXQgbWlnaHQgYmUgcG9zc2libGUgdGhhdCByZWR1bmRhbnQgZmFjZXNcbiAgICAgICAgICAgIC8vIGFyZSBkZXN0cm95ZWQsIGluIHRoYXQgY2FzZSBtb3ZlIGFsbCB0aGUgdmlzaWJsZSB2ZXJ0aWNlcyBmcm9tIHRoZVxuICAgICAgICAgICAgLy8gZGVzdHJveWVkIGZhY2VzIHRvIHRoZSBgdW5jbGFpbWVkYCB2ZXJ0ZXggbGlzdFxuICAgICAgICAgICAgdmFyIGRpc2NhcmRlZEZhY2VzID0gZmFjZS5tZXJnZUFkamFjZW50RmFjZXMoZWRnZSwgW10pO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkaXNjYXJkZWRGYWNlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUZhY2VWZXJ0aWNlcyhkaXNjYXJkZWRGYWNlc1tpXSwgZmFjZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWRnZSA9IGVkZ2UubmV4dDtcbiAgICAgICAgaXQgKz0gMTtcbiAgICAgIH0gd2hpbGUgKGVkZ2UgIT09IGZhY2UuZWRnZSk7XG4gICAgICBpZiAoIWNvbnZleCkge1xuICAgICAgICBmYWNlLm1hcmsgPSBfRmFjZS5OT05fQ09OVkVYO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSB2ZXJ0ZXggdG8gdGhlIGh1bGwgd2l0aCB0aGUgZm9sbG93aW5nIGFsZ29yaXRobVxuICAgICAqXG4gICAgICogLSBDb21wdXRlIHRoZSBgaG9yaXpvbmAgd2hpY2ggaXMgYSBjaGFpbiBvZiBoYWxmIGVkZ2VzLCBmb3IgYW4gZWRnZSB0b1xuICAgICAqICAgYmVsb25nIHRvIHRoaXMgZ3JvdXAgaXQgbXVzdCBiZSB0aGUgZWRnZSBjb25uZWN0aW5nIGEgZmFjZSB0aGF0IGNhblxuICAgICAqICAgc2VlIGBleWVWZXJ0ZXhgIGFuZCBhIGZhY2Ugd2hpY2ggY2Fubm90IHNlZSBgZXllVmVydGV4YFxuICAgICAqIC0gQWxsIHRoZSBmYWNlcyB0aGF0IGNhbiBzZWUgYGV5ZVZlcnRleGAgaGF2ZSBpdHMgdmlzaWJsZSB2ZXJ0aWNlcyByZW1vdmVkXG4gICAgICogICBmcm9tIHRoZSBjbGFpbWVkIFZlcnRleExpc3RcbiAgICAgKiAtIEEgbmV3IHNldCBvZiBmYWNlcyBpcyBjcmVhdGVkIHdpdGggZWFjaCBlZGdlIG9mIHRoZSBgaG9yaXpvbmAgYW5kXG4gICAgICogICBgZXllVmVydGV4YCwgZWFjaCBmYWNlIGlzIGNvbm5lY3RlZCB3aXRoIHRoZSBvcHBvc2l0ZSBob3Jpem9uIGZhY2UgYW5kXG4gICAgICogICB0aGUgZmFjZSBvbiB0aGUgbGVmdC9yaWdodFxuICAgICAqIC0gVGhlIG5ldyBmYWNlcyBhcmUgbWVyZ2VkIGlmIHBvc3NpYmxlIHdpdGggdGhlIG9wcG9zaXRlIGhvcml6b24gZmFjZSBmaXJzdFxuICAgICAqICAgYW5kIHRoZW4gdGhlIGZhY2VzIG9uIHRoZSByaWdodC9sZWZ0XG4gICAgICogLSBUaGUgdmVydGljZXMgcmVtb3ZlZCBmcm9tIGFsbCB0aGUgdmlzaWJsZSBmYWNlcyBhcmUgYXNzaWduZWQgdG8gdGhlIG5ld1xuICAgICAqICAgZmFjZXMgaWYgcG9zc2libGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVydGV4fSBleWVWZXJ0ZXhcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnYWRkVmVydGV4VG9IdWxsJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkVmVydGV4VG9IdWxsKGV5ZVZlcnRleCkge1xuICAgICAgdmFyIGhvcml6b24gPSBbXTtcblxuICAgICAgdGhpcy51bmNsYWltZWQuY2xlYXIoKTtcblxuICAgICAgLy8gcmVtb3ZlIGBleWVWZXJ0ZXhgIGZyb20gYGV5ZVZlcnRleC5mYWNlYCBzbyB0aGF0IGl0IGNhbid0IGJlIGFkZGVkIHRvIHRoZVxuICAgICAgLy8gYHVuY2xhaW1lZGAgdmVydGV4IGxpc3RcbiAgICAgIHRoaXMucmVtb3ZlVmVydGV4RnJvbUZhY2UoZXllVmVydGV4LCBleWVWZXJ0ZXguZmFjZSk7XG4gICAgICB0aGlzLmNvbXB1dGVIb3Jpem9uKGV5ZVZlcnRleC5wb2ludCwgbnVsbCwgZXllVmVydGV4LmZhY2UsIGhvcml6b24pO1xuICAgICAgZGVidWcoZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmxvZygnaG9yaXpvbiAlaicsIGhvcml6b24ubWFwKGZ1bmN0aW9uIChlZGdlKSB7XG4gICAgICAgICAgcmV0dXJuIGVkZ2UuaGVhZCgpLmluZGV4O1xuICAgICAgICB9KSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuYWRkTmV3RmFjZXMoZXllVmVydGV4LCBob3Jpem9uKTtcblxuICAgICAgZGVidWcubG9nZ2VyKCdmaXJzdCBtZXJnZScpO1xuXG4gICAgICAvLyBmaXJzdCBtZXJnZSBwYXNzXG4gICAgICAvLyBEbyB0aGUgbWVyZ2Ugd2l0aCByZXNwZWN0IHRvIHRoZSBsYXJnZXIgZmFjZVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm5ld0ZhY2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHZhciBmYWNlID0gdGhpcy5uZXdGYWNlc1tpXTtcbiAgICAgICAgaWYgKGZhY2UubWFyayA9PT0gX0ZhY2UuVklTSUJMRSkge1xuICAgICAgICAgIHdoaWxlICh0aGlzLmRvQWRqYWNlbnRNZXJnZShmYWNlLCBNRVJHRV9OT05fQ09OVkVYX1dSVF9MQVJHRVJfRkFDRSkpIHt9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZGVidWcubG9nZ2VyKCdzZWNvbmQgbWVyZ2UnKTtcblxuICAgICAgLy8gc2Vjb25kIG1lcmdlIHBhc3NcbiAgICAgIC8vIERvIHRoZSBtZXJnZSBvbiBub24gY29udmV4IGZhY2VzIChhIGZhY2UgaXMgbWFya2VkIGFzIG5vbiBjb252ZXggaW4gdGhlXG4gICAgICAvLyBmaXJzdCBwYXNzKVxuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMubmV3RmFjZXMubGVuZ3RoOyBfaSArPSAxKSB7XG4gICAgICAgIHZhciBfZmFjZSA9IHRoaXMubmV3RmFjZXNbX2ldO1xuICAgICAgICBpZiAoX2ZhY2UubWFyayA9PT0gX0ZhY2UuTk9OX0NPTlZFWCkge1xuICAgICAgICAgIF9mYWNlLm1hcmsgPSBfRmFjZS5WSVNJQkxFO1xuICAgICAgICAgIHdoaWxlICh0aGlzLmRvQWRqYWNlbnRNZXJnZShfZmFjZSwgTUVSR0VfTk9OX0NPTlZFWCkpIHt9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZGVidWcubG9nZ2VyKCdyZWFzc2lnbmluZyBwb2ludHMgdG8gbmV3RmFjZXMnKTtcbiAgICAgIC8vIHJlYXNzaWduIGB1bmNsYWltZWRgIHZlcnRpY2VzIHRvIHRoZSBuZXcgZmFjZXNcbiAgICAgIHRoaXMucmVzb2x2ZVVuY2xhaW1lZFBvaW50cyh0aGlzLm5ld0ZhY2VzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdidWlsZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJ1aWxkKCkge1xuICAgICAgdmFyIGl0ZXJhdGlvbnMgPSAwO1xuICAgICAgdmFyIGV5ZVZlcnRleCA9IHZvaWQgMDtcbiAgICAgIHRoaXMuY3JlYXRlSW5pdGlhbFNpbXBsZXgoKTtcbiAgICAgIHdoaWxlIChleWVWZXJ0ZXggPSB0aGlzLm5leHRWZXJ0ZXhUb0FkZCgpKSB7XG4gICAgICAgIGl0ZXJhdGlvbnMgKz0gMTtcbiAgICAgICAgZGVidWcubG9nZ2VyKCc9PSBpdGVyYXRpb24gJWogPT0nLCBpdGVyYXRpb25zKTtcbiAgICAgICAgZGVidWcubG9nZ2VyKCduZXh0IHZlcnRleCB0byBhZGQgPSAlZCAlaicsIGV5ZVZlcnRleC5pbmRleCwgZXllVmVydGV4LnBvaW50KTtcbiAgICAgICAgdGhpcy5hZGRWZXJ0ZXhUb0h1bGwoZXllVmVydGV4KTtcbiAgICAgICAgZGVidWcubG9nZ2VyKCdlbmQnKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVpbmRleEZhY2VBbmRWZXJ0aWNlcygpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBRdWlja0h1bGw7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFF1aWNrSHVsbDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3F1aWNraHVsbDNkL2Rpc3QvUXVpY2tIdWxsLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogcG9pbnQtbGluZS1kaXN0YW5jZVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNSBNYXVyaWNpbyBQb3BwZVxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICovXG5cbid1c2Ugc3RyaWN0J1xuXG52YXIgZGlzdGFuY2VTcXVhcmVkID0gcmVxdWlyZSgnLi9zcXVhcmVkJylcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocG9pbnQsIGEsIGIpIHtcbiAgcmV0dXJuIE1hdGguc3FydChkaXN0YW5jZVNxdWFyZWQocG9pbnQsIGEsIGIpKVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcG9pbnQtbGluZS1kaXN0YW5jZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHN1YnRyYWN0ID0gcmVxdWlyZSgnZ2wtdmVjMy9zdWJ0cmFjdCcpXG52YXIgY3Jvc3MgPSByZXF1aXJlKCdnbC12ZWMzL2Nyb3NzJylcbnZhciBzcXVhcmVkTGVuZ3RoID0gcmVxdWlyZSgnZ2wtdmVjMy9zcXVhcmVkTGVuZ3RoJylcbnZhciBhYiA9IFtdXG52YXIgYXAgPSBbXVxudmFyIGNyID0gW11cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocCwgYSwgYikge1xuICAvLyAvLyA9PSB2ZWN0b3Igc29sdXRpb25cbiAgLy8gdmFyIG5vcm1hbGl6ZSA9IHJlcXVpcmUoJ2dsLXZlYzMvbm9ybWFsaXplJylcbiAgLy8gdmFyIHNjYWxlQW5kQWRkID0gcmVxdWlyZSgnZ2wtdmVjMy9zY2FsZUFuZEFkZCcpXG4gIC8vIHZhciBkb3QgPSByZXF1aXJlKCdnbC12ZWMzL2RvdCcpXG4gIC8vIHZhciBzcXVhcmVkRGlzdGFuY2UgPSByZXF1aXJlKCdnbC12ZWMzL3NxdWFyZWREaXN0YW5jZScpXG4gIC8vIC8vIG4gPSB2ZWN0b3IgYGFiYCBub3JtYWxpemVkXG4gIC8vIHZhciBuID0gW11cbiAgLy8gLy8gcHJvamVjdGlvbiA9IHByb2plY3Rpb24gb2YgYHBvaW50YCBvbiBgbmBcbiAgLy8gdmFyIHByb2plY3Rpb24gPSBbXVxuICAvLyBub3JtYWxpemUobiwgc3VidHJhY3QobiwgYSwgYikpXG4gIC8vIHNjYWxlQW5kQWRkKHByb2plY3Rpb24sIGEsIG4sIGRvdChuLCBwKSlcbiAgLy8gcmV0dXJuIHNxdWFyZWREaXN0YW5jZShwcm9qZWN0aW9uLCBwKVxuXG4gIC8vID09IHBhcmFsbGVsb2dyYW0gc29sdXRpb25cbiAgLy9cbiAgLy8gICAgICAgICAgICBzXG4gIC8vICAgICAgX19hX19fX19fX19iX19cbiAgLy8gICAgICAgLyAgIHwgICAgL1xuICAvLyAgICAgIC8gICBofCAgIC9cbiAgLy8gICAgIC9fX19fX3xfXy9cbiAgLy8gICAgcFxuICAvL1xuICAvLyAgcyA9IGIgLSBhXG4gIC8vICBhcmVhID0gcyAqIGhcbiAgLy8gIHxhcCB4IHN8ID0gcyAqIGhcbiAgLy8gIGggPSB8YXAgeCBzfCAvIHNcbiAgLy9cbiAgc3VidHJhY3QoYWIsIGIsIGEpXG4gIHN1YnRyYWN0KGFwLCBwLCBhKVxuICB2YXIgYXJlYSA9IHNxdWFyZWRMZW5ndGgoY3Jvc3MoY3IsIGFwLCBhYikpXG4gIHZhciBzID0gc3F1YXJlZExlbmd0aChhYilcbiAgaWYgKHMgPT09IDApIHtcbiAgICB0aHJvdyBFcnJvcignYSBhbmQgYiBhcmUgdGhlIHNhbWUgcG9pbnQnKVxuICB9XG4gIHJldHVybiBhcmVhIC8gc1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcG9pbnQtbGluZS1kaXN0YW5jZS9zcXVhcmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHNxdWFyZWRMZW5ndGg7XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgc3F1YXJlZCBsZW5ndGggb2YgYSB2ZWMzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBhIHZlY3RvciB0byBjYWxjdWxhdGUgc3F1YXJlZCBsZW5ndGggb2ZcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHNxdWFyZWQgbGVuZ3RoIG9mIGFcbiAqL1xuZnVuY3Rpb24gc3F1YXJlZExlbmd0aChhKSB7XG4gICAgdmFyIHggPSBhWzBdLFxuICAgICAgICB5ID0gYVsxXSxcbiAgICAgICAgeiA9IGFbMl1cbiAgICByZXR1cm4geCp4ICsgeSp5ICsgeip6XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2wtdmVjMy9zcXVhcmVkTGVuZ3RoLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbm9ybWFsaXplID0gcmVxdWlyZSgnZ2wtdmVjMy9ub3JtYWxpemUnKVxudmFyIHN1YiA9IHJlcXVpcmUoJ2dsLXZlYzMvc3VidHJhY3QnKVxudmFyIGNyb3NzID0gcmVxdWlyZSgnZ2wtdmVjMy9jcm9zcycpXG52YXIgdG1wID0gWzAsIDAsIDBdXG5cbm1vZHVsZS5leHBvcnRzID0gcGxhbmVOb3JtYWxcblxuZnVuY3Rpb24gcGxhbmVOb3JtYWwgKG91dCwgcG9pbnQxLCBwb2ludDIsIHBvaW50Mykge1xuICBzdWIob3V0LCBwb2ludDEsIHBvaW50MilcbiAgc3ViKHRtcCwgcG9pbnQyLCBwb2ludDMpXG4gIGNyb3NzKG91dCwgb3V0LCB0bXApXG4gIHJldHVybiBub3JtYWxpemUob3V0LCBvdXQpXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2V0LXBsYW5lLW5vcm1hbC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBUaGlzIGlzIHRoZSB3ZWIgYnJvd3NlciBpbXBsZW1lbnRhdGlvbiBvZiBgZGVidWcoKWAuXG4gKlxuICogRXhwb3NlIGBkZWJ1ZygpYCBhcyB0aGUgbW9kdWxlLlxuICovXG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGVidWcnKTtcbmV4cG9ydHMubG9nID0gbG9nO1xuZXhwb3J0cy5mb3JtYXRBcmdzID0gZm9ybWF0QXJncztcbmV4cG9ydHMuc2F2ZSA9IHNhdmU7XG5leHBvcnRzLmxvYWQgPSBsb2FkO1xuZXhwb3J0cy51c2VDb2xvcnMgPSB1c2VDb2xvcnM7XG5leHBvcnRzLnN0b3JhZ2UgPSAndW5kZWZpbmVkJyAhPSB0eXBlb2YgY2hyb21lXG4gICAgICAgICAgICAgICAmJiAndW5kZWZpbmVkJyAhPSB0eXBlb2YgY2hyb21lLnN0b3JhZ2VcbiAgICAgICAgICAgICAgICAgID8gY2hyb21lLnN0b3JhZ2UubG9jYWxcbiAgICAgICAgICAgICAgICAgIDogbG9jYWxzdG9yYWdlKCk7XG5cbi8qKlxuICogQ29sb3JzLlxuICovXG5cbmV4cG9ydHMuY29sb3JzID0gW1xuICAnbGlnaHRzZWFncmVlbicsXG4gICdmb3Jlc3RncmVlbicsXG4gICdnb2xkZW5yb2QnLFxuICAnZG9kZ2VyYmx1ZScsXG4gICdkYXJrb3JjaGlkJyxcbiAgJ2NyaW1zb24nXG5dO1xuXG4vKipcbiAqIEN1cnJlbnRseSBvbmx5IFdlYktpdC1iYXNlZCBXZWIgSW5zcGVjdG9ycywgRmlyZWZveCA+PSB2MzEsXG4gKiBhbmQgdGhlIEZpcmVidWcgZXh0ZW5zaW9uIChhbnkgRmlyZWZveCB2ZXJzaW9uKSBhcmUga25vd25cbiAqIHRvIHN1cHBvcnQgXCIlY1wiIENTUyBjdXN0b21pemF0aW9ucy5cbiAqXG4gKiBUT0RPOiBhZGQgYSBgbG9jYWxTdG9yYWdlYCB2YXJpYWJsZSB0byBleHBsaWNpdGx5IGVuYWJsZS9kaXNhYmxlIGNvbG9yc1xuICovXG5cbmZ1bmN0aW9uIHVzZUNvbG9ycygpIHtcbiAgLy8gTkI6IEluIGFuIEVsZWN0cm9uIHByZWxvYWQgc2NyaXB0LCBkb2N1bWVudCB3aWxsIGJlIGRlZmluZWQgYnV0IG5vdCBmdWxseVxuICAvLyBpbml0aWFsaXplZC4gU2luY2Ugd2Uga25vdyB3ZSdyZSBpbiBDaHJvbWUsIHdlJ2xsIGp1c3QgZGV0ZWN0IHRoaXMgY2FzZVxuICAvLyBleHBsaWNpdGx5XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucHJvY2VzcyAmJiB3aW5kb3cucHJvY2Vzcy50eXBlID09PSAncmVuZGVyZXInKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyBpcyB3ZWJraXQ/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE2NDU5NjA2LzM3Njc3M1xuICAvLyBkb2N1bWVudCBpcyB1bmRlZmluZWQgaW4gcmVhY3QtbmF0aXZlOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QtbmF0aXZlL3B1bGwvMTYzMlxuICByZXR1cm4gKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuV2Via2l0QXBwZWFyYW5jZSkgfHxcbiAgICAvLyBpcyBmaXJlYnVnPyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zOTgxMjAvMzc2NzczXG4gICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5jb25zb2xlICYmICh3aW5kb3cuY29uc29sZS5maXJlYnVnIHx8ICh3aW5kb3cuY29uc29sZS5leGNlcHRpb24gJiYgd2luZG93LmNvbnNvbGUudGFibGUpKSkgfHxcbiAgICAvLyBpcyBmaXJlZm94ID49IHYzMT9cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1Rvb2xzL1dlYl9Db25zb2xlI1N0eWxpbmdfbWVzc2FnZXNcbiAgICAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2ZpcmVmb3hcXC8oXFxkKykvKSAmJiBwYXJzZUludChSZWdFeHAuJDEsIDEwKSA+PSAzMSkgfHxcbiAgICAvLyBkb3VibGUgY2hlY2sgd2Via2l0IGluIHVzZXJBZ2VudCBqdXN0IGluIGNhc2Ugd2UgYXJlIGluIGEgd29ya2VyXG4gICAgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9hcHBsZXdlYmtpdFxcLyhcXGQrKS8pKTtcbn1cblxuLyoqXG4gKiBNYXAgJWogdG8gYEpTT04uc3RyaW5naWZ5KClgLCBzaW5jZSBubyBXZWIgSW5zcGVjdG9ycyBkbyB0aGF0IGJ5IGRlZmF1bHQuXG4gKi9cblxuZXhwb3J0cy5mb3JtYXR0ZXJzLmogPSBmdW5jdGlvbih2KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHYpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gJ1tVbmV4cGVjdGVkSlNPTlBhcnNlRXJyb3JdOiAnICsgZXJyLm1lc3NhZ2U7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBDb2xvcml6ZSBsb2cgYXJndW1lbnRzIGlmIGVuYWJsZWQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXRBcmdzKGFyZ3MpIHtcbiAgdmFyIHVzZUNvbG9ycyA9IHRoaXMudXNlQ29sb3JzO1xuXG4gIGFyZ3NbMF0gPSAodXNlQ29sb3JzID8gJyVjJyA6ICcnKVxuICAgICsgdGhpcy5uYW1lc3BhY2VcbiAgICArICh1c2VDb2xvcnMgPyAnICVjJyA6ICcgJylcbiAgICArIGFyZ3NbMF1cbiAgICArICh1c2VDb2xvcnMgPyAnJWMgJyA6ICcgJylcbiAgICArICcrJyArIGV4cG9ydHMuaHVtYW5pemUodGhpcy5kaWZmKTtcblxuICBpZiAoIXVzZUNvbG9ycykgcmV0dXJuO1xuXG4gIHZhciBjID0gJ2NvbG9yOiAnICsgdGhpcy5jb2xvcjtcbiAgYXJncy5zcGxpY2UoMSwgMCwgYywgJ2NvbG9yOiBpbmhlcml0JylcblxuICAvLyB0aGUgZmluYWwgXCIlY1wiIGlzIHNvbWV3aGF0IHRyaWNreSwgYmVjYXVzZSB0aGVyZSBjb3VsZCBiZSBvdGhlclxuICAvLyBhcmd1bWVudHMgcGFzc2VkIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIgdGhlICVjLCBzbyB3ZSBuZWVkIHRvXG4gIC8vIGZpZ3VyZSBvdXQgdGhlIGNvcnJlY3QgaW5kZXggdG8gaW5zZXJ0IHRoZSBDU1MgaW50b1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgbGFzdEMgPSAwO1xuICBhcmdzWzBdLnJlcGxhY2UoLyVbYS16QS1aJV0vZywgZnVuY3Rpb24obWF0Y2gpIHtcbiAgICBpZiAoJyUlJyA9PT0gbWF0Y2gpIHJldHVybjtcbiAgICBpbmRleCsrO1xuICAgIGlmICgnJWMnID09PSBtYXRjaCkge1xuICAgICAgLy8gd2Ugb25seSBhcmUgaW50ZXJlc3RlZCBpbiB0aGUgKmxhc3QqICVjXG4gICAgICAvLyAodGhlIHVzZXIgbWF5IGhhdmUgcHJvdmlkZWQgdGhlaXIgb3duKVxuICAgICAgbGFzdEMgPSBpbmRleDtcbiAgICB9XG4gIH0pO1xuXG4gIGFyZ3Muc3BsaWNlKGxhc3RDLCAwLCBjKTtcbn1cblxuLyoqXG4gKiBJbnZva2VzIGBjb25zb2xlLmxvZygpYCB3aGVuIGF2YWlsYWJsZS5cbiAqIE5vLW9wIHdoZW4gYGNvbnNvbGUubG9nYCBpcyBub3QgYSBcImZ1bmN0aW9uXCIuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBsb2coKSB7XG4gIC8vIHRoaXMgaGFja2VyeSBpcyByZXF1aXJlZCBmb3IgSUU4LzksIHdoZXJlXG4gIC8vIHRoZSBgY29uc29sZS5sb2dgIGZ1bmN0aW9uIGRvZXNuJ3QgaGF2ZSAnYXBwbHknXG4gIHJldHVybiAnb2JqZWN0JyA9PT0gdHlwZW9mIGNvbnNvbGVcbiAgICAmJiBjb25zb2xlLmxvZ1xuICAgICYmIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGUubG9nLCBjb25zb2xlLCBhcmd1bWVudHMpO1xufVxuXG4vKipcbiAqIFNhdmUgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBzYXZlKG5hbWVzcGFjZXMpIHtcbiAgdHJ5IHtcbiAgICBpZiAobnVsbCA9PSBuYW1lc3BhY2VzKSB7XG4gICAgICBleHBvcnRzLnN0b3JhZ2UucmVtb3ZlSXRlbSgnZGVidWcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhwb3J0cy5zdG9yYWdlLmRlYnVnID0gbmFtZXNwYWNlcztcbiAgICB9XG4gIH0gY2F0Y2goZSkge31cbn1cblxuLyoqXG4gKiBMb2FkIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHJldHVybnMgdGhlIHByZXZpb3VzbHkgcGVyc2lzdGVkIGRlYnVnIG1vZGVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb2FkKCkge1xuICB2YXIgcjtcbiAgdHJ5IHtcbiAgICByID0gZXhwb3J0cy5zdG9yYWdlLmRlYnVnO1xuICB9IGNhdGNoKGUpIHt9XG5cbiAgLy8gSWYgZGVidWcgaXNuJ3Qgc2V0IGluIExTLCBhbmQgd2UncmUgaW4gRWxlY3Ryb24sIHRyeSB0byBsb2FkICRERUJVR1xuICBpZiAoIXIgJiYgdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmICdlbnYnIGluIHByb2Nlc3MpIHtcbiAgICByID0gcHJvY2Vzcy5lbnYuREVCVUc7XG4gIH1cblxuICByZXR1cm4gcjtcbn1cblxuLyoqXG4gKiBFbmFibGUgbmFtZXNwYWNlcyBsaXN0ZWQgaW4gYGxvY2FsU3RvcmFnZS5kZWJ1Z2AgaW5pdGlhbGx5LlxuICovXG5cbmV4cG9ydHMuZW5hYmxlKGxvYWQoKSk7XG5cbi8qKlxuICogTG9jYWxzdG9yYWdlIGF0dGVtcHRzIHRvIHJldHVybiB0aGUgbG9jYWxzdG9yYWdlLlxuICpcbiAqIFRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2Ugc2FmYXJpIHRocm93c1xuICogd2hlbiBhIHVzZXIgZGlzYWJsZXMgY29va2llcy9sb2NhbHN0b3JhZ2VcbiAqIGFuZCB5b3UgYXR0ZW1wdCB0byBhY2Nlc3MgaXQuXG4gKlxuICogQHJldHVybiB7TG9jYWxTdG9yYWdlfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbG9jYWxzdG9yYWdlKCkge1xuICB0cnkge1xuICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlO1xuICB9IGNhdGNoIChlKSB7fVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyoqXG4gKiBUaGlzIGlzIHRoZSBjb21tb24gbG9naWMgZm9yIGJvdGggdGhlIE5vZGUuanMgYW5kIHdlYiBicm93c2VyXG4gKiBpbXBsZW1lbnRhdGlvbnMgb2YgYGRlYnVnKClgLlxuICpcbiAqIEV4cG9zZSBgZGVidWcoKWAgYXMgdGhlIG1vZHVsZS5cbiAqL1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVEZWJ1Zy5kZWJ1ZyA9IGNyZWF0ZURlYnVnWydkZWZhdWx0J10gPSBjcmVhdGVEZWJ1ZztcbmV4cG9ydHMuY29lcmNlID0gY29lcmNlO1xuZXhwb3J0cy5kaXNhYmxlID0gZGlzYWJsZTtcbmV4cG9ydHMuZW5hYmxlID0gZW5hYmxlO1xuZXhwb3J0cy5lbmFibGVkID0gZW5hYmxlZDtcbmV4cG9ydHMuaHVtYW5pemUgPSByZXF1aXJlKCdtcycpO1xuXG4vKipcbiAqIFRoZSBjdXJyZW50bHkgYWN0aXZlIGRlYnVnIG1vZGUgbmFtZXMsIGFuZCBuYW1lcyB0byBza2lwLlxuICovXG5cbmV4cG9ydHMubmFtZXMgPSBbXTtcbmV4cG9ydHMuc2tpcHMgPSBbXTtcblxuLyoqXG4gKiBNYXAgb2Ygc3BlY2lhbCBcIiVuXCIgaGFuZGxpbmcgZnVuY3Rpb25zLCBmb3IgdGhlIGRlYnVnIFwiZm9ybWF0XCIgYXJndW1lbnQuXG4gKlxuICogVmFsaWQga2V5IG5hbWVzIGFyZSBhIHNpbmdsZSwgbG93ZXIgb3IgdXBwZXItY2FzZSBsZXR0ZXIsIGkuZS4gXCJuXCIgYW5kIFwiTlwiLlxuICovXG5cbmV4cG9ydHMuZm9ybWF0dGVycyA9IHt9O1xuXG4vKipcbiAqIFByZXZpb3VzIGxvZyB0aW1lc3RhbXAuXG4gKi9cblxudmFyIHByZXZUaW1lO1xuXG4vKipcbiAqIFNlbGVjdCBhIGNvbG9yLlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZVxuICogQHJldHVybiB7TnVtYmVyfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gc2VsZWN0Q29sb3IobmFtZXNwYWNlKSB7XG4gIHZhciBoYXNoID0gMCwgaTtcblxuICBmb3IgKGkgaW4gbmFtZXNwYWNlKSB7XG4gICAgaGFzaCAgPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIG5hbWVzcGFjZS5jaGFyQ29kZUF0KGkpO1xuICAgIGhhc2ggfD0gMDsgLy8gQ29udmVydCB0byAzMmJpdCBpbnRlZ2VyXG4gIH1cblxuICByZXR1cm4gZXhwb3J0cy5jb2xvcnNbTWF0aC5hYnMoaGFzaCkgJSBleHBvcnRzLmNvbG9ycy5sZW5ndGhdO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIGRlYnVnZ2VyIHdpdGggdGhlIGdpdmVuIGBuYW1lc3BhY2VgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVEZWJ1ZyhuYW1lc3BhY2UpIHtcblxuICBmdW5jdGlvbiBkZWJ1ZygpIHtcbiAgICAvLyBkaXNhYmxlZD9cbiAgICBpZiAoIWRlYnVnLmVuYWJsZWQpIHJldHVybjtcblxuICAgIHZhciBzZWxmID0gZGVidWc7XG5cbiAgICAvLyBzZXQgYGRpZmZgIHRpbWVzdGFtcFxuICAgIHZhciBjdXJyID0gK25ldyBEYXRlKCk7XG4gICAgdmFyIG1zID0gY3VyciAtIChwcmV2VGltZSB8fCBjdXJyKTtcbiAgICBzZWxmLmRpZmYgPSBtcztcbiAgICBzZWxmLnByZXYgPSBwcmV2VGltZTtcbiAgICBzZWxmLmN1cnIgPSBjdXJyO1xuICAgIHByZXZUaW1lID0gY3VycjtcblxuICAgIC8vIHR1cm4gdGhlIGBhcmd1bWVudHNgIGludG8gYSBwcm9wZXIgQXJyYXlcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuXG4gICAgYXJnc1swXSA9IGV4cG9ydHMuY29lcmNlKGFyZ3NbMF0pO1xuXG4gICAgaWYgKCdzdHJpbmcnICE9PSB0eXBlb2YgYXJnc1swXSkge1xuICAgICAgLy8gYW55dGhpbmcgZWxzZSBsZXQncyBpbnNwZWN0IHdpdGggJU9cbiAgICAgIGFyZ3MudW5zaGlmdCgnJU8nKTtcbiAgICB9XG5cbiAgICAvLyBhcHBseSBhbnkgYGZvcm1hdHRlcnNgIHRyYW5zZm9ybWF0aW9uc1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgYXJnc1swXSA9IGFyZ3NbMF0ucmVwbGFjZSgvJShbYS16QS1aJV0pL2csIGZ1bmN0aW9uKG1hdGNoLCBmb3JtYXQpIHtcbiAgICAgIC8vIGlmIHdlIGVuY291bnRlciBhbiBlc2NhcGVkICUgdGhlbiBkb24ndCBpbmNyZWFzZSB0aGUgYXJyYXkgaW5kZXhcbiAgICAgIGlmIChtYXRjaCA9PT0gJyUlJykgcmV0dXJuIG1hdGNoO1xuICAgICAgaW5kZXgrKztcbiAgICAgIHZhciBmb3JtYXR0ZXIgPSBleHBvcnRzLmZvcm1hdHRlcnNbZm9ybWF0XTtcbiAgICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZm9ybWF0dGVyKSB7XG4gICAgICAgIHZhciB2YWwgPSBhcmdzW2luZGV4XTtcbiAgICAgICAgbWF0Y2ggPSBmb3JtYXR0ZXIuY2FsbChzZWxmLCB2YWwpO1xuXG4gICAgICAgIC8vIG5vdyB3ZSBuZWVkIHRvIHJlbW92ZSBgYXJnc1tpbmRleF1gIHNpbmNlIGl0J3MgaW5saW5lZCBpbiB0aGUgYGZvcm1hdGBcbiAgICAgICAgYXJncy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBpbmRleC0tO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1hdGNoO1xuICAgIH0pO1xuXG4gICAgLy8gYXBwbHkgZW52LXNwZWNpZmljIGZvcm1hdHRpbmcgKGNvbG9ycywgZXRjLilcbiAgICBleHBvcnRzLmZvcm1hdEFyZ3MuY2FsbChzZWxmLCBhcmdzKTtcblxuICAgIHZhciBsb2dGbiA9IGRlYnVnLmxvZyB8fCBleHBvcnRzLmxvZyB8fCBjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUpO1xuICAgIGxvZ0ZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICB9XG5cbiAgZGVidWcubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuICBkZWJ1Zy5lbmFibGVkID0gZXhwb3J0cy5lbmFibGVkKG5hbWVzcGFjZSk7XG4gIGRlYnVnLnVzZUNvbG9ycyA9IGV4cG9ydHMudXNlQ29sb3JzKCk7XG4gIGRlYnVnLmNvbG9yID0gc2VsZWN0Q29sb3IobmFtZXNwYWNlKTtcblxuICAvLyBlbnYtc3BlY2lmaWMgaW5pdGlhbGl6YXRpb24gbG9naWMgZm9yIGRlYnVnIGluc3RhbmNlc1xuICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGV4cG9ydHMuaW5pdCkge1xuICAgIGV4cG9ydHMuaW5pdChkZWJ1Zyk7XG4gIH1cblxuICByZXR1cm4gZGVidWc7XG59XG5cbi8qKlxuICogRW5hYmxlcyBhIGRlYnVnIG1vZGUgYnkgbmFtZXNwYWNlcy4gVGhpcyBjYW4gaW5jbHVkZSBtb2Rlc1xuICogc2VwYXJhdGVkIGJ5IGEgY29sb24gYW5kIHdpbGRjYXJkcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBlbmFibGUobmFtZXNwYWNlcykge1xuICBleHBvcnRzLnNhdmUobmFtZXNwYWNlcyk7XG5cbiAgZXhwb3J0cy5uYW1lcyA9IFtdO1xuICBleHBvcnRzLnNraXBzID0gW107XG5cbiAgdmFyIHNwbGl0ID0gKHR5cGVvZiBuYW1lc3BhY2VzID09PSAnc3RyaW5nJyA/IG5hbWVzcGFjZXMgOiAnJykuc3BsaXQoL1tcXHMsXSsvKTtcbiAgdmFyIGxlbiA9IHNwbGl0Lmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKCFzcGxpdFtpXSkgY29udGludWU7IC8vIGlnbm9yZSBlbXB0eSBzdHJpbmdzXG4gICAgbmFtZXNwYWNlcyA9IHNwbGl0W2ldLnJlcGxhY2UoL1xcKi9nLCAnLio/Jyk7XG4gICAgaWYgKG5hbWVzcGFjZXNbMF0gPT09ICctJykge1xuICAgICAgZXhwb3J0cy5za2lwcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcy5zdWJzdHIoMSkgKyAnJCcpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhwb3J0cy5uYW1lcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcyArICckJykpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIERpc2FibGUgZGVidWcgb3V0cHV0LlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZGlzYWJsZSgpIHtcbiAgZXhwb3J0cy5lbmFibGUoJycpO1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gbW9kZSBuYW1lIGlzIGVuYWJsZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZW5hYmxlZChuYW1lKSB7XG4gIHZhciBpLCBsZW47XG4gIGZvciAoaSA9IDAsIGxlbiA9IGV4cG9ydHMuc2tpcHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoZXhwb3J0cy5za2lwc1tpXS50ZXN0KG5hbWUpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAoaSA9IDAsIGxlbiA9IGV4cG9ydHMubmFtZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoZXhwb3J0cy5uYW1lc1tpXS50ZXN0KG5hbWUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIENvZXJjZSBgdmFsYC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWxcbiAqIEByZXR1cm4ge01peGVkfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gY29lcmNlKHZhbCkge1xuICBpZiAodmFsIGluc3RhbmNlb2YgRXJyb3IpIHJldHVybiB2YWwuc3RhY2sgfHwgdmFsLm1lc3NhZ2U7XG4gIHJldHVybiB2YWw7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvZGVidWcuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogSGVscGVycy5cbiAqL1xuXG52YXIgcyA9IDEwMDA7XG52YXIgbSA9IHMgKiA2MDtcbnZhciBoID0gbSAqIDYwO1xudmFyIGQgPSBoICogMjQ7XG52YXIgeSA9IGQgKiAzNjUuMjU7XG5cbi8qKlxuICogUGFyc2Ugb3IgZm9ybWF0IHRoZSBnaXZlbiBgdmFsYC5cbiAqXG4gKiBPcHRpb25zOlxuICpcbiAqICAtIGBsb25nYCB2ZXJib3NlIGZvcm1hdHRpbmcgW2ZhbHNlXVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0gdmFsXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAdGhyb3dzIHtFcnJvcn0gdGhyb3cgYW4gZXJyb3IgaWYgdmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSBudW1iZXJcbiAqIEByZXR1cm4ge1N0cmluZ3xOdW1iZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odmFsLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWw7XG4gIGlmICh0eXBlID09PSAnc3RyaW5nJyAmJiB2YWwubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBwYXJzZSh2YWwpO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInICYmIGlzTmFOKHZhbCkgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMubG9uZyA/IGZtdExvbmcodmFsKSA6IGZtdFNob3J0KHZhbCk7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2YWwgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyBvciBhIHZhbGlkIG51bWJlci4gdmFsPScgK1xuICAgICAgSlNPTi5zdHJpbmdpZnkodmFsKVxuICApO1xufTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gYHN0cmAgYW5kIHJldHVybiBtaWxsaXNlY29uZHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7TnVtYmVyfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcGFyc2Uoc3RyKSB7XG4gIHN0ciA9IFN0cmluZyhzdHIpO1xuICBpZiAoc3RyLmxlbmd0aCA+IDEwMCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbWF0Y2ggPSAvXigoPzpcXGQrKT9cXC4/XFxkKykgKihtaWxsaXNlY29uZHM/fG1zZWNzP3xtc3xzZWNvbmRzP3xzZWNzP3xzfG1pbnV0ZXM/fG1pbnM/fG18aG91cnM/fGhycz98aHxkYXlzP3xkfHllYXJzP3x5cnM/fHkpPyQvaS5leGVjKFxuICAgIHN0clxuICApO1xuICBpZiAoIW1hdGNoKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBuID0gcGFyc2VGbG9hdChtYXRjaFsxXSk7XG4gIHZhciB0eXBlID0gKG1hdGNoWzJdIHx8ICdtcycpLnRvTG93ZXJDYXNlKCk7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ3llYXJzJzpcbiAgICBjYXNlICd5ZWFyJzpcbiAgICBjYXNlICd5cnMnOlxuICAgIGNhc2UgJ3lyJzpcbiAgICBjYXNlICd5JzpcbiAgICAgIHJldHVybiBuICogeTtcbiAgICBjYXNlICdkYXlzJzpcbiAgICBjYXNlICdkYXknOlxuICAgIGNhc2UgJ2QnOlxuICAgICAgcmV0dXJuIG4gKiBkO1xuICAgIGNhc2UgJ2hvdXJzJzpcbiAgICBjYXNlICdob3VyJzpcbiAgICBjYXNlICdocnMnOlxuICAgIGNhc2UgJ2hyJzpcbiAgICBjYXNlICdoJzpcbiAgICAgIHJldHVybiBuICogaDtcbiAgICBjYXNlICdtaW51dGVzJzpcbiAgICBjYXNlICdtaW51dGUnOlxuICAgIGNhc2UgJ21pbnMnOlxuICAgIGNhc2UgJ21pbic6XG4gICAgY2FzZSAnbSc6XG4gICAgICByZXR1cm4gbiAqIG07XG4gICAgY2FzZSAnc2Vjb25kcyc6XG4gICAgY2FzZSAnc2Vjb25kJzpcbiAgICBjYXNlICdzZWNzJzpcbiAgICBjYXNlICdzZWMnOlxuICAgIGNhc2UgJ3MnOlxuICAgICAgcmV0dXJuIG4gKiBzO1xuICAgIGNhc2UgJ21pbGxpc2Vjb25kcyc6XG4gICAgY2FzZSAnbWlsbGlzZWNvbmQnOlxuICAgIGNhc2UgJ21zZWNzJzpcbiAgICBjYXNlICdtc2VjJzpcbiAgICBjYXNlICdtcyc6XG4gICAgICByZXR1cm4gbjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuXG4vKipcbiAqIFNob3J0IGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdFNob3J0KG1zKSB7XG4gIGlmIChtcyA+PSBkKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBkKSArICdkJztcbiAgfVxuICBpZiAobXMgPj0gaCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gaCkgKyAnaCc7XG4gIH1cbiAgaWYgKG1zID49IG0pIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG0pICsgJ20nO1xuICB9XG4gIGlmIChtcyA+PSBzKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBzKSArICdzJztcbiAgfVxuICByZXR1cm4gbXMgKyAnbXMnO1xufVxuXG4vKipcbiAqIExvbmcgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10TG9uZyhtcykge1xuICByZXR1cm4gcGx1cmFsKG1zLCBkLCAnZGF5JykgfHxcbiAgICBwbHVyYWwobXMsIGgsICdob3VyJykgfHxcbiAgICBwbHVyYWwobXMsIG0sICdtaW51dGUnKSB8fFxuICAgIHBsdXJhbChtcywgcywgJ3NlY29uZCcpIHx8XG4gICAgbXMgKyAnIG1zJztcbn1cblxuLyoqXG4gKiBQbHVyYWxpemF0aW9uIGhlbHBlci5cbiAqL1xuXG5mdW5jdGlvbiBwbHVyYWwobXMsIG4sIG5hbWUpIHtcbiAgaWYgKG1zIDwgbikge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAobXMgPCBuICogMS41KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IobXMgLyBuKSArICcgJyArIG5hbWU7XG4gIH1cbiAgcmV0dXJuIE1hdGguY2VpbChtcyAvIG4pICsgJyAnICsgbmFtZSArICdzJztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21zL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFZlcnRleExpc3QgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFZlcnRleExpc3QoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFZlcnRleExpc3QpO1xuXG4gICAgdGhpcy5oZWFkID0gbnVsbDtcbiAgICB0aGlzLnRhaWwgPSBudWxsO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFZlcnRleExpc3QsIFt7XG4gICAga2V5OiBcImNsZWFyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgdGhpcy5oZWFkID0gdGhpcy50YWlsID0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnNlcnRzIGEgYG5vZGVgIGJlZm9yZSBgdGFyZ2V0YCwgaXQncyBhc3N1bWVkIHRoYXRcbiAgICAgKiBgdGFyZ2V0YCBiZWxvbmdzIHRvIHRoaXMgZG91Ymx5IGxpbmtlZCBsaXN0XG4gICAgICpcbiAgICAgKiBAcGFyYW0geyp9IHRhcmdldFxuICAgICAqIEBwYXJhbSB7Kn0gbm9kZVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaW5zZXJ0QmVmb3JlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluc2VydEJlZm9yZSh0YXJnZXQsIG5vZGUpIHtcbiAgICAgIG5vZGUucHJldiA9IHRhcmdldC5wcmV2O1xuICAgICAgbm9kZS5uZXh0ID0gdGFyZ2V0O1xuICAgICAgaWYgKCFub2RlLnByZXYpIHtcbiAgICAgICAgdGhpcy5oZWFkID0gbm9kZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUucHJldi5uZXh0ID0gbm9kZTtcbiAgICAgIH1cbiAgICAgIHRhcmdldC5wcmV2ID0gbm9kZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnNlcnRzIGEgYG5vZGVgIGFmdGVyIGB0YXJnZXRgLCBpdCdzIGFzc3VtZWQgdGhhdFxuICAgICAqIGB0YXJnZXRgIGJlbG9uZ3MgdG8gdGhpcyBkb3VibHkgbGlua2VkIGxpc3RcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVydGV4fSB0YXJnZXRcbiAgICAgKiBAcGFyYW0ge1ZlcnRleH0gbm9kZVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaW5zZXJ0QWZ0ZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5zZXJ0QWZ0ZXIodGFyZ2V0LCBub2RlKSB7XG4gICAgICBub2RlLnByZXYgPSB0YXJnZXQ7XG4gICAgICBub2RlLm5leHQgPSB0YXJnZXQubmV4dDtcbiAgICAgIGlmICghbm9kZS5uZXh0KSB7XG4gICAgICAgIHRoaXMudGFpbCA9IG5vZGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlLm5leHQucHJldiA9IG5vZGU7XG4gICAgICB9XG4gICAgICB0YXJnZXQubmV4dCA9IG5vZGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXBwZW5kcyBhIGBub2RlYCB0byB0aGUgZW5kIG9mIHRoaXMgZG91Ymx5IGxpbmtlZCBsaXN0XG4gICAgICogTm90ZTogYG5vZGUubmV4dGAgd2lsbCBiZSB1bmxpbmtlZCBmcm9tIGBub2RlYFxuICAgICAqIE5vdGU6IGlmIGBub2RlYCBpcyBwYXJ0IG9mIGFub3RoZXIgbGlua2VkIGxpc3QgY2FsbCBgYWRkQWxsYCBpbnN0ZWFkXG4gICAgICpcbiAgICAgKiBAcGFyYW0geyp9IG5vZGVcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFkZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGQobm9kZSkge1xuICAgICAgaWYgKCF0aGlzLmhlYWQpIHtcbiAgICAgICAgdGhpcy5oZWFkID0gbm9kZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGFpbC5uZXh0ID0gbm9kZTtcbiAgICAgIH1cbiAgICAgIG5vZGUucHJldiA9IHRoaXMudGFpbDtcbiAgICAgIC8vIHNpbmNlIG5vZGUgaXMgdGhlIG5ldyBlbmQgaXQgZG9lc24ndCBoYXZlIGEgbmV4dCBub2RlXG4gICAgICBub2RlLm5leHQgPSBudWxsO1xuICAgICAgdGhpcy50YWlsID0gbm9kZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBcHBlbmRzIGEgY2hhaW4gb2Ygbm9kZXMgd2hlcmUgYG5vZGVgIGlzIHRoZSBoZWFkLFxuICAgICAqIHRoZSBkaWZmZXJlbmNlIHdpdGggYGFkZGAgaXMgdGhhdCBpdCBjb3JyZWN0bHkgc2V0cyB0aGUgcG9zaXRpb25cbiAgICAgKiBvZiB0aGUgbm9kZSBsaXN0IGB0YWlsYCBwcm9wZXJ0eVxuICAgICAqXG4gICAgICogQHBhcmFtIHsqfSBub2RlXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhZGRBbGxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkQWxsKG5vZGUpIHtcbiAgICAgIGlmICghdGhpcy5oZWFkKSB7XG4gICAgICAgIHRoaXMuaGVhZCA9IG5vZGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRhaWwubmV4dCA9IG5vZGU7XG4gICAgICB9XG4gICAgICBub2RlLnByZXYgPSB0aGlzLnRhaWw7XG5cbiAgICAgIC8vIGZpbmQgdGhlIGVuZCBvZiB0aGUgbGlzdFxuICAgICAgd2hpbGUgKG5vZGUubmV4dCkge1xuICAgICAgICBub2RlID0gbm9kZS5uZXh0O1xuICAgICAgfVxuICAgICAgdGhpcy50YWlsID0gbm9kZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWxldGVzIGEgYG5vZGVgIGZyb20gdGhpcyBsaW5rZWQgbGlzdCwgaXQncyBhc3N1bWVkIHRoYXQgYG5vZGVgIGlzIGFcbiAgICAgKiBtZW1iZXIgb2YgdGhpcyBsaW5rZWQgbGlzdFxuICAgICAqXG4gICAgICogQHBhcmFtIHsqfSBub2RlXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKG5vZGUpIHtcbiAgICAgIGlmICghbm9kZS5wcmV2KSB7XG4gICAgICAgIHRoaXMuaGVhZCA9IG5vZGUubmV4dDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUucHJldi5uZXh0ID0gbm9kZS5uZXh0O1xuICAgICAgfVxuXG4gICAgICBpZiAoIW5vZGUubmV4dCkge1xuICAgICAgICB0aGlzLnRhaWwgPSBub2RlLnByZXY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlLm5leHQucHJldiA9IG5vZGUucHJldjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgY2hhaW4gb2Ygbm9kZXMgd2hvc2UgaGVhZCBpcyBgYWAgYW5kIHdob3NlIHRhaWwgaXMgYGJgLFxuICAgICAqIGl0J3MgYXNzdW1lZCB0aGF0IGBhYCBhbmQgYGJgIGJlbG9uZyB0byB0aGlzIGxpc3QgYW5kIGFsc28gdGhhdCBgYWBcbiAgICAgKiBjb21lcyBiZWZvcmUgYGJgIGluIHRoZSBsaW5rZWQgbGlzdFxuICAgICAqXG4gICAgICogQHBhcmFtIHsqfSBhXG4gICAgICogQHBhcmFtIHsqfSBiXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVDaGFpblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVDaGFpbihhLCBiKSB7XG4gICAgICBpZiAoIWEucHJldikge1xuICAgICAgICB0aGlzLmhlYWQgPSBiLm5leHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhLnByZXYubmV4dCA9IGIubmV4dDtcbiAgICAgIH1cblxuICAgICAgaWYgKCFiLm5leHQpIHtcbiAgICAgICAgdGhpcy50YWlsID0gYS5wcmV2O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYi5uZXh0LnByZXYgPSBhLnByZXY7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZpcnN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZpcnN0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaGVhZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNFbXB0eVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc0VtcHR5KCkge1xuICAgICAgcmV0dXJuICF0aGlzLmhlYWQ7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFZlcnRleExpc3Q7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFZlcnRleExpc3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3F1aWNraHVsbDNkL2Rpc3QvVmVydGV4TGlzdC5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBWZXJ0ZXggPSBmdW5jdGlvbiBWZXJ0ZXgocG9pbnQsIGluZGV4KSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBWZXJ0ZXgpO1xuXG4gIHRoaXMucG9pbnQgPSBwb2ludDtcbiAgLy8gaW5kZXggaW4gdGhlIGlucHV0IGFycmF5XG4gIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgLy8gdmVydGV4IGlzIGEgZG91YmxlIGxpbmtlZCBsaXN0IG5vZGVcbiAgdGhpcy5uZXh0ID0gbnVsbDtcbiAgdGhpcy5wcmV2ID0gbnVsbDtcbiAgLy8gdGhlIGZhY2UgdGhhdCBpcyBhYmxlIHRvIHNlZSB0aGlzIHBvaW50XG4gIHRoaXMuZmFjZSA9IG51bGw7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBWZXJ0ZXg7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3F1aWNraHVsbDNkL2Rpc3QvVmVydGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkRFTEVURUQgPSBleHBvcnRzLk5PTl9DT05WRVggPSBleHBvcnRzLlZJU0lCTEUgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfZGVidWdGbiA9IHJlcXVpcmUoJ2RlYnVnLWZuJyk7XG5cbnZhciBfZGVidWdGbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWJ1Z0ZuKTtcblxudmFyIF9kb3QgPSByZXF1aXJlKCdnbC12ZWMzL2RvdCcpO1xuXG52YXIgX2RvdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kb3QpO1xuXG52YXIgX2FkZCA9IHJlcXVpcmUoJ2dsLXZlYzMvYWRkJyk7XG5cbnZhciBfYWRkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkZCk7XG5cbnZhciBfc3VidHJhY3QgPSByZXF1aXJlKCdnbC12ZWMzL3N1YnRyYWN0Jyk7XG5cbnZhciBfc3VidHJhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3VidHJhY3QpO1xuXG52YXIgX2Nyb3NzID0gcmVxdWlyZSgnZ2wtdmVjMy9jcm9zcycpO1xuXG52YXIgX2Nyb3NzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Nyb3NzKTtcblxudmFyIF9jb3B5ID0gcmVxdWlyZSgnZ2wtdmVjMy9jb3B5Jyk7XG5cbnZhciBfY29weTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb3B5KTtcblxudmFyIF9sZW5ndGggPSByZXF1aXJlKCdnbC12ZWMzL2xlbmd0aCcpO1xuXG52YXIgX2xlbmd0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sZW5ndGgpO1xuXG52YXIgX3NjYWxlID0gcmVxdWlyZSgnZ2wtdmVjMy9zY2FsZScpO1xuXG52YXIgX3NjYWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NjYWxlKTtcblxudmFyIF9zY2FsZUFuZEFkZCA9IHJlcXVpcmUoJ2dsLXZlYzMvc2NhbGVBbmRBZGQnKTtcblxudmFyIF9zY2FsZUFuZEFkZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zY2FsZUFuZEFkZCk7XG5cbnZhciBfbm9ybWFsaXplID0gcmVxdWlyZSgnZ2wtdmVjMy9ub3JtYWxpemUnKTtcblxudmFyIF9ub3JtYWxpemUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbm9ybWFsaXplKTtcblxudmFyIF9IYWxmRWRnZSA9IHJlcXVpcmUoJy4vSGFsZkVkZ2UnKTtcblxudmFyIF9IYWxmRWRnZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9IYWxmRWRnZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBkZWJ1ZyA9ICgwLCBfZGVidWdGbjIuZGVmYXVsdCkoJ2ZhY2UnKTtcblxudmFyIFZJU0lCTEUgPSBleHBvcnRzLlZJU0lCTEUgPSAwO1xudmFyIE5PTl9DT05WRVggPSBleHBvcnRzLk5PTl9DT05WRVggPSAxO1xudmFyIERFTEVURUQgPSBleHBvcnRzLkRFTEVURUQgPSAyO1xuXG52YXIgRmFjZSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRmFjZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRmFjZSk7XG5cbiAgICB0aGlzLm5vcm1hbCA9IFtdO1xuICAgIHRoaXMuY2VudHJvaWQgPSBbXTtcbiAgICAvLyBzaWduZWQgZGlzdGFuY2UgZnJvbSBmYWNlIHRvIHRoZSBvcmlnaW5cbiAgICB0aGlzLm9mZnNldCA9IDA7XG4gICAgLy8gcG9pbnRlciB0byB0aGUgYSB2ZXJ0ZXggaW4gYSBkb3VibGUgbGlua2VkIGxpc3QgdGhpcyBmYWNlIGNhbiBzZWVcbiAgICB0aGlzLm91dHNpZGUgPSBudWxsO1xuICAgIHRoaXMubWFyayA9IFZJU0lCTEU7XG4gICAgdGhpcy5lZGdlID0gbnVsbDtcbiAgICB0aGlzLm5WZXJ0aWNlcyA9IDA7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRmFjZSwgW3tcbiAgICBrZXk6ICdnZXRFZGdlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RWRnZShpKSB7XG4gICAgICBpZiAodHlwZW9mIGkgIT09ICdudW1iZXInKSB7XG4gICAgICAgIHRocm93IEVycm9yKCdyZXF1aXJlcyBhIG51bWJlcicpO1xuICAgICAgfVxuICAgICAgdmFyIGl0ID0gdGhpcy5lZGdlO1xuICAgICAgd2hpbGUgKGkgPiAwKSB7XG4gICAgICAgIGl0ID0gaXQubmV4dDtcbiAgICAgICAgaSAtPSAxO1xuICAgICAgfVxuICAgICAgd2hpbGUgKGkgPCAwKSB7XG4gICAgICAgIGl0ID0gaXQucHJldjtcbiAgICAgICAgaSArPSAxO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGl0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXB1dGVOb3JtYWwnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wdXRlTm9ybWFsKCkge1xuICAgICAgdmFyIGUwID0gdGhpcy5lZGdlO1xuICAgICAgdmFyIGUxID0gZTAubmV4dDtcbiAgICAgIHZhciBlMiA9IGUxLm5leHQ7XG4gICAgICB2YXIgdjIgPSAoMCwgX3N1YnRyYWN0Mi5kZWZhdWx0KShbXSwgZTEuaGVhZCgpLnBvaW50LCBlMC5oZWFkKCkucG9pbnQpO1xuICAgICAgdmFyIHQgPSBbXTtcbiAgICAgIHZhciB2MSA9IFtdO1xuXG4gICAgICB0aGlzLm5WZXJ0aWNlcyA9IDI7XG4gICAgICB0aGlzLm5vcm1hbCA9IFswLCAwLCAwXTtcbiAgICAgIHdoaWxlIChlMiAhPT0gZTApIHtcbiAgICAgICAgKDAsIF9jb3B5Mi5kZWZhdWx0KSh2MSwgdjIpO1xuICAgICAgICAoMCwgX3N1YnRyYWN0Mi5kZWZhdWx0KSh2MiwgZTIuaGVhZCgpLnBvaW50LCBlMC5oZWFkKCkucG9pbnQpO1xuICAgICAgICAoMCwgX2FkZDIuZGVmYXVsdCkodGhpcy5ub3JtYWwsIHRoaXMubm9ybWFsLCAoMCwgX2Nyb3NzMi5kZWZhdWx0KSh0LCB2MSwgdjIpKTtcbiAgICAgICAgZTIgPSBlMi5uZXh0O1xuICAgICAgICB0aGlzLm5WZXJ0aWNlcyArPSAxO1xuICAgICAgfVxuICAgICAgdGhpcy5hcmVhID0gKDAsIF9sZW5ndGgyLmRlZmF1bHQpKHRoaXMubm9ybWFsKTtcbiAgICAgIC8vIG5vcm1hbGl6ZSB0aGUgdmVjdG9yLCBzaW5jZSB3ZSd2ZSBhbHJlYWR5IGNhbGN1bGF0ZWQgdGhlIGFyZWFcbiAgICAgIC8vIGl0J3MgY2hlYXBlciB0byBzY2FsZSB0aGUgdmVjdG9yIHVzaW5nIHRoaXMgcXVhbnRpdHkgaW5zdGVhZCBvZlxuICAgICAgLy8gZG9pbmcgdGhlIHNhbWUgb3BlcmF0aW9uIGFnYWluXG4gICAgICB0aGlzLm5vcm1hbCA9ICgwLCBfc2NhbGUyLmRlZmF1bHQpKHRoaXMubm9ybWFsLCB0aGlzLm5vcm1hbCwgMSAvIHRoaXMuYXJlYSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcHV0ZU5vcm1hbE1pbkFyZWEnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wdXRlTm9ybWFsTWluQXJlYShtaW5BcmVhKSB7XG4gICAgICB0aGlzLmNvbXB1dGVOb3JtYWwoKTtcbiAgICAgIGlmICh0aGlzLmFyZWEgPCBtaW5BcmVhKSB7XG4gICAgICAgIC8vIGNvbXB1dGUgdGhlIG5vcm1hbCB3aXRob3V0IHRoZSBsb25nZXN0IGVkZ2VcbiAgICAgICAgdmFyIG1heEVkZ2UgPSB2b2lkIDA7XG4gICAgICAgIHZhciBtYXhTcXVhcmVkTGVuZ3RoID0gMDtcbiAgICAgICAgdmFyIGVkZ2UgPSB0aGlzLmVkZ2U7XG5cbiAgICAgICAgLy8gZmluZCB0aGUgbG9uZ2VzdCBlZGdlIChpbiBsZW5ndGgpIGluIHRoZSBjaGFpbiBvZiBlZGdlc1xuICAgICAgICBkbyB7XG4gICAgICAgICAgdmFyIGxlbmd0aFNxdWFyZWQgPSBlZGdlLmxlbmd0aFNxdWFyZWQoKTtcbiAgICAgICAgICBpZiAobGVuZ3RoU3F1YXJlZCA+IG1heFNxdWFyZWRMZW5ndGgpIHtcbiAgICAgICAgICAgIG1heEVkZ2UgPSBlZGdlO1xuICAgICAgICAgICAgbWF4U3F1YXJlZExlbmd0aCA9IGxlbmd0aFNxdWFyZWQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVkZ2UgPSBlZGdlLm5leHQ7XG4gICAgICAgIH0gd2hpbGUgKGVkZ2UgIT09IHRoaXMuZWRnZSk7XG5cbiAgICAgICAgdmFyIHAxID0gbWF4RWRnZS50YWlsKCkucG9pbnQ7XG4gICAgICAgIHZhciBwMiA9IG1heEVkZ2UuaGVhZCgpLnBvaW50O1xuICAgICAgICB2YXIgbWF4VmVjdG9yID0gKDAsIF9zdWJ0cmFjdDIuZGVmYXVsdCkoW10sIHAyLCBwMSk7XG4gICAgICAgIHZhciBtYXhMZW5ndGggPSBNYXRoLnNxcnQobWF4U3F1YXJlZExlbmd0aCk7XG4gICAgICAgIC8vIG1heFZlY3RvciBpcyBub3JtYWxpemVkIGFmdGVyIHRoaXMgb3BlcmF0aW9uXG4gICAgICAgICgwLCBfc2NhbGUyLmRlZmF1bHQpKG1heFZlY3RvciwgbWF4VmVjdG9yLCAxIC8gbWF4TGVuZ3RoKTtcbiAgICAgICAgLy8gY29tcHV0ZSB0aGUgcHJvamVjdGlvbiBvZiBtYXhWZWN0b3Igb3ZlciB0aGlzIGZhY2Ugbm9ybWFsXG4gICAgICAgIHZhciBtYXhQcm9qZWN0aW9uID0gKDAsIF9kb3QyLmRlZmF1bHQpKHRoaXMubm9ybWFsLCBtYXhWZWN0b3IpO1xuICAgICAgICAvLyBzdWJ0cmFjdCB0aGUgcXVhbnRpdHkgbWF4RWRnZSBhZGRzIG9uIHRoZSBub3JtYWxcbiAgICAgICAgKDAsIF9zY2FsZUFuZEFkZDIuZGVmYXVsdCkodGhpcy5ub3JtYWwsIHRoaXMubm9ybWFsLCBtYXhWZWN0b3IsIC1tYXhQcm9qZWN0aW9uKTtcbiAgICAgICAgLy8gcmVub3JtYWxpemUgYHRoaXMubm9ybWFsYFxuICAgICAgICAoMCwgX25vcm1hbGl6ZTIuZGVmYXVsdCkodGhpcy5ub3JtYWwsIHRoaXMubm9ybWFsKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wdXRlQ2VudHJvaWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wdXRlQ2VudHJvaWQoKSB7XG4gICAgICB0aGlzLmNlbnRyb2lkID0gWzAsIDAsIDBdO1xuICAgICAgdmFyIGVkZ2UgPSB0aGlzLmVkZ2U7XG4gICAgICBkbyB7XG4gICAgICAgICgwLCBfYWRkMi5kZWZhdWx0KSh0aGlzLmNlbnRyb2lkLCB0aGlzLmNlbnRyb2lkLCBlZGdlLmhlYWQoKS5wb2ludCk7XG4gICAgICAgIGVkZ2UgPSBlZGdlLm5leHQ7XG4gICAgICB9IHdoaWxlIChlZGdlICE9PSB0aGlzLmVkZ2UpO1xuICAgICAgKDAsIF9zY2FsZTIuZGVmYXVsdCkodGhpcy5jZW50cm9pZCwgdGhpcy5jZW50cm9pZCwgMSAvIHRoaXMublZlcnRpY2VzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wdXRlTm9ybWFsQW5kQ2VudHJvaWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wdXRlTm9ybWFsQW5kQ2VudHJvaWQobWluQXJlYSkge1xuICAgICAgaWYgKHR5cGVvZiBtaW5BcmVhICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLmNvbXB1dGVOb3JtYWxNaW5BcmVhKG1pbkFyZWEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb21wdXRlTm9ybWFsKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmNvbXB1dGVDZW50cm9pZCgpO1xuICAgICAgdGhpcy5vZmZzZXQgPSAoMCwgX2RvdDIuZGVmYXVsdCkodGhpcy5ub3JtYWwsIHRoaXMuY2VudHJvaWQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Rpc3RhbmNlVG9QbGFuZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpc3RhbmNlVG9QbGFuZShwb2ludCkge1xuICAgICAgcmV0dXJuICgwLCBfZG90Mi5kZWZhdWx0KSh0aGlzLm5vcm1hbCwgcG9pbnQpIC0gdGhpcy5vZmZzZXQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKlxuICAgICAqIENvbm5lY3RzIHR3byBlZGdlcyBhc3N1bWluZyB0aGF0IHByZXYuaGVhZCgpLnBvaW50ID09PSBuZXh0LnRhaWwoKS5wb2ludFxuICAgICAqXG4gICAgICogQHBhcmFtIHtIYWxmRWRnZX0gcHJldlxuICAgICAqIEBwYXJhbSB7SGFsZkVkZ2V9IG5leHRcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnY29ubmVjdEhhbGZFZGdlcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbm5lY3RIYWxmRWRnZXMocHJldiwgbmV4dCkge1xuICAgICAgdmFyIGRpc2NhcmRlZEZhY2UgPSB2b2lkIDA7XG4gICAgICBpZiAocHJldi5vcHBvc2l0ZS5mYWNlID09PSBuZXh0Lm9wcG9zaXRlLmZhY2UpIHtcbiAgICAgICAgLy8gYHByZXZgIGlzIHJlbW92ZSBhIHJlZHVuZGFudCBlZGdlXG4gICAgICAgIHZhciBvcHBvc2l0ZUZhY2UgPSBuZXh0Lm9wcG9zaXRlLmZhY2U7XG4gICAgICAgIHZhciBvcHBvc2l0ZUVkZ2UgPSB2b2lkIDA7XG4gICAgICAgIGlmIChwcmV2ID09PSB0aGlzLmVkZ2UpIHtcbiAgICAgICAgICB0aGlzLmVkZ2UgPSBuZXh0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHBvc2l0ZUZhY2UublZlcnRpY2VzID09PSAzKSB7XG4gICAgICAgICAgLy8gY2FzZTpcbiAgICAgICAgICAvLyByZW1vdmUgdGhlIGZhY2Ugb24gdGhlIHJpZ2h0XG4gICAgICAgICAgLy9cbiAgICAgICAgICAvLyAgICAgICAvfFxcXG4gICAgICAgICAgLy8gICAgICAvIHwgXFwgdGhlIGZhY2Ugb24gdGhlIHJpZ2h0XG4gICAgICAgICAgLy8gICAgIC8gIHwgIFxcIC0tPiBvcHBvc2l0ZSBlZGdlXG4gICAgICAgICAgLy8gICAgLyBhIHwgICBcXFxuICAgICAgICAgIC8vICAgKi0tLS0qLS0tLSpcbiAgICAgICAgICAvLyAgLyAgICAgYiAgfCAgXFxcbiAgICAgICAgICAvLyAgICAgICAgICAg4pa+XG4gICAgICAgICAgLy8gICAgICByZWR1bmRhbnQgZWRnZVxuICAgICAgICAgIC8vXG4gICAgICAgICAgLy8gTm90ZTogdGhlIG9wcG9zaXRlIGVkZ2UgaXMgYWN0dWFsbHkgaW4gdGhlIGZhY2UgdG8gdGhlIHJpZ2h0XG4gICAgICAgICAgLy8gb2YgdGhlIGZhY2UgdG8gYmUgZGVzdHJveWVkXG4gICAgICAgICAgb3Bwb3NpdGVFZGdlID0gbmV4dC5vcHBvc2l0ZS5wcmV2Lm9wcG9zaXRlO1xuICAgICAgICAgIG9wcG9zaXRlRmFjZS5tYXJrID0gREVMRVRFRDtcbiAgICAgICAgICBkaXNjYXJkZWRGYWNlID0gb3Bwb3NpdGVGYWNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGNhc2U6XG4gICAgICAgICAgLy8gICAgICAgICAgdFxuICAgICAgICAgIC8vICAgICAgICAqLS0tLVxuICAgICAgICAgIC8vICAgICAgIC98IDwtIHJpZ2h0IGZhY2UncyByZWR1bmRhbnQgZWRnZVxuICAgICAgICAgIC8vICAgICAgLyB8IG9wcG9zaXRlIGVkZ2VcbiAgICAgICAgICAvLyAgICAgLyAgfCAg4pa0ICAgL1xuICAgICAgICAgIC8vICAgIC8gYSB8ICB8ICAvXG4gICAgICAgICAgLy8gICAqLS0tLSotLS0tKlxuICAgICAgICAgIC8vICAvICAgICBiICB8ICBcXFxuICAgICAgICAgIC8vICAgICAgICAgICDilr5cbiAgICAgICAgICAvLyAgICAgIHJlZHVuZGFudCBlZGdlXG4gICAgICAgICAgb3Bwb3NpdGVFZGdlID0gbmV4dC5vcHBvc2l0ZS5uZXh0O1xuICAgICAgICAgIC8vIG1ha2Ugc3VyZSB0aGF0IHRoZSBsaW5rIGBvcHBvc2l0ZUZhY2UuZWRnZWAgcG9pbnRzIGNvcnJlY3RseSBldmVuXG4gICAgICAgICAgLy8gYWZ0ZXIgdGhlIHJpZ2h0IGZhY2UgcmVkdW5kYW50IGVkZ2UgaXMgcmVtb3ZlZFxuICAgICAgICAgIGlmIChvcHBvc2l0ZUZhY2UuZWRnZSA9PT0gb3Bwb3NpdGVFZGdlLnByZXYpIHtcbiAgICAgICAgICAgIG9wcG9zaXRlRmFjZS5lZGdlID0gb3Bwb3NpdGVFZGdlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vICAgICAgIC98ICAgL1xuICAgICAgICAgIC8vICAgICAgLyB8IHQvb3Bwb3NpdGUgZWRnZVxuICAgICAgICAgIC8vICAgICAvICB8IC8g4pa0ICAvXG4gICAgICAgICAgLy8gICAgLyBhIHwvICB8IC9cbiAgICAgICAgICAvLyAgICotLS0tKi0tLS0qXG4gICAgICAgICAgLy8gIC8gICAgIGIgICAgIFxcXG4gICAgICAgICAgb3Bwb3NpdGVFZGdlLnByZXYgPSBvcHBvc2l0ZUVkZ2UucHJldi5wcmV2O1xuICAgICAgICAgIG9wcG9zaXRlRWRnZS5wcmV2Lm5leHQgPSBvcHBvc2l0ZUVkZ2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgL3xcbiAgICAgICAgLy8gICAgICAvIHxcbiAgICAgICAgLy8gICAgIC8gIHxcbiAgICAgICAgLy8gICAgLyBhIHxcbiAgICAgICAgLy8gICAqLS0tLSotLS0tKlxuICAgICAgICAvLyAgLyAgICAgYiAg4pa0ICBcXFxuICAgICAgICAvLyAgICAgICAgICAgfFxuICAgICAgICAvLyAgICAgcmVkdW5kYW50IGVkZ2VcbiAgICAgICAgbmV4dC5wcmV2ID0gcHJldi5wcmV2O1xuICAgICAgICBuZXh0LnByZXYubmV4dCA9IG5leHQ7XG5cbiAgICAgICAgLy8gICAgICAgLyBcXCAgXFxcbiAgICAgICAgLy8gICAgICAvICAgXFwtPlxcXG4gICAgICAgIC8vICAgICAvICAgICBcXDwtXFwgb3Bwb3NpdGUgZWRnZVxuICAgICAgICAvLyAgICAvIGEgICAgIFxcICBcXFxuICAgICAgICAvLyAgICotLS0tKi0tLS0qXG4gICAgICAgIC8vICAvICAgICBiICBeICBcXFxuICAgICAgICBuZXh0LnNldE9wcG9zaXRlKG9wcG9zaXRlRWRnZSk7XG5cbiAgICAgICAgb3Bwb3NpdGVGYWNlLmNvbXB1dGVOb3JtYWxBbmRDZW50cm9pZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdHJpdmlhbCBjYXNlXG4gICAgICAgIC8vICAgICAgICAqXG4gICAgICAgIC8vICAgICAgIC98XFxcbiAgICAgICAgLy8gICAgICAvIHwgXFxcbiAgICAgICAgLy8gICAgIC8gIHwtLT4gbmV4dFxuICAgICAgICAvLyAgICAvIGEgfCAgIFxcXG4gICAgICAgIC8vICAgKi0tLS0qLS0tLSpcbiAgICAgICAgLy8gICAgXFwgYiB8ICAgL1xuICAgICAgICAvLyAgICAgXFwgIHwtLT4gcHJldlxuICAgICAgICAvLyAgICAgIFxcIHwgL1xuICAgICAgICAvLyAgICAgICBcXHwvXG4gICAgICAgIC8vICAgICAgICAqXG4gICAgICAgIHByZXYubmV4dCA9IG5leHQ7XG4gICAgICAgIG5leHQucHJldiA9IHByZXY7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGlzY2FyZGVkRmFjZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdtZXJnZUFkamFjZW50RmFjZXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtZXJnZUFkamFjZW50RmFjZXMoYWRqYWNlbnRFZGdlLCBkaXNjYXJkZWRGYWNlcykge1xuICAgICAgdmFyIG9wcG9zaXRlRWRnZSA9IGFkamFjZW50RWRnZS5vcHBvc2l0ZTtcbiAgICAgIHZhciBvcHBvc2l0ZUZhY2UgPSBvcHBvc2l0ZUVkZ2UuZmFjZTtcblxuICAgICAgZGlzY2FyZGVkRmFjZXMucHVzaChvcHBvc2l0ZUZhY2UpO1xuICAgICAgb3Bwb3NpdGVGYWNlLm1hcmsgPSBERUxFVEVEO1xuXG4gICAgICAvLyBmaW5kIHRoZSBjaGFpbiBvZiBlZGdlcyB3aG9zZSBvcHBvc2l0ZSBmYWNlIGlzIGBvcHBvc2l0ZUZhY2VgXG4gICAgICAvL1xuICAgICAgLy8gICAgICAgICAgICAgICAgPT09PlxuICAgICAgLy8gICAgICBcXCAgICAgICAgIGZhY2UgICAgICAgICAvXG4gICAgICAvLyAgICAgICAqIC0tLS0gKiAtLS0tICogLS0tLSAqXG4gICAgICAvLyAgICAgIC8gICAgIG9wcG9zaXRlIGZhY2UgICAgXFxcbiAgICAgIC8vICAgICAgICAgICAgICAgIDw9PT1cbiAgICAgIC8vXG4gICAgICB2YXIgYWRqYWNlbnRFZGdlUHJldiA9IGFkamFjZW50RWRnZS5wcmV2O1xuICAgICAgdmFyIGFkamFjZW50RWRnZU5leHQgPSBhZGphY2VudEVkZ2UubmV4dDtcbiAgICAgIHZhciBvcHBvc2l0ZUVkZ2VQcmV2ID0gb3Bwb3NpdGVFZGdlLnByZXY7XG4gICAgICB2YXIgb3Bwb3NpdGVFZGdlTmV4dCA9IG9wcG9zaXRlRWRnZS5uZXh0O1xuXG4gICAgICAvLyBsZWZ0IGVkZ2VcbiAgICAgIHdoaWxlIChhZGphY2VudEVkZ2VQcmV2Lm9wcG9zaXRlLmZhY2UgPT09IG9wcG9zaXRlRmFjZSkge1xuICAgICAgICBhZGphY2VudEVkZ2VQcmV2ID0gYWRqYWNlbnRFZGdlUHJldi5wcmV2O1xuICAgICAgICBvcHBvc2l0ZUVkZ2VOZXh0ID0gb3Bwb3NpdGVFZGdlTmV4dC5uZXh0O1xuICAgICAgfVxuICAgICAgLy8gcmlnaHQgZWRnZVxuICAgICAgd2hpbGUgKGFkamFjZW50RWRnZU5leHQub3Bwb3NpdGUuZmFjZSA9PT0gb3Bwb3NpdGVGYWNlKSB7XG4gICAgICAgIGFkamFjZW50RWRnZU5leHQgPSBhZGphY2VudEVkZ2VOZXh0Lm5leHQ7XG4gICAgICAgIG9wcG9zaXRlRWRnZVByZXYgPSBvcHBvc2l0ZUVkZ2VQcmV2LnByZXY7XG4gICAgICB9XG4gICAgICAvLyBhZGphY2VudEVkZ2VQcmV2ICBcXCAgICAgICAgIGZhY2UgICAgICAgICAvIGFkamFjZW50RWRnZU5leHRcbiAgICAgIC8vICAgICAgICAgICAgICAgICAgICAqIC0tLS0gKiAtLS0tICogLS0tLSAqXG4gICAgICAvLyBvcHBvc2l0ZUVkZ2VOZXh0ICAvICAgICBvcHBvc2l0ZSBmYWNlICAgIFxcIG9wcG9zaXRlRWRnZVByZXZcblxuICAgICAgLy8gZml4IHRoZSBmYWNlIHJlZmVyZW5jZSBvZiBhbGwgdGhlIG9wcG9zaXRlIGVkZ2VzIHRoYXQgYXJlIG5vdCBwYXJ0IG9mXG4gICAgICAvLyB0aGUgZWRnZXMgd2hvc2Ugb3Bwb3NpdGUgZmFjZSBpcyBub3QgYGZhY2VgIGkuZS4gYWxsIHRoZSBlZGdlcyB0aGF0XG4gICAgICAvLyBgZmFjZWAgYW5kIGBvcHBvc2l0ZUZhY2VgIGRvIG5vdCBoYXZlIGluIGNvbW1vblxuICAgICAgdmFyIGVkZ2UgPSB2b2lkIDA7XG4gICAgICBmb3IgKGVkZ2UgPSBvcHBvc2l0ZUVkZ2VOZXh0OyBlZGdlICE9PSBvcHBvc2l0ZUVkZ2VQcmV2Lm5leHQ7IGVkZ2UgPSBlZGdlLm5leHQpIHtcbiAgICAgICAgZWRnZS5mYWNlID0gdGhpcztcbiAgICAgIH1cblxuICAgICAgLy8gbWFrZSBzdXJlIHRoYXQgYGZhY2UuZWRnZWAgaXMgbm90IG9uZSBvZiB0aGUgZWRnZXMgdG8gYmUgZGVzdHJveWVkXG4gICAgICAvLyBOb3RlOiBpdCdzIGltcG9ydGFudCBmb3IgaXQgdG8gYmUgYSBgbmV4dGAgZWRnZSBzaW5jZSBgcHJldmAgZWRnZXNcbiAgICAgIC8vIG1pZ2h0IGJlIGRlc3Ryb3llZCBvbiBgY29ubmVjdEhhbGZFZGdlc2BcbiAgICAgIHRoaXMuZWRnZSA9IGFkamFjZW50RWRnZU5leHQ7XG5cbiAgICAgIC8vIGNvbm5lY3QgdGhlIGV4dHJlbWVzXG4gICAgICAvLyBOb3RlOiBpdCBtaWdodCBiZSBwb3NzaWJsZSB0aGF0IGFmdGVyIGNvbm5lY3RpbmcgdGhlIGVkZ2VzIGEgdHJpYW5ndWxhclxuICAgICAgLy8gZmFjZSBtaWdodCBiZSByZWR1bmRhbnRcbiAgICAgIHZhciBkaXNjYXJkZWRGYWNlID0gdm9pZCAwO1xuICAgICAgZGlzY2FyZGVkRmFjZSA9IHRoaXMuY29ubmVjdEhhbGZFZGdlcyhvcHBvc2l0ZUVkZ2VQcmV2LCBhZGphY2VudEVkZ2VOZXh0KTtcbiAgICAgIGlmIChkaXNjYXJkZWRGYWNlKSB7XG4gICAgICAgIGRpc2NhcmRlZEZhY2VzLnB1c2goZGlzY2FyZGVkRmFjZSk7XG4gICAgICB9XG4gICAgICBkaXNjYXJkZWRGYWNlID0gdGhpcy5jb25uZWN0SGFsZkVkZ2VzKGFkamFjZW50RWRnZVByZXYsIG9wcG9zaXRlRWRnZU5leHQpO1xuICAgICAgaWYgKGRpc2NhcmRlZEZhY2UpIHtcbiAgICAgICAgZGlzY2FyZGVkRmFjZXMucHVzaChkaXNjYXJkZWRGYWNlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jb21wdXRlTm9ybWFsQW5kQ2VudHJvaWQoKTtcbiAgICAgIC8vIFRPRE86IGFkZGl0aW9uYWwgY29uc2lzdGVuY3kgY2hlY2tzXG4gICAgICByZXR1cm4gZGlzY2FyZGVkRmFjZXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29sbGVjdEluZGljZXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb2xsZWN0SW5kaWNlcygpIHtcbiAgICAgIHZhciBpbmRpY2VzID0gW107XG4gICAgICB2YXIgZWRnZSA9IHRoaXMuZWRnZTtcbiAgICAgIGRvIHtcbiAgICAgICAgaW5kaWNlcy5wdXNoKGVkZ2UuaGVhZCgpLmluZGV4KTtcbiAgICAgICAgZWRnZSA9IGVkZ2UubmV4dDtcbiAgICAgIH0gd2hpbGUgKGVkZ2UgIT09IHRoaXMuZWRnZSk7XG4gICAgICByZXR1cm4gaW5kaWNlcztcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogJ2NyZWF0ZVRyaWFuZ2xlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlVHJpYW5nbGUodjAsIHYxLCB2Mikge1xuICAgICAgdmFyIG1pbkFyZWEgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IDA7XG5cbiAgICAgIHZhciBmYWNlID0gbmV3IEZhY2UoKTtcbiAgICAgIHZhciBlMCA9IG5ldyBfSGFsZkVkZ2UyLmRlZmF1bHQodjAsIGZhY2UpO1xuICAgICAgdmFyIGUxID0gbmV3IF9IYWxmRWRnZTIuZGVmYXVsdCh2MSwgZmFjZSk7XG4gICAgICB2YXIgZTIgPSBuZXcgX0hhbGZFZGdlMi5kZWZhdWx0KHYyLCBmYWNlKTtcblxuICAgICAgLy8gam9pbiBlZGdlc1xuICAgICAgZTAubmV4dCA9IGUyLnByZXYgPSBlMTtcbiAgICAgIGUxLm5leHQgPSBlMC5wcmV2ID0gZTI7XG4gICAgICBlMi5uZXh0ID0gZTEucHJldiA9IGUwO1xuXG4gICAgICAvLyBtYWluIGhhbGYgZWRnZSByZWZlcmVuY2VcbiAgICAgIGZhY2UuZWRnZSA9IGUwO1xuICAgICAgZmFjZS5jb21wdXRlTm9ybWFsQW5kQ2VudHJvaWQobWluQXJlYSk7XG4gICAgICBkZWJ1ZyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubG9nKCdmYWNlIGNyZWF0ZWQgJWonLCBmYWNlLmNvbGxlY3RJbmRpY2VzKCkpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gZmFjZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRmFjZTtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRmFjZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9xdWlja2h1bGwzZC9kaXN0L0ZhY2UuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gYWRkO1xuXG4vKipcbiAqIEFkZHMgdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gYWRkKG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gKyBiWzBdXG4gICAgb3V0WzFdID0gYVsxXSArIGJbMV1cbiAgICBvdXRbMl0gPSBhWzJdICsgYlsyXVxuICAgIHJldHVybiBvdXRcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nbC12ZWMzL2FkZC5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBjb3B5O1xuXG4vKipcbiAqIENvcHkgdGhlIHZhbHVlcyBmcm9tIG9uZSB2ZWMzIHRvIGFub3RoZXJcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBzb3VyY2UgdmVjdG9yXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIGNvcHkob3V0LCBhKSB7XG4gICAgb3V0WzBdID0gYVswXVxuICAgIG91dFsxXSA9IGFbMV1cbiAgICBvdXRbMl0gPSBhWzJdXG4gICAgcmV0dXJuIG91dFxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dsLXZlYzMvY29weS5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBsZW5ndGg7XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgbGVuZ3RoIG9mIGEgdmVjM1xuICpcbiAqIEBwYXJhbSB7dmVjM30gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIGxlbmd0aCBvZlxuICogQHJldHVybnMge051bWJlcn0gbGVuZ3RoIG9mIGFcbiAqL1xuZnVuY3Rpb24gbGVuZ3RoKGEpIHtcbiAgICB2YXIgeCA9IGFbMF0sXG4gICAgICAgIHkgPSBhWzFdLFxuICAgICAgICB6ID0gYVsyXVxuICAgIHJldHVybiBNYXRoLnNxcnQoeCp4ICsgeSp5ICsgeip6KVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dsLXZlYzMvbGVuZ3RoLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHNjYWxlO1xuXG4vKipcbiAqIFNjYWxlcyBhIHZlYzMgYnkgYSBzY2FsYXIgbnVtYmVyXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgdmVjdG9yIHRvIHNjYWxlXG4gKiBAcGFyYW0ge051bWJlcn0gYiBhbW91bnQgdG8gc2NhbGUgdGhlIHZlY3RvciBieVxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiBzY2FsZShvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBhWzBdICogYlxuICAgIG91dFsxXSA9IGFbMV0gKiBiXG4gICAgb3V0WzJdID0gYVsyXSAqIGJcbiAgICByZXR1cm4gb3V0XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2wtdmVjMy9zY2FsZS5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBzY2FsZUFuZEFkZDtcblxuLyoqXG4gKiBBZGRzIHR3byB2ZWMzJ3MgYWZ0ZXIgc2NhbGluZyB0aGUgc2Vjb25kIG9wZXJhbmQgYnkgYSBzY2FsYXIgdmFsdWVcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gc2NhbGUgdGhlIGFtb3VudCB0byBzY2FsZSBiIGJ5IGJlZm9yZSBhZGRpbmdcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gc2NhbGVBbmRBZGQob3V0LCBhLCBiLCBzY2FsZSkge1xuICAgIG91dFswXSA9IGFbMF0gKyAoYlswXSAqIHNjYWxlKVxuICAgIG91dFsxXSA9IGFbMV0gKyAoYlsxXSAqIHNjYWxlKVxuICAgIG91dFsyXSA9IGFbMl0gKyAoYlsyXSAqIHNjYWxlKVxuICAgIHJldHVybiBvdXRcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nbC12ZWMzL3NjYWxlQW5kQWRkLmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfZGlzdGFuY2UgPSByZXF1aXJlKCdnbC12ZWMzL2Rpc3RhbmNlJyk7XG5cbnZhciBfZGlzdGFuY2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGlzdGFuY2UpO1xuXG52YXIgX3NxdWFyZWREaXN0YW5jZSA9IHJlcXVpcmUoJ2dsLXZlYzMvc3F1YXJlZERpc3RhbmNlJyk7XG5cbnZhciBfc3F1YXJlZERpc3RhbmNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NxdWFyZWREaXN0YW5jZSk7XG5cbnZhciBfZGVidWdGbiA9IHJlcXVpcmUoJ2RlYnVnLWZuJyk7XG5cbnZhciBfZGVidWdGbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWJ1Z0ZuKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIGRlYnVnID0gKDAsIF9kZWJ1Z0ZuMi5kZWZhdWx0KSgnaGFsZmVkZ2UnKTtcblxudmFyIEhhbGZFZGdlID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBIYWxmRWRnZSh2ZXJ0ZXgsIGZhY2UpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSGFsZkVkZ2UpO1xuXG4gICAgdGhpcy52ZXJ0ZXggPSB2ZXJ0ZXg7XG4gICAgdGhpcy5mYWNlID0gZmFjZTtcbiAgICB0aGlzLm5leHQgPSBudWxsO1xuICAgIHRoaXMucHJldiA9IG51bGw7XG4gICAgdGhpcy5vcHBvc2l0ZSA9IG51bGw7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoSGFsZkVkZ2UsIFt7XG4gICAga2V5OiAnaGVhZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhlYWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy52ZXJ0ZXg7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndGFpbCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRhaWwoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcmV2ID8gdGhpcy5wcmV2LnZlcnRleCA6IG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnbGVuZ3RoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGVuZ3RoKCkge1xuICAgICAgaWYgKHRoaXMudGFpbCgpKSB7XG4gICAgICAgIHJldHVybiAoMCwgX2Rpc3RhbmNlMi5kZWZhdWx0KSh0aGlzLnRhaWwoKS5wb2ludCwgdGhpcy5oZWFkKCkucG9pbnQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2xlbmd0aFNxdWFyZWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsZW5ndGhTcXVhcmVkKCkge1xuICAgICAgaWYgKHRoaXMudGFpbCgpKSB7XG4gICAgICAgIHJldHVybiAoMCwgX3NxdWFyZWREaXN0YW5jZTIuZGVmYXVsdCkodGhpcy50YWlsKCkucG9pbnQsIHRoaXMuaGVhZCgpLnBvaW50KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZXRPcHBvc2l0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldE9wcG9zaXRlKGVkZ2UpIHtcbiAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICBkZWJ1ZyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubG9nKCdvcHBvc2l0ZSAnICsgbWUudGFpbCgpLmluZGV4ICsgJyA8LS0+ICcgKyBtZS5oZWFkKCkuaW5kZXggKyAnIGJldHdlZW4gJyArIG1lLmZhY2UuY29sbGVjdEluZGljZXMoKSArICcsICcgKyBlZGdlLmZhY2UuY29sbGVjdEluZGljZXMoKSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMub3Bwb3NpdGUgPSBlZGdlO1xuICAgICAgZWRnZS5vcHBvc2l0ZSA9IHRoaXM7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEhhbGZFZGdlO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBIYWxmRWRnZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3F1aWNraHVsbDNkL2Rpc3QvSGFsZkVkZ2UuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZGlzdGFuY2U7XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZXVjbGlkaWFuIGRpc3RhbmNlIGJldHdlZW4gdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gZGlzdGFuY2UgYmV0d2VlbiBhIGFuZCBiXG4gKi9cbmZ1bmN0aW9uIGRpc3RhbmNlKGEsIGIpIHtcbiAgICB2YXIgeCA9IGJbMF0gLSBhWzBdLFxuICAgICAgICB5ID0gYlsxXSAtIGFbMV0sXG4gICAgICAgIHogPSBiWzJdIC0gYVsyXVxuICAgIHJldHVybiBNYXRoLnNxcnQoeCp4ICsgeSp5ICsgeip6KVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dsLXZlYzMvZGlzdGFuY2UuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gc3F1YXJlZERpc3RhbmNlO1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgZXVjbGlkaWFuIGRpc3RhbmNlIGJldHdlZW4gdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gc3F1YXJlZCBkaXN0YW5jZSBiZXR3ZWVuIGEgYW5kIGJcbiAqL1xuZnVuY3Rpb24gc3F1YXJlZERpc3RhbmNlKGEsIGIpIHtcbiAgICB2YXIgeCA9IGJbMF0gLSBhWzBdLFxuICAgICAgICB5ID0gYlsxXSAtIGFbMV0sXG4gICAgICAgIHogPSBiWzJdIC0gYVsyXVxuICAgIHJldHVybiB4KnggKyB5KnkgKyB6Knpcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nbC12ZWMzL3NxdWFyZWREaXN0YW5jZS5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgZW5naW5lOiBCb2lsZXJwbGF0ZUVuZ2luZSA9IHdpbmRvdztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb2xvclNjaGVtZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZm9yZWdyb3VuZDogbnVtYmVyW10sIHB1YmxpYyBzOiBzdHJpbmcsIHB1YmxpYyBhMTogKHQ6IG51bWJlcikgPT4gbnVtYmVyLCBwdWJsaWMgYTI6ICh0OiBudW1iZXIpID0+IG51bWJlcikgeyB9XHJcblxyXG4gICAgY29tcHV0ZSh0OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnMucmVwbGFjZSgnJGExJywgdGhpcy5hMSh0KS50b1N0cmluZygpKS5yZXBsYWNlKCckYTInLCB0aGlzLmEyKHQpLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBzd2lwZVRpbWUgPSAwLjE7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29sb3JNYW5hZ2VyIHtcclxuICAgIHByaXZhdGUgczogQ29sb3JTY2hlbWVbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSB0OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIGN1cnJlbnRDb2xvclNjaGVtZTogQ29sb3JTY2hlbWUpIHt9XHJcblxyXG4gICAgcmVuZGVyKGR0OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgdE5leHQgPSB0aGlzLnQgKyBkdDtcclxuICAgICAgICB3aGlsZSAodE5leHQgPiBzd2lwZVRpbWUpIHtcclxuICAgICAgICAgICAgdE5leHQgLT0gc3dpcGVUaW1lO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Q29sb3JTY2hlbWUgPSB0aGlzLnMuc2hpZnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnQgPSB0TmV4dDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IHRoaXMuY3VycmVudENvbG9yU2NoZW1lLmNvbXB1dGUoMSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3UGVyY2VudCA9IHRoaXMudCAvIHN3aXBlVGltZTtcclxuICAgICAgICAgICAgY29uc3QgYmdTdHJpbmcgPSB0aGlzLmN1cnJlbnRDb2xvclNjaGVtZS5jb21wdXRlKDEgLSBuZXdQZXJjZW50KSArICcsICcgKyB0aGlzLnNbMF0uY29tcHV0ZSgxKTtcclxuICAgICAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IGJnU3RyaW5nO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5zdHlsZS5jb2xvciA9IHRoaXMuY29tcHV0ZUZvcmVncm91bmRDb2xvcigxKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wdXRlRm9yZWdyb3VuZENvbG9yKGFscGhhOiBhbnkpIHtcclxuICAgICAgICBjb25zdCBjb2xvciA9IHRoaXMucy5sZW5ndGggPT09IDBcclxuICAgICAgICAgICAgPyB0aGlzLmN1cnJlbnRDb2xvclNjaGVtZS5mb3JlZ3JvdW5kXHJcbiAgICAgICAgICAgIDogZW5naW5lLmxlcnAodGhpcy5jdXJyZW50Q29sb3JTY2hlbWUuZm9yZWdyb3VuZCwgdGhpcy5zWzBdLmZvcmVncm91bmQsIDEgLSB0aGlzLnQgLyBzd2lwZVRpbWUpO1xyXG4gICAgICAgIHJldHVybiBgcmdiYSgke2NvbG9yLmpvaW4oJywgJyl9LCAke2FscGhhfSlgO1xyXG4gICAgfVxyXG5cclxuICAgIHB1c2goYmc6IENvbG9yU2NoZW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy50ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKHRoaXMucy5sZW5ndGggPiAxKSB7IC8vIGRvbid0IGFsbG93IG1vcmUgdGhhbiAyIGluIHEgKGZpcnN0IGNhbiBiZSBpbi10cmFuc2l0aW9uLCBzZWNvbmQgY2VydGFpbmx5IG5vdClcclxuICAgICAgICAgICAgdGhpcy5zLnBvcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnMucHVzaChiZyk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29sb3JNYW5hZ2VyLnRzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGUuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGUuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcbmV4cG9ydHMuaShyZXF1aXJlKFwiLSEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbWV5ZXJyZXNldDIuc2Nzc1wiKSwgXCJcIik7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdCk7XCIsIFwiXCJdKTtcblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAa2V5ZnJhbWVzIGJsaW5rIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTsgfVxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogMDsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7IH0gfVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjsgfVxcbiAgYm9keSBoMSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7IH1cXG5cXG4uaW50cm8ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZm9udC1zaXplOiAwLjh2dzsgfVxcbiAgLmludHJvIGhlYWRlciB7XFxuICAgIHBhZGRpbmctbGVmdDogNSU7XFxuICAgIHBhZGRpbmctdG9wOiA1JTtcXG4gICAgb3BhY2l0eTogMC44OyB9XFxuICAgIC5pbnRybyBoZWFkZXIgaDEge1xcbiAgICAgIGZvbnQtc2l6ZTogOGVtO1xcbiAgICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuMTVlbTsgfVxcbiAgICAuaW50cm8gaGVhZGVyIGgyIHtcXG4gICAgICBmb250LXNpemU6IDRlbTtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XFxuICAgICAgbWluLXdpZHRoOiA1MHZ3OyB9XFxuICAgIC5pbnRybyBoZWFkZXIgLmxpbmstbGlzdCB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDAuMTVlbTsgfVxcbiAgICAgIC5pbnRybyBoZWFkZXIgLmxpbmstbGlzdCBsaSB7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICBtYXJnaW4tdG9wOiAwLjNlbTtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMC41ZW07XFxuICAgICAgICBmb250LXNpemU6IDNlbTsgfVxcbiAgICAuaW50cm8gaGVhZGVyIC50eXBlZC1jdXJzb3Ige1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgYW5pbWF0aW9uOiBibGluayAycyBpbmZpbml0ZTsgfVxcbiAgICAuaW50cm8gaGVhZGVyIGEge1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgbWFyZ2luOiAwIC0wLjJlbTtcXG4gICAgICBwYWRkaW5nOiAwIDAuMmVtO1xcbiAgICAgIG9wYWNpdHk6IDAuOTsgfVxcbiAgICAgIC5pbnRybyBoZWFkZXIgYTpob3ZlciB7XFxuICAgICAgICBvcGFjaXR5OiAxOyB9XFxuICAgICAgICAuaW50cm8gaGVhZGVyIGE6aG92ZXI6OmFmdGVyIHtcXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgdG9wOiAxMDAlO1xcbiAgICAgICAgICBsZWZ0OiAwLjJlbTtcXG4gICAgICAgICAgcmlnaHQ6IDAuMmVtO1xcbiAgICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgICAgaGVpZ2h0OiAwLjFlbTtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yOyB9XFxuICAgICAgLmludHJvIGhlYWRlciBhOnZpc2l0ZWQge1xcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7IH1cXG4gIC5pbnRybyBuYXYuYmxvZy1wb3N0LWxpc3Qge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDV2dztcXG4gICAgYm90dG9tOiA0dnc7IH1cXG4gICAgLmludHJvIG5hdi5ibG9nLXBvc3QtbGlzdCBoMSB7XFxuICAgICAgZm9udC1zaXplOiA0ZW07XFxuICAgICAgb3BhY2l0eTogMC44OyB9XFxuICAgIC5pbnRybyBuYXYuYmxvZy1wb3N0LWxpc3QgbGkge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjA1ZW07XFxuICAgICAgcGFkZGluZy10b3A6IDAuM2VtO1xcbiAgICAgIGZvbnQtc2l6ZTogMi41ZW07IH1cXG4gICAgLmludHJvIG5hdi5ibG9nLXBvc3QtbGlzdCBhIHtcXG4gICAgICBvcGFjaXR5OiAwLjc7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuICAgICAgLmludHJvIG5hdi5ibG9nLXBvc3QtbGlzdCBhOmhvdmVyIHtcXG4gICAgICAgIG9wYWNpdHk6IDAuOTtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XFxuICAgICAgLmludHJvIG5hdi5ibG9nLXBvc3QtbGlzdCBhOnZpc2l0ZWQge1xcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7IH1cXG4gIC5pbnRybyBhc2lkZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDV2dztcXG4gICAgYm90dG9tOiA0dnc7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBvcGFjaXR5OiAwLjM7IH1cXG5cXG4uYmxvZyB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDsgfVxcbiAgLmJsb2cgaGVhZGVyIHNlY3Rpb24sIC5ibG9nIHNlY3Rpb24gc2VjdGlvbiB7XFxuICAgIG1hcmdpbjogMCA1dnc7IH1cXG4gIC5ibG9nIGhlYWRlciB7XFxuICAgIG1hcmdpbi10b3A6IDE1dmg7IH1cXG4gICAgLmJsb2cgaGVhZGVyIGgxIHtcXG4gICAgICBmb250LXNpemU6IDJlbTsgfVxcblxcbi5yZW5kZXItdmlldyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB6LWluZGV4OiAtMTAwMDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxyXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxyXFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXHJcXG4qL1xcclxcblxcclxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXHJcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxyXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcclxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXHJcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcclxcbmIsIHUsIGksIGNlbnRlcixcXHJcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcclxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcclxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcclxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxcclxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcXHJcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXHJcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcclxcbiAgICBmb250OiBpbmhlcml0O1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXHJcXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxcclxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcblxcclxcbm9sLCB1bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJsb2NrcXVvdGUsIHEge1xcclxcbiAgICBxdW90ZXM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcclxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogJyc7XFxyXFxuICAgIGNvbnRlbnQ6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbnRhYmxlIHtcXHJcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9tZXllcnJlc2V0Mi5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24oc2VsZWN0b3IpIHtcblx0XHRpZiAodHlwZW9mIG1lbW9bc2VsZWN0b3JdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBmbi5jYWxsKHRoaXMsIHNlbGVjdG9yKTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAoc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3NlbGVjdG9yXSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1tzZWxlY3Rvcl1cblx0fTtcbn0pKGZ1bmN0aW9uICh0YXJnZXQpIHtcblx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KVxufSk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50byArIFwiIFwiICsgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9