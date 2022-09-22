<?php
require('Roma.php');

header("Access-Control-Allow-Origin: *");

$b = new Roma;
if ($_GET["number"]) {
    $number = $_GET['number'];
    $system = $_GET['system'];
    echo $b->toRome($number, $system);
}
if ($_GET["romanic"]) {
    $romanic = $_GET["romanic"];
    echo $b->toNum($romanic);
}
