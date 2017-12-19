"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require("antd-mobile/lib/checkbox/index");

var _index2 = _interopRequireDefault(_index);

var _CheckboxItem = require("./CheckboxItem");

var _CheckboxItem2 = _interopRequireDefault(_CheckboxItem);

var _AgreeItem = require("./AgreeItem");

var _AgreeItem2 = _interopRequireDefault(_AgreeItem);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkbox = function Checkbox(props) {
  return _react2.default.createElement(_index2.default, props);
};

Checkbox.CheckboxItem = _CheckboxItem2.default;
Checkbox.AgreeItem = _AgreeItem2.default;

exports.default = Checkbox;