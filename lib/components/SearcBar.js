"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchBar = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SearchBar = function SearchBar(props) {
  var onSubmit = props.onSubmit,
      setValue = props.setValue,
      currentValue = props.currentValue;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "searchBar"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "search",
    onChange: setValue,
    value: currentValue,
    placeholder: "Search"
  }), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onSubmit
  }, "Search"));
};

exports.SearchBar = SearchBar;