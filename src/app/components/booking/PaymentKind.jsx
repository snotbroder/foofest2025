function PaymentKind({ typePayment }) {
  return (
    <div>
      <button className="rounded-rounded-reg py-4 px-20 border-2 border-main-1 bg-accent-1">
        {typePayment}
      </button>
    </div>
  );
}

export default PaymentKind;
