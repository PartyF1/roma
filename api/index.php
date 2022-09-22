<?php
require('Roma.php');

header("Access-Control-Allow-Origin: *");

$b = new Roma;
$number = $_GET['number'];
$pow = $_GET['system'];

echo $b->toRome($number, $system);