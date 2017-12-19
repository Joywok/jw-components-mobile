"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = require("antd-mobile/lib/list/index");

var _index2 = _interopRequireDefault(_index);

require("antd-mobile/lib/list/style/index");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var List = function List(props) {
  return _react2.default.createElement(_index2.default, _extends({ className: "jw-list" }, props));
};

exports.default = List;

List.Item = _index2.default.Item;
List.defaultProps = {
  prefixCls: 'am-list'
};

_index2.default.defaultProps = List.defaultProps;