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
var whiteColorScheme = new __WEBPACK_IMPORTED_MODULE_2__ColorManager__["b" /* ColorScheme */]([22, 22, 22], 'linear-gradient(0deg, rgba(255, 255, 255, $a1) 0%, rgba(255, 255, 255, $a2) 100%)', function (v) { return v; }, function (v) { return v; });
var blackColorScheme = new __WEBPACK_IMPORTED_MODULE_2__ColorManager__["b" /* ColorScheme */]([255, 255, 255], 'linear-gradient(0deg, rgba(0, 0, 0, $a1) 0%, rgba(0, 0, 0, $a2) 100%)', function (v) { return v; }, function (v) { return v; });
var blueGradientColorScheme = new __WEBPACK_IMPORTED_MODULE_2__ColorManager__["b" /* ColorScheme */]([255, 255, 255], 'dummy, replaced on render', function (v) { return v; }, function (v) { return v; });
var darkBlueGradientColorScheme = new __WEBPACK_IMPORTED_MODULE_2__ColorManager__["b" /* ColorScheme */]([255, 255, 255], 'linear-gradient(0deg, rgba(52, 73, 94, $a1) 0%, rgba(44, 62, 80, $a2) 100%)', function (v) { return v; }, function (v) { return v; });
var greenGradientColorScheme = new __WEBPACK_IMPORTED_MODULE_2__ColorManager__["b" /* ColorScheme */]([255, 255, 255], 'linear-gradient(0deg, rgba(46, 204, 113, $a1) 0%, rgba(39, 174, 96, $a2) 100%)', function (v) { return v; }, function (v) { return v; });
var purpleGradientColorScheme = new __WEBPACK_IMPORTED_MODULE_2__ColorManager__["b" /* ColorScheme */]([255, 255, 255], 'linear-gradient(0deg, rgba(155, 89, 182, $a1) 0%, rgba(142, 68, 173, $a2) 100%)', function (v) { return v; }, function (v) { return v; });
var colorManager = new __WEBPACK_IMPORTED_MODULE_2__ColorManager__["a" /* ColorManager */](blackColorScheme);
colorManager.push(blueGradientColorScheme);

window.addEventListener('load', main);
var Key = window.Key;
function main() {
    var demo = new __WEBPACK_IMPORTED_MODULE_1__GraphDemo__["a" /* GraphDemo */](colorManager);
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
        document.getElementsByClassName('blog-post-list')[0].addEventListener('mouseover', function () { return colorManager.push(whiteColorScheme); });
        document.getElementsByClassName('blog-post-list')[0].addEventListener('mouseleave', function () { return colorManager.push(blueGradientColorScheme); });
    }
    function render(dt, t) {
        updateBlueGradientBackground();
        colorManager.render(dt);
        demo.render(dt, t);
        if (Key.isDown('z')) {
            var ctx = engine.displayCanvas.getContext('2d');
            ctx.fillStyle = colorManager.computeForegroundColor(1);
            ctx.fillText("MTE " + 1000 * engine.computeMeanTickExecutionTime() + "ms", 0, 100);
            ctx.fillText("MRE " + 1000 * engine.computeMeanRenderExecutionTime() + "ms ", 0, 110);
            ctx.fillText("MRI " + 1000 * engine.computeMeanRenderInterval() + "ms", 0, 120);
            ctx.fillText("FPS ~" + 1 / engine.computeMeanRenderInterval(), 0, 130);
            ctx.fillText("RES " + engine.getScreenRect().width + " x " + engine.getScreenRect().height, 0, 140);
        }
    }
    function handleResize() {
        engine.setDisplaySize(document.body.clientWidth, document.body.clientHeight);
        engine.displayCanvas.style.width = document.body.clientWidth + 'px';
        engine.displayCanvas.style.height = document.body.clientHeight + 'px';
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
var Key = window.Key;
var GraphDemo = (function () {
    function GraphDemo(colorManager) {
        this.colorManager = colorManager;
        this.offscreenRenderContext = e.createDisplaySizedRenderContext();
        this.highlights = enumerate(3).map(function (i) { return [i, 0]; });
        this.resetPoints();
    }
    GraphDemo.prototype.resetPoints = function () {
        var _this = this;
        var n = 24;
        this.starts = enumerate(n).map(function () { return _this.randomSpherePoint(0, 0, 0, 1); });
        this.points = this.starts.map(function (p) { return p.map(function (v) { return v; }); });
        this.dest1 = enumerate(n).map(function () { return _this.randomSpherePoint(0, 0, 0, 1); });
        this.dest2 = enumerate(n).map(function () { return _this.randomSpherePoint(0, 0, 0, 1); });
    };
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
        var _this = this;
        if (Key.isDown('r') && (t % 0.7) < 0.1)
            this.resetPoints();
        var screenRect = e.getScreenRect();
        e.clear();
        e.setCompositeOperation('hard-light');
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
        var renderedEdges = {};
        var renderEdge = function (i, j) {
            var n1 = i * (_this.points.length * _this.points.length) + j;
            var n2 = j * (_this.points.length * _this.points.length) + i;
            if (renderedEdges[n1] || renderedEdges[n2])
                return;
            renderedEdges[n1] = renderedEdges[n2] = true;
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
            var stroke = e.createLinearGradient(p1, p2, _this.colorManager.computeForegroundColor(alphas[i] * 2), _this.colorManager.computeForegroundColor(alphas[j] * 2));
            e.fillPoly(stroke, poly);
        };
        var hull = __WEBPACK_IMPORTED_MODULE_0_quickhull3d___default()(oscillatedPoints);
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
            e.fillPoly(_this.colorManager.computeForegroundColor(alpha), highlightTriangle);
            return [i, t - dt];
        });
        e.activeContext.fillStyle = this.colorManager.computeForegroundColor(1);
        e.activeContext.beginPath();
        e.zip(screenRects, alphas, function (rect, alpha) {
            var r = rect.width / 2;
            e.activeContext.ellipse(rect.x + r, rect.y + r, r, r, 0, 0, 2 * Math.PI);
            e.activeContext.closePath();
        });
        e.activeContext.fill();
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
        this.lastForegroundColor = '';
        this.lastBackgroundColor = '';
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
        var backgroundColor;
        if (this.s.length === 0) {
            backgroundColor = this.currentColorScheme.compute(1);
        }
        else {
            var newPercent = this.t / swipeTime;
            backgroundColor = this.currentColorScheme.compute(1 - newPercent) + ', ' + this.s[0].compute(1);
        }
        var foregroundColor = this.computeForegroundColor(1);
        if (backgroundColor !== this.lastBackgroundColor) {
            window.document.body.style.background = backgroundColor;
            this.lastBackgroundColor = backgroundColor;
        }
        if (foregroundColor !== this.lastForegroundColor) {
            window.document.body.style.color = foregroundColor;
            this.lastForegroundColor = foregroundColor;
        }
    };
    ColorManager.prototype.computeForegroundColor = function (alpha) {
        var color = this.s.length === 0
            ? this.currentColorScheme.foreground
            : engine.lerp(this.currentColorScheme.foreground, this.s[0].foreground, 1 - this.t / swipeTime)
                .map(function (v) { return Math.round(v); });
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
exports.push([module.i, "@keyframes blink {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\nbody {\n  font-family: 'Montserrat', sans-serif; }\n  body h1 {\n    font-weight: 700; }\n\n.intro {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  z-index: 2;\n  font-size: 0.8vw; }\n  .intro header {\n    flex: auto;\n    order: 1;\n    padding-left: 5vw;\n    padding-top: 5vw;\n    opacity: 0.8; }\n    .intro header h1 {\n      font-size: 8em;\n      display: inline;\n      margin-right: 0.15em; }\n    .intro header h2 {\n      font-size: 4em;\n      display: inline-block;\n      min-width: 40vw; }\n    .intro header .link-list {\n      margin-left: 0.15em; }\n      .intro header .link-list li {\n        display: inline-block;\n        margin-top: 0.3em;\n        margin-right: 0.5em;\n        font-size: 3em; }\n    .intro header .typed-cursor {\n      opacity: 1;\n      animation: blink 2s infinite; }\n    .intro header a {\n      position: relative;\n      text-decoration: none;\n      margin: 0 -0.2em;\n      padding: 0 0.2em;\n      opacity: 0.9; }\n      .intro header a:hover {\n        opacity: 1; }\n        .intro header a:hover::after {\n          display: block;\n          position: absolute;\n          top: 100%;\n          left: 0.2em;\n          right: 0.2em;\n          content: \"\";\n          height: 0.1em;\n          background-color: currentColor; }\n      .intro header a:visited {\n        color: inherit; }\n  .intro nav.blog-post-list {\n    flex: none;\n    order: 3;\n    padding-left: 5vw;\n    padding-bottom: 4vw; }\n    .intro nav.blog-post-list h1 {\n      font-size: 4em;\n      opacity: 0.8; }\n    .intro nav.blog-post-list li {\n      display: block;\n      margin-left: 0.05em;\n      padding-top: 0.3em;\n      font-size: 2.5em; }\n    .intro nav.blog-post-list a {\n      opacity: 0.7;\n      text-decoration: none; }\n      .intro nav.blog-post-list a:hover {\n        opacity: 0.9;\n        text-decoration: underline; }\n      .intro nav.blog-post-list a:visited {\n        color: inherit; }\n  .intro aside {\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    padding-right: 5vw;\n    padding-bottom: 4vw;\n    font-size: 2em;\n    opacity: 0.3; }\n\n.blog {\n  min-height: 100vh; }\n  .blog header section, .blog section section {\n    margin: 0 5vw; }\n  .blog header {\n    margin-top: 15vh; }\n    .blog header h1 {\n      font-size: 2em; }\n\n.render-view {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1; }\n\n@media screen and (max-aspect-ratio: 1 / 1) {\n  .intro {\n    font-size: 1.04vw; }\n    .intro aside {\n      position: static;\n      flex: none;\n      text-align: center;\n      padding-bottom: 8vw;\n      padding-right: 0;\n      font-size: 2.5em;\n      order: 2;\n      opacity: 0.7; }\n      .intro aside:before {\n        display: inline;\n        content: 'Visualized:'; }\n  nav.blog-post-list {\n    font-size: 1.3em; } }\n", ""]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjI4ODM0OTQyMzU1NjAyNzQ0MjUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsLXZlYzMvc3VidHJhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsLXZlYzMvY3Jvc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RlYnVnLWZuL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsLXZlYzMvbm9ybWFsaXplLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nbC12ZWMzL2RvdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3R5cGVkLmpzL2xpYi90eXBlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvR3JhcGhEZW1vLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9xdWlja2h1bGwzZC9kaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9xdWlja2h1bGwzZC9kaXN0L1F1aWNrSHVsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcG9pbnQtbGluZS1kaXN0YW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcG9pbnQtbGluZS1kaXN0YW5jZS9zcXVhcmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nbC12ZWMzL3NxdWFyZWRMZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dldC1wbGFuZS1ub3JtYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9kZWJ1Zy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3F1aWNraHVsbDNkL2Rpc3QvVmVydGV4TGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcXVpY2todWxsM2QvZGlzdC9WZXJ0ZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3F1aWNraHVsbDNkL2Rpc3QvRmFjZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2wtdmVjMy9hZGQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsLXZlYzMvY29weS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2wtdmVjMy9sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsLXZlYzMvc2NhbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsLXZlYzMvc2NhbGVBbmRBZGQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3F1aWNraHVsbDNkL2Rpc3QvSGFsZkVkZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsLXZlYzMvZGlzdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsLXZlYzMvc3F1YXJlZERpc3RhbmNlLmpzIiwid2VicGFjazovLy8uL3NyYy9Db2xvck1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGUuc2Nzcz8wZjM5Iiwid2VicGFjazovLy8uL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbWV5ZXJyZXNldDIuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyJdLCJuYW1lcyI6W10sIm1h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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDM0NBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7QUN4TEE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsZ0NBQWdDO0FBQ25FO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztB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RUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM1V0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDIyODgzNDk0MjM1NTYwMjc0NDI1IiwibW9kdWxlLmV4cG9ydHMgPSBzdWJ0cmFjdDtcblxuLyoqXG4gKiBTdWJ0cmFjdHMgdmVjdG9yIGIgZnJvbSB2ZWN0b3IgYVxuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gc3VidHJhY3Qob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gYVswXSAtIGJbMF1cbiAgICBvdXRbMV0gPSBhWzFdIC0gYlsxXVxuICAgIG91dFsyXSA9IGFbMl0gLSBiWzJdXG4gICAgcmV0dXJuIG91dFxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dsLXZlYzMvc3VidHJhY3QuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBjcm9zcztcblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgY3Jvc3MgcHJvZHVjdCBvZiB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiBjcm9zcyhvdXQsIGEsIGIpIHtcbiAgICB2YXIgYXggPSBhWzBdLCBheSA9IGFbMV0sIGF6ID0gYVsyXSxcbiAgICAgICAgYnggPSBiWzBdLCBieSA9IGJbMV0sIGJ6ID0gYlsyXVxuXG4gICAgb3V0WzBdID0gYXkgKiBieiAtIGF6ICogYnlcbiAgICBvdXRbMV0gPSBheiAqIGJ4IC0gYXggKiBielxuICAgIG91dFsyXSA9IGF4ICogYnkgLSBheSAqIGJ4XG4gICAgcmV0dXJuIG91dFxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dsLXZlYzMvY3Jvc3MuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAobnMpIHtcbiAgdmFyIGxvZ2dlciA9ICgwLCBfZGVidWcyLmRlZmF1bHQpKG5zKTtcbiAgdmFyIHNjb3BlID0geyBsb2c6IGxvZ2dlciB9O1xuICBmdW5jdGlvbiBpbnRlcm5hbChmbikge1xuICAgIGlmIChfZGVidWcyLmRlZmF1bHQuZW5hYmxlZChucykpIHtcbiAgICAgIGZuLmNhbGwoc2NvcGUsIGxvZ2dlcik7XG4gICAgfVxuICB9XG4gIGludGVybmFsLmxvZ2dlciA9IGxvZ2dlcjtcbiAgcmV0dXJuIGludGVybmFsO1xufTtcblxudmFyIF9kZWJ1ZyA9IHJlcXVpcmUoJ2RlYnVnJyk7XG5cbnZhciBfZGVidWcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVidWcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kZWJ1Zy1mbi9kaXN0L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gbm9ybWFsaXplO1xuXG4vKipcbiAqIE5vcm1hbGl6ZSBhIHZlYzNcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHZlY3RvciB0byBub3JtYWxpemVcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplKG91dCwgYSkge1xuICAgIHZhciB4ID0gYVswXSxcbiAgICAgICAgeSA9IGFbMV0sXG4gICAgICAgIHogPSBhWzJdXG4gICAgdmFyIGxlbiA9IHgqeCArIHkqeSArIHoqelxuICAgIGlmIChsZW4gPiAwKSB7XG4gICAgICAgIC8vVE9ETzogZXZhbHVhdGUgdXNlIG9mIGdsbV9pbnZzcXJ0IGhlcmU/XG4gICAgICAgIGxlbiA9IDEgLyBNYXRoLnNxcnQobGVuKVxuICAgICAgICBvdXRbMF0gPSBhWzBdICogbGVuXG4gICAgICAgIG91dFsxXSA9IGFbMV0gKiBsZW5cbiAgICAgICAgb3V0WzJdID0gYVsyXSAqIGxlblxuICAgIH1cbiAgICByZXR1cm4gb3V0XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2wtdmVjMy9ub3JtYWxpemUuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBkb3Q7XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZG90IHByb2R1Y3Qgb2YgdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gZG90IHByb2R1Y3Qgb2YgYSBhbmQgYlxuICovXG5mdW5jdGlvbiBkb3QoYSwgYikge1xuICAgIHJldHVybiBhWzBdICogYlswXSArIGFbMV0gKiBiWzFdICsgYVsyXSAqIGJbMl1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nbC12ZWMzL2RvdC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgVHlwZWQgZnJvbSAndHlwZWQuanMnO1xyXG5cclxuaW1wb3J0IHsgR3JhcGhEZW1vIH0gZnJvbSAnLi9HcmFwaERlbW8nO1xyXG5pbXBvcnQgeyBDb2xvclNjaGVtZSwgQ29sb3JNYW5hZ2VyIH0gZnJvbSAnLi9Db2xvck1hbmFnZXInO1xyXG5jb25zdCBlbmdpbmU6IEJvaWxlcnBsYXRlRW5naW5lID0gd2luZG93O1xyXG5jb25zdCB3aGl0ZUNvbG9yU2NoZW1lID0gbmV3IENvbG9yU2NoZW1lKFsyMiwgMjIsIDIyXSwgJ2xpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsICRhMSkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgJGEyKSAxMDAlKScsIHYgPT4gdiwgdiA9PiB2KTtcclxuY29uc3QgYmxhY2tDb2xvclNjaGVtZSA9IG5ldyBDb2xvclNjaGVtZShbMjU1LCAyNTUsIDI1NV0sICdsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLCAwLCAwLCAkYTEpIDAlLCByZ2JhKDAsIDAsIDAsICRhMikgMTAwJSknLCB2ID0+IHYsIHYgPT4gdik7XHJcbmNvbnN0IGJsdWVHcmFkaWVudENvbG9yU2NoZW1lID0gbmV3IENvbG9yU2NoZW1lKFsyNTUsIDI1NSwgMjU1XSwgJ2R1bW15LCByZXBsYWNlZCBvbiByZW5kZXInLCB2ID0+IHYsIHYgPT4gdik7XHJcbmNvbnN0IGRhcmtCbHVlR3JhZGllbnRDb2xvclNjaGVtZSA9IG5ldyBDb2xvclNjaGVtZShbMjU1LCAyNTUsIDI1NV0sICdsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSg1MiwgNzMsIDk0LCAkYTEpIDAlLCByZ2JhKDQ0LCA2MiwgODAsICRhMikgMTAwJSknLCB2ID0+IHYsIHYgPT4gdik7XHJcbmNvbnN0IGdyZWVuR3JhZGllbnRDb2xvclNjaGVtZSA9IG5ldyBDb2xvclNjaGVtZShbMjU1LCAyNTUsIDI1NV0sICdsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSg0NiwgMjA0LCAxMTMsICRhMSkgMCUsIHJnYmEoMzksIDE3NCwgOTYsICRhMikgMTAwJSknLCB2ID0+IHYsIHYgPT4gdik7XHJcbmNvbnN0IHB1cnBsZUdyYWRpZW50Q29sb3JTY2hlbWUgPSBuZXcgQ29sb3JTY2hlbWUoWzI1NSwgMjU1LCAyNTVdLCAnbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMTU1LCA4OSwgMTgyLCAkYTEpIDAlLCByZ2JhKDE0MiwgNjgsIDE3MywgJGEyKSAxMDAlKScsIHYgPT4gdiwgdiA9PiB2KTtcclxuY29uc3QgY29sb3JNYW5hZ2VyID0gbmV3IENvbG9yTWFuYWdlcihibGFja0NvbG9yU2NoZW1lKTtcclxuY29sb3JNYW5hZ2VyLnB1c2goYmx1ZUdyYWRpZW50Q29sb3JTY2hlbWUpO1xyXG5cclxuaW1wb3J0ICcuLi9zdHlsZS5zY3NzJztcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBtYWluKTtcclxuXHJcbmNvbnN0IEtleTogS2V5ID0gd2luZG93LktleTtcclxuXHJcbmZ1bmN0aW9uIG1haW4oKSB7XHJcbiAgICBjb25zdCBkZW1vID0gbmV3IEdyYXBoRGVtbyhjb2xvck1hbmFnZXIpO1xyXG4gICAgZW5naW5lLmluaXQoMTI4MCwgNzIwLCA2MCk7XHJcbiAgICBlbmdpbmUub25UaWNrRW50ZXIodGljayk7XHJcbiAgICBlbmdpbmUub25GcmFtZUVudGVyKHJlbmRlcik7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplc3RhcnQnLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZWVuZCcsIGhhbmRsZVJlc2l6ZSk7XHJcblxyXG4gICAgbGV0IGlzRmlyc3RUaWNrID0gdHJ1ZTtcclxuICAgIGZ1bmN0aW9uIHRpY2soZHQ6IG51bWJlciwgdDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKGlzRmlyc3RUaWNrKSB7XHJcbiAgICAgICAgICAgIGlzRmlyc3RUaWNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZpcnN0VGljaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZW1vLnRpY2soZHQsIHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZpcnN0VGljaygpIHtcclxuICAgICAgICBoYW5kbGVSZXNpemUoKTtcclxuICAgICAgICBlbmdpbmUuZGlzcGxheUNhbnZhcy5jbGFzc05hbWUgPSAncmVuZGVyLXZpZXcnO1xyXG5cclxuICAgICAgICBjb25zdCB0aHJvd2F3YXkgPSBuZXcgVHlwZWQoJy53aG9hbWknLCB7XHJcbiAgICAgICAgICAgIHN0cmluZ3M6IFtcclxuICAgICAgICAgICAgICAgICdTb2Z0d2FyZSBFbmdpbmVlcicsXHJcbiAgICAgICAgICAgICAgICAnVVcgU2VhdHRsZSBDU0UgXFwnMTgnLFxyXG4gICAgICAgICAgICAgICAgJ0J1aWxkcyBHYW1lcycsXHJcbiAgICAgICAgICAgICAgICAnQnVpbGRzIFJvYm90cycsXHJcbiAgICAgICAgICAgICAgICAnU29mdHdhcmUgRW5naW5lZXInXHJcbiAgICAgICAgICAgIF0sXHJcbi8vICAgICAgICAgICAgc3RyaW5nczogWydTb2Z0d2FyZSBFbmdpbmVlcicsICdTdHVkZW50IGF0IFVXIFNlYXR0bGUnXSxcclxuICAgICAgICAgICAgdHlwZVNwZWVkOiA1MCxcclxuICAgICAgICAgICAgYmFja1NwZWVkOiAyMCxcclxuICAgICAgICAgICAgbG9vcDogZmFsc2UsXHJcbiAgICAgICAgICAgIGN1cnNvckNoYXI6ICd8J1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdW1lLWxpbmsnKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiBjb2xvck1hbmFnZXIucHVzaChwdXJwbGVHcmFkaWVudENvbG9yU2NoZW1lKSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VtZS1saW5rJykuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IGNvbG9yTWFuYWdlci5wdXNoKGJsdWVHcmFkaWVudENvbG9yU2NoZW1lKSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnaXRodWItbGluaycpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IGNvbG9yTWFuYWdlci5wdXNoKGdyZWVuR3JhZGllbnRDb2xvclNjaGVtZSkpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnaXRodWItbGluaycpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiBjb2xvck1hbmFnZXIucHVzaChibHVlR3JhZGllbnRDb2xvclNjaGVtZSkpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlua2VkaW4tbGluaycpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IGNvbG9yTWFuYWdlci5wdXNoKGRhcmtCbHVlR3JhZGllbnRDb2xvclNjaGVtZSkpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaW5rZWRpbi1saW5rJykuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IGNvbG9yTWFuYWdlci5wdXNoKGJsdWVHcmFkaWVudENvbG9yU2NoZW1lKSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Jsb2ctcG9zdC1saXN0JylbMF0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4gY29sb3JNYW5hZ2VyLnB1c2god2hpdGVDb2xvclNjaGVtZSkpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Jsb2ctcG9zdC1saXN0JylbMF0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IGNvbG9yTWFuYWdlci5wdXNoKGJsdWVHcmFkaWVudENvbG9yU2NoZW1lKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVuZGVyKGR0OiBudW1iZXIsIHQ6IG51bWJlcikge1xyXG4gICAgICAgIHVwZGF0ZUJsdWVHcmFkaWVudEJhY2tncm91bmQoKTtcclxuICAgICAgICBjb2xvck1hbmFnZXIucmVuZGVyKGR0KTtcclxuICAgICAgICBkZW1vLnJlbmRlcihkdCwgdCk7XHJcblxyXG4gICAgICAgIGlmIChLZXkuaXNEb3duKCd6JykpIHtcclxuICAgICAgICAgICAgY29uc3QgY3R4ID0gZW5naW5lLmRpc3BsYXlDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yTWFuYWdlci5jb21wdXRlRm9yZWdyb3VuZENvbG9yKDEpO1xyXG4gICAgICAgICAgICBjdHguZmlsbFRleHQoYE1URSAkezEwMDAgKiBlbmdpbmUuY29tcHV0ZU1lYW5UaWNrRXhlY3V0aW9uVGltZSgpfW1zYCwgMCwgMTAwKTtcclxuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KGBNUkUgJHsxMDAwICogZW5naW5lLmNvbXB1dGVNZWFuUmVuZGVyRXhlY3V0aW9uVGltZSgpfW1zIGAsIDAsIDExMCk7XHJcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChgTVJJICR7MTAwMCAqIGVuZ2luZS5jb21wdXRlTWVhblJlbmRlckludGVydmFsKCl9bXNgLCAwLCAxMjApO1xyXG4gICAgICAgICAgICBjdHguZmlsbFRleHQoYEZQUyB+JHsxIC8gZW5naW5lLmNvbXB1dGVNZWFuUmVuZGVySW50ZXJ2YWwoKX1gLCAwLCAxMzApO1xyXG4gICAgICAgICAgICBjdHguZmlsbFRleHQoYFJFUyAke2VuZ2luZS5nZXRTY3JlZW5SZWN0KCkud2lkdGh9IHggJHtlbmdpbmUuZ2V0U2NyZWVuUmVjdCgpLmhlaWdodH1gLCAwLCAxNDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVSZXNpemUoKSB7XHJcbiAgICAgICAgZW5naW5lLnNldERpc3BsYXlTaXplKGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgsIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0KTtcclxuICAgICAgICBlbmdpbmUuZGlzcGxheUNhbnZhcy5zdHlsZS53aWR0aCA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggKyAncHgnO1xyXG4gICAgICAgIGVuZ2luZS5kaXNwbGF5Q2FudmFzLnN0eWxlLmhlaWdodCA9IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0ICsgJ3B4JztcclxuLy8gICAgICAgIGVuZ2luZS5hY3RpdmVDb250ZXh0LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZUJsdWVHcmFkaWVudEJhY2tncm91bmQoKSB7XHJcbiAgICAgICAgY29uc3Qgc2NyZWVuUmVjdCA9IGVuZ2luZS5nZXRTY3JlZW5SZWN0KCk7XHJcbiAgICAgICAgY29uc3QgZTEgPSBbMCwgc2NyZWVuUmVjdC55ICsgc2NyZWVuUmVjdC5oZWlnaHQgKiAyIC8gNV07XHJcbiAgICAgICAgY29uc3QgZTIgPSBbc2NyZWVuUmVjdC54ICsgc2NyZWVuUmVjdC53aWR0aCwgc2NyZWVuUmVjdC55ICsgc2NyZWVuUmVjdC5oZWlnaHQgKiAzIC8gNV07XHJcbiAgICAgICAgY29uc3QgdGhldGEgPSBlbmdpbmUuYXRhbjIoZW5naW5lLnN1YihlMiwgZTEpKSArIDAuNSAqIE1hdGguUEk7XHJcbiAgICAgICAgYmx1ZUdyYWRpZW50Q29sb3JTY2hlbWUucyA9IGBsaW5lYXItZ3JhZGllbnQoJHt0aGV0YSAqIDE4MCAvIE1hdGguUEl9ZGVnLCByZ2JhKDc3LCAxNTQsIDE4NCwgJGExKSAtNSUsIHJnYmEoNzAsIDU4LCAxMzIsICRhMikgOTUlKWA7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4udHMiLCIvKiFcbiAqIFxuICogICB0eXBlZC5qcyAtIEEgSmF2YVNjcmlwdCBUeXBpbmcgQW5pbWF0aW9uIExpYnJhcnlcbiAqICAgQXV0aG9yOiBNYXR0IEJvbGR0IDxtZUBtYXR0Ym9sZHQuY29tPlxuICogICBWZXJzaW9uOiB2Mi4wLjZcbiAqICAgVXJsOiBodHRwczovL2dpdGh1Yi5jb20vbWF0dGJvbGR0L3R5cGVkLmpzXG4gKiAgIExpY2Vuc2Uocyk6IE1JVFxuICogXG4gKi9cbihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlR5cGVkXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlR5cGVkXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge30sXG4vKioqKioqLyBcdFx0XHRpZDogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRcblx0dmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblx0XG5cdGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXHRcblx0dmFyIF9pbml0aWFsaXplckpzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblx0XG5cdHZhciBfaHRtbFBhcnNlckpzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblx0XG5cdC8qKlxuXHQgKiBXZWxjb21lIHRvIFR5cGVkLmpzIVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZWxlbWVudElkIEhUTUwgZWxlbWVudCBJRCBfT1JfIEhUTUwgZWxlbWVudFxuXHQgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBvcHRpb25zIG9iamVjdFxuXHQgKiBAcmV0dXJucyB7b2JqZWN0fSBhIG5ldyBUeXBlZCBvYmplY3Rcblx0ICovXG5cdFxuXHR2YXIgVHlwZWQgPSAoZnVuY3Rpb24gKCkge1xuXHQgIGZ1bmN0aW9uIFR5cGVkKGVsZW1lbnRJZCwgb3B0aW9ucykge1xuXHQgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFR5cGVkKTtcblx0XG5cdCAgICAvLyBJbml0aWFsaXplIGl0IHVwXG5cdCAgICBfaW5pdGlhbGl6ZXJKcy5pbml0aWFsaXplci5sb2FkKHRoaXMsIG9wdGlvbnMsIGVsZW1lbnRJZCk7XG5cdCAgICAvLyBBbGwgc3lzdGVtcyBnbyFcblx0ICAgIHRoaXMuYmVnaW4oKTtcblx0ICB9XG5cdFxuXHQgIC8qKlxuXHQgICAqIFRvZ2dsZSBzdGFydCgpIGFuZCBzdG9wKCkgb2YgdGhlIFR5cGVkIGluc3RhbmNlXG5cdCAgICogQHB1YmxpY1xuXHQgICAqL1xuXHRcblx0ICBfY3JlYXRlQ2xhc3MoVHlwZWQsIFt7XG5cdCAgICBrZXk6ICd0b2dnbGUnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHRvZ2dsZSgpIHtcblx0ICAgICAgdGhpcy5wYXVzZS5zdGF0dXMgPyB0aGlzLnN0YXJ0KCkgOiB0aGlzLnN0b3AoKTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIFN0b3AgdHlwaW5nIC8gYmFja3NwYWNpbmcgYW5kIGVuYWJsZSBjdXJzb3IgYmxpbmtpbmdcblx0ICAgICAqIEBwdWJsaWNcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ3N0b3AnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3AoKSB7XG5cdCAgICAgIGlmICh0aGlzLnR5cGluZ0NvbXBsZXRlKSByZXR1cm47XG5cdCAgICAgIGlmICh0aGlzLnBhdXNlLnN0YXR1cykgcmV0dXJuO1xuXHQgICAgICB0aGlzLnRvZ2dsZUJsaW5raW5nKHRydWUpO1xuXHQgICAgICB0aGlzLnBhdXNlLnN0YXR1cyA9IHRydWU7XG5cdCAgICAgIHRoaXMub3B0aW9ucy5vblN0b3AodGhpcy5hcnJheVBvcywgdGhpcyk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBTdGFydCB0eXBpbmcgLyBiYWNrc3BhY2luZyBhZnRlciBiZWluZyBzdG9wcGVkXG5cdCAgICAgKiBAcHVibGljXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdzdGFydCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnQoKSB7XG5cdCAgICAgIGlmICh0aGlzLnR5cGluZ0NvbXBsZXRlKSByZXR1cm47XG5cdCAgICAgIGlmICghdGhpcy5wYXVzZS5zdGF0dXMpIHJldHVybjtcblx0ICAgICAgdGhpcy5wYXVzZS5zdGF0dXMgPSBmYWxzZTtcblx0ICAgICAgaWYgKHRoaXMucGF1c2UudHlwZXdyaXRlKSB7XG5cdCAgICAgICAgdGhpcy50eXBld3JpdGUodGhpcy5wYXVzZS5jdXJTdHJpbmcsIHRoaXMucGF1c2UuY3VyU3RyUG9zKTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICB0aGlzLmJhY2tzcGFjZSh0aGlzLnBhdXNlLmN1clN0cmluZywgdGhpcy5wYXVzZS5jdXJTdHJQb3MpO1xuXHQgICAgICB9XG5cdCAgICAgIHRoaXMub3B0aW9ucy5vblN0YXJ0KHRoaXMuYXJyYXlQb3MsIHRoaXMpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogRGVzdHJveSB0aGlzIGluc3RhbmNlIG9mIFR5cGVkXG5cdCAgICAgKiBAcHVibGljXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdkZXN0cm95Jyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuXHQgICAgICB0aGlzLnJlc2V0KGZhbHNlKTtcblx0ICAgICAgdGhpcy5vcHRpb25zLm9uRGVzdHJveSh0aGlzKTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIFJlc2V0IFR5cGVkIGFuZCBvcHRpb25hbGx5IHJlc3RhcnRzXG5cdCAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlc3RhcnRcblx0ICAgICAqIEBwdWJsaWNcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ3Jlc2V0Jyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiByZXNldCgpIHtcblx0ICAgICAgdmFyIHJlc3RhcnQgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB0cnVlIDogYXJndW1lbnRzWzBdO1xuXHRcblx0ICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVvdXQpO1xuXHQgICAgICB0aGlzLnJlcGxhY2VUZXh0KCcnKTtcblx0ICAgICAgaWYgKHRoaXMuY3Vyc29yICYmIHRoaXMuY3Vyc29yLnBhcmVudE5vZGUpIHtcblx0ICAgICAgICB0aGlzLmN1cnNvci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuY3Vyc29yKTtcblx0ICAgICAgICB0aGlzLmN1cnNvciA9IG51bGw7XG5cdCAgICAgIH1cblx0ICAgICAgdGhpcy5zdHJQb3MgPSAwO1xuXHQgICAgICB0aGlzLmFycmF5UG9zID0gMDtcblx0ICAgICAgdGhpcy5jdXJMb29wID0gMDtcblx0ICAgICAgaWYgKHJlc3RhcnQpIHtcblx0ICAgICAgICB0aGlzLmluc2VydEN1cnNvcigpO1xuXHQgICAgICAgIHRoaXMub3B0aW9ucy5vblJlc2V0KHRoaXMpO1xuXHQgICAgICAgIHRoaXMuYmVnaW4oKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogQmVnaW5zIHRoZSB0eXBpbmcgYW5pbWF0aW9uXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnYmVnaW4nLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGJlZ2luKCkge1xuXHQgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXHRcblx0ICAgICAgdGhpcy50eXBpbmdDb21wbGV0ZSA9IGZhbHNlO1xuXHQgICAgICB0aGlzLnNodWZmbGVTdHJpbmdzSWZOZWVkZWQodGhpcyk7XG5cdCAgICAgIHRoaXMuaW5zZXJ0Q3Vyc29yKCk7XG5cdCAgICAgIGlmICh0aGlzLmJpbmRJbnB1dEZvY3VzRXZlbnRzKSB0aGlzLmJpbmRGb2N1c0V2ZW50cygpO1xuXHQgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBzb21lIHRleHQgaW4gdGhlIGVsZW1lbnQsIGlmIHllcyBzdGFydCBieSBiYWNrc3BhY2luZyB0aGUgZGVmYXVsdCBtZXNzYWdlXG5cdCAgICAgICAgaWYgKCFfdGhpcy5jdXJyZW50RWxDb250ZW50IHx8IF90aGlzLmN1cnJlbnRFbENvbnRlbnQubGVuZ3RoID09PSAwKSB7XG5cdCAgICAgICAgICBfdGhpcy50eXBld3JpdGUoX3RoaXMuc3RyaW5nc1tfdGhpcy5zZXF1ZW5jZVtfdGhpcy5hcnJheVBvc11dLCBfdGhpcy5zdHJQb3MpO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAvLyBTdGFydCB0eXBpbmdcblx0ICAgICAgICAgIF90aGlzLmJhY2tzcGFjZShfdGhpcy5jdXJyZW50RWxDb250ZW50LCBfdGhpcy5jdXJyZW50RWxDb250ZW50Lmxlbmd0aCk7XG5cdCAgICAgICAgfVxuXHQgICAgICB9LCB0aGlzLnN0YXJ0RGVsYXkpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogQ2FsbGVkIGZvciBlYWNoIGNoYXJhY3RlciB0eXBlZFxuXHQgICAgICogQHBhcmFtIHtzdHJpbmd9IGN1clN0cmluZyB0aGUgY3VycmVudCBzdHJpbmcgaW4gdGhlIHN0cmluZ3MgYXJyYXlcblx0ICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjdXJTdHJQb3MgdGhlIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGN1clN0cmluZ1xuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ3R5cGV3cml0ZScsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gdHlwZXdyaXRlKGN1clN0cmluZywgY3VyU3RyUG9zKSB7XG5cdCAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXHRcblx0ICAgICAgaWYgKHRoaXMuZmFkZU91dCAmJiB0aGlzLmVsLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmZhZGVPdXRDbGFzcykpIHtcblx0ICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5mYWRlT3V0Q2xhc3MpO1xuXHQgICAgICAgIGlmICh0aGlzLmN1cnNvcikgdGhpcy5jdXJzb3IuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmZhZGVPdXRDbGFzcyk7XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIHZhciBodW1hbml6ZSA9IHRoaXMuaHVtYW5pemVyKHRoaXMudHlwZVNwZWVkKTtcblx0ICAgICAgdmFyIG51bUNoYXJzID0gMTtcblx0XG5cdCAgICAgIGlmICh0aGlzLnBhdXNlLnN0YXR1cyA9PT0gdHJ1ZSkge1xuXHQgICAgICAgIHRoaXMuc2V0UGF1c2VTdGF0dXMoY3VyU3RyaW5nLCBjdXJTdHJQb3MsIHRydWUpO1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfVxuXHRcblx0ICAgICAgLy8gY29udGFpbiB0eXBpbmcgZnVuY3Rpb24gaW4gYSB0aW1lb3V0IGh1bWFuaXplJ2QgZGVsYXlcblx0ICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgLy8gc2tpcCBvdmVyIGFueSBIVE1MIGNoYXJzXG5cdCAgICAgICAgY3VyU3RyUG9zID0gX2h0bWxQYXJzZXJKcy5odG1sUGFyc2VyLnR5cGVIdG1sQ2hhcnMoY3VyU3RyaW5nLCBjdXJTdHJQb3MsIF90aGlzMik7XG5cdFxuXHQgICAgICAgIHZhciBwYXVzZVRpbWUgPSAwO1xuXHQgICAgICAgIHZhciBzdWJzdHIgPSBjdXJTdHJpbmcuc3Vic3RyKGN1clN0clBvcyk7XG5cdCAgICAgICAgLy8gY2hlY2sgZm9yIGFuIGVzY2FwZSBjaGFyYWN0ZXIgYmVmb3JlIGEgcGF1c2UgdmFsdWVcblx0ICAgICAgICAvLyBmb3JtYXQ6IFxcXlxcZCsgLi4gZWc6IF4xMDAwIC4uIHNob3VsZCBiZSBhYmxlIHRvIHByaW50IHRoZSBeIHRvbyB1c2luZyBeXlxuXHQgICAgICAgIC8vIHNpbmdsZSBeIGFyZSByZW1vdmVkIGZyb20gc3RyaW5nXG5cdCAgICAgICAgaWYgKHN1YnN0ci5jaGFyQXQoMCkgPT09ICdeJykge1xuXHQgICAgICAgICAgaWYgKC9eXFxeXFxkKy8udGVzdChzdWJzdHIpKSB7XG5cdCAgICAgICAgICAgIHZhciBza2lwID0gMTsgLy8gc2tpcCBhdCBsZWFzdCAxXG5cdCAgICAgICAgICAgIHN1YnN0ciA9IC9cXGQrLy5leGVjKHN1YnN0cilbMF07XG5cdCAgICAgICAgICAgIHNraXAgKz0gc3Vic3RyLmxlbmd0aDtcblx0ICAgICAgICAgICAgcGF1c2VUaW1lID0gcGFyc2VJbnQoc3Vic3RyKTtcblx0ICAgICAgICAgICAgX3RoaXMyLnRlbXBvcmFyeVBhdXNlID0gdHJ1ZTtcblx0ICAgICAgICAgICAgX3RoaXMyLm9wdGlvbnMub25UeXBpbmdQYXVzZWQoX3RoaXMyLmFycmF5UG9zLCBfdGhpczIpO1xuXHQgICAgICAgICAgICAvLyBzdHJpcCBvdXQgdGhlIGVzY2FwZSBjaGFyYWN0ZXIgYW5kIHBhdXNlIHZhbHVlIHNvIHRoZXkncmUgbm90IHByaW50ZWRcblx0ICAgICAgICAgICAgY3VyU3RyaW5nID0gY3VyU3RyaW5nLnN1YnN0cmluZygwLCBjdXJTdHJQb3MpICsgY3VyU3RyaW5nLnN1YnN0cmluZyhjdXJTdHJQb3MgKyBza2lwKTtcblx0ICAgICAgICAgICAgX3RoaXMyLnRvZ2dsZUJsaW5raW5nKHRydWUpO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0XG5cdCAgICAgICAgLy8gY2hlY2sgZm9yIHNraXAgY2hhcmFjdGVycyBmb3JtYXR0ZWQgYXNcblx0ICAgICAgICAvLyBcInRoaXMgaXMgYSBgc3RyaW5nIHRvIHByaW50IE5PV2AgLi4uXCJcblx0ICAgICAgICBpZiAoc3Vic3RyLmNoYXJBdCgwKSA9PT0gJ2AnKSB7XG5cdCAgICAgICAgICB3aGlsZSAoY3VyU3RyaW5nLnN1YnN0cihjdXJTdHJQb3MgKyBudW1DaGFycykuY2hhckF0KDApICE9PSAnYCcpIHtcblx0ICAgICAgICAgICAgbnVtQ2hhcnMrKztcblx0ICAgICAgICAgICAgaWYgKGN1clN0clBvcyArIG51bUNoYXJzID4gY3VyU3RyaW5nLmxlbmd0aCkgYnJlYWs7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgICAvLyBzdHJpcCBvdXQgdGhlIGVzY2FwZSBjaGFyYWN0ZXJzIGFuZCBhcHBlbmQgYWxsIHRoZSBzdHJpbmcgaW4gYmV0d2VlblxuXHQgICAgICAgICAgdmFyIHN0cmluZ0JlZm9yZVNraXAgPSBjdXJTdHJpbmcuc3Vic3RyaW5nKDAsIGN1clN0clBvcyk7XG5cdCAgICAgICAgICB2YXIgc3RyaW5nU2tpcHBlZCA9IGN1clN0cmluZy5zdWJzdHJpbmcoc3RyaW5nQmVmb3JlU2tpcC5sZW5ndGggKyAxLCBjdXJTdHJQb3MgKyBudW1DaGFycyk7XG5cdCAgICAgICAgICB2YXIgc3RyaW5nQWZ0ZXJTa2lwID0gY3VyU3RyaW5nLnN1YnN0cmluZyhjdXJTdHJQb3MgKyBudW1DaGFycyArIDEpO1xuXHQgICAgICAgICAgY3VyU3RyaW5nID0gc3RyaW5nQmVmb3JlU2tpcCArIHN0cmluZ1NraXBwZWQgKyBzdHJpbmdBZnRlclNraXA7XG5cdCAgICAgICAgICBudW1DaGFycy0tO1xuXHQgICAgICAgIH1cblx0XG5cdCAgICAgICAgLy8gdGltZW91dCBmb3IgYW55IHBhdXNlIGFmdGVyIGEgY2hhcmFjdGVyXG5cdCAgICAgICAgX3RoaXMyLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgIC8vIEFjY291bnRzIGZvciBibGlua2luZyB3aGlsZSBwYXVzZWRcblx0ICAgICAgICAgIF90aGlzMi50b2dnbGVCbGlua2luZyhmYWxzZSk7XG5cdFxuXHQgICAgICAgICAgLy8gV2UncmUgZG9uZSB3aXRoIHRoaXMgc2VudGVuY2UhXG5cdCAgICAgICAgICBpZiAoY3VyU3RyUG9zID09PSBjdXJTdHJpbmcubGVuZ3RoKSB7XG5cdCAgICAgICAgICAgIF90aGlzMi5kb25lVHlwaW5nKGN1clN0cmluZywgY3VyU3RyUG9zKTtcblx0ICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIF90aGlzMi5rZWVwVHlwaW5nKGN1clN0cmluZywgY3VyU3RyUG9zLCBudW1DaGFycyk7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgICAvLyBlbmQgb2YgY2hhcmFjdGVyIHBhdXNlXG5cdCAgICAgICAgICBpZiAoX3RoaXMyLnRlbXBvcmFyeVBhdXNlKSB7XG5cdCAgICAgICAgICAgIF90aGlzMi50ZW1wb3JhcnlQYXVzZSA9IGZhbHNlO1xuXHQgICAgICAgICAgICBfdGhpczIub3B0aW9ucy5vblR5cGluZ1Jlc3VtZWQoX3RoaXMyLmFycmF5UG9zLCBfdGhpczIpO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH0sIHBhdXNlVGltZSk7XG5cdFxuXHQgICAgICAgIC8vIGh1bWFuaXplZCB2YWx1ZSBmb3IgdHlwaW5nXG5cdCAgICAgIH0sIGh1bWFuaXplKTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIENvbnRpbnVlIHRvIHRoZSBuZXh0IHN0cmluZyAmIGJlZ2luIHR5cGluZ1xuXHQgICAgICogQHBhcmFtIHtzdHJpbmd9IGN1clN0cmluZyB0aGUgY3VycmVudCBzdHJpbmcgaW4gdGhlIHN0cmluZ3MgYXJyYXlcblx0ICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjdXJTdHJQb3MgdGhlIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGN1clN0cmluZ1xuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2tlZXBUeXBpbmcnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGtlZXBUeXBpbmcoY3VyU3RyaW5nLCBjdXJTdHJQb3MsIG51bUNoYXJzKSB7XG5cdCAgICAgIC8vIGNhbGwgYmVmb3JlIGZ1bmN0aW9ucyBpZiBhcHBsaWNhYmxlXG5cdCAgICAgIGlmIChjdXJTdHJQb3MgPT09IDApIHtcblx0ICAgICAgICB0aGlzLnRvZ2dsZUJsaW5raW5nKGZhbHNlKTtcblx0ICAgICAgICB0aGlzLm9wdGlvbnMucHJlU3RyaW5nVHlwZWQodGhpcy5hcnJheVBvcywgdGhpcyk7XG5cdCAgICAgIH1cblx0ICAgICAgLy8gc3RhcnQgdHlwaW5nIGVhY2ggbmV3IGNoYXIgaW50byBleGlzdGluZyBzdHJpbmdcblx0ICAgICAgLy8gY3VyU3RyaW5nOiBhcmcsIHRoaXMuZWwuaHRtbDogb3JpZ2luYWwgdGV4dCBpbnNpZGUgZWxlbWVudFxuXHQgICAgICBjdXJTdHJQb3MgKz0gbnVtQ2hhcnM7XG5cdCAgICAgIHZhciBuZXh0U3RyaW5nID0gY3VyU3RyaW5nLnN1YnN0cigwLCBjdXJTdHJQb3MpO1xuXHQgICAgICB0aGlzLnJlcGxhY2VUZXh0KG5leHRTdHJpbmcpO1xuXHQgICAgICAvLyBsb29wIHRoZSBmdW5jdGlvblxuXHQgICAgICB0aGlzLnR5cGV3cml0ZShjdXJTdHJpbmcsIGN1clN0clBvcyk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBXZSdyZSBkb25lIHR5cGluZyBhbGwgc3RyaW5nc1xuXHQgICAgICogQHBhcmFtIHtzdHJpbmd9IGN1clN0cmluZyB0aGUgY3VycmVudCBzdHJpbmcgaW4gdGhlIHN0cmluZ3MgYXJyYXlcblx0ICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjdXJTdHJQb3MgdGhlIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGN1clN0cmluZ1xuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2RvbmVUeXBpbmcnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGRvbmVUeXBpbmcoY3VyU3RyaW5nLCBjdXJTdHJQb3MpIHtcblx0ICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cdFxuXHQgICAgICAvLyBmaXJlcyBjYWxsYmFjayBmdW5jdGlvblxuXHQgICAgICB0aGlzLm9wdGlvbnMub25TdHJpbmdUeXBlZCh0aGlzLmFycmF5UG9zLCB0aGlzKTtcblx0ICAgICAgdGhpcy50b2dnbGVCbGlua2luZyh0cnVlKTtcblx0ICAgICAgLy8gaXMgdGhpcyB0aGUgZmluYWwgc3RyaW5nXG5cdCAgICAgIGlmICh0aGlzLmFycmF5UG9zID09PSB0aGlzLnN0cmluZ3MubGVuZ3RoIC0gMSkge1xuXHQgICAgICAgIC8vIGNhbGxiYWNrIHRoYXQgb2NjdXJzIG9uIHRoZSBsYXN0IHR5cGVkIHN0cmluZ1xuXHQgICAgICAgIHRoaXMuY29tcGxldGUoKTtcblx0ICAgICAgICAvLyBxdWl0IGlmIHdlIHdvbnQgbG9vcCBiYWNrXG5cdCAgICAgICAgaWYgKHRoaXMubG9vcCA9PT0gZmFsc2UgfHwgdGhpcy5jdXJMb29wID09PSB0aGlzLmxvb3BDb3VudCkge1xuXHQgICAgICAgICAgcmV0dXJuO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBfdGhpczMuYmFja3NwYWNlKGN1clN0cmluZywgY3VyU3RyUG9zKTtcblx0ICAgICAgfSwgdGhpcy5iYWNrRGVsYXkpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogQmFja3NwYWNlcyAxIGNoYXJhY3RlciBhdCBhIHRpbWVcblx0ICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjdXJTdHJpbmcgdGhlIGN1cnJlbnQgc3RyaW5nIGluIHRoZSBzdHJpbmdzIGFycmF5XG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gY3VyU3RyUG9zIHRoZSBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBjdXJTdHJpbmdcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdiYWNrc3BhY2UnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGJhY2tzcGFjZShjdXJTdHJpbmcsIGN1clN0clBvcykge1xuXHQgICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblx0XG5cdCAgICAgIGlmICh0aGlzLnBhdXNlLnN0YXR1cyA9PT0gdHJ1ZSkge1xuXHQgICAgICAgIHRoaXMuc2V0UGF1c2VTdGF0dXMoY3VyU3RyaW5nLCBjdXJTdHJQb3MsIHRydWUpO1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfVxuXHQgICAgICBpZiAodGhpcy5mYWRlT3V0KSByZXR1cm4gdGhpcy5pbml0RmFkZU91dCgpO1xuXHRcblx0ICAgICAgdGhpcy50b2dnbGVCbGlua2luZyhmYWxzZSk7XG5cdCAgICAgIHZhciBodW1hbml6ZSA9IHRoaXMuaHVtYW5pemVyKHRoaXMuYmFja1NwZWVkKTtcblx0XG5cdCAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIGN1clN0clBvcyA9IF9odG1sUGFyc2VySnMuaHRtbFBhcnNlci5iYWNrU3BhY2VIdG1sQ2hhcnMoY3VyU3RyaW5nLCBjdXJTdHJQb3MsIF90aGlzNCk7XG5cdCAgICAgICAgLy8gcmVwbGFjZSB0ZXh0IHdpdGggYmFzZSB0ZXh0ICsgdHlwZWQgY2hhcmFjdGVyc1xuXHQgICAgICAgIHZhciBjdXJTdHJpbmdBdFBvc2l0aW9uID0gY3VyU3RyaW5nLnN1YnN0cigwLCBjdXJTdHJQb3MpO1xuXHQgICAgICAgIF90aGlzNC5yZXBsYWNlVGV4dChjdXJTdHJpbmdBdFBvc2l0aW9uKTtcblx0XG5cdCAgICAgICAgLy8gaWYgc21hcnRCYWNrIGlzIGVuYWJsZWRcblx0ICAgICAgICBpZiAoX3RoaXM0LnNtYXJ0QmFja3NwYWNlKSB7XG5cdCAgICAgICAgICAvLyB0aGUgcmVtYWluaW5nIHBhcnQgb2YgdGhlIGN1cnJlbnQgc3RyaW5nIGlzIGVxdWFsIG9mIHRoZSBzYW1lIHBhcnQgb2YgdGhlIG5ldyBzdHJpbmdcblx0ICAgICAgICAgIHZhciBuZXh0U3RyaW5nID0gX3RoaXM0LnN0cmluZ3NbX3RoaXM0LmFycmF5UG9zICsgMV07XG5cdCAgICAgICAgICBpZiAobmV4dFN0cmluZyAmJiBjdXJTdHJpbmdBdFBvc2l0aW9uID09PSBuZXh0U3RyaW5nLnN1YnN0cigwLCBjdXJTdHJQb3MpKSB7XG5cdCAgICAgICAgICAgIF90aGlzNC5zdG9wTnVtID0gY3VyU3RyUG9zO1xuXHQgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgX3RoaXM0LnN0b3BOdW0gPSAwO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0XG5cdCAgICAgICAgLy8gaWYgdGhlIG51bWJlciAoaWQgb2YgY2hhcmFjdGVyIGluIGN1cnJlbnQgc3RyaW5nKSBpc1xuXHQgICAgICAgIC8vIGxlc3MgdGhhbiB0aGUgc3RvcCBudW1iZXIsIGtlZXAgZ29pbmdcblx0ICAgICAgICBpZiAoY3VyU3RyUG9zID4gX3RoaXM0LnN0b3BOdW0pIHtcblx0ICAgICAgICAgIC8vIHN1YnRyYWN0IGNoYXJhY3RlcnMgb25lIGJ5IG9uZVxuXHQgICAgICAgICAgY3VyU3RyUG9zLS07XG5cdCAgICAgICAgICAvLyBsb29wIHRoZSBmdW5jdGlvblxuXHQgICAgICAgICAgX3RoaXM0LmJhY2tzcGFjZShjdXJTdHJpbmcsIGN1clN0clBvcyk7XG5cdCAgICAgICAgfSBlbHNlIGlmIChjdXJTdHJQb3MgPD0gX3RoaXM0LnN0b3BOdW0pIHtcblx0ICAgICAgICAgIC8vIGlmIHRoZSBzdG9wIG51bWJlciBoYXMgYmVlbiByZWFjaGVkLCBpbmNyZWFzZVxuXHQgICAgICAgICAgLy8gYXJyYXkgcG9zaXRpb24gdG8gbmV4dCBzdHJpbmdcblx0ICAgICAgICAgIF90aGlzNC5hcnJheVBvcysrO1xuXHQgICAgICAgICAgLy8gV2hlbiBsb29waW5nLCBiZWdpbiBhdCB0aGUgYmVnaW5uaW5nIGFmdGVyIGJhY2tzcGFjZSBjb21wbGV0ZVxuXHQgICAgICAgICAgaWYgKF90aGlzNC5hcnJheVBvcyA9PT0gX3RoaXM0LnN0cmluZ3MubGVuZ3RoKSB7XG5cdCAgICAgICAgICAgIF90aGlzNC5hcnJheVBvcyA9IDA7XG5cdCAgICAgICAgICAgIF90aGlzNC5vcHRpb25zLm9uTGFzdFN0cmluZ0JhY2tzcGFjZWQoKTtcblx0ICAgICAgICAgICAgX3RoaXM0LnNodWZmbGVTdHJpbmdzSWZOZWVkZWQoKTtcblx0ICAgICAgICAgICAgX3RoaXM0LmJlZ2luKCk7XG5cdCAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICBfdGhpczQudHlwZXdyaXRlKF90aGlzNC5zdHJpbmdzW190aGlzNC5zZXF1ZW5jZVtfdGhpczQuYXJyYXlQb3NdXSwgY3VyU3RyUG9zKTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgICAgLy8gaHVtYW5pemVkIHZhbHVlIGZvciB0eXBpbmdcblx0ICAgICAgfSwgaHVtYW5pemUpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogRnVsbCBhbmltYXRpb24gaXMgY29tcGxldGVcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdjb21wbGV0ZScsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gY29tcGxldGUoKSB7XG5cdCAgICAgIHRoaXMub3B0aW9ucy5vbkNvbXBsZXRlKHRoaXMpO1xuXHQgICAgICBpZiAodGhpcy5sb29wKSB7XG5cdCAgICAgICAgdGhpcy5jdXJMb29wKys7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgdGhpcy50eXBpbmdDb21wbGV0ZSA9IHRydWU7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIEhhcyB0aGUgdHlwaW5nIGJlZW4gc3RvcHBlZFxuXHQgICAgICogQHBhcmFtIHtzdHJpbmd9IGN1clN0cmluZyB0aGUgY3VycmVudCBzdHJpbmcgaW4gdGhlIHN0cmluZ3MgYXJyYXlcblx0ICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjdXJTdHJQb3MgdGhlIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGN1clN0cmluZ1xuXHQgICAgICogQHBhcmFtIHtib29sZWFufSBpc1R5cGluZ1xuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ3NldFBhdXNlU3RhdHVzJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRQYXVzZVN0YXR1cyhjdXJTdHJpbmcsIGN1clN0clBvcywgaXNUeXBpbmcpIHtcblx0ICAgICAgdGhpcy5wYXVzZS50eXBld3JpdGUgPSBpc1R5cGluZztcblx0ICAgICAgdGhpcy5wYXVzZS5jdXJTdHJpbmcgPSBjdXJTdHJpbmc7XG5cdCAgICAgIHRoaXMucGF1c2UuY3VyU3RyUG9zID0gY3VyU3RyUG9zO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogVG9nZ2xlIHRoZSBibGlua2luZyBjdXJzb3Jcblx0ICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNCbGlua2luZ1xuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ3RvZ2dsZUJsaW5raW5nJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiB0b2dnbGVCbGlua2luZyhpc0JsaW5raW5nKSB7XG5cdCAgICAgIGlmICghdGhpcy5jdXJzb3IpIHJldHVybjtcblx0ICAgICAgLy8gaWYgaW4gcGF1c2VkIHN0YXRlLCBkb24ndCB0b2dnbGUgYmxpbmtpbmcgYSAybmQgdGltZVxuXHQgICAgICBpZiAodGhpcy5wYXVzZS5zdGF0dXMpIHJldHVybjtcblx0ICAgICAgaWYgKHRoaXMuY3Vyc29yQmxpbmtpbmcgPT09IGlzQmxpbmtpbmcpIHJldHVybjtcblx0ICAgICAgdGhpcy5jdXJzb3JCbGlua2luZyA9IGlzQmxpbmtpbmc7XG5cdCAgICAgIHZhciBzdGF0dXMgPSBpc0JsaW5raW5nID8gJ2luZmluaXRlJyA6IDA7XG5cdCAgICAgIHRoaXMuY3Vyc29yLnN0eWxlLmFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50ID0gc3RhdHVzO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogU3BlZWQgaW4gTVMgdG8gdHlwZVxuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IHNwZWVkXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnaHVtYW5pemVyJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBodW1hbml6ZXIoc3BlZWQpIHtcblx0ICAgICAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIHNwZWVkIC8gMikgKyBzcGVlZDtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIFNodWZmbGUgdGhlIHNlcXVlbmNlIG9mIHRoZSBzdHJpbmdzIGFycmF5XG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnc2h1ZmZsZVN0cmluZ3NJZk5lZWRlZCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gc2h1ZmZsZVN0cmluZ3NJZk5lZWRlZCgpIHtcblx0ICAgICAgaWYgKCF0aGlzLnNodWZmbGUpIHJldHVybjtcblx0ICAgICAgdGhpcy5zZXF1ZW5jZSA9IHRoaXMuc2VxdWVuY2Uuc29ydChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgLSAwLjU7XG5cdCAgICAgIH0pO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogQWRkcyBhIENTUyBjbGFzcyB0byBmYWRlIG91dCBjdXJyZW50IHN0cmluZ1xuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2luaXRGYWRlT3V0Jyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0RmFkZU91dCgpIHtcblx0ICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cdFxuXHQgICAgICB0aGlzLmVsLmNsYXNzTmFtZSArPSAnICcgKyB0aGlzLmZhZGVPdXRDbGFzcztcblx0ICAgICAgaWYgKHRoaXMuY3Vyc29yKSB0aGlzLmN1cnNvci5jbGFzc05hbWUgKz0gJyAnICsgdGhpcy5mYWRlT3V0Q2xhc3M7XG5cdCAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBfdGhpczUuYXJyYXlQb3MrKztcblx0ICAgICAgICBfdGhpczUucmVwbGFjZVRleHQoJycpO1xuXHRcblx0ICAgICAgICAvLyBSZXNldHMgY3VycmVudCBzdHJpbmcgaWYgZW5kIG9mIGxvb3AgcmVhY2hlZFxuXHQgICAgICAgIGlmIChfdGhpczUuc3RyaW5ncy5sZW5ndGggPiBfdGhpczUuYXJyYXlQb3MpIHtcblx0ICAgICAgICAgIF90aGlzNS50eXBld3JpdGUoX3RoaXM1LnN0cmluZ3NbX3RoaXM1LnNlcXVlbmNlW190aGlzNS5hcnJheVBvc11dLCAwKTtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgX3RoaXM1LnR5cGV3cml0ZShfdGhpczUuc3RyaW5nc1swXSwgMCk7XG5cdCAgICAgICAgICBfdGhpczUuYXJyYXlQb3MgPSAwO1xuXHQgICAgICAgIH1cblx0ICAgICAgfSwgdGhpcy5mYWRlT3V0RGVsYXkpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogUmVwbGFjZXMgY3VycmVudCB0ZXh0IGluIHRoZSBIVE1MIGVsZW1lbnRcblx0ICAgICAqIGRlcGVuZGluZyBvbiBlbGVtZW50IHR5cGVcblx0ICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdyZXBsYWNlVGV4dCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gcmVwbGFjZVRleHQoc3RyKSB7XG5cdCAgICAgIGlmICh0aGlzLmF0dHIpIHtcblx0ICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSh0aGlzLmF0dHIsIHN0cik7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgaWYgKHRoaXMuaXNJbnB1dCkge1xuXHQgICAgICAgICAgdGhpcy5lbC52YWx1ZSA9IHN0cjtcblx0ICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY29udGVudFR5cGUgPT09ICdodG1sJykge1xuXHQgICAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSBzdHI7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIHRoaXMuZWwudGV4dENvbnRlbnQgPSBzdHI7XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBJZiB1c2luZyBpbnB1dCBlbGVtZW50cywgYmluZCBmb2N1cyBpbiBvcmRlciB0b1xuXHQgICAgICogc3RhcnQgYW5kIHN0b3AgdGhlIGFuaW1hdGlvblxuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2JpbmRGb2N1c0V2ZW50cycsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gYmluZEZvY3VzRXZlbnRzKCkge1xuXHQgICAgICB2YXIgX3RoaXM2ID0gdGhpcztcblx0XG5cdCAgICAgIGlmICghdGhpcy5pc0lucHV0KSByZXR1cm47XG5cdCAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBmdW5jdGlvbiAoZSkge1xuXHQgICAgICAgIF90aGlzNi5zdG9wKCk7XG5cdCAgICAgIH0pO1xuXHQgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBmdW5jdGlvbiAoZSkge1xuXHQgICAgICAgIGlmIChfdGhpczYuZWwudmFsdWUgJiYgX3RoaXM2LmVsLnZhbHVlLmxlbmd0aCAhPT0gMCkge1xuXHQgICAgICAgICAgcmV0dXJuO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBfdGhpczYuc3RhcnQoKTtcblx0ICAgICAgfSk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBPbiBpbml0LCBpbnNlcnQgdGhlIGN1cnNvciBlbGVtZW50XG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnaW5zZXJ0Q3Vyc29yJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBpbnNlcnRDdXJzb3IoKSB7XG5cdCAgICAgIGlmICghdGhpcy5zaG93Q3Vyc29yKSByZXR1cm47XG5cdCAgICAgIGlmICh0aGlzLmN1cnNvcikgcmV0dXJuO1xuXHQgICAgICB0aGlzLmN1cnNvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0ICAgICAgdGhpcy5jdXJzb3IuY2xhc3NOYW1lID0gJ3R5cGVkLWN1cnNvcic7XG5cdCAgICAgIHRoaXMuY3Vyc29yLmlubmVySFRNTCA9IHRoaXMuY3Vyc29yQ2hhcjtcblx0ICAgICAgdGhpcy5lbC5wYXJlbnROb2RlICYmIHRoaXMuZWwucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpcy5jdXJzb3IsIHRoaXMuZWwubmV4dFNpYmxpbmcpO1xuXHQgICAgfVxuXHQgIH1dKTtcblx0XG5cdCAgcmV0dXJuIFR5cGVkO1xuXHR9KSgpO1xuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gVHlwZWQ7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgdmFsdWU6IHRydWVcblx0fSk7XG5cdFxuXHR2YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXHRcblx0dmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblx0XG5cdGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblx0XG5cdGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXHRcblx0dmFyIF9kZWZhdWx0c0pzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblx0XG5cdHZhciBfZGVmYXVsdHNKczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZhdWx0c0pzKTtcblx0XG5cdC8qKlxuXHQgKiBJbml0aWFsaXplIHRoZSBUeXBlZCBvYmplY3Rcblx0ICovXG5cdFxuXHR2YXIgSW5pdGlhbGl6ZXIgPSAoZnVuY3Rpb24gKCkge1xuXHQgIGZ1bmN0aW9uIEluaXRpYWxpemVyKCkge1xuXHQgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEluaXRpYWxpemVyKTtcblx0ICB9XG5cdFxuXHQgIF9jcmVhdGVDbGFzcyhJbml0aWFsaXplciwgW3tcblx0ICAgIGtleTogJ2xvYWQnLFxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogTG9hZCB1cCBkZWZhdWx0cyAmIG9wdGlvbnMgb24gdGhlIFR5cGVkIGluc3RhbmNlXG5cdCAgICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmIGluc3RhbmNlIG9mIFR5cGVkXG5cdCAgICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBvcHRpb25zIG9iamVjdFxuXHQgICAgICogQHBhcmFtIHtzdHJpbmd9IGVsZW1lbnRJZCBIVE1MIGVsZW1lbnQgSUQgX09SXyBpbnN0YW5jZSBvZiBIVE1MIGVsZW1lbnRcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0XG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZChzZWxmLCBvcHRpb25zLCBlbGVtZW50SWQpIHtcblx0ICAgICAgLy8gY2hvc2VuIGVsZW1lbnQgdG8gbWFuaXB1bGF0ZSB0ZXh0XG5cdCAgICAgIGlmICh0eXBlb2YgZWxlbWVudElkID09PSAnc3RyaW5nJykge1xuXHQgICAgICAgIHNlbGYuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnRJZCk7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgc2VsZi5lbCA9IGVsZW1lbnRJZDtcblx0ICAgICAgfVxuXHRcblx0ICAgICAgc2VsZi5vcHRpb25zID0gX2V4dGVuZHMoe30sIF9kZWZhdWx0c0pzMlsnZGVmYXVsdCddLCBvcHRpb25zKTtcblx0XG5cdCAgICAgIC8vIGF0dHJpYnV0ZSB0byB0eXBlIGludG9cblx0ICAgICAgc2VsZi5pc0lucHV0ID0gc2VsZi5lbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpbnB1dCc7XG5cdCAgICAgIHNlbGYuYXR0ciA9IHNlbGYub3B0aW9ucy5hdHRyO1xuXHQgICAgICBzZWxmLmJpbmRJbnB1dEZvY3VzRXZlbnRzID0gc2VsZi5vcHRpb25zLmJpbmRJbnB1dEZvY3VzRXZlbnRzO1xuXHRcblx0ICAgICAgLy8gc2hvdyBjdXJzb3Jcblx0ICAgICAgc2VsZi5zaG93Q3Vyc29yID0gc2VsZi5pc0lucHV0ID8gZmFsc2UgOiBzZWxmLm9wdGlvbnMuc2hvd0N1cnNvcjtcblx0XG5cdCAgICAgIC8vIGN1c3RvbSBjdXJzb3Jcblx0ICAgICAgc2VsZi5jdXJzb3JDaGFyID0gc2VsZi5vcHRpb25zLmN1cnNvckNoYXI7XG5cdFxuXHQgICAgICAvLyBJcyB0aGUgY3Vyc29yIGJsaW5raW5nXG5cdCAgICAgIHNlbGYuY3Vyc29yQmxpbmtpbmcgPSB0cnVlO1xuXHRcblx0ICAgICAgLy8gdGV4dCBjb250ZW50IG9mIGVsZW1lbnRcblx0ICAgICAgc2VsZi5lbENvbnRlbnQgPSBzZWxmLmF0dHIgPyBzZWxmLmVsLmdldEF0dHJpYnV0ZShzZWxmLmF0dHIpIDogc2VsZi5lbC50ZXh0Q29udGVudDtcblx0XG5cdCAgICAgIC8vIGh0bWwgb3IgcGxhaW4gdGV4dFxuXHQgICAgICBzZWxmLmNvbnRlbnRUeXBlID0gc2VsZi5vcHRpb25zLmNvbnRlbnRUeXBlO1xuXHRcblx0ICAgICAgLy8gdHlwaW5nIHNwZWVkXG5cdCAgICAgIHNlbGYudHlwZVNwZWVkID0gc2VsZi5vcHRpb25zLnR5cGVTcGVlZDtcblx0XG5cdCAgICAgIC8vIGFkZCBhIGRlbGF5IGJlZm9yZSB0eXBpbmcgc3RhcnRzXG5cdCAgICAgIHNlbGYuc3RhcnREZWxheSA9IHNlbGYub3B0aW9ucy5zdGFydERlbGF5O1xuXHRcblx0ICAgICAgLy8gYmFja3NwYWNpbmcgc3BlZWRcblx0ICAgICAgc2VsZi5iYWNrU3BlZWQgPSBzZWxmLm9wdGlvbnMuYmFja1NwZWVkO1xuXHRcblx0ICAgICAgLy8gb25seSBiYWNrc3BhY2Ugd2hhdCBkb2Vzbid0IG1hdGNoIHRoZSBwcmV2aW91cyBzdHJpbmdcblx0ICAgICAgc2VsZi5zbWFydEJhY2tzcGFjZSA9IHNlbGYub3B0aW9ucy5zbWFydEJhY2tzcGFjZTtcblx0XG5cdCAgICAgIC8vIGFtb3VudCBvZiB0aW1lIHRvIHdhaXQgYmVmb3JlIGJhY2tzcGFjaW5nXG5cdCAgICAgIHNlbGYuYmFja0RlbGF5ID0gc2VsZi5vcHRpb25zLmJhY2tEZWxheTtcblx0XG5cdCAgICAgIC8vIEZhZGUgb3V0IGluc3RlYWQgb2YgYmFja3NwYWNlXG5cdCAgICAgIHNlbGYuZmFkZU91dCA9IHNlbGYub3B0aW9ucy5mYWRlT3V0O1xuXHQgICAgICBzZWxmLmZhZGVPdXRDbGFzcyA9IHNlbGYub3B0aW9ucy5mYWRlT3V0Q2xhc3M7XG5cdCAgICAgIHNlbGYuZmFkZU91dERlbGF5ID0gc2VsZi5vcHRpb25zLmZhZGVPdXREZWxheTtcblx0XG5cdCAgICAgIC8vIHZhcmlhYmxlIHRvIGNoZWNrIHdoZXRoZXIgdHlwaW5nIGlzIGN1cnJlbnRseSBwYXVzZWRcblx0ICAgICAgc2VsZi5pc1BhdXNlZCA9IGZhbHNlO1xuXHRcblx0ICAgICAgLy8gaW5wdXQgc3RyaW5ncyBvZiB0ZXh0XG5cdCAgICAgIHNlbGYuc3RyaW5ncyA9IHNlbGYub3B0aW9ucy5zdHJpbmdzLm1hcChmdW5jdGlvbiAocykge1xuXHQgICAgICAgIHJldHVybiBzLnRyaW0oKTtcblx0ICAgICAgfSk7XG5cdFxuXHQgICAgICAvLyBkaXYgY29udGFpbmluZyBzdHJpbmdzXG5cdCAgICAgIGlmICh0eXBlb2Ygc2VsZi5vcHRpb25zLnN0cmluZ3NFbGVtZW50ID09PSAnc3RyaW5nJykge1xuXHQgICAgICAgIHNlbGYuc3RyaW5nc0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGYub3B0aW9ucy5zdHJpbmdzRWxlbWVudCk7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgc2VsZi5zdHJpbmdzRWxlbWVudCA9IHNlbGYub3B0aW9ucy5zdHJpbmdzRWxlbWVudDtcblx0ICAgICAgfVxuXHRcblx0ICAgICAgaWYgKHNlbGYuc3RyaW5nc0VsZW1lbnQpIHtcblx0ICAgICAgICBzZWxmLnN0cmluZ3MgPSBbXTtcblx0ICAgICAgICBzZWxmLnN0cmluZ3NFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdCAgICAgICAgdmFyIHN0cmluZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoc2VsZi5zdHJpbmdzRWxlbWVudC5jaGlsZHJlbik7XG5cdCAgICAgICAgdmFyIHN0cmluZ3NMZW5ndGggPSBzdHJpbmdzLmxlbmd0aDtcblx0XG5cdCAgICAgICAgaWYgKHN0cmluZ3NMZW5ndGgpIHtcblx0ICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyaW5nc0xlbmd0aDsgaSArPSAxKSB7XG5cdCAgICAgICAgICAgIHZhciBzdHJpbmdFbCA9IHN0cmluZ3NbaV07XG5cdCAgICAgICAgICAgIHNlbGYuc3RyaW5ncy5wdXNoKHN0cmluZ0VsLmlubmVySFRNTC50cmltKCkpO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHRcblx0ICAgICAgLy8gY2hhcmFjdGVyIG51bWJlciBwb3NpdGlvbiBvZiBjdXJyZW50IHN0cmluZ1xuXHQgICAgICBzZWxmLnN0clBvcyA9IDA7XG5cdFxuXHQgICAgICAvLyBjdXJyZW50IGFycmF5IHBvc2l0aW9uXG5cdCAgICAgIHNlbGYuYXJyYXlQb3MgPSAwO1xuXHRcblx0ICAgICAgLy8gaW5kZXggb2Ygc3RyaW5nIHRvIHN0b3AgYmFja3NwYWNpbmcgb25cblx0ICAgICAgc2VsZi5zdG9wTnVtID0gMDtcblx0XG5cdCAgICAgIC8vIExvb3BpbmcgbG9naWNcblx0ICAgICAgc2VsZi5sb29wID0gc2VsZi5vcHRpb25zLmxvb3A7XG5cdCAgICAgIHNlbGYubG9vcENvdW50ID0gc2VsZi5vcHRpb25zLmxvb3BDb3VudDtcblx0ICAgICAgc2VsZi5jdXJMb29wID0gMDtcblx0XG5cdCAgICAgIC8vIHNodWZmbGUgdGhlIHN0cmluZ3Ncblx0ICAgICAgc2VsZi5zaHVmZmxlID0gc2VsZi5vcHRpb25zLnNodWZmbGU7XG5cdCAgICAgIC8vIHRoZSBvcmRlciBvZiBzdHJpbmdzXG5cdCAgICAgIHNlbGYuc2VxdWVuY2UgPSBbXTtcblx0XG5cdCAgICAgIHNlbGYucGF1c2UgPSB7XG5cdCAgICAgICAgc3RhdHVzOiBmYWxzZSxcblx0ICAgICAgICB0eXBld3JpdGU6IHRydWUsXG5cdCAgICAgICAgY3VyU3RyaW5nOiAnJyxcblx0ICAgICAgICBjdXJTdHJQb3M6IDBcblx0ICAgICAgfTtcblx0XG5cdCAgICAgIC8vIFdoZW4gdGhlIHR5cGluZyBpcyBjb21wbGV0ZSAod2hlbiBub3QgbG9vcGVkKVxuXHQgICAgICBzZWxmLnR5cGluZ0NvbXBsZXRlID0gZmFsc2U7XG5cdFxuXHQgICAgICAvLyBTZXQgdGhlIG9yZGVyIGluIHdoaWNoIHRoZSBzdHJpbmdzIGFyZSB0eXBlZFxuXHQgICAgICBmb3IgKHZhciBpIGluIHNlbGYuc3RyaW5ncykge1xuXHQgICAgICAgIHNlbGYuc2VxdWVuY2VbaV0gPSBpO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICAvLyBJZiB0aGVyZSBpcyBzb21lIHRleHQgaW4gdGhlIGVsZW1lbnRcblx0ICAgICAgc2VsZi5jdXJyZW50RWxDb250ZW50ID0gdGhpcy5nZXRDdXJyZW50RWxDb250ZW50KHNlbGYpO1xuXHRcblx0ICAgICAgc2VsZi5hdXRvSW5zZXJ0Q3NzID0gc2VsZi5vcHRpb25zLmF1dG9JbnNlcnRDc3M7XG5cdFxuXHQgICAgICB0aGlzLmFwcGVuZEFuaW1hdGlvbkNzcyhzZWxmKTtcblx0ICAgIH1cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdnZXRDdXJyZW50RWxDb250ZW50Jyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDdXJyZW50RWxDb250ZW50KHNlbGYpIHtcblx0ICAgICAgdmFyIGVsQ29udGVudCA9ICcnO1xuXHQgICAgICBpZiAoc2VsZi5hdHRyKSB7XG5cdCAgICAgICAgZWxDb250ZW50ID0gc2VsZi5lbC5nZXRBdHRyaWJ1dGUoc2VsZi5hdHRyKTtcblx0ICAgICAgfSBlbHNlIGlmIChzZWxmLmlzSW5wdXQpIHtcblx0ICAgICAgICBlbENvbnRlbnQgPSBzZWxmLmVsLnZhbHVlO1xuXHQgICAgICB9IGVsc2UgaWYgKHNlbGYuY29udGVudFR5cGUgPT09ICdodG1sJykge1xuXHQgICAgICAgIGVsQ29udGVudCA9IHNlbGYuZWwuaW5uZXJIVE1MO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIGVsQ29udGVudCA9IHNlbGYuZWwudGV4dENvbnRlbnQ7XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIGVsQ29udGVudDtcblx0ICAgIH1cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdhcHBlbmRBbmltYXRpb25Dc3MnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZEFuaW1hdGlvbkNzcyhzZWxmKSB7XG5cdCAgICAgIGlmICghc2VsZi5hdXRvSW5zZXJ0Q3NzKSB7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICB9XG5cdCAgICAgIGlmICghc2VsZi5zaG93Q3Vyc29yIHx8ICFzZWxmLmZhZGVPdXQpIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIHZhciBjc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXHQgICAgICBjc3MudHlwZSA9ICd0ZXh0L2Nzcyc7XG5cdCAgICAgIHZhciBpbm5lckNzcyA9ICcnO1xuXHQgICAgICBpZiAoc2VsZi5zaG93Q3Vyc29yKSB7XG5cdCAgICAgICAgaW5uZXJDc3MgKz0gJ1xcbiAgICAgICAgLnR5cGVkLWN1cnNvcntcXG4gICAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiB0eXBlZGpzQmxpbmsgMC43cyBpbmZpbml0ZTtcXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHR5cGVkanNCbGluayAwLjdzIGluZmluaXRlO1xcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogdHlwZWRqc0JsaW5rIDAuN3MgaW5maW5pdGU7XFxuICAgICAgICB9XFxuICAgICAgICBAa2V5ZnJhbWVzIHR5cGVkanNCbGlua3tcXG4gICAgICAgICAgNTAlIHsgb3BhY2l0eTogMC4wOyB9XFxuICAgICAgICB9XFxuICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgdHlwZWRqc0JsaW5re1xcbiAgICAgICAgICAwJSB7IG9wYWNpdHk6IDE7IH1cXG4gICAgICAgICAgNTAlIHsgb3BhY2l0eTogMC4wOyB9XFxuICAgICAgICAgIDEwMCUgeyBvcGFjaXR5OiAxOyB9XFxuICAgICAgICB9XFxuICAgICAgJztcblx0ICAgICAgfVxuXHQgICAgICBpZiAoc2VsZi5mYWRlT3V0KSB7XG5cdCAgICAgICAgaW5uZXJDc3MgKz0gJ1xcbiAgICAgICAgLnR5cGVkLWZhZGUtb3V0e1xcbiAgICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4yNXM7XFxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiAwO1xcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogMDtcXG4gICAgICAgIH1cXG4gICAgICAnO1xuXHQgICAgICB9XG5cdCAgICAgIGlmIChjc3MubGVuZ3RoID09PSAwKSB7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICB9XG5cdCAgICAgIGNzcy5pbm5lckhUTUwgPSBpbm5lckNzcztcblx0ICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChjc3MpO1xuXHQgICAgfVxuXHQgIH1dKTtcblx0XG5cdCAgcmV0dXJuIEluaXRpYWxpemVyO1xuXHR9KSgpO1xuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gSW5pdGlhbGl6ZXI7XG5cdHZhciBpbml0aWFsaXplciA9IG5ldyBJbml0aWFsaXplcigpO1xuXHRleHBvcnRzLmluaXRpYWxpemVyID0gaW5pdGlhbGl6ZXI7XG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8qKlxuXHQgKiBEZWZhdWx0cyAmIG9wdGlvbnNcblx0ICogQHJldHVybnMge29iamVjdH0gVHlwZWQgZGVmYXVsdHMgJiBvcHRpb25zXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdFxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgdmFsdWU6IHRydWVcblx0fSk7XG5cdHZhciBkZWZhdWx0cyA9IHtcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge2FycmF5fSBzdHJpbmdzIHN0cmluZ3MgdG8gYmUgdHlwZWRcblx0ICAgKiBAcHJvcGVydHkge3N0cmluZ30gc3RyaW5nc0VsZW1lbnQgSUQgb2YgZWxlbWVudCBjb250YWluaW5nIHN0cmluZyBjaGlsZHJlblxuXHQgICAqL1xuXHQgIHN0cmluZ3M6IFsnVGhlc2UgYXJlIHRoZSBkZWZhdWx0IHZhbHVlcy4uLicsICdZb3Uga25vdyB3aGF0IHlvdSBzaG91bGQgZG8/JywgJ1VzZSB5b3VyIG93biEnLCAnSGF2ZSBhIGdyZWF0IGRheSEnXSxcblx0ICBzdHJpbmdzRWxlbWVudDogbnVsbCxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtudW1iZXJ9IHR5cGVTcGVlZCB0eXBlIHNwZWVkIGluIG1pbGxpc2Vjb25kc1xuXHQgICAqL1xuXHQgIHR5cGVTcGVlZDogMCxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtudW1iZXJ9IHN0YXJ0RGVsYXkgdGltZSBiZWZvcmUgdHlwaW5nIHN0YXJ0cyBpbiBtaWxsaXNlY29uZHNcblx0ICAgKi9cblx0ICBzdGFydERlbGF5OiAwLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge251bWJlcn0gYmFja1NwZWVkIGJhY2tzcGFjaW5nIHNwZWVkIGluIG1pbGxpc2Vjb25kc1xuXHQgICAqL1xuXHQgIGJhY2tTcGVlZDogMCxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtib29sZWFufSBzbWFydEJhY2tzcGFjZSBvbmx5IGJhY2tzcGFjZSB3aGF0IGRvZXNuJ3QgbWF0Y2ggdGhlIHByZXZpb3VzIHN0cmluZ1xuXHQgICAqL1xuXHQgIHNtYXJ0QmFja3NwYWNlOiB0cnVlLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHNodWZmbGUgc2h1ZmZsZSB0aGUgc3RyaW5nc1xuXHQgICAqL1xuXHQgIHNodWZmbGU6IGZhbHNlLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge251bWJlcn0gYmFja0RlbGF5IHRpbWUgYmVmb3JlIGJhY2tzcGFjaW5nIGluIG1pbGxpc2Vjb25kc1xuXHQgICAqL1xuXHQgIGJhY2tEZWxheTogNzAwLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGZhZGVPdXQgRmFkZSBvdXQgaW5zdGVhZCBvZiBiYWNrc3BhY2Vcblx0ICAgKiBAcHJvcGVydHkge3N0cmluZ30gZmFkZU91dENsYXNzIGNzcyBjbGFzcyBmb3IgZmFkZSBhbmltYXRpb25cblx0ICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGZhZGVPdXREZWxheSBGYWRlIG91dCBkZWxheSBpbiBtaWxsaXNlY29uZHNcblx0ICAgKi9cblx0ICBmYWRlT3V0OiBmYWxzZSxcblx0ICBmYWRlT3V0Q2xhc3M6ICd0eXBlZC1mYWRlLW91dCcsXG5cdCAgZmFkZU91dERlbGF5OiA1MDAsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbG9vcCBsb29wIHN0cmluZ3Ncblx0ICAgKiBAcHJvcGVydHkge251bWJlcn0gbG9vcENvdW50IGFtb3VudCBvZiBsb29wc1xuXHQgICAqL1xuXHQgIGxvb3A6IGZhbHNlLFxuXHQgIGxvb3BDb3VudDogSW5maW5pdHksXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gc2hvd0N1cnNvciBzaG93IGN1cnNvclxuXHQgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBjdXJzb3JDaGFyIGNoYXJhY3RlciBmb3IgY3Vyc29yXG5cdCAgICogQHByb3BlcnR5IHtib29sZWFufSBhdXRvSW5zZXJ0Q3NzIGluc2VydCBDU1MgZm9yIGN1cnNvciBhbmQgZmFkZU91dCBpbnRvIEhUTUwgPGhlYWQ+XG5cdCAgICovXG5cdCAgc2hvd0N1cnNvcjogdHJ1ZSxcblx0ICBjdXJzb3JDaGFyOiAnfCcsXG5cdCAgYXV0b0luc2VydENzczogdHJ1ZSxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtzdHJpbmd9IGF0dHIgYXR0cmlidXRlIGZvciB0eXBpbmdcblx0ICAgKiBFeDogaW5wdXQgcGxhY2Vob2xkZXIsIHZhbHVlLCBvciBqdXN0IEhUTUwgdGV4dFxuXHQgICAqL1xuXHQgIGF0dHI6IG51bGwsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gYmluZElucHV0Rm9jdXNFdmVudHMgYmluZCB0byBmb2N1cyBhbmQgYmx1ciBpZiBlbCBpcyB0ZXh0IGlucHV0XG5cdCAgICovXG5cdCAgYmluZElucHV0Rm9jdXNFdmVudHM6IGZhbHNlLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge3N0cmluZ30gY29udGVudFR5cGUgJ2h0bWwnIG9yICdudWxsJyBmb3IgcGxhaW50ZXh0XG5cdCAgICovXG5cdCAgY29udGVudFR5cGU6ICdodG1sJyxcblx0XG5cdCAgLyoqXG5cdCAgICogQWxsIHR5cGluZyBpcyBjb21wbGV0ZVxuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBvbkNvbXBsZXRlOiBmdW5jdGlvbiBvbkNvbXBsZXRlKHNlbGYpIHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBCZWZvcmUgZWFjaCBzdHJpbmcgaXMgdHlwZWRcblx0ICAgKiBAcGFyYW0ge251bWJlcn0gYXJyYXlQb3Ncblx0ICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmXG5cdCAgICovXG5cdCAgcHJlU3RyaW5nVHlwZWQ6IGZ1bmN0aW9uIHByZVN0cmluZ1R5cGVkKGFycmF5UG9zLCBzZWxmKSB7fSxcblx0XG5cdCAgLyoqXG5cdCAgICogQWZ0ZXIgZWFjaCBzdHJpbmcgaXMgdHlwZWRcblx0ICAgKiBAcGFyYW0ge251bWJlcn0gYXJyYXlQb3Ncblx0ICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmXG5cdCAgICovXG5cdCAgb25TdHJpbmdUeXBlZDogZnVuY3Rpb24gb25TdHJpbmdUeXBlZChhcnJheVBvcywgc2VsZikge30sXG5cdFxuXHQgIC8qKlxuXHQgICAqIER1cmluZyBsb29waW5nLCBhZnRlciBsYXN0IHN0cmluZyBpcyB0eXBlZFxuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBvbkxhc3RTdHJpbmdCYWNrc3BhY2VkOiBmdW5jdGlvbiBvbkxhc3RTdHJpbmdCYWNrc3BhY2VkKHNlbGYpIHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBUeXBpbmcgaGFzIGJlZW4gc3RvcHBlZFxuXHQgICAqIEBwYXJhbSB7bnVtYmVyfSBhcnJheVBvc1xuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBvblR5cGluZ1BhdXNlZDogZnVuY3Rpb24gb25UeXBpbmdQYXVzZWQoYXJyYXlQb3MsIHNlbGYpIHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBUeXBpbmcgaGFzIGJlZW4gc3RhcnRlZCBhZnRlciBiZWluZyBzdG9wcGVkXG5cdCAgICogQHBhcmFtIHtudW1iZXJ9IGFycmF5UG9zXG5cdCAgICogQHBhcmFtIHtUeXBlZH0gc2VsZlxuXHQgICAqL1xuXHQgIG9uVHlwaW5nUmVzdW1lZDogZnVuY3Rpb24gb25UeXBpbmdSZXN1bWVkKGFycmF5UG9zLCBzZWxmKSB7fSxcblx0XG5cdCAgLyoqXG5cdCAgICogQWZ0ZXIgcmVzZXRcblx0ICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmXG5cdCAgICovXG5cdCAgb25SZXNldDogZnVuY3Rpb24gb25SZXNldChzZWxmKSB7fSxcblx0XG5cdCAgLyoqXG5cdCAgICogQWZ0ZXIgc3RvcFxuXHQgICAqIEBwYXJhbSB7bnVtYmVyfSBhcnJheVBvc1xuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBvblN0b3A6IGZ1bmN0aW9uIG9uU3RvcChhcnJheVBvcywgc2VsZikge30sXG5cdFxuXHQgIC8qKlxuXHQgICAqIEFmdGVyIHN0YXJ0XG5cdCAgICogQHBhcmFtIHtudW1iZXJ9IGFycmF5UG9zXG5cdCAgICogQHBhcmFtIHtUeXBlZH0gc2VsZlxuXHQgICAqL1xuXHQgIG9uU3RhcnQ6IGZ1bmN0aW9uIG9uU3RhcnQoYXJyYXlQb3MsIHNlbGYpIHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBBZnRlciBkZXN0cm95XG5cdCAgICogQHBhcmFtIHtUeXBlZH0gc2VsZlxuXHQgICAqL1xuXHQgIG9uRGVzdHJveTogZnVuY3Rpb24gb25EZXN0cm95KHNlbGYpIHt9XG5cdH07XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBkZWZhdWx0cztcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdFxuXHQvKipcblx0ICogVE9ETzogVGhlc2UgbWV0aG9kcyBjYW4gcHJvYmFibHkgYmUgY29tYmluZWQgc29tZWhvd1xuXHQgKiBQYXJzZSBIVE1MIHRhZ3MgJiBIVE1MIENoYXJhY3RlcnNcblx0ICovXG5cdFxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgdmFsdWU6IHRydWVcblx0fSk7XG5cdFxuXHR2YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXHRcblx0ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cdFxuXHR2YXIgSFRNTFBhcnNlciA9IChmdW5jdGlvbiAoKSB7XG5cdCAgZnVuY3Rpb24gSFRNTFBhcnNlcigpIHtcblx0ICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIVE1MUGFyc2VyKTtcblx0ICB9XG5cdFxuXHQgIF9jcmVhdGVDbGFzcyhIVE1MUGFyc2VyLCBbe1xuXHQgICAga2V5OiAndHlwZUh0bWxDaGFycycsXG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBUeXBlIEhUTUwgdGFncyAmIEhUTUwgQ2hhcmFjdGVyc1xuXHQgICAgICogQHBhcmFtIHtzdHJpbmd9IGN1clN0cmluZyBDdXJyZW50IHN0cmluZ1xuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IGN1clN0clBvcyBQb3NpdGlvbiBpbiBjdXJyZW50IHN0cmluZ1xuXHQgICAgICogQHBhcmFtIHtUeXBlZH0gc2VsZiBpbnN0YW5jZSBvZiBUeXBlZFxuXHQgICAgICogQHJldHVybnMge251bWJlcn0gYSBuZXcgc3RyaW5nIHBvc2l0aW9uXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHR5cGVIdG1sQ2hhcnMoY3VyU3RyaW5nLCBjdXJTdHJQb3MsIHNlbGYpIHtcblx0ICAgICAgaWYgKHNlbGYuY29udGVudFR5cGUgIT09ICdodG1sJykgcmV0dXJuIGN1clN0clBvcztcblx0ICAgICAgdmFyIGN1ckNoYXIgPSBjdXJTdHJpbmcuc3Vic3RyKGN1clN0clBvcykuY2hhckF0KDApO1xuXHQgICAgICBpZiAoY3VyQ2hhciA9PT0gJzwnIHx8IGN1ckNoYXIgPT09ICcmJykge1xuXHQgICAgICAgIHZhciBlbmRUYWcgPSAnJztcblx0ICAgICAgICBpZiAoY3VyQ2hhciA9PT0gJzwnKSB7XG5cdCAgICAgICAgICBlbmRUYWcgPSAnPic7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIGVuZFRhZyA9ICc7Jztcblx0ICAgICAgICB9XG5cdCAgICAgICAgd2hpbGUgKGN1clN0cmluZy5zdWJzdHIoY3VyU3RyUG9zICsgMSkuY2hhckF0KDApICE9PSBlbmRUYWcpIHtcblx0ICAgICAgICAgIGN1clN0clBvcysrO1xuXHQgICAgICAgICAgaWYgKGN1clN0clBvcyArIDEgPiBjdXJTdHJpbmcubGVuZ3RoKSB7XG5cdCAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgICBjdXJTdHJQb3MrKztcblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gY3VyU3RyUG9zO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogQmFja3NwYWNlIEhUTUwgdGFncyBhbmQgSFRNTCBDaGFyYWN0ZXJzXG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gY3VyU3RyaW5nIEN1cnJlbnQgc3RyaW5nXG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gY3VyU3RyUG9zIFBvc2l0aW9uIGluIGN1cnJlbnQgc3RyaW5nXG5cdCAgICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmIGluc3RhbmNlIG9mIFR5cGVkXG5cdCAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSBhIG5ldyBzdHJpbmcgcG9zaXRpb25cblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdiYWNrU3BhY2VIdG1sQ2hhcnMnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGJhY2tTcGFjZUh0bWxDaGFycyhjdXJTdHJpbmcsIGN1clN0clBvcywgc2VsZikge1xuXHQgICAgICBpZiAoc2VsZi5jb250ZW50VHlwZSAhPT0gJ2h0bWwnKSByZXR1cm4gY3VyU3RyUG9zO1xuXHQgICAgICB2YXIgY3VyQ2hhciA9IGN1clN0cmluZy5zdWJzdHIoY3VyU3RyUG9zKS5jaGFyQXQoMCk7XG5cdCAgICAgIGlmIChjdXJDaGFyID09PSAnPicgfHwgY3VyQ2hhciA9PT0gJzsnKSB7XG5cdCAgICAgICAgdmFyIGVuZFRhZyA9ICcnO1xuXHQgICAgICAgIGlmIChjdXJDaGFyID09PSAnPicpIHtcblx0ICAgICAgICAgIGVuZFRhZyA9ICc8Jztcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgZW5kVGFnID0gJyYnO1xuXHQgICAgICAgIH1cblx0ICAgICAgICB3aGlsZSAoY3VyU3RyaW5nLnN1YnN0cihjdXJTdHJQb3MgLSAxKS5jaGFyQXQoMCkgIT09IGVuZFRhZykge1xuXHQgICAgICAgICAgY3VyU3RyUG9zLS07XG5cdCAgICAgICAgICBpZiAoY3VyU3RyUG9zIDwgMCkge1xuXHQgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgICAgY3VyU3RyUG9zLS07XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIGN1clN0clBvcztcblx0ICAgIH1cblx0ICB9XSk7XG5cdFxuXHQgIHJldHVybiBIVE1MUGFyc2VyO1xuXHR9KSgpO1xuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gSFRNTFBhcnNlcjtcblx0dmFyIGh0bWxQYXJzZXIgPSBuZXcgSFRNTFBhcnNlcigpO1xuXHRleHBvcnRzLmh0bWxQYXJzZXIgPSBodG1sUGFyc2VyO1xuXG4vKioqLyB9KVxuLyoqKioqKi8gXSlcbn0pO1xuO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3R5cGVkLmpzL2xpYi90eXBlZC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb2xvck1hbmFnZXIgfSBmcm9tICcuL0NvbG9yTWFuYWdlcic7XHJcbmltcG9ydCBxaCBmcm9tICdxdWlja2h1bGwzZCc7XHJcblxyXG50eXBlIFBvaW50MyA9IG51bWJlcltdO1xyXG5jb25zdCBlOiBCb2lsZXJwbGF0ZUVuZ2luZSA9IHdpbmRvdztcclxuY29uc3QgZW51bWVyYXRlID0gZS5lbnVtZXJhdGU7XHJcbmNvbnN0IHpvb20gPSAxLjU7XHJcbmNvbnN0IEtleTogS2V5ID0gd2luZG93LktleTtcclxuXHJcbmV4cG9ydCBjbGFzcyBHcmFwaERlbW8ge1xyXG4gICAgc3RhcnRzOiBQb2ludDNbXTtcclxuICAgIHBvaW50czogUG9pbnQzW107XHJcbiAgICBkZXN0MTogUG9pbnQzW107XHJcbiAgICBkZXN0MjogUG9pbnQzW107XHJcbiAgICBoaWdobGlnaHRzOiBudW1iZXJbXVtdO1xyXG5cclxuICAgIG9mZnNjcmVlblJlbmRlckNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbG9yTWFuYWdlcjogQ29sb3JNYW5hZ2VyKSB7XHJcbiAgICAgICAgdGhpcy5vZmZzY3JlZW5SZW5kZXJDb250ZXh0ID0gZS5jcmVhdGVEaXNwbGF5U2l6ZWRSZW5kZXJDb250ZXh0KCk7XHJcbiAgICAgICAgdGhpcy5oaWdobGlnaHRzID0gZW51bWVyYXRlKDMpLm1hcChpID0+IFtpLCAwXSk7XHJcbiAgICAgICAgdGhpcy5yZXNldFBvaW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0UG9pbnRzICgpIHtcclxuICAgICAgICAvLyB3b3JsZCBpcyB1bml0IGN1YmVcclxuICAgICAgICBjb25zdCBuID0gMjQ7XHJcbiAgICAgICAgdGhpcy5zdGFydHMgPSBlbnVtZXJhdGUobikubWFwKCgpID0+IHRoaXMucmFuZG9tU3BoZXJlUG9pbnQoMCwgMCwgMCwgMSkpO1xyXG4gICAgICAgIHRoaXMucG9pbnRzID0gdGhpcy5zdGFydHMubWFwKHAgPT4gcC5tYXAodiA9PiB2KSk7XHJcbiAgICAgICAgdGhpcy5kZXN0MSA9IGVudW1lcmF0ZShuKS5tYXAoKCkgPT4gdGhpcy5yYW5kb21TcGhlcmVQb2ludCgwLCAwLCAwLCAxKSk7XHJcbiAgICAgICAgdGhpcy5kZXN0MiA9IGVudW1lcmF0ZShuKS5tYXAoKCkgPT4gdGhpcy5yYW5kb21TcGhlcmVQb2ludCgwLCAwLCAwLCAxKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGljayAoZHQ6IG51bWJlciwgdDogbnVtYmVyKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBwID0gdGhpcy5wb2ludHNbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IGQxID0gdGhpcy5kZXN0MVtpXTtcclxuICAgICAgICAgICAgY29uc3QgZDIgPSB0aGlzLmRlc3QyW2ldO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGlzdFBkMSA9IGUuZGlzdChwLCBkMSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpc3RQZDIgPSBlLmRpc3QocCwgZDIpO1xyXG4gICAgICAgICAgICBjb25zdCBkMlN0cmVuZ3RoID0gMC41ICogKGRpc3RQZDIgLyAoZGlzdFBkMSArIGRpc3RQZDIpKTtcclxuICAgICAgICAgICAgY29uc3QgZGVsdGEgPSBlLmxlcnAoZS5ub3JtYWxpemUoZS5zdWIoZDEsIHApKSwgZS5ub3JtYWxpemUoZS5zdWIoZDIsIHApKSwgZDJTdHJlbmd0aCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGlzdFBkMSA8IDAuMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydHNbaV0gPSBwLm1hcCh2ID0+IHYpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXN0MVtpXSA9IGQyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXN0MltpXSA9IHRoaXMucmFuZG9tU3BoZXJlUG9pbnQoMCwgMCwgMCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMucG9pbnRzW2ldID0gZS5hZGQocCwgZS5tdWwoZGVsdGEsIDAuMSAqIGR0KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihkdDogbnVtYmVyLCB0OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoS2V5LmlzRG93bigncicpICYmICh0ICUgMC43KSA8IDAuMSkgdGhpcy5yZXNldFBvaW50cygpO1xyXG5cclxuICAgICAgICBjb25zdCBzY3JlZW5SZWN0ID0gZS5nZXRTY3JlZW5SZWN0KCk7XHJcbiAgICAgICAgZS5jbGVhcigpO1xyXG4gICAgICAgIGUuc2V0Q29tcG9zaXRlT3BlcmF0aW9uKCdoYXJkLWxpZ2h0Jyk7XHJcblxyXG4gICAgICAgIGNvbnN0IG9zY2lsbGF0ZVBvaW50ID0gKHdvcmxkOiBQb2ludDMpOiBQb2ludDMgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBvc2NpbGxhdGUgPSAyO1xyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgd29ybGRbMF0gKyBvc2NpbGxhdGUgKiAwLjAwNiAqIE1hdGguc2luKDEuMCAqIHQgKyB3b3JsZFsxXSAqIDQuMCArIHdvcmxkWzJdICogMi4zKVxyXG4gICAgICAgICAgICAgICAgKyBvc2NpbGxhdGUgKiAwLjAxMCAqIE1hdGguc2luKDAuMiAqIHQgKyB3b3JsZFsxXSAqIDIuNyArIHdvcmxkWzJdICogMy4wKSxcclxuICAgICAgICAgICAgICAgIHdvcmxkWzFdICsgb3NjaWxsYXRlICogMC4wMTIgKiBNYXRoLnNpbigwLjggKiB0ICsgd29ybGRbMl0gKiA0LjAgKyB3b3JsZFswXSAqIDIuMylcclxuICAgICAgICAgICAgICAgICsgb3NjaWxsYXRlICogMC4wMTQgKiBNYXRoLnNpbigwLjMgKiB0ICsgd29ybGRbMl0gKiAyLjcgKyB3b3JsZFswXSAqIDMuMCksXHJcbiAgICAgICAgICAgICAgICB3b3JsZFsyXSArIG9zY2lsbGF0ZSAqIDAuMDEgKiBNYXRoLnNpbigwLjUgKiB0ICsgd29ybGRbMF0gKiA0LjAgKyB3b3JsZFsxXSAqIDIuMylcclxuICAgICAgICAgICAgICAgICsgb3NjaWxsYXRlICogMC4wMSAqIE1hdGguc2luKDAuMiAqIHQgKyB3b3JsZFswXSAqIDIuNyArIHdvcmxkWzFdICogMy4wKVxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcG9pbnRUb1NjYWxlID0gKHdvcmxkOiBQb2ludDMpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZGlzdCA9ICh3b3JsZFsyXSArIDEpIC8gMjsgLy8gMCA9IG5lYXIsIDEgPSBmYXJcclxuICAgICAgICAgICAgcmV0dXJuICgxIC0gZGlzdCkgKiAwLjkgKyAwLjE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwb2ludFRvU2NyZWVuID0gKHdvcmxkOiBQb2ludDMpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2NhbGUgPSBwb2ludFRvU2NhbGUod29ybGQpO1xyXG4gICAgICAgICAgICBjb25zdCBzbWFsbGVyRGltZW5zaW9uID0gTWF0aC5taW4oc2NyZWVuUmVjdC53aWR0aCwgc2NyZWVuUmVjdC5oZWlnaHQpO1xyXG4gICAgICAgICAgICBjb25zdCBzY3JlZW5TY2FsZSA9IFtzbWFsbGVyRGltZW5zaW9uLCBzbWFsbGVyRGltZW5zaW9uXTtcclxuICAgICAgICAgICAgY29uc3Qgc2NyZWVuT2Zmc2V0ID0gZS5tdWwoZS5zdWIoW3NjcmVlblJlY3Qud2lkdGgsIHNjcmVlblJlY3QuaGVpZ2h0XSwgc2NyZWVuU2NhbGUpLCAwLjUpO1xyXG4gICAgICAgICAgICByZXR1cm4gZS5hZGQoc2NyZWVuT2Zmc2V0LCBlLmNtdWwoc2NyZWVuU2NhbGUsIFtcclxuICAgICAgICAgICAgICAgICh3b3JsZFswXSAqIHNjYWxlICogem9vbSArIDEpIC8gMixcclxuICAgICAgICAgICAgICAgICh3b3JsZFsxXSAqIHNjYWxlICogem9vbSArIDEpIC8gMlxyXG4gICAgICAgICAgICBdKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwb2ludFRvU2NyZWVuUmVjdCA9ICh3b3JsZDogUG9pbnQzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjYWxlID0gcG9pbnRUb1NjYWxlKHdvcmxkKTtcclxuICAgICAgICAgICAgY29uc3QgY2VudGVyID0gcG9pbnRUb1NjcmVlbih3b3JsZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvaW50U2NhbGUgPSA1O1xyXG4gICAgICAgICAgICByZXR1cm4gZS5tYWtlUmVjdGFuZ2xlKGNlbnRlclswXSAtIHBvaW50U2NhbGUgKiBzY2FsZSwgY2VudGVyWzFdIC0gcG9pbnRTY2FsZSAqIHNjYWxlLCBwb2ludFNjYWxlICogMiAqIHNjYWxlLCBwb2ludFNjYWxlICogMiAqIHNjYWxlKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBvc2NpbGxhdGVkUG9pbnRzID0gdGhpcy5wb2ludHMubWFwKG9zY2lsbGF0ZVBvaW50KTtcclxuICAgICAgICBjb25zdCBzY3JlZW5Qb2ludHMgPSBvc2NpbGxhdGVkUG9pbnRzLm1hcChwb2ludFRvU2NyZWVuKTtcclxuICAgICAgICBjb25zdCBzY3JlZW5SZWN0cyA9IG9zY2lsbGF0ZWRQb2ludHMubWFwKHBvaW50VG9TY3JlZW5SZWN0KTtcclxuICAgICAgICBjb25zdCBhbHBoYXMgPSBvc2NpbGxhdGVkUG9pbnRzLm1hcChwID0+IE1hdGgucG93KHBvaW50VG9TY2FsZShwKSwgMikgKiAwLjM4ICsgMC4wMik7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlbmRlcmVkRWRnZXM6IHtbeDogbnVtYmVyXTogYm9vbGVhbn0gPSB7fTtcclxuICAgICAgICBjb25zdCByZW5kZXJFZGdlID0gKGk6IG51bWJlciwgajogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG4xID0gaSAqICh0aGlzLnBvaW50cy5sZW5ndGggKiB0aGlzLnBvaW50cy5sZW5ndGgpICsgajtcclxuICAgICAgICAgICAgY29uc3QgbjIgPSBqICogKHRoaXMucG9pbnRzLmxlbmd0aCAqIHRoaXMucG9pbnRzLmxlbmd0aCkgKyBpO1xyXG4gICAgICAgICAgICBpZiAocmVuZGVyZWRFZGdlc1tuMV0gfHwgcmVuZGVyZWRFZGdlc1tuMl0pIHJldHVybjtcclxuICAgICAgICAgICAgcmVuZGVyZWRFZGdlc1tuMV0gPSByZW5kZXJlZEVkZ2VzW24yXSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwMSA9IHNjcmVlblBvaW50c1tpXTtcclxuICAgICAgICAgICAgY29uc3QgcDIgPSBzY3JlZW5Qb2ludHNbal07XHJcbiAgICAgICAgICAgIGNvbnN0IHIxID0gc2NyZWVuUmVjdHNbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IHIyID0gc2NyZWVuUmVjdHNbal07XHJcbiAgICAgICAgICAgIGNvbnN0IHBlcnAgPSBlLm5vcm1hbGl6ZShlLnBlcnAoZS5zdWIocDIsIHAxKSkpO1xyXG4gICAgICAgICAgICBjb25zdCBwZXJwMSA9IGUubXVsKHBlcnAsIDAuMjUgKiByMS53aWR0aCAvIDIpO1xyXG4gICAgICAgICAgICBjb25zdCBwZXJwMiA9IGUubXVsKHBlcnAsIDAuMjUgKiByMi53aWR0aCAvIDIpO1xyXG4gICAgICAgICAgICBjb25zdCBwb2x5ID0gW1xyXG4gICAgICAgICAgICAgICAgZS5hZGQocDEsIHBlcnAxKSxcclxuICAgICAgICAgICAgICAgIGUuc3ViKHAxLCBwZXJwMSksXHJcbiAgICAgICAgICAgICAgICBlLnN1YihwMiwgcGVycDIpLFxyXG4gICAgICAgICAgICAgICAgZS5hZGQocDIsIHBlcnAyKVxyXG4gICAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHN0cm9rZSA9IGUuY3JlYXRlTGluZWFyR3JhZGllbnQocDEsIHAyLCB0aGlzLmNvbG9yTWFuYWdlci5jb21wdXRlRm9yZWdyb3VuZENvbG9yKGFscGhhc1tpXSAqIDIpLCB0aGlzLmNvbG9yTWFuYWdlci5jb21wdXRlRm9yZWdyb3VuZENvbG9yKGFscGhhc1tqXSAqIDIpKTtcclxuICAgICAgICAgICAgZS5maWxsUG9seShzdHJva2UsIHBvbHkpO1xyXG4vLyAgICAgICAgICAgIGUuZHJhd0xpbmUoc3Ryb2tlLCBwMSwgcDIpO1xyXG4vLyAgICAgICAgICAgIGUuZmlsbFBvbHkoJyNGRkZGRkYnLCBwb2x5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGh1bGwgPSBxaChvc2NpbGxhdGVkUG9pbnRzKTtcclxuLy8gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3NjaWxsYXRlZFBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4vLyAgICAgICAgICAgIGZvciAodmFyIGogPSBpICsgMTsgaiA8IG9zY2lsbGF0ZWRQb2ludHMubGVuZ3RoOyBqKyspIHtcclxuLy8gICAgICAgICAgICAgICAgaWYgKGUuZGlzdCh0aGlzLnBvaW50c1tpXSwgdGhpcy5wb2ludHNbal0pID4gMSkgY29udGludWU7XHJcbi8vICAgICAgICAgICAgICAgIHJlbmRlckVkZ2UoaSwgaik7XHJcbi8vICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgfVxyXG5cclxuICAgICAgICBodWxsLmZvckVhY2goKFtpMSwgaTIsIGkzXSkgPT4ge1xyXG4gICAgICAgICAgICByZW5kZXJFZGdlKGkxLCBpMik7XHJcbiAgICAgICAgICAgIHJlbmRlckVkZ2UoaTIsIGkzKTtcclxuICAgICAgICAgICAgcmVuZGVyRWRnZShpMywgaTEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmhpZ2hsaWdodHMgPSB0aGlzLmhpZ2hsaWdodHMubWFwKChbaSwgdF0pID0+IHtcclxuICAgICAgICAgICAgaWYgKGkgPj0gaHVsbC5sZW5ndGggfHwgdCAtIGR0IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgaSA9IGUucmFuZG9tSW50KDAsIGh1bGwubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIHQgPSBNYXRoLnJhbmRvbSgpICogMiArIDAuMjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYWxwaGEgPSB0ID4gMSA/IDAgOiBlLmxlcnAoMCwgMC4wOCwgdCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGhpZ2hsaWdodFRyaWFuZ2xlID0gaHVsbFtpXS5tYXAoaW5kID0+IHNjcmVlblBvaW50c1tpbmRdKTtcclxuICAgICAgICAgICAgIGUuZmlsbFBvbHkodGhpcy5jb2xvck1hbmFnZXIuY29tcHV0ZUZvcmVncm91bmRDb2xvcihhbHBoYSksIGhpZ2hsaWdodFRyaWFuZ2xlKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtpLCB0IC0gZHRdO1xyXG4gICAgICAgIH0pO1xyXG5cclxuLy8gICAgICAgIGUuc2V0Q29tcG9zaXRlT3BlcmF0aW9uKCdzb3VyY2Utb3ZlcicpO1xyXG4vLyAgICAgICAgc2NyZWVuUmVjdHMuZm9yRWFjaChyZWN0ID0+IGUuZmlsbEVsbGlwc2UoYmcsIHJlY3QpKTtcclxuXHJcbiAgICAgICAgZS5hY3RpdmVDb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuY29sb3JNYW5hZ2VyLmNvbXB1dGVGb3JlZ3JvdW5kQ29sb3IoMSk7XHJcbiAgICAgICAgZS5hY3RpdmVDb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGUuemlwKHNjcmVlblJlY3RzLCBhbHBoYXMsIChyZWN0OiBSZWN0LCBhbHBoYTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHIgPSByZWN0LndpZHRoIC8gMjtcclxuICAgICAgICAgICAgZS5hY3RpdmVDb250ZXh0LmVsbGlwc2UocmVjdC54ICsgciwgcmVjdC55ICsgciwgciwgciwgMCwgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICAgICAgICBlLmFjdGl2ZUNvbnRleHQuY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZS5hY3RpdmVDb250ZXh0LmZpbGwoKTtcclxuLy8gICAgICAgIGUuemlwKHNjcmVlblJlY3RzLCBhbHBoYXMsIChyZWN0OiBSZWN0LCBhbHBoYTogbnVtYmVyKSA9PiBlLmZpbGxFbGxpcHNlKGByZ2JhKDI1NSwgMjU1LCAyNTUsIDI1NSlgLCByZWN0KSk7XHJcblxyXG4vLyAgICAgICAgZS5zd2FwQWN0aXZlUmVuZGVyQ29udGV4dChzY3JlZW5Db250ZXh0KTtcclxuLy8gICAgICAgIGUuc2V0Q29tcG9zaXRlT3BlcmF0aW9uKCdzb3VyY2Utb3ZlcicpO1xyXG4vLyAgICAgICAgZS5jbGVhcignI0ZGRkZGRicpO1xyXG4vLyAgICAgICAgZS5zZXRDb21wb3NpdGVPcGVyYXRpb24oJ2NvbG9yLWJ1cm4nKTtcclxuLy8gICAgICAgIHNjcmVlbkNvbnRleHQuZHJhd0ltYWdlKHRoaXMub2Zmc2NyZWVuUmVuZGVyQ29udGV4dC5jYW52YXMsIDAsIDAsIHRoaXMub2Zmc2NyZWVuUmVuZGVyQ29udGV4dC5jYW52YXMud2lkdGgsIHRoaXMub2Zmc2NyZWVuUmVuZGVyQ29udGV4dC5jYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICAgICAgLy8gZS5kcmF3TGluZSgnI0ZGRkZGRicsIGUuc3ViKHAsIFswLCAzXSksIGUuYWRkKHAsIFswLCAzXSkpXHJcbiAgICAgICAgICAgIC8vIGUuZHJhd0xpbmUoJyNGRkZGRkYnLCBlLnN1YihwLCBbMywgMF0pLCBlLmFkZChwLCBbMywgMF0pKVxyXG5cclxuICAgICAgICAgICAgZS5zZXRDb21wb3NpdGVPcGVyYXRpb24oJ3NvdXJjZS1vdmVyJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gcG9pbnRUb1NjcmVlbih0aGlzLnN0YXJ0c1tpXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGQxID0gcG9pbnRUb1NjcmVlbih0aGlzLmRlc3QxW2ldKTtcclxuICAgICAgICAgICAgY29uc3QgZDIgPSBwb2ludFRvU2NyZWVuKHRoaXMuZGVzdDJbaV0pO1xyXG4gICAgICAgICAgICAvLyBlLmRyYXdMaW5lKFwicmdiYSgyNTUsIDAsIDAsIDAuMjUpXCIsIHAsIHN0YXJ0KTtcclxuICAgICAgICAgICAgLy8gZS5kcmF3TGluZShcInJnYmEoMCwgMjU1LCAwLCAwLjI1KVwiLCBwLCBkMSk7XHJcbiAgICAgICAgICAgIC8vIGUuZHJhd0xpbmUoXCJyZ2JhKDAsIDAsIDI1NSwgMC4yNSlcIiwgcCwgZDIpO1xyXG4gICAgICAgICovXHJcbiAgICB9XHJcblxyXG4gICAgcmFuZG9tVW5pdEN1YmVQb2ludCgpIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICBNYXRoLnJhbmRvbSgpICogMiAtIDEsXHJcbiAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiAyIC0gMSxcclxuICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqIDIgLSAxXHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICBSZXR1cm5zIGEgcmFuZG9tIHBvaW50IG9mIGEgc3BoZXJlLCBldmVubHkgZGlzdHJpYnV0ZWQgb3ZlciB0aGUgc3BoZXJlLlxyXG4gICAgVGhlIHNwaGVyZSBpcyBjZW50ZXJlZCBhdCAoeDAseTAsejApIHdpdGggdGhlIHBhc3NlZCBpbiByYWRpdXMuXHJcbiAgICBUaGUgcmV0dXJuZWQgcG9pbnQgaXMgcmV0dXJuZWQgYXMgYSB0aHJlZSBlbGVtZW50IGFycmF5IFt4LHksel0uXHJcbiAgICAqL1xyXG4gICAgcmFuZG9tU3BoZXJlUG9pbnQoeDA6IG51bWJlciwgeTA6IG51bWJlciwgejA6IG51bWJlciwgcmFkaXVzOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCB1ID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICBjb25zdCB2ID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICBjb25zdCB0aGV0YSA9IDIgKiBNYXRoLlBJICogdTtcclxuICAgICAgICBjb25zdCBwaGkgPSBNYXRoLmFjb3MoMiAqIHYgLSAxKTtcclxuICAgICAgICBjb25zdCB4ID0geDAgKyAocmFkaXVzICogTWF0aC5zaW4ocGhpKSAqIE1hdGguY29zKHRoZXRhKSk7XHJcbiAgICAgICAgY29uc3QgeSA9IHkwICsgKHJhZGl1cyAqIE1hdGguc2luKHBoaSkgKiBNYXRoLnNpbih0aGV0YSkpO1xyXG4gICAgICAgIGNvbnN0IHogPSB6MCArIChyYWRpdXMgKiBNYXRoLmNvcyhwaGkpKTtcclxuICAgICAgICByZXR1cm4gW3gsIHksIHpdO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0dyYXBoRGVtby50cyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHJ1bm5lcjtcblxudmFyIF9RdWlja0h1bGwgPSByZXF1aXJlKCcuL1F1aWNrSHVsbCcpO1xuXG52YXIgX1F1aWNrSHVsbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9RdWlja0h1bGwpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBydW5uZXIocG9pbnRzKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICB2YXIgaW5zdGFuY2UgPSBuZXcgX1F1aWNrSHVsbDIuZGVmYXVsdChwb2ludHMpO1xuICBpbnN0YW5jZS5idWlsZCgpO1xuICByZXR1cm4gaW5zdGFuY2UuY29sbGVjdEZhY2VzKG9wdGlvbnMuc2tpcFRyaWFuZ3VsYXRpb24pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcXVpY2todWxsM2QvZGlzdC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfc2xpY2VkVG9BcnJheSA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0pIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfSByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IHJldHVybiBhcnI7IH0gZWxzZSBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSB7IHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7IH0gZWxzZSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9IH07IH0oKTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9wb2ludExpbmVEaXN0YW5jZSA9IHJlcXVpcmUoJ3BvaW50LWxpbmUtZGlzdGFuY2UnKTtcblxudmFyIF9wb2ludExpbmVEaXN0YW5jZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb2ludExpbmVEaXN0YW5jZSk7XG5cbnZhciBfZ2V0UGxhbmVOb3JtYWwgPSByZXF1aXJlKCdnZXQtcGxhbmUtbm9ybWFsJyk7XG5cbnZhciBfZ2V0UGxhbmVOb3JtYWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UGxhbmVOb3JtYWwpO1xuXG52YXIgX2RlYnVnRm4gPSByZXF1aXJlKCdkZWJ1Zy1mbicpO1xuXG52YXIgX2RlYnVnRm4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVidWdGbik7XG5cbnZhciBfZG90ID0gcmVxdWlyZSgnZ2wtdmVjMy9kb3QnKTtcblxudmFyIF9kb3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZG90KTtcblxudmFyIF9WZXJ0ZXhMaXN0ID0gcmVxdWlyZSgnLi9WZXJ0ZXhMaXN0Jyk7XG5cbnZhciBfVmVydGV4TGlzdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9WZXJ0ZXhMaXN0KTtcblxudmFyIF9WZXJ0ZXggPSByZXF1aXJlKCcuL1ZlcnRleCcpO1xuXG52YXIgX1ZlcnRleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9WZXJ0ZXgpO1xuXG52YXIgX0ZhY2UgPSByZXF1aXJlKCcuL0ZhY2UnKTtcblxudmFyIF9GYWNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ZhY2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgZGVidWcgPSAoMCwgX2RlYnVnRm4yLmRlZmF1bHQpKCdxdWlja2h1bGwnKTtcblxuLy8gbWVyZ2UgdHlwZXNcbi8vIG5vbiBjb252ZXggd2l0aCByZXNwZWN0IHRvIHRoZSBsYXJnZSBmYWNlXG52YXIgTUVSR0VfTk9OX0NPTlZFWF9XUlRfTEFSR0VSX0ZBQ0UgPSAxO1xudmFyIE1FUkdFX05PTl9DT05WRVggPSAyO1xuXG52YXIgUXVpY2tIdWxsID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBRdWlja0h1bGwocG9pbnRzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFF1aWNrSHVsbCk7XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocG9pbnRzKSkge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCdpbnB1dCBpcyBub3QgYSB2YWxpZCBhcnJheScpO1xuICAgIH1cbiAgICBpZiAocG9pbnRzLmxlbmd0aCA8IDQpIHtcbiAgICAgIHRocm93IEVycm9yKCdjYW5ub3QgYnVpbGQgYSBzaW1wbGV4IG91dCBvZiA8NCBwb2ludHMnKTtcbiAgICB9XG5cbiAgICB0aGlzLnRvbGVyYW5jZSA9IC0xO1xuXG4gICAgLy8gYnVmZmVyc1xuICAgIHRoaXMubkZhY2VzID0gMDtcbiAgICB0aGlzLm5Qb2ludHMgPSBwb2ludHMubGVuZ3RoO1xuXG4gICAgdGhpcy5mYWNlcyA9IFtdO1xuICAgIHRoaXMubmV3RmFjZXMgPSBbXTtcbiAgICAvLyBoZWxwZXJzXG4gICAgLy9cbiAgICAvLyBsZXQgYGFgLCBgYmAgYmUgYEZhY2VgIGluc3RhbmNlc1xuICAgIC8vIGxldCBgdmAgYmUgcG9pbnRzIHdyYXBwZWQgYXMgaW5zdGFuY2Ugb2YgYFZlcnRleGBcbiAgICAvL1xuICAgIC8vICAgICBbdiwgdiwgLi4uLCB2LCB2LCB2LCAuLi5dXG4gICAgLy8gICAgICBeICAgICAgICAgICAgIF5cbiAgICAvLyAgICAgIHwgICAgICAgICAgICAgfFxuICAgIC8vICBhLm91dHNpZGUgICAgIGIub3V0c2lkZVxuICAgIC8vXG4gICAgdGhpcy5jbGFpbWVkID0gbmV3IF9WZXJ0ZXhMaXN0Mi5kZWZhdWx0KCk7XG4gICAgdGhpcy51bmNsYWltZWQgPSBuZXcgX1ZlcnRleExpc3QyLmRlZmF1bHQoKTtcblxuICAgIC8vIHZlcnRpY2VzIG9mIHRoZSBodWxsKGludGVybmFsIHJlcHJlc2VudGF0aW9uIG9mIHBvaW50cylcbiAgICB0aGlzLnZlcnRpY2VzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHRoaXMudmVydGljZXMucHVzaChuZXcgX1ZlcnRleDIuZGVmYXVsdChwb2ludHNbaV0sIGkpKTtcbiAgICB9XG4gICAgdGhpcy5kaXNjYXJkZWRGYWNlcyA9IFtdO1xuICAgIHRoaXMudmVydGV4UG9pbnRJbmRpY2VzID0gW107XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUXVpY2tIdWxsLCBbe1xuICAgIGtleTogJ2FkZFZlcnRleFRvRmFjZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZFZlcnRleFRvRmFjZSh2ZXJ0ZXgsIGZhY2UpIHtcbiAgICAgIHZlcnRleC5mYWNlID0gZmFjZTtcbiAgICAgIGlmICghZmFjZS5vdXRzaWRlKSB7XG4gICAgICAgIHRoaXMuY2xhaW1lZC5hZGQodmVydGV4KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xhaW1lZC5pbnNlcnRCZWZvcmUoZmFjZS5vdXRzaWRlLCB2ZXJ0ZXgpO1xuICAgICAgfVxuICAgICAgZmFjZS5vdXRzaWRlID0gdmVydGV4O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYHZlcnRleGAgZm9yIHRoZSBgY2xhaW1lZGAgbGlzdCBvZiB2ZXJ0aWNlcywgaXQgYWxzbyBtYWtlcyBzdXJlXG4gICAgICogdGhhdCB0aGUgbGluayBmcm9tIGBmYWNlYCB0byB0aGUgZmlyc3QgdmVydGV4IGl0IHNlZXMgaW4gYGNsYWltZWRgIGlzXG4gICAgICogbGlua2VkIGNvcnJlY3RseSBhZnRlciB0aGUgcmVtb3ZhbFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZXJ0ZXh9IHZlcnRleFxuICAgICAqIEBwYXJhbSB7RmFjZX0gZmFjZVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdyZW1vdmVWZXJ0ZXhGcm9tRmFjZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZVZlcnRleEZyb21GYWNlKHZlcnRleCwgZmFjZSkge1xuICAgICAgaWYgKHZlcnRleCA9PT0gZmFjZS5vdXRzaWRlKSB7XG4gICAgICAgIC8vIGZpeCBmYWNlLm91dHNpZGUgbGlua1xuICAgICAgICBpZiAodmVydGV4Lm5leHQgJiYgdmVydGV4Lm5leHQuZmFjZSA9PT0gZmFjZSkge1xuICAgICAgICAgIC8vIGZhY2UgaGFzIGF0IGxlYXN0IDIgb3V0c2lkZSB2ZXJ0aWNlcywgbW92ZSB0aGUgYG91dHNpZGVgIHJlZmVyZW5jZVxuICAgICAgICAgIGZhY2Uub3V0c2lkZSA9IHZlcnRleC5uZXh0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHZlcnRleCB3YXMgdGhlIG9ubHkgb3V0c2lkZSB2ZXJ0ZXggdGhhdCBmYWNlIGhhZFxuICAgICAgICAgIGZhY2Uub3V0c2lkZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuY2xhaW1lZC5yZW1vdmUodmVydGV4KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFsbCB0aGUgdmlzaWJsZSB2ZXJ0aWNlcyB0aGF0IGBmYWNlYCBpcyBhYmxlIHRvIHNlZSB3aGljaCBhcmVcbiAgICAgKiBzdG9yZWQgaW4gdGhlIGBjbGFpbWVkYCB2ZXJ0ZXh0IGxpc3RcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RmFjZX0gZmFjZVxuICAgICAqIEByZXR1cm4ge1ZlcnRleHx1bmRlZmluZWR9IElmIGZhY2UgaGFkIHZpc2libGUgdmVydGljZXMgcmV0dXJuc1xuICAgICAqIGBmYWNlLm91dHNpZGVgLCBvdGhlcndpc2UgdW5kZWZpbmVkXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3JlbW92ZUFsbFZlcnRpY2VzRnJvbUZhY2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVBbGxWZXJ0aWNlc0Zyb21GYWNlKGZhY2UpIHtcbiAgICAgIGlmIChmYWNlLm91dHNpZGUpIHtcbiAgICAgICAgLy8gcG9pbnRlciB0byB0aGUgbGFzdCB2ZXJ0ZXggb2YgdGhpcyBmYWNlXG4gICAgICAgIC8vIFsuLi4sIG91dHNpZGUsIC4uLiwgZW5kLCBvdXRzaWRlLCAuLi5dXG4gICAgICAgIC8vICAgICAgICAgIHwgICAgICAgICAgIHwgICAgICB8XG4gICAgICAgIC8vICAgICAgICAgIGEgICAgICAgICAgIGEgICAgICBiXG4gICAgICAgIHZhciBlbmQgPSBmYWNlLm91dHNpZGU7XG4gICAgICAgIHdoaWxlIChlbmQubmV4dCAmJiBlbmQubmV4dC5mYWNlID09PSBmYWNlKSB7XG4gICAgICAgICAgZW5kID0gZW5kLm5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbGFpbWVkLnJlbW92ZUNoYWluKGZhY2Uub3V0c2lkZSwgZW5kKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgYlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgWyBvdXRzaWRlLCAuLi5dXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHJlbW92ZXMgdGhpcyBsaW5rXG4gICAgICAgIC8vICAgICBbIG91dHNpZGUsIC4uLiwgZW5kIF0gLeKUmFxuICAgICAgICAvLyAgICAgICAgICB8ICAgICAgICAgICB8XG4gICAgICAgIC8vICAgICAgICAgIGEgICAgICAgICAgIGFcbiAgICAgICAgZW5kLm5leHQgPSBudWxsO1xuICAgICAgICByZXR1cm4gZmFjZS5vdXRzaWRlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIHRoZSB2aXNpYmxlIHZlcnRpY2VzIHRoYXQgYGZhY2VgIGlzIGFibGUgdG8gc2VlLCBhZGRpdGlvbmFsbHlcbiAgICAgKiBjaGVja2luZyB0aGUgZm9sbG93aW5nOlxuICAgICAqXG4gICAgICogSWYgYGFic29yYmluZ0ZhY2VgIGRvZXNuJ3QgZXhpc3QgdGhlbiBhbGwgdGhlIHJlbW92ZWQgdmVydGljZXMgd2lsbCBiZVxuICAgICAqIGFkZGVkIHRvIHRoZSBgdW5jbGFpbWVkYCB2ZXJ0ZXggbGlzdFxuICAgICAqXG4gICAgICogSWYgYGFic29yYmluZ0ZhY2VgIGV4aXN0cyB0aGVuIHRoaXMgbWV0aG9kIHdpbGwgYXNzaWduIGFsbCB0aGUgdmVydGljZXMgb2ZcbiAgICAgKiBgZmFjZWAgdGhhdCBjYW4gc2VlIGBhYnNvcmJpbmdGYWNlYCwgaWYgYSB2ZXJ0ZXggY2Fubm90IHNlZSBgYWJzb3JiaW5nRmFjZWBcbiAgICAgKiBpdCdzIGFkZGVkIHRvIHRoZSBgdW5jbGFpbWVkYCB2ZXJ0ZXggbGlzdFxuICAgICAqXG4gICAgICogQHBhcmFtIHtGYWNlfSBmYWNlXG4gICAgICogQHBhcmFtIHtGYWNlfSBbYWJzb3JiaW5nRmFjZV1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZGVsZXRlRmFjZVZlcnRpY2VzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVsZXRlRmFjZVZlcnRpY2VzKGZhY2UsIGFic29yYmluZ0ZhY2UpIHtcbiAgICAgIHZhciBmYWNlVmVydGljZXMgPSB0aGlzLnJlbW92ZUFsbFZlcnRpY2VzRnJvbUZhY2UoZmFjZSk7XG4gICAgICBpZiAoZmFjZVZlcnRpY2VzKSB7XG4gICAgICAgIGlmICghYWJzb3JiaW5nRmFjZSkge1xuICAgICAgICAgIC8vIG1hcmsgdGhlIHZlcnRpY2VzIHRvIGJlIHJlYXNzaWduZWQgdG8gc29tZSBvdGhlciBmYWNlXG4gICAgICAgICAgdGhpcy51bmNsYWltZWQuYWRkQWxsKGZhY2VWZXJ0aWNlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gaWYgdGhlcmUncyBhbiBhYnNvcmJpbmcgZmFjZSB0cnkgdG8gYXNzaWduIGFzIG1hbnkgdmVydGljZXNcbiAgICAgICAgICAvLyBhcyBwb3NzaWJsZSB0byBpdFxuXG4gICAgICAgICAgLy8gdGhlIHJlZmVyZW5jZSBgdmVydGV4Lm5leHRgIG1pZ2h0IGJlIGRlc3Ryb3llZCBvblxuICAgICAgICAgIC8vIGB0aGlzLmFkZFZlcnRleFRvRmFjZWAgKHNlZSBWZXJ0ZXhMaXN0I2FkZCksIG5leHRWZXJ0ZXggaXMgYVxuICAgICAgICAgIC8vIHJlZmVyZW5jZSB0byBpdFxuICAgICAgICAgIHZhciBuZXh0VmVydGV4ID0gdm9pZCAwO1xuICAgICAgICAgIGZvciAodmFyIHZlcnRleCA9IGZhY2VWZXJ0aWNlczsgdmVydGV4OyB2ZXJ0ZXggPSBuZXh0VmVydGV4KSB7XG4gICAgICAgICAgICBuZXh0VmVydGV4ID0gdmVydGV4Lm5leHQ7XG4gICAgICAgICAgICB2YXIgZGlzdGFuY2UgPSBhYnNvcmJpbmdGYWNlLmRpc3RhbmNlVG9QbGFuZSh2ZXJ0ZXgucG9pbnQpO1xuXG4gICAgICAgICAgICAvLyBjaGVjayBpZiBgdmVydGV4YCBpcyBhYmxlIHRvIHNlZSBgYWJzb3JiaW5nRmFjZWBcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA+IHRoaXMudG9sZXJhbmNlKSB7XG4gICAgICAgICAgICAgIHRoaXMuYWRkVmVydGV4VG9GYWNlKHZlcnRleCwgYWJzb3JiaW5nRmFjZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnVuY2xhaW1lZC5hZGQodmVydGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWFzc2lnbnMgYXMgbWFueSB2ZXJ0aWNlcyBhcyBwb3NzaWJsZSBmcm9tIHRoZSB1bmNsYWltZWQgbGlzdCB0byB0aGUgbmV3XG4gICAgICogZmFjZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RmFjZXNbXX0gbmV3RmFjZXNcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAncmVzb2x2ZVVuY2xhaW1lZFBvaW50cycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc29sdmVVbmNsYWltZWRQb2ludHMobmV3RmFjZXMpIHtcbiAgICAgIC8vIGNhY2hlIG5leHQgdmVydGV4IHNvIHRoYXQgaWYgYHZlcnRleC5uZXh0YCBpcyBkZXN0cm95ZWQgaXQncyBzdGlsbFxuICAgICAgLy8gcmVjb3ZlcmFibGVcbiAgICAgIHZhciB2ZXJ0ZXhOZXh0ID0gdGhpcy51bmNsYWltZWQuZmlyc3QoKTtcbiAgICAgIGZvciAodmFyIHZlcnRleCA9IHZlcnRleE5leHQ7IHZlcnRleDsgdmVydGV4ID0gdmVydGV4TmV4dCkge1xuICAgICAgICB2ZXJ0ZXhOZXh0ID0gdmVydGV4Lm5leHQ7XG4gICAgICAgIHZhciBtYXhEaXN0YW5jZSA9IHRoaXMudG9sZXJhbmNlO1xuICAgICAgICB2YXIgbWF4RmFjZSA9IHZvaWQgMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZXdGYWNlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIHZhciBmYWNlID0gbmV3RmFjZXNbaV07XG4gICAgICAgICAgaWYgKGZhY2UubWFyayA9PT0gX0ZhY2UuVklTSUJMRSkge1xuICAgICAgICAgICAgdmFyIGRpc3QgPSBmYWNlLmRpc3RhbmNlVG9QbGFuZSh2ZXJ0ZXgucG9pbnQpO1xuICAgICAgICAgICAgaWYgKGRpc3QgPiBtYXhEaXN0YW5jZSkge1xuICAgICAgICAgICAgICBtYXhEaXN0YW5jZSA9IGRpc3Q7XG4gICAgICAgICAgICAgIG1heEZhY2UgPSBmYWNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1heERpc3RhbmNlID4gMTAwMCAqIHRoaXMudG9sZXJhbmNlKSB7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtYXhGYWNlKSB7XG4gICAgICAgICAgdGhpcy5hZGRWZXJ0ZXhUb0ZhY2UodmVydGV4LCBtYXhGYWNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbXB1dGVzIHRoZSBleHRyZW1lcyBvZiBhIHRldHJhaGVkcm9uIHdoaWNoIHdpbGwgYmUgdGhlIGluaXRpYWwgaHVsbFxuICAgICAqXG4gICAgICogQHJldHVybiB7bnVtYmVyW119IFRoZSBtaW4vbWF4IHZlcnRpY2VzIGluIHRoZSB4LHkseiBkaXJlY3Rpb25zXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2NvbXB1dGVFeHRyZW1lcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXB1dGVFeHRyZW1lcygpIHtcbiAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICB2YXIgbWluID0gW107XG4gICAgICB2YXIgbWF4ID0gW107XG5cbiAgICAgIC8vIG1pbiB2ZXJ0ZXggb24gdGhlIHgseSx6IGRpcmVjdGlvbnNcbiAgICAgIHZhciBtaW5WZXJ0aWNlcyA9IFtdO1xuICAgICAgLy8gbWF4IHZlcnRleCBvbiB0aGUgeCx5LHogZGlyZWN0aW9uc1xuICAgICAgdmFyIG1heFZlcnRpY2VzID0gW107XG5cbiAgICAgIHZhciBpID0gdm9pZCAwLFxuICAgICAgICAgIGogPSB2b2lkIDA7XG5cbiAgICAgIC8vIGluaXRpYWxseSBhc3N1bWUgdGhhdCB0aGUgZmlyc3QgdmVydGV4IGlzIHRoZSBtaW4vbWF4XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgMzsgaSArPSAxKSB7XG4gICAgICAgIG1pblZlcnRpY2VzW2ldID0gbWF4VmVydGljZXNbaV0gPSB0aGlzLnZlcnRpY2VzWzBdO1xuICAgICAgfVxuICAgICAgLy8gY29weSB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlIGZpcnN0IHZlcnRleCB0byBtaW4vbWF4XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgMzsgaSArPSAxKSB7XG4gICAgICAgIG1pbltpXSA9IG1heFtpXSA9IHRoaXMudmVydGljZXNbMF0ucG9pbnRbaV07XG4gICAgICB9XG5cbiAgICAgIC8vIGNvbXB1dGUgdGhlIG1pbi9tYXggdmVydGV4IG9uIGFsbCA2IGRpcmVjdGlvbnNcbiAgICAgIGZvciAoaSA9IDE7IGkgPCB0aGlzLnZlcnRpY2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHZhciB2ZXJ0ZXggPSB0aGlzLnZlcnRpY2VzW2ldO1xuICAgICAgICB2YXIgcG9pbnQgPSB2ZXJ0ZXgucG9pbnQ7XG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgbWluIGNvb3JkaW5hdGVzXG4gICAgICAgIGZvciAoaiA9IDA7IGogPCAzOyBqICs9IDEpIHtcbiAgICAgICAgICBpZiAocG9pbnRbal0gPCBtaW5bal0pIHtcbiAgICAgICAgICAgIG1pbltqXSA9IHBvaW50W2pdO1xuICAgICAgICAgICAgbWluVmVydGljZXNbal0gPSB2ZXJ0ZXg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgbWF4IGNvb3JkaW5hdGVzXG4gICAgICAgIGZvciAoaiA9IDA7IGogPCAzOyBqICs9IDEpIHtcbiAgICAgICAgICBpZiAocG9pbnRbal0gPiBtYXhbal0pIHtcbiAgICAgICAgICAgIG1heFtqXSA9IHBvaW50W2pdO1xuICAgICAgICAgICAgbWF4VmVydGljZXNbal0gPSB2ZXJ0ZXg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGNvbXB1dGUgZXBzaWxvblxuICAgICAgdGhpcy50b2xlcmFuY2UgPSAzICogTnVtYmVyLkVQU0lMT04gKiAoTWF0aC5tYXgoTWF0aC5hYnMobWluWzBdKSwgTWF0aC5hYnMobWF4WzBdKSkgKyBNYXRoLm1heChNYXRoLmFicyhtaW5bMV0pLCBNYXRoLmFicyhtYXhbMV0pKSArIE1hdGgubWF4KE1hdGguYWJzKG1pblsyXSksIE1hdGguYWJzKG1heFsyXSkpKTtcbiAgICAgIGRlYnVnKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5sb2coJ3RvbGVyYW5jZSAlZCcsIG1lLnRvbGVyYW5jZSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBbbWluVmVydGljZXMsIG1heFZlcnRpY2VzXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb21wdWVzIHRoZSBpbml0aWFsIHRldHJhaGVkcm9uIGFzc2lnbmluZyB0byBpdHMgZmFjZXMgYWxsIHRoZSBwb2ludHMgdGhhdFxuICAgICAqIGFyZSBjYW5kaWRhdGVzIHRvIGZvcm0gcGFydCBvZiB0aGUgaHVsbFxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdjcmVhdGVJbml0aWFsU2ltcGxleCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZUluaXRpYWxTaW1wbGV4KCkge1xuICAgICAgdmFyIHZlcnRpY2VzID0gdGhpcy52ZXJ0aWNlcztcblxuICAgICAgdmFyIF9jb21wdXRlRXh0cmVtZXMgPSB0aGlzLmNvbXB1dGVFeHRyZW1lcygpLFxuICAgICAgICAgIF9jb21wdXRlRXh0cmVtZXMyID0gX3NsaWNlZFRvQXJyYXkoX2NvbXB1dGVFeHRyZW1lcywgMiksXG4gICAgICAgICAgbWluID0gX2NvbXB1dGVFeHRyZW1lczJbMF0sXG4gICAgICAgICAgbWF4ID0gX2NvbXB1dGVFeHRyZW1lczJbMV07XG5cbiAgICAgIHZhciB2MCA9IHZvaWQgMCxcbiAgICAgICAgICB2MSA9IHZvaWQgMCxcbiAgICAgICAgICB2MiA9IHZvaWQgMCxcbiAgICAgICAgICB2MyA9IHZvaWQgMDtcbiAgICAgIHZhciBpID0gdm9pZCAwLFxuICAgICAgICAgIGogPSB2b2lkIDA7XG5cbiAgICAgIC8vIEZpbmQgdGhlIHR3byB2ZXJ0aWNlcyB3aXRoIHRoZSBncmVhdGVzdCAxZCBzZXBhcmF0aW9uXG4gICAgICAvLyAobWF4LnggLSBtaW4ueClcbiAgICAgIC8vIChtYXgueSAtIG1pbi55KVxuICAgICAgLy8gKG1heC56IC0gbWluLnopXG4gICAgICB2YXIgbWF4RGlzdGFuY2UgPSAwO1xuICAgICAgdmFyIGluZGV4TWF4ID0gMDtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCAzOyBpICs9IDEpIHtcbiAgICAgICAgdmFyIGRpc3RhbmNlID0gbWF4W2ldLnBvaW50W2ldIC0gbWluW2ldLnBvaW50W2ldO1xuICAgICAgICBpZiAoZGlzdGFuY2UgPiBtYXhEaXN0YW5jZSkge1xuICAgICAgICAgIG1heERpc3RhbmNlID0gZGlzdGFuY2U7XG4gICAgICAgICAgaW5kZXhNYXggPSBpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2MCA9IG1pbltpbmRleE1heF07XG4gICAgICB2MSA9IG1heFtpbmRleE1heF07XG5cbiAgICAgIC8vIHRoZSBuZXh0IHZlcnRleCBpcyB0aGUgb25lIGZhcnRoZXN0IHRvIHRoZSBsaW5lIGZvcm1lZCBieSBgdjBgIGFuZCBgdjFgXG4gICAgICBtYXhEaXN0YW5jZSA9IDA7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy52ZXJ0aWNlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB2YXIgdmVydGV4ID0gdGhpcy52ZXJ0aWNlc1tpXTtcbiAgICAgICAgaWYgKHZlcnRleCAhPT0gdjAgJiYgdmVydGV4ICE9PSB2MSkge1xuICAgICAgICAgIHZhciBfZGlzdGFuY2UgPSAoMCwgX3BvaW50TGluZURpc3RhbmNlMi5kZWZhdWx0KSh2ZXJ0ZXgucG9pbnQsIHYwLnBvaW50LCB2MS5wb2ludCk7XG4gICAgICAgICAgaWYgKF9kaXN0YW5jZSA+IG1heERpc3RhbmNlKSB7XG4gICAgICAgICAgICBtYXhEaXN0YW5jZSA9IF9kaXN0YW5jZTtcbiAgICAgICAgICAgIHYyID0gdmVydGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyB0aGUgbmV4dCB2ZXJ0ZXMgaXMgdGhlIG9uZSBmYXJ0aGVzdCB0byB0aGUgcGxhbmUgYHYwYCwgYHYxYCwgYHYyYFxuICAgICAgLy8gbm9ybWFsaXplKCh2MiAtIHYxKSB4ICh2MCAtIHYxKSlcbiAgICAgIHZhciBub3JtYWwgPSAoMCwgX2dldFBsYW5lTm9ybWFsMi5kZWZhdWx0KShbXSwgdjAucG9pbnQsIHYxLnBvaW50LCB2Mi5wb2ludCk7XG4gICAgICAvLyBkaXN0YW5jZSBmcm9tIHRoZSBvcmlnaW4gdG8gdGhlIHBsYW5lXG4gICAgICB2YXIgZGlzdFBPID0gKDAsIF9kb3QyLmRlZmF1bHQpKHYwLnBvaW50LCBub3JtYWwpO1xuICAgICAgbWF4RGlzdGFuY2UgPSAtMTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLnZlcnRpY2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHZhciBfdmVydGV4ID0gdGhpcy52ZXJ0aWNlc1tpXTtcbiAgICAgICAgaWYgKF92ZXJ0ZXggIT09IHYwICYmIF92ZXJ0ZXggIT09IHYxICYmIF92ZXJ0ZXggIT09IHYyKSB7XG4gICAgICAgICAgdmFyIF9kaXN0YW5jZTIgPSBNYXRoLmFicygoMCwgX2RvdDIuZGVmYXVsdCkobm9ybWFsLCBfdmVydGV4LnBvaW50KSAtIGRpc3RQTyk7XG4gICAgICAgICAgaWYgKF9kaXN0YW5jZTIgPiBtYXhEaXN0YW5jZSkge1xuICAgICAgICAgICAgbWF4RGlzdGFuY2UgPSBfZGlzdGFuY2UyO1xuICAgICAgICAgICAgdjMgPSBfdmVydGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBpbml0aWFsIHNpbXBsZXhcbiAgICAgIC8vIFRha2VuIGZyb20gaHR0cDovL2V2ZXJ5dGhpbmcyLmNvbS90aXRsZS9Ib3crdG8rcGFpbnQrYSt0ZXRyYWhlZHJvblxuICAgICAgLy9cbiAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdjJcbiAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsfCxcbiAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLDdgYFxcJ1ZBLFxuICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgLDdgICAgfCwgYCdWQSxcbiAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAsN2AgICAgIGBcXCAgICBgJ1ZBLFxuICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAsN2AgICAgICAgIHwsICAgICAgYCdWQSxcbiAgICAgIC8vICAgICAgICAgICAgICAgICAgICw3YCAgICAgICAgICBgXFwgICAgICAgICBgJ1ZBLFxuICAgICAgLy8gICAgICAgICAgICAgICAgICw3YCAgICAgICAgICAgICB8LCAgICAgICAgICAgYCdWQSxcbiAgICAgIC8vICAgICAgICAgICAgICAgLDdgICAgICAgICAgICAgICAgYFxcICAgICAgICwuLm9vT09US2AgdjNcbiAgICAgIC8vICAgICAgICAgICAgICw3YCAgICAgICAgICAgICAgICAgIHwsLm9vT09UJydgICAgIEFWXG4gICAgICAvLyAgICAgICAgICAgLDdgICAgICAgICAgICAgLC4ub29PT1RgXFxgICAgICAgICAgICAvN1xuICAgICAgLy8gICAgICAgICAsN2AgICAgICAsLi5vb09PVCcnYCAgICAgIHwsICAgICAgICAgIEFWXG4gICAgICAvLyAgICAgICAgLFQsLi5vb09PVCcnYCAgICAgICAgICAgICAgYFxcICAgICAgICAgLzdcbiAgICAgIC8vICAgICB2MCBgJ1RUcy4sICAgICAgICAgICAgICAgICAgICAgfCwgICAgICAgQVZcbiAgICAgIC8vICAgICAgICAgICAgYCdUVHMuLCAgICAgICAgICAgICAgICAgYFxcICAgICAgLzdcbiAgICAgIC8vICAgICAgICAgICAgICAgICBgJ1RUcy4sICAgICAgICAgICAgIHwsICAgIEFWXG4gICAgICAvLyAgICAgICAgICAgICAgICAgICAgICBgJ1RUcy4sICAgICAgICBgXFwgICAvN1xuICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICBgJ1RUcy4sICAgIHwsIEFWXG4gICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCdUVHMuLFxcLzdcbiAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAnVGBcbiAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdjFcbiAgICAgIC8vXG4gICAgICB2YXIgZmFjZXMgPSBbXTtcbiAgICAgIGlmICgoMCwgX2RvdDIuZGVmYXVsdCkodjMucG9pbnQsIG5vcm1hbCkgLSBkaXN0UE8gPCAwKSB7XG4gICAgICAgIC8vIHRoZSBmYWNlIGlzIG5vdCBhYmxlIHRvIHNlZSB0aGUgcG9pbnQgc28gYHBsYW5lTm9ybWFsYFxuICAgICAgICAvLyBpcyBwb2ludGluZyBvdXRzaWRlIHRoZSB0ZXRyYWhlZHJvblxuICAgICAgICBmYWNlcy5wdXNoKF9GYWNlMi5kZWZhdWx0LmNyZWF0ZVRyaWFuZ2xlKHYwLCB2MSwgdjIpLCBfRmFjZTIuZGVmYXVsdC5jcmVhdGVUcmlhbmdsZSh2MywgdjEsIHYwKSwgX0ZhY2UyLmRlZmF1bHQuY3JlYXRlVHJpYW5nbGUodjMsIHYyLCB2MSksIF9GYWNlMi5kZWZhdWx0LmNyZWF0ZVRyaWFuZ2xlKHYzLCB2MCwgdjIpKTtcblxuICAgICAgICAvLyBzZXQgdGhlIG9wcG9zaXRlIGVkZ2VcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IDM7IGkgKz0gMSkge1xuICAgICAgICAgIHZhciBfaiA9IChpICsgMSkgJSAzO1xuICAgICAgICAgIC8vIGpvaW4gZmFjZVtpXSBpID4gMCwgd2l0aCB0aGUgZmlyc3QgZmFjZVxuICAgICAgICAgIGZhY2VzW2kgKyAxXS5nZXRFZGdlKDIpLnNldE9wcG9zaXRlKGZhY2VzWzBdLmdldEVkZ2UoX2opKTtcbiAgICAgICAgICAvLyBqb2luIGZhY2VbaV0gd2l0aCBmYWNlW2kgKyAxXSwgMSA8PSBpIDw9IDNcbiAgICAgICAgICBmYWNlc1tpICsgMV0uZ2V0RWRnZSgxKS5zZXRPcHBvc2l0ZShmYWNlc1tfaiArIDFdLmdldEVkZ2UoMCkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB0aGUgZmFjZSBpcyBhYmxlIHRvIHNlZSB0aGUgcG9pbnQgc28gYHBsYW5lTm9ybWFsYFxuICAgICAgICAvLyBpcyBwb2ludGluZyBpbnNpZGUgdGhlIHRldHJhaGVkcm9uXG4gICAgICAgIGZhY2VzLnB1c2goX0ZhY2UyLmRlZmF1bHQuY3JlYXRlVHJpYW5nbGUodjAsIHYyLCB2MSksIF9GYWNlMi5kZWZhdWx0LmNyZWF0ZVRyaWFuZ2xlKHYzLCB2MCwgdjEpLCBfRmFjZTIuZGVmYXVsdC5jcmVhdGVUcmlhbmdsZSh2MywgdjEsIHYyKSwgX0ZhY2UyLmRlZmF1bHQuY3JlYXRlVHJpYW5nbGUodjMsIHYyLCB2MCkpO1xuXG4gICAgICAgIC8vIHNldCB0aGUgb3Bwb3NpdGUgZWRnZVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgMzsgaSArPSAxKSB7XG4gICAgICAgICAgdmFyIF9qMiA9IChpICsgMSkgJSAzO1xuICAgICAgICAgIC8vIGpvaW4gZmFjZVtpXSBpID4gMCwgd2l0aCB0aGUgZmlyc3QgZmFjZVxuICAgICAgICAgIGZhY2VzW2kgKyAxXS5nZXRFZGdlKDIpLnNldE9wcG9zaXRlKGZhY2VzWzBdLmdldEVkZ2UoKDMgLSBpKSAlIDMpKTtcbiAgICAgICAgICAvLyBqb2luIGZhY2VbaV0gd2l0aCBmYWNlW2kgKyAxXVxuICAgICAgICAgIGZhY2VzW2kgKyAxXS5nZXRFZGdlKDApLnNldE9wcG9zaXRlKGZhY2VzW19qMiArIDFdLmdldEVkZ2UoMSkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIHRoZSBpbml0aWFsIGh1bGwgaXMgdGhlIHRldHJhaGVkcm9uXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgNDsgaSArPSAxKSB7XG4gICAgICAgIHRoaXMuZmFjZXMucHVzaChmYWNlc1tpXSk7XG4gICAgICB9XG5cbiAgICAgIC8vIGluaXRpYWwgYXNzaWdubWVudCBvZiB2ZXJ0aWNlcyB0byB0aGUgZmFjZXMgb2YgdGhlIHRldHJhaGVkcm9uXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgdmVydGljZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgdmFyIF92ZXJ0ZXgyID0gdmVydGljZXNbaV07XG4gICAgICAgIGlmIChfdmVydGV4MiAhPT0gdjAgJiYgX3ZlcnRleDIgIT09IHYxICYmIF92ZXJ0ZXgyICE9PSB2MyAmJiBfdmVydGV4MiAhPT0gdjMpIHtcbiAgICAgICAgICBtYXhEaXN0YW5jZSA9IHRoaXMudG9sZXJhbmNlO1xuICAgICAgICAgIHZhciBtYXhGYWNlID0gdm9pZCAwO1xuICAgICAgICAgIGZvciAoaiA9IDA7IGogPCA0OyBqICs9IDEpIHtcbiAgICAgICAgICAgIHZhciBfZGlzdGFuY2UzID0gZmFjZXNbal0uZGlzdGFuY2VUb1BsYW5lKF92ZXJ0ZXgyLnBvaW50KTtcbiAgICAgICAgICAgIGlmIChfZGlzdGFuY2UzID4gbWF4RGlzdGFuY2UpIHtcbiAgICAgICAgICAgICAgbWF4RGlzdGFuY2UgPSBfZGlzdGFuY2UzO1xuICAgICAgICAgICAgICBtYXhGYWNlID0gZmFjZXNbal07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG1heEZhY2UpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkVmVydGV4VG9GYWNlKF92ZXJ0ZXgyLCBtYXhGYWNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZWluZGV4RmFjZUFuZFZlcnRpY2VzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVpbmRleEZhY2VBbmRWZXJ0aWNlcygpIHtcbiAgICAgIC8vIHJlbW92ZSBpbmFjdGl2ZSBmYWNlc1xuICAgICAgdmFyIGFjdGl2ZUZhY2VzID0gW107XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZmFjZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgdmFyIGZhY2UgPSB0aGlzLmZhY2VzW2ldO1xuICAgICAgICBpZiAoZmFjZS5tYXJrID09PSBfRmFjZS5WSVNJQkxFKSB7XG4gICAgICAgICAgYWN0aXZlRmFjZXMucHVzaChmYWNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5mYWNlcyA9IGFjdGl2ZUZhY2VzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbGxlY3RGYWNlcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbGxlY3RGYWNlcyhza2lwVHJpYW5ndWxhdGlvbikge1xuICAgICAgdmFyIGZhY2VJbmRpY2VzID0gW107XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZmFjZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHRoaXMuZmFjZXNbaV0ubWFyayAhPT0gX0ZhY2UuVklTSUJMRSkge1xuICAgICAgICAgIHRocm93IEVycm9yKCdhdHRlbXB0IHRvIGluY2x1ZGUgYSBkZXN0cm95ZWQgZmFjZSBpbiB0aGUgaHVsbCcpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpbmRpY2VzID0gdGhpcy5mYWNlc1tpXS5jb2xsZWN0SW5kaWNlcygpO1xuICAgICAgICBpZiAoc2tpcFRyaWFuZ3VsYXRpb24pIHtcbiAgICAgICAgICBmYWNlSW5kaWNlcy5wdXNoKGluZGljZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaW5kaWNlcy5sZW5ndGggLSAyOyBqICs9IDEpIHtcbiAgICAgICAgICAgIGZhY2VJbmRpY2VzLnB1c2goW2luZGljZXNbMF0sIGluZGljZXNbaiArIDFdLCBpbmRpY2VzW2ogKyAyXV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhY2VJbmRpY2VzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmRzIHRoZSBuZXh0IHZlcnRleCB0byBtYWtlIGZhY2VzIHdpdGggdGhlIGN1cnJlbnQgaHVsbFxuICAgICAqXG4gICAgICogLSBsZXQgYGZhY2VgIGJlIHRoZSBmaXJzdCBmYWNlIGV4aXN0aW5nIGluIHRoZSBgY2xhaW1lZGAgdmVydGV4IGxpc3RcbiAgICAgKiAgLSBpZiBgZmFjZWAgZG9lc24ndCBleGlzdCB0aGVuIHJldHVybiBzaW5jZSB0aGVyZSdyZSBubyB2ZXJ0aWNlcyBsZWZ0XG4gICAgICogIC0gb3RoZXJ3aXNlIGZvciBlYWNoIGB2ZXJ0ZXhgIHRoYXQgZmFjZSBzZWVzIGZpbmQgdGhlIG9uZSBmdXJ0aGVzdCBhd2F5XG4gICAgICogIGZyb20gYGZhY2VgXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWZXJ0ZXh8dW5kZWZpbmVkfSBSZXR1cm5zIHVuZGVmaW5lZCB3aGVuIHRoZXJlJ3JlIG5vIG1vcmVcbiAgICAgKiB2aXNpYmxlIHZlcnRpY2VzXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ25leHRWZXJ0ZXhUb0FkZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG5leHRWZXJ0ZXhUb0FkZCgpIHtcbiAgICAgIGlmICghdGhpcy5jbGFpbWVkLmlzRW1wdHkoKSkge1xuICAgICAgICB2YXIgZXllVmVydGV4ID0gdm9pZCAwLFxuICAgICAgICAgICAgdmVydGV4ID0gdm9pZCAwO1xuICAgICAgICB2YXIgbWF4RGlzdGFuY2UgPSAwO1xuICAgICAgICB2YXIgZXllRmFjZSA9IHRoaXMuY2xhaW1lZC5maXJzdCgpLmZhY2U7XG4gICAgICAgIGZvciAodmVydGV4ID0gZXllRmFjZS5vdXRzaWRlOyB2ZXJ0ZXggJiYgdmVydGV4LmZhY2UgPT09IGV5ZUZhY2U7IHZlcnRleCA9IHZlcnRleC5uZXh0KSB7XG4gICAgICAgICAgdmFyIGRpc3RhbmNlID0gZXllRmFjZS5kaXN0YW5jZVRvUGxhbmUodmVydGV4LnBvaW50KTtcbiAgICAgICAgICBpZiAoZGlzdGFuY2UgPiBtYXhEaXN0YW5jZSkge1xuICAgICAgICAgICAgbWF4RGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAgICAgICAgICAgIGV5ZVZlcnRleCA9IHZlcnRleDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV5ZVZlcnRleDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyBhIGNoYWluIG9mIGhhbGYgZWRnZXMgaW4gY2N3IG9yZGVyIGNhbGxlZCB0aGUgYGhvcml6b25gLCBmb3IgYW5cbiAgICAgKiBlZGdlIHRvIGJlIHBhcnQgb2YgdGhlIGhvcml6b24gaXQgbXVzdCBqb2luIGEgZmFjZSB0aGF0IGNhbiBzZWVcbiAgICAgKiBgZXllUG9pbnRgIGFuZCBhIGZhY2UgdGhhdCBjYW5ub3Qgc2VlIGBleWVQb2ludGBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyW119IGV5ZVBvaW50IC0gVGhlIGNvb3JkaW5hdGVzIG9mIGEgcG9pbnRcbiAgICAgKiBAcGFyYW0ge0hhbGZFZGdlfSBjcm9zc0VkZ2UgLSBUaGUgZWRnZSB1c2VkIHRvIGp1bXAgdG8gdGhlIGN1cnJlbnQgYGZhY2VgXG4gICAgICogQHBhcmFtIHtGYWNlfSBmYWNlIC0gVGhlIGN1cnJlbnQgZmFjZSBiZWluZyB0ZXN0ZWRcbiAgICAgKiBAcGFyYW0ge0hhbGZFZGdlW119IGhvcml6b24gLSBUaGUgZWRnZXMgdGhhdCBmb3JtIHBhcnQgb2YgdGhlIGhvcml6b24gaW5cbiAgICAgKiBjY3cgb3JkZXJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnY29tcHV0ZUhvcml6b24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wdXRlSG9yaXpvbihleWVQb2ludCwgY3Jvc3NFZGdlLCBmYWNlLCBob3Jpem9uKSB7XG4gICAgICAvLyBtb3ZlcyBmYWNlJ3MgdmVydGljZXMgdG8gdGhlIGB1bmNsYWltZWRgIHZlcnRleCBsaXN0XG4gICAgICB0aGlzLmRlbGV0ZUZhY2VWZXJ0aWNlcyhmYWNlKTtcblxuICAgICAgZmFjZS5tYXJrID0gX0ZhY2UuREVMRVRFRDtcblxuICAgICAgdmFyIGVkZ2UgPSB2b2lkIDA7XG4gICAgICBpZiAoIWNyb3NzRWRnZSkge1xuICAgICAgICBlZGdlID0gY3Jvc3NFZGdlID0gZmFjZS5nZXRFZGdlKDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gc3RhcnQgZnJvbSB0aGUgbmV4dCBlZGdlIHNpbmNlIGBjcm9zc0VkZ2VgIHdhcyBhbHJlYWR5IGFuYWx5emVkXG4gICAgICAgIC8vIChhY3R1YWxseSBgY3Jvc3NFZGdlLm9wcG9zaXRlYCB3YXMgdGhlIGZhY2Ugd2hvIGNhbGxlZCB0aGlzIG1ldGhvZFxuICAgICAgICAvLyByZWN1cnNpdmVseSlcbiAgICAgICAgZWRnZSA9IGNyb3NzRWRnZS5uZXh0O1xuICAgICAgfVxuXG4gICAgICAvLyBBbGwgdGhlIGZhY2VzIHRoYXQgYXJlIGFibGUgdG8gc2VlIGBleWVWZXJ0ZXhgIGFyZSBkZWZpbmVkIGFzIGZvbGxvd3NcbiAgICAgIC8vXG4gICAgICAvLyAgICAgICB2ICAgIC9cbiAgICAgIC8vICAgICAgICAgICAvIDw9PSB2aXNpYmxlIGZhY2VcbiAgICAgIC8vICAgICAgICAgIC9cbiAgICAgIC8vICAgICAgICAgfFxuICAgICAgLy8gICAgICAgICB8IDw9PSBub3QgdmlzaWJsZSBmYWNlXG4gICAgICAvL1xuICAgICAgLy8gIGRvdCh2LCB2aXNpYmxlIGZhY2Ugbm9ybWFsKSAtIHZpc2libGUgZmFjZSBvZmZzZXQgPiB0aGlzLnRvbGVyYW5jZVxuICAgICAgLy9cbiAgICAgIGRvIHtcbiAgICAgICAgdmFyIG9wcG9zaXRlRWRnZSA9IGVkZ2Uub3Bwb3NpdGU7XG4gICAgICAgIHZhciBvcHBvc2l0ZUZhY2UgPSBvcHBvc2l0ZUVkZ2UuZmFjZTtcbiAgICAgICAgaWYgKG9wcG9zaXRlRmFjZS5tYXJrID09PSBfRmFjZS5WSVNJQkxFKSB7XG4gICAgICAgICAgaWYgKG9wcG9zaXRlRmFjZS5kaXN0YW5jZVRvUGxhbmUoZXllUG9pbnQpID4gdGhpcy50b2xlcmFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcHV0ZUhvcml6b24oZXllUG9pbnQsIG9wcG9zaXRlRWRnZSwgb3Bwb3NpdGVGYWNlLCBob3Jpem9uKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaG9yaXpvbi5wdXNoKGVkZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlZGdlID0gZWRnZS5uZXh0O1xuICAgICAgfSB3aGlsZSAoZWRnZSAhPT0gY3Jvc3NFZGdlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgZmFjZSB3aXRoIHRoZSBwb2ludHMgYGV5ZVZlcnRleC5wb2ludGAsIGBob3Jpem9uRWRnZS50YWlsYCBhbmRcbiAgICAgKiBgaG9yaXpvbkVkZ2UudGFpbGAgaW4gY2N3IG9yZGVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlcnRleH0gZXllVmVydGV4XG4gICAgICogQHBhcmFtIHtIYWxmRWRnZX0gaG9yaXpvbkVkZ2VcbiAgICAgKiBAcmV0dXJuIHtIYWxmRWRnZX0gVGhlIGhhbGYgZWRnZSB3aG9zZSB2ZXJ0ZXggaXMgdGhlIGV5ZVZlcnRleFxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdhZGRBZGpvaW5pbmdGYWNlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkQWRqb2luaW5nRmFjZShleWVWZXJ0ZXgsIGhvcml6b25FZGdlKSB7XG4gICAgICAvLyBhbGwgdGhlIGhhbGYgZWRnZXMgYXJlIGNyZWF0ZWQgaW4gY2N3IG9yZGVyIHRodXMgdGhlIGZhY2UgaXMgYWx3YXlzXG4gICAgICAvLyBwb2ludGluZyBvdXRzaWRlIHRoZSBodWxsXG4gICAgICAvLyBlZGdlczpcbiAgICAgIC8vXG4gICAgICAvLyAgICAgICAgICAgICAgICAgIGV5ZVZlcnRleC5wb2ludFxuICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgIC8gXFxcbiAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgIC8gICBcXFxuICAgICAgLy8gICAgICAgICAgICAgICAgICAxICAvICAgICBcXCAgMFxuICAgICAgLy8gICAgICAgICAgICAgICAgICAgIC8gICAgICAgXFxcbiAgICAgIC8vICAgICAgICAgICAgICAgICAgIC8gICAgICAgICBcXFxuICAgICAgLy8gICAgICAgICAgICAgICAgICAvICAgICAgICAgICBcXFxuICAgICAgLy8gICAgICAgICAgaG9yaXpvbi50YWlsIC0tLSBob3Jpem9uLmhlYWRcbiAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgLy9cbiAgICAgIHZhciBmYWNlID0gX0ZhY2UyLmRlZmF1bHQuY3JlYXRlVHJpYW5nbGUoZXllVmVydGV4LCBob3Jpem9uRWRnZS50YWlsKCksIGhvcml6b25FZGdlLmhlYWQoKSk7XG4gICAgICB0aGlzLmZhY2VzLnB1c2goZmFjZSk7XG4gICAgICAvLyBqb2luIGZhY2UuZ2V0RWRnZSgtMSkgd2l0aCB0aGUgaG9yaXpvbidzIG9wcG9zaXRlIGVkZ2VcbiAgICAgIC8vIGZhY2UuZ2V0RWRnZSgtMSkgPSBmYWNlLmdldEVkZ2UoMilcbiAgICAgIGZhY2UuZ2V0RWRnZSgtMSkuc2V0T3Bwb3NpdGUoaG9yaXpvbkVkZ2Uub3Bwb3NpdGUpO1xuICAgICAgcmV0dXJuIGZhY2UuZ2V0RWRnZSgwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGhvcml6b24ubGVuZ3RoIGZhY2VzIHRvIHRoZSBodWxsLCBlYWNoIGZhY2Ugd2lsbCBiZSAnbGlua2VkJyB3aXRoIHRoZVxuICAgICAqIGhvcml6b24gb3Bwb3NpdGUgZmFjZSBhbmQgdGhlIGZhY2Ugb24gdGhlIGxlZnQvcmlnaHRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVydGV4fSBleWVWZXJ0ZXhcbiAgICAgKiBAcGFyYW0ge0hhbGZFZGdlW119IGhvcml6b24gLSBBIGNoYWluIG9mIGhhbGYgZWRnZXMgaW4gY2N3IG9yZGVyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2FkZE5ld0ZhY2VzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkTmV3RmFjZXMoZXllVmVydGV4LCBob3Jpem9uKSB7XG4gICAgICB0aGlzLm5ld0ZhY2VzID0gW107XG4gICAgICB2YXIgZmlyc3RTaWRlRWRnZSA9IHZvaWQgMCxcbiAgICAgICAgICBwcmV2aW91c1NpZGVFZGdlID0gdm9pZCAwO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBob3Jpem9uLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHZhciBob3Jpem9uRWRnZSA9IGhvcml6b25baV07XG4gICAgICAgIC8vIHJldHVybnMgdGhlIHJpZ2h0IHNpZGUgZWRnZVxuICAgICAgICB2YXIgc2lkZUVkZ2UgPSB0aGlzLmFkZEFkam9pbmluZ0ZhY2UoZXllVmVydGV4LCBob3Jpem9uRWRnZSk7XG4gICAgICAgIGlmICghZmlyc3RTaWRlRWRnZSkge1xuICAgICAgICAgIGZpcnN0U2lkZUVkZ2UgPSBzaWRlRWRnZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBqb2lucyBmYWNlLmdldEVkZ2UoMSkgd2l0aCBwcmV2aW91c0ZhY2UuZ2V0RWRnZSgwKVxuICAgICAgICAgIHNpZGVFZGdlLm5leHQuc2V0T3Bwb3NpdGUocHJldmlvdXNTaWRlRWRnZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5uZXdGYWNlcy5wdXNoKHNpZGVFZGdlLmZhY2UpO1xuICAgICAgICBwcmV2aW91c1NpZGVFZGdlID0gc2lkZUVkZ2U7XG4gICAgICB9XG4gICAgICBmaXJzdFNpZGVFZGdlLm5leHQuc2V0T3Bwb3NpdGUocHJldmlvdXNTaWRlRWRnZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29tcHV0ZXMgdGhlIGRpc3RhbmNlIGZyb20gYGVkZ2VgIG9wcG9zaXRlIGZhY2UncyBjZW50cm9pZCB0b1xuICAgICAqIGBlZGdlLmZhY2VgXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hhbGZFZGdlfSBlZGdlXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqIC0gQSBwb3NpdGl2ZSBudW1iZXIgd2hlbiB0aGUgY2VudHJvaWQgb2YgdGhlIG9wcG9zaXRlIGZhY2UgaXMgYWJvdmUgdGhlXG4gICAgICogICBmYWNlIGkuZS4gd2hlbiB0aGUgZmFjZXMgYXJlIGNvbmNhdmVcbiAgICAgKiAtIEEgbmVnYXRpdmUgbnVtYmVyIHdoZW4gdGhlIGNlbnRyb2lkIG9mIHRoZSBvcHBvc2l0ZSBmYWNlIGlzIGJlbG93IHRoZVxuICAgICAqICAgZmFjZSBpLmUuIHdoZW4gdGhlIGZhY2VzIGFyZSBjb252ZXhcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnb3Bwb3NpdGVGYWNlRGlzdGFuY2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvcHBvc2l0ZUZhY2VEaXN0YW5jZShlZGdlKSB7XG4gICAgICByZXR1cm4gZWRnZS5mYWNlLmRpc3RhbmNlVG9QbGFuZShlZGdlLm9wcG9zaXRlLmZhY2UuY2VudHJvaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1lcmdlcyBhIGZhY2Ugd2l0aCBub25lL2FueS9hbGwgaXRzIG5laWdoYm9ycyBhY2NvcmRpbmcgdG8gdGhlIHN0cmF0ZWd5XG4gICAgICogdXNlZFxuICAgICAqXG4gICAgICogaWYgYG1lcmdlVHlwZWAgaXMgTUVSR0VfTk9OX0NPTlZFWF9XUlRfTEFSR0VSX0ZBQ0UgdGhlbiB0aGUgbWVyZ2Ugd2lsbCBiZVxuICAgICAqIGRlY2lkZWQgYmFzZWQgb24gdGhlIGZhY2Ugd2l0aCB0aGUgbGFyZ2VyIGFyZWEsIHRoZSBjZW50cm9pZCBvZiB0aGUgZmFjZVxuICAgICAqIHdpdGggdGhlIHNtYWxsZXIgYXJlYSB3aWxsIGJlIGNoZWNrZWQgYWdhaW5zdCB0aGUgb25lIHdpdGggdGhlIGxhcmdlciBhcmVhXG4gICAgICogdG8gc2VlIGlmIGl0J3MgaW4gdGhlIG1lcmdlIHJhbmdlIFt0b2xlcmFuY2UsIC10b2xlcmFuY2VdIGkuZS5cbiAgICAgKlxuICAgICAqICAgIGRvdChjZW50cm9pZCBzbWFsbGVyIGZhY2UsIGxhcmdlciBmYWNlIG5vcm1hbCkgLSBsYXJnZXIgZmFjZSBvZmZzZXQgPiAtdG9sZXJhbmNlXG4gICAgICpcbiAgICAgKiBOb3RlIHRoYXQgdGhlIGZpcnN0IGNoZWNrICh3aXRoICt0b2xlcmFuY2UpIHdhcyBkb25lIG9uIGBjb21wdXRlSG9yaXpvbmBcbiAgICAgKlxuICAgICAqIElmIHRoZSBhYm92ZSBpcyBub3QgdHJ1ZSB0aGVuIHRoZSBjaGVjayBpcyBkb25lIHdpdGggcmVzcGVjdCB0byB0aGUgc21hbGxlclxuICAgICAqIGZhY2UgaS5lLlxuICAgICAqXG4gICAgICogICAgZG90KGNlbnRyb2lkIGxhcmdlciBmYWNlLCBzbWFsbGVyIGZhY2Ugbm9ybWFsKSAtIHNtYWxsZXIgZmFjZSBvZmZzZXQgPiAtdG9sZXJhbmNlXG4gICAgICpcbiAgICAgKiBJZiB0cnVlIHRoZW4gaXQgbWVhbnMgdGhhdCB0d28gZmFjZXMgYXJlIG5vbiBjb252ZXggKGNvbmNhdmUpLCBldmVuIGlmIHRoZVxuICAgICAqIGRvdCguLi4pIC0gb2Zmc2V0IHZhbHVlIGlzID4gMCAodGhhdCdzIHRoZSBwb2ludCBvZiBkb2luZyB0aGUgbWVyZ2UgaW4gdGhlXG4gICAgICogZmlyc3QgcGxhY2UpXG4gICAgICpcbiAgICAgKiBJZiB0d28gZmFjZXMgYXJlIGNvbmNhdmUgdGhlbiB0aGUgY2hlY2sgbXVzdCBhbHNvIGJlIGRvbmUgb24gdGhlIG90aGVyIGZhY2VcbiAgICAgKiBidXQgdGhpcyBpcyBkb25lIGluIGFub3RoZXIgbWVyZ2UgcGFzcywgZm9yIHRoaXMgdG8gaGFwcGVuIHRoZSBmYWNlIGlzXG4gICAgICogbWFya2VkIGluIGEgdGVtcG9yYWwgTk9OX0NPTlZFWCBzdGF0ZVxuICAgICAqXG4gICAgICogaWYgYG1lcmdlVHlwZWAgaXMgTUVSR0VfTk9OX0NPTlZFWCB0aGVuIHR3byBmYWNlcyB3aWxsIGJlIG1lcmdlZCBvbmx5IGlmXG4gICAgICogdGhleSBwYXNzIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uc1xuICAgICAqXG4gICAgICogICAgZG90KGNlbnRyb2lkIHNtYWxsZXIgZmFjZSwgbGFyZ2VyIGZhY2Ugbm9ybWFsKSAtIGxhcmdlciBmYWNlIG9mZnNldCA+IC10b2xlcmFuY2VcbiAgICAgKiAgICBkb3QoY2VudHJvaWQgbGFyZ2VyIGZhY2UsIHNtYWxsZXIgZmFjZSBub3JtYWwpIC0gc21hbGxlciBmYWNlIG9mZnNldCA+IC10b2xlcmFuY2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RmFjZX0gZmFjZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtZXJnZVR5cGUgLSBFaXRoZXIgTUVSR0VfTk9OX0NPTlZFWF9XUlRfTEFSR0VSX0ZBQ0Ugb3JcbiAgICAgKiBNRVJHRV9OT05fQ09OVkVYXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2RvQWRqYWNlbnRNZXJnZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvQWRqYWNlbnRNZXJnZShmYWNlLCBtZXJnZVR5cGUpIHtcbiAgICAgIHZhciBlZGdlID0gZmFjZS5lZGdlO1xuICAgICAgdmFyIGNvbnZleCA9IHRydWU7XG4gICAgICB2YXIgaXQgPSAwO1xuICAgICAgZG8ge1xuICAgICAgICBpZiAoaXQgPj0gZmFjZS5uVmVydGljZXMpIHtcbiAgICAgICAgICB0aHJvdyBFcnJvcignbWVyZ2UgcmVjdXJzaW9uIGxpbWl0IGV4Y2VlZGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wcG9zaXRlRmFjZSA9IGVkZ2Uub3Bwb3NpdGUuZmFjZTtcbiAgICAgICAgdmFyIG1lcmdlID0gZmFsc2U7XG5cbiAgICAgICAgLy8gSW1wb3J0YW50IG5vdGVzIGFib3V0IHRoZSBhbGdvcml0aG0gdG8gbWVyZ2UgZmFjZXNcbiAgICAgICAgLy9cbiAgICAgICAgLy8gLSBHaXZlbiBhIHZlcnRleCBgZXllVmVydGV4YCB0aGF0IHdpbGwgYmUgYWRkZWQgdG8gdGhlIGh1bGxcbiAgICAgICAgLy8gICBhbGwgdGhlIGZhY2VzIHRoYXQgY2Fubm90IHNlZSBgZXllVmVydGV4YCBhcmUgZGVmaW5lZCBhcyBmb2xsb3dzXG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICAgZG90KHYsIG5vdCB2aXNpYmxlIGZhY2Ugbm9ybWFsKSAtIG5vdCB2aXNpYmxlIG9mZnNldCA8IHRvbGVyYW5jZVxuICAgICAgICAvL1xuICAgICAgICAvLyAtIFR3byBmYWNlcyBjYW4gYmUgbWVyZ2VkIHdoZW4gdGhlIGNlbnRyb2lkIG9mIG9uZSBvZiB0aGVzZSBmYWNlc1xuICAgICAgICAvLyBwcm9qZWN0ZWQgdG8gdGhlIG5vcm1hbCBvZiB0aGUgb3RoZXIgZmFjZSBtaW51cyB0aGUgb3RoZXIgZmFjZSBvZmZzZXRcbiAgICAgICAgLy8gaXMgaW4gdGhlIHJhbmdlIFt0b2xlcmFuY2UsIC10b2xlcmFuY2VdXG4gICAgICAgIC8vIC0gU2luY2UgYGZhY2VgIChnaXZlbiBpbiB0aGUgaW5wdXQgZm9yIHRoaXMgbWV0aG9kKSBoYXMgcGFzc2VkIHRoZVxuICAgICAgICAvLyBjaGVjayBhYm92ZSB3ZSBvbmx5IGhhdmUgdG8gY2hlY2sgdGhlIGxvd2VyIGJvdW5kIGUuZy5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgICBkb3Qodiwgbm90IHZpc2libGUgZmFjZSBub3JtYWwpIC0gbm90IHZpc2libGUgb2Zmc2V0ID4gLXRvbGVyYW5jZVxuICAgICAgICAvL1xuICAgICAgICBpZiAobWVyZ2VUeXBlID09PSBNRVJHRV9OT05fQ09OVkVYKSB7XG4gICAgICAgICAgaWYgKHRoaXMub3Bwb3NpdGVGYWNlRGlzdGFuY2UoZWRnZSkgPiAtdGhpcy50b2xlcmFuY2UgfHwgdGhpcy5vcHBvc2l0ZUZhY2VEaXN0YW5jZShlZGdlLm9wcG9zaXRlKSA+IC10aGlzLnRvbGVyYW5jZSkge1xuICAgICAgICAgICAgbWVyZ2UgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoZmFjZS5hcmVhID4gb3Bwb3NpdGVGYWNlLmFyZWEpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wcG9zaXRlRmFjZURpc3RhbmNlKGVkZ2UpID4gLXRoaXMudG9sZXJhbmNlKSB7XG4gICAgICAgICAgICAgIG1lcmdlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHBvc2l0ZUZhY2VEaXN0YW5jZShlZGdlLm9wcG9zaXRlKSA+IC10aGlzLnRvbGVyYW5jZSkge1xuICAgICAgICAgICAgICBjb252ZXggPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMub3Bwb3NpdGVGYWNlRGlzdGFuY2UoZWRnZS5vcHBvc2l0ZSkgPiAtdGhpcy50b2xlcmFuY2UpIHtcbiAgICAgICAgICAgICAgbWVyZ2UgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm9wcG9zaXRlRmFjZURpc3RhbmNlKGVkZ2UpID4gLXRoaXMudG9sZXJhbmNlKSB7XG4gICAgICAgICAgICAgIGNvbnZleCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChtZXJnZSkge1xuICAgICAgICAgICAgZGVidWcubG9nZ2VyKCdmYWNlIG1lcmdlJyk7XG4gICAgICAgICAgICAvLyB3aGVuIHR3byBmYWNlcyBhcmUgbWVyZ2VkIGl0IG1pZ2h0IGJlIHBvc3NpYmxlIHRoYXQgcmVkdW5kYW50IGZhY2VzXG4gICAgICAgICAgICAvLyBhcmUgZGVzdHJveWVkLCBpbiB0aGF0IGNhc2UgbW92ZSBhbGwgdGhlIHZpc2libGUgdmVydGljZXMgZnJvbSB0aGVcbiAgICAgICAgICAgIC8vIGRlc3Ryb3llZCBmYWNlcyB0byB0aGUgYHVuY2xhaW1lZGAgdmVydGV4IGxpc3RcbiAgICAgICAgICAgIHZhciBkaXNjYXJkZWRGYWNlcyA9IGZhY2UubWVyZ2VBZGphY2VudEZhY2VzKGVkZ2UsIFtdKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGlzY2FyZGVkRmFjZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgdGhpcy5kZWxldGVGYWNlVmVydGljZXMoZGlzY2FyZGVkRmFjZXNbaV0sIGZhY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVkZ2UgPSBlZGdlLm5leHQ7XG4gICAgICAgIGl0ICs9IDE7XG4gICAgICB9IHdoaWxlIChlZGdlICE9PSBmYWNlLmVkZ2UpO1xuICAgICAgaWYgKCFjb252ZXgpIHtcbiAgICAgICAgZmFjZS5tYXJrID0gX0ZhY2UuTk9OX0NPTlZFWDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgdmVydGV4IHRvIHRoZSBodWxsIHdpdGggdGhlIGZvbGxvd2luZyBhbGdvcml0aG1cbiAgICAgKlxuICAgICAqIC0gQ29tcHV0ZSB0aGUgYGhvcml6b25gIHdoaWNoIGlzIGEgY2hhaW4gb2YgaGFsZiBlZGdlcywgZm9yIGFuIGVkZ2UgdG9cbiAgICAgKiAgIGJlbG9uZyB0byB0aGlzIGdyb3VwIGl0IG11c3QgYmUgdGhlIGVkZ2UgY29ubmVjdGluZyBhIGZhY2UgdGhhdCBjYW5cbiAgICAgKiAgIHNlZSBgZXllVmVydGV4YCBhbmQgYSBmYWNlIHdoaWNoIGNhbm5vdCBzZWUgYGV5ZVZlcnRleGBcbiAgICAgKiAtIEFsbCB0aGUgZmFjZXMgdGhhdCBjYW4gc2VlIGBleWVWZXJ0ZXhgIGhhdmUgaXRzIHZpc2libGUgdmVydGljZXMgcmVtb3ZlZFxuICAgICAqICAgZnJvbSB0aGUgY2xhaW1lZCBWZXJ0ZXhMaXN0XG4gICAgICogLSBBIG5ldyBzZXQgb2YgZmFjZXMgaXMgY3JlYXRlZCB3aXRoIGVhY2ggZWRnZSBvZiB0aGUgYGhvcml6b25gIGFuZFxuICAgICAqICAgYGV5ZVZlcnRleGAsIGVhY2ggZmFjZSBpcyBjb25uZWN0ZWQgd2l0aCB0aGUgb3Bwb3NpdGUgaG9yaXpvbiBmYWNlIGFuZFxuICAgICAqICAgdGhlIGZhY2Ugb24gdGhlIGxlZnQvcmlnaHRcbiAgICAgKiAtIFRoZSBuZXcgZmFjZXMgYXJlIG1lcmdlZCBpZiBwb3NzaWJsZSB3aXRoIHRoZSBvcHBvc2l0ZSBob3Jpem9uIGZhY2UgZmlyc3RcbiAgICAgKiAgIGFuZCB0aGVuIHRoZSBmYWNlcyBvbiB0aGUgcmlnaHQvbGVmdFxuICAgICAqIC0gVGhlIHZlcnRpY2VzIHJlbW92ZWQgZnJvbSBhbGwgdGhlIHZpc2libGUgZmFjZXMgYXJlIGFzc2lnbmVkIHRvIHRoZSBuZXdcbiAgICAgKiAgIGZhY2VzIGlmIHBvc3NpYmxlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlcnRleH0gZXllVmVydGV4XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2FkZFZlcnRleFRvSHVsbCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZFZlcnRleFRvSHVsbChleWVWZXJ0ZXgpIHtcbiAgICAgIHZhciBob3Jpem9uID0gW107XG5cbiAgICAgIHRoaXMudW5jbGFpbWVkLmNsZWFyKCk7XG5cbiAgICAgIC8vIHJlbW92ZSBgZXllVmVydGV4YCBmcm9tIGBleWVWZXJ0ZXguZmFjZWAgc28gdGhhdCBpdCBjYW4ndCBiZSBhZGRlZCB0byB0aGVcbiAgICAgIC8vIGB1bmNsYWltZWRgIHZlcnRleCBsaXN0XG4gICAgICB0aGlzLnJlbW92ZVZlcnRleEZyb21GYWNlKGV5ZVZlcnRleCwgZXllVmVydGV4LmZhY2UpO1xuICAgICAgdGhpcy5jb21wdXRlSG9yaXpvbihleWVWZXJ0ZXgucG9pbnQsIG51bGwsIGV5ZVZlcnRleC5mYWNlLCBob3Jpem9uKTtcbiAgICAgIGRlYnVnKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5sb2coJ2hvcml6b24gJWonLCBob3Jpem9uLm1hcChmdW5jdGlvbiAoZWRnZSkge1xuICAgICAgICAgIHJldHVybiBlZGdlLmhlYWQoKS5pbmRleDtcbiAgICAgICAgfSkpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmFkZE5ld0ZhY2VzKGV5ZVZlcnRleCwgaG9yaXpvbik7XG5cbiAgICAgIGRlYnVnLmxvZ2dlcignZmlyc3QgbWVyZ2UnKTtcblxuICAgICAgLy8gZmlyc3QgbWVyZ2UgcGFzc1xuICAgICAgLy8gRG8gdGhlIG1lcmdlIHdpdGggcmVzcGVjdCB0byB0aGUgbGFyZ2VyIGZhY2VcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5uZXdGYWNlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB2YXIgZmFjZSA9IHRoaXMubmV3RmFjZXNbaV07XG4gICAgICAgIGlmIChmYWNlLm1hcmsgPT09IF9GYWNlLlZJU0lCTEUpIHtcbiAgICAgICAgICB3aGlsZSAodGhpcy5kb0FkamFjZW50TWVyZ2UoZmFjZSwgTUVSR0VfTk9OX0NPTlZFWF9XUlRfTEFSR0VSX0ZBQ0UpKSB7fVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGRlYnVnLmxvZ2dlcignc2Vjb25kIG1lcmdlJyk7XG5cbiAgICAgIC8vIHNlY29uZCBtZXJnZSBwYXNzXG4gICAgICAvLyBEbyB0aGUgbWVyZ2Ugb24gbm9uIGNvbnZleCBmYWNlcyAoYSBmYWNlIGlzIG1hcmtlZCBhcyBub24gY29udmV4IGluIHRoZVxuICAgICAgLy8gZmlyc3QgcGFzcylcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLm5ld0ZhY2VzLmxlbmd0aDsgX2kgKz0gMSkge1xuICAgICAgICB2YXIgX2ZhY2UgPSB0aGlzLm5ld0ZhY2VzW19pXTtcbiAgICAgICAgaWYgKF9mYWNlLm1hcmsgPT09IF9GYWNlLk5PTl9DT05WRVgpIHtcbiAgICAgICAgICBfZmFjZS5tYXJrID0gX0ZhY2UuVklTSUJMRTtcbiAgICAgICAgICB3aGlsZSAodGhpcy5kb0FkamFjZW50TWVyZ2UoX2ZhY2UsIE1FUkdFX05PTl9DT05WRVgpKSB7fVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGRlYnVnLmxvZ2dlcigncmVhc3NpZ25pbmcgcG9pbnRzIHRvIG5ld0ZhY2VzJyk7XG4gICAgICAvLyByZWFzc2lnbiBgdW5jbGFpbWVkYCB2ZXJ0aWNlcyB0byB0aGUgbmV3IGZhY2VzXG4gICAgICB0aGlzLnJlc29sdmVVbmNsYWltZWRQb2ludHModGhpcy5uZXdGYWNlcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnYnVpbGQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBidWlsZCgpIHtcbiAgICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICAgIHZhciBleWVWZXJ0ZXggPSB2b2lkIDA7XG4gICAgICB0aGlzLmNyZWF0ZUluaXRpYWxTaW1wbGV4KCk7XG4gICAgICB3aGlsZSAoZXllVmVydGV4ID0gdGhpcy5uZXh0VmVydGV4VG9BZGQoKSkge1xuICAgICAgICBpdGVyYXRpb25zICs9IDE7XG4gICAgICAgIGRlYnVnLmxvZ2dlcignPT0gaXRlcmF0aW9uICVqID09JywgaXRlcmF0aW9ucyk7XG4gICAgICAgIGRlYnVnLmxvZ2dlcignbmV4dCB2ZXJ0ZXggdG8gYWRkID0gJWQgJWonLCBleWVWZXJ0ZXguaW5kZXgsIGV5ZVZlcnRleC5wb2ludCk7XG4gICAgICAgIHRoaXMuYWRkVmVydGV4VG9IdWxsKGV5ZVZlcnRleCk7XG4gICAgICAgIGRlYnVnLmxvZ2dlcignZW5kJyk7XG4gICAgICB9XG4gICAgICB0aGlzLnJlaW5kZXhGYWNlQW5kVmVydGljZXMoKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUXVpY2tIdWxsO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBRdWlja0h1bGw7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9xdWlja2h1bGwzZC9kaXN0L1F1aWNrSHVsbC5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqIHBvaW50LWxpbmUtZGlzdGFuY2VcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgTWF1cmljaW8gUG9wcGVcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqL1xuXG4ndXNlIHN0cmljdCdcblxudmFyIGRpc3RhbmNlU3F1YXJlZCA9IHJlcXVpcmUoJy4vc3F1YXJlZCcpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHBvaW50LCBhLCBiKSB7XG4gIHJldHVybiBNYXRoLnNxcnQoZGlzdGFuY2VTcXVhcmVkKHBvaW50LCBhLCBiKSlcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3BvaW50LWxpbmUtZGlzdGFuY2UvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBzdWJ0cmFjdCA9IHJlcXVpcmUoJ2dsLXZlYzMvc3VidHJhY3QnKVxudmFyIGNyb3NzID0gcmVxdWlyZSgnZ2wtdmVjMy9jcm9zcycpXG52YXIgc3F1YXJlZExlbmd0aCA9IHJlcXVpcmUoJ2dsLXZlYzMvc3F1YXJlZExlbmd0aCcpXG52YXIgYWIgPSBbXVxudmFyIGFwID0gW11cbnZhciBjciA9IFtdXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHAsIGEsIGIpIHtcbiAgLy8gLy8gPT0gdmVjdG9yIHNvbHV0aW9uXG4gIC8vIHZhciBub3JtYWxpemUgPSByZXF1aXJlKCdnbC12ZWMzL25vcm1hbGl6ZScpXG4gIC8vIHZhciBzY2FsZUFuZEFkZCA9IHJlcXVpcmUoJ2dsLXZlYzMvc2NhbGVBbmRBZGQnKVxuICAvLyB2YXIgZG90ID0gcmVxdWlyZSgnZ2wtdmVjMy9kb3QnKVxuICAvLyB2YXIgc3F1YXJlZERpc3RhbmNlID0gcmVxdWlyZSgnZ2wtdmVjMy9zcXVhcmVkRGlzdGFuY2UnKVxuICAvLyAvLyBuID0gdmVjdG9yIGBhYmAgbm9ybWFsaXplZFxuICAvLyB2YXIgbiA9IFtdXG4gIC8vIC8vIHByb2plY3Rpb24gPSBwcm9qZWN0aW9uIG9mIGBwb2ludGAgb24gYG5gXG4gIC8vIHZhciBwcm9qZWN0aW9uID0gW11cbiAgLy8gbm9ybWFsaXplKG4sIHN1YnRyYWN0KG4sIGEsIGIpKVxuICAvLyBzY2FsZUFuZEFkZChwcm9qZWN0aW9uLCBhLCBuLCBkb3QobiwgcCkpXG4gIC8vIHJldHVybiBzcXVhcmVkRGlzdGFuY2UocHJvamVjdGlvbiwgcClcblxuICAvLyA9PSBwYXJhbGxlbG9ncmFtIHNvbHV0aW9uXG4gIC8vXG4gIC8vICAgICAgICAgICAgc1xuICAvLyAgICAgIF9fYV9fX19fX19fYl9fXG4gIC8vICAgICAgIC8gICB8ICAgIC9cbiAgLy8gICAgICAvICAgaHwgICAvXG4gIC8vICAgICAvX19fX198X18vXG4gIC8vICAgIHBcbiAgLy9cbiAgLy8gIHMgPSBiIC0gYVxuICAvLyAgYXJlYSA9IHMgKiBoXG4gIC8vICB8YXAgeCBzfCA9IHMgKiBoXG4gIC8vICBoID0gfGFwIHggc3wgLyBzXG4gIC8vXG4gIHN1YnRyYWN0KGFiLCBiLCBhKVxuICBzdWJ0cmFjdChhcCwgcCwgYSlcbiAgdmFyIGFyZWEgPSBzcXVhcmVkTGVuZ3RoKGNyb3NzKGNyLCBhcCwgYWIpKVxuICB2YXIgcyA9IHNxdWFyZWRMZW5ndGgoYWIpXG4gIGlmIChzID09PSAwKSB7XG4gICAgdGhyb3cgRXJyb3IoJ2EgYW5kIGIgYXJlIHRoZSBzYW1lIHBvaW50JylcbiAgfVxuICByZXR1cm4gYXJlYSAvIHNcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3BvaW50LWxpbmUtZGlzdGFuY2Uvc3F1YXJlZC5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBzcXVhcmVkTGVuZ3RoO1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgbGVuZ3RoIG9mIGEgdmVjM1xuICpcbiAqIEBwYXJhbSB7dmVjM30gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIHNxdWFyZWQgbGVuZ3RoIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzcXVhcmVkIGxlbmd0aCBvZiBhXG4gKi9cbmZ1bmN0aW9uIHNxdWFyZWRMZW5ndGgoYSkge1xuICAgIHZhciB4ID0gYVswXSxcbiAgICAgICAgeSA9IGFbMV0sXG4gICAgICAgIHogPSBhWzJdXG4gICAgcmV0dXJuIHgqeCArIHkqeSArIHoqelxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dsLXZlYzMvc3F1YXJlZExlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG5vcm1hbGl6ZSA9IHJlcXVpcmUoJ2dsLXZlYzMvbm9ybWFsaXplJylcbnZhciBzdWIgPSByZXF1aXJlKCdnbC12ZWMzL3N1YnRyYWN0JylcbnZhciBjcm9zcyA9IHJlcXVpcmUoJ2dsLXZlYzMvY3Jvc3MnKVxudmFyIHRtcCA9IFswLCAwLCAwXVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBsYW5lTm9ybWFsXG5cbmZ1bmN0aW9uIHBsYW5lTm9ybWFsIChvdXQsIHBvaW50MSwgcG9pbnQyLCBwb2ludDMpIHtcbiAgc3ViKG91dCwgcG9pbnQxLCBwb2ludDIpXG4gIHN1Yih0bXAsIHBvaW50MiwgcG9pbnQzKVxuICBjcm9zcyhvdXQsIG91dCwgdG1wKVxuICByZXR1cm4gbm9ybWFsaXplKG91dCwgb3V0KVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dldC1wbGFuZS1ub3JtYWwvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogVGhpcyBpcyB0aGUgd2ViIGJyb3dzZXIgaW1wbGVtZW50YXRpb24gb2YgYGRlYnVnKClgLlxuICpcbiAqIEV4cG9zZSBgZGVidWcoKWAgYXMgdGhlIG1vZHVsZS5cbiAqL1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2RlYnVnJyk7XG5leHBvcnRzLmxvZyA9IGxvZztcbmV4cG9ydHMuZm9ybWF0QXJncyA9IGZvcm1hdEFyZ3M7XG5leHBvcnRzLnNhdmUgPSBzYXZlO1xuZXhwb3J0cy5sb2FkID0gbG9hZDtcbmV4cG9ydHMudXNlQ29sb3JzID0gdXNlQ29sb3JzO1xuZXhwb3J0cy5zdG9yYWdlID0gJ3VuZGVmaW5lZCcgIT0gdHlwZW9mIGNocm9tZVxuICAgICAgICAgICAgICAgJiYgJ3VuZGVmaW5lZCcgIT0gdHlwZW9mIGNocm9tZS5zdG9yYWdlXG4gICAgICAgICAgICAgICAgICA/IGNocm9tZS5zdG9yYWdlLmxvY2FsXG4gICAgICAgICAgICAgICAgICA6IGxvY2Fsc3RvcmFnZSgpO1xuXG4vKipcbiAqIENvbG9ycy5cbiAqL1xuXG5leHBvcnRzLmNvbG9ycyA9IFtcbiAgJ2xpZ2h0c2VhZ3JlZW4nLFxuICAnZm9yZXN0Z3JlZW4nLFxuICAnZ29sZGVucm9kJyxcbiAgJ2RvZGdlcmJsdWUnLFxuICAnZGFya29yY2hpZCcsXG4gICdjcmltc29uJ1xuXTtcblxuLyoqXG4gKiBDdXJyZW50bHkgb25seSBXZWJLaXQtYmFzZWQgV2ViIEluc3BlY3RvcnMsIEZpcmVmb3ggPj0gdjMxLFxuICogYW5kIHRoZSBGaXJlYnVnIGV4dGVuc2lvbiAoYW55IEZpcmVmb3ggdmVyc2lvbikgYXJlIGtub3duXG4gKiB0byBzdXBwb3J0IFwiJWNcIiBDU1MgY3VzdG9taXphdGlvbnMuXG4gKlxuICogVE9ETzogYWRkIGEgYGxvY2FsU3RvcmFnZWAgdmFyaWFibGUgdG8gZXhwbGljaXRseSBlbmFibGUvZGlzYWJsZSBjb2xvcnNcbiAqL1xuXG5mdW5jdGlvbiB1c2VDb2xvcnMoKSB7XG4gIC8vIE5COiBJbiBhbiBFbGVjdHJvbiBwcmVsb2FkIHNjcmlwdCwgZG9jdW1lbnQgd2lsbCBiZSBkZWZpbmVkIGJ1dCBub3QgZnVsbHlcbiAgLy8gaW5pdGlhbGl6ZWQuIFNpbmNlIHdlIGtub3cgd2UncmUgaW4gQ2hyb21lLCB3ZSdsbCBqdXN0IGRldGVjdCB0aGlzIGNhc2VcbiAgLy8gZXhwbGljaXRseVxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnByb2Nlc3MgJiYgd2luZG93LnByb2Nlc3MudHlwZSA9PT0gJ3JlbmRlcmVyJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gaXMgd2Via2l0PyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNjQ1OTYwNi8zNzY3NzNcbiAgLy8gZG9jdW1lbnQgaXMgdW5kZWZpbmVkIGluIHJlYWN0LW5hdGl2ZTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0LW5hdGl2ZS9wdWxsLzE2MzJcbiAgcmV0dXJuICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLldlYmtpdEFwcGVhcmFuY2UpIHx8XG4gICAgLy8gaXMgZmlyZWJ1Zz8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzk4MTIwLzM3Njc3M1xuICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuY29uc29sZSAmJiAod2luZG93LmNvbnNvbGUuZmlyZWJ1ZyB8fCAod2luZG93LmNvbnNvbGUuZXhjZXB0aW9uICYmIHdpbmRvdy5jb25zb2xlLnRhYmxlKSkpIHx8XG4gICAgLy8gaXMgZmlyZWZveCA+PSB2MzE/XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9Ub29scy9XZWJfQ29uc29sZSNTdHlsaW5nX21lc3NhZ2VzXG4gICAgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9maXJlZm94XFwvKFxcZCspLykgJiYgcGFyc2VJbnQoUmVnRXhwLiQxLCAxMCkgPj0gMzEpIHx8XG4gICAgLy8gZG91YmxlIGNoZWNrIHdlYmtpdCBpbiB1c2VyQWdlbnQganVzdCBpbiBjYXNlIHdlIGFyZSBpbiBhIHdvcmtlclxuICAgICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvYXBwbGV3ZWJraXRcXC8oXFxkKykvKSk7XG59XG5cbi8qKlxuICogTWFwICVqIHRvIGBKU09OLnN0cmluZ2lmeSgpYCwgc2luY2Ugbm8gV2ViIEluc3BlY3RvcnMgZG8gdGhhdCBieSBkZWZhdWx0LlxuICovXG5cbmV4cG9ydHMuZm9ybWF0dGVycy5qID0gZnVuY3Rpb24odikge1xuICB0cnkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuICdbVW5leHBlY3RlZEpTT05QYXJzZUVycm9yXTogJyArIGVyci5tZXNzYWdlO1xuICB9XG59O1xuXG5cbi8qKlxuICogQ29sb3JpemUgbG9nIGFyZ3VtZW50cyBpZiBlbmFibGVkLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0QXJncyhhcmdzKSB7XG4gIHZhciB1c2VDb2xvcnMgPSB0aGlzLnVzZUNvbG9ycztcblxuICBhcmdzWzBdID0gKHVzZUNvbG9ycyA/ICclYycgOiAnJylcbiAgICArIHRoaXMubmFtZXNwYWNlXG4gICAgKyAodXNlQ29sb3JzID8gJyAlYycgOiAnICcpXG4gICAgKyBhcmdzWzBdXG4gICAgKyAodXNlQ29sb3JzID8gJyVjICcgOiAnICcpXG4gICAgKyAnKycgKyBleHBvcnRzLmh1bWFuaXplKHRoaXMuZGlmZik7XG5cbiAgaWYgKCF1c2VDb2xvcnMpIHJldHVybjtcblxuICB2YXIgYyA9ICdjb2xvcjogJyArIHRoaXMuY29sb3I7XG4gIGFyZ3Muc3BsaWNlKDEsIDAsIGMsICdjb2xvcjogaW5oZXJpdCcpXG5cbiAgLy8gdGhlIGZpbmFsIFwiJWNcIiBpcyBzb21ld2hhdCB0cmlja3ksIGJlY2F1c2UgdGhlcmUgY291bGQgYmUgb3RoZXJcbiAgLy8gYXJndW1lbnRzIHBhc3NlZCBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIHRoZSAlYywgc28gd2UgbmVlZCB0b1xuICAvLyBmaWd1cmUgb3V0IHRoZSBjb3JyZWN0IGluZGV4IHRvIGluc2VydCB0aGUgQ1NTIGludG9cbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxhc3RDID0gMDtcbiAgYXJnc1swXS5yZXBsYWNlKC8lW2EtekEtWiVdL2csIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgaWYgKCclJScgPT09IG1hdGNoKSByZXR1cm47XG4gICAgaW5kZXgrKztcbiAgICBpZiAoJyVjJyA9PT0gbWF0Y2gpIHtcbiAgICAgIC8vIHdlIG9ubHkgYXJlIGludGVyZXN0ZWQgaW4gdGhlICpsYXN0KiAlY1xuICAgICAgLy8gKHRoZSB1c2VyIG1heSBoYXZlIHByb3ZpZGVkIHRoZWlyIG93bilcbiAgICAgIGxhc3RDID0gaW5kZXg7XG4gICAgfVxuICB9KTtcblxuICBhcmdzLnNwbGljZShsYXN0QywgMCwgYyk7XG59XG5cbi8qKlxuICogSW52b2tlcyBgY29uc29sZS5sb2coKWAgd2hlbiBhdmFpbGFibGUuXG4gKiBOby1vcCB3aGVuIGBjb25zb2xlLmxvZ2AgaXMgbm90IGEgXCJmdW5jdGlvblwiLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gbG9nKCkge1xuICAvLyB0aGlzIGhhY2tlcnkgaXMgcmVxdWlyZWQgZm9yIElFOC85LCB3aGVyZVxuICAvLyB0aGUgYGNvbnNvbGUubG9nYCBmdW5jdGlvbiBkb2Vzbid0IGhhdmUgJ2FwcGx5J1xuICByZXR1cm4gJ29iamVjdCcgPT09IHR5cGVvZiBjb25zb2xlXG4gICAgJiYgY29uc29sZS5sb2dcbiAgICAmJiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlLmxvZywgY29uc29sZSwgYXJndW1lbnRzKTtcbn1cblxuLyoqXG4gKiBTYXZlIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gc2F2ZShuYW1lc3BhY2VzKSB7XG4gIHRyeSB7XG4gICAgaWYgKG51bGwgPT0gbmFtZXNwYWNlcykge1xuICAgICAgZXhwb3J0cy5zdG9yYWdlLnJlbW92ZUl0ZW0oJ2RlYnVnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4cG9ydHMuc3RvcmFnZS5kZWJ1ZyA9IG5hbWVzcGFjZXM7XG4gICAgfVxuICB9IGNhdGNoKGUpIHt9XG59XG5cbi8qKlxuICogTG9hZCBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHJldHVybiB7U3RyaW5nfSByZXR1cm5zIHRoZSBwcmV2aW91c2x5IHBlcnNpc3RlZCBkZWJ1ZyBtb2Rlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbG9hZCgpIHtcbiAgdmFyIHI7XG4gIHRyeSB7XG4gICAgciA9IGV4cG9ydHMuc3RvcmFnZS5kZWJ1ZztcbiAgfSBjYXRjaChlKSB7fVxuXG4gIC8vIElmIGRlYnVnIGlzbid0IHNldCBpbiBMUywgYW5kIHdlJ3JlIGluIEVsZWN0cm9uLCB0cnkgdG8gbG9hZCAkREVCVUdcbiAgaWYgKCFyICYmIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiAnZW52JyBpbiBwcm9jZXNzKSB7XG4gICAgciA9IHByb2Nlc3MuZW52LkRFQlVHO1xuICB9XG5cbiAgcmV0dXJuIHI7XG59XG5cbi8qKlxuICogRW5hYmxlIG5hbWVzcGFjZXMgbGlzdGVkIGluIGBsb2NhbFN0b3JhZ2UuZGVidWdgIGluaXRpYWxseS5cbiAqL1xuXG5leHBvcnRzLmVuYWJsZShsb2FkKCkpO1xuXG4vKipcbiAqIExvY2Fsc3RvcmFnZSBhdHRlbXB0cyB0byByZXR1cm4gdGhlIGxvY2Fsc3RvcmFnZS5cbiAqXG4gKiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHNhZmFyaSB0aHJvd3NcbiAqIHdoZW4gYSB1c2VyIGRpc2FibGVzIGNvb2tpZXMvbG9jYWxzdG9yYWdlXG4gKiBhbmQgeW91IGF0dGVtcHQgdG8gYWNjZXNzIGl0LlxuICpcbiAqIEByZXR1cm4ge0xvY2FsU3RvcmFnZX1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGxvY2Fsc3RvcmFnZSgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZTtcbiAgfSBjYXRjaCAoZSkge31cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qKlxuICogVGhpcyBpcyB0aGUgY29tbW9uIGxvZ2ljIGZvciBib3RoIHRoZSBOb2RlLmpzIGFuZCB3ZWIgYnJvd3NlclxuICogaW1wbGVtZW50YXRpb25zIG9mIGBkZWJ1ZygpYC5cbiAqXG4gKiBFeHBvc2UgYGRlYnVnKClgIGFzIHRoZSBtb2R1bGUuXG4gKi9cblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3JlYXRlRGVidWcuZGVidWcgPSBjcmVhdGVEZWJ1Z1snZGVmYXVsdCddID0gY3JlYXRlRGVidWc7XG5leHBvcnRzLmNvZXJjZSA9IGNvZXJjZTtcbmV4cG9ydHMuZGlzYWJsZSA9IGRpc2FibGU7XG5leHBvcnRzLmVuYWJsZSA9IGVuYWJsZTtcbmV4cG9ydHMuZW5hYmxlZCA9IGVuYWJsZWQ7XG5leHBvcnRzLmh1bWFuaXplID0gcmVxdWlyZSgnbXMnKTtcblxuLyoqXG4gKiBUaGUgY3VycmVudGx5IGFjdGl2ZSBkZWJ1ZyBtb2RlIG5hbWVzLCBhbmQgbmFtZXMgdG8gc2tpcC5cbiAqL1xuXG5leHBvcnRzLm5hbWVzID0gW107XG5leHBvcnRzLnNraXBzID0gW107XG5cbi8qKlxuICogTWFwIG9mIHNwZWNpYWwgXCIlblwiIGhhbmRsaW5nIGZ1bmN0aW9ucywgZm9yIHRoZSBkZWJ1ZyBcImZvcm1hdFwiIGFyZ3VtZW50LlxuICpcbiAqIFZhbGlkIGtleSBuYW1lcyBhcmUgYSBzaW5nbGUsIGxvd2VyIG9yIHVwcGVyLWNhc2UgbGV0dGVyLCBpLmUuIFwiblwiIGFuZCBcIk5cIi5cbiAqL1xuXG5leHBvcnRzLmZvcm1hdHRlcnMgPSB7fTtcblxuLyoqXG4gKiBQcmV2aW91cyBsb2cgdGltZXN0YW1wLlxuICovXG5cbnZhciBwcmV2VGltZTtcblxuLyoqXG4gKiBTZWxlY3QgYSBjb2xvci5cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHNlbGVjdENvbG9yKG5hbWVzcGFjZSkge1xuICB2YXIgaGFzaCA9IDAsIGk7XG5cbiAgZm9yIChpIGluIG5hbWVzcGFjZSkge1xuICAgIGhhc2ggID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBuYW1lc3BhY2UuY2hhckNvZGVBdChpKTtcbiAgICBoYXNoIHw9IDA7IC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxuICB9XG5cbiAgcmV0dXJuIGV4cG9ydHMuY29sb3JzW01hdGguYWJzKGhhc2gpICUgZXhwb3J0cy5jb2xvcnMubGVuZ3RoXTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBkZWJ1Z2dlciB3aXRoIHRoZSBnaXZlbiBgbmFtZXNwYWNlYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlRGVidWcobmFtZXNwYWNlKSB7XG5cbiAgZnVuY3Rpb24gZGVidWcoKSB7XG4gICAgLy8gZGlzYWJsZWQ/XG4gICAgaWYgKCFkZWJ1Zy5lbmFibGVkKSByZXR1cm47XG5cbiAgICB2YXIgc2VsZiA9IGRlYnVnO1xuXG4gICAgLy8gc2V0IGBkaWZmYCB0aW1lc3RhbXBcbiAgICB2YXIgY3VyciA9ICtuZXcgRGF0ZSgpO1xuICAgIHZhciBtcyA9IGN1cnIgLSAocHJldlRpbWUgfHwgY3Vycik7XG4gICAgc2VsZi5kaWZmID0gbXM7XG4gICAgc2VsZi5wcmV2ID0gcHJldlRpbWU7XG4gICAgc2VsZi5jdXJyID0gY3VycjtcbiAgICBwcmV2VGltZSA9IGN1cnI7XG5cbiAgICAvLyB0dXJuIHRoZSBgYXJndW1lbnRzYCBpbnRvIGEgcHJvcGVyIEFycmF5XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgIH1cblxuICAgIGFyZ3NbMF0gPSBleHBvcnRzLmNvZXJjZShhcmdzWzBdKTtcblxuICAgIGlmICgnc3RyaW5nJyAhPT0gdHlwZW9mIGFyZ3NbMF0pIHtcbiAgICAgIC8vIGFueXRoaW5nIGVsc2UgbGV0J3MgaW5zcGVjdCB3aXRoICVPXG4gICAgICBhcmdzLnVuc2hpZnQoJyVPJyk7XG4gICAgfVxuXG4gICAgLy8gYXBwbHkgYW55IGBmb3JtYXR0ZXJzYCB0cmFuc2Zvcm1hdGlvbnNcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIGFyZ3NbMF0gPSBhcmdzWzBdLnJlcGxhY2UoLyUoW2EtekEtWiVdKS9nLCBmdW5jdGlvbihtYXRjaCwgZm9ybWF0KSB7XG4gICAgICAvLyBpZiB3ZSBlbmNvdW50ZXIgYW4gZXNjYXBlZCAlIHRoZW4gZG9uJ3QgaW5jcmVhc2UgdGhlIGFycmF5IGluZGV4XG4gICAgICBpZiAobWF0Y2ggPT09ICclJScpIHJldHVybiBtYXRjaDtcbiAgICAgIGluZGV4Kys7XG4gICAgICB2YXIgZm9ybWF0dGVyID0gZXhwb3J0cy5mb3JtYXR0ZXJzW2Zvcm1hdF07XG4gICAgICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGZvcm1hdHRlcikge1xuICAgICAgICB2YXIgdmFsID0gYXJnc1tpbmRleF07XG4gICAgICAgIG1hdGNoID0gZm9ybWF0dGVyLmNhbGwoc2VsZiwgdmFsKTtcblxuICAgICAgICAvLyBub3cgd2UgbmVlZCB0byByZW1vdmUgYGFyZ3NbaW5kZXhdYCBzaW5jZSBpdCdzIGlubGluZWQgaW4gdGhlIGBmb3JtYXRgXG4gICAgICAgIGFyZ3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgaW5kZXgtLTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtYXRjaDtcbiAgICB9KTtcblxuICAgIC8vIGFwcGx5IGVudi1zcGVjaWZpYyBmb3JtYXR0aW5nIChjb2xvcnMsIGV0Yy4pXG4gICAgZXhwb3J0cy5mb3JtYXRBcmdzLmNhbGwoc2VsZiwgYXJncyk7XG5cbiAgICB2YXIgbG9nRm4gPSBkZWJ1Zy5sb2cgfHwgZXhwb3J0cy5sb2cgfHwgY29uc29sZS5sb2cuYmluZChjb25zb2xlKTtcbiAgICBsb2dGbi5hcHBseShzZWxmLCBhcmdzKTtcbiAgfVxuXG4gIGRlYnVnLm5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcbiAgZGVidWcuZW5hYmxlZCA9IGV4cG9ydHMuZW5hYmxlZChuYW1lc3BhY2UpO1xuICBkZWJ1Zy51c2VDb2xvcnMgPSBleHBvcnRzLnVzZUNvbG9ycygpO1xuICBkZWJ1Zy5jb2xvciA9IHNlbGVjdENvbG9yKG5hbWVzcGFjZSk7XG5cbiAgLy8gZW52LXNwZWNpZmljIGluaXRpYWxpemF0aW9uIGxvZ2ljIGZvciBkZWJ1ZyBpbnN0YW5jZXNcbiAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBleHBvcnRzLmluaXQpIHtcbiAgICBleHBvcnRzLmluaXQoZGVidWcpO1xuICB9XG5cbiAgcmV0dXJuIGRlYnVnO1xufVxuXG4vKipcbiAqIEVuYWJsZXMgYSBkZWJ1ZyBtb2RlIGJ5IG5hbWVzcGFjZXMuIFRoaXMgY2FuIGluY2x1ZGUgbW9kZXNcbiAqIHNlcGFyYXRlZCBieSBhIGNvbG9uIGFuZCB3aWxkY2FyZHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZW5hYmxlKG5hbWVzcGFjZXMpIHtcbiAgZXhwb3J0cy5zYXZlKG5hbWVzcGFjZXMpO1xuXG4gIGV4cG9ydHMubmFtZXMgPSBbXTtcbiAgZXhwb3J0cy5za2lwcyA9IFtdO1xuXG4gIHZhciBzcGxpdCA9ICh0eXBlb2YgbmFtZXNwYWNlcyA9PT0gJ3N0cmluZycgPyBuYW1lc3BhY2VzIDogJycpLnNwbGl0KC9bXFxzLF0rLyk7XG4gIHZhciBsZW4gPSBzcGxpdC5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGlmICghc3BsaXRbaV0pIGNvbnRpbnVlOyAvLyBpZ25vcmUgZW1wdHkgc3RyaW5nc1xuICAgIG5hbWVzcGFjZXMgPSBzcGxpdFtpXS5yZXBsYWNlKC9cXCovZywgJy4qPycpO1xuICAgIGlmIChuYW1lc3BhY2VzWzBdID09PSAnLScpIHtcbiAgICAgIGV4cG9ydHMuc2tpcHMucHVzaChuZXcgUmVnRXhwKCdeJyArIG5hbWVzcGFjZXMuc3Vic3RyKDEpICsgJyQnKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4cG9ydHMubmFtZXMucHVzaChuZXcgUmVnRXhwKCdeJyArIG5hbWVzcGFjZXMgKyAnJCcpKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNhYmxlIGRlYnVnIG91dHB1dC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGRpc2FibGUoKSB7XG4gIGV4cG9ydHMuZW5hYmxlKCcnKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIG1vZGUgbmFtZSBpcyBlbmFibGVkLCBmYWxzZSBvdGhlcndpc2UuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGVuYWJsZWQobmFtZSkge1xuICB2YXIgaSwgbGVuO1xuICBmb3IgKGkgPSAwLCBsZW4gPSBleHBvcnRzLnNraXBzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKGV4cG9ydHMuc2tpcHNbaV0udGVzdChuYW1lKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKGkgPSAwLCBsZW4gPSBleHBvcnRzLm5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKGV4cG9ydHMubmFtZXNbaV0udGVzdChuYW1lKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBDb2VyY2UgYHZhbGAuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsXG4gKiBAcmV0dXJuIHtNaXhlZH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGNvZXJjZSh2YWwpIHtcbiAgaWYgKHZhbCBpbnN0YW5jZW9mIEVycm9yKSByZXR1cm4gdmFsLnN0YWNrIHx8IHZhbC5tZXNzYWdlO1xuICByZXR1cm4gdmFsO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2RlYnVnLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEhlbHBlcnMuXG4gKi9cblxudmFyIHMgPSAxMDAwO1xudmFyIG0gPSBzICogNjA7XG52YXIgaCA9IG0gKiA2MDtcbnZhciBkID0gaCAqIDI0O1xudmFyIHkgPSBkICogMzY1LjI1O1xuXG4vKipcbiAqIFBhcnNlIG9yIGZvcm1hdCB0aGUgZ2l2ZW4gYHZhbGAuXG4gKlxuICogT3B0aW9uczpcbiAqXG4gKiAgLSBgbG9uZ2AgdmVyYm9zZSBmb3JtYXR0aW5nIFtmYWxzZV1cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IHZhbFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHRocm93cyB7RXJyb3J9IHRocm93IGFuIGVycm9yIGlmIHZhbCBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nIG9yIGEgbnVtYmVyXG4gKiBAcmV0dXJuIHtTdHJpbmd8TnVtYmVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHZhbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsO1xuICBpZiAodHlwZSA9PT0gJ3N0cmluZycgJiYgdmFsLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gcGFyc2UodmFsKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnbnVtYmVyJyAmJiBpc05hTih2YWwpID09PSBmYWxzZSkge1xuICAgIHJldHVybiBvcHRpb25zLmxvbmcgPyBmbXRMb25nKHZhbCkgOiBmbXRTaG9ydCh2YWwpO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAndmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSB2YWxpZCBudW1iZXIuIHZhbD0nICtcbiAgICAgIEpTT04uc3RyaW5naWZ5KHZhbClcbiAgKTtcbn07XG5cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIGBzdHJgIGFuZCByZXR1cm4gbWlsbGlzZWNvbmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlKHN0cikge1xuICBzdHIgPSBTdHJpbmcoc3RyKTtcbiAgaWYgKHN0ci5sZW5ndGggPiAxMDApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG1hdGNoID0gL14oKD86XFxkKyk/XFwuP1xcZCspICoobWlsbGlzZWNvbmRzP3xtc2Vjcz98bXN8c2Vjb25kcz98c2Vjcz98c3xtaW51dGVzP3xtaW5zP3xtfGhvdXJzP3xocnM/fGh8ZGF5cz98ZHx5ZWFycz98eXJzP3x5KT8kL2kuZXhlYyhcbiAgICBzdHJcbiAgKTtcbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbiA9IHBhcnNlRmxvYXQobWF0Y2hbMV0pO1xuICB2YXIgdHlwZSA9IChtYXRjaFsyXSB8fCAnbXMnKS50b0xvd2VyQ2FzZSgpO1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICd5ZWFycyc6XG4gICAgY2FzZSAneWVhcic6XG4gICAgY2FzZSAneXJzJzpcbiAgICBjYXNlICd5cic6XG4gICAgY2FzZSAneSc6XG4gICAgICByZXR1cm4gbiAqIHk7XG4gICAgY2FzZSAnZGF5cyc6XG4gICAgY2FzZSAnZGF5JzpcbiAgICBjYXNlICdkJzpcbiAgICAgIHJldHVybiBuICogZDtcbiAgICBjYXNlICdob3Vycyc6XG4gICAgY2FzZSAnaG91cic6XG4gICAgY2FzZSAnaHJzJzpcbiAgICBjYXNlICdocic6XG4gICAgY2FzZSAnaCc6XG4gICAgICByZXR1cm4gbiAqIGg7XG4gICAgY2FzZSAnbWludXRlcyc6XG4gICAgY2FzZSAnbWludXRlJzpcbiAgICBjYXNlICdtaW5zJzpcbiAgICBjYXNlICdtaW4nOlxuICAgIGNhc2UgJ20nOlxuICAgICAgcmV0dXJuIG4gKiBtO1xuICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgY2FzZSAnc2Vjcyc6XG4gICAgY2FzZSAnc2VjJzpcbiAgICBjYXNlICdzJzpcbiAgICAgIHJldHVybiBuICogcztcbiAgICBjYXNlICdtaWxsaXNlY29uZHMnOlxuICAgIGNhc2UgJ21pbGxpc2Vjb25kJzpcbiAgICBjYXNlICdtc2Vjcyc6XG4gICAgY2FzZSAnbXNlYyc6XG4gICAgY2FzZSAnbXMnOlxuICAgICAgcmV0dXJuIG47XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBTaG9ydCBmb3JtYXQgZm9yIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmbXRTaG9ydChtcykge1xuICBpZiAobXMgPj0gZCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gZCkgKyAnZCc7XG4gIH1cbiAgaWYgKG1zID49IGgpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGgpICsgJ2gnO1xuICB9XG4gIGlmIChtcyA+PSBtKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBtKSArICdtJztcbiAgfVxuICBpZiAobXMgPj0gcykge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gcykgKyAncyc7XG4gIH1cbiAgcmV0dXJuIG1zICsgJ21zJztcbn1cblxuLyoqXG4gKiBMb25nIGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdExvbmcobXMpIHtcbiAgcmV0dXJuIHBsdXJhbChtcywgZCwgJ2RheScpIHx8XG4gICAgcGx1cmFsKG1zLCBoLCAnaG91cicpIHx8XG4gICAgcGx1cmFsKG1zLCBtLCAnbWludXRlJykgfHxcbiAgICBwbHVyYWwobXMsIHMsICdzZWNvbmQnKSB8fFxuICAgIG1zICsgJyBtcyc7XG59XG5cbi8qKlxuICogUGx1cmFsaXphdGlvbiBoZWxwZXIuXG4gKi9cblxuZnVuY3Rpb24gcGx1cmFsKG1zLCBuLCBuYW1lKSB7XG4gIGlmIChtcyA8IG4pIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKG1zIDwgbiAqIDEuNSkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKG1zIC8gbikgKyAnICcgKyBuYW1lO1xuICB9XG4gIHJldHVybiBNYXRoLmNlaWwobXMgLyBuKSArICcgJyArIG5hbWUgKyAncyc7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBWZXJ0ZXhMaXN0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBWZXJ0ZXhMaXN0KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBWZXJ0ZXhMaXN0KTtcblxuICAgIHRoaXMuaGVhZCA9IG51bGw7XG4gICAgdGhpcy50YWlsID0gbnVsbDtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhWZXJ0ZXhMaXN0LCBbe1xuICAgIGtleTogXCJjbGVhclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgIHRoaXMuaGVhZCA9IHRoaXMudGFpbCA9IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5zZXJ0cyBhIGBub2RlYCBiZWZvcmUgYHRhcmdldGAsIGl0J3MgYXNzdW1lZCB0aGF0XG4gICAgICogYHRhcmdldGAgYmVsb25ncyB0byB0aGlzIGRvdWJseSBsaW5rZWQgbGlzdFxuICAgICAqXG4gICAgICogQHBhcmFtIHsqfSB0YXJnZXRcbiAgICAgKiBAcGFyYW0geyp9IG5vZGVcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImluc2VydEJlZm9yZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbnNlcnRCZWZvcmUodGFyZ2V0LCBub2RlKSB7XG4gICAgICBub2RlLnByZXYgPSB0YXJnZXQucHJldjtcbiAgICAgIG5vZGUubmV4dCA9IHRhcmdldDtcbiAgICAgIGlmICghbm9kZS5wcmV2KSB7XG4gICAgICAgIHRoaXMuaGVhZCA9IG5vZGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlLnByZXYubmV4dCA9IG5vZGU7XG4gICAgICB9XG4gICAgICB0YXJnZXQucHJldiA9IG5vZGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5zZXJ0cyBhIGBub2RlYCBhZnRlciBgdGFyZ2V0YCwgaXQncyBhc3N1bWVkIHRoYXRcbiAgICAgKiBgdGFyZ2V0YCBiZWxvbmdzIHRvIHRoaXMgZG91Ymx5IGxpbmtlZCBsaXN0XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlcnRleH0gdGFyZ2V0XG4gICAgICogQHBhcmFtIHtWZXJ0ZXh9IG5vZGVcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImluc2VydEFmdGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluc2VydEFmdGVyKHRhcmdldCwgbm9kZSkge1xuICAgICAgbm9kZS5wcmV2ID0gdGFyZ2V0O1xuICAgICAgbm9kZS5uZXh0ID0gdGFyZ2V0Lm5leHQ7XG4gICAgICBpZiAoIW5vZGUubmV4dCkge1xuICAgICAgICB0aGlzLnRhaWwgPSBub2RlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZS5uZXh0LnByZXYgPSBub2RlO1xuICAgICAgfVxuICAgICAgdGFyZ2V0Lm5leHQgPSBub2RlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFwcGVuZHMgYSBgbm9kZWAgdG8gdGhlIGVuZCBvZiB0aGlzIGRvdWJseSBsaW5rZWQgbGlzdFxuICAgICAqIE5vdGU6IGBub2RlLm5leHRgIHdpbGwgYmUgdW5saW5rZWQgZnJvbSBgbm9kZWBcbiAgICAgKiBOb3RlOiBpZiBgbm9kZWAgaXMgcGFydCBvZiBhbm90aGVyIGxpbmtlZCBsaXN0IGNhbGwgYGFkZEFsbGAgaW5zdGVhZFxuICAgICAqXG4gICAgICogQHBhcmFtIHsqfSBub2RlXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhZGRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkKG5vZGUpIHtcbiAgICAgIGlmICghdGhpcy5oZWFkKSB7XG4gICAgICAgIHRoaXMuaGVhZCA9IG5vZGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRhaWwubmV4dCA9IG5vZGU7XG4gICAgICB9XG4gICAgICBub2RlLnByZXYgPSB0aGlzLnRhaWw7XG4gICAgICAvLyBzaW5jZSBub2RlIGlzIHRoZSBuZXcgZW5kIGl0IGRvZXNuJ3QgaGF2ZSBhIG5leHQgbm9kZVxuICAgICAgbm9kZS5uZXh0ID0gbnVsbDtcbiAgICAgIHRoaXMudGFpbCA9IG5vZGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXBwZW5kcyBhIGNoYWluIG9mIG5vZGVzIHdoZXJlIGBub2RlYCBpcyB0aGUgaGVhZCxcbiAgICAgKiB0aGUgZGlmZmVyZW5jZSB3aXRoIGBhZGRgIGlzIHRoYXQgaXQgY29ycmVjdGx5IHNldHMgdGhlIHBvc2l0aW9uXG4gICAgICogb2YgdGhlIG5vZGUgbGlzdCBgdGFpbGAgcHJvcGVydHlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Kn0gbm9kZVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkQWxsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEFsbChub2RlKSB7XG4gICAgICBpZiAoIXRoaXMuaGVhZCkge1xuICAgICAgICB0aGlzLmhlYWQgPSBub2RlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50YWlsLm5leHQgPSBub2RlO1xuICAgICAgfVxuICAgICAgbm9kZS5wcmV2ID0gdGhpcy50YWlsO1xuXG4gICAgICAvLyBmaW5kIHRoZSBlbmQgb2YgdGhlIGxpc3RcbiAgICAgIHdoaWxlIChub2RlLm5leHQpIHtcbiAgICAgICAgbm9kZSA9IG5vZGUubmV4dDtcbiAgICAgIH1cbiAgICAgIHRoaXMudGFpbCA9IG5vZGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlcyBhIGBub2RlYCBmcm9tIHRoaXMgbGlua2VkIGxpc3QsIGl0J3MgYXNzdW1lZCB0aGF0IGBub2RlYCBpcyBhXG4gICAgICogbWVtYmVyIG9mIHRoaXMgbGlua2VkIGxpc3RcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Kn0gbm9kZVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZShub2RlKSB7XG4gICAgICBpZiAoIW5vZGUucHJldikge1xuICAgICAgICB0aGlzLmhlYWQgPSBub2RlLm5leHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlLnByZXYubmV4dCA9IG5vZGUubmV4dDtcbiAgICAgIH1cblxuICAgICAgaWYgKCFub2RlLm5leHQpIHtcbiAgICAgICAgdGhpcy50YWlsID0gbm9kZS5wcmV2O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZS5uZXh0LnByZXYgPSBub2RlLnByZXY7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIGNoYWluIG9mIG5vZGVzIHdob3NlIGhlYWQgaXMgYGFgIGFuZCB3aG9zZSB0YWlsIGlzIGBiYCxcbiAgICAgKiBpdCdzIGFzc3VtZWQgdGhhdCBgYWAgYW5kIGBiYCBiZWxvbmcgdG8gdGhpcyBsaXN0IGFuZCBhbHNvIHRoYXQgYGFgXG4gICAgICogY29tZXMgYmVmb3JlIGBiYCBpbiB0aGUgbGlua2VkIGxpc3RcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Kn0gYVxuICAgICAqIEBwYXJhbSB7Kn0gYlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlQ2hhaW5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlQ2hhaW4oYSwgYikge1xuICAgICAgaWYgKCFhLnByZXYpIHtcbiAgICAgICAgdGhpcy5oZWFkID0gYi5uZXh0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYS5wcmV2Lm5leHQgPSBiLm5leHQ7XG4gICAgICB9XG5cbiAgICAgIGlmICghYi5uZXh0KSB7XG4gICAgICAgIHRoaXMudGFpbCA9IGEucHJldjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGIubmV4dC5wcmV2ID0gYS5wcmV2O1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmaXJzdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmaXJzdCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmhlYWQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzRW1wdHlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNFbXB0eSgpIHtcbiAgICAgIHJldHVybiAhdGhpcy5oZWFkO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBWZXJ0ZXhMaXN0O1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBWZXJ0ZXhMaXN0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9xdWlja2h1bGwzZC9kaXN0L1ZlcnRleExpc3QuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgVmVydGV4ID0gZnVuY3Rpb24gVmVydGV4KHBvaW50LCBpbmRleCkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVmVydGV4KTtcblxuICB0aGlzLnBvaW50ID0gcG9pbnQ7XG4gIC8vIGluZGV4IGluIHRoZSBpbnB1dCBhcnJheVxuICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gIC8vIHZlcnRleCBpcyBhIGRvdWJsZSBsaW5rZWQgbGlzdCBub2RlXG4gIHRoaXMubmV4dCA9IG51bGw7XG4gIHRoaXMucHJldiA9IG51bGw7XG4gIC8vIHRoZSBmYWNlIHRoYXQgaXMgYWJsZSB0byBzZWUgdGhpcyBwb2ludFxuICB0aGlzLmZhY2UgPSBudWxsO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVmVydGV4O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9xdWlja2h1bGwzZC9kaXN0L1ZlcnRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5ERUxFVEVEID0gZXhwb3J0cy5OT05fQ09OVkVYID0gZXhwb3J0cy5WSVNJQkxFID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2RlYnVnRm4gPSByZXF1aXJlKCdkZWJ1Zy1mbicpO1xuXG52YXIgX2RlYnVnRm4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVidWdGbik7XG5cbnZhciBfZG90ID0gcmVxdWlyZSgnZ2wtdmVjMy9kb3QnKTtcblxudmFyIF9kb3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZG90KTtcblxudmFyIF9hZGQgPSByZXF1aXJlKCdnbC12ZWMzL2FkZCcpO1xuXG52YXIgX2FkZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGQpO1xuXG52YXIgX3N1YnRyYWN0ID0gcmVxdWlyZSgnZ2wtdmVjMy9zdWJ0cmFjdCcpO1xuXG52YXIgX3N1YnRyYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N1YnRyYWN0KTtcblxudmFyIF9jcm9zcyA9IHJlcXVpcmUoJ2dsLXZlYzMvY3Jvc3MnKTtcblxudmFyIF9jcm9zczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcm9zcyk7XG5cbnZhciBfY29weSA9IHJlcXVpcmUoJ2dsLXZlYzMvY29weScpO1xuXG52YXIgX2NvcHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29weSk7XG5cbnZhciBfbGVuZ3RoID0gcmVxdWlyZSgnZ2wtdmVjMy9sZW5ndGgnKTtcblxudmFyIF9sZW5ndGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGVuZ3RoKTtcblxudmFyIF9zY2FsZSA9IHJlcXVpcmUoJ2dsLXZlYzMvc2NhbGUnKTtcblxudmFyIF9zY2FsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zY2FsZSk7XG5cbnZhciBfc2NhbGVBbmRBZGQgPSByZXF1aXJlKCdnbC12ZWMzL3NjYWxlQW5kQWRkJyk7XG5cbnZhciBfc2NhbGVBbmRBZGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2NhbGVBbmRBZGQpO1xuXG52YXIgX25vcm1hbGl6ZSA9IHJlcXVpcmUoJ2dsLXZlYzMvbm9ybWFsaXplJyk7XG5cbnZhciBfbm9ybWFsaXplMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX25vcm1hbGl6ZSk7XG5cbnZhciBfSGFsZkVkZ2UgPSByZXF1aXJlKCcuL0hhbGZFZGdlJyk7XG5cbnZhciBfSGFsZkVkZ2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSGFsZkVkZ2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgZGVidWcgPSAoMCwgX2RlYnVnRm4yLmRlZmF1bHQpKCdmYWNlJyk7XG5cbnZhciBWSVNJQkxFID0gZXhwb3J0cy5WSVNJQkxFID0gMDtcbnZhciBOT05fQ09OVkVYID0gZXhwb3J0cy5OT05fQ09OVkVYID0gMTtcbnZhciBERUxFVEVEID0gZXhwb3J0cy5ERUxFVEVEID0gMjtcblxudmFyIEZhY2UgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEZhY2UoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZhY2UpO1xuXG4gICAgdGhpcy5ub3JtYWwgPSBbXTtcbiAgICB0aGlzLmNlbnRyb2lkID0gW107XG4gICAgLy8gc2lnbmVkIGRpc3RhbmNlIGZyb20gZmFjZSB0byB0aGUgb3JpZ2luXG4gICAgdGhpcy5vZmZzZXQgPSAwO1xuICAgIC8vIHBvaW50ZXIgdG8gdGhlIGEgdmVydGV4IGluIGEgZG91YmxlIGxpbmtlZCBsaXN0IHRoaXMgZmFjZSBjYW4gc2VlXG4gICAgdGhpcy5vdXRzaWRlID0gbnVsbDtcbiAgICB0aGlzLm1hcmsgPSBWSVNJQkxFO1xuICAgIHRoaXMuZWRnZSA9IG51bGw7XG4gICAgdGhpcy5uVmVydGljZXMgPSAwO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEZhY2UsIFt7XG4gICAga2V5OiAnZ2V0RWRnZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEVkZ2UoaSkge1xuICAgICAgaWYgKHR5cGVvZiBpICE9PSAnbnVtYmVyJykge1xuICAgICAgICB0aHJvdyBFcnJvcigncmVxdWlyZXMgYSBudW1iZXInKTtcbiAgICAgIH1cbiAgICAgIHZhciBpdCA9IHRoaXMuZWRnZTtcbiAgICAgIHdoaWxlIChpID4gMCkge1xuICAgICAgICBpdCA9IGl0Lm5leHQ7XG4gICAgICAgIGkgLT0gMTtcbiAgICAgIH1cbiAgICAgIHdoaWxlIChpIDwgMCkge1xuICAgICAgICBpdCA9IGl0LnByZXY7XG4gICAgICAgIGkgKz0gMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpdDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wdXRlTm9ybWFsJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcHV0ZU5vcm1hbCgpIHtcbiAgICAgIHZhciBlMCA9IHRoaXMuZWRnZTtcbiAgICAgIHZhciBlMSA9IGUwLm5leHQ7XG4gICAgICB2YXIgZTIgPSBlMS5uZXh0O1xuICAgICAgdmFyIHYyID0gKDAsIF9zdWJ0cmFjdDIuZGVmYXVsdCkoW10sIGUxLmhlYWQoKS5wb2ludCwgZTAuaGVhZCgpLnBvaW50KTtcbiAgICAgIHZhciB0ID0gW107XG4gICAgICB2YXIgdjEgPSBbXTtcblxuICAgICAgdGhpcy5uVmVydGljZXMgPSAyO1xuICAgICAgdGhpcy5ub3JtYWwgPSBbMCwgMCwgMF07XG4gICAgICB3aGlsZSAoZTIgIT09IGUwKSB7XG4gICAgICAgICgwLCBfY29weTIuZGVmYXVsdCkodjEsIHYyKTtcbiAgICAgICAgKDAsIF9zdWJ0cmFjdDIuZGVmYXVsdCkodjIsIGUyLmhlYWQoKS5wb2ludCwgZTAuaGVhZCgpLnBvaW50KTtcbiAgICAgICAgKDAsIF9hZGQyLmRlZmF1bHQpKHRoaXMubm9ybWFsLCB0aGlzLm5vcm1hbCwgKDAsIF9jcm9zczIuZGVmYXVsdCkodCwgdjEsIHYyKSk7XG4gICAgICAgIGUyID0gZTIubmV4dDtcbiAgICAgICAgdGhpcy5uVmVydGljZXMgKz0gMTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYXJlYSA9ICgwLCBfbGVuZ3RoMi5kZWZhdWx0KSh0aGlzLm5vcm1hbCk7XG4gICAgICAvLyBub3JtYWxpemUgdGhlIHZlY3Rvciwgc2luY2Ugd2UndmUgYWxyZWFkeSBjYWxjdWxhdGVkIHRoZSBhcmVhXG4gICAgICAvLyBpdCdzIGNoZWFwZXIgdG8gc2NhbGUgdGhlIHZlY3RvciB1c2luZyB0aGlzIHF1YW50aXR5IGluc3RlYWQgb2ZcbiAgICAgIC8vIGRvaW5nIHRoZSBzYW1lIG9wZXJhdGlvbiBhZ2FpblxuICAgICAgdGhpcy5ub3JtYWwgPSAoMCwgX3NjYWxlMi5kZWZhdWx0KSh0aGlzLm5vcm1hbCwgdGhpcy5ub3JtYWwsIDEgLyB0aGlzLmFyZWEpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXB1dGVOb3JtYWxNaW5BcmVhJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcHV0ZU5vcm1hbE1pbkFyZWEobWluQXJlYSkge1xuICAgICAgdGhpcy5jb21wdXRlTm9ybWFsKCk7XG4gICAgICBpZiAodGhpcy5hcmVhIDwgbWluQXJlYSkge1xuICAgICAgICAvLyBjb21wdXRlIHRoZSBub3JtYWwgd2l0aG91dCB0aGUgbG9uZ2VzdCBlZGdlXG4gICAgICAgIHZhciBtYXhFZGdlID0gdm9pZCAwO1xuICAgICAgICB2YXIgbWF4U3F1YXJlZExlbmd0aCA9IDA7XG4gICAgICAgIHZhciBlZGdlID0gdGhpcy5lZGdlO1xuXG4gICAgICAgIC8vIGZpbmQgdGhlIGxvbmdlc3QgZWRnZSAoaW4gbGVuZ3RoKSBpbiB0aGUgY2hhaW4gb2YgZWRnZXNcbiAgICAgICAgZG8ge1xuICAgICAgICAgIHZhciBsZW5ndGhTcXVhcmVkID0gZWRnZS5sZW5ndGhTcXVhcmVkKCk7XG4gICAgICAgICAgaWYgKGxlbmd0aFNxdWFyZWQgPiBtYXhTcXVhcmVkTGVuZ3RoKSB7XG4gICAgICAgICAgICBtYXhFZGdlID0gZWRnZTtcbiAgICAgICAgICAgIG1heFNxdWFyZWRMZW5ndGggPSBsZW5ndGhTcXVhcmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlZGdlID0gZWRnZS5uZXh0O1xuICAgICAgICB9IHdoaWxlIChlZGdlICE9PSB0aGlzLmVkZ2UpO1xuXG4gICAgICAgIHZhciBwMSA9IG1heEVkZ2UudGFpbCgpLnBvaW50O1xuICAgICAgICB2YXIgcDIgPSBtYXhFZGdlLmhlYWQoKS5wb2ludDtcbiAgICAgICAgdmFyIG1heFZlY3RvciA9ICgwLCBfc3VidHJhY3QyLmRlZmF1bHQpKFtdLCBwMiwgcDEpO1xuICAgICAgICB2YXIgbWF4TGVuZ3RoID0gTWF0aC5zcXJ0KG1heFNxdWFyZWRMZW5ndGgpO1xuICAgICAgICAvLyBtYXhWZWN0b3IgaXMgbm9ybWFsaXplZCBhZnRlciB0aGlzIG9wZXJhdGlvblxuICAgICAgICAoMCwgX3NjYWxlMi5kZWZhdWx0KShtYXhWZWN0b3IsIG1heFZlY3RvciwgMSAvIG1heExlbmd0aCk7XG4gICAgICAgIC8vIGNvbXB1dGUgdGhlIHByb2plY3Rpb24gb2YgbWF4VmVjdG9yIG92ZXIgdGhpcyBmYWNlIG5vcm1hbFxuICAgICAgICB2YXIgbWF4UHJvamVjdGlvbiA9ICgwLCBfZG90Mi5kZWZhdWx0KSh0aGlzLm5vcm1hbCwgbWF4VmVjdG9yKTtcbiAgICAgICAgLy8gc3VidHJhY3QgdGhlIHF1YW50aXR5IG1heEVkZ2UgYWRkcyBvbiB0aGUgbm9ybWFsXG4gICAgICAgICgwLCBfc2NhbGVBbmRBZGQyLmRlZmF1bHQpKHRoaXMubm9ybWFsLCB0aGlzLm5vcm1hbCwgbWF4VmVjdG9yLCAtbWF4UHJvamVjdGlvbik7XG4gICAgICAgIC8vIHJlbm9ybWFsaXplIGB0aGlzLm5vcm1hbGBcbiAgICAgICAgKDAsIF9ub3JtYWxpemUyLmRlZmF1bHQpKHRoaXMubm9ybWFsLCB0aGlzLm5vcm1hbCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcHV0ZUNlbnRyb2lkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcHV0ZUNlbnRyb2lkKCkge1xuICAgICAgdGhpcy5jZW50cm9pZCA9IFswLCAwLCAwXTtcbiAgICAgIHZhciBlZGdlID0gdGhpcy5lZGdlO1xuICAgICAgZG8ge1xuICAgICAgICAoMCwgX2FkZDIuZGVmYXVsdCkodGhpcy5jZW50cm9pZCwgdGhpcy5jZW50cm9pZCwgZWRnZS5oZWFkKCkucG9pbnQpO1xuICAgICAgICBlZGdlID0gZWRnZS5uZXh0O1xuICAgICAgfSB3aGlsZSAoZWRnZSAhPT0gdGhpcy5lZGdlKTtcbiAgICAgICgwLCBfc2NhbGUyLmRlZmF1bHQpKHRoaXMuY2VudHJvaWQsIHRoaXMuY2VudHJvaWQsIDEgLyB0aGlzLm5WZXJ0aWNlcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcHV0ZU5vcm1hbEFuZENlbnRyb2lkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcHV0ZU5vcm1hbEFuZENlbnRyb2lkKG1pbkFyZWEpIHtcbiAgICAgIGlmICh0eXBlb2YgbWluQXJlYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5jb21wdXRlTm9ybWFsTWluQXJlYShtaW5BcmVhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29tcHV0ZU5vcm1hbCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5jb21wdXRlQ2VudHJvaWQoKTtcbiAgICAgIHRoaXMub2Zmc2V0ID0gKDAsIF9kb3QyLmRlZmF1bHQpKHRoaXMubm9ybWFsLCB0aGlzLmNlbnRyb2lkKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdkaXN0YW5jZVRvUGxhbmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkaXN0YW5jZVRvUGxhbmUocG9pbnQpIHtcbiAgICAgIHJldHVybiAoMCwgX2RvdDIuZGVmYXVsdCkodGhpcy5ub3JtYWwsIHBvaW50KSAtIHRoaXMub2Zmc2V0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICpcbiAgICAgKiBDb25uZWN0cyB0d28gZWRnZXMgYXNzdW1pbmcgdGhhdCBwcmV2LmhlYWQoKS5wb2ludCA9PT0gbmV4dC50YWlsKCkucG9pbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SGFsZkVkZ2V9IHByZXZcbiAgICAgKiBAcGFyYW0ge0hhbGZFZGdlfSBuZXh0XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2Nvbm5lY3RIYWxmRWRnZXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb25uZWN0SGFsZkVkZ2VzKHByZXYsIG5leHQpIHtcbiAgICAgIHZhciBkaXNjYXJkZWRGYWNlID0gdm9pZCAwO1xuICAgICAgaWYgKHByZXYub3Bwb3NpdGUuZmFjZSA9PT0gbmV4dC5vcHBvc2l0ZS5mYWNlKSB7XG4gICAgICAgIC8vIGBwcmV2YCBpcyByZW1vdmUgYSByZWR1bmRhbnQgZWRnZVxuICAgICAgICB2YXIgb3Bwb3NpdGVGYWNlID0gbmV4dC5vcHBvc2l0ZS5mYWNlO1xuICAgICAgICB2YXIgb3Bwb3NpdGVFZGdlID0gdm9pZCAwO1xuICAgICAgICBpZiAocHJldiA9PT0gdGhpcy5lZGdlKSB7XG4gICAgICAgICAgdGhpcy5lZGdlID0gbmV4dDtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3Bwb3NpdGVGYWNlLm5WZXJ0aWNlcyA9PT0gMykge1xuICAgICAgICAgIC8vIGNhc2U6XG4gICAgICAgICAgLy8gcmVtb3ZlIHRoZSBmYWNlIG9uIHRoZSByaWdodFxuICAgICAgICAgIC8vXG4gICAgICAgICAgLy8gICAgICAgL3xcXFxuICAgICAgICAgIC8vICAgICAgLyB8IFxcIHRoZSBmYWNlIG9uIHRoZSByaWdodFxuICAgICAgICAgIC8vICAgICAvICB8ICBcXCAtLT4gb3Bwb3NpdGUgZWRnZVxuICAgICAgICAgIC8vICAgIC8gYSB8ICAgXFxcbiAgICAgICAgICAvLyAgICotLS0tKi0tLS0qXG4gICAgICAgICAgLy8gIC8gICAgIGIgIHwgIFxcXG4gICAgICAgICAgLy8gICAgICAgICAgIOKWvlxuICAgICAgICAgIC8vICAgICAgcmVkdW5kYW50IGVkZ2VcbiAgICAgICAgICAvL1xuICAgICAgICAgIC8vIE5vdGU6IHRoZSBvcHBvc2l0ZSBlZGdlIGlzIGFjdHVhbGx5IGluIHRoZSBmYWNlIHRvIHRoZSByaWdodFxuICAgICAgICAgIC8vIG9mIHRoZSBmYWNlIHRvIGJlIGRlc3Ryb3llZFxuICAgICAgICAgIG9wcG9zaXRlRWRnZSA9IG5leHQub3Bwb3NpdGUucHJldi5vcHBvc2l0ZTtcbiAgICAgICAgICBvcHBvc2l0ZUZhY2UubWFyayA9IERFTEVURUQ7XG4gICAgICAgICAgZGlzY2FyZGVkRmFjZSA9IG9wcG9zaXRlRmFjZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBjYXNlOlxuICAgICAgICAgIC8vICAgICAgICAgIHRcbiAgICAgICAgICAvLyAgICAgICAgKi0tLS1cbiAgICAgICAgICAvLyAgICAgICAvfCA8LSByaWdodCBmYWNlJ3MgcmVkdW5kYW50IGVkZ2VcbiAgICAgICAgICAvLyAgICAgIC8gfCBvcHBvc2l0ZSBlZGdlXG4gICAgICAgICAgLy8gICAgIC8gIHwgIOKWtCAgIC9cbiAgICAgICAgICAvLyAgICAvIGEgfCAgfCAgL1xuICAgICAgICAgIC8vICAgKi0tLS0qLS0tLSpcbiAgICAgICAgICAvLyAgLyAgICAgYiAgfCAgXFxcbiAgICAgICAgICAvLyAgICAgICAgICAg4pa+XG4gICAgICAgICAgLy8gICAgICByZWR1bmRhbnQgZWRnZVxuICAgICAgICAgIG9wcG9zaXRlRWRnZSA9IG5leHQub3Bwb3NpdGUubmV4dDtcbiAgICAgICAgICAvLyBtYWtlIHN1cmUgdGhhdCB0aGUgbGluayBgb3Bwb3NpdGVGYWNlLmVkZ2VgIHBvaW50cyBjb3JyZWN0bHkgZXZlblxuICAgICAgICAgIC8vIGFmdGVyIHRoZSByaWdodCBmYWNlIHJlZHVuZGFudCBlZGdlIGlzIHJlbW92ZWRcbiAgICAgICAgICBpZiAob3Bwb3NpdGVGYWNlLmVkZ2UgPT09IG9wcG9zaXRlRWRnZS5wcmV2KSB7XG4gICAgICAgICAgICBvcHBvc2l0ZUZhY2UuZWRnZSA9IG9wcG9zaXRlRWRnZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyAgICAgICAvfCAgIC9cbiAgICAgICAgICAvLyAgICAgIC8gfCB0L29wcG9zaXRlIGVkZ2VcbiAgICAgICAgICAvLyAgICAgLyAgfCAvIOKWtCAgL1xuICAgICAgICAgIC8vICAgIC8gYSB8LyAgfCAvXG4gICAgICAgICAgLy8gICAqLS0tLSotLS0tKlxuICAgICAgICAgIC8vICAvICAgICBiICAgICBcXFxuICAgICAgICAgIG9wcG9zaXRlRWRnZS5wcmV2ID0gb3Bwb3NpdGVFZGdlLnByZXYucHJldjtcbiAgICAgICAgICBvcHBvc2l0ZUVkZ2UucHJldi5uZXh0ID0gb3Bwb3NpdGVFZGdlO1xuICAgICAgICB9XG4gICAgICAgIC8vICAgICAgIC98XG4gICAgICAgIC8vICAgICAgLyB8XG4gICAgICAgIC8vICAgICAvICB8XG4gICAgICAgIC8vICAgIC8gYSB8XG4gICAgICAgIC8vICAgKi0tLS0qLS0tLSpcbiAgICAgICAgLy8gIC8gICAgIGIgIOKWtCAgXFxcbiAgICAgICAgLy8gICAgICAgICAgIHxcbiAgICAgICAgLy8gICAgIHJlZHVuZGFudCBlZGdlXG4gICAgICAgIG5leHQucHJldiA9IHByZXYucHJldjtcbiAgICAgICAgbmV4dC5wcmV2Lm5leHQgPSBuZXh0O1xuXG4gICAgICAgIC8vICAgICAgIC8gXFwgIFxcXG4gICAgICAgIC8vICAgICAgLyAgIFxcLT5cXFxuICAgICAgICAvLyAgICAgLyAgICAgXFw8LVxcIG9wcG9zaXRlIGVkZ2VcbiAgICAgICAgLy8gICAgLyBhICAgICBcXCAgXFxcbiAgICAgICAgLy8gICAqLS0tLSotLS0tKlxuICAgICAgICAvLyAgLyAgICAgYiAgXiAgXFxcbiAgICAgICAgbmV4dC5zZXRPcHBvc2l0ZShvcHBvc2l0ZUVkZ2UpO1xuXG4gICAgICAgIG9wcG9zaXRlRmFjZS5jb21wdXRlTm9ybWFsQW5kQ2VudHJvaWQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHRyaXZpYWwgY2FzZVxuICAgICAgICAvLyAgICAgICAgKlxuICAgICAgICAvLyAgICAgICAvfFxcXG4gICAgICAgIC8vICAgICAgLyB8IFxcXG4gICAgICAgIC8vICAgICAvICB8LS0+IG5leHRcbiAgICAgICAgLy8gICAgLyBhIHwgICBcXFxuICAgICAgICAvLyAgICotLS0tKi0tLS0qXG4gICAgICAgIC8vICAgIFxcIGIgfCAgIC9cbiAgICAgICAgLy8gICAgIFxcICB8LS0+IHByZXZcbiAgICAgICAgLy8gICAgICBcXCB8IC9cbiAgICAgICAgLy8gICAgICAgXFx8L1xuICAgICAgICAvLyAgICAgICAgKlxuICAgICAgICBwcmV2Lm5leHQgPSBuZXh0O1xuICAgICAgICBuZXh0LnByZXYgPSBwcmV2O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRpc2NhcmRlZEZhY2U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnbWVyZ2VBZGphY2VudEZhY2VzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbWVyZ2VBZGphY2VudEZhY2VzKGFkamFjZW50RWRnZSwgZGlzY2FyZGVkRmFjZXMpIHtcbiAgICAgIHZhciBvcHBvc2l0ZUVkZ2UgPSBhZGphY2VudEVkZ2Uub3Bwb3NpdGU7XG4gICAgICB2YXIgb3Bwb3NpdGVGYWNlID0gb3Bwb3NpdGVFZGdlLmZhY2U7XG5cbiAgICAgIGRpc2NhcmRlZEZhY2VzLnB1c2gob3Bwb3NpdGVGYWNlKTtcbiAgICAgIG9wcG9zaXRlRmFjZS5tYXJrID0gREVMRVRFRDtcblxuICAgICAgLy8gZmluZCB0aGUgY2hhaW4gb2YgZWRnZXMgd2hvc2Ugb3Bwb3NpdGUgZmFjZSBpcyBgb3Bwb3NpdGVGYWNlYFxuICAgICAgLy9cbiAgICAgIC8vICAgICAgICAgICAgICAgID09PT5cbiAgICAgIC8vICAgICAgXFwgICAgICAgICBmYWNlICAgICAgICAgL1xuICAgICAgLy8gICAgICAgKiAtLS0tICogLS0tLSAqIC0tLS0gKlxuICAgICAgLy8gICAgICAvICAgICBvcHBvc2l0ZSBmYWNlICAgIFxcXG4gICAgICAvLyAgICAgICAgICAgICAgICA8PT09XG4gICAgICAvL1xuICAgICAgdmFyIGFkamFjZW50RWRnZVByZXYgPSBhZGphY2VudEVkZ2UucHJldjtcbiAgICAgIHZhciBhZGphY2VudEVkZ2VOZXh0ID0gYWRqYWNlbnRFZGdlLm5leHQ7XG4gICAgICB2YXIgb3Bwb3NpdGVFZGdlUHJldiA9IG9wcG9zaXRlRWRnZS5wcmV2O1xuICAgICAgdmFyIG9wcG9zaXRlRWRnZU5leHQgPSBvcHBvc2l0ZUVkZ2UubmV4dDtcblxuICAgICAgLy8gbGVmdCBlZGdlXG4gICAgICB3aGlsZSAoYWRqYWNlbnRFZGdlUHJldi5vcHBvc2l0ZS5mYWNlID09PSBvcHBvc2l0ZUZhY2UpIHtcbiAgICAgICAgYWRqYWNlbnRFZGdlUHJldiA9IGFkamFjZW50RWRnZVByZXYucHJldjtcbiAgICAgICAgb3Bwb3NpdGVFZGdlTmV4dCA9IG9wcG9zaXRlRWRnZU5leHQubmV4dDtcbiAgICAgIH1cbiAgICAgIC8vIHJpZ2h0IGVkZ2VcbiAgICAgIHdoaWxlIChhZGphY2VudEVkZ2VOZXh0Lm9wcG9zaXRlLmZhY2UgPT09IG9wcG9zaXRlRmFjZSkge1xuICAgICAgICBhZGphY2VudEVkZ2VOZXh0ID0gYWRqYWNlbnRFZGdlTmV4dC5uZXh0O1xuICAgICAgICBvcHBvc2l0ZUVkZ2VQcmV2ID0gb3Bwb3NpdGVFZGdlUHJldi5wcmV2O1xuICAgICAgfVxuICAgICAgLy8gYWRqYWNlbnRFZGdlUHJldiAgXFwgICAgICAgICBmYWNlICAgICAgICAgLyBhZGphY2VudEVkZ2VOZXh0XG4gICAgICAvLyAgICAgICAgICAgICAgICAgICAgKiAtLS0tICogLS0tLSAqIC0tLS0gKlxuICAgICAgLy8gb3Bwb3NpdGVFZGdlTmV4dCAgLyAgICAgb3Bwb3NpdGUgZmFjZSAgICBcXCBvcHBvc2l0ZUVkZ2VQcmV2XG5cbiAgICAgIC8vIGZpeCB0aGUgZmFjZSByZWZlcmVuY2Ugb2YgYWxsIHRoZSBvcHBvc2l0ZSBlZGdlcyB0aGF0IGFyZSBub3QgcGFydCBvZlxuICAgICAgLy8gdGhlIGVkZ2VzIHdob3NlIG9wcG9zaXRlIGZhY2UgaXMgbm90IGBmYWNlYCBpLmUuIGFsbCB0aGUgZWRnZXMgdGhhdFxuICAgICAgLy8gYGZhY2VgIGFuZCBgb3Bwb3NpdGVGYWNlYCBkbyBub3QgaGF2ZSBpbiBjb21tb25cbiAgICAgIHZhciBlZGdlID0gdm9pZCAwO1xuICAgICAgZm9yIChlZGdlID0gb3Bwb3NpdGVFZGdlTmV4dDsgZWRnZSAhPT0gb3Bwb3NpdGVFZGdlUHJldi5uZXh0OyBlZGdlID0gZWRnZS5uZXh0KSB7XG4gICAgICAgIGVkZ2UuZmFjZSA9IHRoaXM7XG4gICAgICB9XG5cbiAgICAgIC8vIG1ha2Ugc3VyZSB0aGF0IGBmYWNlLmVkZ2VgIGlzIG5vdCBvbmUgb2YgdGhlIGVkZ2VzIHRvIGJlIGRlc3Ryb3llZFxuICAgICAgLy8gTm90ZTogaXQncyBpbXBvcnRhbnQgZm9yIGl0IHRvIGJlIGEgYG5leHRgIGVkZ2Ugc2luY2UgYHByZXZgIGVkZ2VzXG4gICAgICAvLyBtaWdodCBiZSBkZXN0cm95ZWQgb24gYGNvbm5lY3RIYWxmRWRnZXNgXG4gICAgICB0aGlzLmVkZ2UgPSBhZGphY2VudEVkZ2VOZXh0O1xuXG4gICAgICAvLyBjb25uZWN0IHRoZSBleHRyZW1lc1xuICAgICAgLy8gTm90ZTogaXQgbWlnaHQgYmUgcG9zc2libGUgdGhhdCBhZnRlciBjb25uZWN0aW5nIHRoZSBlZGdlcyBhIHRyaWFuZ3VsYXJcbiAgICAgIC8vIGZhY2UgbWlnaHQgYmUgcmVkdW5kYW50XG4gICAgICB2YXIgZGlzY2FyZGVkRmFjZSA9IHZvaWQgMDtcbiAgICAgIGRpc2NhcmRlZEZhY2UgPSB0aGlzLmNvbm5lY3RIYWxmRWRnZXMob3Bwb3NpdGVFZGdlUHJldiwgYWRqYWNlbnRFZGdlTmV4dCk7XG4gICAgICBpZiAoZGlzY2FyZGVkRmFjZSkge1xuICAgICAgICBkaXNjYXJkZWRGYWNlcy5wdXNoKGRpc2NhcmRlZEZhY2UpO1xuICAgICAgfVxuICAgICAgZGlzY2FyZGVkRmFjZSA9IHRoaXMuY29ubmVjdEhhbGZFZGdlcyhhZGphY2VudEVkZ2VQcmV2LCBvcHBvc2l0ZUVkZ2VOZXh0KTtcbiAgICAgIGlmIChkaXNjYXJkZWRGYWNlKSB7XG4gICAgICAgIGRpc2NhcmRlZEZhY2VzLnB1c2goZGlzY2FyZGVkRmFjZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY29tcHV0ZU5vcm1hbEFuZENlbnRyb2lkKCk7XG4gICAgICAvLyBUT0RPOiBhZGRpdGlvbmFsIGNvbnNpc3RlbmN5IGNoZWNrc1xuICAgICAgcmV0dXJuIGRpc2NhcmRlZEZhY2VzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbGxlY3RJbmRpY2VzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29sbGVjdEluZGljZXMoKSB7XG4gICAgICB2YXIgaW5kaWNlcyA9IFtdO1xuICAgICAgdmFyIGVkZ2UgPSB0aGlzLmVkZ2U7XG4gICAgICBkbyB7XG4gICAgICAgIGluZGljZXMucHVzaChlZGdlLmhlYWQoKS5pbmRleCk7XG4gICAgICAgIGVkZ2UgPSBlZGdlLm5leHQ7XG4gICAgICB9IHdoaWxlIChlZGdlICE9PSB0aGlzLmVkZ2UpO1xuICAgICAgcmV0dXJuIGluZGljZXM7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6ICdjcmVhdGVUcmlhbmdsZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZVRyaWFuZ2xlKHYwLCB2MSwgdjIpIHtcbiAgICAgIHZhciBtaW5BcmVhID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiAwO1xuXG4gICAgICB2YXIgZmFjZSA9IG5ldyBGYWNlKCk7XG4gICAgICB2YXIgZTAgPSBuZXcgX0hhbGZFZGdlMi5kZWZhdWx0KHYwLCBmYWNlKTtcbiAgICAgIHZhciBlMSA9IG5ldyBfSGFsZkVkZ2UyLmRlZmF1bHQodjEsIGZhY2UpO1xuICAgICAgdmFyIGUyID0gbmV3IF9IYWxmRWRnZTIuZGVmYXVsdCh2MiwgZmFjZSk7XG5cbiAgICAgIC8vIGpvaW4gZWRnZXNcbiAgICAgIGUwLm5leHQgPSBlMi5wcmV2ID0gZTE7XG4gICAgICBlMS5uZXh0ID0gZTAucHJldiA9IGUyO1xuICAgICAgZTIubmV4dCA9IGUxLnByZXYgPSBlMDtcblxuICAgICAgLy8gbWFpbiBoYWxmIGVkZ2UgcmVmZXJlbmNlXG4gICAgICBmYWNlLmVkZ2UgPSBlMDtcbiAgICAgIGZhY2UuY29tcHV0ZU5vcm1hbEFuZENlbnRyb2lkKG1pbkFyZWEpO1xuICAgICAgZGVidWcoZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmxvZygnZmFjZSBjcmVhdGVkICVqJywgZmFjZS5jb2xsZWN0SW5kaWNlcygpKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZhY2U7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEZhY2U7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEZhY2U7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcXVpY2todWxsM2QvZGlzdC9GYWNlLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGFkZDtcblxuLyoqXG4gKiBBZGRzIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIGFkZChvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBhWzBdICsgYlswXVxuICAgIG91dFsxXSA9IGFbMV0gKyBiWzFdXG4gICAgb3V0WzJdID0gYVsyXSArIGJbMl1cbiAgICByZXR1cm4gb3V0XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2wtdmVjMy9hZGQuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gY29weTtcblxuLyoqXG4gKiBDb3B5IHRoZSB2YWx1ZXMgZnJvbSBvbmUgdmVjMyB0byBhbm90aGVyXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgc291cmNlIHZlY3RvclxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiBjb3B5KG91dCwgYSkge1xuICAgIG91dFswXSA9IGFbMF1cbiAgICBvdXRbMV0gPSBhWzFdXG4gICAgb3V0WzJdID0gYVsyXVxuICAgIHJldHVybiBvdXRcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nbC12ZWMzL2NvcHkuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gbGVuZ3RoO1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGxlbmd0aCBvZiBhIHZlYzNcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdmVjdG9yIHRvIGNhbGN1bGF0ZSBsZW5ndGggb2ZcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGxlbmd0aCBvZiBhXG4gKi9cbmZ1bmN0aW9uIGxlbmd0aChhKSB7XG4gICAgdmFyIHggPSBhWzBdLFxuICAgICAgICB5ID0gYVsxXSxcbiAgICAgICAgeiA9IGFbMl1cbiAgICByZXR1cm4gTWF0aC5zcXJ0KHgqeCArIHkqeSArIHoqeilcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nbC12ZWMzL2xlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBzY2FsZTtcblxuLyoqXG4gKiBTY2FsZXMgYSB2ZWMzIGJ5IGEgc2NhbGFyIG51bWJlclxuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIHZlY3RvciB0byBzY2FsZVxuICogQHBhcmFtIHtOdW1iZXJ9IGIgYW1vdW50IHRvIHNjYWxlIHRoZSB2ZWN0b3IgYnlcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gc2NhbGUob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gYVswXSAqIGJcbiAgICBvdXRbMV0gPSBhWzFdICogYlxuICAgIG91dFsyXSA9IGFbMl0gKiBiXG4gICAgcmV0dXJuIG91dFxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dsLXZlYzMvc2NhbGUuanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gc2NhbGVBbmRBZGQ7XG5cbi8qKlxuICogQWRkcyB0d28gdmVjMydzIGFmdGVyIHNjYWxpbmcgdGhlIHNlY29uZCBvcGVyYW5kIGJ5IGEgc2NhbGFyIHZhbHVlXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxlIHRoZSBhbW91bnQgdG8gc2NhbGUgYiBieSBiZWZvcmUgYWRkaW5nXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIHNjYWxlQW5kQWRkKG91dCwgYSwgYiwgc2NhbGUpIHtcbiAgICBvdXRbMF0gPSBhWzBdICsgKGJbMF0gKiBzY2FsZSlcbiAgICBvdXRbMV0gPSBhWzFdICsgKGJbMV0gKiBzY2FsZSlcbiAgICBvdXRbMl0gPSBhWzJdICsgKGJbMl0gKiBzY2FsZSlcbiAgICByZXR1cm4gb3V0XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2wtdmVjMy9zY2FsZUFuZEFkZC5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2Rpc3RhbmNlID0gcmVxdWlyZSgnZ2wtdmVjMy9kaXN0YW5jZScpO1xuXG52YXIgX2Rpc3RhbmNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Rpc3RhbmNlKTtcblxudmFyIF9zcXVhcmVkRGlzdGFuY2UgPSByZXF1aXJlKCdnbC12ZWMzL3NxdWFyZWREaXN0YW5jZScpO1xuXG52YXIgX3NxdWFyZWREaXN0YW5jZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zcXVhcmVkRGlzdGFuY2UpO1xuXG52YXIgX2RlYnVnRm4gPSByZXF1aXJlKCdkZWJ1Zy1mbicpO1xuXG52YXIgX2RlYnVnRm4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVidWdGbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBkZWJ1ZyA9ICgwLCBfZGVidWdGbjIuZGVmYXVsdCkoJ2hhbGZlZGdlJyk7XG5cbnZhciBIYWxmRWRnZSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gSGFsZkVkZ2UodmVydGV4LCBmYWNlKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhhbGZFZGdlKTtcblxuICAgIHRoaXMudmVydGV4ID0gdmVydGV4O1xuICAgIHRoaXMuZmFjZSA9IGZhY2U7XG4gICAgdGhpcy5uZXh0ID0gbnVsbDtcbiAgICB0aGlzLnByZXYgPSBudWxsO1xuICAgIHRoaXMub3Bwb3NpdGUgPSBudWxsO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEhhbGZFZGdlLCBbe1xuICAgIGtleTogJ2hlYWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoZWFkKCkge1xuICAgICAgcmV0dXJuIHRoaXMudmVydGV4O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3RhaWwnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0YWlsKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJldiA/IHRoaXMucHJldi52ZXJ0ZXggOiBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2xlbmd0aCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxlbmd0aCgpIHtcbiAgICAgIGlmICh0aGlzLnRhaWwoKSkge1xuICAgICAgICByZXR1cm4gKDAsIF9kaXN0YW5jZTIuZGVmYXVsdCkodGhpcy50YWlsKCkucG9pbnQsIHRoaXMuaGVhZCgpLnBvaW50KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdsZW5ndGhTcXVhcmVkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGVuZ3RoU3F1YXJlZCgpIHtcbiAgICAgIGlmICh0aGlzLnRhaWwoKSkge1xuICAgICAgICByZXR1cm4gKDAsIF9zcXVhcmVkRGlzdGFuY2UyLmRlZmF1bHQpKHRoaXMudGFpbCgpLnBvaW50LCB0aGlzLmhlYWQoKS5wb2ludCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2V0T3Bwb3NpdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRPcHBvc2l0ZShlZGdlKSB7XG4gICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgZGVidWcoZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmxvZygnb3Bwb3NpdGUgJyArIG1lLnRhaWwoKS5pbmRleCArICcgPC0tPiAnICsgbWUuaGVhZCgpLmluZGV4ICsgJyBiZXR3ZWVuICcgKyBtZS5mYWNlLmNvbGxlY3RJbmRpY2VzKCkgKyAnLCAnICsgZWRnZS5mYWNlLmNvbGxlY3RJbmRpY2VzKCkpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLm9wcG9zaXRlID0gZWRnZTtcbiAgICAgIGVkZ2Uub3Bwb3NpdGUgPSB0aGlzO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBIYWxmRWRnZTtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gSGFsZkVkZ2U7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9xdWlja2h1bGwzZC9kaXN0L0hhbGZFZGdlLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGRpc3RhbmNlO1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGV1Y2xpZGlhbiBkaXN0YW5jZSBiZXR3ZWVuIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxuICovXG5mdW5jdGlvbiBkaXN0YW5jZShhLCBiKSB7XG4gICAgdmFyIHggPSBiWzBdIC0gYVswXSxcbiAgICAgICAgeSA9IGJbMV0gLSBhWzFdLFxuICAgICAgICB6ID0gYlsyXSAtIGFbMl1cbiAgICByZXR1cm4gTWF0aC5zcXJ0KHgqeCArIHkqeSArIHoqeilcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nbC12ZWMzL2Rpc3RhbmNlLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHNxdWFyZWREaXN0YW5jZTtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBzcXVhcmVkIGV1Y2xpZGlhbiBkaXN0YW5jZSBiZXR3ZWVuIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHNxdWFyZWQgZGlzdGFuY2UgYmV0d2VlbiBhIGFuZCBiXG4gKi9cbmZ1bmN0aW9uIHNxdWFyZWREaXN0YW5jZShhLCBiKSB7XG4gICAgdmFyIHggPSBiWzBdIC0gYVswXSxcbiAgICAgICAgeSA9IGJbMV0gLSBhWzFdLFxuICAgICAgICB6ID0gYlsyXSAtIGFbMl1cbiAgICByZXR1cm4geCp4ICsgeSp5ICsgeip6XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2wtdmVjMy9zcXVhcmVkRGlzdGFuY2UuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IGVuZ2luZTogQm9pbGVycGxhdGVFbmdpbmUgPSB3aW5kb3c7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29sb3JTY2hlbWUge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGZvcmVncm91bmQ6IG51bWJlcltdLCBwdWJsaWMgczogc3RyaW5nLCBwdWJsaWMgYTE6ICh0OiBudW1iZXIpID0+IG51bWJlciwgcHVibGljIGEyOiAodDogbnVtYmVyKSA9PiBudW1iZXIpIHsgfVxyXG5cclxuICAgIGNvbXB1dGUodDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zLnJlcGxhY2UoJyRhMScsIHRoaXMuYTEodCkudG9TdHJpbmcoKSkucmVwbGFjZSgnJGEyJywgdGhpcy5hMih0KS50b1N0cmluZygpKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgc3dpcGVUaW1lID0gMC4xO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbG9yTWFuYWdlciB7XHJcbiAgICBwcml2YXRlIHM6IENvbG9yU2NoZW1lW10gPSBbXTtcclxuICAgIHByaXZhdGUgdDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgbGFzdEZvcmVncm91bmRDb2xvciA9ICcnO1xyXG4gICAgcHJpdmF0ZSBsYXN0QmFja2dyb3VuZENvbG9yID0gJyc7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgY3VycmVudENvbG9yU2NoZW1lOiBDb2xvclNjaGVtZSkge31cclxuXHJcbiAgICByZW5kZXIoZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCB0TmV4dCA9IHRoaXMudCArIGR0O1xyXG4gICAgICAgIHdoaWxlICh0TmV4dCA+IHN3aXBlVGltZSkge1xyXG4gICAgICAgICAgICB0TmV4dCAtPSBzd2lwZVRpbWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRDb2xvclNjaGVtZSA9IHRoaXMucy5zaGlmdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudCA9IHROZXh0O1xyXG5cclxuICAgICAgICBsZXQgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XHJcbiAgICAgICAgaWYgKHRoaXMucy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yID0gdGhpcy5jdXJyZW50Q29sb3JTY2hlbWUuY29tcHV0ZSgxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdQZXJjZW50ID0gdGhpcy50IC8gc3dpcGVUaW1lO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLmN1cnJlbnRDb2xvclNjaGVtZS5jb21wdXRlKDEgLSBuZXdQZXJjZW50KSArICcsICcgKyB0aGlzLnNbMF0uY29tcHV0ZSgxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGZvcmVncm91bmRDb2xvciA9IHRoaXMuY29tcHV0ZUZvcmVncm91bmRDb2xvcigxKTtcclxuICAgICAgICBpZiAoYmFja2dyb3VuZENvbG9yICE9PSB0aGlzLmxhc3RCYWNrZ3JvdW5kQ29sb3IpIHtcclxuICAgICAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IGJhY2tncm91bmRDb2xvcjtcclxuICAgICAgICAgICAgdGhpcy5sYXN0QmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZENvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZm9yZWdyb3VuZENvbG9yICE9PSB0aGlzLmxhc3RGb3JlZ3JvdW5kQ29sb3IpIHtcclxuICAgICAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuc3R5bGUuY29sb3IgPSBmb3JlZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdEZvcmVncm91bmRDb2xvciA9IGZvcmVncm91bmRDb2xvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcHV0ZUZvcmVncm91bmRDb2xvcihhbHBoYTogYW55KSB7XHJcbiAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLnMubGVuZ3RoID09PSAwXHJcbiAgICAgICAgICAgID8gdGhpcy5jdXJyZW50Q29sb3JTY2hlbWUuZm9yZWdyb3VuZFxyXG4gICAgICAgICAgICA6IGVuZ2luZS5sZXJwKHRoaXMuY3VycmVudENvbG9yU2NoZW1lLmZvcmVncm91bmQsIHRoaXMuc1swXS5mb3JlZ3JvdW5kLCAxIC0gdGhpcy50IC8gc3dpcGVUaW1lKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAodiA9PiBNYXRoLnJvdW5kKHYpKTtcclxuICAgICAgICByZXR1cm4gYHJnYmEoJHtjb2xvci5qb2luKCcsICcpfSwgJHthbHBoYX0pYDtcclxuICAgIH1cclxuXHJcbiAgICBwdXNoKGJnOiBDb2xvclNjaGVtZSkge1xyXG4gICAgICAgIGlmICh0aGlzLnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMudCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlICh0aGlzLnMubGVuZ3RoID4gMSkgeyAvLyBkb24ndCBhbGxvdyBtb3JlIHRoYW4gMiBpbiBxIChmaXJzdCBjYW4gYmUgaW4tdHJhbnNpdGlvbiwgc2Vjb25kIGNlcnRhaW5seSBub3QpXHJcbiAgICAgICAgICAgIHRoaXMucy5wb3AoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zLnB1c2goYmcpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbG9yTWFuYWdlci50cyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5leHBvcnRzLmkocmVxdWlyZShcIi0hLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL21leWVycmVzZXQyLnNjc3NcIiksIFwiXCIpO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQpO1wiLCBcIlwiXSk7XG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGtleWZyYW1lcyBibGluayB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7IH1cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDA7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxOyB9IH1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7IH1cXG4gIGJvZHkgaDEge1xcbiAgICBmb250LXdlaWdodDogNzAwOyB9XFxuXFxuLmludHJvIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB6LWluZGV4OiAyO1xcbiAgZm9udC1zaXplOiAwLjh2dzsgfVxcbiAgLmludHJvIGhlYWRlciB7XFxuICAgIGZsZXg6IGF1dG87XFxuICAgIG9yZGVyOiAxO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDV2dztcXG4gICAgcGFkZGluZy10b3A6IDV2dztcXG4gICAgb3BhY2l0eTogMC44OyB9XFxuICAgIC5pbnRybyBoZWFkZXIgaDEge1xcbiAgICAgIGZvbnQtc2l6ZTogOGVtO1xcbiAgICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuMTVlbTsgfVxcbiAgICAuaW50cm8gaGVhZGVyIGgyIHtcXG4gICAgICBmb250LXNpemU6IDRlbTtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgbWluLXdpZHRoOiA0MHZ3OyB9XFxuICAgIC5pbnRybyBoZWFkZXIgLmxpbmstbGlzdCB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDAuMTVlbTsgfVxcbiAgICAgIC5pbnRybyBoZWFkZXIgLmxpbmstbGlzdCBsaSB7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICBtYXJnaW4tdG9wOiAwLjNlbTtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMC41ZW07XFxuICAgICAgICBmb250LXNpemU6IDNlbTsgfVxcbiAgICAuaW50cm8gaGVhZGVyIC50eXBlZC1jdXJzb3Ige1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgYW5pbWF0aW9uOiBibGluayAycyBpbmZpbml0ZTsgfVxcbiAgICAuaW50cm8gaGVhZGVyIGEge1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgbWFyZ2luOiAwIC0wLjJlbTtcXG4gICAgICBwYWRkaW5nOiAwIDAuMmVtO1xcbiAgICAgIG9wYWNpdHk6IDAuOTsgfVxcbiAgICAgIC5pbnRybyBoZWFkZXIgYTpob3ZlciB7XFxuICAgICAgICBvcGFjaXR5OiAxOyB9XFxuICAgICAgICAuaW50cm8gaGVhZGVyIGE6aG92ZXI6OmFmdGVyIHtcXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgdG9wOiAxMDAlO1xcbiAgICAgICAgICBsZWZ0OiAwLjJlbTtcXG4gICAgICAgICAgcmlnaHQ6IDAuMmVtO1xcbiAgICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgICAgaGVpZ2h0OiAwLjFlbTtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yOyB9XFxuICAgICAgLmludHJvIGhlYWRlciBhOnZpc2l0ZWQge1xcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7IH1cXG4gIC5pbnRybyBuYXYuYmxvZy1wb3N0LWxpc3Qge1xcbiAgICBmbGV4OiBub25lO1xcbiAgICBvcmRlcjogMztcXG4gICAgcGFkZGluZy1sZWZ0OiA1dnc7XFxuICAgIHBhZGRpbmctYm90dG9tOiA0dnc7IH1cXG4gICAgLmludHJvIG5hdi5ibG9nLXBvc3QtbGlzdCBoMSB7XFxuICAgICAgZm9udC1zaXplOiA0ZW07XFxuICAgICAgb3BhY2l0eTogMC44OyB9XFxuICAgIC5pbnRybyBuYXYuYmxvZy1wb3N0LWxpc3QgbGkge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjA1ZW07XFxuICAgICAgcGFkZGluZy10b3A6IDAuM2VtO1xcbiAgICAgIGZvbnQtc2l6ZTogMi41ZW07IH1cXG4gICAgLmludHJvIG5hdi5ibG9nLXBvc3QtbGlzdCBhIHtcXG4gICAgICBvcGFjaXR5OiAwLjc7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuICAgICAgLmludHJvIG5hdi5ibG9nLXBvc3QtbGlzdCBhOmhvdmVyIHtcXG4gICAgICAgIG9wYWNpdHk6IDAuOTtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XFxuICAgICAgLmludHJvIG5hdi5ibG9nLXBvc3QtbGlzdCBhOnZpc2l0ZWQge1xcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7IH1cXG4gIC5pbnRybyBhc2lkZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcGFkZGluZy1yaWdodDogNXZ3O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNHZ3O1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgb3BhY2l0eTogMC4zOyB9XFxuXFxuLmJsb2cge1xcbiAgbWluLWhlaWdodDogMTAwdmg7IH1cXG4gIC5ibG9nIGhlYWRlciBzZWN0aW9uLCAuYmxvZyBzZWN0aW9uIHNlY3Rpb24ge1xcbiAgICBtYXJnaW46IDAgNXZ3OyB9XFxuICAuYmxvZyBoZWFkZXIge1xcbiAgICBtYXJnaW4tdG9wOiAxNXZoOyB9XFxuICAgIC5ibG9nIGhlYWRlciBoMSB7XFxuICAgICAgZm9udC1zaXplOiAyZW07IH1cXG5cXG4ucmVuZGVyLXZpZXcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgei1pbmRleDogMTsgfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtYXNwZWN0LXJhdGlvOiAxIC8gMSkge1xcbiAgLmludHJvIHtcXG4gICAgZm9udC1zaXplOiAxLjA0dnc7IH1cXG4gICAgLmludHJvIGFzaWRlIHtcXG4gICAgICBwb3NpdGlvbjogc3RhdGljO1xcbiAgICAgIGZsZXg6IG5vbmU7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIHBhZGRpbmctYm90dG9tOiA4dnc7XFxuICAgICAgcGFkZGluZy1yaWdodDogMDtcXG4gICAgICBmb250LXNpemU6IDIuNWVtO1xcbiAgICAgIG9yZGVyOiAyO1xcbiAgICAgIG9wYWNpdHk6IDAuNzsgfVxcbiAgICAgIC5pbnRybyBhc2lkZTpiZWZvcmUge1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xcbiAgICAgICAgY29udGVudDogJ1Zpc3VhbGl6ZWQ6JzsgfVxcbiAgbmF2LmJsb2ctcG9zdC1saXN0IHtcXG4gICAgZm9udC1zaXplOiAxLjNlbTsgfSB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXHJcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXHJcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcclxcbiovXFxyXFxuXFxyXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcclxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXHJcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxyXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcclxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxyXFxuYiwgdSwgaSwgY2VudGVyLFxcclxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxyXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxyXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXFxyXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxcclxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcclxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBmb250LXNpemU6IDEwMCU7XFxyXFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcclxcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXFxyXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBsaW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxuXFxyXFxub2wsIHVsIHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYmxvY2txdW90ZSwgcSB7XFxyXFxuICAgIHF1b3Rlczogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxyXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgY29udGVudDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxudGFibGUge1xcclxcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcbiAgICBib3JkZXItc3BhY2luZzogMDtcXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL21leWVycmVzZXQyLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbihzZWxlY3Rvcikge1xuXHRcdGlmICh0eXBlb2YgbWVtb1tzZWxlY3Rvcl0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGZuLmNhbGwodGhpcywgc2VsZWN0b3IpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmIChzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bc2VsZWN0b3JdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3NlbGVjdG9yXVxuXHR9O1xufSkoZnVuY3Rpb24gKHRhcmdldCkge1xuXHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpXG59KTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24pIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG5cdGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvICsgXCIgXCIgKyBvcHRpb25zLmluc2VydEF0LmJlZm9yZSk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC8pL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=