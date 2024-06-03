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

/***/ "./src/script/globalScript.ts":
/*!************************************!*\
  !*** ./src/script/globalScript.ts ***!
  \************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://music-machine/./src/script/globalScript.ts?");

/***/ }),

/***/ "./src/script/main.ts":
/*!****************************!*\
  !*** ./src/script/main.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n// Add this section\ntry {\n  __webpack_require__(/*! electron-reloader */ \"./node_modules/electron-reloader/index.js\")(module, {\n    // Note that the path to electron may vary according to the main file\n    electron: path__WEBPACK_IMPORTED_MODULE_1__.join(__dirname, 'node_modules', '.bin', 'electron')\n  });\n} catch (_a) {}\nvar mainWindow;\nfunction createWindow() {\n  mainWindow = new electron__WEBPACK_IMPORTED_MODULE_0__.BrowserWindow({\n    width: 800,\n    height: 600,\n    webPreferences: {\n      nodeIntegration: true\n    }\n  });\n  mainWindow.loadFile(path__WEBPACK_IMPORTED_MODULE_1__.join(__dirname, '../page/free-play.html'));\n  // mainWindow.webContents.openDevTools();\n  mainWindow.on('closed', function () {\n    mainWindow = null;\n  });\n}\nelectron__WEBPACK_IMPORTED_MODULE_0__.app.on('ready', createWindow);\nelectron__WEBPACK_IMPORTED_MODULE_0__.app.on('window-all-closed', function () {\n  if (process.platform !== 'darwin') electron__WEBPACK_IMPORTED_MODULE_0__.app.quit();\n});\nelectron__WEBPACK_IMPORTED_MODULE_0__.app.on('activate', function () {\n  if (mainWindow === null) createWindow();\n});\n\n//# sourceURL=webpack://music-machine/./src/script/main.ts?");

/***/ }),

/***/ "./node_modules/date-time/index.js":
/*!*****************************************!*\
  !*** ./node_modules/date-time/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nconst timeZone = __webpack_require__(/*! time-zone */ \"./node_modules/time-zone/index.js\");\n\nconst dateTime = options => {\n\toptions = Object.assign({\n\t\tdate: new Date(),\n\t\tlocal: true,\n\t\tshowTimeZone: false,\n\t\tshowMilliseconds: false\n\t}, options);\n\n\tlet {date} = options;\n\n\tif (options.local) {\n\t\t// Offset the date so it will return the correct value when getting the ISO string\n\t\tdate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000));\n\t}\n\n\tlet end = '';\n\n\tif (options.showTimeZone) {\n\t\tend = ' UTC' + (options.local ? timeZone(date) : '');\n\t}\n\n\tif (options.showMilliseconds && date.getUTCMilliseconds() > 0) {\n\t\tend = ` ${date.getUTCMilliseconds()}ms${end}`;\n\t}\n\n\treturn date\n\t\t.toISOString()\n\t\t.replace(/T/, ' ')\n\t\t.replace(/\\..+/, end);\n};\n\nmodule.exports = dateTime;\n// TODO: Remove this for the next major release\nmodule.exports[\"default\"] = dateTime;\n\n\n//# sourceURL=webpack://music-machine/./node_modules/date-time/index.js?");

/***/ }),

/***/ "./node_modules/electron-is-dev/index.js":
/*!***********************************************!*\
  !*** ./node_modules/electron-is-dev/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nconst electron = __webpack_require__(/*! electron */ \"electron\");\n\nif (typeof electron === 'string') {\n\tthrow new TypeError('Not running in an Electron environment!');\n}\n\nconst app = electron.app || electron.remote.app;\n\nconst isEnvSet = 'ELECTRON_IS_DEV' in process.env;\nconst getFromEnv = parseInt(process.env.ELECTRON_IS_DEV, 10) === 1;\n\nmodule.exports = isEnvSet ? getFromEnv : !app.isPackaged;\n\n\n//# sourceURL=webpack://music-machine/./node_modules/electron-is-dev/index.js?");

/***/ }),

/***/ "./node_modules/electron-reloader/index.js":
/*!*************************************************!*\
  !*** ./node_modules/electron-reloader/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nconst {inspect} = __webpack_require__(/*! util */ \"util\");\nconst path = __webpack_require__(/*! path */ \"path\");\nconst electron = __webpack_require__(/*! electron */ \"electron\");\nconst chokidar = __webpack_require__(/*! chokidar */ \"chokidar\");\nconst isDev = __webpack_require__(/*! electron-is-dev */ \"./node_modules/electron-is-dev/index.js\");\nconst dateTime = __webpack_require__(/*! date-time */ \"./node_modules/date-time/index.js\");\nconst chalk = __webpack_require__(/*! chalk */ \"chalk\");\nconst findUp = __webpack_require__(/*! find-up */ \"find-up\");\n\nfunction getMainProcessPaths(topModuleObject, cwd) {\n\tconst paths = new Set([topModuleObject.filename]);\n\n\tconst getPaths = moduleObject => {\n\t\tfor (const child of moduleObject.children) {\n\t\t\tif (paths.has(child.filename)) {\n\t\t\t\tcontinue;\n\t\t\t}\n\n\t\t\tif (path.relative(cwd, child.filename).includes('node_modules')) {\n\t\t\t\tcontinue;\n\t\t\t}\n\n\t\t\tpaths.add(child.filename);\n\t\t\tgetPaths(child);\n\t\t}\n\t};\n\n\tgetPaths(topModuleObject);\n\n\treturn paths;\n}\n\nmodule.exports = (moduleObject, options = {}) => {\n\t// This module should be a dev dependency, but guard\n\t// this in case the user included it as a dependency.\n\tif (!isDev) {\n\t\treturn;\n\t}\n\n\tif (!moduleObject) {\n\t\tthrow new Error('You have to pass the `module` object');\n\t}\n\n\tif (options.ignored) {\n\t\tthrow new Error('The option is named `ignore` not `ignored`');\n\t}\n\n\toptions = {\n\t\twatchRenderer: true,\n\t\t...options\n\t};\n\n\tconst mainProcessDirectory = path.dirname(moduleObject.filename);\n\tconst packageDirectory = findUp.sync('package.json', {cwd: mainProcessDirectory});\n\tconst cwd = packageDirectory ? path.dirname(packageDirectory) : mainProcessDirectory;\n\tconst mainProcessPaths = getMainProcessPaths(moduleObject, cwd);\n\tconst watchPaths = options.watchRenderer ? cwd : [...mainProcessPaths];\n\tlet isRelaunching = false;\n\n\tconst watcher = chokidar.watch(watchPaths, {\n\t\tcwd,\n\t\tdisableGlobbing: true,\n\t\tignored: [\n\t\t\t/(^|[/\\\\])\\../, // Dotfiles\n\t\t\t'node_modules',\n\t\t\t'**/*.map'\n\t\t].concat(options.ignore)\n\t});\n\n\telectron.app.on('quit', () => {\n\t\twatcher.close();\n\t});\n\n\tif (options.debug) {\n\t\twatcher.on('ready', () => {\n\t\t\tconsole.log('Watched paths:', inspect(watcher.getWatched(), {compact: false, colors: true}));\n\t\t});\n\t}\n\n\twatcher.on('change', filePath => {\n\t\tif (options.debug) {\n\t\t\tconsole.log('File changed:', chalk.bold(filePath), chalk.dim(`(${dateTime().split(' ')[1]})`));\n\t\t}\n\n\t\tif (mainProcessPaths.has(path.join(cwd, filePath))) {\n\t\t\t// Prevent multiple instances of Electron from being started due to the change\n\t\t\t// handler being called multiple times before the original instance exits.\n\t\t\tif (!isRelaunching) {\n\t\t\t\telectron.app.relaunch();\n\t\t\t\telectron.app.exit(0);\n\t\t\t}\n\n\t\t\tisRelaunching = true;\n\t\t} else {\n\t\t\tfor (const window_ of electron.BrowserWindow.getAllWindows()) {\n\t\t\t\twindow_.webContents.reloadIgnoringCache();\n\n\t\t\t\tfor (const view_ of window_.getBrowserViews()) {\n\t\t\t\t\tview_.webContents.reloadIgnoringCache();\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t});\n};\n\n\n//# sourceURL=webpack://music-machine/./node_modules/electron-reloader/index.js?");

/***/ }),

/***/ "./node_modules/time-zone/index.js":
/*!*****************************************!*\
  !*** ./node_modules/time-zone/index.js ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
eval("\nmodule.exports = date => {\n\tconst offset = (date || new Date()).getTimezoneOffset();\n\tconst absOffset = Math.abs(offset);\n\tconst hours = Math.floor(absOffset / 60);\n\tconst minutes = absOffset % 60;\n\tconst minutesOut = minutes > 0 ? ':' + ('0' + minutes).slice(-2) : '';\n\n\treturn (offset < 0 ? '+' : '-') + hours + minutesOut;\n};\n\n\n//# sourceURL=webpack://music-machine/./node_modules/time-zone/index.js?");

/***/ }),

/***/ "chalk":
/*!************************!*\
  !*** external "chalk" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("chalk");

/***/ }),

/***/ "chokidar":
/*!***************************!*\
  !*** external "chokidar" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("chokidar");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("electron");

/***/ }),

/***/ "find-up":
/*!**************************!*\
  !*** external "find-up" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("find-up");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/script/globalScript.ts");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script/main.ts");
/******/ 	
/******/ })()
;