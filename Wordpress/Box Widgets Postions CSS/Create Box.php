<?php
//This is inside function.php
//This will call genesis-box.php inside the child theme (a simple html skeleton)
add_action('genesis_after_post_content','include_genesis_box', 9);
function include_genesis_box(){
  if ( is_single()) require(CHILD_DIR.'/genesis-box.php');
}

//genesis-box.php
<div id="genesis-box">
    <h3>Powered by the Genesis Framework</h3>
    <a href="http://www.studiopress.com/"><img class="alignright" src="http://www.briangardner.com/wp-content/uploads/genesis.jpg" alt="Genesis Framework" title="Genesis Framework" /></a>
    <p>Genesis empowers you to easily build amazing websites with WordPress. Whether you're a novice or advanced developer, Genesis provides the secure and search-engine-optimized foundation that takes WordPress to incredible places.</p>
    <p><a href="http://www.studiopress.com/">It's that simple - start using Genesis now!</a></p>
</div>