<?php
require __DIR__ . '/../includes/bootstrap.php';
header('Content-Type: application/json; charset=utf-8');

if (!is_post() || !csrf_verify()) { http_response_code(400); echo json_encode(['ok'=>false,'error'=>'Bad request']); exit; }

$value = trim($_POST['value'] ?? '');

// TODO: Gerçek iş mantığını buraya ekleyin (DB/SMS vs).
$result = ['ok'=>true, 'page'=>'yeni-gundem', 'value'=>$value];

echo json_encode($result);
