'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require('antd-mobile/lib/date-picker/index');

var _index2 = _interopRequireDefault(_index);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 时间选择器
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 修复了 初始时间为空， 且设置了 minuteStep时，选择的界面出现 minuteStep 之外的当前时间。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 使用方法：
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                import { DatePicker, List } from 'jw-components-mobile';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                render(){
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		return (<List className="date-picker-list" style={{ backgroundColor: 'white' }}>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	    <DatePicker
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	      mode="time"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	      extra="请选择"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	      minuteStep={30}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	      value={this.state.time}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	      onChange={ time => console.log('onChange::time',time) }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	    >
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	      <List.Item arrow="horizontal">Time</List.Item>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	    </DatePicker>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	  </List>)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * author: mengying
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * time: 20190625
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var JwDatePicker = function (_Component) {
	_inherits(JwDatePicker, _Component);

	function JwDatePicker(props) {
		_classCallCheck(this, JwDatePicker);

		var _this = _possibleConstructorReturn(this, (JwDatePicker.__proto__ || Object.getPrototypeOf(JwDatePicker)).call(this, props));

		_this.state = {
			value: props.value == 'Invalid Date' ? '' : props.value
		};
		return _this;
	}

	_createClass(JwDatePicker, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextState) {
			if (nextState.value != this.state.value && nextState.value != 'Invalid Date') {
				this.setState({
					value: nextState.value
				});
			}
		}

		// 初始值为空时，展示 extra

	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (!this.props.value) {
				this.datePickerExtraEl = $(_reactDom2.default.findDOMNode(this.refs.JWDatepicker)).find(this.props.prefixCls ? '.' + this.props.prefixCls + ' -extra' : '.am-list-extra');
				this.setState({ initDate: this.datePickerExtraEl.text() });
				this.datePickerExtraEl.html(this.props.extra || '');
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var self = this,
			    dpValue = this.state.value,
			    newprops = _extends({}, this.props),
			    now = new Date(),
			    defaultMinite = void 0,
			    newTime = void 0,
			    newMinite = void 0,
			    Multiple = void 0;

			// 如果设置了步长，就按步长重新设置一个默认值
			if (this.props.minuteStep && this.props.minuteStep > 1) {
				newTime = dpValue ? dpValue : now;
				defaultMinite = dpValue ? dpValue.getMinutes() : now.getMinutes();
				Multiple = Math.round(defaultMinite / this.props.minuteStep);
				newMinite = Multiple * this.props.minuteStep;
				dpValue = new Date(newTime.getFullYear(), newTime.getMonth(), newTime.getDate(), newTime.getHours(), newMinite);
			}

			newprops = _.extend(newprops, {
				value: dpValue,
				onChange: function onChange(value) {
					self.setState({
						value: value
					});
					if (self.datePickerExtraEl && self.datePickerExtraEl.text() == self.props.extra) {
						self.datePickerExtraEl.html(self.state.initDate);
					}
					typeof self.props.onChange == 'function' ? self.props.onChange(value) : '';
				}
			});

			return _react2.default.createElement(
				'div',
				{ className: "jw-datepicker " + (this.props.disabled == true ? 'disabled' : '') },
				_react2.default.createElement(_index2.default, _extends({}, newprops, { ref: 'JWDatepicker' }))
			);
		}
	}]);

	return JwDatePicker;
}(_react.Component);

exports.default = JwDatePicker;