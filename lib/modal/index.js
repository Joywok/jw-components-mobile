'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('antd-mobile/lib/modal/index');

var _index2 = _interopRequireDefault(_index);

var _JwAlert = require('./JwAlert');

var _JwAlert2 = _interopRequireDefault(_JwAlert);

var _JwConfirm = require('./JwConfirm');

var _JwConfirm2 = _interopRequireDefault(_JwConfirm);

var _JwMemoDialog = require('./JwMemoDialog.js');

var _JwMemoDialog2 = _interopRequireDefault(_JwMemoDialog);

require('./style/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_JwAlert2.default, _JwConfirm2.default, _JwMemoDialog2.default, 'jw'); /**
                                                                                    * jw公共弹框
                                                                                    * 含以下内容：
                                                                                    *  JwAlert(基础弹框 icon(可选)＋tip)，icon和文字内容都可设置，icon不传不显示，支持外部关闭
                                                                                    *  JwConfirm(基础确认弹框 icon(可选)＋tip)，icon和文字内容都可设置，icon不传不显示，支持外部关闭
                                                                                    *  JwMemoDialog(备注弹框)，可以手动输入，标题前和按钮前的icon不传不显示，支持外部关闭
                                                                                    */

_index2.default.jwAlert = _JwAlert2.default;
_index2.default.jwConfirm = _JwConfirm2.default;
_index2.default.jwMemoDialog = _JwMemoDialog2.default;

exports.default = _index2.default;