"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function WishList(_ref) {
  var Query = _ref.Query,
      selfDelete = _ref.selfDelete;
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", null, "Wish List Test"), /*#__PURE__*/_react["default"].createElement("ul", null, Query.map(function (element, index) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: index
    }, element, /*#__PURE__*/_react["default"].createElement("button", {
      onClick: function onClick() {
        return selfDelete(index);
      }
    }, "Delete"));
  })));
}

var _default = WishList;
exports["default"] = _default;