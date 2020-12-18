"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.isHighlighted = exports.ENTER_KEY_CODE = exports.BACKSPACE_KEY_CODE = void 0;
var cardTypes = __importStar(require("./cardTypes"));
var formatter = __importStar(require("./formatter"));
var validator = __importStar(require("./validator"));
exports.BACKSPACE_KEY_CODE = 'Backspace';
exports.ENTER_KEY_CODE = 'Enter';
var isHighlighted = function () { return (window.getSelection() || { type: undefined }).type === 'Range'; };
exports.isHighlighted = isHighlighted;
exports.default = {
    cardTypes: cardTypes,
    formatter: formatter,
    validator: validator,
    BACKSPACE_KEY_CODE: exports.BACKSPACE_KEY_CODE,
    ENTER_KEY_CODE: exports.ENTER_KEY_CODE,
    isHighlighted: exports.isHighlighted
};
//# sourceMappingURL=index.js.map