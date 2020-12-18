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
exports.getZIPError = exports.getCVCError = exports.getExpiryDateError = exports.getCardNumberError = exports.validateLuhn = exports.isNumeric = exports.hasCardNumberReachedMaxLength = exports.DATE_OUT_OF_RANGE = exports.YEAR_OUT_OF_RANGE = exports.MONTH_OUT_OF_RANGE = exports.INVALID_CVC = exports.INVALID_EXPIRY_DATE = exports.INVALID_CARD_NUMBER = exports.EMPTY_ZIP = exports.EMPTY_CVC = exports.EMPTY_EXPIRY_DATE = exports.EMPTY_CARD_NUMBER = void 0;
var cardTypes = __importStar(require("./cardTypes"));
var MONTH_REGEX = /(0[1-9]|1[0-2])/;
exports.EMPTY_CARD_NUMBER = 'Enter a card number';
exports.EMPTY_EXPIRY_DATE = 'Enter an expiry date';
exports.EMPTY_CVC = 'Enter a CVC';
exports.EMPTY_ZIP = 'Enter a ZIP code';
exports.INVALID_CARD_NUMBER = 'Card number is invalid';
exports.INVALID_EXPIRY_DATE = 'Expiry date is invalid';
exports.INVALID_CVC = 'CVC is invalid';
exports.MONTH_OUT_OF_RANGE = 'Expiry month must be between 01 and 12';
exports.YEAR_OUT_OF_RANGE = 'Expiry year cannot be in the past';
exports.DATE_OUT_OF_RANGE = 'Expiry date cannot be in the past';
var hasCardNumberReachedMaxLength = function (currentValue) {
    var cardType = cardTypes.getCardTypeByValue(currentValue);
    return cardType && currentValue.length >= cardType.lengths[cardType.lengths.length - 1];
};
exports.hasCardNumberReachedMaxLength = hasCardNumberReachedMaxLength;
var isNumeric = function (e) {
    return /^\d*$/.test(e.key);
};
exports.isNumeric = isNumeric;
var validateLuhn = function (cardNumber) {
    return (cardNumber
        .split('')
        .reverse()
        .map(function (digit) { return parseInt(digit, 10); })
        .map(function (digit, idx) { return (idx % 2 ? digit * 2 : digit); })
        .map(function (digit) { return (digit > 9 ? (digit % 10) + 1 : digit); })
        .reduce(function (accum, digit) { return (accum += digit); }) %
        10 ===
        0);
};
exports.validateLuhn = validateLuhn;
var getCardNumberError = function (cardNumber, cardNumberValidator, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.errorMessages, errorMessages = _c === void 0 ? { emptyCardNumber: undefined, invalidCardNumber: undefined } : _c;
    if (!cardNumber) {
        return errorMessages.emptyCardNumber || exports.EMPTY_CARD_NUMBER;
    }
    var rawCardNumber = cardNumber.replace(/\s/g, '');
    var cardType = cardTypes.getCardTypeByValue(rawCardNumber);
    if (cardType && cardType.lengths) {
        var doesCardNumberMatchLength = cardType.lengths.includes(rawCardNumber.length);
        if (doesCardNumberMatchLength) {
            var isLuhnValid = exports.validateLuhn(rawCardNumber);
            if (isLuhnValid) {
                if (cardNumberValidator) {
                    return cardNumberValidator({ cardNumber: rawCardNumber, cardType: cardType, errorMessages: errorMessages });
                }
                return;
            }
        }
    }
    return errorMessages.invalidCardNumber || exports.INVALID_CARD_NUMBER;
};
exports.getCardNumberError = getCardNumberError;
var getExpiryDateError = function (expiryDate, expiryValidator, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.errorMessages, errorMessages = _c === void 0 ? {
        monthOutOfRange: undefined,
        emptyExpiryDate: undefined,
        yearOutOfRange: undefined,
        dateOutOfRange: undefined,
        invalidExpiryDate: undefined
    } : _c;
    if (!expiryDate) {
        return errorMessages.emptyExpiryDate || exports.EMPTY_EXPIRY_DATE;
    }
    var rawExpiryDate = expiryDate.replace(' / ', '').replace('/', '');
    if (rawExpiryDate.length === 4) {
        var month = rawExpiryDate.slice(0, 2);
        var year = "20" + rawExpiryDate.slice(2, 4);
        if (!MONTH_REGEX.test(month)) {
            return errorMessages.monthOutOfRange || exports.MONTH_OUT_OF_RANGE;
        }
        if (parseInt(year) < new Date().getFullYear()) {
            return errorMessages.yearOutOfRange || exports.YEAR_OUT_OF_RANGE;
        }
        if (parseInt(year) === new Date().getFullYear() && parseInt(month) < new Date().getMonth() + 1) {
            return errorMessages.dateOutOfRange || exports.DATE_OUT_OF_RANGE;
        }
        if (expiryValidator) {
            return expiryValidator({ expiryDate: { month: month, year: year }, errorMessages: errorMessages });
        }
        return;
    }
    return errorMessages.invalidExpiryDate || exports.INVALID_EXPIRY_DATE;
};
exports.getExpiryDateError = getExpiryDateError;
var getCVCError = function (cvc, cvcValidator, _a) {
    var _b = _a.cardType, cardType = _b === void 0 ? undefined : _b, _c = _a.errorMessages, errorMessages = _c === void 0 ? {
        emptyCVC: undefined,
        invalidCVC: undefined
    } : _c;
    if (!cvc) {
        return errorMessages.emptyCVC || exports.EMPTY_CVC;
    }
    if (cvc.length < 3) {
        return errorMessages.invalidCVC || exports.INVALID_CVC;
    }
    if (cardType && cvc.length !== cardType.code.length) {
        return errorMessages.invalidCVC || exports.INVALID_CVC;
    }
    if (cvcValidator) {
        return cvcValidator({ cvc: cvc, cardType: cardType, errorMessages: errorMessages });
    }
    return;
};
exports.getCVCError = getCVCError;
var getZIPError = function (zip, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.errorMessages, errorMessages = _c === void 0 ? { emptyZIP: undefined } : _c;
    if (!zip) {
        return errorMessages.emptyZIP || exports.EMPTY_ZIP;
    }
    return;
};
exports.getZIPError = getZIPError;
//# sourceMappingURL=validator.js.map