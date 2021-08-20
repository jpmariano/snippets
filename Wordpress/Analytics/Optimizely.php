Inside Functions File:
add_action( 'genesis_meta', 'add_optimizely', 1 );
function add_optimizely(){
    ?>
<script src="//cdn.optimizely.com/js/234810639.js"></script>
<?php
}
