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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n\n\nclass Clock {\n  constructor() {\n    // 1. Create a Date object.\n    const currentTime = new Date();\n\n    // 2. Store the hour, minute, and second.\n    this.hours = currentTime.getHours();\n    this.minutes = currentTime.getMinutes();\n    this.seconds = currentTime.getSeconds();\n\n    // 3. Call printTime.\n    this.printTime();\n\n    // 4. Schedule the tick at 1 second intervals.\n    setInterval(this._tick.bind(this), 1000);\n  }\n\n  printTime() {\n    // Format the time in HH:MM:SS\n    let secsString; \n    let minutesString; \n  \n    if (this.seconds < 10) {\n      secsString = `0${this.seconds}`;\n    } else {\n      secsString = this.seconds;\n    }\n\n\n    if (this.minutes < 10) {\n      minutesString = `0${this.minutes}`;\n    } else {\n      minutesString = this.minutes;\n    }\n\n    \n    const timeString = [this.hours, minutesString, secsString].join(\":\");\n    \n    // Use console.log to print it.\n      const clock = document.getElementById('clock');\n      Object(_warmup__WEBPACK_IMPORTED_MODULE_0__[\"htmlGenerator\"])(timeString, clock);\n      \n  }\n\n  _tick() {\n    // 1. Increment the time by one second.\n    this._incrementSeconds();\n\n    // 2. Call printTime.\n    this.printTime();\n    \n  }\n\n  _incrementSeconds() {\n    // 1. Increment the time by one second.\n    this.seconds += 1;\n    if (this.seconds === 60) {\n      this.seconds = 0;\n      this._incrementMinutes();\n    }\n  }\n\n  _incrementMinutes() {\n    this.minutes += 1;\n    if (this.minutes === 60) {\n      this.minutes = 0;\n      this._incrementHours();\n    }\n    \n  }\n\n  _incrementHours() {\n    this.hours = (this.hours + 1) % 24;\n  }\n}\n\nconst clock = new Clock();\nconst clockElement = document.getElementById('clock');\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nconst dogs = {\n  \"Corgi\": \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\n  \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\n  \"Affenpinscher\": \"https://www.akc.org/dog-breeds/affenpinscher/\",\n  \"American Staffordshire Terrier\": \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\n  \"Tosa\": \"https://www.akc.org/dog-breeds/tosa/\",\n  \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\n  \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\" \n};\n\nfunction dogLinkCreator() {\n  let dogNames = Object.keys(dogs);\n  let dogLinks = [];  \n\n  dogNames.forEach( dog => {\n    let a = document.createElement(\"a\");\n    a.innerHTML = dog;\n    a.setAttribute(\"href\", dogs[dog]);\n    let li = document.createElement(\"li\");\n    li.classList.add(\"dog-link\");\n    li.appendChild(a);\n    dogLinks.push(li);\n\n  })\n  return dogLinks;\n}\n\nfunction attachDogLinks() {\n  let dogLinks = dogLinkCreator(); \n\n  let ul = document.querySelector('.drop-down-dog-list');\n\n  dogLinks.forEach(link => {\n    ul.appendChild(link);\n  })\n}\n\nfunction handleEnter() {\n  let nav = document.querySelector(\"nav\");\n  let ul = document.querySelector('.drop-down-dog-list');\n  \n  nav.addEventListener(\"mouseover\", function () {\n    ul.style.visibility = \"visible\";\n  })\n\n}\n\nfunction handleLeave() {\n  let nav = document.querySelector(\"nav\");\n  let ul = document.querySelector('.drop-down-dog-list');\n   \n    nav.addEventListener(\"mouseout\", function () {\n      ul.style.visibility = \"hidden\";\n    });\n\n}\n\n\n\nhandleEnter(); \nhandleLeave();\nattachDogLinks(); \n\n//# sourceURL=webpack:///./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock */ \"./src/clock.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop_down */ \"./src/drop_down.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_drop_down__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo_list */ \"./src/todo_list.js\");\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_todo_list__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/todo_list.js":
/*!**************************!*\
  !*** ./src/todo_list.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let todos = [];\n\nconst ul = document.querySelector(\".todos\");\nconst form = document.querySelector(\".add-todo-form\");\n\nfunction addTodo(e) {\n    e.preventDefault();\n    let input = document.getElementById(\"add-todo\").value;\n    let todoList = {todo: input, done: false};\n    todos.push(todoList);\n    input.innerHtml = \"\";\n    debugger\n    populateList(todos);\n    \n    let myStorage = window.localStorage;\n    // debugger; \n    let keys = [];\n    todos.forEach ( (obj) => {\n        keys = Object.keys(obj);\n        keys.forEach( key => {\n            let value = JSON.stringify(obj[key]);\n            key = JSON.stringify(key);\n            myStorage.setItem(key, value);\n        })\n        \n    })\n    const items = [];\n    keys.forEach( (el) => {\n        items.concat(JSON.parse(myStorage.getItem(el)));\n    })\n    \n\n  // To store, we stringify\n  // retrieve we parse\n  // localStorage.setItem(key, value);\n\n  \n  myStorage = window.localStorage;\n   todos = [];\n}\n\nfunction populateList(todos) {\n    todos.forEach(el => {\n     \n      let label = document.createElement('label');\n      \n      label.innerHTML = el[\"todo\"];\n      \n      let checkbox = document.createElement('radio');\n      label.appendChild(checkbox);\n\n      let li = document.createElement('li');\n\n      li.appendChild(label);\n      ul.appendChild(li);\n      \n    })\n   \n}\n\nlet button = form.querySelector(\"#submit\");\nbutton.addEventListener(\"click\", addTodo);\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/todo_list.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/*! exports provided: htmlGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"htmlGenerator\", function() { return htmlGenerator; });\n\nconst partyHeader = document.getElementById('party');\n\n\nconst htmlGenerator = (string, htmlElement) => {\n    let p = document.createElement(\"p\");\n    p.innerHTML = string;\n    let children = htmlElement.children;\n    \n    children = Array.from(children);\n    if (children) {\n        children.forEach( child => {\n            htmlElement.removeChild(child);\n        })\n    } \n    \n    htmlElement.appendChild(p);\n\n    \n};\n\nhtmlGenerator('I people who code.', partyHeader);\n\n\n\n//# sourceURL=webpack:///./src/warmup.js?");

/***/ })

/******/ });