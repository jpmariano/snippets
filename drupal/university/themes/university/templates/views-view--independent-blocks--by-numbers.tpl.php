<?php
$data = $view->result[0];
$background = isset($data->field_field_parallax_background[0]['rendered']['#item']['uri'])?file_create_url($data->field_field_parallax_background[0]['rendered']['#item']['uri']):'';

if($background != '')
{
  $style = 'style="background-image: url('.$background.')"';
}
?>

<div class="howard_by_numbers">
  <section id="home_howard" data-speed="6" data-type="background" <?php print $style; ?>>
    <h2><?php print $data->node_title; ?></h2>
    <div class="home_howard_slider block-howard">
      <?php
      $blockImages = $data->field_field_block_image;
      if(is_array($blockImages)){
        foreach($blockImages as $blockImage){
          if(isset($blockImage['rendered']['#item']['uri'])){
            $imgUrl = image_style_url("howard_by_numbers", $blockImage['rendered']['#item']['uri']);
            $variables = array(
              'path' => $imgUrl,
              'alt' => $row->title,
              'title' => 'Howard By Numbers',
            );
            $img = theme('image', $variables);
            $linkUrl = '';
            if(!empty($blockImage['rendered']['#item']['alt'])){
              $abs = (strpos($blockImage['rendered']['#item']['alt'], '.') !== FALSE) ? FALSE : TRUE;
              $linkUrl = url($blockImage['rendered']['#item']['alt'], array('absolute' => $abs));
            }
            $link = l($img, $linkUrl, array('html' => TRUE));
            ?>
            <div class="slide"><div class="slider_det"><?php print($link) ?></div></div>
            <?php }
          }
        }
      ?>
    </div>
  </section>
</div>
