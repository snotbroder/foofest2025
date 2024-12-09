export async function getBands() {
  const headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
  };

  // const response = await fetch("https://gabby-dull-drip.glitch.me/bands", {
  //   method: "GET",
  //   headers: headersList,
  // });

  const response = await fetch("http://localhost:8080/bands", {
    method: "GET",
    headers: headersList,
  });

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
  const response = await fetch("http://localhost:8080/Schedule/Midgard", {
    method: "GET",
    headers: headersList,
  });
  // let response = await fetch("https://gabby-dull-drip.glitch.me/Schedule", {
  //   method: "GET",
  //   headers: headersList,
  // });

  let data = await response.json();
  return data;
}

export async function getSpots() {
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
  };

  let response = await fetch("http://localhost:8080/available-spots", {
    method: "GET",
    headers: headersList,
  });

  let data = await response.json();
  console.log(data);
  return data;
}

export async function getProgram(stage, day) {
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
  };

  let response = await fetch("http://localhost:8080/schedule/", {
    method: "GET",
    headers: headersList,
  });
  const filteredprogram = data?.stage?.day || [];

  let data = await response.json();
  console.log(data);
  return filteredprogram;
}
