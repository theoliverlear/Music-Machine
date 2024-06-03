/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script/BlackKey.ts":
/*!********************************!*\
  !*** ./src/script/BlackKey.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == _typeof(e) || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nvar Key_1 = __webpack_require__(/*! ./Key */ \"./src/script/Key.ts\");\nvar BlackKey = /*#__PURE__*/function (_Key_1$Key) {\n  function BlackKey() {\n    _classCallCheck(this, BlackKey);\n    return _callSuper(this, BlackKey, arguments);\n  }\n  _inherits(BlackKey, _Key_1$Key);\n  return _createClass(BlackKey);\n}(Key_1.Key);\n\n//# sourceURL=webpack://music-machine/./src/script/BlackKey.ts?");

/***/ }),

/***/ "./src/script/Interval.ts":
/*!********************************!*\
  !*** ./src/script/Interval.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.Interval = void 0;\nvar Interval;\n(function (Interval) {\n  Interval[Interval[\"UNISON\"] = 0] = \"UNISON\";\n  Interval[Interval[\"MINOR_SECOND\"] = 1] = \"MINOR_SECOND\";\n  Interval[Interval[\"MAJOR_SECOND\"] = 2] = \"MAJOR_SECOND\";\n  Interval[Interval[\"MINOR_THIRD\"] = 3] = \"MINOR_THIRD\";\n  Interval[Interval[\"MAJOR_THIRD\"] = 4] = \"MAJOR_THIRD\";\n  Interval[Interval[\"PERFECT_FOURTH\"] = 5] = \"PERFECT_FOURTH\";\n  Interval[Interval[\"TRITONE\"] = 6] = \"TRITONE\";\n  Interval[Interval[\"PERFECT_FIFTH\"] = 7] = \"PERFECT_FIFTH\";\n  Interval[Interval[\"MINOR_SIXTH\"] = 8] = \"MINOR_SIXTH\";\n  Interval[Interval[\"MAJOR_SIXTH\"] = 9] = \"MAJOR_SIXTH\";\n  Interval[Interval[\"MINOR_SEVENTH\"] = 10] = \"MINOR_SEVENTH\";\n  Interval[Interval[\"MAJOR_SEVENTH\"] = 11] = \"MAJOR_SEVENTH\";\n  Interval[Interval[\"OCTAVE\"] = 12] = \"OCTAVE\";\n  Interval[Interval[\"MINOR_NINTH\"] = 13] = \"MINOR_NINTH\";\n  Interval[Interval[\"MAJOR_NINTH\"] = 14] = \"MAJOR_NINTH\";\n  Interval[Interval[\"MINOR_TENTH\"] = 15] = \"MINOR_TENTH\";\n  Interval[Interval[\"MAJOR_TENTH\"] = 16] = \"MAJOR_TENTH\";\n  Interval[Interval[\"PERFECT_ELEVENTH\"] = 17] = \"PERFECT_ELEVENTH\";\n  Interval[Interval[\"AUGMENTED_ELEVENTH\"] = 18] = \"AUGMENTED_ELEVENTH\";\n  Interval[Interval[\"PERFECT_TWELFTH\"] = 19] = \"PERFECT_TWELFTH\";\n  Interval[Interval[\"MINOR_THIRTEENTH\"] = 20] = \"MINOR_THIRTEENTH\";\n  Interval[Interval[\"MAJOR_THIRTEENTH\"] = 21] = \"MAJOR_THIRTEENTH\";\n  Interval[Interval[\"MINOR_FOURTEENTH\"] = 22] = \"MINOR_FOURTEENTH\";\n  Interval[Interval[\"MAJOR_FOURTEENTH\"] = 23] = \"MAJOR_FOURTEENTH\";\n  Interval[Interval[\"PERFECT_FIFTEENTH\"] = 24] = \"PERFECT_FIFTEENTH\";\n})(Interval || (exports.Interval = Interval = {}));\n\n//# sourceURL=webpack://music-machine/./src/script/Interval.ts?");

/***/ }),

/***/ "./src/script/Key.ts":
/*!***************************!*\
  !*** ./src/script/Key.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\n\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.Key = void 0;\nvar Key = /*#__PURE__*/_createClass(function Key() {\n  _classCallCheck(this, Key);\n});\nexports.Key = Key;\n\n//# sourceURL=webpack://music-machine/./src/script/Key.ts?");

/***/ }),

/***/ "./src/script/KeyOctave.ts":
/*!*********************************!*\
  !*** ./src/script/KeyOctave.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\n\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.KeyOctave = void 0;\nvar KeyOctave = /*#__PURE__*/_createClass(function KeyOctave() {\n  _classCallCheck(this, KeyOctave);\n});\nexports.KeyOctave = KeyOctave;\n\n//# sourceURL=webpack://music-machine/./src/script/KeyOctave.ts?");

/***/ }),

/***/ "./src/script/ScaleToneSequence.ts":
/*!*****************************************!*\
  !*** ./src/script/ScaleToneSequence.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.ScaleToneSequence = void 0;\nvar Interval_1 = __webpack_require__(/*! ./Interval */ \"./src/script/Interval.ts\");\nvar ScaleToneSequence = /*#__PURE__*/_createClass(function ScaleToneSequence() {\n  _classCallCheck(this, ScaleToneSequence);\n  this.MAJOR = [Interval_1.Interval.UNISON, Interval_1.Interval.MAJOR_SECOND, Interval_1.Interval.MAJOR_THIRD, Interval_1.Interval.PERFECT_FOURTH, Interval_1.Interval.PERFECT_FIFTH, Interval_1.Interval.MAJOR_SIXTH, Interval_1.Interval.MAJOR_SEVENTH];\n  this.MINOR = [Interval_1.Interval.UNISON, Interval_1.Interval.MAJOR_SECOND, Interval_1.Interval.MINOR_THIRD, Interval_1.Interval.PERFECT_FOURTH, Interval_1.Interval.PERFECT_FIFTH, Interval_1.Interval.MINOR_SIXTH, Interval_1.Interval.MINOR_SEVENTH];\n  this.HARMONIC_MINOR = [Interval_1.Interval.UNISON, Interval_1.Interval.MAJOR_SECOND, Interval_1.Interval.MINOR_THIRD, Interval_1.Interval.PERFECT_FOURTH, Interval_1.Interval.PERFECT_FIFTH, Interval_1.Interval.MINOR_SIXTH, Interval_1.Interval.MAJOR_SEVENTH];\n  this.DORIAN = [Interval_1.Interval.UNISON, Interval_1.Interval.MAJOR_SECOND, Interval_1.Interval.MINOR_THIRD, Interval_1.Interval.PERFECT_FOURTH, Interval_1.Interval.PERFECT_FIFTH, Interval_1.Interval.MAJOR_SIXTH, Interval_1.Interval.MINOR_SEVENTH];\n});\nexports.ScaleToneSequence = ScaleToneSequence;\n\n//# sourceURL=webpack://music-machine/./src/script/ScaleToneSequence.ts?");

/***/ }),

/***/ "./src/script/WhiteKey.ts":
/*!********************************!*\
  !*** ./src/script/WhiteKey.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == _typeof(e) || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.WhiteKey = void 0;\nvar Key_1 = __webpack_require__(/*! ./Key */ \"./src/script/Key.ts\");\nvar WhiteKey = /*#__PURE__*/function (_Key_1$Key) {\n  function WhiteKey() {\n    _classCallCheck(this, WhiteKey);\n    return _callSuper(this, WhiteKey, arguments);\n  }\n  _inherits(WhiteKey, _Key_1$Key);\n  return _createClass(WhiteKey);\n}(Key_1.Key);\nexports.WhiteKey = WhiteKey;\n\n//# sourceURL=webpack://music-machine/./src/script/WhiteKey.ts?");

/***/ }),

/***/ "./src/script/globalScript.ts":
/*!************************************!*\
  !*** ./src/script/globalScript.ts ***!
  \************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://music-machine/./src/script/globalScript.ts?");

/***/ }),

/***/ "./src/script/midiScript.ts":
/*!**********************************!*\
  !*** ./src/script/midiScript.ts ***!
  \**********************************/
/***/ (() => {

eval("function _createForOfIteratorHelper(r, e) { var t = \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && \"number\" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t[\"return\"] || t[\"return\"](); } finally { if (u) throw o; } } }; }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nnavigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);\n// Function to run when requestMIDIAccess is successful\nfunction onMIDISuccess(midiAccess) {\n  var inputs = midiAccess.inputs;\n  var outputs = midiAccess.outputs;\n  console.log('MIDI Access Object', midiAccess);\n  var _iterator = _createForOfIteratorHelper(inputs.values()),\n    _step;\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var input = _step.value;\n      console.log('MIDI input', input);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n  var _iterator2 = _createForOfIteratorHelper(outputs.values()),\n    _step2;\n  try {\n    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n      var output = _step2.value;\n      console.log('MIDI output', output);\n    }\n  } catch (err) {\n    _iterator2.e(err);\n  } finally {\n    _iterator2.f();\n  }\n}\n// Function to run when requestMIDIAccess fails\nfunction onMIDIFailure() {\n  console.log('Could not access your MIDI devices.');\n}\nconsole.log('MIDI Script Loaded');\n\n//# sourceURL=webpack://music-machine/./src/script/midiScript.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/script/BlackKey.ts");
/******/ 	__webpack_require__("./src/script/globalScript.ts");
/******/ 	__webpack_require__("./src/script/Interval.ts");
/******/ 	__webpack_require__("./src/script/Key.ts");
/******/ 	__webpack_require__("./src/script/KeyOctave.ts");
/******/ 	__webpack_require__("./src/script/midiScript.ts");
/******/ 	__webpack_require__("./src/script/ScaleToneSequence.ts");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script/WhiteKey.ts");
/******/ 	
/******/ })()
;