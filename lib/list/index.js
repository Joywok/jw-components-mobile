'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = require('antd-mobile/lib/list/index');

var _index2 = _interopRequireDefault(_index);

require('antd-mobile/lib/list/style/index');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var JwList = function JwList(props) {
    return _react2.default.createElement(_index2.default, _extends({ className: 'jw-list' }, props));
};
JwList.Item = _index2.default.Item;
JwList.Item.Brief = _index2.default.Item.Brief;
exports.default = JwList;