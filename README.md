# TRBNC PHP Admin Starter (Plesk + Git)

Bu paket, PHP tabanlı küçük bir admin paneli için **Plesk** üzerinde barındırmaya
ve **GitHub** ile versiyonlamaya hazır bir iskelet sağlar.

## Hızlı Kurulum
1. `config/config.sample.php` dosyasını `config/config.php` adıyla kopyalayın ve doldurun.
2. Plesk → **Domains → Git** ile bu repoyu `httpdocs/` dizinine deploy edin.
3. PHP 8.x seçin. `.htaccess` için Apache katmanı açık olmalı.
4. Admin girişi: kullanıcı `admin`, şifre `changeme` (örnek). Canlıda değiştirin.

## Yapı
/assets, /config, /includes, /pages, /pages/admin, /api, /storage, index.php, .htaccess

## Güvenlik
- CSRF koruması, HTTP-only + SameSite=Strict çerez, temel güvenlik başlıkları.
- `config/config.php` git'e dahil değildir.
