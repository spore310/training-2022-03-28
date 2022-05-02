"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ResultList(_ref) {
  var _api$imageLinks;

  var api = _ref.api,
      addList = _ref.addList;
  return /*#__PURE__*/_react["default"].createElement("div", {
    onClick: function onClick() {
      return addList(api);
    }
  }, api !== null && api !== void 0 && api.title ? /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("strong", null, "Title:"), " ", api.title) : null, api !== null && api !== void 0 && api.publisher ? /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("strong", null, "Publisher:"), " ", api.publisher) : null, api !== null && api !== void 0 && api.publishedDate ? /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("strong", null, "Published date:"), " ", api.publishedDate) : null, api !== null && api !== void 0 && (_api$imageLinks = api.imageLinks) !== null && _api$imageLinks !== void 0 && _api$imageLinks.thumbnail ? /*#__PURE__*/_react["default"].createElement("img", {
    src: api.imageLinks.thumbnail,
    height: "100px",
    width: "100px"
  }) : null, api !== null && api !== void 0 && api.description ? /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("strong", null, "Description:"), " ", api.description) : null);
}

var _default = ResultList;
exports["default"] = _default;