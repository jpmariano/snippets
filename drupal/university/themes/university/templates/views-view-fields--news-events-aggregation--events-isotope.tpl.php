<?php
//Get the field data
$fields = $row->_field_data['nid']['entity'];

//Assume category name is other, unless it is specifically set
$category_name = 'other';

//Get the taxonomy (category) id
if(isset($fields->field_news_events_category['und'][0]['tid']))
{
  //Store the taxonomy id
  $tid = $fields->field_news_events_category['und'][0]['tid'];

  //If the id isn't null
  if(!empty($tid))
  {
    //Load the term based on the tid
    $term = taxonomy_term_load($tid);

    //Get category name
    $category_name = strtolower($term->name);
  }
}
?>
<div class="single_detail _<?php echo $category_name; ?>" id="<?php echo $category_name; ?>">
  <a href="/<?php echo drupal_get_path_alias('node/'.$fields->nid); ?>" class="grayed"></a>
  <span class="news"><?php echo $category_name; ?> Event</span>
  <img src="<?php echo image_style_url('howard_carousel', $fields->field_image['und'][0]['uri']); ?>" alt="">
  <p><?php echo format_date(strtotime($fields->field_date['und'][0]['value']), 'month_date_short'); ?> | <a href="/<?php echo drupal_get_path_alias('node/'.$fields->nid); ?>"><?php echo truncate_utf8($fields->title, 45, true, true); ?></a></p>
</div>
