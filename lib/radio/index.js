'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('antd-mobile/lib/radio/index');

var _index2 = _interopRequireDefault(_index);

require('./style/index');

var _RadioItem = require('./RadioItem');

var _RadioItem2 = _interopRequireDefault(_RadioItem);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Radio = function Radio(props) {
  return _react2.default.createElement(_index2.default, props);
};

Radio.RadioItem = _RadioItem2.default;
exports.default = Radio;