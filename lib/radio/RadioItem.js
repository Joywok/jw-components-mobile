'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require('antd-mobile/lib/radio/index');

var _index2 = _interopRequireDefault(_index);

require('./style/index');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AntdRadioItem = _index2.default.RadioItem;

var RadioTemplate = function (_React$Component) {
  _inherits(RadioTemplate, _React$Component);

  function RadioTemplate(props) {
    _classCallCheck(this, RadioTemplate);

    return _possibleConstructorReturn(this, (RadioTemplate.__proto__ || Object.getPrototypeOf(RadioTemplate)).call(this, props));
  }
  // 当处于选中状态时，改变背景颜色和字体颜色


  _createClass(RadioTemplate, [{
    key: 'addClass',
    value: function addClass() {
      var _this2 = this;

      setTimeout(function () {
        $(_reactDom2.default.findDOMNode(_this2.refs.JwRadio)).find('.am-radio-checked').closest('.jw-radio').find('.am-list-content').addClass('jw-radio-checked');
      });
    }
  }, {
    key: 'onChange',
    value: function onChange() {
      if (this.props.showtype) {
        $(_reactDom2.default.findDOMNode(this.refs.JwRadio)).closest('.jw-radio').siblings().find('.jw-radio-checked').removeClass('jw-radio-checked');
        this.addClass();
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.showtype) {
        this.addClass();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        { className: 'jw-radio', onChange: function onChange() {
            return _this3.onChange();
          }, ref: 'JwRadio' },
        _react2.default.createElement(AntdRadioItem, _extends({}, this.props, { className: this.props.showtype ? this.props.showtype : '' }))
      );
    }
  }]);

  return RadioTemplate;
}(_react2.default.Component);

;

var RadioItem = function RadioItem(props) {
  return _react2.default.createElement(RadioTemplate, props);
};

exports.default = RadioItem;