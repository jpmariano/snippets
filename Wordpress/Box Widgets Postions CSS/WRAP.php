<?php
// Add div.wrap inside of div#inner
function child_before_content_sidebar_wrap() {
    echo '<div class="wrap">';
}
add_action('genesis_before_content_sidebar_wrap', 'child_before_content_sidebar_wrap');

function child_after_content_sidebar_wrap() {
    echo '</div><!-- end .wrap -->';
}
add_action('genesis_after_content_sidebar_wrap', 'child_after_content_sidebar_wrap');