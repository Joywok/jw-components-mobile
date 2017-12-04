/**
 * jw公共弹框
 * 含以下内容：
 *  JwAlert(基础弹框 icon(可选)＋tip)，icon和文字内容都可设置，icon不传不显示，支持外部关闭
 *  JwConfirm(基础确认弹框 icon(可选)＋tip)，icon和文字内容都可设置，icon不传不显示，支持外部关闭
 *  JwMemoDialog(备注弹框)，可以手动输入，标题前和按钮前的icon不传不显示，支持外部关闭
 */

import Modal from "antd-mobile/lib/modal/index";
import Button from "jw-components-mobile/lib/button/index";   //这里是从jw-components-mobile里引过来还是从antd-mobile里引过来?????
import "./style/index";  //有问题还未定位到，需手动引入css
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from "jw-form/dist/mobile";

// Common Template(公共模板),tip和icon
class CommonTemplate extends Component{
	constructor(props) {
		super(props);
	}
  // 组件加载完毕
  componentDidMount(){
		$(ReactDOM.findDOMNode(this.refs.jwModalAlert)).closest('.am-modal-wrap').parent().addClass(this.props.className);
  }
	render(){
		let icon = this.props.icon ? (<i className={ this.props.icon }></i>) : '';
		return (<div className="jw-alert-simple" ref="jwModalAlert">
				{ icon }
				<p>{ this.props.tip }</p>
			</div>)
	}
};

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

 export const JwConfirm = (props)=>{
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

/**
 * JwMemoDialog(备注弹框 )
 *
 * 使用方法:
 * import { JwMemoDialog } from 'jw-components-mobile';
 * JwMemoDialog({
      title: '请输入备注',
      defaultValue: '', // 默认值
      placeholder: '请输入备注...',
      memorequired: false, //备注是否必填 true必填， false不必填
      btnIconClass: 'icon-check-i', // button的icon图标,不传不显示
      onBtnClick: ()=>{  // 点击按钮回调
        console.log('onBtnClick')
      },
      onClose: ()=>{  // 关闭回调
				console.log('onClose')
      },
      btnVal: '确认' // 此参数可不传，不传默认为“确认”   可传 拒绝或通过
    });
 * 可以从外面关闭弹框 let tmpmemodialog = JwMemoDialog({...});  tmpmemodialog.close();
 */

class JwMemoComponent extends Component{
	constructor(props) {
		super(props);
		this.state = this.props.jwDialogConfig;
		this.state.show = true;
		this.state.updating = false;
	}
	changeData(values,schema){
		this.dataMemo = values[0]['defaultValue'];
    typeof(this.props.jwDialogConfig.changeData)=='function' && this.props.jwDialogConfig.changeData(values)
		console.log("JwMemoDialog values:",values,"changeData:",schema);
	}
	btnClick(){
		let self = this;
		this.oldBtnVal =  _.clone(this.state.btnVal);
		this.setState({btnVal:'提交中…'});
		if(this.state.updating){
			return
		}
		if(this.state['memorequired'] == true && $.trim(this.dataMemo)==''){
			JwAlert({
				tip: '请输入备注!',
				icon: 'icon-save-error',
				onOk: ()=>{}
			});
			this.setState({btnVal:this.oldBtnVal})
			return;
		}
		this.setState({updating:true});
		typeof(this.state.onBtnClick) == 'function' ? this.state.onBtnClick(this.dataMemo,this.closeCallBack.bind(self)) : '';
	}
	closeCallBack(error){
		let self = this;
		if(error){
			this.setState({updating:false,btnVal:self.oldBtnVal});
		}else{
			this.setState({show: false});
			typeof(self.props.onClose) == 'function' ? self.props.onClose(self.dataMemo||self.state.defaultValue) : '';
		}
	}
	close(){
		let self = this;
		this.setState({show: false});
		setTimeout(()=>{
			$(".jw-dialog").remove();
			typeof(self.state.onClose) == 'function' ? self.state.onClose(self.dataMemo||self.state.defaultValue) : '';
			typeof(self.props.onClose) == 'function' ? self.props.onClose(self.dataMemo||self.state.defaultValue) : '';
		},801)
	}
  // 组件加载完毕
  componentDidMount(){
		let height = $(ReactDOM.findDOMNode(this.refs.jwmemo)).height();
		$('.jw-dialog-w').css({
			marginTop:-(height/2)+'px'
		})
		if(this.state['show']){
			$('.main-c').addClass('hide-scroll')
		}else{
			$('.main-c').removeClass('hide-scroll')
		}
	}
	render(){
		this.dataMemo = this.dataMemo ? this.dataMemo : (this.state.defaultValue ? this.state.defaultValue : '');
		let formData={
			className:'clear-padding',
			schema:[
				{
					name:'feedback',element:'Textarea',
					defaultValue: this.dataMemo,
					value: this.dataMemo,
					attr:{
						placeholder:(this.state['placeholder']),
						autoHeight:true,
						count:200,
					},
          rows:8,
					events:{
						onChange(){
							let height = $('.jw-dialog-w').height();
							$('.jw-dialog-w').css({
								marginTop:-(height/2)+'px'
							})
						}
					},
					rules:[]
				}
			],
			buttons:false,
			changeData:this.changeData.bind(this)
		}

		let moveing;
		if(this.state['show']){
			moveing = 'bounceInUp';
			$('.jw-dialog').removeClass('hide');
		}else{
			moveing = 'bounceOutDown'
			setTimeout(()=>{
				$('.jw-dialog').addClass('hide');
			},600);
		}
		return (<div className={"jw-dialog jw-modal fix"}>
			<div className="jw-dialog-mark"></div>
			<div className={"jw-dialog-w animated "+(moveing)} ref="jwmemo">
				<div className="jw-dialog-close icon-close-b" onClick={(e)=>this.close(e)}></div>
				<div className="jw-dialog-title">
					{this.state.avatar ? <div className="jw-dialog-pic"><img src={ this.state.avatar }></img></div> : ""}
					<div className="jw-dialog-title-c">{this.state["title"]}</div>
				</div>
				<div className="jw-dialog-c">
					<div className="appraisal-form">
						<Form ref='form' formData={formData} onChange={(values,schema)=>this.FormChange(values,schema)}/>
					</div>
				</div>
				<div className="jw-dialog-btn" onClick={(e)=>this.btnClick(e)}>
					<i className={this.state["btnIconClass"] ? this.state["btnIconClass"] : ''}></i>
					<span>{this.state["btnVal"] ? this.state["btnVal"] : '确认'}</span>
				</div>
			</div>
		</div>)
	}
};

export const JwMemoDialog = (props)=>{
  var div = document.createElement('div');
  document.body.appendChild(div);
  const close = ()=>{
  	setTimeout(()=>{
	  	ReactDOM.unmountComponentAtNode(div);
  	},600)
    if (div && div.parentNode) {
    	$(div).find('.jw-dialog-w').addClass('bounceOutDown');
    	setTimeout(()=>{
        div.parentNode.removeChild(div);
    	},600)
    }
  }
	ReactDOM.render(<JwMemoComponent jwDialogConfig={ props } onClose={ close }/>, div);
  return { close: close };
}
