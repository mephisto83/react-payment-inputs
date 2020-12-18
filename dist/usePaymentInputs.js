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
var utils_1 = __importDefault(require("./utils"));
function usePaymentCard(_a) {
    var _b = _a.autoFocus, autoFocus = _b === void 0 ? true : _b, errorMessages = _a.errorMessages, onBlur = _a.onBlur, onChange = _a.onChange, onError = _a.onError, onTouch = _a.onTouch, cardNumberValidator = _a.cardNumberValidator, cvcValidator = _a.cvcValidator, expiryValidator = _a.expiryValidator;
    var cardNumberField = react_1.default.useRef();
    var expiryDateField = react_1.default.useRef();
    var cvcField = react_1.default.useRef();
    var zipField = react_1.default.useRef();
    /** ====== START: META STUFF ====== */
    var _c = react_1.default.useState({
        cardNumber: false,
        expiryDate: false,
        cvc: false,
        zip: false
    }), touchedInputs = _c[0], setTouchedInputs = _c[1];
    var _d = react_1.default.useState(false), isTouched = _d[0], setIsTouched = _d[1];
    var _e = react_1.default.useState({
        cardNumber: undefined,
        expiryDate: undefined,
        cvc: undefined,
        zip: undefined
    }), erroredInputs = _e[0], setErroredInputs = _e[1];
    var _f = react_1.default.useState(), error = _f[0], setError = _f[1];
    var _g = react_1.default.useState(), cardType = _g[0], setCardType = _g[1];
    var _h = react_1.default.useState(), focused = _h[0], setFocused = _h[1];
    var setInputError = react_1.default.useCallback(function (input, error) {
        setErroredInputs(function (erroredInputs) {
            var _a;
            if (erroredInputs[input] === error)
                return erroredInputs;
            var newError = error;
            var newErroredInputs = __assign(__assign({}, erroredInputs), (_a = {}, _a[input] = error, _a));
            if (error) {
                setError(error);
            }
            else {
                newError = Object.values(newErroredInputs).find(Boolean);
                setError(newError);
            }
            onError && onError(newError, newErroredInputs);
            return newErroredInputs;
        });
    }, []); // eslint-disable-line
    var setInputTouched = react_1.default.useCallback(function (input, value) {
        requestAnimationFrame(function () {
            if (document.activeElement.tagName !== 'INPUT') {
                setIsTouched(true);
            }
            else if (value === false) {
                setIsTouched(false);
            }
        });
        setTouchedInputs(function (touchedInputs) {
            var _a, _b;
            if (touchedInputs[input] === value)
                return touchedInputs;
            var newTouchedInputs = __assign(__assign({}, touchedInputs), (_a = {}, _a[input] = value, _a));
            onTouch && onTouch((_b = {}, _b[input] = value, _b), newTouchedInputs);
            return newTouchedInputs;
        });
    }, []); // eslint-disable-line
    /** ====== END: META STUFF ====== */
    /** ====== START: CARD NUMBER STUFF ====== */
    var handleBlurCardNumber = react_1.default.useCallback(function (props) {
        if (props === void 0) { props = {}; }
        return function (e) {
            props.onBlur && props.onBlur(e);
            onBlur && onBlur(e);
            setFocused(undefined);
            setInputTouched('cardNumber', true);
        };
    }, [onBlur, setInputTouched]);
    var handleChangeCardNumber = react_1.default.useCallback(function (props) {
        if (props === void 0) { props = {}; }
        return function (e) {
            var formattedCardNumber = e.target.value || '';
            var cardNumber = formattedCardNumber.replace(/\s/g, '');
            var cursorPosition = cardNumberField.current.selectionStart;
            var cardType = utils_1.default.cardTypes.getCardTypeByValue(cardNumber);
            setCardType(cardType);
            setInputTouched('cardNumber', false);
            // @ts-ignore
            cardNumberField.current.value = utils_1.default.formatter.formatCardNumber(cardNumber);
            props.onChange && props.onChange(e);
            onChange && onChange(e);
            // Due to the card number formatting, the selection cursor will fall to the end of
            // the input field. Here, we want to reposition the cursor to the correct place.
            requestAnimationFrame(function () {
                if (document.activeElement !== cardNumberField.current)
                    return;
                if (cardNumberField.current.value[cursorPosition - 1] === ' ') {
                    cursorPosition = cursorPosition + 1;
                }
                cardNumberField.current.setSelectionRange(cursorPosition, cursorPosition);
            });
            var cardNumberError = utils_1.default.validator.getCardNumberError(cardNumber, cardNumberValidator, { errorMessages: errorMessages });
            if (!cardNumberError && autoFocus) {
                expiryDateField.current && expiryDateField.current.focus();
            }
            setInputError('cardNumber', cardNumberError);
            props.onError && props.onError(cardNumberError);
        };
    }, [autoFocus, cardNumberValidator, errorMessages, onChange, setInputError, setInputTouched]);
    var handleFocusCardNumber = react_1.default.useCallback(function (props) {
        if (props === void 0) { props = {}; }
        return function (e) {
            props.onFocus && props.onFocus(e);
            setFocused('cardNumber');
        };
    }, []);
    var handleKeyPressCardNumber = react_1.default.useCallback(function (props) {
        if (props === void 0) { props = {}; }
        return function (e) {
            var formattedCardNumber = e.target.value || '';
            var cardNumber = formattedCardNumber.replace(/\s/g, '');
            props.onKeyPress && props.onKeyPress(e);
            if (e.key !== utils_1.default.ENTER_KEY_CODE) {
                if (!utils_1.default.validator.isNumeric(e)) {
                    e.preventDefault();
                }
                if (utils_1.default.validator.hasCardNumberReachedMaxLength(cardNumber)) {
                    e.preventDefault();
                }
            }
        };
    }, []);
    var getCardNumberProps = react_1.default.useCallback(function (_a) {
        var _b;
        if (_a === void 0) { _a = {}; }
        var refKey = _a.refKey, props = __rest(_a, ["refKey"]);
        return (__assign(__assign((_b = { 'aria-label': 'Card number', autoComplete: 'cc-number', id: 'cardNumber', name: 'cardNumber', placeholder: 'Card number', type: 'tel' }, _b[refKey || 'ref'] = cardNumberField, _b), props), { onBlur: handleBlurCardNumber(props), onChange: handleChangeCardNumber(props), onFocus: handleFocusCardNumber(props), onKeyPress: handleKeyPressCardNumber(props) }));
    }, [handleBlurCardNumber, handleChangeCardNumber, handleFocusCardNumber, handleKeyPressCardNumber]);
    /** ====== END: CARD NUMBER STUFF ====== */
    /** ====== START: EXPIRY DATE STUFF ====== */
    var handleBlurExpiryDate = react_1.default.useCallback(function (props) {
        if (props === void 0) { props = {}; }
        return function (e) {
            props.onBlur && props.onBlur(e);
            onBlur && onBlur(e);
            setFocused(undefined);
            setInputTouched('expiryDate', true);
        };
    }, [onBlur, setInputTouched]);
    var handleChangeExpiryDate = react_1.default.useCallback(function (props) {
        if (props === void 0) { props = {}; }
        return function (e) {
            setInputTouched('expiryDate', false);
            expiryDateField.current.value = utils_1.default.formatter.formatExpiry(e);
            props.onChange && props.onChange(e);
            onChange && onChange(e);
            var expiryDateError = utils_1.default.validator.getExpiryDateError(expiryDateField.current.value, expiryValidator, {
                errorMessages: errorMessages
            });
            if (!expiryDateError && autoFocus) {
                cvcField.current && cvcField.current.focus();
            }
            setInputError('expiryDate', expiryDateError);
            props.onError && props.onError(expiryDateError);
        };
    }, [autoFocus, errorMessages, expiryValidator, onChange, setInputError, setInputTouched]);
    var handleFocusExpiryDate = react_1.default.useCallback(function (props) {
        if (props === void 0) { props = {}; }
        return function (e) {
            props.onFocus && props.onFocus(e);
            setFocused('expiryDate');
        };
    }, []);
    var handleKeyDownExpiryDate = react_1.default.useCallback(function (props) {
        if (props === void 0) { props = {}; }
        return function (e) {
            props.onKeyDown && props.onKeyDown(e);
            if (e.key === utils_1.default.BACKSPACE_KEY_CODE && !e.target.value && autoFocus) {
                cardNumberField.current && cardNumberField.current.focus();
            }
        };
    }, [autoFocus]);
    var handleKeyPressExpiryDate = react_1.default.useCallback(function (props) {
        if (props === void 0) { props = {}; }
        return function (e) {
            var formattedExpiryDate = e.target.value || '';
            var expiryDate = formattedExpiryDate.replace(' / ', '');
            props.onKeyPress && props.onKeyPress(e);
            if (e.key !== utils_1.default.ENTER_KEY_CODE) {
                if (!utils_1.default.validator.isNumeric(e)) {
                    e.preventDefault();
                }
                if (expiryDate.length >= 4) {
                    e.preventDefault();
                }
            }
        };
    }, []);
    var getExpiryDateProps = react_1.default.useCallback(function (_a) {
        var _b;
        if (_a === void 0) { _a = {}; }
        var refKey = _a.refKey, props = __rest(_a, ["refKey"]);
        return (__assign(__assign((_b = { 'aria-label': 'Expiry date in format MM YY', autoComplete: 'cc-exp', id: 'expiryDate', name: 'expiryDate', placeholder: 'MM/YY', type: 'tel' }, _b[refKey || 'ref'] = expiryDateField, _b), props), { onBlur: handleBlurExpiryDate(props), onChange: handleChangeExpiryDate(props), onFocus: handleFocusExpiryDate(props), onKeyDown: handleKeyDownExpiryDate(props), onKeyPress: handleKeyPressExpiryDate(props) }));
    }, [
        handleBlurExpiryDate,
        handleChangeExpiryDate,
        handleFocusExpiryDate,
        handleKeyDownExpiryDate,
        handleKeyPressExpiryDate
    ]);
    /** ====== END: EXPIRY DATE STUFF ====== */
    /** ====== START: CVC STUFF ====== */
    var handleBlurCVC = react_1.default.useCallback(function (props) {
        if (props === void 0) { props = {}; }
        return function (e) {
            props.onBlur && props.onBlur(e);
            onBlur && onBlur(e);
            setFocused(undefined);
            setInputTouched('cvc', true);
        };
    }, [onBlur, setInputTouched]);
    var handleChangeCVC = react_1.default.useCallback(function (props, _a) {
        if (props === void 0) { props = {}; }
        var _b = _a === void 0 ? {} : _a, cardType = _b.cardType;
        return function (e) {
            var cvc = e.target.value;
            setInputTouched('cvc', false);
            props.onChange && props.onChange(e);
            onChange && onChange(e);
            var cvcError = utils_1.default.validator.getCVCError(cvc, cvcValidator, { cardType: cardType, errorMessages: errorMessages });
            if (!cvcError && autoFocus) {
                zipField.current && zipField.current.focus();
            }
            setInputError('cvc', cvcError);
            props.onError && props.onError(cvcError);
        };
    }, [autoFocus, cvcValidator, errorMessages, onChange, setInputError, setInputTouched]);
    var handleFocusCVC = react_1.default.useCallback(function (props) {
        if (props === void 0) { props = {}; }
        return function (e) {
            props.onFocus && props.onFocus(e);
            setFocused('cvc');
        };
    }, []);
    var handleKeyDownCVC = react_1.default.useCallback(function (props) {
        if (props === void 0) { props = {}; }
        return function (e) {
            props.onKeyDown && props.onKeyDown(e);
            if (e.key === utils_1.default.BACKSPACE_KEY_CODE && !e.target.value && autoFocus) {
                expiryDateField.current && expiryDateField.current.focus();
            }
        };
    }, [autoFocus]);
    var handleKeyPressCVC = react_1.default.useCallback(function (props, _a) {
        if (props === void 0) { props = {}; }
        var cardType = _a.cardType;
        return function (e) {
            var formattedCVC = e.target.value || '';
            var cvc = formattedCVC.replace(' / ', '');
            props.onKeyPress && props.onKeyPress(e);
            if (e.key !== utils_1.default.ENTER_KEY_CODE) {
                if (!utils_1.default.validator.isNumeric(e)) {
                    e.preventDefault();
                }
                if (cardType && cvc.length >= cardType.code.length) {
                    e.preventDefault();
                }
                if (cvc.length >= 4) {
                    e.preventDefault();
                }
            }
        };
    }, []);
    var getCVCProps = react_1.default.useCallback(function (_a) {
        var _b;
        if (_a === void 0) { _a = {}; }
        var refKey = _a.refKey, props = __rest(_a, ["refKey"]);
        return (__assign(__assign((_b = { 'aria-label': 'CVC', autoComplete: 'cc-csc', id: 'cvc', name: 'cvc', placeholder: cardType ? cardType.code.name : 'CVC', type: 'tel' }, _b[refKey || 'ref'] = cvcField, _b), props), { onBlur: handleBlurCVC(props), onChange: handleChangeCVC(props, { cardType: cardType }), onFocus: handleFocusCVC(props), onKeyDown: handleKeyDownCVC(props), onKeyPress: handleKeyPressCVC(props, { cardType: cardType }) }));
    }, [cardType, handleBlurCVC, handleChangeCVC, handleFocusCVC, handleKeyDownCVC, handleKeyPressCVC]);
    /** ====== END: CVC STUFF ====== */
    /** ====== START: ZIP STUFF ====== */
    var handleBlurZIP = react_1.default.useCallback(function (props) {
        if (props === void 0) { props = {}; }
        return function (e) {
            props.onBlur && props.onBlur(e);
            onBlur && onBlur(e);
            setFocused(undefined);
            setInputTouched('zip', true);
        };
    }, [onBlur, setInputTouched]);
    var handleChangeZIP = react_1.default.useCallback(function (props) {
        if (props === void 0) { props = {}; }
        return function (e) {
            var zip = e.target.value;
            setInputTouched('zip', false);
            props.onChange && props.onChange(e);
            onChange && onChange(e);
            var zipError = utils_1.default.validator.getZIPError(zip, { errorMessages: errorMessages });
            setInputError('zip', zipError);
            props.onError && props.onError(zipError);
        };
    }, [errorMessages, onChange, setInputError, setInputTouched]);
    var handleFocusZIP = react_1.default.useCallback(function (props) {
        if (props === void 0) { props = {}; }
        return function (e) {
            props.onFocus && props.onFocus(e);
            setFocused('zip');
        };
    }, []);
    var handleKeyDownZIP = react_1.default.useCallback(function (props) {
        if (props === void 0) { props = {}; }
        return function (e) {
            props.onKeyDown && props.onKeyDown(e);
            if (e.key === utils_1.default.BACKSPACE_KEY_CODE && !e.target.value && autoFocus) {
                cvcField.current && cvcField.current.focus();
            }
        };
    }, [autoFocus]);
    var handleKeyPressZIP = react_1.default.useCallback(function (props) {
        if (props === void 0) { props = {}; }
        return function (e) {
            props.onKeyPress && props.onKeyPress(e);
            if (e.key !== utils_1.default.ENTER_KEY_CODE) {
                if (!utils_1.default.validator.isNumeric(e)) {
                    e.preventDefault();
                }
            }
        };
    }, []);
    var getZIPProps = react_1.default.useCallback(function (_a) {
        var _b;
        if (_a === void 0) { _a = {}; }
        var refKey = _a.refKey, props = __rest(_a, ["refKey"]);
        return (__assign(__assign((_b = { autoComplete: 'off', id: 'zip', maxLength: '6', name: 'zip', placeholder: 'ZIP', type: 'tel' }, _b[refKey || 'ref'] = zipField, _b), props), { onBlur: handleBlurZIP(props), onChange: handleChangeZIP(props), onFocus: handleFocusZIP(props), onKeyDown: handleKeyDownZIP(props), onKeyPress: handleKeyPressZIP(props) }));
    }, [handleBlurZIP, handleChangeZIP, handleFocusZIP, handleKeyDownZIP, handleKeyPressZIP]);
    /** ====== END: ZIP STUFF ====== */
    /** ====== START: CARD IMAGE STUFF ====== */
    var getCardImageProps = react_1.default.useCallback(function (props) {
        if (props === void 0) { props = {}; }
        var images = props.images || {};
        return __assign({ 'aria-label': cardType ? cardType.displayName : 'Placeholder card', children: images[cardType ? cardType.type : 'placeholder'] || images.placeholder, width: '1.5em', height: '1em', viewBox: '0 0 24 16' }, props);
    }, [cardType]);
    /** ====== END: CARD IMAGE STUFF ====== */
    // Set default field errors
    react_1.default.useLayoutEffect(function () {
        if (zipField.current) {
            var zipError = utils_1.default.validator.getZIPError(zipField.current.value, { errorMessages: errorMessages });
            setInputError('zip', zipError);
        }
        if (cvcField.current) {
            var cvcError = utils_1.default.validator.getCVCError(cvcField.current.value, cvcValidator, { errorMessages: errorMessages });
            setInputError('cvc', cvcError);
        }
        if (expiryDateField.current) {
            var expiryDateError = utils_1.default.validator.getExpiryDateError(expiryDateField.current.value, expiryValidator, {
                errorMessages: errorMessages
            });
            setInputError('expiryDate', expiryDateError);
        }
        if (cardNumberField.current) {
            var cardNumberError = utils_1.default.validator.getCardNumberError(cardNumberField.current.value, cardNumberValidator, {
                errorMessages: errorMessages
            });
            setInputError('cardNumber', cardNumberError);
        }
    }, [cardNumberValidator, cvcValidator, errorMessages, expiryValidator, setInputError]);
    // Format default values
    react_1.default.useLayoutEffect(function () {
        if (cardNumberField.current) {
            cardNumberField.current.value = utils_1.default.formatter.formatCardNumber(cardNumberField.current.value);
        }
        if (expiryDateField.current) {
            expiryDateField.current.value = utils_1.default.formatter.formatExpiry({ target: expiryDateField.current });
        }
    }, []);
    // Set default card type
    react_1.default.useLayoutEffect(function () {
        if (cardNumberField.current) {
            var cardType_1 = utils_1.default.cardTypes.getCardTypeByValue(cardNumberField.current.value);
            setCardType(cardType_1);
        }
    }, []);
    return {
        getCardImageProps: getCardImageProps,
        getCardNumberProps: getCardNumberProps,
        getExpiryDateProps: getExpiryDateProps,
        getCVCProps: getCVCProps,
        getZIPProps: getZIPProps,
        wrapperProps: {
            error: error,
            focused: focused,
            isTouched: isTouched
        },
        meta: {
            cardType: cardType,
            erroredInputs: erroredInputs,
            error: error,
            focused: focused,
            isTouched: isTouched,
            touchedInputs: touchedInputs
        }
    };
}
exports.default = usePaymentCard;
//# sourceMappingURL=usePaymentInputs.js.map