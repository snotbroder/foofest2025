export async function getBands() {
  const headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
  };

  const response = await fetch("https://gabby-dull-drip.glitch.me/bands", {
    method: "GET",
    headers: headersList,
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch bands: ${response.statusText}`);
  }

  const data = await response.json();
  return data; // Ensure this is an array of objects
}
