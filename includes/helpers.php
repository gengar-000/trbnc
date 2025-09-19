<?php
function base_url(string $path=''): string { global $CONFIG; $b=rtrim($CONFIG['base_url']??'', '/'); return $b.'/'.ltrim($path,'/'); }
function is_post(): bool { return strtoupper($_SERVER['REQUEST_METHOD']??'')==='POST'; }
function redirect(string $path){ header('Location: '.$path); exit; }
function e(string $v): string { return htmlspecialchars($v, ENT_QUOTES|ENT_SUBSTITUTE, 'UTF-8'); }
function require_login(){ if (empty($_SESSION['auth'])) redirect('/admin/login'); }
