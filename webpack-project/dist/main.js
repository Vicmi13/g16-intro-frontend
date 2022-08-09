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

/***/ "./src/greetings.js":
/*!**************************!*\
  !*** ./src/greetings.js ***!
  \**************************/
/***/ ((module) => {

eval("/**\nfunction greeting (name) {\n    return `Hola ${name}  desde Web pack con JS `\n}\n\n// arrow function \nconst greeting = (name) => {\n    return `Hola ${name}  desde Web pack con JS `\n}\n*/\n\nconst greeting = (name) => `Hola ${name}  desde Web pack con JS`\n\nconst numberArray = [10,20,30,40,50,60]\n\n// Export Node Common JS\n module.exports = { greeting, numberArray }\n\n\n// Utiliza REACT esta forma ECMA2016 || ES6\n//export default { greeting, numberArray }\n\n\n\n\n//# sourceURL=webpack://webpack-project/./src/greetings.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { numberArray, greeting } = __webpack_require__(/*! ./greetings */ \"./src/greetings.js\")\n\nconsole.log('primer proyecto WP 🔥')\nconsole.log('file', numberArray)\n\nconsole.log(greeting(\"nombrePrueba\"))\n\n//# sourceURL=webpack://webpack-project/./src/main.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;