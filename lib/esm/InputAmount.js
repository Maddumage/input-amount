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
import AutoNumeric from 'autonumeric';
import React, { useEffect, useState } from 'react';
var InputAmount = function (props) {
    var inputRef;
    var _a = useState(), autoNumeric = _a[0], setAutoNumeric = _a[1];
    var _b = useState(), inputProps = _b[0], setInputProps = _b[1];
    var _c = props.type, type = _c === void 0 ? 'text' : _c, _d = props.outputFormat, outputFormat = _d === void 0 ? 'number' : _d, _e = props.preDefined, preDefined = _e === void 0 ? {} : _e, _f = props.className, className = _f === void 0 ? 'asds' : _f, restProps = __rest(props, ["type", "outputFormat", "preDefined", "className"]);
    useEffect(function () {
        var an = new AutoNumeric(inputRef, props.value, __assign(__assign(__assign({}, props.preDefined), restProps), { outputFormat: outputFormat }));
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
    return (React.createElement("input", __assign({ ref: function (node) {
            if (node) {
                inputRef = node;
            }
        }, onChange: function (e) { return callEventHandler(e, 'onChange'); }, onFocus: function (e) { return callEventHandler(e, 'onFocus'); }, onBlur: function (e) { return callEventHandler(e, 'onBlur'); }, onKeyPress: function (e) { return callEventHandler(e, 'onKeyPress'); }, onKeyUp: function (e) { return callEventHandler(e, 'onKeyUp'); }, onKeyDown: function (e) { return callEventHandler(e, 'onKeyDown'); } }, inputProps)));
};
export default InputAmount;
