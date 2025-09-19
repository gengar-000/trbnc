<?php
function db(): PDO {
  static $pdo=null; if($pdo) return $pdo;
  global $CONFIG; $c=$CONFIG['db'];
  $dsn="mysql:host={$c['host']};port={$c['port']};dbname={$c['name']};charset=".($c['charset']??'utf8mb4');
  $pdo=new PDO($dsn,$c['user'],$c['pass'],[PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION,PDO::ATTR_DEFAULT_FETCH_MODE=>PDO::FETCH_ASSOC,PDO::ATTR_EMULATE_PREPARES=>false]);
  return $pdo;
}
