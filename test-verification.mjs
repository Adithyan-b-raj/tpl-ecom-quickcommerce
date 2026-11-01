/**
 * Automated Verification Test Suite for Ticket 5.3
 * Repository: tpl-ecom-quickcommerce
 * Movement D: Zero-Hero 3-Pane Hyperlocal App Shell (Blinkit / Zepto / Instacart)
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let testsPassed = 0;
let testsFailed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✓ PASS: ${message}`);
    testsPassed++;
  } else {
    console.error(`  ✗ FAIL: ${message}`);
    testsFailed++;
  }
}

async function runTests() {
  console.log('=== 1. SCHEMA & SEED VERIFICATION ===');
  const schemaSql = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf-8');
  const seedSql = fs.readFileSync(path.join(__dirname, 'seed.sql'), 'utf-8');

  // Verify all 8 relational tables
  assert(schemaSql.includes('CREATE TABLE IF NOT EXISTS dark_stores'), 'schema.sql defines dark_stores table');
  assert(schemaSql.includes('CREATE TABLE IF NOT EXISTS categories'), 'schema.sql defines categories table');
  assert(schemaSql.includes('CREATE TABLE IF NOT EXISTS products'), 'schema.sql defines products table');
  assert(schemaSql.includes('CREATE TABLE IF NOT EXISTS product_weights'), 'schema.sql defines product_weights table');
  assert(schemaSql.includes('CREATE TABLE IF NOT EXISTS orders'), 'schema.sql defines orders table');
  assert(schemaSql.includes('CREATE TABLE IF NOT EXISTS order_items'), 'schema.sql defines order_items table');
  assert(schemaSql.includes('CREATE TABLE IF NOT EXISTS riders'), 'schema.sql defines riders table');
  assert(schemaSql.includes('CREATE TABLE IF NOT EXISTS pincodes'), 'schema.sql defines pincodes table');

  // Verify 6 required seed items
  assert(seedSql.includes('Farm Fresh Hass Avocados (Pack of 2)'), 'seed.sql seeds Farm Fresh Hass Avocados (Pack of 2)');
  assert(seedSql.includes('Organic Cold-Pressed A2 Cow Milk 1L'), 'seed.sql seeds Organic Cold-Pressed A2 Cow Milk 1L');
  assert(seedSql.includes('Tender Coconut Water 500ml'), 'seed.sql seeds Tender Coconut Water 500ml');
  assert(seedSql.includes('Antibiotic-Free Chicken Breast Boneless (500g / 1kg)'), 'seed.sql seeds Antibiotic-Free Chicken Breast Boneless (500g / 1kg)');
  assert(seedSql.includes('Sourdough Brioche Loaf 400g'), 'seed.sql seeds Sourdough Brioche Loaf 400g');
  assert(seedSql.includes('Alphonso Mangoes Grade A (1kg)'), 'seed.sql seeds Alphonso Mangoes Grade A (1kg)');

  // Verify rack/bin picking locations
  assert(seedSql.includes('Zone C / Aisle 04 / Bin 12'), 'seed.sql includes Zone C / Aisle 04 / Bin 12 picking location');
  assert(seedSql.includes('Zone A / Fresh-Produce / Bin 04'), 'seed.sql includes Zone A produce bin location');
  assert(seedSql.includes('Zone B / Dairy-Chiller / Shelf 02'), 'seed.sql includes Zone B dairy shelf location');

  // Verify supported 10-15 min pincodes
  assert(seedSql.includes('560038'), 'seed.sql includes Bangalore Indiranagar 560038');
  assert(seedSql.includes('560008'), 'seed.sql includes Bangalore Ulsoor 560008');
  assert(seedSql.includes('560034'), 'seed.sql includes Bangalore Koramangala 560034');
  assert(seedSql.includes('682001'), 'seed.sql includes Fort Kochi 682001');
  assert(seedSql.includes('682036'), 'seed.sql includes Kochi Panampilly 682036');

  console.log('\n=== 2. CLOUDFLARE FUNCTIONS API & STORE VERIFICATION ===');
  const storeModule = await import('./functions/api/_store.js');

  // Test Product Catalog with weight variants
  const catalogData = storeModule.getCatalog();
  assert(catalogData.categories.length === 6, 'Catalog returns exactly 6 hyperlocal categories');
  assert(catalogData.products.length >= 6, 'Catalog returns at least 6 master products');

  const chicken = catalogData.products.find(p => p.id === 'PRD-CHK-04');
  assert(chicken && chicken.weights.length >= 2, 'Chicken breast has multi-weight pricing variants (250g, 500g, 1kg)');
  assert(chicken.storage_type === 'frozen' && chicken.chill_temp_c === -18, 'Chicken breast flagged as -18°C frozen cold-chain');

  const avocado = catalogData.products.find(p => p.id === 'PRD-AVO-01');
  assert(avocado && avocado.aisle_location.includes('Zone A'), 'Avocados mapped to physical dark store picking bin');

  // Test Category Filter
  const meatOnly = storeModule.getCatalog('meat-seafood');
  assert(meatOnly.products.every(p => p.category_id === 'cat-meat'), 'Filtering by meat-seafood category returns only meat/seafood items');

  // Test Pincode Serviceability & ETA Check
  const pinIndiranagar = storeModule.checkPincode('560038');
  assert(pinIndiranagar.serviceable === true, 'Pincode 560038 is serviceable');
  assert(pinIndiranagar.etaMins === 11, 'Pincode 560038 returns 11-min delivery ETA');
  assert(pinIndiranagar.minFreeDelivery === 199, 'Pincode 560038 specifies ₹199 minimum for free delivery');

  const pinUnserviceable = storeModule.checkPincode('999999');
  assert(pinUnserviceable.serviceable === false, 'Pincode 999999 is recognized as unserviceable');

  // Test Dark Store Picking Queue with Countdown Timer
  const pickQueue = storeModule.getPickingQueue();
  assert(pickQueue.queue.length >= 2, 'Active picking queue contains pending dark store orders');
  assert(pickQueue.stats.avgPickVelocityMins === 1.8, 'Average pick velocity matches 1.8 mins KPI');

  const firstTicket = pickQueue.queue.find(q => q.order_status === 'PICKING');
  assert(firstTicket && typeof firstTicket.remaining_seconds === 'number', 'Order ticket contains dynamic remaining pick seconds calculation');

  // Test 1-Tap Item Pick Checkbox
  const targetItemId = firstTicket.items[1].id;
  const pickResult = storeModule.pickOrderItem(firstTicket.id, targetItemId, true);
  assert(pickResult && pickResult.item.is_picked === 1, '1-Tap pick: successfully toggled item picked checkbox');

  // Test Mark Order Packed
  const packedOrder = storeModule.markOrderPacked(firstTicket.id);
  assert(packedOrder && packedOrder.order_status === 'PACKED', 'Mark packed: order updated to PACKED and ready for rider');

  // Test Rider Fleet & Assignment
  const riders = storeModule.getRiderFleet();
  assert(riders.length >= 4, 'Fleet manager tracks 4 active delivery riders');
  assert(riders[0].bag_temp_c === 3.8, 'Rider Shafeeq insulated bag telemetry indicates 3.8°C');

  const dispatchResult = storeModule.assignRiderToOrder(firstTicket.id, riders[1].id);
  assert(dispatchResult.success === true, 'Assigned idle rider to packed order');
  assert(dispatchResult.order.order_status === 'OUT_FOR_DELIVERY', 'Order status moved to OUT_FOR_DELIVERY');
  assert(dispatchResult.riderWhatsAppUrl.includes('wa.me/'), 'Generates rider dispatch WhatsApp notification link');

  // Test Checkout & Cashfree UPI QR Simulation
  const checkoutResult = storeModule.processCheckout({
    pincode: '560038',
    customer: { name: 'Dr. Tara Varma', phone: '919847011223' },
    items: [
      { productId: 'PRD-AVO-01', weightLabel: 'Pack of 2', qty: 1 }, // 189
      { productId: 'PRD-MLK-02', weightLabel: '1L', qty: 1 }         // 84 -> subtotal 273 (>= 199 -> free delivery)
    ]
  });
  assert(checkoutResult.success === true, 'Checkout: successfully placed quick order');
  assert(checkoutResult.pricing.subtotal === 273, 'Checkout: calculated subtotal ₹273');
  assert(checkoutResult.pricing.deliveryFee === 0, 'Checkout: qualified for FREE delivery (>= ₹199 threshold)');
  assert(checkoutResult.pricing.handlingFee === 4, 'Checkout: added ₹4 cold-chain bag & handling fee');
  assert(checkoutResult.pricing.totalAmount === 277, 'Checkout: total amount is ₹277 (273 + 0 + 4)');
  assert(checkoutResult.cashfreeSimulation.upiQrString.includes('upi://pay'), 'Checkout: Cashfree UPI simulated QR string generated');

  // Test Functions API Route Handlers directly
  const catalogFn = await import('./functions/api/catalog.js');
  const catRes = await catalogFn.onRequest({ request: new Request('http://localhost/api/catalog') });
  const catData = await catRes.json();
  assert(catRes.status === 200 && catData.categories.length === 6, 'functions/api/catalog.js returns 200 with 6 categories');

  const pincodeFn = await import('./functions/api/pincode.js');
  const pinRes = await pincodeFn.onRequest({ request: new Request('http://localhost/api/pincode?pincode=560038') });
  const pinData = await pinRes.json();
  assert(pinRes.status === 200 && pinData.etaMins === 11, 'functions/api/pincode.js returns 11-min ETA for 560038');

  const pickerFn = await import('./functions/api/picker.js');
  const pickerRes = await pickerFn.onRequest({ request: new Request('http://localhost/api/picker') });
  const pickerData = await pickerRes.json();
  assert(pickerRes.status === 200 && pickerData.queue.length >= 2, 'functions/api/picker.js GET returns picking queue');

  const dispatchFn = await import('./functions/api/dispatch.js');
  const dispatchRes = await dispatchFn.onRequest({ request: new Request('http://localhost/api/dispatch') });
  const dispatchData = await dispatchRes.json();
  assert(dispatchRes.status === 200 && dispatchData.riders.length >= 4, 'functions/api/dispatch.js GET returns fleet status');

  const checkoutFn = await import('./functions/api/checkout.js');
  const checkoutPostRes = await checkoutFn.onRequest({
    request: new Request('http://localhost/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        pincode: '560038',
        customer: { name: 'Nandini', phone: '919876543210' },
        items: [{ productId: 'PRD-COC-03', weightLabel: '500ml', qty: 2 }]
      })
    })
  });
  const checkoutPostData = await checkoutPostRes.json();
  assert(checkoutPostRes.status === 200 && checkoutPostData.success === true, 'functions/api/checkout.js POST creates order');

  const wildcardFn = await import('./functions/api/[[route]].js');
  const healthRes = await wildcardFn.onRequest({ request: new Request('http://localhost/api/health') });
  const healthData = await healthRes.json();
  assert(healthRes.status === 200 && healthData.archetype === 'hyperlocal-3pane-app', 'functions/api/[[route]].js handles health check with hyperlocal archetype');

  console.log('\n=== 3. HTML ARCHETYPE & DOM BLUEPRINT VERIFICATION ===');
  const indexHtml = fs.readFileSync(path.join(__dirname, 'public', 'index.html'), 'utf-8');
  const adminHtml = fs.readFileSync(path.join(__dirname, 'public', 'admin.html'), 'utf-8');

  // Verify public/index.html
  assert(indexHtml.includes('data-layout-archetype="hyperlocal-3pane-app"'), 'index.html has data-layout-archetype="hyperlocal-3pane-app"');
  assert(indexHtml.includes('class="cat-rail"'), 'index.html implements Left Category Rail (Pane 1)');
  assert(indexHtml.includes('class="shelf-pane"'), 'index.html implements Center Fast Shelf Grid (Pane 2)');
  assert(indexHtml.includes('class="cart-pane"'), 'index.html implements Right Sticky Cart & 15-Min Delivery Drawer (Pane 3)');
  assert(indexHtml.includes('class="free-delivery-bar"'), 'index.html contains Dynamic Free Delivery Progress Bar');
  assert(indexHtml.includes('id="riderGpsModal"'), 'index.html contains Live Rider GPS Map Simulation Modal');
  assert(indexHtml.includes('id="svgMapContainer"'), 'index.html contains SVG animated delivery scooter map frame');
  assert(indexHtml.includes('id="pincodeModal"'), 'index.html contains Pincode radar with 1-click change modal');
  assert(indexHtml.includes('id="upiQrSection"'), 'index.html contains simulated Cashfree UPI QR express payment modal');
  assert(indexHtml.includes('data-wl-brand'), 'index.html has [data-wl-brand]');
  assert(indexHtml.includes('data-wl-tagline'), 'index.html has [data-wl-tagline]');
  assert(indexHtml.includes('id="floatingWaBtn"'), 'index.html has #floatingWaBtn concierge link');

  // Verify public/admin.html
  assert(adminHtml.includes('data-layout-archetype="darkstore-picker-admin"'), 'admin.html has data-layout-archetype="darkstore-picker-admin"');
  assert(adminHtml.includes('id="pickingQueueGrid"'), 'admin.html contains Dark Store Picking Queue Console');
  assert(adminHtml.includes('id="fleetTableBody"'), 'admin.html contains Rider Fleet Dispatch Table');
  assert(adminHtml.includes('id="coldChainGrid"'), 'admin.html contains Cold-Chain Temperature Logger');
  assert(adminHtml.includes('PACKED &amp; READY FOR RIDER'), 'admin.html contains PACKED & READY FOR RIDER action button');
  assert(adminHtml.includes('id="adminWaInput"'), 'admin.html contains #adminWaInput for White-Label phone override');

  console.log('\n=== 4. WHITELABEL & GITIGNORE VERIFICATION ===');
  const whitelabelJs = fs.readFileSync(path.join(__dirname, 'public', 'whitelabel.js'), 'utf-8');
  assert(whitelabelJs.includes("params.has('brand')"), 'whitelabel.js supports ?brand= override');
  assert(whitelabelJs.includes("params.has('primary')"), 'whitelabel.js supports ?primary= override');
  assert(whitelabelJs.includes("params.has('wa')"), 'whitelabel.js supports ?wa= override');
  assert(whitelabelJs.includes("params.has('phone')"), 'whitelabel.js supports ?phone= override');

  const gitignore = fs.readFileSync(path.join(__dirname, '.gitignore'), 'utf-8');
  assert(gitignore.includes('.wrangler/'), '.gitignore ignores .wrangler/');
  assert(gitignore.includes('node_modules/'), '.gitignore ignores node_modules/');
  assert(gitignore.includes('*.log'), '.gitignore ignores *.log');

  console.log(`\n========================================`);
  console.log(`SUMMARY: ${testsPassed} passed, ${testsFailed} failed.`);
  console.log(`========================================`);

  if (testsFailed > 0) {
    process.exit(1);
  }
}

runTests().catch(err => {
  console.error('Test execution failed:', err);
  process.exit(1);
});
