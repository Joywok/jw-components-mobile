import { default as AntdCheckbox} from "antd-mobile/lib/checkbox/index";
import React from 'react';
import ReactDOM from 'react-dom';

const AntdCheckboxItem = AntdCheckbox.CheckboxItem;

class CheckboxTemplate extends React.Component{
	constructor(props) {
		super(props);
	}
	changeClass(){
		$(ReactDOM.findDOMNode(this.refs.JwCheckbox)).find('.am-checkbox').closest('.jw-checkbox-button').removeClass('jw-checkbox-checked');
		setTimeout(()=>{
		 $(ReactDOM.findDOMNode(this.refs.JwCheckbox)).parent().find('.am-checkbox-checked').closest('.jw-checkbox-button').addClass('jw-checkbox-checked');;
		})
	}
	onChange(){
		if(this.props.showtype){
			this.changeClass();
		}
	}
	render(){
		// return (
		// 	<AntdCheckboxItem ref="JwCheckbox" {...this.props} className={ this.props.showtype ? this.props.showtype : '' } onChange={() => this.onChange()} />
		// )
		return (
			<div className="jw-checkbox" ref="JwCheckbox" onChange={() => this.onChange()} >
  			<AntdCheckboxItem  {...this.props} className={ this.props.showtype ? this.props.showtype : '' } />
			</div>
		)
	}
};

const CheckboxItem = (props)=>{
  return <CheckboxTemplate {...props}/>
}

export default CheckboxItem;
