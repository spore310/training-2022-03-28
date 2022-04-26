"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _app = _interopRequireDefault(require("./components/app.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var container = document.getElementById('root');

var root = _reactDom["default"].createRoot(container);

root.render( /*#__PURE__*/_react["default"].createElement(_app["default"], null));