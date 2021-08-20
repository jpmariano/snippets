PHP Style
<?php the_title('|', TRUE); ?>

Query Style
<?php wp_list_categories('show_count=0&hide_empty=1&child_of=8');?>

//Grouping parameters
<?php 
$orderby = 'name';
$show_count = 0;
$hierarchial = 1;
$title = 'my blog categories';

$variablename = array ( 
	'orderby' => $orderby,
	'show_count' => $show_count,
	'hierarchial' => $hierarchial,
	'title_li' => '<h3 class="widget-title">'.$title. '</h3>');
?>

<?php wp_list_categories($variablename);?>
//Grouping parameters

Writing Functions

function functionname(argument1, argument2)
	{what the function will do}

calling function
functionname (argument1, argument2);
Example:
mysqlconnect("anystring", $variable, 384);

variable scope: if you declare a variable inside the scope use global $varialename. 
The variable can be called anywhere.



//Passing argument
function functioname($variableinput) 
	{what the function will do}

$differentvariable=something

echo functioname($differentvariable); $differentvariable will become the $variableinput)
//Passing argument

//Function that can take multiple argument
function functionanem() 
	{for ($variable=0<func_num_args();$variable=++)
	{ echo "some text".$variable. func_num_args($variable);}

//funtion Trick

function functioname(){}

$variable = functioname();

$variable = can be called as a function

//recursive functions

