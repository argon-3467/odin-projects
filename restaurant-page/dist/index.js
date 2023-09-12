/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/footer.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/footer.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* FOOTER */
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #ef227d;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.fa-github {
  color: white;
  font-size: 24px;
  transition: transform 0.3s ease-in-out;
}

.fa-github:hover {
  transform: rotate(360deg) scale(1.2);
}
`, "",{"version":3,"sources":["webpack://./src/footer.css"],"names":[],"mappings":"AAAA,WAAW;AACX;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,aAAa;EACb,eAAe;EACf,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,yBAAyB;EACzB;wEACsE;AACxE;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,sCAAsC;AACxC;;AAEA;EACE,oCAAoC;AACtC","sourcesContent":["/* FOOTER */\n.footer {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  padding: 10px;\n  font-size: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  background-color: #ef227d;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\n.fa-github {\n  color: white;\n  font-size: 24px;\n  transition: transform 0.3s ease-in-out;\n}\n\n.fa-github:hover {\n  transform: rotate(360deg) scale(1.2);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/reset.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/reset.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*** The new CSS Reset - version 1.2.0 (last updated 23.7.2021) ***/

/* Remove all the styles of the "User-Agent-Stylesheet", except for the 'display' property */
*:where(:not(iframe, canvas, img, svg, video):not(svg *)) {
  all: unset;
  display: revert;
}

/* Preferred box-sizing value */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/*
  Remove list styles (bullets/numbers)
  in case you use it with normalize.css
*/
ol,
ul {
  list-style: none;
}

/* For images to not be able to exceed their container */
img {
  max-width: 100%;
}

/* Removes spacing between cells in tables */
table {
  border-collapse: collapse;
}

/* Revert the 'white-space' property for textarea elements on Safari */
textarea {
  white-space: revert;
}
`, "",{"version":3,"sources":["webpack://./src/reset.css"],"names":[],"mappings":"AAAA,mEAAmE;;AAEnE,4FAA4F;AAC5F;EACE,UAAU;EACV,eAAe;AACjB;;AAEA,+BAA+B;AAC/B;;;EAGE,sBAAsB;AACxB;;AAEA;;;CAGC;AACD;;EAEE,gBAAgB;AAClB;;AAEA,wDAAwD;AACxD;EACE,eAAe;AACjB;;AAEA,4CAA4C;AAC5C;EACE,yBAAyB;AAC3B;;AAEA,sEAAsE;AACtE;EACE,mBAAmB;AACrB","sourcesContent":["/*** The new CSS Reset - version 1.2.0 (last updated 23.7.2021) ***/\n\n/* Remove all the styles of the \"User-Agent-Stylesheet\", except for the 'display' property */\n*:where(:not(iframe, canvas, img, svg, video):not(svg *)) {\n  all: unset;\n  display: revert;\n}\n\n/* Preferred box-sizing value */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/*\n  Remove list styles (bullets/numbers)\n  in case you use it with normalize.css\n*/\nol,\nul {\n  list-style: none;\n}\n\n/* For images to not be able to exceed their container */\nimg {\n  max-width: 100%;\n}\n\n/* Removes spacing between cells in tables */\ntable {\n  border-collapse: collapse;\n}\n\n/* Revert the 'white-space' property for textarea elements on Safari */\ntextarea {\n  white-space: revert;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/marqueem.ttf */ "./src/assets/marqueem.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/Oswald-SemiBold.ttf */ "./src/assets/Oswald-SemiBold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "marqueem";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
  font-family: "Oswald";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

:root {
  --logo-color: #ef227d;
  --logo-border-color: white;
  --selected-tab-color: white;
  --unselected-tab-color: #bfbfbf;
}

body {
  background-color: black;
}

#content {
  width: clamp(min(425px, 100%), 90%, 900px);
  margin: 0 auto;
  color: white;
  font-family: "marqueem";
  box-shadow: 0px 0px 8px 0px var(--logo-color);
  min-height: 100vh;
  position: relative;
}

/* NAV BAR*/

nav.nav ul {
  display: flex;
  justify-content: center;
  background-color: #cd116b;
}

nav.nav ul li {
  color: white;
  padding: 10px 30px;
  font-family: "Oswald";
  display: flex;
  align-items: center;
  cursor: pointer;
}

nav.nav ul li.active {
  background-color: var(--logo-color);
}

nav.nav ul li.toggle-nav-bar {
  display: none;
}

@media screen and (max-width: 600px) {
  nav.nav {
    position: sticky;
    top: 0;
    min-height: 55px;
  }

  nav.nav ul {
    position: absolute;
    height: 100vh;
    background-color: unset;
    justify-content: flex-start;
  }

  nav.nav ul.show {
    background-color: #cd116b;
    flex-direction: column;
  }

  nav.nav ul li.toggle-nav-bar {
    display: unset;
  }

  nav.nav ul li {
    display: none;
  }

  nav.nav ul.show li {
    display: unset;
  }
}

/* HOME */

#content.home .logo {
  color: white;
  width: 70%;
  margin: 3rem auto;
  text-align: center;
}

#content.home .neonText {
  font-family: "Oswald";
  font-size: 5rem;
  text-shadow: 0 0 7px var(--logo-color), 0 0 10px var(--logo-color),
    0 0 21px var(--logo-color), 0 0 42px var(--logo-color),
    0 0 82px var(--logo-color), 0 0 92px var(--logo-color),
    0 0 102px var(--logo-color), 0 0 151px var(--logo-color);
}

#content.home .logo h1 {
  /* font-size: 4rem; */
  animation: pulsateText 0.5s infinite alternate, pulsateBoxShadow 0.5s infinite;
  border: 0.2rem solid #fff;
  border-radius: 10px;
  padding: 0.4em;
  box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem var(--logo-color),
    0 0 0.8rem var(--logo-color), 0 0 2.8rem var(--logo-color),
    inset 0 0 1.3rem var(--logo-color);
}

@keyframes pulsateText {
  100% {
    text-shadow: 0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff,
      0 0 20px var(--logo-color), 0 0 40px var(--logo-color),
      0 0 40px var(--logo-color), 0 0 100px var(--logo-color),
      0 0 110px var(--logo-color);
  }

  0% {
    text-shadow: 0 0 2px #fff, 0 0 4px #fff, 0 0 6px #fff,
      0 0 10px var(--logo-color), 0 0 45px var(--logo-color),
      0 0 45px var(--logo-color), 0 0 70px var(--logo-color),
      0 0 80px var(--logo-color);
  }
}

@keyframes pulsateBoxShadow {
  100% {
    box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem var(--logo-color),
      0 0 0.8rem var(--logo-color), 0 0 2.8rem var(--logo-color),
      inset 0 0 1.3rem var(--logo-color);
  }

  0% {
    box-shadow: 0 0 0.3rem #fff, 0 0 0.3rem #fff, 0 0 3rem var(--logo-color),
      0 0 0.9rem var(--logo-color), 0 0 2.2rem var(--logo-color),
      inset 0 0 1.3rem var(--logo-color);
  }
}

#content.home h3 {
  font-size: 36px;
  text-align: center;
  /* outline: 1px solid yellow; */
}

#content.home h3 > a {
  text-decoration: none;
  color: var(--logo-color);
  cursor: pointer;
}

#content.home > h3 > a:hover {
  --logo-color: white;
}

#content.home .card-container {
  width: 100%;
  /* height: 100px; */
  display: flex;
  /* outline:1px solid whitesmoke; */
}

#content.home .card {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

#content.home .card-image {
  height: 60%;
  /* outline: 1px solid red; */
}

#content.home .card-image > img {
  object-fit: contain;
  width: 100%;
  height: 100%;
  max-height: 100%;
}

#content.home .card-title {
  text-align: center;
  font-size: 27px;
  letter-spacing: 2px;
}

#content.home .card-title:hover {
  color: var(--logo-color);
}

@media screen and (max-width: 425px) {
  #content.home .card-container {
    flex-direction: column;
  }
}

/* MENU */

.menu-container {
  padding: 2rem 2rem 5rem;
}

.menu-title {
  text-align: center;
  color: var(--logo-color);
  font-size: 2rem;
  padding: 1rem;
}

.menu-sub-container {
  font-size: 1.5rem;
  display: flex;
  gap: 2rem;
  justify-content: space-evenly;
  align-items: center;
}

.menu-ingredients {
  padding: 0.5rem;
  width: max(60%, 300px);
}

.menu-line {
  height: 0;
  width: clamp(20px, 10%, 100px);
  border-top: 4px dotted white;
  margin: 0 auto;
}

.menu-cost {
  width: 20%;
  padding: 0.5rem;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;EACvB,4CAAiC;AACnC;;AAEA;EACE,qBAAqB;EACrB,4CAAwC;AAC1C;;AAEA;EACE,qBAAqB;EACrB,0BAA0B;EAC1B,2BAA2B;EAC3B,+BAA+B;AACjC;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,0CAA0C;EAC1C,cAAc;EACd,YAAY;EACZ,uBAAuB;EACvB,6CAA6C;EAC7C,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA,WAAW;;AAEX;EACE,aAAa;EACb,uBAAuB;EACvB,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,qBAAqB;EACrB,aAAa;EACb,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE;IACE,gBAAgB;IAChB,MAAM;IACN,gBAAgB;EAClB;;EAEA;IACE,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,2BAA2B;EAC7B;;EAEA;IACE,yBAAyB;IACzB,sBAAsB;EACxB;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,cAAc;EAChB;AACF;;AAEA,SAAS;;AAET;EACE,YAAY;EACZ,UAAU;EACV,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,eAAe;EACf;;;4DAG0D;AAC5D;;AAEA;EACE,qBAAqB;EACrB,8EAA8E;EAC9E,yBAAyB;EACzB,mBAAmB;EACnB,cAAc;EACd;;sCAEoC;AACtC;;AAEA;EACE;IACE;;;iCAG6B;EAC/B;;EAEA;IACE;;;gCAG4B;EAC9B;AACF;;AAEA;EACE;IACE;;wCAEoC;EACtC;;EAEA;IACE;;wCAEoC;EACtC;AACF;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,+BAA+B;AACjC;;AAEA;EACE,qBAAqB;EACrB,wBAAwB;EACxB,eAAe;AACjB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,mBAAmB;EACnB,aAAa;EACb,kCAAkC;AACpC;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,4BAA4B;AAC9B;;AAEA;EACE,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE;IACE,sBAAsB;EACxB;AACF;;AAEA,SAAS;;AAET;EACE,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,wBAAwB;EACxB,eAAe;EACf,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,SAAS;EACT,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,SAAS;EACT,8BAA8B;EAC9B,4BAA4B;EAC5B,cAAc;AAChB;;AAEA;EACE,UAAU;EACV,eAAe;AACjB","sourcesContent":["@font-face {\n  font-family: \"marqueem\";\n  src: url(\"./assets/marqueem.ttf\");\n}\n\n@font-face {\n  font-family: \"Oswald\";\n  src: url(\"./assets/Oswald-SemiBold.ttf\");\n}\n\n:root {\n  --logo-color: #ef227d;\n  --logo-border-color: white;\n  --selected-tab-color: white;\n  --unselected-tab-color: #bfbfbf;\n}\n\nbody {\n  background-color: black;\n}\n\n#content {\n  width: clamp(min(425px, 100%), 90%, 900px);\n  margin: 0 auto;\n  color: white;\n  font-family: \"marqueem\";\n  box-shadow: 0px 0px 8px 0px var(--logo-color);\n  min-height: 100vh;\n  position: relative;\n}\n\n/* NAV BAR*/\n\nnav.nav ul {\n  display: flex;\n  justify-content: center;\n  background-color: #cd116b;\n}\n\nnav.nav ul li {\n  color: white;\n  padding: 10px 30px;\n  font-family: \"Oswald\";\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\nnav.nav ul li.active {\n  background-color: var(--logo-color);\n}\n\nnav.nav ul li.toggle-nav-bar {\n  display: none;\n}\n\n@media screen and (max-width: 600px) {\n  nav.nav {\n    position: sticky;\n    top: 0;\n    min-height: 55px;\n  }\n\n  nav.nav ul {\n    position: absolute;\n    height: 100vh;\n    background-color: unset;\n    justify-content: flex-start;\n  }\n\n  nav.nav ul.show {\n    background-color: #cd116b;\n    flex-direction: column;\n  }\n\n  nav.nav ul li.toggle-nav-bar {\n    display: unset;\n  }\n\n  nav.nav ul li {\n    display: none;\n  }\n\n  nav.nav ul.show li {\n    display: unset;\n  }\n}\n\n/* HOME */\n\n#content.home .logo {\n  color: white;\n  width: 70%;\n  margin: 3rem auto;\n  text-align: center;\n}\n\n#content.home .neonText {\n  font-family: \"Oswald\";\n  font-size: 5rem;\n  text-shadow: 0 0 7px var(--logo-color), 0 0 10px var(--logo-color),\n    0 0 21px var(--logo-color), 0 0 42px var(--logo-color),\n    0 0 82px var(--logo-color), 0 0 92px var(--logo-color),\n    0 0 102px var(--logo-color), 0 0 151px var(--logo-color);\n}\n\n#content.home .logo h1 {\n  /* font-size: 4rem; */\n  animation: pulsateText 0.5s infinite alternate, pulsateBoxShadow 0.5s infinite;\n  border: 0.2rem solid #fff;\n  border-radius: 10px;\n  padding: 0.4em;\n  box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem var(--logo-color),\n    0 0 0.8rem var(--logo-color), 0 0 2.8rem var(--logo-color),\n    inset 0 0 1.3rem var(--logo-color);\n}\n\n@keyframes pulsateText {\n  100% {\n    text-shadow: 0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff,\n      0 0 20px var(--logo-color), 0 0 40px var(--logo-color),\n      0 0 40px var(--logo-color), 0 0 100px var(--logo-color),\n      0 0 110px var(--logo-color);\n  }\n\n  0% {\n    text-shadow: 0 0 2px #fff, 0 0 4px #fff, 0 0 6px #fff,\n      0 0 10px var(--logo-color), 0 0 45px var(--logo-color),\n      0 0 45px var(--logo-color), 0 0 70px var(--logo-color),\n      0 0 80px var(--logo-color);\n  }\n}\n\n@keyframes pulsateBoxShadow {\n  100% {\n    box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem var(--logo-color),\n      0 0 0.8rem var(--logo-color), 0 0 2.8rem var(--logo-color),\n      inset 0 0 1.3rem var(--logo-color);\n  }\n\n  0% {\n    box-shadow: 0 0 0.3rem #fff, 0 0 0.3rem #fff, 0 0 3rem var(--logo-color),\n      0 0 0.9rem var(--logo-color), 0 0 2.2rem var(--logo-color),\n      inset 0 0 1.3rem var(--logo-color);\n  }\n}\n\n#content.home h3 {\n  font-size: 36px;\n  text-align: center;\n  /* outline: 1px solid yellow; */\n}\n\n#content.home h3 > a {\n  text-decoration: none;\n  color: var(--logo-color);\n  cursor: pointer;\n}\n\n#content.home > h3 > a:hover {\n  --logo-color: white;\n}\n\n#content.home .card-container {\n  width: 100%;\n  /* height: 100px; */\n  display: flex;\n  /* outline:1px solid whitesmoke; */\n}\n\n#content.home .card {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n#content.home .card-image {\n  height: 60%;\n  /* outline: 1px solid red; */\n}\n\n#content.home .card-image > img {\n  object-fit: contain;\n  width: 100%;\n  height: 100%;\n  max-height: 100%;\n}\n\n#content.home .card-title {\n  text-align: center;\n  font-size: 27px;\n  letter-spacing: 2px;\n}\n\n#content.home .card-title:hover {\n  color: var(--logo-color);\n}\n\n@media screen and (max-width: 425px) {\n  #content.home .card-container {\n    flex-direction: column;\n  }\n}\n\n/* MENU */\n\n.menu-container {\n  padding: 2rem 2rem 5rem;\n}\n\n.menu-title {\n  text-align: center;\n  color: var(--logo-color);\n  font-size: 2rem;\n  padding: 1rem;\n}\n\n.menu-sub-container {\n  font-size: 1.5rem;\n  display: flex;\n  gap: 2rem;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.menu-ingredients {\n  padding: 0.5rem;\n  width: max(60%, 300px);\n}\n\n.menu-line {\n  height: 0;\n  width: clamp(20px, 10%, 100px);\n  border-top: 4px dotted white;\n  margin: 0 auto;\n}\n\n.menu-cost {\n  width: 20%;\n  padding: 0.5rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/footer.css":
/*!************************!*\
  !*** ./src/footer.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./footer.css */ "./node_modules/css-loader/dist/cjs.js!./src/footer.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/reset.css":
/*!***********************!*\
  !*** ./src/reset.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHtmlElement: () => (/* binding */ createHtmlElement),
/* harmony export */   createImgElement: () => (/* binding */ createImgElement)
/* harmony export */ });
/**
 * Creates and returns an HTML element.
 * @param {string} type HTML type : div, nav, ul, ...
 * @param {string} id HTML ID
 * @param {[string]} Classes
 * @param {string} txt
 * @param {[HTMLElement]} Childrens HTML elements which must be appended to newly created element
 * @returns {HTMLElement} HTML element
 */
function createHtmlElement(type, id, Classes, txt, Childrens) {
  const element = document.createElement(type);

  if (id) element.id = id;

  if (Classes) Classes.forEach((className) => element.classList.add(className));

  if (txt) element.textContent = txt;

  if (Childrens) {
    Childrens.forEach((child) => element.appendChild(child));
  }

  return element;
}

/** Returns `<img></img>` with some optional parameters.
 *
 * @param {string} src source path
 * @param {string} alt alternative text
 * @param {[string]} Classes array of classes
 * @param {[HTMLElement]} Childrens array of HTML children
 * @returns Image element
 */
function createImgElement(src, alt, Classes, Childrens) {
  const Img = new Image();
  if (src) Img.src = src;
  if (alt) Img.alt = alt;

  if (Classes)
    arrayClasses.forEach((className) => Img.classList.add(className));

  if (Childrens) {
    Childrens.forEach((child) => Img.appendChild(child));
  }

  return Img;
}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomePageFactory: () => (/* binding */ HomePageFactory)
/* harmony export */ });
/* harmony import */ var _assets_bottleandglass_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/bottleandglass.gif */ "./src/assets/bottleandglass.gif");
/* harmony import */ var _assets_dancingwomen_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/dancingwomen.gif */ "./src/assets/dancingwomen.gif");
/* harmony import */ var _assets_rotatingpill_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/rotatingpill.gif */ "./src/assets/rotatingpill.gif");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper */ "./src/helper.js");






const HomePageFactory = (content) => {
  function card(title, src, alt) {
    return { title, src, alt };
  }

  function addlogo() {
    const logo = "Mug shot Pub";
    const heading = (0,_helper__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)("h1", null, ["neonText"], logo, null);
    const logoContainer = (0,_helper__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)("div", null, ["logo"], null, [
      heading,
    ]);
    content.appendChild(logoContainer);
  }

  function addInfo() {
    const t1 = (0,_helper__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)("span", null, null, ` over 18's only`, null);
    const anchor = (0,_helper__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)("a", null, null, "book here", null);
    anchor.href = "#";
    const heading = (0,_helper__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)("h3", null, null, null, [anchor, t1]);
    content.appendChild(heading);
  }

  function addCards(Cards) {
    const cardsContainer = (0,_helper__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)(
      "div",
      null,
      ["card-container"],
      null,
      null
    );

    Cards.forEach((cardObj) => {
      const cardImg = (0,_helper__WEBPACK_IMPORTED_MODULE_3__.createImgElement)(cardObj.src, cardObj.alt, null, null);

      const cardImgContainer = (0,_helper__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)(
        "div",
        null,
        ["card-image"],
        null,
        [cardImg]
      );

      const cardTitle = (0,_helper__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)(
        "div",
        null,
        ["card-title"],
        cardObj.title,
        null
      );

      const card = (0,_helper__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)("div", null, ["card"], null, [
        cardImgContainer,
        cardTitle,
      ]);

      cardsContainer.appendChild(card);
    });

    content.appendChild(cardsContainer);
  }

  function display() {
    content.classList.add("home");
    let Cards = [
      card("drinks", _assets_bottleandglass_gif__WEBPACK_IMPORTED_MODULE_0__, "A gif of a bottle and a glass"),
      card("drugs", _assets_rotatingpill_gif__WEBPACK_IMPORTED_MODULE_2__, "A gif of a pill rotating clockwise"),
      card("dance", _assets_dancingwomen_gif__WEBPACK_IMPORTED_MODULE_1__, "A gif of 4 lovely women dancing"),
    ];

    addlogo();
    addInfo();
    addCards(Cards);
  }

  function remove() {
    content.classList.remove("home");
    document.querySelector("h3").remove();
    document.querySelector(".logo").remove();
    document.querySelector(".card-container").remove();
  }

  return {
    display,
    remove,
  };
};


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuPageFactory: () => (/* binding */ MenuPageFactory)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/helper.js");


const MenuPageFactory = (content) => {
  function menuItem(title, ingredients, cost) {
    return { title, ingredients, cost };
  }

  function addMenuItems(menu) {
    const menuContainer = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(
      "div",
      null,
      ["menu-container"],
      null,
      null
    );

    menu.forEach((item) => {
      const menuTitle = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(
        "h3",
        null,
        ["menu-title"],
        item.title,
        null
      );

      const menuIngredients = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(
        "div",
        null,
        ["menu-ingredients"],
        item.ingredients,
        null
      );

      const menuPrice = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(
        "div",
        null,
        ["menu-cost"],
        item.cost,
        null
      );

      const line = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("hr", null, ["menu-line"], null, null);

      const container = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(
        "div",
        null,
        ["menu-sub-container"],
        null,
        [menuIngredients, line, menuPrice]
      );

      const card = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", null, ["menu-card"], null, [
        menuTitle,
        container,
      ]);
      menuContainer.appendChild(card);
    });
    content.appendChild(menuContainer);
  }

  function display() {
    content.classList.add("menu");
    let menu = [
      menuItem(
        "benedict",
        "eggs, hollandaise, bacon, ham, smoked cheese",
        "$12.50"
      ),
      menuItem(
        "chicken",
        "chicken, hollandaise, bacon, ham, smoked cheese",
        "$16.95"
      ),
      menuItem(
        "jerk sandwich",
        "jamaican jerk chicken, avocado, grilled pineapple, roasted red pepper, mayo",
        "$16.95"
      ),
      menuItem(
        "salad board",
        "crispy teriyaki aubergine, pickled watermelon, mixed berries, cauliflower",
        "$5.85"
      ),
      menuItem("druggie", "pure cocaine, watermelon, coconut", "$69.85"),
    ];

    addMenuItems(menu);
  }

  function remove() {
    content.classList.remove("menu");
    const menuContainer = document.querySelector(".menu-container");
    menuContainer.remove();
  }

  return {
    display,
    remove,
  };
};




/***/ }),

/***/ "./src/assets/Oswald-SemiBold.ttf":
/*!****************************************!*\
  !*** ./src/assets/Oswald-SemiBold.ttf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/7ea6b749e7a829164007.ttf";

/***/ }),

/***/ "./src/assets/bottleandglass.gif":
/*!***************************************!*\
  !*** ./src/assets/bottleandglass.gif ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/aecb6f70625ced32ce99.gif";

/***/ }),

/***/ "./src/assets/dancingwomen.gif":
/*!*************************************!*\
  !*** ./src/assets/dancingwomen.gif ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/cc5375223615a860d8fb.gif";

/***/ }),

/***/ "./src/assets/marqueem.ttf":
/*!*********************************!*\
  !*** ./src/assets/marqueem.ttf ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/fdc6a4f69624ee9988a5.ttf";

/***/ }),

/***/ "./src/assets/menu.svg":
/*!*****************************!*\
  !*** ./src/assets/menu.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/502e2eee594e9e16f419.svg";

/***/ }),

/***/ "./src/assets/rotatingpill.gif":
/*!*************************************!*\
  !*** ./src/assets/rotatingpill.gif ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/d1ed694f3223ed394524.gif";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset.css */ "./src/reset.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _footer_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.css */ "./src/footer.css");
/* harmony import */ var _assets_menu_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/menu.svg */ "./src/assets/menu.svg");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helper */ "./src/helper.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
//import styles










const load = (() => {
  const content = document.querySelector("#content");
  const homePage = (0,_home__WEBPACK_IMPORTED_MODULE_5__.HomePageFactory)(content);
  const menuPage = (0,_menu__WEBPACK_IMPORTED_MODULE_6__.MenuPageFactory)(content);

  const TabNames = ["HOME", "MENU", "GALLERY", "CONTACT", "BOOK"];
  // let currentTab = "HOME";
  let currentTab = "MENU";

  function addNavBar() {
    const unorderedList = document.createElement("ul");
    const cardImg = new Image(30, 30);
    cardImg.src = _assets_menu_svg__WEBPACK_IMPORTED_MODULE_3__;
    cardImg.alt = "menu icon";
    const toggleBtn = (0,_helper__WEBPACK_IMPORTED_MODULE_4__.createHtmlElement)("li", null, ["toggle-nav-bar"], null, [
      cardImg,
    ]);
    unorderedList.appendChild(toggleBtn);
    TabNames.forEach((tab) => {
      unorderedList.appendChild((0,_helper__WEBPACK_IMPORTED_MODULE_4__.createHtmlElement)("li", null, null, tab, null));
    });

    const navBar = (0,_helper__WEBPACK_IMPORTED_MODULE_4__.createHtmlElement)("nav", null, ["nav"], null, [
      unorderedList,
    ]);
    content.appendChild(navBar);

    const TabElements = [...document.querySelectorAll(".nav li")];
    for (let i = 1; i < TabElements.length; ++i) {
      TabElements[i].addEventListener("click", switchTab);
    }

    toggleBtn.addEventListener("click", toggleNav);
  }

  function toggleNav() {
    const unorderedList = document.querySelector("ul");
    unorderedList.classList.toggle("show");
  }

  function switchTab(e) {
    const newTab = e.target.textContent;
    if (newTab == currentTab) return;

    //remove current tab
    if (currentTab == "HOME") homePage.remove();
    else if (currentTab == "MENU") menuPage.remove();
    else if (currentTab == "GALLERY");
    else if (currentTab == "CONTACT");
    else if (currentTab == "BOOK");

    //change color in nav bar
    colorNavBar(newTab);

    //load new tab
    if (newTab == "HOME") {
      homePage.display();
    } else if (newTab == "MENU") {
      menuPage.display();
    } else if (newTab == "GALLERY") {
      // galleryPage.display();
    } else if (newTab == "CONTACT") {
      // galleryPage.display();
    } else if (newTab == "BOOK") {
      // galleryPage.display();
    }

    currentTab = newTab;
  }

  function colorNavBar(tab) {
    let index = TabNames.findIndex((el) => {
      return el == tab;
    });
    const tabElements = document
      .querySelector("nav")
      .querySelectorAll('li:not([class*="toggle-nav-bar"]');
    //change class of all tabs
    tabElements.forEach((t) => {
      t.classList.remove("active");
    });
    //change class of selected tab
    tabElements[index].classList.add("active");
  }

  addNavBar();
  // colorNavBar("HOME");
  colorNavBar("MENU");
  // homePage.display();
  menuPage.display();

  const footer = (0,_helper__WEBPACK_IMPORTED_MODULE_4__.createHtmlElement)("footer", null, ["footer"], null, null);
  footer.innerHTML = `<p>Copyright &copy;<script>document.write(new Date().getFullYear());</script>argon-3467<a href="https://github.com/argon-3467"><i class="fa-brands fa-github"></i></a></p>`;
  content.appendChild(footer);
})();

if (false) {}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQywwREFBaUI7QUFDakQsS0FBSzs7QUFFTCxtQkFBbUIsMERBQWlCO0FBQ3BDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQix3QkFBd0I7QUFDNUM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLDBEQUFpQjtBQUNsQyx5Q0FBeUMsaURBQWlEO0FBQzFGO0FBQ0EsQ0FBQzs7QUFFRCxJQUFJLEtBQVUsRUFBRSxFQUVmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Zvb3Rlci5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZm9vdGVyLmNzcz84MWQ3Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9yZXNldC5jc3M/ZWRlMCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVscGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBGT09URVIgKi9cbi5mb290ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmMjI3ZDtcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90byxcbiAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5mYS1naXRodWIge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5mYS1naXRodWI6aG92ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuMik7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9mb290ZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFdBQVc7QUFDWDtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLGFBQWE7RUFDYixlQUFlO0VBQ2YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6Qjt3RUFDc0U7QUFDeEU7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBGT09URVIgKi9cXG4uZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWYyMjdkO1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sXFxuICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uZmEtZ2l0aHViIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZmEtZ2l0aHViOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS4yKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKioqIFRoZSBuZXcgQ1NTIFJlc2V0IC0gdmVyc2lvbiAxLjIuMCAobGFzdCB1cGRhdGVkIDIzLjcuMjAyMSkgKioqL1xuXG4vKiBSZW1vdmUgYWxsIHRoZSBzdHlsZXMgb2YgdGhlIFwiVXNlci1BZ2VudC1TdHlsZXNoZWV0XCIsIGV4Y2VwdCBmb3IgdGhlICdkaXNwbGF5JyBwcm9wZXJ0eSAqL1xuKjp3aGVyZSg6bm90KGlmcmFtZSwgY2FudmFzLCBpbWcsIHN2ZywgdmlkZW8pOm5vdChzdmcgKikpIHtcbiAgYWxsOiB1bnNldDtcbiAgZGlzcGxheTogcmV2ZXJ0O1xufVxuXG4vKiBQcmVmZXJyZWQgYm94LXNpemluZyB2YWx1ZSAqL1xuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLypcbiAgUmVtb3ZlIGxpc3Qgc3R5bGVzIChidWxsZXRzL251bWJlcnMpXG4gIGluIGNhc2UgeW91IHVzZSBpdCB3aXRoIG5vcm1hbGl6ZS5jc3NcbiovXG5vbCxcbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLyogRm9yIGltYWdlcyB0byBub3QgYmUgYWJsZSB0byBleGNlZWQgdGhlaXIgY29udGFpbmVyICovXG5pbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi8qIFJlbW92ZXMgc3BhY2luZyBiZXR3ZWVuIGNlbGxzIGluIHRhYmxlcyAqL1xudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG4vKiBSZXZlcnQgdGhlICd3aGl0ZS1zcGFjZScgcHJvcGVydHkgZm9yIHRleHRhcmVhIGVsZW1lbnRzIG9uIFNhZmFyaSAqL1xudGV4dGFyZWEge1xuICB3aGl0ZS1zcGFjZTogcmV2ZXJ0O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLG1FQUFtRTs7QUFFbkUsNEZBQTRGO0FBQzVGO0VBQ0UsVUFBVTtFQUNWLGVBQWU7QUFDakI7O0FBRUEsK0JBQStCO0FBQy9COzs7RUFHRSxzQkFBc0I7QUFDeEI7O0FBRUE7OztDQUdDO0FBQ0Q7O0VBRUUsZ0JBQWdCO0FBQ2xCOztBQUVBLHdEQUF3RDtBQUN4RDtFQUNFLGVBQWU7QUFDakI7O0FBRUEsNENBQTRDO0FBQzVDO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLHNFQUFzRTtBQUN0RTtFQUNFLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKioqIFRoZSBuZXcgQ1NTIFJlc2V0IC0gdmVyc2lvbiAxLjIuMCAobGFzdCB1cGRhdGVkIDIzLjcuMjAyMSkgKioqL1xcblxcbi8qIFJlbW92ZSBhbGwgdGhlIHN0eWxlcyBvZiB0aGUgXFxcIlVzZXItQWdlbnQtU3R5bGVzaGVldFxcXCIsIGV4Y2VwdCBmb3IgdGhlICdkaXNwbGF5JyBwcm9wZXJ0eSAqL1xcbio6d2hlcmUoOm5vdChpZnJhbWUsIGNhbnZhcywgaW1nLCBzdmcsIHZpZGVvKTpub3Qoc3ZnICopKSB7XFxuICBhbGw6IHVuc2V0O1xcbiAgZGlzcGxheTogcmV2ZXJ0O1xcbn1cXG5cXG4vKiBQcmVmZXJyZWQgYm94LXNpemluZyB2YWx1ZSAqL1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qXFxuICBSZW1vdmUgbGlzdCBzdHlsZXMgKGJ1bGxldHMvbnVtYmVycylcXG4gIGluIGNhc2UgeW91IHVzZSBpdCB3aXRoIG5vcm1hbGl6ZS5jc3NcXG4qL1xcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIEZvciBpbWFnZXMgdG8gbm90IGJlIGFibGUgdG8gZXhjZWVkIHRoZWlyIGNvbnRhaW5lciAqL1xcbmltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qIFJlbW92ZXMgc3BhY2luZyBiZXR3ZWVuIGNlbGxzIGluIHRhYmxlcyAqL1xcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcbi8qIFJldmVydCB0aGUgJ3doaXRlLXNwYWNlJyBwcm9wZXJ0eSBmb3IgdGV4dGFyZWEgZWxlbWVudHMgb24gU2FmYXJpICovXFxudGV4dGFyZWEge1xcbiAgd2hpdGUtc3BhY2U6IHJldmVydDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9tYXJxdWVlbS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9Pc3dhbGQtU2VtaUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIm1hcnF1ZWVtXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiT3N3YWxkXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuXG46cm9vdCB7XG4gIC0tbG9nby1jb2xvcjogI2VmMjI3ZDtcbiAgLS1sb2dvLWJvcmRlci1jb2xvcjogd2hpdGU7XG4gIC0tc2VsZWN0ZWQtdGFiLWNvbG9yOiB3aGl0ZTtcbiAgLS11bnNlbGVjdGVkLXRhYi1jb2xvcjogI2JmYmZiZjtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4jY29udGVudCB7XG4gIHdpZHRoOiBjbGFtcChtaW4oNDI1cHgsIDEwMCUpLCA5MCUsIDkwMHB4KTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwibWFycXVlZW1cIjtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggMHB4IHZhcigtLWxvZ28tY29sb3IpO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4vKiBOQVYgQkFSKi9cblxubmF2Lm5hdiB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2QxMTZiO1xufVxuXG5uYXYubmF2IHVsIGxpIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9zd2FsZFwiO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbm5hdi5uYXYgdWwgbGkuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbG9nby1jb2xvcik7XG59XG5cbm5hdi5uYXYgdWwgbGkudG9nZ2xlLW5hdi1iYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBuYXYubmF2IHtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICBtaW4taGVpZ2h0OiA1NXB4O1xuICB9XG5cbiAgbmF2Lm5hdiB1bCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB9XG5cbiAgbmF2Lm5hdiB1bC5zaG93IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2QxMTZiO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICBuYXYubmF2IHVsIGxpLnRvZ2dsZS1uYXYtYmFyIHtcbiAgICBkaXNwbGF5OiB1bnNldDtcbiAgfVxuXG4gIG5hdi5uYXYgdWwgbGkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICBuYXYubmF2IHVsLnNob3cgbGkge1xuICAgIGRpc3BsYXk6IHVuc2V0O1xuICB9XG59XG5cbi8qIEhPTUUgKi9cblxuI2NvbnRlbnQuaG9tZSAubG9nbyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luOiAzcmVtIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2NvbnRlbnQuaG9tZSAubmVvblRleHQge1xuICBmb250LWZhbWlseTogXCJPc3dhbGRcIjtcbiAgZm9udC1zaXplOiA1cmVtO1xuICB0ZXh0LXNoYWRvdzogMCAwIDdweCB2YXIoLS1sb2dvLWNvbG9yKSwgMCAwIDEwcHggdmFyKC0tbG9nby1jb2xvciksXG4gICAgMCAwIDIxcHggdmFyKC0tbG9nby1jb2xvciksIDAgMCA0MnB4IHZhcigtLWxvZ28tY29sb3IpLFxuICAgIDAgMCA4MnB4IHZhcigtLWxvZ28tY29sb3IpLCAwIDAgOTJweCB2YXIoLS1sb2dvLWNvbG9yKSxcbiAgICAwIDAgMTAycHggdmFyKC0tbG9nby1jb2xvciksIDAgMCAxNTFweCB2YXIoLS1sb2dvLWNvbG9yKTtcbn1cblxuI2NvbnRlbnQuaG9tZSAubG9nbyBoMSB7XG4gIC8qIGZvbnQtc2l6ZTogNHJlbTsgKi9cbiAgYW5pbWF0aW9uOiBwdWxzYXRlVGV4dCAwLjVzIGluZmluaXRlIGFsdGVybmF0ZSwgcHVsc2F0ZUJveFNoYWRvdyAwLjVzIGluZmluaXRlO1xuICBib3JkZXI6IDAuMnJlbSBzb2xpZCAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAwLjRlbTtcbiAgYm94LXNoYWRvdzogMCAwIDAuMnJlbSAjZmZmLCAwIDAgMC4ycmVtICNmZmYsIDAgMCAycmVtIHZhcigtLWxvZ28tY29sb3IpLFxuICAgIDAgMCAwLjhyZW0gdmFyKC0tbG9nby1jb2xvciksIDAgMCAyLjhyZW0gdmFyKC0tbG9nby1jb2xvciksXG4gICAgaW5zZXQgMCAwIDEuM3JlbSB2YXIoLS1sb2dvLWNvbG9yKTtcbn1cblxuQGtleWZyYW1lcyBwdWxzYXRlVGV4dCB7XG4gIDEwMCUge1xuICAgIHRleHQtc2hhZG93OiAwIDAgNHB4ICNmZmYsIDAgMCAxMXB4ICNmZmYsIDAgMCAxOXB4ICNmZmYsXG4gICAgICAwIDAgMjBweCB2YXIoLS1sb2dvLWNvbG9yKSwgMCAwIDQwcHggdmFyKC0tbG9nby1jb2xvciksXG4gICAgICAwIDAgNDBweCB2YXIoLS1sb2dvLWNvbG9yKSwgMCAwIDEwMHB4IHZhcigtLWxvZ28tY29sb3IpLFxuICAgICAgMCAwIDExMHB4IHZhcigtLWxvZ28tY29sb3IpO1xuICB9XG5cbiAgMCUge1xuICAgIHRleHQtc2hhZG93OiAwIDAgMnB4ICNmZmYsIDAgMCA0cHggI2ZmZiwgMCAwIDZweCAjZmZmLFxuICAgICAgMCAwIDEwcHggdmFyKC0tbG9nby1jb2xvciksIDAgMCA0NXB4IHZhcigtLWxvZ28tY29sb3IpLFxuICAgICAgMCAwIDQ1cHggdmFyKC0tbG9nby1jb2xvciksIDAgMCA3MHB4IHZhcigtLWxvZ28tY29sb3IpLFxuICAgICAgMCAwIDgwcHggdmFyKC0tbG9nby1jb2xvcik7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBwdWxzYXRlQm94U2hhZG93IHtcbiAgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAuMnJlbSAjZmZmLCAwIDAgMC4ycmVtICNmZmYsIDAgMCAycmVtIHZhcigtLWxvZ28tY29sb3IpLFxuICAgICAgMCAwIDAuOHJlbSB2YXIoLS1sb2dvLWNvbG9yKSwgMCAwIDIuOHJlbSB2YXIoLS1sb2dvLWNvbG9yKSxcbiAgICAgIGluc2V0IDAgMCAxLjNyZW0gdmFyKC0tbG9nby1jb2xvcik7XG4gIH1cblxuICAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAuM3JlbSAjZmZmLCAwIDAgMC4zcmVtICNmZmYsIDAgMCAzcmVtIHZhcigtLWxvZ28tY29sb3IpLFxuICAgICAgMCAwIDAuOXJlbSB2YXIoLS1sb2dvLWNvbG9yKSwgMCAwIDIuMnJlbSB2YXIoLS1sb2dvLWNvbG9yKSxcbiAgICAgIGluc2V0IDAgMCAxLjNyZW0gdmFyKC0tbG9nby1jb2xvcik7XG4gIH1cbn1cblxuI2NvbnRlbnQuaG9tZSBoMyB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAvKiBvdXRsaW5lOiAxcHggc29saWQgeWVsbG93OyAqL1xufVxuXG4jY29udGVudC5ob21lIGgzID4gYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHZhcigtLWxvZ28tY29sb3IpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNjb250ZW50LmhvbWUgPiBoMyA+IGE6aG92ZXIge1xuICAtLWxvZ28tY29sb3I6IHdoaXRlO1xufVxuXG4jY29udGVudC5ob21lIC5jYXJkLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBoZWlnaHQ6IDEwMHB4OyAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICAvKiBvdXRsaW5lOjFweCBzb2xpZCB3aGl0ZXNtb2tlOyAqL1xufVxuXG4jY29udGVudC5ob21lIC5jYXJkIHtcbiAgZmxleC1ncm93OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jY29udGVudC5ob21lIC5jYXJkLWltYWdlIHtcbiAgaGVpZ2h0OiA2MCU7XG4gIC8qIG91dGxpbmU6IDFweCBzb2xpZCByZWQ7ICovXG59XG5cbiNjb250ZW50LmhvbWUgLmNhcmQtaW1hZ2UgPiBpbWcge1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG4jY29udGVudC5ob21lIC5jYXJkLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI3cHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG5cbiNjb250ZW50LmhvbWUgLmNhcmQtdGl0bGU6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tbG9nby1jb2xvcik7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gICNjb250ZW50LmhvbWUgLmNhcmQtY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG5cbi8qIE1FTlUgKi9cblxuLm1lbnUtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMnJlbSAycmVtIDVyZW07XG59XG5cbi5tZW51LXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tbG9nby1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLm1lbnUtc3ViLWNvbnRhaW5lciB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDJyZW07XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWVudS1pbmdyZWRpZW50cyB7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgd2lkdGg6IG1heCg2MCUsIDMwMHB4KTtcbn1cblxuLm1lbnUtbGluZSB7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IGNsYW1wKDIwcHgsIDEwJSwgMTAwcHgpO1xuICBib3JkZXItdG9wOiA0cHggZG90dGVkIHdoaXRlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLm1lbnUtY29zdCB7XG4gIHdpZHRoOiAyMCU7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHVCQUF1QjtFQUN2Qiw0Q0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsNENBQXdDO0FBQzFDOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDBCQUEwQjtFQUMxQiwyQkFBMkI7RUFDM0IsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLGNBQWM7RUFDZCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLDZDQUE2QztFQUM3QyxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBLFdBQVc7O0FBRVg7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QiwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7QUFDRjs7QUFFQSxTQUFTOztBQUVUO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZjs7OzREQUcwRDtBQUM1RDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiw4RUFBOEU7RUFDOUUseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Q7O3NDQUVvQztBQUN0Qzs7QUFFQTtFQUNFO0lBQ0U7OztpQ0FHNkI7RUFDL0I7O0VBRUE7SUFDRTs7O2dDQUc0QjtFQUM5QjtBQUNGOztBQUVBO0VBQ0U7SUFDRTs7d0NBRW9DO0VBQ3RDOztFQUVBO0lBQ0U7O3dDQUVvQztFQUN0QztBQUNGOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0VBQ3hCO0FBQ0Y7O0FBRUEsU0FBUzs7QUFFVDtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsU0FBUztFQUNULDZCQUE2QjtFQUM3QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsU0FBUztFQUNULDhCQUE4QjtFQUM5Qiw0QkFBNEI7RUFDNUIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJtYXJxdWVlbVxcXCI7XFxuICBzcmM6IHVybChcXFwiLi9hc3NldHMvbWFycXVlZW0udHRmXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPc3dhbGRcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vYXNzZXRzL09zd2FsZC1TZW1pQm9sZC50dGZcXFwiKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1sb2dvLWNvbG9yOiAjZWYyMjdkO1xcbiAgLS1sb2dvLWJvcmRlci1jb2xvcjogd2hpdGU7XFxuICAtLXNlbGVjdGVkLXRhYi1jb2xvcjogd2hpdGU7XFxuICAtLXVuc2VsZWN0ZWQtdGFiLWNvbG9yOiAjYmZiZmJmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICB3aWR0aDogY2xhbXAobWluKDQyNXB4LCAxMDAlKSwgOTAlLCA5MDBweCk7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwibWFycXVlZW1cXFwiO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggMHB4IHZhcigtLWxvZ28tY29sb3IpO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi8qIE5BViBCQVIqL1xcblxcbm5hdi5uYXYgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NkMTE2YjtcXG59XFxuXFxubmF2Lm5hdiB1bCBsaSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxMHB4IDMwcHg7XFxuICBmb250LWZhbWlseTogXFxcIk9zd2FsZFxcXCI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubmF2Lm5hdiB1bCBsaS5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbG9nby1jb2xvcik7XFxufVxcblxcbm5hdi5uYXYgdWwgbGkudG9nZ2xlLW5hdi1iYXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIG5hdi5uYXYge1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDA7XFxuICAgIG1pbi1oZWlnaHQ6IDU1cHg7XFxuICB9XFxuXFxuICBuYXYubmF2IHVsIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgfVxcblxcbiAgbmF2Lm5hdiB1bC5zaG93IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NkMTE2YjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIG5hdi5uYXYgdWwgbGkudG9nZ2xlLW5hdi1iYXIge1xcbiAgICBkaXNwbGF5OiB1bnNldDtcXG4gIH1cXG5cXG4gIG5hdi5uYXYgdWwgbGkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgbmF2Lm5hdiB1bC5zaG93IGxpIHtcXG4gICAgZGlzcGxheTogdW5zZXQ7XFxuICB9XFxufVxcblxcbi8qIEhPTUUgKi9cXG5cXG4jY29udGVudC5ob21lIC5sb2dvIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiA3MCU7XFxuICBtYXJnaW46IDNyZW0gYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRlbnQuaG9tZSAubmVvblRleHQge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPc3dhbGRcXFwiO1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgdGV4dC1zaGFkb3c6IDAgMCA3cHggdmFyKC0tbG9nby1jb2xvciksIDAgMCAxMHB4IHZhcigtLWxvZ28tY29sb3IpLFxcbiAgICAwIDAgMjFweCB2YXIoLS1sb2dvLWNvbG9yKSwgMCAwIDQycHggdmFyKC0tbG9nby1jb2xvciksXFxuICAgIDAgMCA4MnB4IHZhcigtLWxvZ28tY29sb3IpLCAwIDAgOTJweCB2YXIoLS1sb2dvLWNvbG9yKSxcXG4gICAgMCAwIDEwMnB4IHZhcigtLWxvZ28tY29sb3IpLCAwIDAgMTUxcHggdmFyKC0tbG9nby1jb2xvcik7XFxufVxcblxcbiNjb250ZW50LmhvbWUgLmxvZ28gaDEge1xcbiAgLyogZm9udC1zaXplOiA0cmVtOyAqL1xcbiAgYW5pbWF0aW9uOiBwdWxzYXRlVGV4dCAwLjVzIGluZmluaXRlIGFsdGVybmF0ZSwgcHVsc2F0ZUJveFNoYWRvdyAwLjVzIGluZmluaXRlO1xcbiAgYm9yZGVyOiAwLjJyZW0gc29saWQgI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAwLjRlbTtcXG4gIGJveC1zaGFkb3c6IDAgMCAwLjJyZW0gI2ZmZiwgMCAwIDAuMnJlbSAjZmZmLCAwIDAgMnJlbSB2YXIoLS1sb2dvLWNvbG9yKSxcXG4gICAgMCAwIDAuOHJlbSB2YXIoLS1sb2dvLWNvbG9yKSwgMCAwIDIuOHJlbSB2YXIoLS1sb2dvLWNvbG9yKSxcXG4gICAgaW5zZXQgMCAwIDEuM3JlbSB2YXIoLS1sb2dvLWNvbG9yKTtcXG59XFxuXFxuQGtleWZyYW1lcyBwdWxzYXRlVGV4dCB7XFxuICAxMDAlIHtcXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA0cHggI2ZmZiwgMCAwIDExcHggI2ZmZiwgMCAwIDE5cHggI2ZmZixcXG4gICAgICAwIDAgMjBweCB2YXIoLS1sb2dvLWNvbG9yKSwgMCAwIDQwcHggdmFyKC0tbG9nby1jb2xvciksXFxuICAgICAgMCAwIDQwcHggdmFyKC0tbG9nby1jb2xvciksIDAgMCAxMDBweCB2YXIoLS1sb2dvLWNvbG9yKSxcXG4gICAgICAwIDAgMTEwcHggdmFyKC0tbG9nby1jb2xvcik7XFxuICB9XFxuXFxuICAwJSB7XFxuICAgIHRleHQtc2hhZG93OiAwIDAgMnB4ICNmZmYsIDAgMCA0cHggI2ZmZiwgMCAwIDZweCAjZmZmLFxcbiAgICAgIDAgMCAxMHB4IHZhcigtLWxvZ28tY29sb3IpLCAwIDAgNDVweCB2YXIoLS1sb2dvLWNvbG9yKSxcXG4gICAgICAwIDAgNDVweCB2YXIoLS1sb2dvLWNvbG9yKSwgMCAwIDcwcHggdmFyKC0tbG9nby1jb2xvciksXFxuICAgICAgMCAwIDgwcHggdmFyKC0tbG9nby1jb2xvcik7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgcHVsc2F0ZUJveFNoYWRvdyB7XFxuICAxMDAlIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDAuMnJlbSAjZmZmLCAwIDAgMC4ycmVtICNmZmYsIDAgMCAycmVtIHZhcigtLWxvZ28tY29sb3IpLFxcbiAgICAgIDAgMCAwLjhyZW0gdmFyKC0tbG9nby1jb2xvciksIDAgMCAyLjhyZW0gdmFyKC0tbG9nby1jb2xvciksXFxuICAgICAgaW5zZXQgMCAwIDEuM3JlbSB2YXIoLS1sb2dvLWNvbG9yKTtcXG4gIH1cXG5cXG4gIDAlIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDAuM3JlbSAjZmZmLCAwIDAgMC4zcmVtICNmZmYsIDAgMCAzcmVtIHZhcigtLWxvZ28tY29sb3IpLFxcbiAgICAgIDAgMCAwLjlyZW0gdmFyKC0tbG9nby1jb2xvciksIDAgMCAyLjJyZW0gdmFyKC0tbG9nby1jb2xvciksXFxuICAgICAgaW5zZXQgMCAwIDEuM3JlbSB2YXIoLS1sb2dvLWNvbG9yKTtcXG4gIH1cXG59XFxuXFxuI2NvbnRlbnQuaG9tZSBoMyB7XFxuICBmb250LXNpemU6IDM2cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAvKiBvdXRsaW5lOiAxcHggc29saWQgeWVsbG93OyAqL1xcbn1cXG5cXG4jY29udGVudC5ob21lIGgzID4gYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tbG9nby1jb2xvcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNjb250ZW50LmhvbWUgPiBoMyA+IGE6aG92ZXIge1xcbiAgLS1sb2dvLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2NvbnRlbnQuaG9tZSAuY2FyZC1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICAvKiBoZWlnaHQ6IDEwMHB4OyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC8qIG91dGxpbmU6MXB4IHNvbGlkIHdoaXRlc21va2U7ICovXFxufVxcblxcbiNjb250ZW50LmhvbWUgLmNhcmQge1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNjb250ZW50LmhvbWUgLmNhcmQtaW1hZ2Uge1xcbiAgaGVpZ2h0OiA2MCU7XFxuICAvKiBvdXRsaW5lOiAxcHggc29saWQgcmVkOyAqL1xcbn1cXG5cXG4jY29udGVudC5ob21lIC5jYXJkLWltYWdlID4gaW1nIHtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNjb250ZW50LmhvbWUgLmNhcmQtdGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyN3B4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG59XFxuXFxuI2NvbnRlbnQuaG9tZSAuY2FyZC10aXRsZTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tbG9nby1jb2xvcik7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XFxuICAjY29udGVudC5ob21lIC5jYXJkLWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxufVxcblxcbi8qIE1FTlUgKi9cXG5cXG4ubWVudS1jb250YWluZXIge1xcbiAgcGFkZGluZzogMnJlbSAycmVtIDVyZW07XFxufVxcblxcbi5tZW51LXRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1sb2dvLWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5tZW51LXN1Yi1jb250YWluZXIge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAycmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWVudS1pbmdyZWRpZW50cyB7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICB3aWR0aDogbWF4KDYwJSwgMzAwcHgpO1xcbn1cXG5cXG4ubWVudS1saW5lIHtcXG4gIGhlaWdodDogMDtcXG4gIHdpZHRoOiBjbGFtcCgyMHB4LCAxMCUsIDEwMHB4KTtcXG4gIGJvcmRlci10b3A6IDRweCBkb3R0ZWQgd2hpdGU7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLm1lbnUtY29zdCB7XFxuICB3aWR0aDogMjAlO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9vdGVyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9vdGVyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyoqXG4gKiBDcmVhdGVzIGFuZCByZXR1cm5zIGFuIEhUTUwgZWxlbWVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIEhUTUwgdHlwZSA6IGRpdiwgbmF2LCB1bCwgLi4uXG4gKiBAcGFyYW0ge3N0cmluZ30gaWQgSFRNTCBJRFxuICogQHBhcmFtIHtbc3RyaW5nXX0gQ2xhc3Nlc1xuICogQHBhcmFtIHtzdHJpbmd9IHR4dFxuICogQHBhcmFtIHtbSFRNTEVsZW1lbnRdfSBDaGlsZHJlbnMgSFRNTCBlbGVtZW50cyB3aGljaCBtdXN0IGJlIGFwcGVuZGVkIHRvIG5ld2x5IGNyZWF0ZWQgZWxlbWVudFxuICogQHJldHVybnMge0hUTUxFbGVtZW50fSBIVE1MIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUh0bWxFbGVtZW50KHR5cGUsIGlkLCBDbGFzc2VzLCB0eHQsIENoaWxkcmVucykge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcblxuICBpZiAoaWQpIGVsZW1lbnQuaWQgPSBpZDtcblxuICBpZiAoQ2xhc3NlcykgQ2xhc3Nlcy5mb3JFYWNoKChjbGFzc05hbWUpID0+IGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpKTtcblxuICBpZiAodHh0KSBlbGVtZW50LnRleHRDb250ZW50ID0gdHh0O1xuXG4gIGlmIChDaGlsZHJlbnMpIHtcbiAgICBDaGlsZHJlbnMuZm9yRWFjaCgoY2hpbGQpID0+IGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpKTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG4vKiogUmV0dXJucyBgPGltZz48L2ltZz5gIHdpdGggc29tZSBvcHRpb25hbCBwYXJhbWV0ZXJzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzcmMgc291cmNlIHBhdGhcbiAqIEBwYXJhbSB7c3RyaW5nfSBhbHQgYWx0ZXJuYXRpdmUgdGV4dFxuICogQHBhcmFtIHtbc3RyaW5nXX0gQ2xhc3NlcyBhcnJheSBvZiBjbGFzc2VzXG4gKiBAcGFyYW0ge1tIVE1MRWxlbWVudF19IENoaWxkcmVucyBhcnJheSBvZiBIVE1MIGNoaWxkcmVuXG4gKiBAcmV0dXJucyBJbWFnZSBlbGVtZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbWdFbGVtZW50KHNyYywgYWx0LCBDbGFzc2VzLCBDaGlsZHJlbnMpIHtcbiAgY29uc3QgSW1nID0gbmV3IEltYWdlKCk7XG4gIGlmIChzcmMpIEltZy5zcmMgPSBzcmM7XG4gIGlmIChhbHQpIEltZy5hbHQgPSBhbHQ7XG5cbiAgaWYgKENsYXNzZXMpXG4gICAgYXJyYXlDbGFzc2VzLmZvckVhY2goKGNsYXNzTmFtZSkgPT4gSW1nLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSk7XG5cbiAgaWYgKENoaWxkcmVucykge1xuICAgIENoaWxkcmVucy5mb3JFYWNoKChjaGlsZCkgPT4gSW1nLmFwcGVuZENoaWxkKGNoaWxkKSk7XG4gIH1cblxuICByZXR1cm4gSW1nO1xufVxuIiwiaW1wb3J0IGJvdHRsZUltZyBmcm9tIFwiLi9hc3NldHMvYm90dGxlYW5kZ2xhc3MuZ2lmXCI7XG5pbXBvcnQgZGFuY2VJbWcgZnJvbSBcIi4vYXNzZXRzL2RhbmNpbmd3b21lbi5naWZcIjtcbmltcG9ydCBwaWxsSW1nIGZyb20gXCIuL2Fzc2V0cy9yb3RhdGluZ3BpbGwuZ2lmXCI7XG5cbmltcG9ydCB7IGNyZWF0ZUh0bWxFbGVtZW50LCBjcmVhdGVJbWdFbGVtZW50IH0gZnJvbSBcIi4vaGVscGVyXCI7XG5cbmV4cG9ydCBjb25zdCBIb21lUGFnZUZhY3RvcnkgPSAoY29udGVudCkgPT4ge1xuICBmdW5jdGlvbiBjYXJkKHRpdGxlLCBzcmMsIGFsdCkge1xuICAgIHJldHVybiB7IHRpdGxlLCBzcmMsIGFsdCB9O1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkbG9nbygpIHtcbiAgICBjb25zdCBsb2dvID0gXCJNdWcgc2hvdCBQdWJcIjtcbiAgICBjb25zdCBoZWFkaW5nID0gY3JlYXRlSHRtbEVsZW1lbnQoXCJoMVwiLCBudWxsLCBbXCJuZW9uVGV4dFwiXSwgbG9nbywgbnVsbCk7XG4gICAgY29uc3QgbG9nb0NvbnRhaW5lciA9IGNyZWF0ZUh0bWxFbGVtZW50KFwiZGl2XCIsIG51bGwsIFtcImxvZ29cIl0sIG51bGwsIFtcbiAgICAgIGhlYWRpbmcsXG4gICAgXSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChsb2dvQ29udGFpbmVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZEluZm8oKSB7XG4gICAgY29uc3QgdDEgPSBjcmVhdGVIdG1sRWxlbWVudChcInNwYW5cIiwgbnVsbCwgbnVsbCwgYCBvdmVyIDE4J3Mgb25seWAsIG51bGwpO1xuICAgIGNvbnN0IGFuY2hvciA9IGNyZWF0ZUh0bWxFbGVtZW50KFwiYVwiLCBudWxsLCBudWxsLCBcImJvb2sgaGVyZVwiLCBudWxsKTtcbiAgICBhbmNob3IuaHJlZiA9IFwiI1wiO1xuICAgIGNvbnN0IGhlYWRpbmcgPSBjcmVhdGVIdG1sRWxlbWVudChcImgzXCIsIG51bGwsIG51bGwsIG51bGwsIFthbmNob3IsIHQxXSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZENhcmRzKENhcmRzKSB7XG4gICAgY29uc3QgY2FyZHNDb250YWluZXIgPSBjcmVhdGVIdG1sRWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICBudWxsLFxuICAgICAgW1wiY2FyZC1jb250YWluZXJcIl0sXG4gICAgICBudWxsLFxuICAgICAgbnVsbFxuICAgICk7XG5cbiAgICBDYXJkcy5mb3JFYWNoKChjYXJkT2JqKSA9PiB7XG4gICAgICBjb25zdCBjYXJkSW1nID0gY3JlYXRlSW1nRWxlbWVudChjYXJkT2JqLnNyYywgY2FyZE9iai5hbHQsIG51bGwsIG51bGwpO1xuXG4gICAgICBjb25zdCBjYXJkSW1nQ29udGFpbmVyID0gY3JlYXRlSHRtbEVsZW1lbnQoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIG51bGwsXG4gICAgICAgIFtcImNhcmQtaW1hZ2VcIl0sXG4gICAgICAgIG51bGwsXG4gICAgICAgIFtjYXJkSW1nXVxuICAgICAgKTtcblxuICAgICAgY29uc3QgY2FyZFRpdGxlID0gY3JlYXRlSHRtbEVsZW1lbnQoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIG51bGwsXG4gICAgICAgIFtcImNhcmQtdGl0bGVcIl0sXG4gICAgICAgIGNhcmRPYmoudGl0bGUsXG4gICAgICAgIG51bGxcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGNhcmQgPSBjcmVhdGVIdG1sRWxlbWVudChcImRpdlwiLCBudWxsLCBbXCJjYXJkXCJdLCBudWxsLCBbXG4gICAgICAgIGNhcmRJbWdDb250YWluZXIsXG4gICAgICAgIGNhcmRUaXRsZSxcbiAgICAgIF0pO1xuXG4gICAgICBjYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICB9KTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY2FyZHNDb250YWluZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGlzcGxheSgpIHtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJob21lXCIpO1xuICAgIGxldCBDYXJkcyA9IFtcbiAgICAgIGNhcmQoXCJkcmlua3NcIiwgYm90dGxlSW1nLCBcIkEgZ2lmIG9mIGEgYm90dGxlIGFuZCBhIGdsYXNzXCIpLFxuICAgICAgY2FyZChcImRydWdzXCIsIHBpbGxJbWcsIFwiQSBnaWYgb2YgYSBwaWxsIHJvdGF0aW5nIGNsb2Nrd2lzZVwiKSxcbiAgICAgIGNhcmQoXCJkYW5jZVwiLCBkYW5jZUltZywgXCJBIGdpZiBvZiA0IGxvdmVseSB3b21lbiBkYW5jaW5nXCIpLFxuICAgIF07XG5cbiAgICBhZGRsb2dvKCk7XG4gICAgYWRkSW5mbygpO1xuICAgIGFkZENhcmRzKENhcmRzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJob21lXCIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoM1wiKS5yZW1vdmUoKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvZ29cIikucmVtb3ZlKCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkLWNvbnRhaW5lclwiKS5yZW1vdmUoKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZGlzcGxheSxcbiAgICByZW1vdmUsXG4gIH07XG59O1xuIiwiaW1wb3J0IHsgY3JlYXRlSHRtbEVsZW1lbnQgfSBmcm9tIFwiLi9oZWxwZXJcIjtcblxuY29uc3QgTWVudVBhZ2VGYWN0b3J5ID0gKGNvbnRlbnQpID0+IHtcbiAgZnVuY3Rpb24gbWVudUl0ZW0odGl0bGUsIGluZ3JlZGllbnRzLCBjb3N0KSB7XG4gICAgcmV0dXJuIHsgdGl0bGUsIGluZ3JlZGllbnRzLCBjb3N0IH07XG4gIH1cblxuICBmdW5jdGlvbiBhZGRNZW51SXRlbXMobWVudSkge1xuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBjcmVhdGVIdG1sRWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICBudWxsLFxuICAgICAgW1wibWVudS1jb250YWluZXJcIl0sXG4gICAgICBudWxsLFxuICAgICAgbnVsbFxuICAgICk7XG5cbiAgICBtZW51LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IG1lbnVUaXRsZSA9IGNyZWF0ZUh0bWxFbGVtZW50KFxuICAgICAgICBcImgzXCIsXG4gICAgICAgIG51bGwsXG4gICAgICAgIFtcIm1lbnUtdGl0bGVcIl0sXG4gICAgICAgIGl0ZW0udGl0bGUsXG4gICAgICAgIG51bGxcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IG1lbnVJbmdyZWRpZW50cyA9IGNyZWF0ZUh0bWxFbGVtZW50KFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBudWxsLFxuICAgICAgICBbXCJtZW51LWluZ3JlZGllbnRzXCJdLFxuICAgICAgICBpdGVtLmluZ3JlZGllbnRzLFxuICAgICAgICBudWxsXG4gICAgICApO1xuXG4gICAgICBjb25zdCBtZW51UHJpY2UgPSBjcmVhdGVIdG1sRWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgbnVsbCxcbiAgICAgICAgW1wibWVudS1jb3N0XCJdLFxuICAgICAgICBpdGVtLmNvc3QsXG4gICAgICAgIG51bGxcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGxpbmUgPSBjcmVhdGVIdG1sRWxlbWVudChcImhyXCIsIG51bGwsIFtcIm1lbnUtbGluZVwiXSwgbnVsbCwgbnVsbCk7XG5cbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUh0bWxFbGVtZW50KFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBudWxsLFxuICAgICAgICBbXCJtZW51LXN1Yi1jb250YWluZXJcIl0sXG4gICAgICAgIG51bGwsXG4gICAgICAgIFttZW51SW5ncmVkaWVudHMsIGxpbmUsIG1lbnVQcmljZV1cbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGNhcmQgPSBjcmVhdGVIdG1sRWxlbWVudChcImRpdlwiLCBudWxsLCBbXCJtZW51LWNhcmRcIl0sIG51bGwsIFtcbiAgICAgICAgbWVudVRpdGxlLFxuICAgICAgICBjb250YWluZXIsXG4gICAgICBdKTtcbiAgICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgfSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc3BsYXkoKSB7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcbiAgICBsZXQgbWVudSA9IFtcbiAgICAgIG1lbnVJdGVtKFxuICAgICAgICBcImJlbmVkaWN0XCIsXG4gICAgICAgIFwiZWdncywgaG9sbGFuZGFpc2UsIGJhY29uLCBoYW0sIHNtb2tlZCBjaGVlc2VcIixcbiAgICAgICAgXCIkMTIuNTBcIlxuICAgICAgKSxcbiAgICAgIG1lbnVJdGVtKFxuICAgICAgICBcImNoaWNrZW5cIixcbiAgICAgICAgXCJjaGlja2VuLCBob2xsYW5kYWlzZSwgYmFjb24sIGhhbSwgc21va2VkIGNoZWVzZVwiLFxuICAgICAgICBcIiQxNi45NVwiXG4gICAgICApLFxuICAgICAgbWVudUl0ZW0oXG4gICAgICAgIFwiamVyayBzYW5kd2ljaFwiLFxuICAgICAgICBcImphbWFpY2FuIGplcmsgY2hpY2tlbiwgYXZvY2FkbywgZ3JpbGxlZCBwaW5lYXBwbGUsIHJvYXN0ZWQgcmVkIHBlcHBlciwgbWF5b1wiLFxuICAgICAgICBcIiQxNi45NVwiXG4gICAgICApLFxuICAgICAgbWVudUl0ZW0oXG4gICAgICAgIFwic2FsYWQgYm9hcmRcIixcbiAgICAgICAgXCJjcmlzcHkgdGVyaXlha2kgYXViZXJnaW5lLCBwaWNrbGVkIHdhdGVybWVsb24sIG1peGVkIGJlcnJpZXMsIGNhdWxpZmxvd2VyXCIsXG4gICAgICAgIFwiJDUuODVcIlxuICAgICAgKSxcbiAgICAgIG1lbnVJdGVtKFwiZHJ1Z2dpZVwiLCBcInB1cmUgY29jYWluZSwgd2F0ZXJtZWxvbiwgY29jb251dFwiLCBcIiQ2OS44NVwiKSxcbiAgICBdO1xuXG4gICAgYWRkTWVudUl0ZW1zKG1lbnUpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZShcIm1lbnVcIik7XG4gICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1jb250YWluZXJcIik7XG4gICAgbWVudUNvbnRhaW5lci5yZW1vdmUoKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZGlzcGxheSxcbiAgICByZW1vdmUsXG4gIH07XG59O1xuXG5leHBvcnQgeyBNZW51UGFnZUZhY3RvcnkgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vaW1wb3J0IHN0eWxlc1xuaW1wb3J0IFwiLi9yZXNldC5jc3NcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgXCIuL2Zvb3Rlci5jc3NcIjtcblxuaW1wb3J0IGhhbUJ1cmdlclN2ZyBmcm9tIFwiLi9hc3NldHMvbWVudS5zdmdcIjtcblxuaW1wb3J0IHsgY3JlYXRlSHRtbEVsZW1lbnQsIGNyZWF0ZUltZ0VsZW1lbnQgfSBmcm9tIFwiLi9oZWxwZXJcIjtcbmltcG9ydCB7IEhvbWVQYWdlRmFjdG9yeSB9IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCB7IE1lbnVQYWdlRmFjdG9yeSB9IGZyb20gXCIuL21lbnVcIjtcblxuY29uc3QgbG9hZCA9ICgoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gIGNvbnN0IGhvbWVQYWdlID0gSG9tZVBhZ2VGYWN0b3J5KGNvbnRlbnQpO1xuICBjb25zdCBtZW51UGFnZSA9IE1lbnVQYWdlRmFjdG9yeShjb250ZW50KTtcblxuICBjb25zdCBUYWJOYW1lcyA9IFtcIkhPTUVcIiwgXCJNRU5VXCIsIFwiR0FMTEVSWVwiLCBcIkNPTlRBQ1RcIiwgXCJCT09LXCJdO1xuICAvLyBsZXQgY3VycmVudFRhYiA9IFwiSE9NRVwiO1xuICBsZXQgY3VycmVudFRhYiA9IFwiTUVOVVwiO1xuXG4gIGZ1bmN0aW9uIGFkZE5hdkJhcigpIHtcbiAgICBjb25zdCB1bm9yZGVyZWRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIGNvbnN0IGNhcmRJbWcgPSBuZXcgSW1hZ2UoMzAsIDMwKTtcbiAgICBjYXJkSW1nLnNyYyA9IGhhbUJ1cmdlclN2ZztcbiAgICBjYXJkSW1nLmFsdCA9IFwibWVudSBpY29uXCI7XG4gICAgY29uc3QgdG9nZ2xlQnRuID0gY3JlYXRlSHRtbEVsZW1lbnQoXCJsaVwiLCBudWxsLCBbXCJ0b2dnbGUtbmF2LWJhclwiXSwgbnVsbCwgW1xuICAgICAgY2FyZEltZyxcbiAgICBdKTtcbiAgICB1bm9yZGVyZWRMaXN0LmFwcGVuZENoaWxkKHRvZ2dsZUJ0bik7XG4gICAgVGFiTmFtZXMuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgICB1bm9yZGVyZWRMaXN0LmFwcGVuZENoaWxkKGNyZWF0ZUh0bWxFbGVtZW50KFwibGlcIiwgbnVsbCwgbnVsbCwgdGFiLCBudWxsKSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBuYXZCYXIgPSBjcmVhdGVIdG1sRWxlbWVudChcIm5hdlwiLCBudWxsLCBbXCJuYXZcIl0sIG51bGwsIFtcbiAgICAgIHVub3JkZXJlZExpc3QsXG4gICAgXSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChuYXZCYXIpO1xuXG4gICAgY29uc3QgVGFiRWxlbWVudHMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYgbGlcIildO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgVGFiRWxlbWVudHMubGVuZ3RoOyArK2kpIHtcbiAgICAgIFRhYkVsZW1lbnRzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzd2l0Y2hUYWIpO1xuICAgIH1cblxuICAgIHRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlTmF2KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZU5hdigpIHtcbiAgICBjb25zdCB1bm9yZGVyZWRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInVsXCIpO1xuICAgIHVub3JkZXJlZExpc3QuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XG4gIH1cblxuICBmdW5jdGlvbiBzd2l0Y2hUYWIoZSkge1xuICAgIGNvbnN0IG5ld1RhYiA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xuICAgIGlmIChuZXdUYWIgPT0gY3VycmVudFRhYikgcmV0dXJuO1xuXG4gICAgLy9yZW1vdmUgY3VycmVudCB0YWJcbiAgICBpZiAoY3VycmVudFRhYiA9PSBcIkhPTUVcIikgaG9tZVBhZ2UucmVtb3ZlKCk7XG4gICAgZWxzZSBpZiAoY3VycmVudFRhYiA9PSBcIk1FTlVcIikgbWVudVBhZ2UucmVtb3ZlKCk7XG4gICAgZWxzZSBpZiAoY3VycmVudFRhYiA9PSBcIkdBTExFUllcIik7XG4gICAgZWxzZSBpZiAoY3VycmVudFRhYiA9PSBcIkNPTlRBQ1RcIik7XG4gICAgZWxzZSBpZiAoY3VycmVudFRhYiA9PSBcIkJPT0tcIik7XG5cbiAgICAvL2NoYW5nZSBjb2xvciBpbiBuYXYgYmFyXG4gICAgY29sb3JOYXZCYXIobmV3VGFiKTtcblxuICAgIC8vbG9hZCBuZXcgdGFiXG4gICAgaWYgKG5ld1RhYiA9PSBcIkhPTUVcIikge1xuICAgICAgaG9tZVBhZ2UuZGlzcGxheSgpO1xuICAgIH0gZWxzZSBpZiAobmV3VGFiID09IFwiTUVOVVwiKSB7XG4gICAgICBtZW51UGFnZS5kaXNwbGF5KCk7XG4gICAgfSBlbHNlIGlmIChuZXdUYWIgPT0gXCJHQUxMRVJZXCIpIHtcbiAgICAgIC8vIGdhbGxlcnlQYWdlLmRpc3BsYXkoKTtcbiAgICB9IGVsc2UgaWYgKG5ld1RhYiA9PSBcIkNPTlRBQ1RcIikge1xuICAgICAgLy8gZ2FsbGVyeVBhZ2UuZGlzcGxheSgpO1xuICAgIH0gZWxzZSBpZiAobmV3VGFiID09IFwiQk9PS1wiKSB7XG4gICAgICAvLyBnYWxsZXJ5UGFnZS5kaXNwbGF5KCk7XG4gICAgfVxuXG4gICAgY3VycmVudFRhYiA9IG5ld1RhYjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbG9yTmF2QmFyKHRhYikge1xuICAgIGxldCBpbmRleCA9IFRhYk5hbWVzLmZpbmRJbmRleCgoZWwpID0+IHtcbiAgICAgIHJldHVybiBlbCA9PSB0YWI7XG4gICAgfSk7XG4gICAgY29uc3QgdGFiRWxlbWVudHMgPSBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJuYXZcIilcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCdsaTpub3QoW2NsYXNzKj1cInRvZ2dsZS1uYXYtYmFyXCJdJyk7XG4gICAgLy9jaGFuZ2UgY2xhc3Mgb2YgYWxsIHRhYnNcbiAgICB0YWJFbGVtZW50cy5mb3JFYWNoKCh0KSA9PiB7XG4gICAgICB0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfSk7XG4gICAgLy9jaGFuZ2UgY2xhc3Mgb2Ygc2VsZWN0ZWQgdGFiXG4gICAgdGFiRWxlbWVudHNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIH1cblxuICBhZGROYXZCYXIoKTtcbiAgLy8gY29sb3JOYXZCYXIoXCJIT01FXCIpO1xuICBjb2xvck5hdkJhcihcIk1FTlVcIik7XG4gIC8vIGhvbWVQYWdlLmRpc3BsYXkoKTtcbiAgbWVudVBhZ2UuZGlzcGxheSgpO1xuXG4gIGNvbnN0IGZvb3RlciA9IGNyZWF0ZUh0bWxFbGVtZW50KFwiZm9vdGVyXCIsIG51bGwsIFtcImZvb3RlclwiXSwgbnVsbCwgbnVsbCk7XG4gIGZvb3Rlci5pbm5lckhUTUwgPSBgPHA+Q29weXJpZ2h0ICZjb3B5OzxzY3JpcHQ+ZG9jdW1lbnQud3JpdGUobmV3IERhdGUoKS5nZXRGdWxsWWVhcigpKTs8L3NjcmlwdD5hcmdvbi0zNDY3PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9hcmdvbi0zNDY3XCI+PGkgY2xhc3M9XCJmYS1icmFuZHMgZmEtZ2l0aHViXCI+PC9pPjwvYT48L3A+YDtcbiAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xufSkoKTtcblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==