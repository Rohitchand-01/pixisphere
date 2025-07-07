const db = await Bun.file('./data/db.json').json();

const server = Bun.serve({
  port: 3001,
  fetch(req) {
    const url = new URL(req.url);

    // GET /photographers
    if (url.pathname === '/photographers' && req.method === 'GET') {
      return Response.json(db.photographers);
    }

    // GET /photographers/:id
    const match = url.pathname.match(/^\/photographers\/(\d+)$/);
    if (match && req.method === 'GET') {
      const id = parseInt(match[1]);
      const photographer = db.photographers.find((p: any) => p.id === id);
      if (photographer) {
        return Response.json(photographer);
      } else {
        return new Response('Photographer not found', { status: 404 });
      }
    }

    return new Response('Not Found', { status: 404 });
  },
});

console.log(`🚀 Bun API running at http://localhost:${server.port}`);
