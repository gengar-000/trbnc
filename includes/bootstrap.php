<?php
declare(strict_types=1);
session_name('trbnc_sess');
session_set_cookie_params([
  'lifetime' => 0,
  'path' => '/',
  'httponly' => true,
  'samesite' => 'Strict',
  'secure' => (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off')
]);
session_start();
date_default_timezone_set('Europe/Istanbul');
$CONFIG = require __DIR__ . '/../config/config.php';
require_once __DIR__ . '/helpers.php';
require_once __DIR__ . '/db.php';
require_once __DIR__ . '/csrf.php';
set_exception_handler(function($e){ error_log($e); http_response_code(500); echo '<h1>Hata</h1>'; });
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('Referrer-Policy: no-referrer-when-downgrade');
header('X-XSS-Protection: 1; mode=block');
