'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require("./index.less");
var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _util = require('@ali/msui-core/js/util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * input输入框
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @example
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * <Input defaultValue="" />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * type: 输入框样式类型, bordered(默认), line
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * htmlType: 对应input本身的类型,text(默认), number, password等,如果是textarea,则对应textarea
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * state: success, error, warn, info对应input的状态
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var input_state = { success: true, error: true, warning: true, info: true };

var Input = function (_Component) {
    _inherits(Input, _Component);

    function Input(props) {
        _classCallCheck(this, Input);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.state = {
            value: 'value' in props ? props.value : props.defaultValue
        };

        // bind function scope
        _this.handleFocus = _this.handleFocus.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleClear = _this.handleClear.bind(_this);
        return _this;
    }

    Input.prototype.getValue = function getValue() {
        return 'value' in this.props ? this.props.value : this.state.value;
    };

    Input.prototype.handleChange = function handleChange(event) {
        var curr = event.target.value,
            prev = this.state.value;

        this.setState({ value: curr });

        if (typeof this.props.onChange === 'function' && curr !== prev) {
            this.props.onChange(curr, prev, this.refs.inputRef);
        }
    };

    Input.prototype.handleClear = function handleClear() {
        var prev = this.getValue();
        this.setState({ value: '' });
        // MARK 清除内容后,会获取到当前输入框的焦点,可以用setTimeout解决,但是参考部分app,保留此交互
        if (typeof this.props.onChange === 'function') {
            this.props.onChange('', prev, this.refs.inputRef);
        }
    };

    Input.prototype.handleFocus = function handleFocus(e) {
        if (this.props.readOnly) {
            setTimeout(function () {
                e.target.blur();
            });
        }
    };

    // 关闭按钮


    Input.prototype.renderClose = function renderClose() {
        var _props = this.props;
        var clearable = _props.clearable;
        var disabled = _props.disabled;
        var readOnly = _props.readOnly;

        var _value = this.getValue();

        return clearable && !disabled && !readOnly && _value ? _react2.default.createElement(
            'b',
            { className: 'fn-clear', onClick: this.handleClear },
            //_react2.default.createElement(_iconM2.default, { type: 'cross-c-f' })
            _react2.default.createElement('i', null, String.fromCharCode(215))
        ) : null;
    };

    // textarea的计数器


    Input.prototype.renderCounter = function renderCounter() {
        var max = this.props.maxLength || 500;
        var _value = this.getValue() || '';
        var counterClass = 'text-counter' + (_value.length > max ? ' error' : '');

        return this.props.counter ? _react2.default.createElement(
            'span',
            { className: counterClass },
            _value.length,
            '/',
            max
        ) : null;
    };

    Input.prototype.render = function render() {
        var _props2 = this.props;
        var className = _props2.className;
        var htmlType = _props2.htmlType;
        var type = _props2.type;
        var counter = _props2.counter;
        var state = _props2.state;
        var clearable = _props2.clearable;
        var value = _props2.value;
        var defaultValue = _props2.defaultValue;
        var onChange = _props2.onChange;

        var others = _objectWithoutProperties(_props2, ['className', 'htmlType', 'type', 'counter', 'state', 'clearable', 'value', 'defaultValue', 'onChange']);

        var clazz = void 0;
        var outerClass = void 0;
        var _value = this.getValue();

        if (htmlType === 'textarea') {

            others.maxLength = others.maxLength * 1.5; // 允许用户输入比限制多50%的字

            clazz = (0, _classnames2.default)('input-bordered', className);

            return _react2.default.createElement(
                'em',
                { className: 'input-box textarea-wrap' },
                others.__extraDOM || null,
                _react2.default.createElement('textarea', _extends({ ref: 'inputRef', className: clazz, onChange: this.handleChange, value: _value }, others)),
                this.renderCounter()
            );
        }

        var typeClass = type ? type.split(/\s+/).map(function (n) {
            return 'input-' + n;
        }) : null;

        clazz = (0, _classnames2.default)(typeClass, className);

        outerClass = (0, _classnames2.default)('input-box', _defineProperty({}, 'state-' + state, input_state[state]), 'input-box-' + type);

        others.onFocus = _util2.default.createChainedFunction(this.handleFocus, others.onFocus);

        return _react2.default.createElement(
            'em',
            { className: outerClass },
            others.__extraDOM || null,
            _react2.default.createElement('input', _extends({ ref: 'inputRef', className: clazz, type: htmlType, onChange: this.handleChange, value: _value }, others)),
            this.renderClose()
        );
    };

    return Input;
}(_react.Component);

Input.propTypes = {
    type: _react.PropTypes.string, // bordered, line
    state: _react.PropTypes.string, // error, success, warning 可扩展

    // input原生的类型
    htmlType: _react.PropTypes.oneOf(['text', 'password', 'textarea', 'number', 'search', 'email', 'url', 'color', 'date', 'month', 'week', 'time', 'datetime', 'datetime-local']),

    // input的清除按钮,只有当htmlType不是textarea,并且不是disabled或readOnly的时候有效
    clearable: _react.PropTypes.bool,

    // textarea的计数器,只有当htmlType是textarea的时候有效
    counter: _react.PropTypes.bool,

    defaultValue: _react.PropTypes.string,
    value: _react.PropTypes.string,
    disabled: _react.PropTypes.bool,
    readOnly: _react.PropTypes.bool,
    onChange: _react.PropTypes.func,

    __extraDOM: _react.PropTypes.node
};

Input.defaultProps = {
    type: 'bordered',
    state: '',
    htmlType: 'text',
    defaultValue: '',
    clearable: true,
    counter: false
    //disabled: false,
    //readOnly: false
};

exports.default = Input;
module.exports = exports['default'];
