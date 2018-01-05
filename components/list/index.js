import List from "antd-mobile/lib/list/index";
import 'antd-mobile/lib/list/style/index';

import React from 'react';
import ReactDOM from 'react-dom';
const JwList= (props) => (
    <List className="jw-list" {...props}  />
);
JwList.Item=List.Item;
JwList.Item.Brief=List.Item.Brief;
export default JwList;