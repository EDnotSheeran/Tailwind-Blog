(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 6839:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2581);
/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6534);
/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_mdx_remote__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3151);
/* harmony import */ var _utils_Date__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9594);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const HomePage = ({
  posts = []
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
        children: "Blog - EDnotSheeran"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_6__/* .Container */ .W2, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "divide-y divide-gray-200",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "pt-6 pb-8 space-y-2 md:space-y-5",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
              className: "text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl md:text-[4rem] md:leading-[3.5rem]",
              children: "Latest"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "text-lg text-gray-500",
              children: "All the latest Tailwind CSS news, straight from the team."
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            className: "divide-y divide-gray-200",
            children: posts.map((post, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
              className: "py-12",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                className: "space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("dl", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                    className: "sr-only",
                    children: "Published on"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                    className: "text-base font-medium text-gray-500",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
                      dateTime: post.publishedAt,
                      children: (0,_utils_Date__WEBPACK_IMPORTED_MODULE_7__/* .shortDate */ .Z)(post.publishedAt)
                    })
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "space-y-5 xl:col-span-3",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "space-y-6",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                      className: "text-2xl font-bold tracking-tight",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
                        href: post.redirectURL,
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                          className: "text-gray-900",
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_mdx_remote__WEBPACK_IMPORTED_MODULE_5__.MDXRemote, _objectSpread({}, post.title))
                        })
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                      className: "prose max-w-none text-gray-500",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "prose max-w-none",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_mdx_remote__WEBPACK_IMPORTED_MODULE_5__.MDXRemote, _objectSpread({}, post.excerpt))
                      })
                    })]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-base font-medium",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
                      href: post.redirectURL,
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "text-teal-600 hover:text-teal-700",
                        "aria-label": "Read \"Introducing Tailwind UI Ecommerce\"",
                        children: "Read more \u2192"
                      })
                    })
                  })]
                })]
              })
            }, i))
          })]
        })
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);
const getStaticProps = async (context) => {
  const title = 'Introducing Tailwind UI&nbsp;Ecommerce';
  const mdxTitle = await (0,next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_4__.serialize)(title);
  const excerpt = 'Some **mdx** text, with a component';
  const mdxExcerpt = await (0,next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_4__.serialize)(excerpt);
  return {
    props: {
      posts: [{
        title: mdxTitle,
        excerpt: mdxExcerpt,
        publishedAt: '2021-08-11T19:30:00.000Z',
        redirectURL: '/1'
      }, {
        title: mdxTitle,
        excerpt: mdxExcerpt,
        publishedAt: '2021-08-11T19:30:00.000Z',
        redirectURL: '/1'
      }, {
        title: mdxTitle,
        excerpt: mdxExcerpt,
        publishedAt: '2021-08-11T19:30:00.000Z',
        redirectURL: '/1'
      }, {
        title: mdxTitle,
        excerpt: mdxExcerpt,
        publishedAt: '2021-08-11T19:30:00.000Z',
        redirectURL: '/1'
      }, {
        title: mdxTitle,
        excerpt: mdxExcerpt,
        publishedAt: '2021-08-11T19:30:00.000Z',
        redirectURL: '/1'
      }, {
        title: mdxTitle,
        excerpt: mdxExcerpt,
        publishedAt: '2021-08-11T19:30:00.000Z',
        redirectURL: '/1'
      }, {
        title: mdxTitle,
        excerpt: mdxExcerpt,
        publishedAt: '2021-08-11T19:30:00.000Z',
        redirectURL: '/1'
      }, {
        title: mdxTitle,
        excerpt: mdxExcerpt,
        publishedAt: '2021-08-11T19:30:00.000Z',
        redirectURL: '/1'
      }, {
        title: mdxTitle,
        excerpt: mdxExcerpt,
        publishedAt: '2021-08-11T19:30:00.000Z',
        redirectURL: '/1'
      }, {
        title: mdxTitle,
        excerpt: mdxExcerpt,
        publishedAt: '2021-08-11T19:30:00.000Z',
        redirectURL: '/1'
      }, {
        title: mdxTitle,
        excerpt: mdxExcerpt,
        publishedAt: '2021-08-11T19:30:00.000Z',
        redirectURL: '/1'
      }, {
        title: mdxTitle,
        excerpt: mdxExcerpt,
        publishedAt: '2021-08-11T19:30:00.000Z',
        redirectURL: '/1'
      }]
    }
  };
};

/***/ }),

/***/ 9594:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ shortDate; },
/* harmony export */   "R": function() { return /* binding */ longDate; }
/* harmony export */ });
function shortDate(dateString, lang = 'en') {
  let d = new Date(dateString);
  let ye = new Intl.DateTimeFormat(lang, {
    year: 'numeric'
  }).format(d);
  let mo = new Intl.DateTimeFormat(lang, {
    month: 'long'
  }).format(d);
  let da = new Intl.DateTimeFormat(lang, {
    day: '2-digit'
  }).format(d);
  return `${mo} ${da}, ${ye}`;
}
function longDate(dateString, lang = 'en') {
  let d = new Date(dateString);
  let ye = new Intl.DateTimeFormat(lang, {
    year: 'numeric'
  }).format(d);
  let mo = new Intl.DateTimeFormat(lang, {
    month: 'long'
  }).format(d);
  let da = new Intl.DateTimeFormat(lang, {
    day: '2-digit'
  }).format(d);
  let wd = new Intl.DateTimeFormat(lang, {
    weekday: 'long'
  }).format(d);
  return `${wd}, ${mo} ${da}, ${ye}`;
}

/***/ }),

/***/ 6534:
/***/ (function(module) {

"use strict";
module.exports = require("next-mdx-remote");;

/***/ }),

/***/ 2581:
/***/ (function(module) {

"use strict";
module.exports = require("next-mdx-remote/serialize");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 3289:
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/style");;

/***/ }),

/***/ 7749:
/***/ (function(module) {

"use strict";
module.exports = require("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,382], function() { return __webpack_exec__(6839); });
module.exports = __webpack_exports__;

})();