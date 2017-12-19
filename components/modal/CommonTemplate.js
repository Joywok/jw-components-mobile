import React, { Component } from 'react';
import ReactDOM from 'react-dom';

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

export default CommonTemplate;
