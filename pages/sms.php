<?php $title='Sms'; include __DIR__.'/../includes/header.php'; ?>
<div class="card">
  <h2>Sms</h2>
  <form method="post" action="/api/sms">
    <?= csrf_field(); ?>
    <label>Örnek Alan</label><br/>
    <input name="value" placeholder="örnek değer">
    <button type="submit">Gönder</button>
  </form>
</div>
<?php include __DIR__.'/../includes/footer.php'; ?>
