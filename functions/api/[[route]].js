export async function onRequest() {
  return new Response(JSON.stringify({ service: 'tpl-ecom-quickcommerce', status: 'ok', items: [{"id":"QC-3391","name":"Sreekumar Nair (Panampilly Nagar — 682036)","phone":"919847011223","detail":"1kg Neymeen Curry Cut + 500g Tiger Prawns • Rider: Shafeeq (KL-07-CS-4411)","status":"OUT FOR DELIVERY 🛵","amount":"₹1,620"},{"id":"QC-3392","name":"Reshma Thomas (Kakkanad InfoPark — 682030)","phone":"919447022334","detail":"Organic Veg Box + Appam Batter Combo • Slot: 6:00 PM Evening","status":"PACKING AT HUB ❄️","amount":"₹550"},{"id":"QC-3390","name":"Capt. George V. (Marine Drive — 682031)","phone":"919895033445","detail":"2x Kanthari Pepper Fish Pack • Delivered in 19 mins","status":"DELIVERED ✅","amount":"₹960"}] }), {
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=30, s-maxage=60, stale-while-revalidate=120' }
  });
}
