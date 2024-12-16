import Payment from "../components/booking/Payment";
import PaymentInfo from "../components/booking/PaymentInfo";
function Page() {
  return (
    <article className="bg-primary rounded-rounded-reg p-10">
      <Payment>
        <PaymentInfo />
      </Payment>
    </article>
  );
}

export default Page;
