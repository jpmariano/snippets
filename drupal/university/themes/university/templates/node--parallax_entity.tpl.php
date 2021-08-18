<?php
global $base_url;
$backgroundUri = isset($node->field_parallax_background['und'][0]['uri'])?file_create_url($node->field_parallax_background['und'][0]['uri']):'';
$parallaxBackgroundStyle = $backgroundUri != ''?'style="background-image: url('.$backgroundUri.')"':'';
$parallaxLeftImage = isset($node->field_parallax_left_image['und'][0]['uri'])?file_create_url($node->field_parallax_left_image['und'][0]['uri']):'';
$parallaxRightImage = isset($node->field_parallax_right_image['und'][0]['uri'])?file_create_url($node->field_parallax_right_image['und'][0]['uri']):'';
$linkTo = isset($node->field_source['und'][0]['url'])?$node->field_source['und'][0]['url']:$base_url;
$displayTitle = isset($node->field_display_title['und'][0]['value'])?t($node->field_display_title['und'][0]['value']):t("Howard");
$body = "";
if($node->body['und'][0]['safe_value']){
	$subStrCount = 350;
	$body = strip_tags($node->body['und'][0]['safe_value']);
	if(strlen($node->body['und'][0]['safe_value']) > $subStrCount)	
		$body = preg_replace('/\s+?(\S+)?$/', '', substr($body, 0, $subStrCount));	
}
?>
<div class="parallax_section">        
	<!--<section id="home_<?php print strtolower($displayTitle); ?>" class="parallax-panel" data-speed="16" data-type="background" <?php print $parallaxBackgroundStyle; ?>-->
	<section id="home_<?php print strtolower($displayTitle); ?>" class="parallax-panel" data-speed="16" data-type="background">
    <div class="parallax_top text-center">
		<div class="row">
			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<img src="<?php print base_path(); ?>sites/all/themes/howard/images/top_img1.png" alt="" />
				<h2><?php print $displayTitle;?></h2>
				<img src="<?php print base_path(); ?>sites/all/themes/howard/images/bottom_img1.png" alt="" />
				<p><?php print $body; ?></p>
			</div>
		</div>
	</div>
    <div class="parallax_left">
        <img src="<?php print $parallaxLeftImage; ?>" alt="" />
    </div>
    <div class="parallax_right">
        <img src="<?php print $parallaxRightImage; ?>" alt="" />
    </div>
    <div class="parallax_bottom">
		<div class="row">
			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<div class="more_btn text-center"><a href="<?php print $linkTo; ?>">Learn More</a></div>
			</div>
		</div>
    </div>
	</section>
</div>