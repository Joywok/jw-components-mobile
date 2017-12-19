"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require("antd-mobile/lib/modal/index");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("jw-components-mobile/lib/button/index");

var _index4 = _interopRequireDefault(_index3);

var _JwAlert = require("./JwAlert");

var _JwAlert2 = _interopRequireDefault(_JwAlert);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _mobile = require("jw-form/dist/mobile");

var _mobile2 = _interopRequireDefault(_mobile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * JwMemoDialog(备注弹框 )
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 使用方法:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * import { JwMemoDialog } from 'jw-components-mobile';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * JwMemoDialog({
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     title: '请输入备注',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     defaultValue: '', // 默认值
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     placeholder: '请输入备注...',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     memorequired: false, //备注是否必填 true必填， false不必填
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     btnIconClass: 'icon-check-i', // button的icon图标,不传不显示
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     onBtnClick: ()=>{  // 点击按钮回调
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       console.log('onBtnClick')
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     onClose: ()=>{  // 关闭回调
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				console.log('onClose')
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     btnVal: '确认' // 此参数可不传，不传默认为“确认”   可传 拒绝或通过
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   });
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 可以从外面关闭弹框 let tmpmemodialog = JwMemoDialog({...});  tmpmemodialog.close();
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var JwMemoComponent = function (_Component) {
	_inherits(JwMemoComponent, _Component);

	function JwMemoComponent(props) {
		_classCallCheck(this, JwMemoComponent);

		var _this = _possibleConstructorReturn(this, (JwMemoComponent.__proto__ || Object.getPrototypeOf(JwMemoComponent)).call(this, props));

		_this.state = _this.props.jwDialogConfig;
		_this.state.show = true;
		_this.state.updating = false;
		return _this;
	}

	_createClass(JwMemoComponent, [{
		key: "changeData",
		value: function changeData(values, schema) {
			this.dataMemo = values[0]['defaultValue'];
			typeof this.props.jwDialogConfig.changeData == 'function' && this.props.jwDialogConfig.changeData(values);
			console.log("JwMemoDialog values:", values, "changeData:", schema);
		}
	}, {
		key: "btnClick",
		value: function btnClick() {
			var self = this;
			this.oldBtnVal = _.clone(this.state.btnVal);
			this.setState({ btnVal: '提交中…' });
			if (this.state.updating) {
				return;
			}
			if (this.state['memorequired'] == true && $.trim(this.dataMemo) == '') {
				(0, _JwAlert2.default)({
					tip: '请输入备注!',
					icon: 'icon-save-error',
					onOk: function onOk() {}
				});
				this.setState({ btnVal: this.oldBtnVal });
				return;
			}
			this.setState({ updating: true });
			typeof this.state.onBtnClick == 'function' ? this.state.onBtnClick(this.dataMemo, this.closeCallBack.bind(self)) : '';
		}
	}, {
		key: "closeCallBack",
		value: function closeCallBack(error) {
			var self = this;
			if (error) {
				this.setState({ updating: false, btnVal: self.oldBtnVal });
			} else {
				this.setState({ show: false });
				typeof self.props.onClose == 'function' ? self.props.onClose(self.dataMemo || self.state.defaultValue) : '';
			}
		}
	}, {
		key: "close",
		value: function close() {
			var self = this;
			this.setState({ show: false });
			setTimeout(function () {
				$(".jw-dialog").remove();
				typeof self.state.onClose == 'function' ? self.state.onClose(self.dataMemo || self.state.defaultValue) : '';
				typeof self.props.onClose == 'function' ? self.props.onClose(self.dataMemo || self.state.defaultValue) : '';
			}, 801);
		}
		// 组件加载完毕

	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			var height = $(_reactDom2.default.findDOMNode(this.refs.jwmemo)).height();
			$('.jw-dialog-w').css({
				marginTop: -(height / 2) + 'px'
			});
			if (this.state['show']) {
				$('.main-c').addClass('hide-scroll');
			} else {
				$('.main-c').removeClass('hide-scroll');
			}
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			this.dataMemo = this.dataMemo ? this.dataMemo : this.state.defaultValue ? this.state.defaultValue : '';
			var formData = {
				className: 'clear-padding',
				schema: [{
					name: 'feedback', element: 'Textarea',
					defaultValue: this.dataMemo,
					value: this.dataMemo,
					attr: {
						placeholder: this.state['placeholder'],
						autoHeight: true,
						count: 200
					},
					rows: 8,
					events: {
						onChange: function onChange() {
							var height = $('.jw-dialog-w').height();
							$('.jw-dialog-w').css({
								marginTop: -(height / 2) + 'px'
							});
						}
					},
					rules: []
				}],
				buttons: false,
				changeData: this.changeData.bind(this)
			};

			var moveing = void 0;
			if (this.state['show']) {
				moveing = 'bounceInUp';
				$('.jw-dialog').removeClass('hide');
			} else {
				moveing = 'bounceOutDown';
				setTimeout(function () {
					$('.jw-dialog').addClass('hide');
				}, 600);
			}
			return _react2.default.createElement(
				"div",
				{ className: "jw-dialog jw-modal fix" },
				_react2.default.createElement("div", { className: "jw-dialog-mark" }),
				_react2.default.createElement(
					"div",
					{ className: "jw-dialog-w animated " + moveing, ref: "jwmemo" },
					_react2.default.createElement("div", { className: "jw-dialog-close icon-close-b", onClick: function onClick(e) {
							return _this2.close(e);
						} }),
					_react2.default.createElement(
						"div",
						{ className: "jw-dialog-title" },
						this.state.avatar ? _react2.default.createElement(
							"div",
							{ className: "jw-dialog-pic" },
							_react2.default.createElement("img", { src: this.state.avatar })
						) : "",
						_react2.default.createElement(
							"div",
							{ className: "jw-dialog-title-c" },
							this.state["title"]
						)
					),
					_react2.default.createElement(
						"div",
						{ className: "jw-dialog-c" },
						_react2.default.createElement(
							"div",
							{ className: "appraisal-form" },
							_react2.default.createElement(_mobile2.default, { ref: "form", formData: formData, onChange: function onChange(values, schema) {
									return _this2.FormChange(values, schema);
								} })
						)
					),
					_react2.default.createElement(
						"div",
						{ className: "jw-dialog-btn", onClick: function onClick(e) {
								return _this2.btnClick(e);
							} },
						_react2.default.createElement("i", { className: this.state["btnIconClass"] ? this.state["btnIconClass"] : '' }),
						_react2.default.createElement(
							"span",
							null,
							this.state["btnVal"] ? this.state["btnVal"] : '确认'
						)
					)
				)
			);
		}
	}]);

	return JwMemoComponent;
}(_react.Component);

;

exports.default = function (props) {
	var div = document.createElement('div');
	document.body.appendChild(div);
	var close = function close() {
		setTimeout(function () {
			_reactDom2.default.unmountComponentAtNode(div);
		}, 600);
		if (div && div.parentNode) {
			$(div).find('.jw-dialog-w').addClass('bounceOutDown');
			setTimeout(function () {
				div.parentNode.removeChild(div);
			}, 600);
		}
	};
	_reactDom2.default.render(_react2.default.createElement(JwMemoComponent, { jwDialogConfig: props, onClose: close }), div);
	return { close: close };
};