export function GET(request) {
  console.log(request);
  return new Response("test", {
    headers: {"access-control-allow-origin":"*"}
  });
}
