"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require("antd-mobile/lib/modal/index");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("jw-components-mobile/lib/button/index");

var _index4 = _interopRequireDefault(_index3);

var _CommonTemplate = require("./CommonTemplate");

var _CommonTemplate2 = _interopRequireDefault(_CommonTemplate);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  var alert = _index2.default.alert;
  var dialog = alert('', _react2.default.createElement(_CommonTemplate2.default, { className: "jw-confirm", tip: props.tip, icon: props.icon }), [{
    text: props.cancelbtn && props.cancelbtn.text ? props.cancelbtn.text : '取消',
    onPress: function onPress() {
      dialog.close();
      props.onCancel && typeof props.onCancel == 'function' ? props.onCancel() : '';
    }
  }, {
    text: props.okbtn && props.okbtn.text ? props.okbtn.text : '确认',
    onPress: function onPress() {
      dialog.close();
      props.onOk && typeof props.onOk == 'function' ? props.onOk() : '';
    }
  }, {
    text: _react2.default.createElement(
      "div",
      { className: "jw-alert-btn" },
      _react2.default.createElement(_index4.default, { className: "icon-alert-cancel" })
    ),
    onPress: function onPress() {
      dialog.close();
      props.onClose && typeof props.onClose == 'function' ? props.onClose() : '';
    }
  }]);
  return dialog;
}; /**
    * confirm 基础弹框 icon(可选)＋tip
    *
    * 使用方法:
    * import { JwConfirm } from 'jw-components-mobile';
    * JwConfirm({
         tip: '确认要提交维修订单？',
         icon: 'icon-alert-repair',
         onOk: ()=>{  // 点击确认回调
           console.log('onOk')
         },
         onCancel: ()=>{ // 取消回调
   
         },
         onClose: ()=>{ // 关闭弹框回调
   
         },
         okBtn: {   // 此参数可不传，不传默认为 确认
           text: '确认'
         },
         cancelBtn: { // 此参数可不传，不传默认为 取消
           text: '取消'
         }
       });
    * 可以从外面关闭弹框 let tmpconfirm = JwConfirm({...});  tmpconfirm.close();
    */