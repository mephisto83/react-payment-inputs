"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var FieldWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-flex;\n  flex-direction: column;\n\n  & {\n    ", ";\n  }\n\n  ", ";\n"], ["\n  display: inline-flex;\n  flex-direction: column;\n\n  & {\n    ", ";\n  }\n\n  ", ";\n"])), function (props) { return (props.hasErrored && props.styles.fieldWrapper ? props.styles.fieldWrapper.errored : undefined); }, function (props) { return (props.styles.fieldWrapper ? props.styles.fieldWrapper.base : undefined); });
var InputWrapper = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  align-items: center;\n  background-color: white;\n  border: 1px solid #bdbdbd;\n  box-shadow: inset 0px 1px 2px #e5e5e5;\n  border-radius: 0.2em;\n  display: flex;\n  height: 2.5em;\n  padding: 0.4em 0.6em;\n\n  & {\n    ", ";\n  }\n\n  & {\n    ", ";\n  }\n\n  & input {\n    border: unset;\n    margin: unset;\n    padding: unset;\n    outline: unset;\n    font-size: inherit;\n\n    & {\n      ", ";\n    }\n\n    ", ";\n  }\n\n  & svg {\n    margin-right: 0.6em;\n    & {\n      ", ";\n    }\n  }\n\n  & input#cardNumber {\n    width: 11em;\n    & {\n      ", ";\n    }\n  }\n\n  & input#expiryDate {\n    width: 4em;\n    & {\n      ", ";\n    }\n  }\n\n  & input#cvc {\n    width: 2.5em;\n    & {\n      ", ";\n    }\n  }\n\n  & input#zip {\n    width: 4em;\n    & {\n      ", ";\n    }\n  }\n\n  ", ";\n"], ["\n  align-items: center;\n  background-color: white;\n  border: 1px solid #bdbdbd;\n  box-shadow: inset 0px 1px 2px #e5e5e5;\n  border-radius: 0.2em;\n  display: flex;\n  height: 2.5em;\n  padding: 0.4em 0.6em;\n\n  & {\n    ",
    ";\n  }\n\n  & {\n    ",
    ";\n  }\n\n  & input {\n    border: unset;\n    margin: unset;\n    padding: unset;\n    outline: unset;\n    font-size: inherit;\n\n    & {\n      ", ";\n    }\n\n    ", ";\n  }\n\n  & svg {\n    margin-right: 0.6em;\n    & {\n      ", ";\n    }\n  }\n\n  & input#cardNumber {\n    width: 11em;\n    & {\n      ", ";\n    }\n  }\n\n  & input#expiryDate {\n    width: 4em;\n    & {\n      ", ";\n    }\n  }\n\n  & input#cvc {\n    width: 2.5em;\n    & {\n      ", ";\n    }\n  }\n\n  & input#zip {\n    width: 4em;\n    & {\n      ", ";\n    }\n  }\n\n  ", ";\n"])), function (props) {
    return props.hasErrored && styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        border-color: #c9444d;\n        box-shadow: #c9444d 0px 0px 0px 1px;\n        ", ";\n      "], ["\n        border-color: #c9444d;\n        box-shadow: #c9444d 0px 0px 0px 1px;\n        ", ";\n      "])), function (props) { return props.styles.inputWrapper && props.styles.inputWrapper.errored; });
}, function (props) {
    return props.focused && styled_components_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        border-color: #444bc9;\n        box-shadow: #444bc9 0px 0px 0px 1px;\n        ", ";\n      "], ["\n        border-color: #444bc9;\n        box-shadow: #444bc9 0px 0px 0px 1px;\n        ", ";\n      "])), function (props) { return props.styles.inputWrapper && props.styles.inputWrapper.focused; });
}, function (props) { return (props.hasErrored && props.styles.input ? props.styles.input.errored : undefined); }, function (props) { return props.styles.input && props.styles.input.base; }, function (props) { return props.styles.cardImage; }, function (props) { return props.styles.input && props.styles.input.cardNumber; }, function (props) { return props.styles.input && props.styles.input.expiryDate; }, function (props) { return props.styles.input && props.styles.input.cvc; }, function (props) { return props.styles.input && props.styles.input.zip; }, function (props) { return (props.styles.inputWrapper ? props.styles.inputWrapper.base : undefined); });
var ErrorText = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  color: #c9444d;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n\n  & {\n    ", ";\n  }\n"], ["\n  color: #c9444d;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n\n  & {\n    ", ";\n  }\n"])), function (props) { return (props.styles.errorText ? props.styles.errorText.base : undefined); });
function PaymentInputsWrapper(props) {
    var children = props.children, error = props.error, errorTextProps = props.errorTextProps, focused = props.focused, inputWrapperProps = props.inputWrapperProps, isTouched = props.isTouched, styles = props.styles, restProps = __rest(props, ["children", "error", "errorTextProps", "focused", "inputWrapperProps", "isTouched", "styles"]);
    var hasErrored = error && isTouched;
    return (react_1.default.createElement(FieldWrapper, __assign({ hasErrored: hasErrored, styles: styles }, restProps),
        react_1.default.createElement(InputWrapper, __assign({ focused: focused, hasErrored: hasErrored, styles: styles }, inputWrapperProps), children),
        hasErrored && (react_1.default.createElement(ErrorText, __assign({ styles: styles }, errorTextProps), error))));
}
PaymentInputsWrapper.defaultProps = {
    styles: {}
};
exports.default = PaymentInputsWrapper;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=PaymentInputsWrapper.js.map