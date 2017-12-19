import { default as AntdRadio} from "antd-mobile/lib/radio/index";
import './style/index';
import React from 'react';
import ReactDOM from 'react-dom';

const AntdRadioItem = AntdRadio.RadioItem;

class RadioTemplate extends React.Component{
	constructor(props) {
		super(props);
	}
  // 当处于选中状态时，改变背景颜色和字体颜色
  addClass(){
    setTimeout(()=>{
      $(ReactDOM.findDOMNode(this.refs.JwRadio)).find('.am-radio-checked').closest('.jw-radio').find('.am-list-content').addClass('jw-radio-checked');
    })
  }
  onChange(){
    if(this.props.showtype){
      $(ReactDOM.findDOMNode(this.refs.JwRadio)).closest('.jw-radio').siblings().find('.jw-radio-checked').removeClass('jw-radio-checked');
      this.addClass();
    }
  }
  componentDidMount(){
    if(this.props.showtype){
      this.addClass();
    }
  }
	render(){
		return (
      <div className="jw-radio" onChange={() => this.onChange()} ref="JwRadio">
        <AntdRadioItem  {...this.props} className={ this.props.showtype ? this.props.showtype : '' }/>
      </div>
    )
	}
};

const RadioItem = (props)=>{
  return <RadioTemplate {...props}/>
}

export default RadioItem;
