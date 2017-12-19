'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * alert 基础弹框 icon(可选)＋tip
 *
 * 使用方法:
 * import { JwAlert } from 'jw-components-mobile';
 * JwAlert({
			tip: '已成功提交',
			icon: 'icon-create-success',
			onOk: ()=>{ // 点击确认回调
				console.log('onOk')
			},
			onClose: ()=>{ // 关闭弹框回调

			},
			okBtn: {   // 此参数可不传，不传默认为 知道了
				text: '确认'
			}
		});
 * 可以从外面关闭弹框 let tmpalert = JwAlert({...});  tmpalert.close();
 */

var JwAlert = exports.JwAlert = function JwAlert(props) {
  var alert = Modal.alert;
  var dialog = alert('', React.createElement(CommonTemplate, { className: 'jw-alert', tip: props.tip, icon: props.icon }), [{
    text: props.okBtn && props.okBtn.text ? props.okBtn.text : '知道了',
    onPress: function onPress() {
      dialog.close();
      props.onOk && typeof props.onOk == 'function' ? props.onOk() : '';
    }
  }, {
    text: React.createElement(
      'div',
      { className: 'jw-alert-btn' },
      React.createElement(Button, { className: 'icon-alert-cancel' })
    ),
    onPress: function onPress() {
      dialog.close();
      props.onClose && typeof props.onClose == 'function' ? props.onClose() : '';
    }
  }]);
  return dialog;
};