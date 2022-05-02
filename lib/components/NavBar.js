"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Nav = function Nav(props) {
  var toogleList = props.toogleList,
      refresh = props.refresh;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "navBar"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: refresh
  }, "Home"), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: toogleList
  }, "Show Wish List"));
};

var _default = Nav;
exports["default"] = _default;