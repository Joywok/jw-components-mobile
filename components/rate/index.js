import Rate from "antd/lib/rate/index";
import React , {Component} from 'react';
import ReactDOM from 'react-dom';

class JwRate extends Component{
  componentDidMount(){
    // character 为 number
    if(this.props.character=="number"){
      let jw_rate = $(ReactDOM.findDOMNode(this.refs.jwRate)).find('li');
      var min = this.props.min;
      var max = this.props.max;
      for(var i = min; i<= max; i++){
        jw_rate.eq(i-min).find('.ant-rate-star-first')[0].innerHTML = i;
        jw_rate.eq(i-min).find('.ant-rate-star-second')[0].innerHTML = i;
      }
    }
  }
  // count 不同，className不同（间距不同）
  addClassName(){
    // character 为 number 时，count 值
    let jw_rate_count = this.props.max - this.props.min + 1;
    let count = this.props.character=='number' ? jw_rate_count : this.props.count;
    let countClass = 'jw-rate-count-'+(count > 5 ? count : 5);
    return countClass;
  }
  render(){
    return(
      <div className="jw-rate-w">
        <Rate
          className={"jw-rate " + (this.props.character=="number" ? 'jw-rate-number ' : '') + (this.addClassName())}
          ref="jwRate"
          count={ this.props.character=="number" ? this.props.max - this.props.min + 1 : this.props.count }
          {...this.props}
        />
      </div>
    )
  }
}

export default JwRate;
