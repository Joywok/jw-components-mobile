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

import Modal from "antd-mobile/lib/modal/index";
import Button from "jw-components-mobile/lib/button/index";
import JwAlert from './JwAlert';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from "jw-form/dist/mobile";

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

export default (props)=>{
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
