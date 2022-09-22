<?php

class Roma
{
   function toNum($roman)
   {
      $sum = 0;
      $tryRome = $roman;
      $count = 0;
      while ($count < strlen($tryRome)) {
         $ok = false;
         if ($tryRome[$count + 1]) {
            switch ($roman[$count] . $roman[$count + 1]) {
               case 'CM':
                  $sum += 900;
                  $count += 2;
                  $ok = true;
                  break;
               case 'CD':
                  $sum += 400;
                  $count += 2;
                  $ok = true;
                  break;
               case 'XC':
                  $sum += 90;
                  $count += 2;
                  $ok = true;
                  break;
               case 'XL':
                  $sum += 40;
                  $count += 2;
                  $ok = true;
                  break;
               case 'IX':
                  $sum += 9;
                  $count += 2;
                  $ok = true;
                  break;
               case 'IV':
                  $sum += 4;
                  $count += 2;
                  $ok = true;
                  break;
               default:
                  NULL;
            }
         }
         if (!$ok) {
            switch ($tryRome[$count]) {
               case 'M':
                  $sum += 1000;
                  $count += 1;
                  break;
               case 'D':
                  $sum += 500;
                  $count += 1;
                  break;
               case 'C':
                  $sum += 100;
                  $count += 1;
                  break;
               case 'L':
                  $sum += 50;
                  $count += 1;
                  break;
               case 'X':
                  $sum += 10;
                  $count += 1;
                  break;
               case 'V':
                  $sum += 5;
                  $count += 1;
                  break;
               case 'I':
                  $sum += 1;
                  $count += 1;
                  break;
               default:
                  NULL;
            }
         }
      }
      return ($sum);
   }

   function altNumber($number, $razrad)
   {
      $al = array("I", "X", "C", "M");
      $al5 = array("V", "L", "D",);
      $one = $al[$razrad - 1];
      $two = $one . $one;
      $three = $one . $one . $one;
      $five = $al5[$razrad - 1];
      $ten = $al[$razrad];
      $four = $five . $one;
      $six = $one . $five;
      $seven = $two . $five;
      $eight = $three . $five;
      $nine = $ten . $one;
      if ($number == 1) {
         return ($one);
      } else if ($number == 2) {
         return ($two);
      } else if ($number == 3) {
         return ($three);
      } else if ($number == 4) {
         return ($four);
      } else if ($number == 5) {
         return ($five);
      } else if ($number == 6) {
         return ($six);
      } else if ($number == 7) {
         return ($seven);
      } else if ($number == 8) {
         return ($eight);
      } else if ($number == 9) {
         return ($nine);
      }
   }

   function toRome($number)
   {
      $count = 1;
      $romeNum = "";
      while ($number >= 1) {
         $temp = $number % 10;
         $romeNum .= $this->altNumber($temp, $count);                        //$romeNum .= altNum($temp, $count);
         $number /= 10;
         $count += 1;
      }
      return (strrev($romeNum));
   }

   

}

// переводит десятичное число в римское и наоборот
// пишешь любое число, римское или десятичное и оно его переводит
