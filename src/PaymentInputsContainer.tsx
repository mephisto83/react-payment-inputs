import usePaymentInputs from './usePaymentInputs';

export default function PaymentInputsContainer(props: any) {
  const paymentInputs = usePaymentInputs(props);
  return props.children(paymentInputs);
}
