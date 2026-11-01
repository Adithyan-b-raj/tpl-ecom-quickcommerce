import { getCatalog, getColdChainReadings, logColdChainReading, checkPincode } from './_store.js';

export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const path = url.pathname;

  // Cold Chain endpoint
  if (path.includes('/api/cold-chain')) {
    if (request.method === 'POST') {
      try {
        const body = await request.json();
        const logged = logColdChainReading(body);
        return new Response(JSON.stringify({ success: true, reading: logged }), {
          headers: { 'Content-Type': 'application/json' }
        });
      } catch (err) {
        return new Response(JSON.stringify({ success: false, error: err.message }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }
    const data = getColdChainReadings();
    return new Response(JSON.stringify({ success: true, ...data }), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store'
      }
    });
  }

  // Health check endpoint
  if (path.includes('/api/health') || path === '/api' || path === '/api/') {
    return new Response(JSON.stringify({
      service: 'tpl-ecom-quickcommerce',
      archetype: 'hyperlocal-3pane-app',
      movement: 'Movement D: High-Velocity Hyperlocal App-Shell (Zepto / Blinkit)',
      status: 'ok',
      engine: 'Cloudflare Pages Functions + D1 Edge Cache',
      timestamp: new Date().toISOString()
    }), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store'
      }
    });
  }

  // Fallback: Return summary catalog
  const catalog = getCatalog();
  return new Response(JSON.stringify({
    service: 'tpl-ecom-quickcommerce',
    status: 'ok',
    catalog
  }), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=15, stale-while-revalidate=30'
    }
  });
}
