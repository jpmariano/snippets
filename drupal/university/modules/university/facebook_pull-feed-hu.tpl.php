<?php $themepath = base_path() . path_to_theme(); ?>
<div class="social_details facebook">
	 <div class="heading">
                            <img src="<?php print $themepath ?>/images/fb_big.png" alt="" />
                            <p><a href="http://facebook.com/profile.php?id=<?php echo $item->from->id; ?>" class="view_link" target="_blank">Follow us on Facebook</a></p>
                        </div>
                        <div class="heading _second">
                            <a><img src="<?php print $themepath ?>/images/howard_social_logo.png" alt="" /></a>
                            <p>Howard University</p>
                        </div>

	<?php $comment = 0;
	$share = 0;
	$like = 0;?>
<?php foreach ($items as $item): ?>
	<?php //echo "<pre>";
	//print_r($item);
	//echo "</pre>"; ?>
 <p><?php if(!empty($item->message)){?>
      <?php echo $item->message; ?>
      <?php } ?>
     <?php if(!empty($item->caption)){?>
      <?php echo $item->caption; ?>
      <?php } ?> </p>
    
    	<?php if(!empty($item->picture)){?>
    	<a href="<?php echo $item->link ?>" target="_blank"><img src="<?php echo $item->picture;?>" alt="facebook" height="150" width="200"></img></a>
    	<?php } ?>
   
    <!-- <span class="facebook-feed-message">
     	<?php if(!empty($item->message)){?>
      <?php echo $item->message; ?>
      <?php } ?>
     <?php if(!empty($item->caption)){?>
      <?php echo $item->caption; ?>
      <?php } ?>    </span>-->
     
     	<?php
     	 if(!empty($item->shares->count)){
            $share = $item->shares->count;
		} 
	    if(!empty($item->likes->data)){
           $like =count($item->likes->data);
	   }
        if(!empty($item->comments->data)){
     		 $comment = count($item->comments->data);
		}
		 ?>
        <div class="activity">
                            <?php print 'Like'.$like; print 'Share'.$share; print 'Comments'.$comment;?>
                            <a href="http://facebook.com/profile.php?id=<?php echo $item->from->id; ?>" class="view_link" target="_blank">View Link </a>
                     </div>
   
<?php endforeach; ?>

<?php //exit; ?>
</div>