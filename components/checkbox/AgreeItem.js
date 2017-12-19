import { default as AntdCheckbox} from "antd-mobile/lib/checkbox/index";
import React from 'react';

const AntdAgreeItem = AntdCheckbox.AgreeItem;

const AgreeItem = (props)=>{
  return <AntdAgreeItem {...props}/>
}

export default AgreeItem;
