import { checkPincode } from './_store.js';

export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const pincode = url.searchParams.get('pincode') || '560038';

  const result = checkPincode(pincode);
  const status = result.serviceable ? 200 : 404;

  return new Response(JSON.stringify(result), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=60'
    }
  });
}
