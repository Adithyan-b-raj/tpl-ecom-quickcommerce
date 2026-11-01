import { getRiderFleet, assignRiderToOrder } from './_store.js';

export async function onRequest(context) {
  const { request } = context;

  if (request.method === 'POST') {
    try {
      const body = await request.json();
      const { orderId, riderId } = body;

      if (!orderId || !riderId) {
        return new Response(JSON.stringify({ success: false, error: 'Missing orderId or riderId' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      const result = assignRiderToOrder(orderId, riderId);
      if (!result.success) {
        return new Response(JSON.stringify(result), {
          status: 404,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      return new Response(JSON.stringify(result), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (err) {
      return new Response(JSON.stringify({ success: false, error: err.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }

  // GET: return rider fleet status
  const riders = getRiderFleet();
  return new Response(JSON.stringify({ success: true, riders }), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store'
    }
  });
}
