 export const config = {
  runtime: "edge", // Use Edge Runtime
};

export default async function handler(request) {
  const headers = {
    "access-control-allow-origin": "*",
    "content-type": "text/plain"
  };

  let body;

  if (request.method === "GET") {
    body = "Echo";
  }

  if (request.method === "POST") {
    body = await request.text(); // Or request.json() if expecting JSON
  }

  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        ...headers,
        "access-control-allow-methods": "GET,POST,OPTIONS",
        "access-control-allow-headers": "Content-Type",
      },
    });
  }

  return new Response(body, { headers });
}
