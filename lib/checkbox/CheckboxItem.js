'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require('antd-mobile/lib/checkbox/index');

var _index2 = _interopRequireDefault(_index);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AntdCheckboxItem = _index2.default.CheckboxItem;

var CheckboxTemplate = function (_React$Component) {
	_inherits(CheckboxTemplate, _React$Component);

	function CheckboxTemplate(props) {
		_classCallCheck(this, CheckboxTemplate);

		return _possibleConstructorReturn(this, (CheckboxTemplate.__proto__ || Object.getPrototypeOf(CheckboxTemplate)).call(this, props));
	}

	_createClass(CheckboxTemplate, [{
		key: 'changeClass',
		value: function changeClass() {
			var _this2 = this;

			$(_reactDom2.default.findDOMNode(this.refs.JwCheckbox)).find('.am-checkbox').closest('.jw-checkbox-button').removeClass('jw-checkbox-checked');
			setTimeout(function () {
				$(_reactDom2.default.findDOMNode(_this2.refs.JwCheckbox)).parent().find('.am-checkbox-checked').closest('.jw-checkbox-button').addClass('jw-checkbox-checked');;
			});
		}
	}, {
		key: 'onChange',
		value: function onChange() {
			if (this.props.showtype) {
				this.changeClass();
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement(
				'div',
				{ className: 'jw-checkbox', ref: 'JwCheckbox', onChange: function onChange() {
						return _this3.onChange();
					} },
				_react2.default.createElement(AntdCheckboxItem, _extends({}, this.props, { className: this.props.showtype ? this.props.showtype : '' }))
			);
		}
	}]);

	return CheckboxTemplate;
}(_react2.default.Component);

;

var CheckboxItem = function CheckboxItem(props) {
	return _react2.default.createElement(CheckboxTemplate, props);
};

exports.default = CheckboxItem;