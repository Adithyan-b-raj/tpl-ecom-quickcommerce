-- ============================================================================
-- D1 SQLite Relational Schema: tpl-ecom-quickcommerce
-- Movement D: Zero-Hero 3-Pane Hyperlocal App Shell (Blinkit / Zepto / Instacart)
-- Dark Store Cold-Chain Operations, Picking Queue & Rider Dispatch
-- ============================================================================

-- Dark Store Fulfillment Hubs
CREATE TABLE IF NOT EXISTS dark_stores (
  id TEXT PRIMARY KEY,
  code TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  city TEXT NOT NULL,
  address TEXT NOT NULL,
  lat REAL NOT NULL,
  lng REAL NOT NULL,
  cold_chain_capacity INTEGER DEFAULT 120,
  is_active INTEGER DEFAULT 1,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Storefront Product Categories
CREATE TABLE IF NOT EXISTS categories (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  icon TEXT NOT NULL,
  sort_order INTEGER DEFAULT 0
);

-- Master Catalog Products
CREATE TABLE IF NOT EXISTS products (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  category_id TEXT NOT NULL REFERENCES categories(id),
  description TEXT,
  image_url TEXT,
  storage_type TEXT NOT NULL DEFAULT 'ambient', -- 'ambient', 'chilled', 'frozen'
  chill_temp_c REAL DEFAULT 4.0,
  dark_store_id TEXT REFERENCES dark_stores(id),
  aisle_location TEXT NOT NULL, -- e.g. 'Zone C / Aisle 04 / Bin 12'
  is_active INTEGER DEFAULT 1,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Multi-Weight / SKU Packaging Variants
CREATE TABLE IF NOT EXISTS product_weights (
  id TEXT PRIMARY KEY,
  product_id TEXT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  weight_label TEXT NOT NULL, -- e.g. '250g', '500g', '1kg', 'Pack of 2', '1L'
  price INTEGER NOT NULL,
  retail_price INTEGER NOT NULL,
  stock_count INTEGER DEFAULT 25,
  is_default INTEGER DEFAULT 0
);

-- Customer Orders & Dark-Store Fulfillment Tickets
CREATE TABLE IF NOT EXISTS orders (
  id TEXT PRIMARY KEY,
  customer_name TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  delivery_address TEXT NOT NULL,
  pincode TEXT NOT NULL,
  subtotal INTEGER NOT NULL,
  delivery_fee INTEGER DEFAULT 0,
  handling_fee INTEGER DEFAULT 4,
  total_amount INTEGER NOT NULL,
  payment_method TEXT DEFAULT 'cashfree_upi',
  payment_status TEXT DEFAULT 'PAID',
  order_status TEXT DEFAULT 'PICKING', -- 'PLACED', 'PICKING', 'PACKED', 'OUT_FOR_DELIVERY', 'DELIVERED'
  rider_id TEXT REFERENCES riders(id),
  picked_items_count INTEGER DEFAULT 0,
  total_items_count INTEGER DEFAULT 1,
  estimated_delivery_mins INTEGER DEFAULT 12,
  upi_qr_string TEXT,
  bag_temp_c REAL DEFAULT 3.8,
  pick_deadline DATETIME,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Line Items per Order with Warehouse Picking Bin Locations
CREATE TABLE IF NOT EXISTS order_items (
  id TEXT PRIMARY KEY,
  order_id TEXT NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  product_id TEXT NOT NULL REFERENCES products(id),
  product_name TEXT NOT NULL,
  weight_label TEXT NOT NULL,
  price INTEGER NOT NULL,
  qty INTEGER NOT NULL DEFAULT 1,
  aisle_location TEXT NOT NULL,
  is_picked INTEGER DEFAULT 0
);

-- Delivery Rider Fleet & Telemetry
CREATE TABLE IF NOT EXISTS riders (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  vehicle_no TEXT NOT NULL,
  vehicle_type TEXT DEFAULT 'Electric Scooter',
  photo_url TEXT,
  battery_pct INTEGER DEFAULT 88,
  current_lat REAL NOT NULL,
  current_lng REAL NOT NULL,
  status TEXT DEFAULT 'IDLE', -- 'IDLE', 'ASSIGNED', 'IN_TRANSIT', 'DELIVERED'
  bag_temp_c REAL DEFAULT 3.8,
  speed_kmh INTEGER DEFAULT 28,
  rating REAL DEFAULT 4.9
);

-- Hyperlocal Serviceable Pincodes (10-15 Min Delivery Zones)
CREATE TABLE IF NOT EXISTS pincodes (
  pincode TEXT PRIMARY KEY,
  area_name TEXT NOT NULL,
  city TEXT NOT NULL,
  eta_mins INTEGER DEFAULT 12,
  delivery_fee INTEGER DEFAULT 25,
  min_free_delivery INTEGER DEFAULT 199,
  is_serviceable INTEGER DEFAULT 1,
  dark_store_id TEXT REFERENCES dark_stores(id)
);
