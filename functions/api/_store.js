/**
 * Shared Hyperlocal Data & State Store for tpl-ecom-quickcommerce
 * Movement D: Zero-Hero 3-Pane Hyperlocal App Shell (Blinkit / Zepto / Instacart)
 * CRITICAL: Zero top-level Date.now() to prevent V8 isolate snapshot freezing.
 * Uses lazy request-time factory getters for all temporal calculations.
 */

function getInitialCategories() {
  return [
    { id: 'cat-produce', slug: 'fresh-produce', name: 'Fresh Produce', icon: '🥑', sort_order: 1 },
    { id: 'cat-dairy', slug: 'dairy-breakfast', name: 'Dairy & Breakfast', icon: '🥛', sort_order: 2 },
    { id: 'cat-meat', slug: 'meat-seafood', name: 'Meat & Seafood', icon: '🍗', sort_order: 3 },
    { id: 'cat-beverages', slug: 'cold-beverages', name: 'Cold Beverages', icon: '🥥', sort_order: 4 },
    { id: 'cat-bakery', slug: 'bakery-artisan', name: 'Bakery & Artisan', icon: '🍞', sort_order: 5 },
    { id: 'cat-fruits', slug: 'seasonal-fruits', name: 'Seasonal Fruits', icon: '🥭', sort_order: 6 }
  ];
}

function getInitialProducts() {
  return [
    {
      id: 'PRD-AVO-01',
      slug: 'farm-fresh-hass-avocados',
      name: 'Farm Fresh Hass Avocados (Pack of 2)',
      category_id: 'cat-produce',
      category_name: 'Fresh Produce',
      description: 'Imported Haas avocados, perfectly ripened and creamy. Rich in heart-healthy monounsaturated fatty acids.',
      image_url: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
      storage_type: 'chilled',
      chill_temp_c: 7.5,
      dark_store_id: 'DS-BLR-01',
      aisle_location: 'Zone A / Fresh-Produce / Bin 04',
      is_active: 1,
      weights: [
        { id: 'WGT-AVO-1', weight_label: 'Pack of 2', price: 189, retail_price: 240, stock_count: 34, is_default: 1 },
        { id: 'WGT-AVO-2', weight_label: 'Pack of 4', price: 359, retail_price: 460, stock_count: 18, is_default: 0 }
      ]
    },
    {
      id: 'PRD-MLK-02',
      slug: 'organic-cold-pressed-a2-cow-milk-1l',
      name: 'Organic Cold-Pressed A2 Cow Milk 1L',
      category_id: 'cat-dairy',
      category_name: 'Dairy & Breakfast',
      description: 'Farm-bottled single-origin Gir cow whole milk. Chilled immediately at 3.6°C to preserve enzymatic vitality.',
      image_url: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80',
      storage_type: 'chilled',
      chill_temp_c: 3.6,
      dark_store_id: 'DS-BLR-01',
      aisle_location: 'Zone B / Dairy-Chiller / Shelf 02',
      is_active: 1,
      weights: [
        { id: 'WGT-MLK-1', weight_label: '500ml', price: 45, retail_price: 55, stock_count: 60, is_default: 0 },
        { id: 'WGT-MLK-2', weight_label: '1L', price: 84, retail_price: 100, stock_count: 85, is_default: 1 },
        { id: 'WGT-MLK-3', weight_label: '2L Family Pack', price: 160, retail_price: 195, stock_count: 24, is_default: 0 }
      ]
    },
    {
      id: 'PRD-COC-03',
      slug: 'tender-coconut-water-500ml',
      name: 'Tender Coconut Water 500ml',
      category_id: 'cat-beverages',
      category_name: 'Cold Beverages',
      description: '100% natural Pollachi tender coconut water, cold-bio-filtered with zero added sugar and natural electrolytes.',
      image_url: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80',
      storage_type: 'chilled',
      chill_temp_c: 4.0,
      dark_store_id: 'DS-BLR-01',
      aisle_location: 'Zone B / Bev-Chiller / Bin 08',
      is_active: 1,
      weights: [
        { id: 'WGT-COC-1', weight_label: '250ml', price: 40, retail_price: 50, stock_count: 42, is_default: 0 },
        { id: 'WGT-COC-2', weight_label: '500ml', price: 65, retail_price: 80, stock_count: 50, is_default: 1 },
        { id: 'WGT-COC-3', weight_label: 'Twin Pack (500ml x 2)', price: 120, retail_price: 150, stock_count: 20, is_default: 0 }
      ]
    },
    {
      id: 'PRD-CHK-04',
      slug: 'antibiotic-free-chicken-breast-boneless',
      name: 'Antibiotic-Free Chicken Breast Boneless (500g / 1kg)',
      category_id: 'cat-meat',
      category_name: 'Meat & Seafood',
      description: 'Pasture-raised poultry breast fillet, 100% antibiotic & hormone free. Blast-chilled and vacuum sealed.',
      image_url: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=600&q=80',
      storage_type: 'frozen',
      chill_temp_c: -18.0,
      dark_store_id: 'DS-BLR-01',
      aisle_location: 'Zone C / Aisle 04 / Bin 12',
      is_active: 1,
      weights: [
        { id: 'WGT-CHK-1', weight_label: '250g', price: 125, retail_price: 155, stock_count: 30, is_default: 0 },
        { id: 'WGT-CHK-2', weight_label: '500g', price: 235, retail_price: 290, stock_count: 45, is_default: 1 },
        { id: 'WGT-CHK-3', weight_label: '1kg', price: 449, retail_price: 550, stock_count: 22, is_default: 0 }
      ]
    },
    {
      id: 'PRD-SOU-05',
      slug: 'sourdough-brioche-loaf-400g',
      name: 'Sourdough Brioche Loaf 400g',
      category_id: 'cat-bakery',
      category_name: 'Bakery & Artisan',
      description: 'Slow-fermented wild yeast brioche enriched with French grass-fed butter. Baked fresh daily at 4:00 AM.',
      image_url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
      storage_type: 'ambient',
      chill_temp_c: 22.0,
      dark_store_id: 'DS-BLR-01',
      aisle_location: 'Zone D / Bakery-Rack / Shelf 01',
      is_active: 1,
      weights: [
        { id: 'WGT-SOU-1', weight_label: '200g Half', price: 79, retail_price: 99, stock_count: 15, is_default: 0 },
        { id: 'WGT-SOU-2', weight_label: '400g', price: 140, retail_price: 175, stock_count: 28, is_default: 1 },
        { id: 'WGT-SOU-3', weight_label: '800g Twin', price: 260, retail_price: 330, stock_count: 12, is_default: 0 }
      ]
    },
    {
      id: 'PRD-MNG-06',
      slug: 'alphonso-mangoes-grade-a-1kg',
      name: 'Alphonso Mangoes Grade A (1kg)',
      category_id: 'cat-fruits',
      category_name: 'Seasonal Fruits',
      description: 'Naturally tree-ripened Devgad Alphonso mangoes. Golden saffron pulp with intense aromatic floral bouquet.',
      image_url: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=600&q=80',
      storage_type: 'ambient',
      chill_temp_c: 18.0,
      dark_store_id: 'DS-BLR-01',
      aisle_location: 'Zone A / Tropical-Fruit / Bin 09',
      is_active: 1,
      weights: [
        { id: 'WGT-MNG-1', weight_label: '500g (2 pcs)', price: 249, retail_price: 320, stock_count: 25, is_default: 0 },
        { id: 'WGT-MNG-2', weight_label: '1kg', price: 469, retail_price: 599, stock_count: 38, is_default: 1 },
        { id: 'WGT-MNG-3', weight_label: '2kg Crate', price: 899, retail_price: 1150, stock_count: 10, is_default: 0 }
      ]
    },
    {
      id: 'PRD-FSH-07',
      slug: 'wild-caught-neymeen-kingfish-steaks',
      name: 'Wild-Caught Neymeen King Fish Steaks (500g)',
      category_id: 'cat-meat',
      category_name: 'Meat & Seafood',
      description: 'Arabian sea catch-of-the-day king fish steaks, cleaned and cut. Maintained at -2°C cold-chain.',
      image_url: 'https://images.unsplash.com/photo-1534948216015-843149f72be3?auto=format&fit=crop&w=600&q=80',
      storage_type: 'frozen',
      chill_temp_c: -18.0,
      dark_store_id: 'DS-BLR-01',
      aisle_location: 'Zone C / Meat-Freezer / Bin 05',
      is_active: 1,
      weights: [
        { id: 'WGT-FSH-1', weight_label: '500g', price: 380, retail_price: 480, stock_count: 18, is_default: 1 },
        { id: 'WGT-FSH-2', weight_label: '1kg', price: 740, retail_price: 920, stock_count: 12, is_default: 0 }
      ]
    },
    {
      id: 'PRD-EGG-08',
      slug: 'farm-fresh-country-eggs-pack-of-6',
      name: 'Organic Free-Range Country Eggs (Pack of 6)',
      category_id: 'cat-dairy',
      category_name: 'Dairy & Breakfast',
      description: 'Brown shell eggs from grain-fed hens. Golden yellow high-protein yolks rich in Omega-3.',
      image_url: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=600&q=80',
      storage_type: 'chilled',
      chill_temp_c: 8.0,
      dark_store_id: 'DS-BLR-01',
      aisle_location: 'Zone B / Dairy-Chiller / Shelf 04',
      is_active: 1,
      weights: [
        { id: 'WGT-EGG-1', weight_label: 'Pack of 6', price: 82, retail_price: 105, stock_count: 40, is_default: 1 },
        { id: 'WGT-EGG-2', weight_label: 'Pack of 12', price: 155, retail_price: 200, stock_count: 25, is_default: 0 }
      ]
    },
    {
      id: 'PRD-ORG-09',
      slug: 'cold-pressed-valencia-orange-juice-500ml',
      name: 'Cold-Pressed Valencia Orange Juice 500ml',
      category_id: 'cat-beverages',
      category_name: 'Cold Beverages',
      description: 'High-pressure processed (HPP) raw Valencia oranges. 100% juice, no heat treatment, no preservatives.',
      image_url: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80',
      storage_type: 'chilled',
      chill_temp_c: 3.8,
      dark_store_id: 'DS-BLR-01',
      aisle_location: 'Zone B / Bev-Chiller / Bin 03',
      is_active: 1,
      weights: [
        { id: 'WGT-ORG-1', weight_label: '300ml', price: 89, retail_price: 115, stock_count: 30, is_default: 0 },
        { id: 'WGT-ORG-2', weight_label: '500ml', price: 139, retail_price: 179, stock_count: 35, is_default: 1 }
      ]
    },
    {
      id: 'PRD-CRO-10',
      slug: 'french-butter-croissants-pack-of-2',
      name: 'Artisan Butter Croissants (Pack of 2)',
      category_id: 'cat-bakery',
      category_name: 'Bakery & Artisan',
      description: 'Flaky, layered French laminated pastry baked with 84% churned Normandy butter.',
      image_url: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80',
      storage_type: 'ambient',
      chill_temp_c: 22.0,
      dark_store_id: 'DS-BLR-01',
      aisle_location: 'Zone D / Bakery-Rack / Shelf 03',
      is_active: 1,
      weights: [
        { id: 'WGT-CRO-1', weight_label: 'Pack of 2', price: 160, retail_price: 210, stock_count: 20, is_default: 1 },
        { id: 'WGT-CRO-2', weight_label: 'Pack of 4', price: 299, retail_price: 390, stock_count: 14, is_default: 0 }
      ]
    }
  ];
}

function getInitialRiders() {
  return [
    {
      id: 'RDR-01',
      name: 'Shafeeq K.',
      phone: '919847011223',
      vehicle_no: 'KA-03-EM-9921',
      vehicle_type: 'Ather 450X EV',
      photo_url: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
      battery_pct: 92,
      current_lat: 12.9734,
      current_lng: 77.6435,
      status: 'IN_TRANSIT',
      bag_temp_c: 3.8,
      speed_kmh: 32,
      rating: 4.96
    },
    {
      id: 'RDR-02',
      name: 'Sunil Kumar',
      phone: '919880123456',
      vehicle_no: 'KA-04-EV-4412',
      vehicle_type: 'Ola S1 Pro EV',
      photo_url: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&q=80',
      battery_pct: 78,
      current_lat: 12.9702,
      current_lng: 77.6389,
      status: 'IDLE',
      bag_temp_c: 4.1,
      speed_kmh: 0,
      rating: 4.91
    },
    {
      id: 'RDR-03',
      name: 'Arshad V.',
      phone: '919895033445',
      vehicle_no: 'KL-07-EQ-8819',
      vehicle_type: 'TVS iQube EV',
      photo_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      battery_pct: 85,
      current_lat: 9.9680,
      current_lng: 76.2950,
      status: 'IN_TRANSIT',
      bag_temp_c: 3.5,
      speed_kmh: 30,
      rating: 4.88
    },
    {
      id: 'RDR-04',
      name: 'Vignesh R.',
      phone: '919740112288',
      vehicle_no: 'KA-05-EX-2290',
      vehicle_type: 'Bajaj Chetak EV',
      photo_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      battery_pct: 64,
      current_lat: 12.9690,
      current_lng: 77.6420,
      status: 'IDLE',
      bag_temp_c: 4.0,
      speed_kmh: 0,
      rating: 4.95
    }
  ];
}

function getInitialPincodes() {
  return [
    { pincode: '560038', area_name: 'Indiranagar 100ft Rd', city: 'Bengaluru', eta_mins: 11, delivery_fee: 25, min_free_delivery: 199, is_serviceable: 1, dark_store_id: 'DS-BLR-01' },
    { pincode: '560008', area_name: 'Ulsoor / Halasuru', city: 'Bengaluru', eta_mins: 13, delivery_fee: 25, min_free_delivery: 199, is_serviceable: 1, dark_store_id: 'DS-BLR-01' },
    { pincode: '560034', area_name: 'Koramangala 4th Block', city: 'Bengaluru', eta_mins: 12, delivery_fee: 25, min_free_delivery: 199, is_serviceable: 1, dark_store_id: 'DS-BLR-01' },
    { pincode: '560001', area_name: 'MG Road / Shivaji Nagar', city: 'Bengaluru', eta_mins: 15, delivery_fee: 30, min_free_delivery: 249, is_serviceable: 1, dark_store_id: 'DS-BLR-01' },
    { pincode: '682036', area_name: 'Panampilly Nagar', city: 'Kochi', eta_mins: 12, delivery_fee: 25, min_free_delivery: 199, is_serviceable: 1, dark_store_id: 'DS-COK-01' },
    { pincode: '682001', area_name: 'Fort Kochi Heritage', city: 'Kochi', eta_mins: 16, delivery_fee: 35, min_free_delivery: 299, is_serviceable: 1, dark_store_id: 'DS-COK-01' },
    { pincode: '682030', area_name: 'Kakkanad InfoPark Zone', city: 'Kochi', eta_mins: 14, delivery_fee: 25, min_free_delivery: 199, is_serviceable: 1, dark_store_id: 'DS-COK-01' }
  ];
}

// In-memory data store holding mutable state across requests in current isolate
let memoryCategories = getInitialCategories();
let memoryProducts = getInitialProducts();
let memoryRiders = getInitialRiders();
let memoryPincodes = getInitialPincodes();

// Orders state - will be initialized lazily to avoid frozen top-level timestamps
let memoryOrders = null;

function initializeOrders() {
  const now = Date.now();
  return [
    {
      id: 'QC-4401',
      customer_name: 'Rohan Mehta',
      customer_phone: '919820334455',
      delivery_address: 'Flat 402, Green Glen Apts, 12th Main, Indiranagar',
      pincode: '560038',
      subtotal: 508,
      delivery_fee: 0,
      handling_fee: 4,
      total_amount: 512,
      payment_method: 'cashfree_upi',
      payment_status: 'PAID',
      order_status: 'PICKING',
      rider_id: null,
      picked_items_count: 1,
      total_items_count: 3,
      estimated_delivery_mins: 11,
      upi_qr_string: 'upi://pay?pa=freshco.express@icici&pn=FLASH+GROCERY&am=512&cu=INR&tn=QC-4401',
      bag_temp_c: 3.8,
      pick_deadline_ms: now + 120 * 1000, // 2 mins remaining
      created_at: new Date(now - 60 * 1000).toISOString(),
      items: [
        { id: 'ITM-01', order_id: 'QC-4401', product_id: 'PRD-AVO-01', product_name: 'Farm Fresh Hass Avocados (Pack of 2)', weight_label: 'Pack of 2', price: 189, qty: 1, aisle_location: 'Zone A / Fresh-Produce / Bin 04', is_picked: 1 },
        { id: 'ITM-02', order_id: 'QC-4401', product_id: 'PRD-MLK-02', product_name: 'Organic Cold-Pressed A2 Cow Milk 1L', weight_label: '1L', price: 84, qty: 1, aisle_location: 'Zone B / Dairy-Chiller / Shelf 02', is_picked: 0 },
        { id: 'ITM-03', order_id: 'QC-4401', product_id: 'PRD-CHK-04', product_name: 'Antibiotic-Free Chicken Breast Boneless', weight_label: '500g', price: 235, qty: 1, aisle_location: 'Zone C / Aisle 04 / Bin 12', is_picked: 0 }
      ]
    },
    {
      id: 'QC-4402',
      customer_name: 'Dr. Anjali Rao',
      customer_phone: '919845012345',
      delivery_address: 'Villa 8, Palm Boulevard, Koramangala 4th Block',
      pincode: '560034',
      subtotal: 674,
      delivery_fee: 0,
      handling_fee: 4,
      total_amount: 678,
      payment_method: 'cashfree_upi',
      payment_status: 'PAID',
      order_status: 'PICKING',
      rider_id: null,
      picked_items_count: 0,
      total_items_count: 3,
      estimated_delivery_mins: 12,
      upi_qr_string: 'upi://pay?pa=freshco.express@icici&pn=FLASH+GROCERY&am=678&cu=INR&tn=QC-4402',
      bag_temp_c: 3.9,
      pick_deadline_ms: now + 165 * 1000, // 2m 45s remaining
      created_at: new Date(now - 15 * 1000).toISOString(),
      items: [
        { id: 'ITM-04', order_id: 'QC-4402', product_id: 'PRD-COC-03', product_name: 'Tender Coconut Water 500ml', weight_label: '500ml', price: 65, qty: 1, aisle_location: 'Zone B / Bev-Chiller / Bin 08', is_picked: 0 },
        { id: 'ITM-05', order_id: 'QC-4402', product_id: 'PRD-MNG-06', product_name: 'Alphonso Mangoes Grade A (1kg)', weight_label: '1kg', price: 469, qty: 1, aisle_location: 'Zone A / Tropical-Fruit / Bin 09', is_picked: 0 },
        { id: 'ITM-06', order_id: 'QC-4402', product_id: 'PRD-SOU-05', product_name: 'Sourdough Brioche Loaf 400g', weight_label: '400g', price: 140, qty: 1, aisle_location: 'Zone D / Bakery-Rack / Shelf 01', is_picked: 0 }
      ]
    },
    {
      id: 'QC-4399',
      customer_name: 'Sreekumar Nair',
      customer_phone: '919847011223',
      delivery_address: 'Apt 2B, Skyline Ivy, Panampilly Nagar',
      pincode: '682036',
      subtotal: 744,
      delivery_fee: 0,
      handling_fee: 4,
      total_amount: 748,
      payment_method: 'cashfree_upi',
      payment_status: 'PAID',
      order_status: 'OUT_FOR_DELIVERY',
      rider_id: 'RDR-01',
      picked_items_count: 3,
      total_items_count: 3,
      estimated_delivery_mins: 6,
      upi_qr_string: 'upi://pay?pa=freshco.express@icici&pn=FLASH+GROCERY&am=748&cu=INR&tn=QC-4399',
      bag_temp_c: 3.8,
      pick_deadline_ms: now - 300 * 1000,
      created_at: new Date(now - 480 * 1000).toISOString(),
      items: [
        { id: 'ITM-07', order_id: 'QC-4399', product_id: 'PRD-AVO-01', product_name: 'Farm Fresh Hass Avocados (Pack of 2)', weight_label: 'Pack of 2', price: 189, qty: 1, aisle_location: 'Zone A / Fresh-Produce / Bin 04', is_picked: 1 },
        { id: 'ITM-08', order_id: 'QC-4399', product_id: 'PRD-CHK-04', product_name: 'Antibiotic-Free Chicken Breast Boneless', weight_label: '1kg', price: 449, qty: 1, aisle_location: 'Zone C / Aisle 04 / Bin 12', is_picked: 1 },
        { id: 'ITM-09', order_id: 'QC-4399', product_id: 'PRD-COC-03', product_name: 'Tender Coconut Water 500ml', weight_label: 'Twin Pack (500ml x 2)', price: 120, qty: 1, aisle_location: 'Zone B / Bev-Chiller / Bin 08', is_picked: 1 }
      ]
    }
  ];
}

function getOrdersInternal() {
  if (!memoryOrders) {
    memoryOrders = initializeOrders();
  }
  return memoryOrders;
}

// Cold Chain Temperature Loggers
let memoryColdChainLogs = [
  { id: 'LOG-01', zone: 'Deep Freeze Meat Vault', current_temp: -18.4, threshold_max: -15.0, status: 'NORMAL', location: 'Zone C Aisle 04', updated_at: '2026-11-01 09:20:00' },
  { id: 'LOG-02', zone: 'Dairy & Protein Chiller', current_temp: 3.6, threshold_max: 5.0, status: 'NORMAL', location: 'Zone B Shelf 02', updated_at: '2026-11-01 09:22:00' },
  { id: 'LOG-03', zone: 'Fresh Produce Humid Chiller', current_temp: 6.8, threshold_max: 8.0, status: 'NORMAL', location: 'Zone A Bin 04', updated_at: '2026-11-01 09:24:00' },
  { id: 'LOG-04', zone: 'Insulated Rider Pod #01 (Shafeeq)', current_temp: 3.8, threshold_max: 6.0, status: 'NORMAL', location: 'Ather EV KA-03-EM-9921', updated_at: '2026-11-01 09:25:00' }
];

/**
 * Lazy request-time catalog loader.
 * Supports optional category slug filtering.
 */
export function getCatalog(categorySlug = null) {
  const categories = memoryCategories.map(c => ({ ...c }));
  let products = memoryProducts.map(p => {
    const defaultWeight = p.weights.find(w => w.is_default) || p.weights[0];
    return {
      ...p,
      default_weight: defaultWeight
    };
  });

  if (categorySlug) {
    const cat = categories.find(c => c.slug === categorySlug || c.id === categorySlug);
    if (cat) {
      products = products.filter(p => p.category_id === cat.id);
    }
  }

  return {
    categories,
    products,
    totalProducts: products.length
  };
}

/**
 * Single product getter by ID or Slug.
 */
export function getProductById(idOrSlug) {
  const p = memoryProducts.find(item => item.id === idOrSlug || item.slug === idOrSlug);
  if (!p) return null;
  const defaultWeight = p.weights.find(w => w.is_default) || p.weights[0];
  return {
    ...p,
    default_weight: defaultWeight
  };
}

/**
 * Check delivery feasibility and ETA for a pincode.
 */
export function checkPincode(pincode) {
  const cleanPin = String(pincode || '').trim().replace(/[^0-9]/g, '');
  const entry = memoryPincodes.find(p => p.pincode === cleanPin && p.is_serviceable);

  if (entry) {
    return {
      success: true,
      serviceable: true,
      pincode: entry.pincode,
      areaName: entry.area_name,
      city: entry.city,
      etaMins: entry.eta_mins,
      deliveryFee: entry.delivery_fee,
      minFreeDelivery: entry.min_free_delivery,
      darkStore: entry.dark_store_id === 'DS-COK-01' ? 'Panampilly Central DarkStore' : 'Indiranagar Hub #04',
      badge: `⚡ Delivery in ${entry.eta_mins} mins to ${entry.pincode} (${entry.area_name})`
    };
  }

  return {
    success: false,
    serviceable: false,
    pincode: cleanPin,
    message: `Pincode ${cleanPin || 'entered'} is currently outside our 10-15 minute delivery zone. We currently serve Bangalore (560038, 560008, 560034, 560001) and Kochi (682036, 682030, 682001).`,
    supportedPincodes: memoryPincodes.map(p => ({ pincode: p.pincode, area: p.area_name, eta: `${p.eta_mins}m` }))
  };
}

/**
 * Get active dark-store picking queue with dynamic countdown timers.
 */
export function getPickingQueue() {
  const now = Date.now();
  const orders = getOrdersInternal();

  const enrichedQueue = orders.map(ord => {
    const remainingMs = Math.max(0, (ord.pick_deadline_ms || now) - now);
    const remainingSeconds = Math.floor(remainingMs / 1000);
    const mins = Math.floor(remainingSeconds / 60);
    const secs = remainingSeconds % 60;
    const remainingFormatted = `${mins}:${secs < 10 ? '0' : ''}${secs}`;

    let urgency = 'normal'; // > 120s
    if (remainingSeconds <= 0) {
      urgency = 'overdue';
    } else if (remainingSeconds <= 60) {
      urgency = 'critical'; // < 1 min, pulsing red
    } else if (remainingSeconds <= 120) {
      urgency = 'warning'; // 1-2 mins, amber
    }

    return {
      ...ord,
      remaining_seconds: remainingSeconds,
      remaining_formatted: remainingFormatted,
      urgency_level: urgency,
      all_items_picked: ord.picked_items_count >= ord.total_items_count
    };
  });

  const activePicking = enrichedQueue.filter(o => o.order_status === 'PICKING').length;
  const packedAwaitingRider = enrichedQueue.filter(o => o.order_status === 'PACKED').length;
  const inTransit = enrichedQueue.filter(o => o.order_status === 'OUT_FOR_DELIVERY').length;

  return {
    queue: enrichedQueue,
    stats: {
      activePicking,
      packedAwaitingRider,
      inTransit,
      totalOrders: enrichedQueue.length,
      avgPickVelocityMins: 1.8,
      targetPickVelocityMins: 3.0,
      slaComplianceRate: '98.4%'
    }
  };
}

/**
 * Pick / Unpick single item in an order.
 */
export function pickOrderItem(orderId, itemId, isPicked = true) {
  const orders = getOrdersInternal();
  const ord = orders.find(o => o.id === orderId);
  if (!ord) return null;

  const item = ord.items.find(i => i.id === itemId || i.product_id === itemId);
  if (!item) return null;

  item.is_picked = isPicked ? 1 : 0;
  ord.picked_items_count = ord.items.filter(i => i.is_picked === 1).length;

  return {
    order: ord,
    item,
    allItemsPicked: ord.picked_items_count >= ord.total_items_count
  };
}

/**
 * Mark entire order as packed & ready for rider pickup.
 */
export function markOrderPacked(orderId) {
  const orders = getOrdersInternal();
  const ord = orders.find(o => o.id === orderId);
  if (!ord) return null;

  // Auto-check all items if not already checked
  ord.items.forEach(i => { i.is_picked = 1; });
  ord.picked_items_count = ord.total_items_count;
  ord.order_status = 'PACKED';
  ord.updated_at = new Date(Date.now()).toISOString();

  return ord;
}

/**
 * Get Rider Fleet with real-time telemetry.
 */
export function getRiderFleet() {
  return memoryRiders.map(r => ({ ...r }));
}

/**
 * Assign Rider to Order and start transit.
 */
export function assignRiderToOrder(orderId, riderId) {
  const orders = getOrdersInternal();
  const ord = orders.find(o => o.id === orderId);
  if (!ord) return { success: false, error: 'Order not found' };

  const rider = memoryRiders.find(r => r.id === riderId);
  if (!rider) return { success: false, error: 'Rider not found' };

  ord.rider_id = rider.id;
  ord.order_status = 'OUT_FOR_DELIVERY';
  ord.updated_at = new Date(Date.now()).toISOString();

  rider.status = 'IN_TRANSIT';
  rider.speed_kmh = 32;

  // WhatsApp dispatch message link for rider
  const waMsg = encodeURIComponent(
    `🛵 FLASH GROCERY DISPATCH: Order ${ord.id} assigned to ${rider.name}.\n` +
    `Customer: ${ord.customer_name} (${ord.customer_phone})\n` +
    `Address: ${ord.delivery_address} (${ord.pincode})\n` +
    `Bag Cold-Chain: ${ord.bag_temp_c}°C\n` +
    `ETA: ${ord.estimated_delivery_mins} mins. Drive safe!`
  );
  const riderWhatsAppUrl = `https://wa.me/${rider.phone}?text=${waMsg}`;

  return {
    success: true,
    order: ord,
    rider,
    riderWhatsAppUrl
  };
}

/**
 * Process Express Checkout with Simulated Cashfree UPI QR & 3-Min Picking Ticket.
 */
export function processCheckout(payload = {}) {
  const now = Date.now();
  const {
    items = [],
    customer = {},
    pincode = '560038'
  } = payload;

  if (!Array.isArray(items) || items.length === 0) {
    return {
      status: 400,
      error: 'EMPTY_CART',
      message: 'Your flash delivery basket is empty.'
    };
  }

  const pinCheck = checkPincode(pincode);
  const deliveryPincode = pinCheck.serviceable ? pinCheck.pincode : '560038';
  const etaMins = pinCheck.serviceable ? pinCheck.etaMins : 12;

  let subtotal = 0;
  const verifiedOrderItems = [];

  for (let idx = 0; idx < items.length; idx++) {
    const it = items[idx];
    const prod = memoryProducts.find(p => p.id === (it.productId || it.id) || p.slug === (it.productId || it.id));
    if (!prod) {
      return {
        status: 400,
        error: 'INVALID_PRODUCT',
        message: `Product ${it.productId || it.id} not found in catalog.`
      };
    }

    const weightOption = prod.weights.find(w => w.weight_label === it.weightLabel || w.id === it.weightId) || prod.weights[0];
    const qty = Math.max(1, Number(it.qty) || 1);
    const linePrice = weightOption.price * qty;
    subtotal += linePrice;

    verifiedOrderItems.push({
      id: `ITM-NEW-${idx + 1}-${Math.floor(Math.random() * 1000)}`,
      product_id: prod.id,
      product_name: prod.name,
      weight_label: weightOption.weight_label,
      price: weightOption.price,
      qty,
      aisle_location: prod.aisle_location,
      is_picked: 0
    });
  }

  const minFreeDelivery = pinCheck.serviceable ? pinCheck.minFreeDelivery : 199;
  const deliveryFee = subtotal >= minFreeDelivery ? 0 : 25;
  const handlingFee = 4;
  const totalAmount = subtotal + deliveryFee + handlingFee;

  const orderId = `QC-${Math.floor(1000 + Math.random() * 9000)}`;
  const upiQrString = `upi://pay?pa=freshco.express@icici&pn=FLASH+GROCERY&am=${totalAmount}&cu=INR&tn=${orderId}`;

  const customerName = (customer.name || 'Quick-Commerce Customer').trim();
  const customerPhone = (customer.phone || '919847011223').trim();
  const customerAddress = (customer.address || `Flat 101, Palm Heights, ${pinCheck.areaName || 'Indiranagar'}`).trim();

  const newOrder = {
    id: orderId,
    customer_name: customerName,
    customer_phone: customerPhone,
    delivery_address: customerAddress,
    pincode: deliveryPincode,
    subtotal,
    delivery_fee: deliveryFee,
    handling_fee: handlingFee,
    total_amount: totalAmount,
    payment_method: 'cashfree_upi',
    payment_status: 'PAID',
    order_status: 'PICKING',
    rider_id: null,
    picked_items_count: 0,
    total_items_count: verifiedOrderItems.length,
    estimated_delivery_mins: etaMins,
    upi_qr_string: upiQrString,
    bag_temp_c: 3.8,
    pick_deadline_ms: now + 180 * 1000, // 3-minute pick SLA
    created_at: new Date(now).toISOString(),
    items: verifiedOrderItems.map(item => ({ ...item, order_id: orderId }))
  };

  const orders = getOrdersInternal();
  orders.unshift(newOrder);
  if (orders.length > 50) orders.pop();

  return {
    status: 200,
    success: true,
    orderId,
    customer: {
      name: customerName,
      phone: customerPhone,
      address: customerAddress,
      pincode: deliveryPincode
    },
    items: verifiedOrderItems,
    pricing: {
      subtotal,
      deliveryFee,
      handlingFee,
      totalAmount,
      isFreeDelivery: deliveryFee === 0,
      freeDeliveryThreshold: minFreeDelivery
    },
    cashfreeSimulation: {
      gateway: 'Cashfree Hyperlocal Express UPI v2',
      status: 'PAID',
      transactionId: `CF_HYPER_${now}`,
      upiQrString,
      upiIntentUrl: upiQrString
    },
    tracking: {
      orderId,
      estimatedDeliveryMins: etaMins,
      pickDeadlineSeconds: 180,
      hub: pinCheck.darkStore || 'Indiranagar Hub #04',
      bagTempC: 3.8
    },
    order: newOrder
  };
}

/**
 * Cold-chain temperature telemetry getter.
 */
export function getColdChainReadings() {
  const now = Date.now();
  return {
    readings: memoryColdChainLogs.map(l => ({ ...l, last_check: new Date(now).toISOString() })),
    overallStatus: 'OPTIMAL_COLD_CHAIN',
    refrigerationUnits: 3,
    activeInsulatedBags: 4,
    alertsCount: 0
  };
}

/**
 * Log a new manual or sensor cold-chain probe reading.
 */
export function logColdChainReading(probe = {}) {
  const now = Date.now();
  const { zone = 'Manual Probe', temp = 3.8, location = 'Hub Station' } = probe;
  const numTemp = Number(temp);

  let status = 'NORMAL';
  if (numTemp > 6.0 && (zone.includes('Dairy') || zone.includes('Meat') || zone.includes('Rider'))) {
    status = 'HIGH_TEMP_ALERT';
  } else if (numTemp > -12.0 && zone.includes('Deep Freeze')) {
    status = 'FREEZER_DEFROST_ALERT';
  }

  const newLog = {
    id: `LOG-${Math.floor(100 + Math.random() * 900)}`,
    zone,
    current_temp: numTemp,
    threshold_max: zone.includes('Deep Freeze') ? -15.0 : 5.0,
    status,
    location,
    updated_at: new Date(now).toISOString().replace('T', ' ').slice(0, 19)
  };

  memoryColdChainLogs.unshift(newLog);
  if (memoryColdChainLogs.length > 20) memoryColdChainLogs.pop();

  return newLog;
}
