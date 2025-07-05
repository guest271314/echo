const headers = {
  "access-control-allow-origin": "*"
};
export function GET(request) {
  let response;
  if (request.method === "GET") {
    response = "Echo";
  }
  if (request.method === "POST") {
    response = request.body;
  }
  if (request.method === "OPTIONS") {
    response = null;
  }
  return new Response(response, {
    headers
  });
}
