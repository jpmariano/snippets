<?php
//Get the field data
$fields = $row->_field_data['nid']['entity'];
?>

<img src="<?php echo image_style_url('howard_home_slider', $fields->field_image['und'][0]['uri']); ?>" alt="" draggable="false">
<div class="slider_content">
  <h2><?php echo $row->node_title; ?></h2>
  <div class="slider_con_det">
    <p class="desc"><?php echo $fields->body['und'][0]['safe_value'] ?></p>
    <p class="learn">
      <?php
      //Do we have a link to more info?
      if(!empty($fields->field_source['und'][0]['url']))
      {
        //Default text for more link
        $link_text = 'Learn More';

        //Override default if we have one
        if(!empty($fields->field_source['und'][0]['title']))
        {
          $link_text = $fields->field_source['und'][0]['title'];
        }

        //Output the link
        echo t("<a href='@link'>@text</a>", array("@link" => $fields->field_source['und'][0]['url'], "@text" => $link_text));
      }
      ?>
    </p>
  </div>
</div>
<div class="transparent_img"></div>
