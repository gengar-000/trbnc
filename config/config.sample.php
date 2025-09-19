<?php
return [
  'base_url' => 'https://example.com',
  'db' => [
    'host' => '127.0.0.1',
    'port' => 3306,
    'name' => 'trbnc',
    'user' => 'dbuser',
    'pass' => 'dbpass',
    'charset' => 'utf8mb4'
  ],
  'auth' => [
    'username' => 'admin',
    'password_hash' => '$2y$10$WOO5i1nkkAExU2C16A1KSe8CcznpOQdT1F5WTw7YF0jWwMIs2Qb7y' /* changeme */
  ],
  'sms' => [
    'provider' => 'dummy',
    'api_key' => 'YOUR_SMS_API_KEY'
  ],
  'csrf' => [ 'token_ttl' => 7200 ],
];
