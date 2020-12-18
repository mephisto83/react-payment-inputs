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
exports.formatExpiry = exports.formatCardNumber = void 0;
var cardTypes = __importStar(require("./cardTypes"));
var formatCardNumber = function (cardNumber) {
    var cardType = cardTypes.getCardTypeByValue(cardNumber);
    if (!cardType)
        return (cardNumber.match(/\d+/g) || []).join('');
    var format = cardType.format;
    if (format && format.global) {
        return (cardNumber.match(format) || []).join(' ');
    }
    if (format) {
        var execResult = format.exec(cardNumber.split(' ').join(''));
        if (execResult) {
            return execResult
                .splice(1, 3)
                .filter(function (x) { return x; })
                .join(' ');
        }
    }
    return cardNumber;
};
exports.formatCardNumber = formatCardNumber;
var formatExpiry = function (event) {
    var eventData = event.nativeEvent && event.nativeEvent.data;
    var prevExpiry = event.target.value.split(' / ').join('/');
    if (!prevExpiry)
        return null;
    var expiry = prevExpiry;
    if (/^[2-9]$/.test(expiry)) {
        expiry = "0" + expiry;
    }
    if (prevExpiry.length === 2 && +prevExpiry > 12) {
        var _a = prevExpiry.split(''), head = _a[0], tail = _a.slice(1);
        expiry = "0" + head + "/" + tail.join('');
    }
    if (/^1[/-]$/.test(expiry)) {
        return "01 / ";
    }
    expiry = expiry.match(/(\d{1,2})/g) || [];
    if (expiry.length === 1) {
        if (!eventData && prevExpiry.includes('/')) {
            return expiry[0];
        }
        if (/\d{2}/.test(expiry)) {
            return expiry[0] + " / ";
        }
    }
    if (expiry.length > 2) {
        var _b = expiry.join('').match(/^(\d{2}).*(\d{2})$/) || [], _c = _b[1], month = _c === void 0 ? null : _c, _d = _b[2], year = _d === void 0 ? null : _d;
        return [month, year].join(' / ');
    }
    return expiry.join(' / ');
};
exports.formatExpiry = formatExpiry;
//# sourceMappingURL=formatter.js.map