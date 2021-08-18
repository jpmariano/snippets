<?php

//properties
$robot->color;
$robot->material;
$robot->finish;
//Methods
$robot->action();
//   object->Property(array)['key']['key']; outputs blog/1
print $node->links['blog_usernames_blog']['href'];


print $node->links['blog_usernames_blog']['attributes']['title'];

function my_functions($a, $b) {
	$c = $a +$b;
	$a = $a + 1;
	return $c;
}

function my_functions(&$a, $b) {
	$c = $a +$b;
	$a = $a + 1;
	return $c;
}





if ($a > $b) {
    echo "a is bigger than b";
} elseif ($a == $b) {
    echo "a is equal to b";
} else {
    echo "a is smaller than b";
}

if ($a > $b) :
	print "It/'s equal!";
endif;

//do this if    then             else
print  ($a > $b) ? "it/'s equal!" : ''; 

$favcolor = "red";

switch ($favcolor) {
    case "red":
        echo "Your favorite color is red!";
        break;
    case "blue":
        echo "Your favorite color is blue!";
        break;
    case "green":
        echo "Your favorite color is green!";
        break;
    default:
        echo "Your favorite color is neither red, blue, or green!";
}
?>

<?php 
$x = 1; 

while($x <= 5) {
    echo "The number is: $x <br>";
    $x++;
} 
?>

<?php
/* For Loop Example */

for ($i = 1; $i <= 10; $i++) {
    echo $i;
}

/* example 2 */

for ($i = 1; ; $i++) {
    if ($i > 10) {
        break;
    }
    echo $i;
}

/* example 3 */

$i = 1;
for (; ; ) {
    if ($i > 10) {
        break;
    }
    echo $i;
    $i++;
}

/* example 4 */

for ($i = 1, $j = 0; $i <= 10; $j += $i, print $i, $i++);
?>

<?php
/*foreach (array_expression as $value)
    statement
foreach (array_expression as $key => $value)
    statement
 */
$arr = array(1, 2, 3, 4);
foreach ($arr as &$value) {
    $value = $value * 2;
}
// $arr is now array(2, 4, 6, 8)
unset($value); // break the reference with the last element

$arr = array("one", "two", "three");
reset($arr);
while (list(, $value) = each($arr)) {
    echo "Value: $value<br />\n";
}

foreach ($arr as $value) {
    echo "Value: $value<br />\n";
}

?>
