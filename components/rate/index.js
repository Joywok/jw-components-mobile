import Rate from "antd/lib/rate/index";
import React , {Component} from 'react';
import ReactDOM from 'react-dom';

class JwRate extends Component{
  componentDidMount(){
    if(this.props.character=="number"){
      let jw_rate = $(ReactDOM.findDOMNode(this.refs.jwRate)).find('li');
      var min = this.props.min;
      var max = this.props.max;
      for(var i = min; i<= max; i++){
        if(min==0){
          jw_rate.eq(i).find('.ant-rate-star-first')[0].innerHTML = i;
          jw_rate.eq(i).find('.ant-rate-star-second')[0].innerHTML = i;
        }else{
          jw_rate.eq(i-1).find('.ant-rate-star-first')[0].innerHTML = i;
          jw_rate.eq(i-1).find('.ant-rate-star-second')[0].innerHTML = i;
        }
      }
    }
  }
  render(){
    return(
      <div className="jw-rate-w">
        <Rate className={"jw-rate " + (this.props.character=="number" ? 'jw-rate-number' : '')} ref="jwRate" {...this.props} />
      </div>
    )
  }
}

export default JwRate;
