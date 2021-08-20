<?php
// retrieve information
$query = ‘SELECT
  movie_name_field, movie_year_field, movie_director_field, movie_leadactor_field,
  movie_type_field
FROM
  movie_table
ORDER BY
  movie_name_field ASC,
  movie_year_field DESC’;
$result = mysql_query($query, $db) or die(mysql_error($db));
// determine number of rows in returned result
$num_movies = mysql_num_rows($result); 