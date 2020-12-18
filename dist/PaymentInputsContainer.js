"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var usePaymentInputs_1 = __importDefault(require("./usePaymentInputs"));
function PaymentInputsContainer(props) {
    var paymentInputs = usePaymentInputs_1.default(props);
    return props.children(paymentInputs);
}
exports.default = PaymentInputsContainer;
//# sourceMappingURL=PaymentInputsContainer.js.map