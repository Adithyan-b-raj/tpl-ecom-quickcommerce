import { getPickingQueue, pickOrderItem, markOrderPacked } from './_store.js';

export async function onRequest(context) {
  const { request } = context;

  if (request.method === 'POST') {
    try {
      const body = await request.json();
      const { orderId, itemId, isPicked, action } = body;

      if (!orderId) {
        return new Response(JSON.stringify({ success: false, error: 'Missing orderId' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      if (action === 'mark_packed') {
        const updated = markOrderPacked(orderId);
        if (!updated) {
          return new Response(JSON.stringify({ success: false, error: 'Order not found' }), {
            status: 404,
            headers: { 'Content-Type': 'application/json' }
          });
        }
        return new Response(JSON.stringify({ success: true, action: 'order_packed', order: updated }), {
          headers: { 'Content-Type': 'application/json' }
        });
      }

      if (itemId) {
        const updated = pickOrderItem(orderId, itemId, isPicked !== false);
        if (!updated) {
          return new Response(JSON.stringify({ success: false, error: 'Order or item not found' }), {
            status: 404,
            headers: { 'Content-Type': 'application/json' }
          });
        }
        return new Response(JSON.stringify({ success: true, action: 'item_picked', ...updated }), {
          headers: { 'Content-Type': 'application/json' }
        });
      }

      return new Response(JSON.stringify({ success: false, error: 'Invalid picker action' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (err) {
      return new Response(JSON.stringify({ success: false, error: err.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }

  // GET: return active picking queue
  const queueData = getPickingQueue();
  return new Response(JSON.stringify({ success: true, ...queueData }), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store'
    }
  });
}
