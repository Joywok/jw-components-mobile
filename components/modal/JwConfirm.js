/**
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

 import Modal from "antd-mobile/lib/modal/index";
 import Button from "jw-components-mobile/lib/button/index";
 import CommonTemplate from './CommonTemplate';
 import React, { Component } from 'react';
 import ReactDOM from 'react-dom';

 export default (props)=>{
  const alert = Modal.alert;
  const dialog = alert(
 		'',
 		(<CommonTemplate  className="jw-confirm" tip={ props.tip } icon={ props.icon }/>),
 		[{
 			text: props.cancelbtn&&props.cancelbtn.text ? props.cancelbtn.text : '取消',
 			onPress: () => {
 				dialog.close();
 				props.onCancel && typeof(props.onCancel)=='function' ? props.onCancel() : '';
 			},
 		},
 		{
 			text: props.okbtn&&props.okbtn.text ? props.okbtn.text : '确认',
 			onPress: () => {
 				dialog.close();
 				props.onOk && typeof(props.onOk)=='function' ? props.onOk() : '';
 			},
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
