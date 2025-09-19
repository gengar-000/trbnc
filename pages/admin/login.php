<?php
$title='Admin Giriş';
include __DIR__ . '/../../includes/header.php';
if (is_post()) {
  if (!csrf_verify()) { $err = 'Geçersiz CSRF.'; }
  else {
    $u = $_POST['username'] ?? ''; $p = $_POST['password'] ?? ''; $ok=false; global $CONFIG;
    if (($CONFIG['auth']['username'] ?? '') === $u) {
      $hash = $CONFIG['auth']['password_hash'] ?? '';
      if ($hash && password_verify($p, $hash)) $ok = true;
    }
    if ($ok) { $_SESSION['auth'] = ['u'=>$u,'t'=>time()]; redirect('/admin'); }
    $err = 'Kullanıcı adı veya şifre hatalı.';
  }
}
?>
<div class="card">
  <h2>Yönetici Girişi</h2>
  <?php if (!empty($err)): ?><div class="alert alert-err"><?= e($err) ?></div><?php endif; ?>
  <form method="post">
    <?= csrf_field() ?>
    <label>Kullanıcı Adı</label><br/><input name="username" autofocus><br/><br/>
    <label>Şifre</label><br/><input name="password" type="password"><br/><br/>
    <button type="submit">Giriş</button>
  </form>
</div>
<?php include __DIR__ . '/../../includes/footer.php'; ?>
