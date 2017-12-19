/**
 * jw公共弹框
 * 含以下内容：
 *  JwAlert(基础弹框 icon(可选)＋tip)，icon和文字内容都可设置，icon不传不显示，支持外部关闭
 *  JwConfirm(基础确认弹框 icon(可选)＋tip)，icon和文字内容都可设置，icon不传不显示，支持外部关闭
 *  JwMemoDialog(备注弹框)，可以手动输入，标题前和按钮前的icon不传不显示，支持外部关闭
 */

import Modal from "antd-mobile/lib/modal/index";
import JwAert from './JwAlert';
import JwConfirm from './JwConfirm';
import JwMemoDialog from './JwMemoDialog.js';
import './style/index';

console.log(JwAert,JwConfirm,JwMemoDialog,'jw')
Modal.jwAlert = JwAert;
Modal.jwConfirm = JwConfirm;
Modal.jwMemoDialog = JwMemoDialog;

export default Modal;
