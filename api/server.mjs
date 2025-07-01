export function GET(request) {
  return new Response("test", {
    headers: {
      "access-control-allow-origin": "*"
      "cache-control": "no-cache",
      "content-type": "application/octet-stream"
    }
  });
}
