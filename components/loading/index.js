
import React,{ Component }from 'react';
import ReactDOM from 'react-dom';
class JwLoading extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    let type=this.props.type;
    switch(type){
      case 'spinner':
      return <div className="loading">      
       <div className="loading-spinner">
        <div className="spinner-container container1">
         <div className="circle1"></div>
         <div className="circle2"></div>
         <div className="circle3"></div>
         <div className="circle4"></div>
        </div>
        <div className="spinner-container container2">
         <div className="circle1"></div>
         <div className="circle2"></div>
         <div className="circle3"></div>
         <div className="circle4"></div>
        </div>
        <div className="spinner-container container3">
         <div className="circle1"></div>
         <div className="circle2"></div>
         <div className="circle3"></div>
         <div className="circle4"></div>
        </div>
       </div>
      </div>;
      break;
      case 'bounce':
      return <div className="loading">      
        <div className="loading-bounce">
          <span style={this.props.loadingStyle}></span>
          <span style={this.props.loadingStyle}></span>
          <span style={this.props.loadingStyle}></span>
          <span style={this.props.loadingStyle}></span>
          <span style={this.props.loadingStyle}></span>
       </div>
      </div>;
      break;
      case 'circle':
      return <div className="loading">      
       <div className="loading-wrap">
         <div className="loading-circle" >
           <div className="load-round"></div>
         </div>
       </div>
      </div>;
      break;
      default:
      return <div className="loading">      
        <div className="loading-bounce">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
       </div>
      </div>;
      break;
    }
    
  }
}
export default JwLoading;