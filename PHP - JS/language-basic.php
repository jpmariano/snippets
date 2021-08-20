//Example: 1 http://stackoverflow.com/questions/4287357/access-php-variable-in-javascript
<script type="text/javascript">
   var php_var = "<?php echo $php_var; ?>";
</script>

//Example: 2 http://stackoverflow.com/questions/2928827/access-php-var-from-external-javascript-file

<?php $color = "Red"; ?>
<script type="text/javascript">var color = "<?= $color ?>";
    alert("color: " + color);
 </script>

http://stackoverflow.com/questions/4287357/access-php-variable-in-javascript
<script type="text/javascript">
var something=<?php echo json_encode($a); ?>;
</script>

