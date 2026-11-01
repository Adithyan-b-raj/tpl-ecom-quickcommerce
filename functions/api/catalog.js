import { getCatalog, getProductById } from './_store.js';

export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const categorySlug = url.searchParams.get('category');
  const productId = url.searchParams.get('id');

  if (productId) {
    const product = getProductById(productId);
    if (!product) {
      return new Response(JSON.stringify({ success: false, error: 'Product not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    return new Response(JSON.stringify({ success: true, product }), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=15, stale-while-revalidate=30'
      }
    });
  }

  const catalog = getCatalog(categorySlug);
  return new Response(JSON.stringify({ success: true, ...catalog }), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=15, stale-while-revalidate=30'
    }
  });
}
