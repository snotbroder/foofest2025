export async function getBands() {
  const headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
  };

  const response = await fetch("https://gabby-dull-drip.glitch.me/bands", {
    method: "GET",
    headers: headersList,
  });

  // const response = await fetch("http://https://gabby-dull-drip.glitch.me/bands", {
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
  // const response = await fetch("http://https://gabby-dull-drip.glitch.me/Schedule/Midgard", {
  //   method: "GET",
  //   headers: headersList,
  // });
  let response = await fetch("https://gabby-dull-drip.glitch.me/Schedule", {
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

  // let response = await fetch("http://https://gabby-dull-drip.glitch.me/available-spots", {
  //   method: "GET",
  //   headers: headersList,
  // });

  let response = await fetch("https://gabby-dull-drip.glitch.me/available-spots", {
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

  // let response = await fetch("http://https://gabby-dull-drip.glitch.me/schedule/", {
  //   method: "GET",
  //   headers: headersList,
  // });

  let response = await fetch("https://gabby-dull-drip.glitch.me/Schedule", {
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
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndmbWxuam92cmlua3RxZG9sdXFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM4NDAwNTQsImV4cCI6MjA0OTQxNjA1NH0.o3Nekm9csh1IK1J5_vuPveEVC7A8KcGeh8tQhp7OIE8",
    "Content-Type": "application/json",
    Prefer: "return=representation",
  };

  let response = await fetch("https://wfmlnjovrinktqdoluqa.supabase.co/rest/v1/voluenteerInfo", {
    method: "POST",
    headers: headersList,
    body: JSON.stringify(voluenteerData),
  });

  let data = await response.json();
  // console.log(data);
  return data;
}

export async function reserveSpot(areaReserved, amount) {
  let headersList = {
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    area: areaReserved,
    amount: amount,
  });

  // let response = await fetch("http://https://gabby-dull-drip.glitch.me/reserve-spot", {
  //   method: "PUT",
  //   body: bodyContent,
  //   headers: headersList,
  // });

  let response = await fetch("https://gabby-dull-drip.glitch.me/reserve-spot", {
    method: "put",
    body: bodyContent,
    headers: headersList,
  });

  let data = await response.json(); //omg husk json
  console.log(data);
  return data;
}
