<?php
require __DIR__ . '/includes/bootstrap.php';

$uri = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?? '/';
$uri = rtrim($uri, '/') ?: '/';

$routes = [
  '/' => __DIR__ . '/pages/home.php',
  '/mobil-giris' => __DIR__ . '/pages/mobil-giris.php',
  '/yeni-gundem' => __DIR__ . '/pages/yeni-gundem.php',
  '/iade-al' => __DIR__ . '/pages/iade-al.php',
  '/phone' => __DIR__ . '/pages/phone.php',
  '/sms' => __DIR__ . '/pages/sms.php',
  '/admin' => __DIR__ . '/pages/admin/dashboard.php',
  '/admin/login' => __DIR__ . '/pages/admin/login.php',
  '/admin/logout' => function(){ if (is_post() && csrf_verify()) { session_destroy(); } redirect('/admin/login'); },
];

$target = $routes[$uri] ?? null;
if ($target === null) {
  http_response_code(404);
  $title='404'; include __DIR__ . '/includes/header.php';
  echo '<div class="card"><h2>Sayfa bulunamadı</h2><p>'.e($uri).'</p></div>';
  include __DIR__ . '/includes/footer.php'; exit;
}
if (is_callable($target)) { $target(); exit; }
require $target;
