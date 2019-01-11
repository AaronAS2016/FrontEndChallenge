webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/pure/Home.js":
/*!*********************************!*\
  !*** ./components/pure/Home.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Aaron\\Documents\\GitHub\\FrontEndChallenge\\components\\pure\\Home.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Home =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, _getPrototypeOf(Home).apply(this, arguments));
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      var _this$props$stats = this.props.stats,
          devices = _this$props$stats.devices,
          search = _this$props$stats.search,
          home = _this$props$stats.home;
      var size = {
        mobileS: '320px',
        mobileM: '375px',
        mobileL: '425px',
        tablet: '768px',
        laptop: '1024px',
        laptopL: '1440px',
        desktop: '2560px'
      };
      var device = {
        mobileS: "(min-width: ".concat(size.mobileS, ")"),
        mobileM: "(min-width: ".concat(size.mobileM, ")"),
        mobileL: "(min-width: ".concat(size.mobileL, ")"),
        tablet: "(min-width: ".concat(size.tablet, ")"),
        laptop: "(min-width: ".concat(size.laptop, ")"),
        laptopL: "(min-width: ".concat(size.laptopL, ")"),
        desktop: "(min-width: ".concat(size.desktop, ")"),
        desktopL: "(min-width: ".concat(size.desktop, ")")
      };
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3274549422", [device.tablet]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, user-scalable=no",
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3274549422", [device.tablet]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3274549422", [device.tablet]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Home"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.6.3/css/all.css",
        integrity: "sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/",
        crossorigin: "anonymous",
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3274549422", [device.tablet]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3274549422", [device.tablet]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Challenge"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3274549422", [device.tablet]]]) + " " + "buttonsContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        key: devices.id,
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3274549422", [device.tablet]]]) + " " + "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3274549422", [device.tablet]]]) + " " + "button-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3274549422", [device.tablet]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Connected devices"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3274549422", [device.tablet]]]) + " " + "info-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, devices.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3274549422", [device.tablet]]]) + " " + "info-desc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, devices.body)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3274549422", [device.tablet]]]) + " " + "button-action",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3274549422", [device.tablet]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        class: "fas fa-mobile-alt",
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3274549422", [device.tablet]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3274549422", [device.tablet]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Devices"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        key: search.id,
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3274549422", [device.tablet]]]) + " " + "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3274549422", [device.tablet]]]) + " " + "button-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3274549422", [device.tablet]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "Recent searches"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3274549422", [device.tablet]]]) + " " + "info-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, search.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3274549422", [device.tablet]]]) + " " + "info-desc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, search.body)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3274549422", [device.tablet]]]) + " " + "button-action",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3274549422", [device.tablet]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        class: "fas fa-search",
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3274549422", [device.tablet]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3274549422", [device.tablet]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Search"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        key: home.id,
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3274549422", [device.tablet]]]) + " " + "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3274549422", [device.tablet]]]) + " " + "button-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3274549422", [device.tablet]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "User Stats"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3274549422", [device.tablet]]]) + " " + "info-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, home.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3274549422", [device.tablet]]]) + " " + "info-desc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, home.body)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3274549422", [device.tablet]]]) + " " + "button-action",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3274549422", [device.tablet]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        class: "fas fa-home",
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3274549422", [device.tablet]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3274549422", [device.tablet]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "Home")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3274549422",
        css: "header.__jsx-style-dynamic-selector{color:#132238;font-size:3em;padding:20px;text-align:center;text-transform:uppercase;border-bottom:1px solid #ccc;}.buttonsContainer.__jsx-style-dynamic-selector{padding:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:no-wrap;-ms-flex-wrap:no-wrap;flex-wrap:no-wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:20px;}.button.__jsx-style-dynamic-selector{margin:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.button.__jsx-style-dynamic-selector .button-action.__jsx-style-dynamic-selector{width:150px;height:150px;background:#98ccd3;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;cursor:pointer;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-radius:50%;margin:20px 0;box-shadow:inset 1px 1px 5px 3px rgba(54,78,104,1);-webkit-transition:all .3s ease-in;transition:all .3s ease-in;}.button.__jsx-style-dynamic-selector .button-action.__jsx-style-dynamic-selector:hover{font-size:22px;box-shadow:inset 1px 1px 5px 5px rgba(54,78,104,1);}.button.__jsx-style-dynamic-selector .button-action.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{font-size:.6em;font-weight:600;text-transform:uppercase;margin:5px 0;}.button.__jsx-style-dynamic-selector .button-action.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{margin:0;color:#132238;font-size:3em;}.button.__jsx-style-dynamic-selector .button-info.__jsx-style-dynamic-selector{border-left:1px solid #364e68;padding:0 5px;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;position:relative;}.button.__jsx-style-dynamic-selector .button-info.__jsx-style-dynamic-selector:before{content:\"\\f111\";font-family:\"Font Awesome 5 Free\";position:absolute;font-size:.3em;color:#132238;font-weight:bold;left:-3px;top:0;}.button.__jsx-style-dynamic-selector .button-info.__jsx-style-dynamic-selector:after{content:\"\\f111\";font-family:\"Font Awesome 5 Free\";position:absolute;font-size:.3em;left:-3px;color:#132238;font-weight:bold;bottom:0;}.button.__jsx-style-dynamic-selector .button-info.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{font-size:.9em;margin:0;margin:2px 0;font-weight:bold;text-transform:uppercase;}.button.__jsx-style-dynamic-selector .button-info.__jsx-style-dynamic-selector .info-title.__jsx-style-dynamic-selector{font-size:.7em;text-transform:uppercase;font-weight:400;}.button.__jsx-style-dynamic-selector .button-info.__jsx-style-dynamic-selector .info-desc.__jsx-style-dynamic-selector{font-size:.5em;font-weight:300;min-width:50%;text-transform:uppercase;}@media ".concat(device.tablet, "{.__jsx-style-dynamic-selector{max-width:1400px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWFyb25cXERvY3VtZW50c1xcR2l0SHViXFxGcm9udEVuZENoYWxsZW5nZVxcY29tcG9uZW50c1xccHVyZVxcSG9tZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RXdCLEFBRzhDLEFBUUQsQUFTRCxBQU9BLEFBY08sQUFLSixBQU9OLEFBUXFCLEFBVWQsQUFXQSxBQVlELEFBUUEsQUFNQSxBQU9HLFNBN0RKLEdBakNELEFBT0EsQ0FoQkEsQ0FSQyxDQXNDMEMsQUFLeEMsQUFnRFAsQUFRZ0IsQUFNVCxDQXJDbUIsQUFXQSxDQWlDdEMsTUE3RGlCLENBeUNELENBbkVPLEdBeEJQLEVBeURDLENBZFcsQUE4RFgsTUF0RGpCLEFBeUNvQixHQU9ELENBbEdFLEdBd0JMLEFBaUNTLENBZ0RHLEtBdENQLEFBV0EsSUFjTyxFQWpEWixBQXdEaEIsR0FsRzRCLE9Bb0M1QixBQXFCZ0IsRUFVRSxBQVdBLENBbkNsQixDQThEQSxTQWJBLElBeEJpQixBQVdKLENBOUVvQixFQWNQLENBVEQsTUEwRVIsSUFYRyxVQVlBLE1BL0VwQixDQW9FYSxJQTlDUyxNQStDYixBQVdHLE1BVlosR0FXQSxPQXpCeUIseUJBbkRILG9CQVNBLDBCQVNJLE9Ba0NBLHdDQW5ETCxvQkFTSSxnQ0FTUCxjQWpCUSxDQWtCRCxFQWlDSixrQkFDckIsV0EzQ0EsK0NBVXFCLGtCQUNKLEVBbkJGLFlBQ2YsQUFtQnVELG1EQUN4Qiw4REFDL0IiLCJmaWxlIjoiQzpcXFVzZXJzXFxBYXJvblxcRG9jdW1lbnRzXFxHaXRIdWJcXEZyb250RW5kQ2hhbGxlbmdlXFxjb21wb25lbnRzXFxwdXJlXFxIb21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3Qge2RldmljZXMsIHNlYXJjaCwgaG9tZX0gPSB0aGlzLnByb3BzLnN0YXRzXHJcbiAgICAgICAgY29uc3Qgc2l6ZSA9IHtcclxuICAgICAgICAgICAgbW9iaWxlUzogJzMyMHB4JyxcclxuICAgICAgICAgICAgbW9iaWxlTTogJzM3NXB4JyxcclxuICAgICAgICAgICAgbW9iaWxlTDogJzQyNXB4JyxcclxuICAgICAgICAgICAgdGFibGV0OiAnNzY4cHgnLFxyXG4gICAgICAgICAgICBsYXB0b3A6ICcxMDI0cHgnLFxyXG4gICAgICAgICAgICBsYXB0b3BMOiAnMTQ0MHB4JyxcclxuICAgICAgICAgICAgZGVza3RvcDogJzI1NjBweCdcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBjb25zdCBkZXZpY2UgPSB7XHJcbiAgICAgICAgICAgIG1vYmlsZVM6IGAobWluLXdpZHRoOiAke3NpemUubW9iaWxlU30pYCxcclxuICAgICAgICAgICAgbW9iaWxlTTogYChtaW4td2lkdGg6ICR7c2l6ZS5tb2JpbGVNfSlgLFxyXG4gICAgICAgICAgICBtb2JpbGVMOiBgKG1pbi13aWR0aDogJHtzaXplLm1vYmlsZUx9KWAsXHJcbiAgICAgICAgICAgIHRhYmxldDogYChtaW4td2lkdGg6ICR7c2l6ZS50YWJsZXR9KWAsXHJcbiAgICAgICAgICAgIGxhcHRvcDogYChtaW4td2lkdGg6ICR7c2l6ZS5sYXB0b3B9KWAsXHJcbiAgICAgICAgICAgIGxhcHRvcEw6IGAobWluLXdpZHRoOiAke3NpemUubGFwdG9wTH0pYCxcclxuICAgICAgICAgICAgZGVza3RvcDogYChtaW4td2lkdGg6ICR7c2l6ZS5kZXNrdG9wfSlgLFxyXG4gICAgICAgICAgICBkZXNrdG9wTDogYChtaW4td2lkdGg6ICR7c2l6ZS5kZXNrdG9wfSlgXHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCB1c2VyLXNjYWxhYmxlPW5vXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5Ib21lPC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS42LjMvY3NzL2FsbC5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtVUhSdFpMSStwYnh0SENXcDF0NzdCaTFMNFp0aXFycUQ4MEtuNFo4TlRTUnlNQTJGZDMzbjVkUThsV1VFMDBzL1wiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+PC9saW5rPlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgICAgPGhlYWRlcj5DaGFsbGVuZ2U8L2hlYWRlcj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnNDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvblwiIGtleT17ZGV2aWNlcy5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNvbm5lY3RlZCBkZXZpY2VzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5mby10aXRsZVwiPntkZXZpY2VzLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImluZm8tZGVzY1wiPntkZXZpY2VzLmJvZHl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWFjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PGkgY2xhc3M9XCJmYXMgZmEtbW9iaWxlLWFsdFwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5EZXZpY2VzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvblwiIGtleT17c2VhcmNoLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24taW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UmVjZW50IHNlYXJjaGVzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5mby10aXRsZVwiPntzZWFyY2gudGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5mby1kZXNjXCI+e3NlYXJjaC5ib2R5fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWFjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PGkgY2xhc3M9XCJmYXMgZmEtc2VhcmNoXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlNlYXJjaDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uXCIga2V5PXtob21lLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24taW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VXNlciBTdGF0czwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImluZm8tdGl0bGVcIj57aG9tZS50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmZvLWRlc2NcIj57aG9tZS5ib2R5fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1hY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuID48aSBjbGFzcz1cImZhcyBmYS1ob21lXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkhvbWU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiMxMzIyMzg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjNlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJ1dHRvbnNDb250YWluZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDpuby13cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjoyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYnV0dG9uIC5idXR0b24tYWN0aW9ue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoxNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjOThjY2QzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjIwcHggMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDVweCAzcHggcmdiYSg1NCw3OCwxMDQsMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJ1dHRvbiAuYnV0dG9uLWFjdGlvbjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggNXB4IDVweCByZ2JhKDU0LDc4LDEwNCwxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYnV0dG9uIC5idXR0b24tYWN0aW9uIHB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOi42ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46NXB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJ1dHRvbiAuYnV0dG9uLWFjdGlvbiBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiMxMzIyMzg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjNlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5idXR0b24gLmJ1dHRvbi1pbmZvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItbGVmdDoxcHggc29saWQgIzM2NGU2ODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjAgNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJ1dHRvbiAuYnV0dG9uLWluZm86YmVmb3Jle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxmMTExXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTouM2VtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiMxMzIyMzg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0Oi0zcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJ1dHRvbiAuYnV0dG9uLWluZm86YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcXGYxMTFcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOi4zZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDotM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiMxMzIyMzg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJ1dHRvbiAuYnV0dG9uLWluZm8gcHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6LjllbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46MnB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJ1dHRvbiAuYnV0dG9uLWluZm8gLmluZm8tdGl0bGV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOi43ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYnV0dG9uIC5idXR0b24taW5mbyAuaW5mby1kZXNje1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTouNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjMwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6NTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgJHtkZXZpY2UudGFibGV0fSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxNDAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgYm9keXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlYmYwZjY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYFxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXX0= */\n/*@ sourceURL=C:\\Users\\Aaron\\Documents\\GitHub\\FrontEndChallenge\\components\\pure\\Home.js */"),
        dynamic: [device.tablet],
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1335254097",
        css: "body{font-family:system-ui;margin:0;background:#ebf0f6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWFyb25cXERvY3VtZW50c1xcR2l0SHViXFxGcm9udEVuZENoYWxsZW5nZVxcY29tcG9uZW50c1xccHVyZVxcSG9tZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1TW9CLEFBR2tELHNCQUNkLFNBQ1csbUJBQ3ZCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQWFyb25cXERvY3VtZW50c1xcR2l0SHViXFxGcm9udEVuZENoYWxsZW5nZVxcY29tcG9uZW50c1xccHVyZVxcSG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHtkZXZpY2VzLCBzZWFyY2gsIGhvbWV9ID0gdGhpcy5wcm9wcy5zdGF0c1xyXG4gICAgICAgIGNvbnN0IHNpemUgPSB7XHJcbiAgICAgICAgICAgIG1vYmlsZVM6ICczMjBweCcsXHJcbiAgICAgICAgICAgIG1vYmlsZU06ICczNzVweCcsXHJcbiAgICAgICAgICAgIG1vYmlsZUw6ICc0MjVweCcsXHJcbiAgICAgICAgICAgIHRhYmxldDogJzc2OHB4JyxcclxuICAgICAgICAgICAgbGFwdG9wOiAnMTAyNHB4JyxcclxuICAgICAgICAgICAgbGFwdG9wTDogJzE0NDBweCcsXHJcbiAgICAgICAgICAgIGRlc2t0b3A6ICcyNTYwcHgnXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgY29uc3QgZGV2aWNlID0ge1xyXG4gICAgICAgICAgICBtb2JpbGVTOiBgKG1pbi13aWR0aDogJHtzaXplLm1vYmlsZVN9KWAsXHJcbiAgICAgICAgICAgIG1vYmlsZU06IGAobWluLXdpZHRoOiAke3NpemUubW9iaWxlTX0pYCxcclxuICAgICAgICAgICAgbW9iaWxlTDogYChtaW4td2lkdGg6ICR7c2l6ZS5tb2JpbGVMfSlgLFxyXG4gICAgICAgICAgICB0YWJsZXQ6IGAobWluLXdpZHRoOiAke3NpemUudGFibGV0fSlgLFxyXG4gICAgICAgICAgICBsYXB0b3A6IGAobWluLXdpZHRoOiAke3NpemUubGFwdG9wfSlgLFxyXG4gICAgICAgICAgICBsYXB0b3BMOiBgKG1pbi13aWR0aDogJHtzaXplLmxhcHRvcEx9KWAsXHJcbiAgICAgICAgICAgIGRlc2t0b3A6IGAobWluLXdpZHRoOiAke3NpemUuZGVza3RvcH0pYCxcclxuICAgICAgICAgICAgZGVza3RvcEw6IGAobWluLXdpZHRoOiAke3NpemUuZGVza3RvcH0pYFxyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgdXNlci1zY2FsYWJsZT1ub1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+SG9tZTwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuNi4zL2Nzcy9hbGwuY3NzXCIgaW50ZWdyaXR5PVwic2hhMzg0LVVIUnRaTEkrcGJ4dEhDV3AxdDc3QmkxTDRadGlxcnFEODBLbjRaOE5UU1J5TUEyRmQzM241ZFE4bFdVRTAwcy9cIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiPjwvbGluaz5cclxuICAgICAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgICAgIDxoZWFkZXI+Q2hhbGxlbmdlPC9oZWFkZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIiBrZXk9e2RldmljZXMuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Db25uZWN0ZWQgZGV2aWNlczwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImluZm8tdGl0bGVcIj57ZGV2aWNlcy50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmZvLWRlc2NcIj57ZGV2aWNlcy5ib2R5fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1hY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxpIGNsYXNzPVwiZmFzIGZhLW1vYmlsZS1hbHRcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RGV2aWNlczwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIiBrZXk9e3NlYXJjaC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlJlY2VudCBzZWFyY2hlczwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImluZm8tdGl0bGVcIj57c2VhcmNoLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImluZm8tZGVzY1wiPntzZWFyY2guYm9keX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1hY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxpIGNsYXNzPVwiZmFzIGZhLXNlYXJjaFwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5TZWFyY2g8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvblwiIGtleT17aG9tZS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlVzZXIgU3RhdHM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmZvLXRpdGxlXCI+e2hvbWUudGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5mby1kZXNjXCI+e2hvbWUuYm9keX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tYWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiA+PGkgY2xhc3M9XCJmYXMgZmEtaG9tZVwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Ib21lPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjojMTMyMjM4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTozZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5idXR0b25zQ29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6bm8td3JhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjoyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJ1dHRvbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46MjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJ1dHRvbiAuYnV0dG9uLWFjdGlvbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzk4Y2NkMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjoyMHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCA1cHggM3B4IHJnYmEoNTQsNzgsMTA0LDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5idXR0b24gLmJ1dHRvbi1hY3Rpb246aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToyMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDVweCA1cHggcmdiYSg1NCw3OCwxMDQsMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJ1dHRvbiAuYnV0dG9uLWFjdGlvbiBwe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTouNmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjVweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5idXR0b24gLmJ1dHRvbi1hY3Rpb24gc3BhbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjojMTMyMjM4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTozZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYnV0dG9uIC5idXR0b24taW5mbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6MXB4IHNvbGlkICMzNjRlNjg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzowIDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczpmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5idXR0b24gLmJ1dHRvbi1pbmZvOmJlZm9yZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlxcZjExMVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6LjNlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjojMTMyMjM4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDotM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDowO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5idXR0b24gLmJ1dHRvbi1pbmZvOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxmMTExXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTouM2VtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6LTNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjojMTMyMjM4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5idXR0b24gLmJ1dHRvbi1pbmZvIHB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOi45ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjJweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5idXR0b24gLmJ1dHRvbi1pbmZvIC5pbmZvLXRpdGxle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTouN2VtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDo0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJ1dHRvbiAuYnV0dG9uLWluZm8gLmluZm8tZGVzY3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6LjVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDozMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOjUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhICR7ZGV2aWNlLnRhYmxldH0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTQwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgIGJvZHl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWJmMGY2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGBcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il19 */\n/*@ sourceURL=C:\\Users\\Aaron\\Documents\\GitHub\\FrontEndChallenge\\components\\pure\\Home.js */",
        __self: this
      }));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.ad319c8f500b1e89cd1a.hot-update.js.map