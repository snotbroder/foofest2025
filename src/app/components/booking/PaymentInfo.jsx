"use client";
import { useState } from "react";
import PaymentKind from "./PaymentKind";
import { postPaymentInfo } from "@/app/api";

function PaymentInfo() {
  const [paymentType, setPaymentType] = useState("Credit Card");

  async function sendData(formData) {
    console.log("sending data");

    const data = {
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      email: formData.get("email"),
      address_line_1: formData.get("adress_1"),
      adress_line_2: formData.get("adress_2"),
      city: formData.get("city"),
      zip_code: formData.get("zip_code"),
      name_on_card: formData.get("name_on_card"),
      card_number: formData.get("card_number"),
      MM: formData.get("MM"),
      YY: formData.get("YY"),
      CVV: formData.get("cvv"),
    };
    await postPaymentInfo(data);
  }

  //   async function sendData(formData) {
  //     "use server";
  //     console.log("sending data");

  //     const data = {
  //       first_name: formData.get("first_name"),
  //       last_name: formData.get("last_name"),
  //       email: formData.get("email"),
  //     };
  //     await postVoluenteerInfo(data);
  //   }

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-6">
        <PaymentKind
          typePayment="Credit Card"
          paymentType={paymentType}
          setPaymentType={setPaymentType}
        />
        <PaymentKind
          typePayment="Mobilepay"
          paymentType={paymentType}
          setPaymentType={setPaymentType}
        />
      </div>
      {paymentType === "Credit Card" && (
        <form action={sendData} className="flex flex-col gap-8 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-10 align-baseline justify-end ">
            <fieldset>
              <div className="flex flex-col gap-2">
                <legend className="font-semibold text-xl mb-2  border-b border-feedback-error ">
                  Card information
                </legend>
                <div className="flex flex-col ">
                  <label>Email</label>
                  <input
                    className="rounded-full pl-2 italic"
                    input="email"
                    type="email"
                    name="email"
                    placeholder="e.g. john@doe.com"
                    required
                  ></input>
                </div>
                <div className="flex flex-col">
                  <label>Name on Card</label>
                  <input
                    type="text"
                    name="name_on_card"
                    className="rounded-full pl-2 italic"
                    placeholder="John"
                    pattern="[A-Za-z]+"
                    required
                  ></input>
                </div>
                <div className="flex flex-col">
                  <label>CardNumber</label>
                  <input
                    type="text"
                    name="card_number"
                    className="rounded-full pl-2 italic"
                    placeholder="XXXX-XXXX-XXXX-1234"
                    maxLength="16"
                    min="16"
                    required
                  ></input>
                </div>
                <div>
                  <label>MM / YY</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      name="MM"
                      className="rounded-full pl-2 w-1/5 italic"
                      placeholder="02"
                      maxlength="2"
                      required
                    ></input>
                    <p>/</p>
                    <input
                      type="text"
                      name="YY"
                      className="rounded-full pl-2 w-1/5 italic"
                      placeholder="26"
                      maxlength="2"
                      required
                    ></input>
                  </div>
                </div>
                <div className="flex flex-col w-1/5 italic">
                  <label>CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    className="rounded-full pl-2 italic"
                    placeholder="267"
                    maxlength="3"
                    minLength="3"
                    required
                  ></input>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <div className="flex flex-col gap-2">
                <legend className="font-semibold text-xl border-b border-feedback-error mb-2">
                  Adress information
                </legend>
                <div className="flex flex-col ">
                  <label>Adress line 1</label>
                  <input
                    className="rounded-full pl-2 italic"
                    type="text"
                    name="adress_1"
                    placeholder="Fun street 1"
                    required
                  ></input>
                </div>
                <div className="flex flex-col ">
                  <label>Adress Line 2</label>
                  <input
                    type="text"
                    name="adress_2"
                    className="rounded-full pl-2 italic"
                    placeholder="Fun street 1"
                  ></input>
                </div>
                <div>
                  <div className="flex  flex-col md:flex-row lg:flex-col 2xl:flex-row gap-2">
                    <div className="flex flex-col">
                      <label>City</label>
                      <input
                        type="text"
                        name="city"
                        className="rounded-full pl-2 italic"
                        placeholder="Copenhagen"
                        required
                      ></input>
                    </div>
                    <div className="flex flex-col">
                      <label>Zip code</label>
                      <input
                        type="text"
                        name="zip_code"
                        className="rounded-full pl-2 w-1/2 italic"
                        placeholder="2500"
                        required
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
          <button
            type="submit"
            className="bg-accent-1 text-sm shadow-lg shadow-black flex self-start px-4 py-0.5"
          >
            Sumbit
          </button>
        </form>
      )}

      {paymentType === "Mobilepay" && (
        <div className="flex flex-col gap-4">
          <form action="" className="flex flex-col gap-2 ">
            <label>Enter your mobile number</label>
            <input
              className="rounded-full pl-2 w-1/4"
              type="tel"
              inputMode="decimal"
              placeholder="XXXX3095"
              maxLength="8"
              required
            ></input>
          </form>
        </div>
      )}
    </section>
  );
}

export default PaymentInfo;
