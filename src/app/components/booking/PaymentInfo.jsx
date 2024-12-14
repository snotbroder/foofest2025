import PaymentKind from "./PaymentKind";

function PaymentInfo() {
  async function sendData(formData) {
    // "use server";
    console.log("sending data");

    const data = {
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      email: formData.get("email"),
    };
    await postVoluenteerInfo(data);
  }

  return (
    <section>
      <form action={sendData} className="flex flex-col gap-8 ">
        <fieldset>
          <legend className="font-semibold text-xl  mb-2">
            Payment information
          </legend>
          <PaymentKind typePayment="Mobilepay" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 align-baseline justify-end ">
            <div>
              <div className="flex flex-col">
                <label>Email</label>
                <input
                  className="rounded-full pl-2"
                  input="email"
                  type="email"
                  name="email"
                  placeholder="e.g. john@doe.com"
                  required
                ></input>
              </div>
              <div className="flex flex-col gap-1">
                <label>Name on Card</label>
                <input
                  type="text"
                  name="first_name"
                  className="rounded-full pl-2"
                  placeholder="John"
                  required
                ></input>
              </div>
              <div className="flex flex-col">
                <label>CardNumber</label>
                <input
                  type="text"
                  name="last_name"
                  className="rounded-full pl-2"
                  placeholder="Doe"
                  required
                ></input>
              </div>
              <div>
                <label>MM/YY</label>
                <div className="flex  gap-2">
                  <input
                    type="text"
                    name="last_name"
                    className="rounded-full pl-2 w-1/5"
                    placeholder="Doe"
                    required
                  ></input>
                  <p>/</p>
                  <input
                    type="text"
                    name="last_name"
                    className="rounded-full pl-2 w-1/5"
                    placeholder="Doe"
                    required
                  ></input>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-1">
                <label>Adress 1</label>
                <input
                  type="text"
                  name="adress_1"
                  className="rounded-full pl-2"
                  placeholder="Fun street nr.9"
                  required
                ></input>
              </div>
              <div className="flex flex-col gap-1">
                <label>Adress 2</label>
                <input
                  type="text"
                  name="adress_1"
                  className="rounded-full pl-2"
                  placeholder="Fun street nr.9"
                  required
                ></input>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col gap-1">
                  <label>City</label>
                  <input
                    type="text"
                    name="City"
                    className="rounded-full pl-2"
                    placeholder="Fun street nr.9"
                    required
                  ></input>
                </div>
                <div className="flex flex-col gap-1 w-1/4">
                  <label>Zip code</label>
                  <input
                    type="text"
                    name="City"
                    className="rounded-full pl-2"
                    placeholder="Fun street nr.9"
                    required
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </fieldset>
        <button
          type="submit"
          className="bg-accent-1 text-sm shadow-lg shadow-black flex self-start px-4 py-0.5"
        >
          Sumbit
        </button>
      </form>
    </section>
  );
}

export default PaymentInfo;
