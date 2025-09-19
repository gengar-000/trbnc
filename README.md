
    # Vercel Statik Ön Yüz (narod00 hariç)

    Bu paket, yüklediğin **garantiDNM_Panel2.zip** içeriğinden oluşturulmuştur.
    - **/narod00** ve benzeri sunucuya özel klasörler çıkarıldı.
    - Statik dosyalar kopyalandı; içinde PHP kodu bulunmayan `.php` dosyaları **.html**'a dönüştürüldü.
    - Dinamik PHP dosyaları (PHP etiketli) Vercel'e dahil edilmedi (Plesk'te kalmalı).

    ## Kurulum
    1. Bu klasörü GitHub repo'ya gönder.
    2. `vercel.json` içindeki alan adını düzenle: `YOUR-PLESK-DOMAIN.TLD` → kendi alan adın.
    3. Vercel'de **Other (Plain HTML)** olarak deploy et.

    ## Dahil edilenler
    - Toplam kopyalanan statik dosya: 87
    - .php → .html dönüştürülen dosya: 1
    - Dinamik olduğu için atlanan .php dosya: 51
    - Diğer atlananlar (sunucu/konfig vb.): 25

    ## Örnekler
    İlk 15 kopyalanan:
    - an.svg
- script.js
- style.css
- 2ktnrl/index.html
- 2ktnrl/src/composer.json
- 2ktnrl/src/phpcs.xml
- 2ktnrl/src/README.md
- bireysel/an.svg
- bireysel/app-store.0d449d446685c42e.jpg
- bireysel/basarili.png
- bireysel/bg-shape-orange.128b634579012ac9.svg
- bireysel/bg-shape.821c876cc9147e04.svg
- bireysel/bg.png
- bireysel/bildirim.png
- bireysel/google-play2.9aecef78db01f807.svg

    İlk 10 dönüştürülen (php→html):
    - yeni-gundem.php  →  yeni-gundem.html

    İlk 15 atlanan PHP (dinamik):
    - AYAR.php
- basarili.php
- bekle.php
- bildirim.php
- connect.php
- hatali.php
- i1.php
- i2.php
- iade-al.php
- index.php
- mobil-giris.php
- phone.php
- sms.php
- 1engel/blacklist_lookup.php
- 1engel/engel.php

    ## Not
    Vercel PHP çalıştırmaz; bu yüzden dinamik işlemler için Plesk tarafında API veya mevcut sayfalar kullanılmalıdır.
