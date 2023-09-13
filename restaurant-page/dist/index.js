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

/*GALLERY*/

.gallery-container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  padding: 2rem;
}

.img-container {
  overflow: hidden;
}

.img-container img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: 1s;
  &:hover {
    transform: scale(1.25);
  }
}

.more-img-btn {
  font-size: 2rem;
  display: block;
  text-align: center;
  width: min-content;
  margin: 0 auto;
  padding: 0 0 5rem;
  transition: 0.3s;
}

.more-img-btn:active {
  color: #ef227d;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;EACvB,4CAAiC;AACnC;;AAEA;EACE,qBAAqB;EACrB,4CAAwC;AAC1C;;AAEA;EACE,qBAAqB;EACrB,0BAA0B;EAC1B,2BAA2B;EAC3B,+BAA+B;AACjC;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,0CAA0C;EAC1C,cAAc;EACd,YAAY;EACZ,uBAAuB;EACvB,6CAA6C;EAC7C,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA,WAAW;;AAEX;EACE,aAAa;EACb,uBAAuB;EACvB,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,qBAAqB;EACrB,aAAa;EACb,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE;IACE,gBAAgB;IAChB,MAAM;IACN,gBAAgB;EAClB;;EAEA;IACE,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,2BAA2B;EAC7B;;EAEA;IACE,yBAAyB;IACzB,sBAAsB;EACxB;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,cAAc;EAChB;AACF;;AAEA,SAAS;;AAET;EACE,YAAY;EACZ,UAAU;EACV,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,eAAe;EACf;;;4DAG0D;AAC5D;;AAEA;EACE,qBAAqB;EACrB,8EAA8E;EAC9E,yBAAyB;EACzB,mBAAmB;EACnB,cAAc;EACd;;sCAEoC;AACtC;;AAEA;EACE;IACE;;;iCAG6B;EAC/B;;EAEA;IACE;;;gCAG4B;EAC9B;AACF;;AAEA;EACE;IACE;;wCAEoC;EACtC;;EAEA;IACE;;wCAEoC;EACtC;AACF;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,+BAA+B;AACjC;;AAEA;EACE,qBAAqB;EACrB,wBAAwB;EACxB,eAAe;AACjB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,mBAAmB;EACnB,aAAa;EACb,kCAAkC;AACpC;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,4BAA4B;AAC9B;;AAEA;EACE,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE;IACE,sBAAsB;EACxB;AACF;;AAEA,SAAS;;AAET;EACE,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,wBAAwB;EACxB,eAAe;EACf,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,SAAS;EACT,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,SAAS;EACT,8BAA8B;EAC9B,4BAA4B;EAC5B,cAAc;AAChB;;AAEA;EACE,UAAU;EACV,eAAe;AACjB;;AAEA,UAAU;;AAEV;EACE,WAAW;EACX,aAAa;EACb,2DAA2D;EAC3D,SAAS;EACT,aAAa;AACf;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,YAAY;EACZ,cAAc;EACd;IACE,sBAAsB;EACxB;AACF;;AAEA;EACE,eAAe;EACf,cAAc;EACd,kBAAkB;EAClB,kBAAkB;EAClB,cAAc;EACd,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,cAAc;AAChB","sourcesContent":["@font-face {\n  font-family: \"marqueem\";\n  src: url(\"./assets/marqueem.ttf\");\n}\n\n@font-face {\n  font-family: \"Oswald\";\n  src: url(\"./assets/Oswald-SemiBold.ttf\");\n}\n\n:root {\n  --logo-color: #ef227d;\n  --logo-border-color: white;\n  --selected-tab-color: white;\n  --unselected-tab-color: #bfbfbf;\n}\n\nbody {\n  background-color: black;\n}\n\n#content {\n  width: clamp(min(425px, 100%), 90%, 900px);\n  margin: 0 auto;\n  color: white;\n  font-family: \"marqueem\";\n  box-shadow: 0px 0px 8px 0px var(--logo-color);\n  min-height: 100vh;\n  position: relative;\n}\n\n/* NAV BAR*/\n\nnav.nav ul {\n  display: flex;\n  justify-content: center;\n  background-color: #cd116b;\n}\n\nnav.nav ul li {\n  color: white;\n  padding: 10px 30px;\n  font-family: \"Oswald\";\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\nnav.nav ul li.active {\n  background-color: var(--logo-color);\n}\n\nnav.nav ul li.toggle-nav-bar {\n  display: none;\n}\n\n@media screen and (max-width: 600px) {\n  nav.nav {\n    position: sticky;\n    top: 0;\n    min-height: 55px;\n  }\n\n  nav.nav ul {\n    position: absolute;\n    height: 100vh;\n    background-color: unset;\n    justify-content: flex-start;\n  }\n\n  nav.nav ul.show {\n    background-color: #cd116b;\n    flex-direction: column;\n  }\n\n  nav.nav ul li.toggle-nav-bar {\n    display: unset;\n  }\n\n  nav.nav ul li {\n    display: none;\n  }\n\n  nav.nav ul.show li {\n    display: unset;\n  }\n}\n\n/* HOME */\n\n#content.home .logo {\n  color: white;\n  width: 70%;\n  margin: 3rem auto;\n  text-align: center;\n}\n\n#content.home .neonText {\n  font-family: \"Oswald\";\n  font-size: 5rem;\n  text-shadow: 0 0 7px var(--logo-color), 0 0 10px var(--logo-color),\n    0 0 21px var(--logo-color), 0 0 42px var(--logo-color),\n    0 0 82px var(--logo-color), 0 0 92px var(--logo-color),\n    0 0 102px var(--logo-color), 0 0 151px var(--logo-color);\n}\n\n#content.home .logo h1 {\n  /* font-size: 4rem; */\n  animation: pulsateText 0.5s infinite alternate, pulsateBoxShadow 0.5s infinite;\n  border: 0.2rem solid #fff;\n  border-radius: 10px;\n  padding: 0.4em;\n  box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem var(--logo-color),\n    0 0 0.8rem var(--logo-color), 0 0 2.8rem var(--logo-color),\n    inset 0 0 1.3rem var(--logo-color);\n}\n\n@keyframes pulsateText {\n  100% {\n    text-shadow: 0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff,\n      0 0 20px var(--logo-color), 0 0 40px var(--logo-color),\n      0 0 40px var(--logo-color), 0 0 100px var(--logo-color),\n      0 0 110px var(--logo-color);\n  }\n\n  0% {\n    text-shadow: 0 0 2px #fff, 0 0 4px #fff, 0 0 6px #fff,\n      0 0 10px var(--logo-color), 0 0 45px var(--logo-color),\n      0 0 45px var(--logo-color), 0 0 70px var(--logo-color),\n      0 0 80px var(--logo-color);\n  }\n}\n\n@keyframes pulsateBoxShadow {\n  100% {\n    box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem var(--logo-color),\n      0 0 0.8rem var(--logo-color), 0 0 2.8rem var(--logo-color),\n      inset 0 0 1.3rem var(--logo-color);\n  }\n\n  0% {\n    box-shadow: 0 0 0.3rem #fff, 0 0 0.3rem #fff, 0 0 3rem var(--logo-color),\n      0 0 0.9rem var(--logo-color), 0 0 2.2rem var(--logo-color),\n      inset 0 0 1.3rem var(--logo-color);\n  }\n}\n\n#content.home h3 {\n  font-size: 36px;\n  text-align: center;\n  /* outline: 1px solid yellow; */\n}\n\n#content.home h3 > a {\n  text-decoration: none;\n  color: var(--logo-color);\n  cursor: pointer;\n}\n\n#content.home > h3 > a:hover {\n  --logo-color: white;\n}\n\n#content.home .card-container {\n  width: 100%;\n  /* height: 100px; */\n  display: flex;\n  /* outline:1px solid whitesmoke; */\n}\n\n#content.home .card {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n#content.home .card-image {\n  height: 60%;\n  /* outline: 1px solid red; */\n}\n\n#content.home .card-image > img {\n  object-fit: contain;\n  width: 100%;\n  height: 100%;\n  max-height: 100%;\n}\n\n#content.home .card-title {\n  text-align: center;\n  font-size: 27px;\n  letter-spacing: 2px;\n}\n\n#content.home .card-title:hover {\n  color: var(--logo-color);\n}\n\n@media screen and (max-width: 425px) {\n  #content.home .card-container {\n    flex-direction: column;\n  }\n}\n\n/* MENU */\n\n.menu-container {\n  padding: 2rem 2rem 5rem;\n}\n\n.menu-title {\n  text-align: center;\n  color: var(--logo-color);\n  font-size: 2rem;\n  padding: 1rem;\n}\n\n.menu-sub-container {\n  font-size: 1.5rem;\n  display: flex;\n  gap: 2rem;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.menu-ingredients {\n  padding: 0.5rem;\n  width: max(60%, 300px);\n}\n\n.menu-line {\n  height: 0;\n  width: clamp(20px, 10%, 100px);\n  border-top: 4px dotted white;\n  margin: 0 auto;\n}\n\n.menu-cost {\n  width: 20%;\n  padding: 0.5rem;\n}\n\n/*GALLERY*/\n\n.gallery-container {\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1rem;\n  padding: 2rem;\n}\n\n.img-container {\n  overflow: hidden;\n}\n\n.img-container img {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n  transition: 1s;\n  &:hover {\n    transform: scale(1.25);\n  }\n}\n\n.more-img-btn {\n  font-size: 2rem;\n  display: block;\n  text-align: center;\n  width: min-content;\n  margin: 0 auto;\n  padding: 0 0 5rem;\n  transition: 0.3s;\n}\n\n.more-img-btn:active {\n  color: #ef227d;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/gallery.js":
/*!************************!*\
  !*** ./src/gallery.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GalleryPageFactory: () => (/* binding */ GalleryPageFactory)
/* harmony export */ });
/* harmony import */ var _assets_gallery_dancers_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/gallery/dancers.png */ "./src/assets/gallery/dancers.png");
/* harmony import */ var _assets_gallery_dj_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/gallery/dj.png */ "./src/assets/gallery/dj.png");
/* harmony import */ var _assets_gallery_food1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/gallery/food1.png */ "./src/assets/gallery/food1.png");
/* harmony import */ var _assets_gallery_food2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/gallery/food2.png */ "./src/assets/gallery/food2.png");
/* harmony import */ var _assets_gallery_people_eating_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/gallery/people-eating.png */ "./src/assets/gallery/people-eating.png");
/* harmony import */ var _assets_gallery_random_guy_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/gallery/random-guy.png */ "./src/assets/gallery/random-guy.png");
/* harmony import */ var _assets_gallery_resto_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/gallery/resto.png */ "./src/assets/gallery/resto.png");
/* harmony import */ var _assets_gallery_woman_in_white_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/gallery/woman-in-white.png */ "./src/assets/gallery/woman-in-white.png");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helper */ "./src/helper.js");
//import images from gallery folder











const GalleryPageFactory = (content) => {
  const gallery = (0,_helper__WEBPACK_IMPORTED_MODULE_8__.createHtmlElement)(
    "div",
    null,
    ["gallery-container"],
    null,
    null
  );

  let startIndex = 0;
  let Images = [];

  function getImgWithContainer(src, alt) {
    const cardImg = (0,_helper__WEBPACK_IMPORTED_MODULE_8__.createImgElement)(src, alt, null, null);
    const imgContainer = (0,_helper__WEBPACK_IMPORTED_MODULE_8__.createHtmlElement)(
      "div",
      null,
      ["img-container"],
      null,
      [cardImg]
    );
    return imgContainer;
  }

  function addImages(imageCount) {
    let FixedImages = [
      getImgWithContainer(
        _assets_gallery_resto_png__WEBPACK_IMPORTED_MODULE_6__,
        "A chinese restaurant with a neon sign outside"
      ),
      getImgWithContainer(
        _assets_gallery_dancers_png__WEBPACK_IMPORTED_MODULE_0__,
        "A group of dancers in poorly lit night club"
      ),
      getImgWithContainer(
        _assets_gallery_woman_in_white_png__WEBPACK_IMPORTED_MODULE_7__,
        "A woman in white posing seductively in a night club"
      ),
      getImgWithContainer(
        _assets_gallery_random_guy_png__WEBPACK_IMPORTED_MODULE_5__,
        "Portrait of a black guy in a night club"
      ),
      getImgWithContainer(_assets_gallery_food1_png__WEBPACK_IMPORTED_MODULE_2__, "A plate with eggs"),
      getImgWithContainer(_assets_gallery_dj_png__WEBPACK_IMPORTED_MODULE_1__, "A DJ in a nightclub"),
      getImgWithContainer(_assets_gallery_food2_png__WEBPACK_IMPORTED_MODULE_3__, "A plate filled with veggies"),
      getImgWithContainer(
        _assets_gallery_people_eating_png__WEBPACK_IMPORTED_MODULE_4__,
        "People sitting in a calm environment"
      ),
    ];

    Images = Images.concat(FixedImages);
    addMoreImages(imageCount - Images.length);
    addToGallery();
    content.appendChild(gallery);
  }

  function addMoreImages(toAdd) {
    let currentCount = Images.length;
    while (Images.length < currentCount + toAdd) {
      Images.push(
        getImgWithContainer(
          `https://source.unsplash.com/random/?nightclub&${Math.random()}`,
          "A random image from Unsplash with keyword nightclub"
        )
      );
    }
  }

  function addToGallery() {
    for (let i = startIndex; i < Images.length; ++i) {
      gallery.appendChild(Images[i]);
    }
  }

  function addMoreImagesBtn() {
    const btn = (0,_helper__WEBPACK_IMPORTED_MODULE_8__.createHtmlElement)(
      "button",
      null,
      ["more-img-btn"],
      "More",
      null
    );
    btn.addEventListener("click", () => {
      addMoreImages(5);
      addToGallery();
    });
    content.appendChild(btn);
  }

  function display() {
    content.classList.add("GALLERY");
    //add images
    addImages(8);
    addMoreImagesBtn();
  }

  function remove() {
    content.classList.remove("GALLERY");
    const gallery = document.querySelector(".gallery-container");
    const btn = document.querySelector(".more-img-btn");
    gallery.remove();
    btn.remove();
  }

  return {
    display,
    remove,
  };
};




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

/***/ "./src/assets/gallery/dancers.png":
/*!****************************************!*\
  !*** ./src/assets/gallery/dancers.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/70f6705cd6f1d34c6a47.png";

/***/ }),

/***/ "./src/assets/gallery/dj.png":
/*!***********************************!*\
  !*** ./src/assets/gallery/dj.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/0b450ce3da63bfa00ff6.png";

/***/ }),

/***/ "./src/assets/gallery/food1.png":
/*!**************************************!*\
  !*** ./src/assets/gallery/food1.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/65eef2ff33c007a48252.png";

/***/ }),

/***/ "./src/assets/gallery/food2.png":
/*!**************************************!*\
  !*** ./src/assets/gallery/food2.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/6f1513c7099511c88a47.png";

/***/ }),

/***/ "./src/assets/gallery/people-eating.png":
/*!**********************************************!*\
  !*** ./src/assets/gallery/people-eating.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/2e82c611bd19c066952d.png";

/***/ }),

/***/ "./src/assets/gallery/random-guy.png":
/*!*******************************************!*\
  !*** ./src/assets/gallery/random-guy.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/dadd30beb131f2d95387.png";

/***/ }),

/***/ "./src/assets/gallery/resto.png":
/*!**************************************!*\
  !*** ./src/assets/gallery/resto.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/8b6ac0bc060d2160ecab.png";

/***/ }),

/***/ "./src/assets/gallery/woman-in-white.png":
/*!***********************************************!*\
  !*** ./src/assets/gallery/woman-in-white.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/2183e12edde4d1ae9a1a.png";

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
/* harmony import */ var _gallery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gallery */ "./src/gallery.js");
//import styles











const load = (() => {
  const content = document.querySelector("#content");
  const homePage = (0,_home__WEBPACK_IMPORTED_MODULE_5__.HomePageFactory)(content);
  const menuPage = (0,_menu__WEBPACK_IMPORTED_MODULE_6__.MenuPageFactory)(content);
  const galleryPage = (0,_gallery__WEBPACK_IMPORTED_MODULE_7__.GalleryPageFactory)(content);

  const TabNames = ["HOME", "MENU", "GALLERY", "CONTACT", "BOOK"];
  let currentTab = "HOME";
  // let currentTab = "MENU";
  // let currentTab = "GALLERY";

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
    else if (currentTab == "GALLERY") galleryPage.remove();
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
      galleryPage.display();
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
  colorNavBar("HOME");
  // colorNavBar("MENU");
  // colorNavBar("GALLERY");
  homePage.display();
  // menuPage.display();
  // galleryPage.display();

  const footer = (0,_helper__WEBPACK_IMPORTED_MODULE_4__.createHtmlElement)("footer", null, ["footer"], null, null);
  footer.innerHTML = `<p>Copyright &copy;<script>document.write(new Date().getFullYear());</script>argon-3467<a href="https://github.com/argon-3467"><i class="fa-brands fa-github"></i></a></p>`;
  content.appendChild(footer);
})();

if (false) {}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFdBQVcsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxPQUFPLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxPQUFPLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxPQUFPLEtBQUssT0FBTyxPQUFPLE1BQU0sTUFBTSxLQUFLLEtBQUssTUFBTSxPQUFPLE9BQU8sS0FBSyxNQUFNLE9BQU8sTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxXQUFXLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLFdBQVcsS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZ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QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLDBEQUFpQjtBQUNsQyx5Q0FBeUMsaURBQWlEO0FBQzFGO0FBQ0EsQ0FBQzs7QUFFRCxJQUFJLEtBQVUsRUFBRSxFQUVmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Zvb3Rlci5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZm9vdGVyLmNzcz84MWQ3Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9yZXNldC5jc3M/ZWRlMCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZ2FsbGVyeS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVscGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBGT09URVIgKi9cbi5mb290ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmMjI3ZDtcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90byxcbiAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5mYS1naXRodWIge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5mYS1naXRodWI6aG92ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuMik7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9mb290ZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFdBQVc7QUFDWDtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLGFBQWE7RUFDYixlQUFlO0VBQ2YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6Qjt3RUFDc0U7QUFDeEU7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBGT09URVIgKi9cXG4uZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWYyMjdkO1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sXFxuICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uZmEtZ2l0aHViIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZmEtZ2l0aHViOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS4yKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKioqIFRoZSBuZXcgQ1NTIFJlc2V0IC0gdmVyc2lvbiAxLjIuMCAobGFzdCB1cGRhdGVkIDIzLjcuMjAyMSkgKioqL1xuXG4vKiBSZW1vdmUgYWxsIHRoZSBzdHlsZXMgb2YgdGhlIFwiVXNlci1BZ2VudC1TdHlsZXNoZWV0XCIsIGV4Y2VwdCBmb3IgdGhlICdkaXNwbGF5JyBwcm9wZXJ0eSAqL1xuKjp3aGVyZSg6bm90KGlmcmFtZSwgY2FudmFzLCBpbWcsIHN2ZywgdmlkZW8pOm5vdChzdmcgKikpIHtcbiAgYWxsOiB1bnNldDtcbiAgZGlzcGxheTogcmV2ZXJ0O1xufVxuXG4vKiBQcmVmZXJyZWQgYm94LXNpemluZyB2YWx1ZSAqL1xuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLypcbiAgUmVtb3ZlIGxpc3Qgc3R5bGVzIChidWxsZXRzL251bWJlcnMpXG4gIGluIGNhc2UgeW91IHVzZSBpdCB3aXRoIG5vcm1hbGl6ZS5jc3NcbiovXG5vbCxcbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLyogRm9yIGltYWdlcyB0byBub3QgYmUgYWJsZSB0byBleGNlZWQgdGhlaXIgY29udGFpbmVyICovXG5pbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi8qIFJlbW92ZXMgc3BhY2luZyBiZXR3ZWVuIGNlbGxzIGluIHRhYmxlcyAqL1xudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG4vKiBSZXZlcnQgdGhlICd3aGl0ZS1zcGFjZScgcHJvcGVydHkgZm9yIHRleHRhcmVhIGVsZW1lbnRzIG9uIFNhZmFyaSAqL1xudGV4dGFyZWEge1xuICB3aGl0ZS1zcGFjZTogcmV2ZXJ0O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLG1FQUFtRTs7QUFFbkUsNEZBQTRGO0FBQzVGO0VBQ0UsVUFBVTtFQUNWLGVBQWU7QUFDakI7O0FBRUEsK0JBQStCO0FBQy9COzs7RUFHRSxzQkFBc0I7QUFDeEI7O0FBRUE7OztDQUdDO0FBQ0Q7O0VBRUUsZ0JBQWdCO0FBQ2xCOztBQUVBLHdEQUF3RDtBQUN4RDtFQUNFLGVBQWU7QUFDakI7O0FBRUEsNENBQTRDO0FBQzVDO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLHNFQUFzRTtBQUN0RTtFQUNFLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKioqIFRoZSBuZXcgQ1NTIFJlc2V0IC0gdmVyc2lvbiAxLjIuMCAobGFzdCB1cGRhdGVkIDIzLjcuMjAyMSkgKioqL1xcblxcbi8qIFJlbW92ZSBhbGwgdGhlIHN0eWxlcyBvZiB0aGUgXFxcIlVzZXItQWdlbnQtU3R5bGVzaGVldFxcXCIsIGV4Y2VwdCBmb3IgdGhlICdkaXNwbGF5JyBwcm9wZXJ0eSAqL1xcbio6d2hlcmUoOm5vdChpZnJhbWUsIGNhbnZhcywgaW1nLCBzdmcsIHZpZGVvKTpub3Qoc3ZnICopKSB7XFxuICBhbGw6IHVuc2V0O1xcbiAgZGlzcGxheTogcmV2ZXJ0O1xcbn1cXG5cXG4vKiBQcmVmZXJyZWQgYm94LXNpemluZyB2YWx1ZSAqL1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qXFxuICBSZW1vdmUgbGlzdCBzdHlsZXMgKGJ1bGxldHMvbnVtYmVycylcXG4gIGluIGNhc2UgeW91IHVzZSBpdCB3aXRoIG5vcm1hbGl6ZS5jc3NcXG4qL1xcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIEZvciBpbWFnZXMgdG8gbm90IGJlIGFibGUgdG8gZXhjZWVkIHRoZWlyIGNvbnRhaW5lciAqL1xcbmltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qIFJlbW92ZXMgc3BhY2luZyBiZXR3ZWVuIGNlbGxzIGluIHRhYmxlcyAqL1xcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcbi8qIFJldmVydCB0aGUgJ3doaXRlLXNwYWNlJyBwcm9wZXJ0eSBmb3IgdGV4dGFyZWEgZWxlbWVudHMgb24gU2FmYXJpICovXFxudGV4dGFyZWEge1xcbiAgd2hpdGUtc3BhY2U6IHJldmVydDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9tYXJxdWVlbS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9Pc3dhbGQtU2VtaUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIm1hcnF1ZWVtXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiT3N3YWxkXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuXG46cm9vdCB7XG4gIC0tbG9nby1jb2xvcjogI2VmMjI3ZDtcbiAgLS1sb2dvLWJvcmRlci1jb2xvcjogd2hpdGU7XG4gIC0tc2VsZWN0ZWQtdGFiLWNvbG9yOiB3aGl0ZTtcbiAgLS11bnNlbGVjdGVkLXRhYi1jb2xvcjogI2JmYmZiZjtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4jY29udGVudCB7XG4gIHdpZHRoOiBjbGFtcChtaW4oNDI1cHgsIDEwMCUpLCA5MCUsIDkwMHB4KTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwibWFycXVlZW1cIjtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggMHB4IHZhcigtLWxvZ28tY29sb3IpO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4vKiBOQVYgQkFSKi9cblxubmF2Lm5hdiB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2QxMTZiO1xufVxuXG5uYXYubmF2IHVsIGxpIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9zd2FsZFwiO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbm5hdi5uYXYgdWwgbGkuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbG9nby1jb2xvcik7XG59XG5cbm5hdi5uYXYgdWwgbGkudG9nZ2xlLW5hdi1iYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBuYXYubmF2IHtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICBtaW4taGVpZ2h0OiA1NXB4O1xuICB9XG5cbiAgbmF2Lm5hdiB1bCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB9XG5cbiAgbmF2Lm5hdiB1bC5zaG93IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2QxMTZiO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICBuYXYubmF2IHVsIGxpLnRvZ2dsZS1uYXYtYmFyIHtcbiAgICBkaXNwbGF5OiB1bnNldDtcbiAgfVxuXG4gIG5hdi5uYXYgdWwgbGkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICBuYXYubmF2IHVsLnNob3cgbGkge1xuICAgIGRpc3BsYXk6IHVuc2V0O1xuICB9XG59XG5cbi8qIEhPTUUgKi9cblxuI2NvbnRlbnQuaG9tZSAubG9nbyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luOiAzcmVtIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2NvbnRlbnQuaG9tZSAubmVvblRleHQge1xuICBmb250LWZhbWlseTogXCJPc3dhbGRcIjtcbiAgZm9udC1zaXplOiA1cmVtO1xuICB0ZXh0LXNoYWRvdzogMCAwIDdweCB2YXIoLS1sb2dvLWNvbG9yKSwgMCAwIDEwcHggdmFyKC0tbG9nby1jb2xvciksXG4gICAgMCAwIDIxcHggdmFyKC0tbG9nby1jb2xvciksIDAgMCA0MnB4IHZhcigtLWxvZ28tY29sb3IpLFxuICAgIDAgMCA4MnB4IHZhcigtLWxvZ28tY29sb3IpLCAwIDAgOTJweCB2YXIoLS1sb2dvLWNvbG9yKSxcbiAgICAwIDAgMTAycHggdmFyKC0tbG9nby1jb2xvciksIDAgMCAxNTFweCB2YXIoLS1sb2dvLWNvbG9yKTtcbn1cblxuI2NvbnRlbnQuaG9tZSAubG9nbyBoMSB7XG4gIC8qIGZvbnQtc2l6ZTogNHJlbTsgKi9cbiAgYW5pbWF0aW9uOiBwdWxzYXRlVGV4dCAwLjVzIGluZmluaXRlIGFsdGVybmF0ZSwgcHVsc2F0ZUJveFNoYWRvdyAwLjVzIGluZmluaXRlO1xuICBib3JkZXI6IDAuMnJlbSBzb2xpZCAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAwLjRlbTtcbiAgYm94LXNoYWRvdzogMCAwIDAuMnJlbSAjZmZmLCAwIDAgMC4ycmVtICNmZmYsIDAgMCAycmVtIHZhcigtLWxvZ28tY29sb3IpLFxuICAgIDAgMCAwLjhyZW0gdmFyKC0tbG9nby1jb2xvciksIDAgMCAyLjhyZW0gdmFyKC0tbG9nby1jb2xvciksXG4gICAgaW5zZXQgMCAwIDEuM3JlbSB2YXIoLS1sb2dvLWNvbG9yKTtcbn1cblxuQGtleWZyYW1lcyBwdWxzYXRlVGV4dCB7XG4gIDEwMCUge1xuICAgIHRleHQtc2hhZG93OiAwIDAgNHB4ICNmZmYsIDAgMCAxMXB4ICNmZmYsIDAgMCAxOXB4ICNmZmYsXG4gICAgICAwIDAgMjBweCB2YXIoLS1sb2dvLWNvbG9yKSwgMCAwIDQwcHggdmFyKC0tbG9nby1jb2xvciksXG4gICAgICAwIDAgNDBweCB2YXIoLS1sb2dvLWNvbG9yKSwgMCAwIDEwMHB4IHZhcigtLWxvZ28tY29sb3IpLFxuICAgICAgMCAwIDExMHB4IHZhcigtLWxvZ28tY29sb3IpO1xuICB9XG5cbiAgMCUge1xuICAgIHRleHQtc2hhZG93OiAwIDAgMnB4ICNmZmYsIDAgMCA0cHggI2ZmZiwgMCAwIDZweCAjZmZmLFxuICAgICAgMCAwIDEwcHggdmFyKC0tbG9nby1jb2xvciksIDAgMCA0NXB4IHZhcigtLWxvZ28tY29sb3IpLFxuICAgICAgMCAwIDQ1cHggdmFyKC0tbG9nby1jb2xvciksIDAgMCA3MHB4IHZhcigtLWxvZ28tY29sb3IpLFxuICAgICAgMCAwIDgwcHggdmFyKC0tbG9nby1jb2xvcik7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBwdWxzYXRlQm94U2hhZG93IHtcbiAgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAuMnJlbSAjZmZmLCAwIDAgMC4ycmVtICNmZmYsIDAgMCAycmVtIHZhcigtLWxvZ28tY29sb3IpLFxuICAgICAgMCAwIDAuOHJlbSB2YXIoLS1sb2dvLWNvbG9yKSwgMCAwIDIuOHJlbSB2YXIoLS1sb2dvLWNvbG9yKSxcbiAgICAgIGluc2V0IDAgMCAxLjNyZW0gdmFyKC0tbG9nby1jb2xvcik7XG4gIH1cblxuICAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAuM3JlbSAjZmZmLCAwIDAgMC4zcmVtICNmZmYsIDAgMCAzcmVtIHZhcigtLWxvZ28tY29sb3IpLFxuICAgICAgMCAwIDAuOXJlbSB2YXIoLS1sb2dvLWNvbG9yKSwgMCAwIDIuMnJlbSB2YXIoLS1sb2dvLWNvbG9yKSxcbiAgICAgIGluc2V0IDAgMCAxLjNyZW0gdmFyKC0tbG9nby1jb2xvcik7XG4gIH1cbn1cblxuI2NvbnRlbnQuaG9tZSBoMyB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAvKiBvdXRsaW5lOiAxcHggc29saWQgeWVsbG93OyAqL1xufVxuXG4jY29udGVudC5ob21lIGgzID4gYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHZhcigtLWxvZ28tY29sb3IpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNjb250ZW50LmhvbWUgPiBoMyA+IGE6aG92ZXIge1xuICAtLWxvZ28tY29sb3I6IHdoaXRlO1xufVxuXG4jY29udGVudC5ob21lIC5jYXJkLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBoZWlnaHQ6IDEwMHB4OyAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICAvKiBvdXRsaW5lOjFweCBzb2xpZCB3aGl0ZXNtb2tlOyAqL1xufVxuXG4jY29udGVudC5ob21lIC5jYXJkIHtcbiAgZmxleC1ncm93OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jY29udGVudC5ob21lIC5jYXJkLWltYWdlIHtcbiAgaGVpZ2h0OiA2MCU7XG4gIC8qIG91dGxpbmU6IDFweCBzb2xpZCByZWQ7ICovXG59XG5cbiNjb250ZW50LmhvbWUgLmNhcmQtaW1hZ2UgPiBpbWcge1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG4jY29udGVudC5ob21lIC5jYXJkLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI3cHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG5cbiNjb250ZW50LmhvbWUgLmNhcmQtdGl0bGU6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tbG9nby1jb2xvcik7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gICNjb250ZW50LmhvbWUgLmNhcmQtY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG5cbi8qIE1FTlUgKi9cblxuLm1lbnUtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMnJlbSAycmVtIDVyZW07XG59XG5cbi5tZW51LXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tbG9nby1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLm1lbnUtc3ViLWNvbnRhaW5lciB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDJyZW07XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWVudS1pbmdyZWRpZW50cyB7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgd2lkdGg6IG1heCg2MCUsIDMwMHB4KTtcbn1cblxuLm1lbnUtbGluZSB7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IGNsYW1wKDIwcHgsIDEwJSwgMTAwcHgpO1xuICBib3JkZXItdG9wOiA0cHggZG90dGVkIHdoaXRlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLm1lbnUtY29zdCB7XG4gIHdpZHRoOiAyMCU7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbn1cblxuLypHQUxMRVJZKi9cblxuLmdhbGxlcnktY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xuICBnYXA6IDFyZW07XG4gIHBhZGRpbmc6IDJyZW07XG59XG5cbi5pbWctY29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmltZy1jb250YWluZXIgaW1nIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zaXRpb246IDFzO1xuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMjUpO1xuICB9XG59XG5cbi5tb3JlLWltZy1idG4ge1xuICBmb250LXNpemU6IDJyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiBtaW4tY29udGVudDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDAgMCA1cmVtO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4ubW9yZS1pbWctYnRuOmFjdGl2ZSB7XG4gIGNvbG9yOiAjZWYyMjdkO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDRDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiw0Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLDJCQUEyQjtFQUMzQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsY0FBYztFQUNkLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsNkNBQTZDO0VBQzdDLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUEsV0FBVzs7QUFFWDtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIsTUFBTTtJQUNOLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsY0FBYztFQUNoQjtBQUNGOztBQUVBLFNBQVM7O0FBRVQ7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmOzs7NERBRzBEO0FBQzVEOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDhFQUE4RTtFQUM5RSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZDs7c0NBRW9DO0FBQ3RDOztBQUVBO0VBQ0U7SUFDRTs7O2lDQUc2QjtFQUMvQjs7RUFFQTtJQUNFOzs7Z0NBRzRCO0VBQzlCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFOzt3Q0FFb0M7RUFDdEM7O0VBRUE7SUFDRTs7d0NBRW9DO0VBQ3RDO0FBQ0Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQix3QkFBd0I7RUFDeEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7RUFDeEI7QUFDRjs7QUFFQSxTQUFTOztBQUVUO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixTQUFTO0VBQ1QsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsOEJBQThCO0VBQzlCLDRCQUE0QjtFQUM1QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7QUFDakI7O0FBRUEsVUFBVTs7QUFFVjtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsMkRBQTJEO0VBQzNELFNBQVM7RUFDVCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2Q7SUFDRSxzQkFBc0I7RUFDeEI7QUFDRjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIm1hcnF1ZWVtXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuL2Fzc2V0cy9tYXJxdWVlbS50dGZcXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk9zd2FsZFxcXCI7XFxuICBzcmM6IHVybChcXFwiLi9hc3NldHMvT3N3YWxkLVNlbWlCb2xkLnR0ZlxcXCIpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWxvZ28tY29sb3I6ICNlZjIyN2Q7XFxuICAtLWxvZ28tYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG4gIC0tc2VsZWN0ZWQtdGFiLWNvbG9yOiB3aGl0ZTtcXG4gIC0tdW5zZWxlY3RlZC10YWItY29sb3I6ICNiZmJmYmY7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIHdpZHRoOiBjbGFtcChtaW4oNDI1cHgsIDEwMCUpLCA5MCUsIDkwMHB4KTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJtYXJxdWVlbVxcXCI7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAwcHggdmFyKC0tbG9nby1jb2xvcik7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLyogTkFWIEJBUiovXFxuXFxubmF2Lm5hdiB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2QxMTZiO1xcbn1cXG5cXG5uYXYubmF2IHVsIGxpIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDEwcHggMzBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3N3YWxkXFxcIjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5uYXYubmF2IHVsIGxpLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sb2dvLWNvbG9yKTtcXG59XFxuXFxubmF2Lm5hdiB1bCBsaS50b2dnbGUtbmF2LWJhciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgbmF2Lm5hdiB7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMDtcXG4gICAgbWluLWhlaWdodDogNTVweDtcXG4gIH1cXG5cXG4gIG5hdi5uYXYgdWwge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICB9XFxuXFxuICBuYXYubmF2IHVsLnNob3cge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2QxMTZiO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgbmF2Lm5hdiB1bCBsaS50b2dnbGUtbmF2LWJhciB7XFxuICAgIGRpc3BsYXk6IHVuc2V0O1xcbiAgfVxcblxcbiAgbmF2Lm5hdiB1bCBsaSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICBuYXYubmF2IHVsLnNob3cgbGkge1xcbiAgICBkaXNwbGF5OiB1bnNldDtcXG4gIH1cXG59XFxuXFxuLyogSE9NRSAqL1xcblxcbiNjb250ZW50LmhvbWUgLmxvZ28ge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDcwJTtcXG4gIG1hcmdpbjogM3JlbSBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jY29udGVudC5ob21lIC5uZW9uVGV4dCB7XFxuICBmb250LWZhbWlseTogXFxcIk9zd2FsZFxcXCI7XFxuICBmb250LXNpemU6IDVyZW07XFxuICB0ZXh0LXNoYWRvdzogMCAwIDdweCB2YXIoLS1sb2dvLWNvbG9yKSwgMCAwIDEwcHggdmFyKC0tbG9nby1jb2xvciksXFxuICAgIDAgMCAyMXB4IHZhcigtLWxvZ28tY29sb3IpLCAwIDAgNDJweCB2YXIoLS1sb2dvLWNvbG9yKSxcXG4gICAgMCAwIDgycHggdmFyKC0tbG9nby1jb2xvciksIDAgMCA5MnB4IHZhcigtLWxvZ28tY29sb3IpLFxcbiAgICAwIDAgMTAycHggdmFyKC0tbG9nby1jb2xvciksIDAgMCAxNTFweCB2YXIoLS1sb2dvLWNvbG9yKTtcXG59XFxuXFxuI2NvbnRlbnQuaG9tZSAubG9nbyBoMSB7XFxuICAvKiBmb250LXNpemU6IDRyZW07ICovXFxuICBhbmltYXRpb246IHB1bHNhdGVUZXh0IDAuNXMgaW5maW5pdGUgYWx0ZXJuYXRlLCBwdWxzYXRlQm94U2hhZG93IDAuNXMgaW5maW5pdGU7XFxuICBib3JkZXI6IDAuMnJlbSBzb2xpZCAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDAuNGVtO1xcbiAgYm94LXNoYWRvdzogMCAwIDAuMnJlbSAjZmZmLCAwIDAgMC4ycmVtICNmZmYsIDAgMCAycmVtIHZhcigtLWxvZ28tY29sb3IpLFxcbiAgICAwIDAgMC44cmVtIHZhcigtLWxvZ28tY29sb3IpLCAwIDAgMi44cmVtIHZhcigtLWxvZ28tY29sb3IpLFxcbiAgICBpbnNldCAwIDAgMS4zcmVtIHZhcigtLWxvZ28tY29sb3IpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHB1bHNhdGVUZXh0IHtcXG4gIDEwMCUge1xcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDRweCAjZmZmLCAwIDAgMTFweCAjZmZmLCAwIDAgMTlweCAjZmZmLFxcbiAgICAgIDAgMCAyMHB4IHZhcigtLWxvZ28tY29sb3IpLCAwIDAgNDBweCB2YXIoLS1sb2dvLWNvbG9yKSxcXG4gICAgICAwIDAgNDBweCB2YXIoLS1sb2dvLWNvbG9yKSwgMCAwIDEwMHB4IHZhcigtLWxvZ28tY29sb3IpLFxcbiAgICAgIDAgMCAxMTBweCB2YXIoLS1sb2dvLWNvbG9yKTtcXG4gIH1cXG5cXG4gIDAlIHtcXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAycHggI2ZmZiwgMCAwIDRweCAjZmZmLCAwIDAgNnB4ICNmZmYsXFxuICAgICAgMCAwIDEwcHggdmFyKC0tbG9nby1jb2xvciksIDAgMCA0NXB4IHZhcigtLWxvZ28tY29sb3IpLFxcbiAgICAgIDAgMCA0NXB4IHZhcigtLWxvZ28tY29sb3IpLCAwIDAgNzBweCB2YXIoLS1sb2dvLWNvbG9yKSxcXG4gICAgICAwIDAgODBweCB2YXIoLS1sb2dvLWNvbG9yKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBwdWxzYXRlQm94U2hhZG93IHtcXG4gIDEwMCUge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMC4ycmVtICNmZmYsIDAgMCAwLjJyZW0gI2ZmZiwgMCAwIDJyZW0gdmFyKC0tbG9nby1jb2xvciksXFxuICAgICAgMCAwIDAuOHJlbSB2YXIoLS1sb2dvLWNvbG9yKSwgMCAwIDIuOHJlbSB2YXIoLS1sb2dvLWNvbG9yKSxcXG4gICAgICBpbnNldCAwIDAgMS4zcmVtIHZhcigtLWxvZ28tY29sb3IpO1xcbiAgfVxcblxcbiAgMCUge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMC4zcmVtICNmZmYsIDAgMCAwLjNyZW0gI2ZmZiwgMCAwIDNyZW0gdmFyKC0tbG9nby1jb2xvciksXFxuICAgICAgMCAwIDAuOXJlbSB2YXIoLS1sb2dvLWNvbG9yKSwgMCAwIDIuMnJlbSB2YXIoLS1sb2dvLWNvbG9yKSxcXG4gICAgICBpbnNldCAwIDAgMS4zcmVtIHZhcigtLWxvZ28tY29sb3IpO1xcbiAgfVxcbn1cXG5cXG4jY29udGVudC5ob21lIGgzIHtcXG4gIGZvbnQtc2l6ZTogMzZweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIC8qIG91dGxpbmU6IDFweCBzb2xpZCB5ZWxsb3c7ICovXFxufVxcblxcbiNjb250ZW50LmhvbWUgaDMgPiBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1sb2dvLWNvbG9yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2NvbnRlbnQuaG9tZSA+IGgzID4gYTpob3ZlciB7XFxuICAtLWxvZ28tY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jY29udGVudC5ob21lIC5jYXJkLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIC8qIGhlaWdodDogMTAwcHg7ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLyogb3V0bGluZToxcHggc29saWQgd2hpdGVzbW9rZTsgKi9cXG59XFxuXFxuI2NvbnRlbnQuaG9tZSAuY2FyZCB7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2NvbnRlbnQuaG9tZSAuY2FyZC1pbWFnZSB7XFxuICBoZWlnaHQ6IDYwJTtcXG4gIC8qIG91dGxpbmU6IDFweCBzb2xpZCByZWQ7ICovXFxufVxcblxcbiNjb250ZW50LmhvbWUgLmNhcmQtaW1hZ2UgPiBpbWcge1xcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG59XFxuXFxuI2NvbnRlbnQuaG9tZSAuY2FyZC10aXRsZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDI3cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbn1cXG5cXG4jY29udGVudC5ob21lIC5jYXJkLXRpdGxlOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1sb2dvLWNvbG9yKTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcXG4gICNjb250ZW50LmhvbWUgLmNhcmQtY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG59XFxuXFxuLyogTUVOVSAqL1xcblxcbi5tZW51LWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAycmVtIDJyZW0gNXJlbTtcXG59XFxuXFxuLm1lbnUtdGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLWxvZ28tY29sb3IpO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLm1lbnUtc3ViLWNvbnRhaW5lciB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDJyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tZW51LWluZ3JlZGllbnRzIHtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIHdpZHRoOiBtYXgoNjAlLCAzMDBweCk7XFxufVxcblxcbi5tZW51LWxpbmUge1xcbiAgaGVpZ2h0OiAwO1xcbiAgd2lkdGg6IGNsYW1wKDIwcHgsIDEwJSwgMTAwcHgpO1xcbiAgYm9yZGVyLXRvcDogNHB4IGRvdHRlZCB3aGl0ZTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4ubWVudS1jb3N0IHtcXG4gIHdpZHRoOiAyMCU7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi8qR0FMTEVSWSovXFxuXFxuLmdhbGxlcnktY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xcbiAgZ2FwOiAxcmVtO1xcbiAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuLmltZy1jb250YWluZXIge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmltZy1jb250YWluZXIgaW1nIHtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0cmFuc2l0aW9uOiAxcztcXG4gICY6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMjUpO1xcbiAgfVxcbn1cXG5cXG4ubW9yZS1pbWctYnRuIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAwIDAgNXJlbTtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5tb3JlLWltZy1idG46YWN0aXZlIHtcXG4gIGNvbG9yOiAjZWYyMjdkO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9vdGVyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9vdGVyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy9pbXBvcnQgaW1hZ2VzIGZyb20gZ2FsbGVyeSBmb2xkZXJcbmltcG9ydCBkYW5jZXJzX2ltZyBmcm9tIFwiLi9hc3NldHMvZ2FsbGVyeS9kYW5jZXJzLnBuZ1wiO1xuaW1wb3J0IGRqX2ltZyBmcm9tIFwiLi9hc3NldHMvZ2FsbGVyeS9kai5wbmdcIjtcbmltcG9ydCBmb29kMV9pbWcgZnJvbSBcIi4vYXNzZXRzL2dhbGxlcnkvZm9vZDEucG5nXCI7XG5pbXBvcnQgZm9vZDJfaW1nIGZyb20gXCIuL2Fzc2V0cy9nYWxsZXJ5L2Zvb2QyLnBuZ1wiO1xuaW1wb3J0IHBlb3BsZUVhdGluZ19pbWcgZnJvbSBcIi4vYXNzZXRzL2dhbGxlcnkvcGVvcGxlLWVhdGluZy5wbmdcIjtcbmltcG9ydCByYW5kb21HdXlfaW1nIGZyb20gXCIuL2Fzc2V0cy9nYWxsZXJ5L3JhbmRvbS1ndXkucG5nXCI7XG5pbXBvcnQgcmVzdG9faW1nIGZyb20gXCIuL2Fzc2V0cy9nYWxsZXJ5L3Jlc3RvLnBuZ1wiO1xuaW1wb3J0IHdvbWFuV2hpdGVfaW1nIGZyb20gXCIuL2Fzc2V0cy9nYWxsZXJ5L3dvbWFuLWluLXdoaXRlLnBuZ1wiO1xuXG5pbXBvcnQgeyBjcmVhdGVIdG1sRWxlbWVudCwgY3JlYXRlSW1nRWxlbWVudCB9IGZyb20gXCIuL2hlbHBlclwiO1xuXG5jb25zdCBHYWxsZXJ5UGFnZUZhY3RvcnkgPSAoY29udGVudCkgPT4ge1xuICBjb25zdCBnYWxsZXJ5ID0gY3JlYXRlSHRtbEVsZW1lbnQoXG4gICAgXCJkaXZcIixcbiAgICBudWxsLFxuICAgIFtcImdhbGxlcnktY29udGFpbmVyXCJdLFxuICAgIG51bGwsXG4gICAgbnVsbFxuICApO1xuXG4gIGxldCBzdGFydEluZGV4ID0gMDtcbiAgbGV0IEltYWdlcyA9IFtdO1xuXG4gIGZ1bmN0aW9uIGdldEltZ1dpdGhDb250YWluZXIoc3JjLCBhbHQpIHtcbiAgICBjb25zdCBjYXJkSW1nID0gY3JlYXRlSW1nRWxlbWVudChzcmMsIGFsdCwgbnVsbCwgbnVsbCk7XG4gICAgY29uc3QgaW1nQ29udGFpbmVyID0gY3JlYXRlSHRtbEVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgbnVsbCxcbiAgICAgIFtcImltZy1jb250YWluZXJcIl0sXG4gICAgICBudWxsLFxuICAgICAgW2NhcmRJbWddXG4gICAgKTtcbiAgICByZXR1cm4gaW1nQ29udGFpbmVyO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkSW1hZ2VzKGltYWdlQ291bnQpIHtcbiAgICBsZXQgRml4ZWRJbWFnZXMgPSBbXG4gICAgICBnZXRJbWdXaXRoQ29udGFpbmVyKFxuICAgICAgICByZXN0b19pbWcsXG4gICAgICAgIFwiQSBjaGluZXNlIHJlc3RhdXJhbnQgd2l0aCBhIG5lb24gc2lnbiBvdXRzaWRlXCJcbiAgICAgICksXG4gICAgICBnZXRJbWdXaXRoQ29udGFpbmVyKFxuICAgICAgICBkYW5jZXJzX2ltZyxcbiAgICAgICAgXCJBIGdyb3VwIG9mIGRhbmNlcnMgaW4gcG9vcmx5IGxpdCBuaWdodCBjbHViXCJcbiAgICAgICksXG4gICAgICBnZXRJbWdXaXRoQ29udGFpbmVyKFxuICAgICAgICB3b21hbldoaXRlX2ltZyxcbiAgICAgICAgXCJBIHdvbWFuIGluIHdoaXRlIHBvc2luZyBzZWR1Y3RpdmVseSBpbiBhIG5pZ2h0IGNsdWJcIlxuICAgICAgKSxcbiAgICAgIGdldEltZ1dpdGhDb250YWluZXIoXG4gICAgICAgIHJhbmRvbUd1eV9pbWcsXG4gICAgICAgIFwiUG9ydHJhaXQgb2YgYSBibGFjayBndXkgaW4gYSBuaWdodCBjbHViXCJcbiAgICAgICksXG4gICAgICBnZXRJbWdXaXRoQ29udGFpbmVyKGZvb2QxX2ltZywgXCJBIHBsYXRlIHdpdGggZWdnc1wiKSxcbiAgICAgIGdldEltZ1dpdGhDb250YWluZXIoZGpfaW1nLCBcIkEgREogaW4gYSBuaWdodGNsdWJcIiksXG4gICAgICBnZXRJbWdXaXRoQ29udGFpbmVyKGZvb2QyX2ltZywgXCJBIHBsYXRlIGZpbGxlZCB3aXRoIHZlZ2dpZXNcIiksXG4gICAgICBnZXRJbWdXaXRoQ29udGFpbmVyKFxuICAgICAgICBwZW9wbGVFYXRpbmdfaW1nLFxuICAgICAgICBcIlBlb3BsZSBzaXR0aW5nIGluIGEgY2FsbSBlbnZpcm9ubWVudFwiXG4gICAgICApLFxuICAgIF07XG5cbiAgICBJbWFnZXMgPSBJbWFnZXMuY29uY2F0KEZpeGVkSW1hZ2VzKTtcbiAgICBhZGRNb3JlSW1hZ2VzKGltYWdlQ291bnQgLSBJbWFnZXMubGVuZ3RoKTtcbiAgICBhZGRUb0dhbGxlcnkoKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGdhbGxlcnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkTW9yZUltYWdlcyh0b0FkZCkge1xuICAgIGxldCBjdXJyZW50Q291bnQgPSBJbWFnZXMubGVuZ3RoO1xuICAgIHdoaWxlIChJbWFnZXMubGVuZ3RoIDwgY3VycmVudENvdW50ICsgdG9BZGQpIHtcbiAgICAgIEltYWdlcy5wdXNoKFxuICAgICAgICBnZXRJbWdXaXRoQ29udGFpbmVyKFxuICAgICAgICAgIGBodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vcmFuZG9tLz9uaWdodGNsdWImJHtNYXRoLnJhbmRvbSgpfWAsXG4gICAgICAgICAgXCJBIHJhbmRvbSBpbWFnZSBmcm9tIFVuc3BsYXNoIHdpdGgga2V5d29yZCBuaWdodGNsdWJcIlxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFRvR2FsbGVyeSgpIHtcbiAgICBmb3IgKGxldCBpID0gc3RhcnRJbmRleDsgaSA8IEltYWdlcy5sZW5ndGg7ICsraSkge1xuICAgICAgZ2FsbGVyeS5hcHBlbmRDaGlsZChJbWFnZXNbaV0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZE1vcmVJbWFnZXNCdG4oKSB7XG4gICAgY29uc3QgYnRuID0gY3JlYXRlSHRtbEVsZW1lbnQoXG4gICAgICBcImJ1dHRvblwiLFxuICAgICAgbnVsbCxcbiAgICAgIFtcIm1vcmUtaW1nLWJ0blwiXSxcbiAgICAgIFwiTW9yZVwiLFxuICAgICAgbnVsbFxuICAgICk7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBhZGRNb3JlSW1hZ2VzKDUpO1xuICAgICAgYWRkVG9HYWxsZXJ5KCk7XG4gICAgfSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChidG4pO1xuICB9XG5cbiAgZnVuY3Rpb24gZGlzcGxheSgpIHtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJHQUxMRVJZXCIpO1xuICAgIC8vYWRkIGltYWdlc1xuICAgIGFkZEltYWdlcyg4KTtcbiAgICBhZGRNb3JlSW1hZ2VzQnRuKCk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKFwiR0FMTEVSWVwiKTtcbiAgICBjb25zdCBnYWxsZXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYWxsZXJ5LWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vcmUtaW1nLWJ0blwiKTtcbiAgICBnYWxsZXJ5LnJlbW92ZSgpO1xuICAgIGJ0bi5yZW1vdmUoKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZGlzcGxheSxcbiAgICByZW1vdmUsXG4gIH07XG59O1xuXG5leHBvcnQgeyBHYWxsZXJ5UGFnZUZhY3RvcnkgfTtcbiIsIi8qKlxuICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhbiBIVE1MIGVsZW1lbnQuXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBIVE1MIHR5cGUgOiBkaXYsIG5hdiwgdWwsIC4uLlxuICogQHBhcmFtIHtzdHJpbmd9IGlkIEhUTUwgSURcbiAqIEBwYXJhbSB7W3N0cmluZ119IENsYXNzZXNcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eHRcbiAqIEBwYXJhbSB7W0hUTUxFbGVtZW50XX0gQ2hpbGRyZW5zIEhUTUwgZWxlbWVudHMgd2hpY2ggbXVzdCBiZSBhcHBlbmRlZCB0byBuZXdseSBjcmVhdGVkIGVsZW1lbnRcbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gSFRNTCBlbGVtZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIdG1sRWxlbWVudCh0eXBlLCBpZCwgQ2xhc3NlcywgdHh0LCBDaGlsZHJlbnMpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG5cbiAgaWYgKGlkKSBlbGVtZW50LmlkID0gaWQ7XG5cbiAgaWYgKENsYXNzZXMpIENsYXNzZXMuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSk7XG5cbiAgaWYgKHR4dCkgZWxlbWVudC50ZXh0Q29udGVudCA9IHR4dDtcblxuICBpZiAoQ2hpbGRyZW5zKSB7XG4gICAgQ2hpbGRyZW5zLmZvckVhY2goKGNoaWxkKSA9PiBlbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKSk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuLyoqIFJldHVybnMgYDxpbWc+PC9pbWc+YCB3aXRoIHNvbWUgb3B0aW9uYWwgcGFyYW1ldGVycy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3JjIHNvdXJjZSBwYXRoXG4gKiBAcGFyYW0ge3N0cmluZ30gYWx0IGFsdGVybmF0aXZlIHRleHRcbiAqIEBwYXJhbSB7W3N0cmluZ119IENsYXNzZXMgYXJyYXkgb2YgY2xhc3Nlc1xuICogQHBhcmFtIHtbSFRNTEVsZW1lbnRdfSBDaGlsZHJlbnMgYXJyYXkgb2YgSFRNTCBjaGlsZHJlblxuICogQHJldHVybnMgSW1hZ2UgZWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW1nRWxlbWVudChzcmMsIGFsdCwgQ2xhc3NlcywgQ2hpbGRyZW5zKSB7XG4gIGNvbnN0IEltZyA9IG5ldyBJbWFnZSgpO1xuICBpZiAoc3JjKSBJbWcuc3JjID0gc3JjO1xuICBpZiAoYWx0KSBJbWcuYWx0ID0gYWx0O1xuXG4gIGlmIChDbGFzc2VzKVxuICAgIGFycmF5Q2xhc3Nlcy5mb3JFYWNoKChjbGFzc05hbWUpID0+IEltZy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSkpO1xuXG4gIGlmIChDaGlsZHJlbnMpIHtcbiAgICBDaGlsZHJlbnMuZm9yRWFjaCgoY2hpbGQpID0+IEltZy5hcHBlbmRDaGlsZChjaGlsZCkpO1xuICB9XG5cbiAgcmV0dXJuIEltZztcbn1cbiIsImltcG9ydCBib3R0bGVJbWcgZnJvbSBcIi4vYXNzZXRzL2JvdHRsZWFuZGdsYXNzLmdpZlwiO1xuaW1wb3J0IGRhbmNlSW1nIGZyb20gXCIuL2Fzc2V0cy9kYW5jaW5nd29tZW4uZ2lmXCI7XG5pbXBvcnQgcGlsbEltZyBmcm9tIFwiLi9hc3NldHMvcm90YXRpbmdwaWxsLmdpZlwiO1xuXG5pbXBvcnQgeyBjcmVhdGVIdG1sRWxlbWVudCwgY3JlYXRlSW1nRWxlbWVudCB9IGZyb20gXCIuL2hlbHBlclwiO1xuXG5leHBvcnQgY29uc3QgSG9tZVBhZ2VGYWN0b3J5ID0gKGNvbnRlbnQpID0+IHtcbiAgZnVuY3Rpb24gY2FyZCh0aXRsZSwgc3JjLCBhbHQpIHtcbiAgICByZXR1cm4geyB0aXRsZSwgc3JjLCBhbHQgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZGxvZ28oKSB7XG4gICAgY29uc3QgbG9nbyA9IFwiTXVnIHNob3QgUHViXCI7XG4gICAgY29uc3QgaGVhZGluZyA9IGNyZWF0ZUh0bWxFbGVtZW50KFwiaDFcIiwgbnVsbCwgW1wibmVvblRleHRcIl0sIGxvZ28sIG51bGwpO1xuICAgIGNvbnN0IGxvZ29Db250YWluZXIgPSBjcmVhdGVIdG1sRWxlbWVudChcImRpdlwiLCBudWxsLCBbXCJsb2dvXCJdLCBudWxsLCBbXG4gICAgICBoZWFkaW5nLFxuICAgIF0pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobG9nb0NvbnRhaW5lcik7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRJbmZvKCkge1xuICAgIGNvbnN0IHQxID0gY3JlYXRlSHRtbEVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIG51bGwsIGAgb3ZlciAxOCdzIG9ubHlgLCBudWxsKTtcbiAgICBjb25zdCBhbmNob3IgPSBjcmVhdGVIdG1sRWxlbWVudChcImFcIiwgbnVsbCwgbnVsbCwgXCJib29rIGhlcmVcIiwgbnVsbCk7XG4gICAgYW5jaG9yLmhyZWYgPSBcIiNcIjtcbiAgICBjb25zdCBoZWFkaW5nID0gY3JlYXRlSHRtbEVsZW1lbnQoXCJoM1wiLCBudWxsLCBudWxsLCBudWxsLCBbYW5jaG9yLCB0MV0pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRDYXJkcyhDYXJkcykge1xuICAgIGNvbnN0IGNhcmRzQ29udGFpbmVyID0gY3JlYXRlSHRtbEVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgbnVsbCxcbiAgICAgIFtcImNhcmQtY29udGFpbmVyXCJdLFxuICAgICAgbnVsbCxcbiAgICAgIG51bGxcbiAgICApO1xuXG4gICAgQ2FyZHMuZm9yRWFjaCgoY2FyZE9iaikgPT4ge1xuICAgICAgY29uc3QgY2FyZEltZyA9IGNyZWF0ZUltZ0VsZW1lbnQoY2FyZE9iai5zcmMsIGNhcmRPYmouYWx0LCBudWxsLCBudWxsKTtcblxuICAgICAgY29uc3QgY2FyZEltZ0NvbnRhaW5lciA9IGNyZWF0ZUh0bWxFbGVtZW50KFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBudWxsLFxuICAgICAgICBbXCJjYXJkLWltYWdlXCJdLFxuICAgICAgICBudWxsLFxuICAgICAgICBbY2FyZEltZ11cbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGNhcmRUaXRsZSA9IGNyZWF0ZUh0bWxFbGVtZW50KFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBudWxsLFxuICAgICAgICBbXCJjYXJkLXRpdGxlXCJdLFxuICAgICAgICBjYXJkT2JqLnRpdGxlLFxuICAgICAgICBudWxsXG4gICAgICApO1xuXG4gICAgICBjb25zdCBjYXJkID0gY3JlYXRlSHRtbEVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgW1wiY2FyZFwiXSwgbnVsbCwgW1xuICAgICAgICBjYXJkSW1nQ29udGFpbmVyLFxuICAgICAgICBjYXJkVGl0bGUsXG4gICAgICBdKTtcblxuICAgICAgY2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgfSk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNhcmRzQ29udGFpbmVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc3BsYXkoKSB7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiaG9tZVwiKTtcbiAgICBsZXQgQ2FyZHMgPSBbXG4gICAgICBjYXJkKFwiZHJpbmtzXCIsIGJvdHRsZUltZywgXCJBIGdpZiBvZiBhIGJvdHRsZSBhbmQgYSBnbGFzc1wiKSxcbiAgICAgIGNhcmQoXCJkcnVnc1wiLCBwaWxsSW1nLCBcIkEgZ2lmIG9mIGEgcGlsbCByb3RhdGluZyBjbG9ja3dpc2VcIiksXG4gICAgICBjYXJkKFwiZGFuY2VcIiwgZGFuY2VJbWcsIFwiQSBnaWYgb2YgNCBsb3ZlbHkgd29tZW4gZGFuY2luZ1wiKSxcbiAgICBdO1xuXG4gICAgYWRkbG9nbygpO1xuICAgIGFkZEluZm8oKTtcbiAgICBhZGRDYXJkcyhDYXJkcyk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaG9tZVwiKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDNcIikucmVtb3ZlKCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2dvXCIpLnJlbW92ZSgpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZC1jb250YWluZXJcIikucmVtb3ZlKCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGRpc3BsYXksXG4gICAgcmVtb3ZlLFxuICB9O1xufTtcbiIsImltcG9ydCB7IGNyZWF0ZUh0bWxFbGVtZW50IH0gZnJvbSBcIi4vaGVscGVyXCI7XG5cbmNvbnN0IE1lbnVQYWdlRmFjdG9yeSA9IChjb250ZW50KSA9PiB7XG4gIGZ1bmN0aW9uIG1lbnVJdGVtKHRpdGxlLCBpbmdyZWRpZW50cywgY29zdCkge1xuICAgIHJldHVybiB7IHRpdGxlLCBpbmdyZWRpZW50cywgY29zdCB9O1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkTWVudUl0ZW1zKG1lbnUpIHtcbiAgICBjb25zdCBtZW51Q29udGFpbmVyID0gY3JlYXRlSHRtbEVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgbnVsbCxcbiAgICAgIFtcIm1lbnUtY29udGFpbmVyXCJdLFxuICAgICAgbnVsbCxcbiAgICAgIG51bGxcbiAgICApO1xuXG4gICAgbWVudS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBtZW51VGl0bGUgPSBjcmVhdGVIdG1sRWxlbWVudChcbiAgICAgICAgXCJoM1wiLFxuICAgICAgICBudWxsLFxuICAgICAgICBbXCJtZW51LXRpdGxlXCJdLFxuICAgICAgICBpdGVtLnRpdGxlLFxuICAgICAgICBudWxsXG4gICAgICApO1xuXG4gICAgICBjb25zdCBtZW51SW5ncmVkaWVudHMgPSBjcmVhdGVIdG1sRWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgbnVsbCxcbiAgICAgICAgW1wibWVudS1pbmdyZWRpZW50c1wiXSxcbiAgICAgICAgaXRlbS5pbmdyZWRpZW50cyxcbiAgICAgICAgbnVsbFxuICAgICAgKTtcblxuICAgICAgY29uc3QgbWVudVByaWNlID0gY3JlYXRlSHRtbEVsZW1lbnQoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIG51bGwsXG4gICAgICAgIFtcIm1lbnUtY29zdFwiXSxcbiAgICAgICAgaXRlbS5jb3N0LFxuICAgICAgICBudWxsXG4gICAgICApO1xuXG4gICAgICBjb25zdCBsaW5lID0gY3JlYXRlSHRtbEVsZW1lbnQoXCJoclwiLCBudWxsLCBbXCJtZW51LWxpbmVcIl0sIG51bGwsIG51bGwpO1xuXG4gICAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVIdG1sRWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgbnVsbCxcbiAgICAgICAgW1wibWVudS1zdWItY29udGFpbmVyXCJdLFxuICAgICAgICBudWxsLFxuICAgICAgICBbbWVudUluZ3JlZGllbnRzLCBsaW5lLCBtZW51UHJpY2VdXG4gICAgICApO1xuXG4gICAgICBjb25zdCBjYXJkID0gY3JlYXRlSHRtbEVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgW1wibWVudS1jYXJkXCJdLCBudWxsLCBbXG4gICAgICAgIG1lbnVUaXRsZSxcbiAgICAgICAgY29udGFpbmVyLFxuICAgICAgXSk7XG4gICAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpO1xuICAgIH0pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNwbGF5KCkge1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG4gICAgbGV0IG1lbnUgPSBbXG4gICAgICBtZW51SXRlbShcbiAgICAgICAgXCJiZW5lZGljdFwiLFxuICAgICAgICBcImVnZ3MsIGhvbGxhbmRhaXNlLCBiYWNvbiwgaGFtLCBzbW9rZWQgY2hlZXNlXCIsXG4gICAgICAgIFwiJDEyLjUwXCJcbiAgICAgICksXG4gICAgICBtZW51SXRlbShcbiAgICAgICAgXCJjaGlja2VuXCIsXG4gICAgICAgIFwiY2hpY2tlbiwgaG9sbGFuZGFpc2UsIGJhY29uLCBoYW0sIHNtb2tlZCBjaGVlc2VcIixcbiAgICAgICAgXCIkMTYuOTVcIlxuICAgICAgKSxcbiAgICAgIG1lbnVJdGVtKFxuICAgICAgICBcImplcmsgc2FuZHdpY2hcIixcbiAgICAgICAgXCJqYW1haWNhbiBqZXJrIGNoaWNrZW4sIGF2b2NhZG8sIGdyaWxsZWQgcGluZWFwcGxlLCByb2FzdGVkIHJlZCBwZXBwZXIsIG1heW9cIixcbiAgICAgICAgXCIkMTYuOTVcIlxuICAgICAgKSxcbiAgICAgIG1lbnVJdGVtKFxuICAgICAgICBcInNhbGFkIGJvYXJkXCIsXG4gICAgICAgIFwiY3Jpc3B5IHRlcml5YWtpIGF1YmVyZ2luZSwgcGlja2xlZCB3YXRlcm1lbG9uLCBtaXhlZCBiZXJyaWVzLCBjYXVsaWZsb3dlclwiLFxuICAgICAgICBcIiQ1Ljg1XCJcbiAgICAgICksXG4gICAgICBtZW51SXRlbShcImRydWdnaWVcIiwgXCJwdXJlIGNvY2FpbmUsIHdhdGVybWVsb24sIGNvY29udXRcIiwgXCIkNjkuODVcIiksXG4gICAgXTtcblxuICAgIGFkZE1lbnVJdGVtcyhtZW51KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51XCIpO1xuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtY29udGFpbmVyXCIpO1xuICAgIG1lbnVDb250YWluZXIucmVtb3ZlKCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGRpc3BsYXksXG4gICAgcmVtb3ZlLFxuICB9O1xufTtcblxuZXhwb3J0IHsgTWVudVBhZ2VGYWN0b3J5IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvL2ltcG9ydCBzdHlsZXNcbmltcG9ydCBcIi4vcmVzZXQuY3NzXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFwiLi9mb290ZXIuY3NzXCI7XG5cbmltcG9ydCBoYW1CdXJnZXJTdmcgZnJvbSBcIi4vYXNzZXRzL21lbnUuc3ZnXCI7XG5cbmltcG9ydCB7IGNyZWF0ZUh0bWxFbGVtZW50LCBjcmVhdGVJbWdFbGVtZW50IH0gZnJvbSBcIi4vaGVscGVyXCI7XG5pbXBvcnQgeyBIb21lUGFnZUZhY3RvcnkgfSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgeyBNZW51UGFnZUZhY3RvcnkgfSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgeyBHYWxsZXJ5UGFnZUZhY3RvcnkgfSBmcm9tIFwiLi9nYWxsZXJ5XCI7XG5cbmNvbnN0IGxvYWQgPSAoKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICBjb25zdCBob21lUGFnZSA9IEhvbWVQYWdlRmFjdG9yeShjb250ZW50KTtcbiAgY29uc3QgbWVudVBhZ2UgPSBNZW51UGFnZUZhY3RvcnkoY29udGVudCk7XG4gIGNvbnN0IGdhbGxlcnlQYWdlID0gR2FsbGVyeVBhZ2VGYWN0b3J5KGNvbnRlbnQpO1xuXG4gIGNvbnN0IFRhYk5hbWVzID0gW1wiSE9NRVwiLCBcIk1FTlVcIiwgXCJHQUxMRVJZXCIsIFwiQ09OVEFDVFwiLCBcIkJPT0tcIl07XG4gIGxldCBjdXJyZW50VGFiID0gXCJIT01FXCI7XG4gIC8vIGxldCBjdXJyZW50VGFiID0gXCJNRU5VXCI7XG4gIC8vIGxldCBjdXJyZW50VGFiID0gXCJHQUxMRVJZXCI7XG5cbiAgZnVuY3Rpb24gYWRkTmF2QmFyKCkge1xuICAgIGNvbnN0IHVub3JkZXJlZExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgY29uc3QgY2FyZEltZyA9IG5ldyBJbWFnZSgzMCwgMzApO1xuICAgIGNhcmRJbWcuc3JjID0gaGFtQnVyZ2VyU3ZnO1xuICAgIGNhcmRJbWcuYWx0ID0gXCJtZW51IGljb25cIjtcbiAgICBjb25zdCB0b2dnbGVCdG4gPSBjcmVhdGVIdG1sRWxlbWVudChcImxpXCIsIG51bGwsIFtcInRvZ2dsZS1uYXYtYmFyXCJdLCBudWxsLCBbXG4gICAgICBjYXJkSW1nLFxuICAgIF0pO1xuICAgIHVub3JkZXJlZExpc3QuYXBwZW5kQ2hpbGQodG9nZ2xlQnRuKTtcbiAgICBUYWJOYW1lcy5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICAgIHVub3JkZXJlZExpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlSHRtbEVsZW1lbnQoXCJsaVwiLCBudWxsLCBudWxsLCB0YWIsIG51bGwpKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG5hdkJhciA9IGNyZWF0ZUh0bWxFbGVtZW50KFwibmF2XCIsIG51bGwsIFtcIm5hdlwiXSwgbnVsbCwgW1xuICAgICAgdW5vcmRlcmVkTGlzdCxcbiAgICBdKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hdkJhcik7XG5cbiAgICBjb25zdCBUYWJFbGVtZW50cyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdiBsaVwiKV07XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBUYWJFbGVtZW50cy5sZW5ndGg7ICsraSkge1xuICAgICAgVGFiRWxlbWVudHNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN3aXRjaFRhYik7XG4gICAgfVxuXG4gICAgdG9nZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVOYXYpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlTmF2KCkge1xuICAgIGNvbnN0IHVub3JkZXJlZExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidWxcIik7XG4gICAgdW5vcmRlcmVkTGlzdC5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN3aXRjaFRhYihlKSB7XG4gICAgY29uc3QgbmV3VGFiID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgaWYgKG5ld1RhYiA9PSBjdXJyZW50VGFiKSByZXR1cm47XG5cbiAgICAvL3JlbW92ZSBjdXJyZW50IHRhYlxuICAgIGlmIChjdXJyZW50VGFiID09IFwiSE9NRVwiKSBob21lUGFnZS5yZW1vdmUoKTtcbiAgICBlbHNlIGlmIChjdXJyZW50VGFiID09IFwiTUVOVVwiKSBtZW51UGFnZS5yZW1vdmUoKTtcbiAgICBlbHNlIGlmIChjdXJyZW50VGFiID09IFwiR0FMTEVSWVwiKSBnYWxsZXJ5UGFnZS5yZW1vdmUoKTtcbiAgICBlbHNlIGlmIChjdXJyZW50VGFiID09IFwiQ09OVEFDVFwiKTtcbiAgICBlbHNlIGlmIChjdXJyZW50VGFiID09IFwiQk9PS1wiKTtcblxuICAgIC8vY2hhbmdlIGNvbG9yIGluIG5hdiBiYXJcbiAgICBjb2xvck5hdkJhcihuZXdUYWIpO1xuXG4gICAgLy9sb2FkIG5ldyB0YWJcbiAgICBpZiAobmV3VGFiID09IFwiSE9NRVwiKSB7XG4gICAgICBob21lUGFnZS5kaXNwbGF5KCk7XG4gICAgfSBlbHNlIGlmIChuZXdUYWIgPT0gXCJNRU5VXCIpIHtcbiAgICAgIG1lbnVQYWdlLmRpc3BsYXkoKTtcbiAgICB9IGVsc2UgaWYgKG5ld1RhYiA9PSBcIkdBTExFUllcIikge1xuICAgICAgZ2FsbGVyeVBhZ2UuZGlzcGxheSgpO1xuICAgIH0gZWxzZSBpZiAobmV3VGFiID09IFwiQ09OVEFDVFwiKSB7XG4gICAgICAvLyBnYWxsZXJ5UGFnZS5kaXNwbGF5KCk7XG4gICAgfSBlbHNlIGlmIChuZXdUYWIgPT0gXCJCT09LXCIpIHtcbiAgICAgIC8vIGdhbGxlcnlQYWdlLmRpc3BsYXkoKTtcbiAgICB9XG5cbiAgICBjdXJyZW50VGFiID0gbmV3VGFiO1xuICB9XG5cbiAgZnVuY3Rpb24gY29sb3JOYXZCYXIodGFiKSB7XG4gICAgbGV0IGluZGV4ID0gVGFiTmFtZXMuZmluZEluZGV4KChlbCkgPT4ge1xuICAgICAgcmV0dXJuIGVsID09IHRhYjtcbiAgICB9KTtcbiAgICBjb25zdCB0YWJFbGVtZW50cyA9IGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIm5hdlwiKVxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpOm5vdChbY2xhc3MqPVwidG9nZ2xlLW5hdi1iYXJcIl0nKTtcbiAgICAvL2NoYW5nZSBjbGFzcyBvZiBhbGwgdGFic1xuICAgIHRhYkVsZW1lbnRzLmZvckVhY2goKHQpID0+IHtcbiAgICAgIHQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9KTtcbiAgICAvL2NoYW5nZSBjbGFzcyBvZiBzZWxlY3RlZCB0YWJcbiAgICB0YWJFbGVtZW50c1tpbmRleF0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgfVxuXG4gIGFkZE5hdkJhcigpO1xuICBjb2xvck5hdkJhcihcIkhPTUVcIik7XG4gIC8vIGNvbG9yTmF2QmFyKFwiTUVOVVwiKTtcbiAgLy8gY29sb3JOYXZCYXIoXCJHQUxMRVJZXCIpO1xuICBob21lUGFnZS5kaXNwbGF5KCk7XG4gIC8vIG1lbnVQYWdlLmRpc3BsYXkoKTtcbiAgLy8gZ2FsbGVyeVBhZ2UuZGlzcGxheSgpO1xuXG4gIGNvbnN0IGZvb3RlciA9IGNyZWF0ZUh0bWxFbGVtZW50KFwiZm9vdGVyXCIsIG51bGwsIFtcImZvb3RlclwiXSwgbnVsbCwgbnVsbCk7XG4gIGZvb3Rlci5pbm5lckhUTUwgPSBgPHA+Q29weXJpZ2h0ICZjb3B5OzxzY3JpcHQ+ZG9jdW1lbnQud3JpdGUobmV3IERhdGUoKS5nZXRGdWxsWWVhcigpKTs8L3NjcmlwdD5hcmdvbi0zNDY3PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9hcmdvbi0zNDY3XCI+PGkgY2xhc3M9XCJmYS1icmFuZHMgZmEtZ2l0aHViXCI+PC9pPjwvYT48L3A+YDtcbiAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xufSkoKTtcblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==