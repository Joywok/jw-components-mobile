'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JwLoading = function (_Component) {
  _inherits(JwLoading, _Component);

  function JwLoading(props) {
    _classCallCheck(this, JwLoading);

    return _possibleConstructorReturn(this, (JwLoading.__proto__ || Object.getPrototypeOf(JwLoading)).call(this, props));
  }

  _createClass(JwLoading, [{
    key: 'render',
    value: function render() {
      var type = this.props.type;
      switch (type) {
        case 'spinner':
          return _react2.default.createElement(
            'div',
            { className: 'loading' },
            _react2.default.createElement(
              'div',
              { className: 'loading-spinner' },
              _react2.default.createElement(
                'div',
                { className: 'spinner-container container1' },
                _react2.default.createElement('div', { className: 'circle1' }),
                _react2.default.createElement('div', { className: 'circle2' }),
                _react2.default.createElement('div', { className: 'circle3' }),
                _react2.default.createElement('div', { className: 'circle4' })
              ),
              _react2.default.createElement(
                'div',
                { className: 'spinner-container container2' },
                _react2.default.createElement('div', { className: 'circle1' }),
                _react2.default.createElement('div', { className: 'circle2' }),
                _react2.default.createElement('div', { className: 'circle3' }),
                _react2.default.createElement('div', { className: 'circle4' })
              ),
              _react2.default.createElement(
                'div',
                { className: 'spinner-container container3' },
                _react2.default.createElement('div', { className: 'circle1' }),
                _react2.default.createElement('div', { className: 'circle2' }),
                _react2.default.createElement('div', { className: 'circle3' }),
                _react2.default.createElement('div', { className: 'circle4' })
              )
            )
          );
          break;
        case 'bounce':
          return _react2.default.createElement(
            'div',
            { className: 'loading' },
            _react2.default.createElement(
              'div',
              { className: 'loading-bounce' },
              _react2.default.createElement('span', { style: this.props.loadingStyle }),
              _react2.default.createElement('span', { style: this.props.loadingStyle }),
              _react2.default.createElement('span', { style: this.props.loadingStyle }),
              _react2.default.createElement('span', { style: this.props.loadingStyle }),
              _react2.default.createElement('span', { style: this.props.loadingStyle })
            )
          );
          break;
        case 'circle':
          return _react2.default.createElement(
            'div',
            { className: 'loading' },
            _react2.default.createElement(
              'div',
              { className: 'loading-wrap' },
              _react2.default.createElement(
                'div',
                { className: 'loading-circle' },
                _react2.default.createElement('div', { className: 'load-round' })
              )
            )
          );
          break;
        default:
          return _react2.default.createElement(
            'div',
            { className: 'loading' },
            _react2.default.createElement(
              'div',
              { className: 'loading-bounce' },
              _react2.default.createElement('span', null),
              _react2.default.createElement('span', null),
              _react2.default.createElement('span', null),
              _react2.default.createElement('span', null),
              _react2.default.createElement('span', null)
            )
          );
          break;
      }
    }
  }]);

  return JwLoading;
}(_react.Component);

exports.default = JwLoading;