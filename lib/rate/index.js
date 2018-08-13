'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require('antd/lib/rate/index');

var _index2 = _interopRequireDefault(_index);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JwRate = function (_Component) {
  _inherits(JwRate, _Component);

  function JwRate() {
    _classCallCheck(this, JwRate);

    return _possibleConstructorReturn(this, (JwRate.__proto__ || Object.getPrototypeOf(JwRate)).apply(this, arguments));
  }

  _createClass(JwRate, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // character 为 number
      if (this.props.character == "number") {
        var jw_rate = $(_reactDom2.default.findDOMNode(this.refs.jwRate)).find('li');
        var min = this.props.min;
        var max = this.props.max;
        for (var i = min; i <= max; i++) {
          jw_rate.eq(i - min).find('.ant-rate-star-first')[0].innerHTML = i;
          jw_rate.eq(i - min).find('.ant-rate-star-second')[0].innerHTML = i;
        }
      }
    }
    // count 不同，className不同（间距不同）

  }, {
    key: 'addClassName',
    value: function addClassName() {
      // character 为 number 时，count 值
      var jw_rate_count = this.props.max - this.props.min + 1;
      var count = this.props.character == 'number' ? jw_rate_count : this.props.count;
      var countClass = 'jw-rate-count-' + (count > 5 ? count : 5);
      return countClass;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'jw-rate-w' },
        _react2.default.createElement(_index2.default, _extends({
          className: "jw-rate " + (this.props.character == "number" ? 'jw-rate-number ' : '') + this.addClassName(),
          ref: 'jwRate',
          count: this.props.character == "number" ? this.props.max - this.props.min + 1 : this.props.count
        }, this.props))
      );
    }
  }]);

  return JwRate;
}(_react.Component);

exports.default = JwRate;