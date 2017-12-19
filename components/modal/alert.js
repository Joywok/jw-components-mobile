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

export const JwAlert = (props)=>{
	const alert = Modal.alert;
	const dialog = alert(
    '',
    (<CommonTemplate className="jw-alert"  tip={ props.tip } icon={ props.icon }/>),
    [{
      text: props.okBtn&&props.okBtn.text ? props.okBtn.text : '知道了',
      onPress: () => {
        dialog.close();
        props.onOk && typeof(props.onOk)=='function' ? props.onOk() : '';
      }
    },
    {
      text: (<div className="jw-alert-btn"><Button className="icon-alert-cancel"></Button></div>),
      onPress: () => {
        dialog.close();
        props.onClose && typeof(props.onClose)=='function' ? props.onClose() : '';
      },
    }]
  )
  return dialog;
}
