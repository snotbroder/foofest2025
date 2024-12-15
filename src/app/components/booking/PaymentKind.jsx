function PaymentKind({ typePayment, paymentType, setPaymentType }) {
  return (
    <button
      onClick={() => setPaymentType(typePayment)}
      className={`${
        typePayment === paymentType
          ? "bg-accent-1 font-semibold text-main-1 border-main-1"
          : "bg-pink-200 text-feedback-disabled-1  border-feedback-disabled-1"
      } rounded-rounded-reg py-4 px-20 border-2 max-w-64 font-rethink`}
    >
      {typePayment}
    </button>
  );
}

export default PaymentKind;
