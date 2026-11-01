-- ============================================================================
-- D1 SQLite Seed Data: tpl-ecom-quickcommerce
-- Movement D: Zero-Hero 3-Pane Hyperlocal App Shell (Blinkit / Zepto / Instacart)
-- Grocery, Meat, Dairy & Cloud Kitchen with Warehouse Rack/Bin Coordinates
-- ============================================================================

-- 1. Dark Stores
INSERT OR REPLACE INTO dark_stores (id, code, name, city, address, lat, lng, cold_chain_capacity, is_active) VALUES
('DS-BLR-01', 'BLR-INDIRA-04', 'Indiranagar Hub #04', 'Bengaluru', '402, 100 Feet Rd, HAL 2nd Stage, Indiranagar, Bengaluru 560038', 12.9716, 77.6412, 180, 1),
('DS-COK-01', 'COK-PANAM-01', 'Panampilly Central DarkStore', 'Kochi', 'Main Ave, Panampilly Nagar, Kochi 682036', 9.9674, 76.2942, 120, 1);

-- 2. Categories
INSERT OR REPLACE INTO categories (id, slug, name, icon, sort_order) VALUES
('cat-produce', 'fresh-produce', 'Fresh Produce', '🥑', 1),
('cat-dairy', 'dairy-breakfast', 'Dairy & Breakfast', '🥛', 2),
('cat-meat', 'meat-seafood', 'Meat & Seafood', '🍗', 3),
('cat-beverages', 'cold-beverages', 'Cold Beverages', '🥥', 4),
('cat-bakery', 'bakery-artisan', 'Bakery & Artisan', '🍞', 5),
('cat-fruits', 'seasonal-fruits', 'Seasonal Fruits', '🥭', 6);

-- 3. Master Catalog Products
INSERT OR REPLACE INTO products (id, slug, name, category_id, description, image_url, storage_type, chill_temp_c, dark_store_id, aisle_location, is_active) VALUES
('PRD-AVO-01', 'farm-fresh-hass-avocados', 'Farm Fresh Hass Avocados (Pack of 2)', 'cat-produce', 'Imported Haas avocados, perfectly ripened and creamy. Rich in heart-healthy monounsaturated fatty acids.', 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80', 'chilled', 7.5, 'DS-BLR-01', 'Zone A / Fresh-Produce / Bin 04', 1),
('PRD-MLK-02', 'organic-cold-pressed-a2-cow-milk-1l', 'Organic Cold-Pressed A2 Cow Milk 1L', 'cat-dairy', 'Farm-bottled single-origin Gir cow whole milk. Chilled immediately at 3.6°C to preserve enzymatic vitality.', 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80', 'chilled', 3.6, 'DS-BLR-01', 'Zone B / Dairy-Chiller / Shelf 02', 1),
('PRD-COC-03', 'tender-coconut-water-500ml', 'Tender Coconut Water 500ml', 'cat-beverages', '100% natural Pollachi tender coconut water, cold-bio-filtered with zero added sugar and natural electrolytes.', 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80', 'chilled', 4.0, 'DS-BLR-01', 'Zone B / Bev-Chiller / Bin 08', 1),
('PRD-CHK-04', 'antibiotic-free-chicken-breast-boneless', 'Antibiotic-Free Chicken Breast Boneless (500g / 1kg)', 'cat-meat', 'Pasture-raised poultry breast fillet, 100% antibiotic & hormone free. Blast-chilled and vacuum sealed.', 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=600&q=80', 'frozen', -18.0, 'DS-BLR-01', 'Zone C / Aisle 04 / Bin 12', 1),
('PRD-SOU-05', 'sourdough-brioche-loaf-400g', 'Sourdough Brioche Loaf 400g', 'cat-bakery', 'Slow-fermented wild yeast brioche enriched with French grass-fed butter. Baked fresh daily at 4:00 AM.', 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80', 'ambient', 22.0, 'DS-BLR-01', 'Zone D / Bakery-Rack / Shelf 01', 1),
('PRD-MNG-06', 'alphonso-mangoes-grade-a-1kg', 'Alphonso Mangoes Grade A (1kg)', 'cat-fruits', 'Naturally tree-ripened Devgad Alphonso mangoes. Golden saffron pulp with intense aromatic floral bouquet.', 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=600&q=80', 'ambient', 18.0, 'DS-BLR-01', 'Zone A / Tropical-Fruit / Bin 09', 1),
('PRD-FSH-07', 'wild-caught-neymeen-kingfish-steaks', 'Wild-Caught Neymeen King Fish Steaks (500g)', 'cat-meat', 'Arabian sea catch-of-the-day king fish steaks, cleaned and cut. Maintained at -2°C cold-chain.', 'https://images.unsplash.com/photo-1534948216015-843149f72be3?auto=format&fit=crop&w=600&q=80', 'frozen', -18.0, 'DS-BLR-01', 'Zone C / Meat-Freezer / Bin 05', 1),
('PRD-EGG-08', 'farm-fresh-country-eggs-pack-of-6', 'Organic Free-Range Country Eggs (Pack of 6)', 'cat-dairy', 'Brown shell eggs from grain-fed hens. Golden yellow high-protein yolks rich in Omega-3.', 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=600&q=80', 'chilled', 8.0, 'DS-BLR-01', 'Zone B / Dairy-Chiller / Shelf 04', 1),
('PRD-ORG-09', 'cold-pressed-valencia-orange-juice-500ml', 'Cold-Pressed Valencia Orange Juice 500ml', 'cat-beverages', 'High-pressure processed (HPP) raw Valencia oranges. 100% juice, no heat treatment, no preservatives.', 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80', 'chilled', 3.8, 'DS-BLR-01', 'Zone B / Bev-Chiller / Bin 03', 1),
('PRD-CRO-10', 'french-butter-croissants-pack-of-2', 'Artisan Butter Croissants (Pack of 2)', 'cat-bakery', 'Flaky, layered French laminated pastry baked with 84% churned Normandy butter.', 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80', 'ambient', 22.0, 'DS-BLR-01', 'Zone D / Bakery-Rack / Shelf 03', 1);

-- 4. Multi-Weight / SKU Packaging Variants
INSERT OR REPLACE INTO product_weights (id, product_id, weight_label, price, retail_price, stock_count, is_default) VALUES
('WGT-AVO-1', 'PRD-AVO-01', 'Pack of 2', 189, 240, 34, 1),
('WGT-AVO-2', 'PRD-AVO-01', 'Pack of 4', 359, 460, 18, 0),
('WGT-MLK-1', 'PRD-MLK-02', '500ml', 45, 55, 60, 0),
('WGT-MLK-2', 'PRD-MLK-02', '1L', 84, 100, 85, 1),
('WGT-MLK-3', 'PRD-MLK-02', '2L Family Pack', 160, 195, 24, 0),
('WGT-COC-1', 'PRD-COC-03', '250ml', 40, 50, 42, 0),
('WGT-COC-2', 'PRD-COC-03', '500ml', 65, 80, 50, 1),
('WGT-COC-3', 'PRD-COC-03', 'Twin Pack (500ml x 2)', 120, 150, 20, 0),
('WGT-CHK-1', 'PRD-CHK-04', '250g', 125, 155, 30, 0),
('WGT-CHK-2', 'PRD-CHK-04', '500g', 235, 290, 45, 1),
('WGT-CHK-3', 'PRD-CHK-04', '1kg', 449, 550, 22, 0),
('WGT-SOU-1', 'PRD-SOU-05', '200g Half', 79, 99, 15, 0),
('WGT-SOU-2', 'PRD-SOU-05', '400g', 140, 175, 28, 1),
('WGT-SOU-3', 'PRD-SOU-05', '800g Twin', 260, 330, 12, 0),
('WGT-MNG-1', 'PRD-MNG-06', '500g (2 pcs)', 249, 320, 25, 0),
('WGT-MNG-2', 'PRD-MNG-06', '1kg', 469, 599, 38, 1),
('WGT-MNG-3', 'PRD-MNG-06', '2kg Crate', 899, 1150, 10, 0),
('WGT-FSH-1', 'PRD-FSH-07', '500g', 380, 480, 18, 1),
('WGT-FSH-2', 'PRD-FSH-07', '1kg', 740, 920, 12, 0),
('WGT-EGG-1', 'PRD-EGG-08', 'Pack of 6', 82, 105, 40, 1),
('WGT-EGG-2', 'PRD-EGG-08', 'Pack of 12', 155, 200, 25, 0),
('WGT-ORG-1', 'PRD-ORG-09', '300ml', 89, 115, 30, 0),
('WGT-ORG-2', 'PRD-ORG-09', '500ml', 139, 179, 35, 1),
('WGT-CRO-1', 'PRD-CRO-10', 'Pack of 2', 160, 210, 20, 1),
('WGT-CRO-2', 'PRD-CRO-10', 'Pack of 4', 299, 390, 14, 0);

-- 5. Delivery Riders Fleet
INSERT OR REPLACE INTO riders (id, name, phone, vehicle_no, vehicle_type, photo_url, battery_pct, current_lat, current_lng, status, bag_temp_c, speed_kmh, rating) VALUES
('RDR-01', 'Shafeeq K.', '919847011223', 'KA-03-EM-9921', 'Ather 450X EV', 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80', 92, 12.9734, 77.6435, 'IN_TRANSIT', 3.8, 32, 4.96),
('RDR-02', 'Sunil Kumar', '919880123456', 'KA-04-EV-4412', 'Ola S1 Pro EV', 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&q=80', 78, 12.9702, 77.6389, 'IDLE', 4.1, 0, 4.91),
('RDR-03', 'Arshad V.', '919895033445', 'KL-07-EQ-8819', 'TVS iQube EV', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80', 85, 9.9680, 76.2950, 'IN_TRANSIT', 3.5, 30, 4.88),
('RDR-04', 'Vignesh R.', '919740112288', 'KA-05-EX-2290', 'Bajaj Chetak EV', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80', 64, 12.9690, 77.6420, 'IDLE', 4.0, 0, 4.95);

-- 6. Hyperlocal Serviceable Pincodes
INSERT OR REPLACE INTO pincodes (pincode, area_name, city, eta_mins, delivery_fee, min_free_delivery, is_serviceable, dark_store_id) VALUES
('560038', 'Indiranagar 100ft Rd', 'Bengaluru', 11, 25, 199, 1, 'DS-BLR-01'),
('560008', 'Ulsoor / Halasuru', 'Bengaluru', 13, 25, 199, 1, 'DS-BLR-01'),
('560034', 'Koramangala 4th Block', 'Bengaluru', 12, 25, 199, 1, 'DS-BLR-01'),
('560001', 'MG Road / Shivaji Nagar', 'Bengaluru', 15, 30, 249, 1, 'DS-BLR-01'),
('682036', 'Panampilly Nagar', 'Kochi', 12, 25, 199, 1, 'DS-COK-01'),
('682001', 'Fort Kochi Heritage', 'Kochi', 16, 35, 299, 1, 'DS-COK-01'),
('682030', 'Kakkanad InfoPark Zone', 'Kochi', 14, 25, 199, 1, 'DS-COK-01');

-- 7. Orders & Picking Tickets
INSERT OR REPLACE INTO orders (id, customer_name, customer_phone, delivery_address, pincode, subtotal, delivery_fee, handling_fee, total_amount, payment_method, payment_status, order_status, rider_id, picked_items_count, total_items_count, estimated_delivery_mins, upi_qr_string, bag_temp_c, pick_deadline, created_at) VALUES
('QC-4401', 'Rohan Mehta', '919820334455', 'Flat 402, Green Glen Apts, 12th Main, Indiranagar', '560038', 508, 0, 4, 512, 'cashfree_upi', 'PAID', 'PICKING', NULL, 1, 3, 11, 'upi://pay?pa=freshco.express@icici&pn=FLASH+GROCERY&am=512&cu=INR&tn=QC-4401', 3.8, datetime('now', '+3 minutes'), datetime('now', '-1 minute')),
('QC-4402', 'Dr. Anjali Rao', '919845012345', 'Villa 8, Palm Boulevard, Koramangala 4th Block', '560034', 674, 0, 4, 678, 'cashfree_upi', 'PAID', 'PICKING', NULL, 0, 3, 12, 'upi://pay?pa=freshco.express@icici&pn=FLASH+GROCERY&am=678&cu=INR&tn=QC-4402', 3.9, datetime('now', '+2 minutes'), datetime('now', '-2 minutes')),
('QC-4399', 'Sreekumar Nair', '919847011223', 'Apt 2B, Skyline Ivy, Panampilly Nagar', '682036', 744, 0, 4, 748, 'cashfree_upi', 'PAID', 'OUT_FOR_DELIVERY', 'RDR-01', 3, 3, 8, 'upi://pay?pa=freshco.express@icici&pn=FLASH+GROCERY&am=748&cu=INR&tn=QC-4399', 3.8, datetime('now', '-8 minutes'), datetime('now', '-9 minutes'));

-- 8. Order Items with Physical Picking Bin Locations
INSERT OR REPLACE INTO order_items (id, order_id, product_id, product_name, weight_label, price, qty, aisle_location, is_picked) VALUES
('ITM-01', 'QC-4401', 'PRD-AVO-01', 'Farm Fresh Hass Avocados (Pack of 2)', 'Pack of 2', 189, 1, 'Zone A / Fresh-Produce / Bin 04', 1),
('ITM-02', 'QC-4401', 'PRD-MLK-02', 'Organic Cold-Pressed A2 Cow Milk 1L', '1L', 84, 1, 'Zone B / Dairy-Chiller / Shelf 02', 0),
('ITM-03', 'QC-4401', 'PRD-CHK-04', 'Antibiotic-Free Chicken Breast Boneless', '500g', 235, 1, 'Zone C / Aisle 04 / Bin 12', 0),
('ITM-04', 'QC-4402', 'PRD-COC-03', 'Tender Coconut Water 500ml', '500ml', 65, 1, 'Zone B / Bev-Chiller / Bin 08', 0),
('ITM-05', 'QC-4402', 'PRD-MNG-06', 'Alphonso Mangoes Grade A (1kg)', '1kg', 469, 1, 'Zone A / Tropical-Fruit / Bin 09', 0),
('ITM-06', 'QC-4402', 'PRD-SOU-05', 'Sourdough Brioche Loaf 400g', '400g', 140, 1, 'Zone D / Bakery-Rack / Shelf 01', 0),
('ITM-07', 'QC-4399', 'PRD-AVO-01', 'Farm Fresh Hass Avocados (Pack of 2)', 'Pack of 2', 189, 1, 'Zone A / Fresh-Produce / Bin 04', 1),
('ITM-08', 'QC-4399', 'PRD-CHK-04', 'Antibiotic-Free Chicken Breast Boneless', '1kg', 449, 1, 'Zone C / Aisle 04 / Bin 12', 1),
('ITM-09', 'QC-4399', 'PRD-COC-03', 'Tender Coconut Water 500ml', 'Twin Pack (500ml x 2)', 120, 1, 'Zone B / Bev-Chiller / Bin 08', 1);
