<?php
function csrf_token(): string {
  if (empty($_SESSION['csrf']) || time() > ($_SESSION['csrf_exp'] ?? 0)) {
    $_SESSION['csrf'] = bin2hex(random_bytes(32));
    $_SESSION['csrf_exp'] = time() + 7200;
  }
  return $_SESSION['csrf'];
}
function csrf_field(): string { return '<input type="hidden" name="csrf_token" value="'.csrf_token().'">'; }
function csrf_verify(): bool { $t=$_POST['csrf_token'] ?? $_SERVER['HTTP_X_CSRF_TOKEN'] ?? ''; return is_string($t)&&$t!==''&&hash_equals($_SESSION['csrf']??'', $t); }
