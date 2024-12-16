const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function getBands() {
  const headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
  };

  const response = await fetch("http://localhost:8080/bands", {
    method: "GET",
    headers: headersList,
  });

  // const response = await fetch("http://localhost:8080/bands", {
  //   method: "GET",
  //   headers: headersList,
  // });

  if (!response.ok) {
    throw new Error(`Failed to fetch bands: ${response.statusText}`);
  }

  const data = await response.json();
  return data; // Ensure this is an array of objects
}

export async function getSchedule() {
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
  };
  // const response = await fetch("http://localhost:8080/Schedule/Midgard", {
  //   method: "GET",
  //   headers: headersList,
  // });
  let response = await fetch("http://localhost:8080/Schedule", {
    method: "GET",
    headers: headersList,
  });

  let data = await response.json();
  return data;
}

export async function getSpots() {
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
  };

  // let response = await fetch("http://localhost:8080/available-spots", {
  //   method: "GET",
  //   headers: headersList,
  // });

  let response = await fetch("http://localhost:8080/available-spots", {
    method: "GET",
    headers: headersList,
  });

  let data = await response.json();
  // console.log(data);
  return data;
}

export async function getProgram(stage, day) {
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
  };

  // let response = await fetch("http://localhost:8080/schedule/", {
  //   method: "GET",
  //   headers: headersList,
  // });

  let response = await fetch("http://localhost:8080/Schedule", {
    method: "GET",
    headers: headersList,
  });
  const filteredprogram = data?.stage?.day || [];

  let data = await response.json();
  // console.log(data);
  return filteredprogram;
}

export async function postVoluenteerInfo(voluenteerData) {
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    apikey: key,
    "Content-Type": "application/json",
    Prefer: "return=representation",
  };

  let response = await fetch(`${url}voluenteerInfo`, {
    method: "POST",
    headers: headersList,
    body: JSON.stringify(voluenteerData),
  });

  let data = await response.json();
  // console.log(data);
  return data;
}

// export async function postPaymentInfo(paymentInfo) {
//   let headersList = {
//     Accept: "*/*",
//     "User-Agent": "Thunder Client (https://www.thunderclient.com)",
//     apikey: key,
//     "Content-Type": "application/json",
//     Prefer: "return=representation",
//   };

//   let response = await fetch(`${url}paymentInfo`, {
//     method: "POST",
//     headers: headersList,
//     body: JSON.stringify(paymentInfo),
//   });

//   let data = await response.json();
//   // console.log(data);
//   return data;
// }

// export async function postGuestInfo(GuestInfo) {
//   let headersList = {
//     Accept: "*/*",
//     "User-Agent": "Thunder Client (https://www.thunderclient.com)",
//     apikey:
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndmbWxuam92cmlua3RxZG9sdXFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM4NDAwNTQsImV4cCI6MjA0OTQxNjA1NH0.o3Nekm9csh1IK1J5_vuPveEVC7A8KcGeh8tQhp7OIE8",
//     "Content-Type": "application/json",
//     Prefer: "return=representation",
//   };

//   let response = await fetch(`${url}subGuestsInfo`, {
//     method: "POST",
//     headers: headersList,
//     body: JSON.stringify(GuestInfo),
//   });

//   let data = await response.json();
//   // console.log(data);
//   return data;
// }

export async function postPaymentInfo(paymentInfo) {
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    apikey: key,
    "Content-Type": "application/json",
    Prefer: "return=representation",
  };

  let response = await fetch(`${url}paymentInfo`, {
    method: "POST",
    headers: headersList,
    body: JSON.stringify(paymentInfo),
  });

  let data = await response.json();
  // console.log(data);
  return data;
}

export async function postGuestInfo(GuestInfo) {
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    apikey: key,
  };

  let response = await fetch(`${url}subGuestsInfo`, {
    method: "POST",
    headers: headersList,
    body: JSON.stringify(GuestInfo),
  });

  let data = await response.json();
  // console.log(data);
  return data;
}

export async function reserveSpot(selectedArea, ticketAmount) {
  let headersList = {
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    area: selectedArea,
    amount: ticketAmount,
  });

  // let response = await fetch("http://localhost:8080/reserve-spot", {
  //   method: "PUT",
  //   body: bodyContent,
  //   headers: headersList,
  // });
  try {
    let response = await fetch("http://localhost:8080/reserve-spot", {
      method: "PUT",
      body: bodyContent,
      headers: headersList,
    });

    let data = await response.json(); //omg husk json
    console.log(data);
    return data;
  } catch (error) {
    console.error("Fejl", error);
  }
}
//http://localhost:8080
export async function fulfillReservation(reservationId) {
  let headersList = {
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    id: reservationId,
  });

  // let response = await fetch("http://localhost:8080/fullfill-reservation", {
  //   method: "POST",
  //   body: bodyContent,
  //   headers: headersList,
  // });
  try {
    let response = await fetch("http://localhost:8080/fullfill-reservation", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });

    let data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Fejl", error);
  }
}
