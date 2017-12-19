import { default as AntdRadio} from "antd-mobile/lib/radio/index";
import './style/index';
import RadioItem from './RadioItem';
import React from 'react';

const Radio = (props)=>{
  return <AntdRadio {...props}/>
}

Radio.RadioItem = RadioItem;
export default Radio;
