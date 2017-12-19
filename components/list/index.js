import {default as AntdList } from "antd-mobile/lib/list/index";
import "antd-mobile/lib/list/style/index";
import React from 'react';

const List = (props)=>{
  return <AntdList className="jw-list" {...props} />
}

export default List;
List.Item = AntdList.Item;
List.defaultProps = {
    prefixCls: 'am-list'
};

AntdList.defaultProps = List.defaultProps;
