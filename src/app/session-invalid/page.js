"use client";
import { redirect } from "next/navigation";

function sessionInvalid() {
  function redirectToBooking() {
    redirect("/booking");
  }
  return (
    <>
      <h1>Oops</h1>
      <p>ur session was invalid, propably bcuz the time ran out</p>
      <p className="small text-feedback-disabled-2">n00b :P</p>
      <button className="btn-style" onClick={redirectToBooking}>
        Back to booking
      </button>
    </>
  );
}

export default sessionInvalid;
