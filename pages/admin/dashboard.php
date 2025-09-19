<?php require_login(); $title='Yönetim Paneli'; include __DIR__.'/../../includes/header.php'; ?>
<div class="card">
  <h2>Dashboard</h2>
  <p>Hoş geldiniz <b><?= e($_SESSION['auth']['u'] ?? '') ?></b></p>
  <form method="post" action="/admin/logout" style="margin-top:20px">
    <?= csrf_field() ?><button type="submit">Çıkış</button>
  </form>
</div>
<?php include __DIR__.'/../../includes/footer.php'; ?>
