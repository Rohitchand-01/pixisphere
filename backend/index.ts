const db = await Bun.file('./data/db.json').json();

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

// Utility function to wrap JSON response with CORS
function jsonResponse(data: any, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...corsHeaders,
    },
  });
}

const server = Bun.serve({
 port: Number(process.env.PORT || 3001),
  fetch(req) {
    const url = new URL(req.url);

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: corsHeaders,
      });
    }

    // GET /photographers
    if (url.pathname === '/photographers' && req.method === 'GET') {
      return jsonResponse(db.photographers);
    }

    // GET /photographers/:id
    const match = url.pathname.match(/^\/photographers\/(\d+)$/);
    if (match && req.method === 'GET') {
      const id = parseInt(match[1]);
      const photographer = db.photographers.find((p: any) => p.id === id);
      if (photographer) {
        return jsonResponse(photographer);
      } else {
        return jsonResponse({ error: 'Photographer not found' }, 404);
      }
    }

    return new Response('Not Found', {
      status: 404,
      headers: corsHeaders,
    });
  },
});

console.log(`🚀 Bun API running at http://localhost:${server.port}`);
