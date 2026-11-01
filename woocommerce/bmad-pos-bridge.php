<?php
/**
 * Plugin Name: FRESHCO 25-MIN EXPRESS — WooCommerce Blocksy POS & Urgency Bridge
 * Description: Syncs Cloudflare Edge tokens and in-store POS stock matrix with WooCommerce.
 * Version: 1.0.0
 */
if (!defined('ABSPATH')) exit;
add_action('wp_head', function() {
  echo '<style>:root { --color-primary: #16A34A; --color-dark: #0F172A; }</style>';
});
