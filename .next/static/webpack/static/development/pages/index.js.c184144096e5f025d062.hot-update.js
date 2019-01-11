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
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["782474244", [device.tablet]]]),
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
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["782474244", [device.tablet]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["782474244", [device.tablet]]]),
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
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["782474244", [device.tablet]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["782474244", [device.tablet]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Challenge"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["782474244", [device.tablet]]]) + " " + "buttonsContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        key: devices.id,
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["782474244", [device.tablet]]]) + " " + "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["782474244", [device.tablet]]]) + " " + "button-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["782474244", [device.tablet]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Connected devices"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["782474244", [device.tablet]]]) + " " + "info-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, devices.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["782474244", [device.tablet]]]) + " " + "info-desc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, devices.body)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["782474244", [device.tablet]]]) + " " + "button-action",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["782474244", [device.tablet]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        class: "fas fa-mobile-alt",
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["782474244", [device.tablet]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["782474244", [device.tablet]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Devices"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        key: search.id,
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["782474244", [device.tablet]]]) + " " + "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["782474244", [device.tablet]]]) + " " + "button-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["782474244", [device.tablet]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "Recent searches"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["782474244", [device.tablet]]]) + " " + "info-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, search.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["782474244", [device.tablet]]]) + " " + "info-desc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, search.body)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["782474244", [device.tablet]]]) + " " + "button-action",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["782474244", [device.tablet]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        class: "fas fa-search",
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["782474244", [device.tablet]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["782474244", [device.tablet]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Search"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        key: home.id,
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["782474244", [device.tablet]]]) + " " + "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["782474244", [device.tablet]]]) + " " + "button-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["782474244", [device.tablet]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "User Stats"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["782474244", [device.tablet]]]) + " " + "info-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, home.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["782474244", [device.tablet]]]) + " " + "info-desc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, home.body)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["782474244", [device.tablet]]]) + " " + "button-action",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["782474244", [device.tablet]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        class: "fas fa-home",
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["782474244", [device.tablet]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-1335254097 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["782474244", [device.tablet]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "Home")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "782474244",
        css: "header.__jsx-style-dynamic-selector{color:#132238;font-size:3em;padding:20px;text-align:center;text-transform:uppercase;border-bottom:1px solid #ccc;}.buttonsContainer.__jsx-style-dynamic-selector{padding:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:no-wrap;-ms-flex-wrap:no-wrap;flex-wrap:no-wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:20px;}.button.__jsx-style-dynamic-selector{margin:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.button.__jsx-style-dynamic-selector .button-action.__jsx-style-dynamic-selector{width:150px;height:150px;background:#98ccd3;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;cursor:pointer;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-radius:50%;margin:20px 0;box-shadow:inset 1px 1px 5px 3px rgba(54,78,104,1);-webkit-transition:all .3s ease-in;transition:all .3s ease-in;}.button.__jsx-style-dynamic-selector .button-action.__jsx-style-dynamic-selector:hover{font-size:22px;box-shadow:inset 1px 1px 5px 5px rgba(54,78,104,1);}.button.__jsx-style-dynamic-selector .button-action.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{font-size:.6em;font-weight:600;text-transform:uppercase;margin:5px 0;}.button.__jsx-style-dynamic-selector .button-action.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{margin:0;color:#132238;font-size:3em;}.button.__jsx-style-dynamic-selector .button-info.__jsx-style-dynamic-selector{border-left:1px solid #364e68;padding:0 5px;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;position:relative;}.button.__jsx-style-dynamic-selector .button-info.__jsx-style-dynamic-selector:before{content:\"\\f111\";font-family:\"Font Awesome 5 Free\";position:absolute;font-size:.3em;color:#132238;font-weight:bold;left:-3px;top:0;}.button.__jsx-style-dynamic-selector .button-info.__jsx-style-dynamic-selector:after{content:\"\\f111\";font-family:\"Font Awesome 5 Free\";position:absolute;font-size:.3em;left:-3px;color:#132238;font-weight:bold;bottom:0;}.button.__jsx-style-dynamic-selector .button-info.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{font-size:.9em;margin:0;margin:2px 0;font-weight:bold;text-transform:uppercase;}.button.__jsx-style-dynamic-selector .button-info.__jsx-style-dynamic-selector .info-title.__jsx-style-dynamic-selector{font-size:.7em;text-transform:uppercase;font-weight:400;}.button.__jsx-style-dynamic-selector .button-info.__jsx-style-dynamic-selector .info-desc.__jsx-style-dynamic-selector{font-size:.5em;font-weight:300;min-width:50%;text-transform:uppercase;}@media ".concat(device.tablet, "{.buttonsContainer.__jsx-style-dynamic-selector{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWFyb25cXERvY3VtZW50c1xcR2l0SHViXFxGcm9udEVuZENoYWxsZW5nZVxcY29tcG9uZW50c1xccHVyZVxcSG9tZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RXdCLEFBRzhDLEFBUUQsQUFTRCxBQU9BLEFBY08sQUFLSixBQU9OLEFBUXFCLEFBVWQsQUFXQSxBQVlELEFBUUEsQUFNQSxBQVFXLFNBOURaLEdBakNELEFBT0EsQ0FoQkEsQ0FSQyxDQXNDMEMsQUFLeEMsQUFnRFAsQUFRZ0IsQUFNVCxDQXJDbUIsQUFXQSxPQTVCckIsQ0F5Q0QsQ0FuRU8sR0F4QlAsRUF5REMsQ0FkVyxBQThEWCxNQXREakIsQUF5Q29CLEdBT0QsQ0FsR0UsR0F3QkwsQUFpQ1MsQ0FnREcsS0F0Q1AsQUFXQSxJQWNPLEVBakRaLEFBd0RoQixHQWxHNEIsT0FvQzVCLEFBcUJnQixFQVVFLEFBV0EsQ0FuQ2xCLENBOERBLFFBS0ksQ0FsQkosSUF4QmlCLEFBV0osQ0E5RW9CLEVBY1AsQ0FURCxNQTBFUixJQVhHLFVBWUEsTUEvRXBCLENBb0VhLElBOUNTLE1BK0NiLEFBV0csTUFWWixHQVdBLE9BekJ5Qix5QkFuREgsb0JBU0EsMEJBU0ksT0FrQ0Esd0NBbkRMLG9CQVNJLGdDQVNQLGNBakJRLENBa0JELEVBaUNKLGtCQUNyQixXQTNDQSwrQ0FVcUIsa0JBQ0osRUFuQkYsWUFDZixBQW1CdUQsbURBQ3hCLDhEQUMvQiIsImZpbGUiOiJDOlxcVXNlcnNcXEFhcm9uXFxEb2N1bWVudHNcXEdpdEh1YlxcRnJvbnRFbmRDaGFsbGVuZ2VcXGNvbXBvbmVudHNcXHB1cmVcXEhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7ZGV2aWNlcywgc2VhcmNoLCBob21lfSA9IHRoaXMucHJvcHMuc3RhdHNcclxuICAgICAgICBjb25zdCBzaXplID0ge1xyXG4gICAgICAgICAgICBtb2JpbGVTOiAnMzIwcHgnLFxyXG4gICAgICAgICAgICBtb2JpbGVNOiAnMzc1cHgnLFxyXG4gICAgICAgICAgICBtb2JpbGVMOiAnNDI1cHgnLFxyXG4gICAgICAgICAgICB0YWJsZXQ6ICc3NjhweCcsXHJcbiAgICAgICAgICAgIGxhcHRvcDogJzEwMjRweCcsXHJcbiAgICAgICAgICAgIGxhcHRvcEw6ICcxNDQwcHgnLFxyXG4gICAgICAgICAgICBkZXNrdG9wOiAnMjU2MHB4J1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNvbnN0IGRldmljZSA9IHtcclxuICAgICAgICAgICAgbW9iaWxlUzogYChtaW4td2lkdGg6ICR7c2l6ZS5tb2JpbGVTfSlgLFxyXG4gICAgICAgICAgICBtb2JpbGVNOiBgKG1pbi13aWR0aDogJHtzaXplLm1vYmlsZU19KWAsXHJcbiAgICAgICAgICAgIG1vYmlsZUw6IGAobWluLXdpZHRoOiAke3NpemUubW9iaWxlTH0pYCxcclxuICAgICAgICAgICAgdGFibGV0OiBgKG1pbi13aWR0aDogJHtzaXplLnRhYmxldH0pYCxcclxuICAgICAgICAgICAgbGFwdG9wOiBgKG1pbi13aWR0aDogJHtzaXplLmxhcHRvcH0pYCxcclxuICAgICAgICAgICAgbGFwdG9wTDogYChtaW4td2lkdGg6ICR7c2l6ZS5sYXB0b3BMfSlgLFxyXG4gICAgICAgICAgICBkZXNrdG9wOiBgKG1pbi13aWR0aDogJHtzaXplLmRlc2t0b3B9KWAsXHJcbiAgICAgICAgICAgIGRlc2t0b3BMOiBgKG1pbi13aWR0aDogJHtzaXplLmRlc2t0b3B9KWBcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIHVzZXItc2NhbGFibGU9bm9cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkhvbWU8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjYuMy9jc3MvYWxsLmNzc1wiIGludGVncml0eT1cInNoYTM4NC1VSFJ0WkxJK3BieHRIQ1dwMXQ3N0JpMUw0WnRpcXJxRDgwS240WjhOVFNSeU1BMkZkMzNuNWRROGxXVUUwMHMvXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIj48L2xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICAgICA8aGVhZGVyPkNoYWxsZW5nZTwvaGVhZGVyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uc0NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uXCIga2V5PXtkZXZpY2VzLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24taW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q29ubmVjdGVkIGRldmljZXM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmZvLXRpdGxlXCI+e2RldmljZXMudGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5mby1kZXNjXCI+e2RldmljZXMuYm9keX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tYWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48aSBjbGFzcz1cImZhcyBmYS1tb2JpbGUtYWx0XCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkRldmljZXM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uXCIga2V5PXtzZWFyY2guaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5SZWNlbnQgc2VhcmNoZXM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmZvLXRpdGxlXCI+e3NlYXJjaC50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmZvLWRlc2NcIj57c2VhcmNoLmJvZHl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tYWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48aSBjbGFzcz1cImZhcyBmYS1zZWFyY2hcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+U2VhcmNoPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIiBrZXk9e2hvbWUuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Vc2VyIFN0YXRzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5mby10aXRsZVwiPntob21lLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImluZm8tZGVzY1wiPntob21lLmJvZHl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWFjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gPjxpIGNsYXNzPVwiZmFzIGZhLWhvbWVcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+SG9tZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IzEzMjIzODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6M2VtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYnV0dG9uc0NvbnRhaW5lcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOm5vLXdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46MjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5idXR0b257XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5idXR0b24gLmJ1dHRvbi1hY3Rpb257XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM5OGNjZDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46MjBweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggNXB4IDNweCByZ2JhKDU0LDc4LDEwNCwxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYnV0dG9uIC5idXR0b24tYWN0aW9uOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MjJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCA1cHggNXB4IHJnYmEoNTQsNzgsMTA0LDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5idXR0b24gLmJ1dHRvbi1hY3Rpb24gcHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6LjZlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjo1cHggMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYnV0dG9uIC5idXR0b24tYWN0aW9uIHNwYW57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IzEzMjIzODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6M2VtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJ1dHRvbiAuYnV0dG9uLWluZm8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OjFweCBzb2xpZCAjMzY0ZTY4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MCA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzpib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6ZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYnV0dG9uIC5idXR0b24taW5mbzpiZWZvcmV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcXGYxMTFcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOi4zZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IzEzMjIzODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6LTNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYnV0dG9uIC5idXR0b24taW5mbzphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlxcZjExMVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6LjNlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0Oi0zcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IzEzMjIzODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTowO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYnV0dG9uIC5idXR0b24taW5mbyBwe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTouOWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjoycHggMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYnV0dG9uIC5idXR0b24taW5mbyAuaW5mby10aXRsZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6LjdlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5idXR0b24gLmJ1dHRvbi1pbmZvIC5pbmZvLWRlc2N7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOi41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6MzAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDo1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAke2RldmljZS50YWJsZXR9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYnV0dG9uc0NvbnRhaW5lcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgICAgICAgICBib2R5e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ViZjBmNjtcclxuICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBgXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSJdfQ== */\n/*@ sourceURL=C:\\Users\\Aaron\\Documents\\GitHub\\FrontEndChallenge\\components\\pure\\Home.js */"),
        dynamic: [device.tablet],
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1335254097",
        css: "body{font-family:system-ui;margin:0;background:#ebf0f6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWFyb25cXERvY3VtZW50c1xcR2l0SHViXFxGcm9udEVuZENoYWxsZW5nZVxcY29tcG9uZW50c1xccHVyZVxcSG9tZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5TW9CLEFBR2tELHNCQUNkLFNBQ1csbUJBQ3ZCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQWFyb25cXERvY3VtZW50c1xcR2l0SHViXFxGcm9udEVuZENoYWxsZW5nZVxcY29tcG9uZW50c1xccHVyZVxcSG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHtkZXZpY2VzLCBzZWFyY2gsIGhvbWV9ID0gdGhpcy5wcm9wcy5zdGF0c1xyXG4gICAgICAgIGNvbnN0IHNpemUgPSB7XHJcbiAgICAgICAgICAgIG1vYmlsZVM6ICczMjBweCcsXHJcbiAgICAgICAgICAgIG1vYmlsZU06ICczNzVweCcsXHJcbiAgICAgICAgICAgIG1vYmlsZUw6ICc0MjVweCcsXHJcbiAgICAgICAgICAgIHRhYmxldDogJzc2OHB4JyxcclxuICAgICAgICAgICAgbGFwdG9wOiAnMTAyNHB4JyxcclxuICAgICAgICAgICAgbGFwdG9wTDogJzE0NDBweCcsXHJcbiAgICAgICAgICAgIGRlc2t0b3A6ICcyNTYwcHgnXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgY29uc3QgZGV2aWNlID0ge1xyXG4gICAgICAgICAgICBtb2JpbGVTOiBgKG1pbi13aWR0aDogJHtzaXplLm1vYmlsZVN9KWAsXHJcbiAgICAgICAgICAgIG1vYmlsZU06IGAobWluLXdpZHRoOiAke3NpemUubW9iaWxlTX0pYCxcclxuICAgICAgICAgICAgbW9iaWxlTDogYChtaW4td2lkdGg6ICR7c2l6ZS5tb2JpbGVMfSlgLFxyXG4gICAgICAgICAgICB0YWJsZXQ6IGAobWluLXdpZHRoOiAke3NpemUudGFibGV0fSlgLFxyXG4gICAgICAgICAgICBsYXB0b3A6IGAobWluLXdpZHRoOiAke3NpemUubGFwdG9wfSlgLFxyXG4gICAgICAgICAgICBsYXB0b3BMOiBgKG1pbi13aWR0aDogJHtzaXplLmxhcHRvcEx9KWAsXHJcbiAgICAgICAgICAgIGRlc2t0b3A6IGAobWluLXdpZHRoOiAke3NpemUuZGVza3RvcH0pYCxcclxuICAgICAgICAgICAgZGVza3RvcEw6IGAobWluLXdpZHRoOiAke3NpemUuZGVza3RvcH0pYFxyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgdXNlci1zY2FsYWJsZT1ub1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+SG9tZTwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuNi4zL2Nzcy9hbGwuY3NzXCIgaW50ZWdyaXR5PVwic2hhMzg0LVVIUnRaTEkrcGJ4dEhDV3AxdDc3QmkxTDRadGlxcnFEODBLbjRaOE5UU1J5TUEyRmQzM241ZFE4bFdVRTAwcy9cIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiPjwvbGluaz5cclxuICAgICAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgICAgIDxoZWFkZXI+Q2hhbGxlbmdlPC9oZWFkZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIiBrZXk9e2RldmljZXMuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Db25uZWN0ZWQgZGV2aWNlczwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImluZm8tdGl0bGVcIj57ZGV2aWNlcy50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmZvLWRlc2NcIj57ZGV2aWNlcy5ib2R5fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1hY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxpIGNsYXNzPVwiZmFzIGZhLW1vYmlsZS1hbHRcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RGV2aWNlczwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIiBrZXk9e3NlYXJjaC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlJlY2VudCBzZWFyY2hlczwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImluZm8tdGl0bGVcIj57c2VhcmNoLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImluZm8tZGVzY1wiPntzZWFyY2guYm9keX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1hY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxpIGNsYXNzPVwiZmFzIGZhLXNlYXJjaFwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5TZWFyY2g8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvblwiIGtleT17aG9tZS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlVzZXIgU3RhdHM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmZvLXRpdGxlXCI+e2hvbWUudGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5mby1kZXNjXCI+e2hvbWUuYm9keX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tYWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiA+PGkgY2xhc3M9XCJmYXMgZmEtaG9tZVwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Ib21lPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjojMTMyMjM4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTozZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5idXR0b25zQ29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6bm8td3JhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjoyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJ1dHRvbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46MjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJ1dHRvbiAuYnV0dG9uLWFjdGlvbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzk4Y2NkMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjoyMHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCA1cHggM3B4IHJnYmEoNTQsNzgsMTA0LDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5idXR0b24gLmJ1dHRvbi1hY3Rpb246aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToyMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDVweCA1cHggcmdiYSg1NCw3OCwxMDQsMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJ1dHRvbiAuYnV0dG9uLWFjdGlvbiBwe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTouNmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjVweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5idXR0b24gLmJ1dHRvbi1hY3Rpb24gc3BhbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjojMTMyMjM4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTozZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYnV0dG9uIC5idXR0b24taW5mbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6MXB4IHNvbGlkICMzNjRlNjg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzowIDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczpmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5idXR0b24gLmJ1dHRvbi1pbmZvOmJlZm9yZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlxcZjExMVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6LjNlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjojMTMyMjM4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDotM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDowO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5idXR0b24gLmJ1dHRvbi1pbmZvOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxmMTExXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTouM2VtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6LTNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjojMTMyMjM4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5idXR0b24gLmJ1dHRvbi1pbmZvIHB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOi45ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjJweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5idXR0b24gLmJ1dHRvbi1pbmZvIC5pbmZvLXRpdGxle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTouN2VtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDo0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJ1dHRvbiAuYnV0dG9uLWluZm8gLmluZm8tZGVzY3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6LjVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDozMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOjUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhICR7ZGV2aWNlLnRhYmxldH0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5idXR0b25zQ29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgIGJvZHl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWJmMGY2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGBcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il19 */\n/*@ sourceURL=C:\\Users\\Aaron\\Documents\\GitHub\\FrontEndChallenge\\components\\pure\\Home.js */",
        __self: this
      }));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.c184144096e5f025d062.hot-update.js.map