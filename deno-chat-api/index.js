addEventListener("fetch", (event) => {
  const response = new Response("Hello World second try!", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
