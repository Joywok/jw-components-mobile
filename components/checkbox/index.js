import { default as AntdCheckbox} from "antd-mobile/lib/checkbox/index";
import CheckboxItem from "./CheckboxItem";
import AgreeItem from "./AgreeItem";
import React from 'react';

const Checkbox = (props)=>{
  return <AntdCheckbox {...props}/>
}

Checkbox.CheckboxItem = CheckboxItem;
Checkbox.AgreeItem = AgreeItem;

export default Checkbox;
