"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCardTypeByType = exports.getCardTypeByValue = exports.CARD_TYPES = exports.DEFAULT_CARD_FORMAT = exports.DEFAULT_ZIP_LENGTH = exports.DEFAULT_CVC_LENGTH = void 0;
exports.DEFAULT_CVC_LENGTH = 3;
exports.DEFAULT_ZIP_LENGTH = 5;
exports.DEFAULT_CARD_FORMAT = /(\d{1,4})/g;
exports.CARD_TYPES = [
    {
        displayName: 'Visa',
        type: 'visa',
        format: exports.DEFAULT_CARD_FORMAT,
        startPattern: /^4/,
        gaps: [4, 8, 12],
        lengths: [16, 18, 19],
        code: {
            name: 'CVV',
            length: 3
        }
    },
    {
        displayName: 'Mastercard',
        type: 'mastercard',
        format: exports.DEFAULT_CARD_FORMAT,
        startPattern: /^(5[1-5]|677189)|^(222[1-9]|2[3-6]\d{2}|27[0-1]\d|2720)/,
        gaps: [4, 8, 12],
        lengths: [16],
        code: {
            name: 'CVC',
            length: 3
        }
    },
    {
        displayName: 'American Express',
        type: 'amex',
        format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
        startPattern: /^3[47]/,
        gaps: [4, 10],
        lengths: [15],
        code: {
            name: 'CID',
            length: 4
        }
    },
    {
        displayName: 'Diners Club',
        type: 'dinersclub',
        format: exports.DEFAULT_CARD_FORMAT,
        startPattern: /^(36|38|30[0-5])/,
        gaps: [4, 10],
        lengths: [14, 16, 19],
        code: {
            name: 'CVV',
            length: 3
        }
    },
    {
        displayName: 'Discover',
        type: 'discover',
        format: exports.DEFAULT_CARD_FORMAT,
        startPattern: /^(6011|65|64[4-9]|622)/,
        gaps: [4, 8, 12],
        lengths: [16, 19],
        code: {
            name: 'CID',
            length: 3
        }
    },
    {
        displayName: 'JCB',
        type: 'jcb',
        format: exports.DEFAULT_CARD_FORMAT,
        startPattern: /^35/,
        gaps: [4, 8, 12],
        lengths: [16, 17, 18, 19],
        code: {
            name: 'CVV',
            length: 3
        }
    },
    {
        displayName: 'UnionPay',
        type: 'unionpay',
        format: exports.DEFAULT_CARD_FORMAT,
        startPattern: /^62/,
        gaps: [4, 8, 12],
        lengths: [14, 15, 16, 17, 18, 19],
        code: {
            name: 'CVN',
            length: 3
        }
    },
    {
        displayName: 'Maestro',
        type: 'maestro',
        format: exports.DEFAULT_CARD_FORMAT,
        startPattern: /^(5018|5020|5038|6304|6703|6708|6759|676[1-3])/,
        gaps: [4, 8, 12],
        lengths: [12, 13, 14, 15, 16, 17, 18, 19],
        code: {
            name: 'CVC',
            length: 3
        }
    },
    {
        displayName: 'Elo',
        type: 'elo',
        format: exports.DEFAULT_CARD_FORMAT,
        startPattern: /^(4011(78|79)|43(1274|8935)|45(1416|7393|763(1|2))|50(4175|6699|67[0-7][0-9]|9000)|627780|63(6297|6368)|650(03([^4])|04([0-9])|05(0|1)|4(0[5-9]|3[0-9]|8[5-9]|9[0-9])|5([0-2][0-9]|3[0-8])|9([2-6][0-9]|7[0-8])|541|700|720|901)|651652|655000|655021)/,
        gaps: [4, 8, 12],
        lengths: [16],
        code: {
            name: 'CVE',
            length: 3
        }
    },
    {
        displayName: 'Hipercard',
        type: 'hipercard',
        format: exports.DEFAULT_CARD_FORMAT,
        startPattern: /^(384100|384140|384160|606282|637095|637568|60(?!11))/,
        gaps: [4, 8, 12],
        lengths: [16],
        code: {
            name: 'CVC',
            length: 3
        }
    }
];
var getCardTypeByValue = function (value) { return exports.CARD_TYPES.filter(function (cardType) { return cardType.startPattern.test(value); })[0]; };
exports.getCardTypeByValue = getCardTypeByValue;
var getCardTypeByType = function (type) { return exports.CARD_TYPES.filter(function (cardType) { return cardType.type === type; })[0]; };
exports.getCardTypeByType = getCardTypeByType;
//# sourceMappingURL=cardTypes.js.map