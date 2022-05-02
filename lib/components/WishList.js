"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("./wishList.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function WishList(_ref) {
  var Query = _ref.Query,
      selfDelete = _ref.selfDelete,
      toogle = _ref.toogle;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "WishList"
  }, /*#__PURE__*/_react["default"].createElement("ul", {
    className: "WishList"
  }, toogle ? Query.map(function (element, index) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      className: "WishListItem",
      key: index
    }, /*#__PURE__*/_react["default"].createElement("span", null, element), /*#__PURE__*/_react["default"].createElement("button", {
      onClick: function onClick() {
        return selfDelete(index);
      }
    }, "Delete"));
  }) : null));
}

var _default = WishList;
exports["default"] = _default;