"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var autonumeric_1 = __importDefault(require("autonumeric"));
var react_1 = __importStar(require("react"));
var InputAmount = function (props) {
    var inputRef;
    var _a = react_1.useState(), autoNumeric = _a[0], setAutoNumeric = _a[1];
    var _b = react_1.useState(), inputProps = _b[0], setInputProps = _b[1];
    var _c = props.type, type = _c === void 0 ? 'text' : _c, _d = props.outputFormat, outputFormat = _d === void 0 ? 'number' : _d, _e = props.preDefined, preDefined = _e === void 0 ? {} : _e, _f = props.className, className = _f === void 0 ? 'asds' : _f, restProps = __rest(props, ["type", "outputFormat", "preDefined", "className"]);
    react_1.useEffect(function () {
        var an = new autonumeric_1.default(inputRef, props.value, __assign(__assign(__assign({}, props.preDefined), restProps), { outputFormat: outputFormat }));
        setAutoNumeric(an);
        var obj = {};
        [
            'id',
            'className',
            'style',
            'disabled',
            'type',
            'name',
            'tabIndex',
            'unselectable',
            'size',
            'autoFocus',
            'placeholder',
        ].forEach(function (prop) { return (obj[prop] = props[prop]); });
        setInputProps(obj);
    }, []);
    var getValue = function () {
        var _a;
        if (!autoNumeric)
            return;
        var valueMapper = {
            string: function (numeric) {
                return numeric.getNumericString();
            },
            number: function (numeric) { return numeric.getNumber(); },
        };
        return valueMapper[(_a = props.outputFormat) !== null && _a !== void 0 ? _a : 'number'](autoNumeric);
    };
    var callEventHandler = function (event, eventName) {
        if (!props[eventName])
            return;
        props[eventName](event, getValue());
    };
    return (react_1.default.createElement("input", __assign({ ref: function (node) {
            if (node) {
                inputRef = node;
            }
        }, onChange: function (e) { return callEventHandler(e, 'onChange'); }, onFocus: function (e) { return callEventHandler(e, 'onFocus'); }, onBlur: function (e) { return callEventHandler(e, 'onBlur'); }, onKeyPress: function (e) { return callEventHandler(e, 'onKeyPress'); }, onKeyUp: function (e) { return callEventHandler(e, 'onKeyUp'); }, onKeyDown: function (e) { return callEventHandler(e, 'onKeyDown'); } }, inputProps)));
};
exports.default = InputAmount;
