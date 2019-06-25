/**
 * 时间选择器
 * 修复了 初始时间为空， 且设置了 minuteStep时，选择的界面出现 minuteStep 之外的当前时间。
 *
 * 使用方法：
 import { DatePicker, List } from 'jw-components-mobile';
 
 render(){
		return (<List className="date-picker-list" style={{ backgroundColor: 'white' }}>
	    <DatePicker
	      mode="time"
	      extra="请选择"
	      minuteStep={30}
	      value={this.state.time}
	      onChange={ time => console.log('onChange::time',time) }
	    >
	      <List.Item arrow="horizontal">Time</List.Item>
	    </DatePicker>
	  </List>)
 }
 *
 * author: mengying
 * time: 20190625
*/

import DatePicker from "antd-mobile/lib/date-picker/index";
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class JwDatePicker extends Component{
	constructor(props) {
    super(props);
    this.state = {
    	value: this.props.value
    }
  }

  // 初始值为空时，
  componentDidMount(){
    if(!this.props.value){
    	this.datePickerExtraEl = $(ReactDOM.findDOMNode(this.refs.JWDatepicker)).find(this.props.prefixCls ? ('.'+this.props.prefixCls+' -extra'): '.am-list-extra');
    	this.setState({ initDate: this.datePickerExtraEl.text() });
    	this.datePickerExtraEl.html(this.props.extra || '');
    }
  }
  
  render(){	
  	let self = this,
  			dpValue = this.state.value,
  			newprops = { ...this.props },
  			now = new Date(),
  			defaultMinite,
  			newTime,
  			newMinite,
  			Multiple; 
  	
  	// 如果设置了步长，就按步长重新设置一个默认值
  	if(this.props.minuteStep && this.props.minuteStep>1){
  		newTime = dpValue ? dpValue : now;
  		defaultMinite = dpValue ? dpValue.getMinutes() : now.getMinutes();
  		Multiple = Math.round(defaultMinite/this.props.minuteStep);
  		newMinite = Multiple*this.props.minuteStep;
  		dpValue = new Date( newTime.getFullYear(), newTime.getMonth(), newTime.getDate(), newTime.getHours(), newMinite );
  	}
		
		newprops = _.extend(newprops,{
			value: dpValue,
			onChange: (value) => {
				self.setState({
					value: value
				});
				if( self.datePickerExtraEl && self.datePickerExtraEl.text() == self.props.extra ){
					self.datePickerExtraEl.html( self.state.initDate )
				}
				typeof(self.props.onChange) == 'function' ? self.props.onChange(value) : '';
			}
		});

		return (
				<div className={ "jw-datepicker " + (this.props.disabled == true ? 'disabled' : '') }>
					<DatePicker { ...newprops } ref="JWDatepicker" >
	        </DatePicker>
				</div>
				);

	}

}

export default JwDatePicker;
