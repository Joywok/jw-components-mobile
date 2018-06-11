import React,{ Component }from 'react';
import uploadImg from './upload@2x.png';


class Upload extends Component{

	constructor(props) {
    	super(props);
	}

	render(){

		return (
	    	<div className="form-edit-item-w">
	      		<img src={uploadImg} />
			</div>
	    );
	}

	componentWillMount(){}

	componentDidMount(){}	


}

export default Upload;