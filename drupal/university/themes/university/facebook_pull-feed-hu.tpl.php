<?php $themepath = drupal_get_path('theme','howard');  $graph_id = variable_get('facebook_pull_graph_id', '');?>
<?php foreach ($items as $item): 
	if(empty($item->message)){
		continue;
	}
	$countArr = get_likes_count($item->id);
?>
	
 <p><?php if(!empty($item->message)){
	 	$message = $item->message;
	 	$message_length = strlen($item->message);
		if ($message_length > 201) {
			//	$about = substr($about, 0, 145).'...';
			$message = preg_replace('/\s+?(\S+)?$/', '', substr($item->message, 0, 200))."...";
		}
	 	echo $message; 
    }  
	if(!empty($item->caption)){
		echo $item->caption;  
	} ?> 
  </p>
    
    	<?php if(!empty($item->picture)){
    		$imgSrc = !empty($countArr['img']) ? $countArr['img'] : $item->picture;
    	?>
    		<a href="<?php echo $item->link ?>" target="_blank"><img src="<?php echo $imgSrc;?>" alt="facebook"  width="200"></img></a>
    	<?php } ?>
     	<?php     	
		$share = !empty($countArr['shares']) ? $countArr['shares'] : 0;
		$like = !empty($countArr['likes']) ? $countArr['likes'] : 0;
		$comment = !empty($countArr['comments']) ? $countArr['comments'] : 0;
		$itemID = explode('_',$item->id);
		$itemUrl = 'https://www.facebook.com/howarduniversity/posts/'.$itemID[1];
		$itemUrl = $item->link;
		$itemLoginUrl = 'https://www.facebook.com/login.php?next='.$item->link;
		?>
        <div class="activity">
        	<div class="fb_activities">
        		<a href="javascript:void(0)" onClick="window.open('<?php print $itemLoginUrl; ?>', 'facebook-share-dialog', 'width=800, height=500, scrollbars=yes');">
        			<span class="FBLikeIcon"><?php print($like); ?></span>
        		</a>
        		<a href="javascript:void(0)" onClick="window.open('http://www.facebook.com/sharer.php?u=<?php print $itemUrl; ?>', 'facebook-share-dialog', 'width=800, height=500, scrollbars=yes');">
        			<span class="FBShareIcon"><?php print($share); ?></span>
        		</a>
        		<a href="javascript:void(0)" onClick="window.open('<?php print $itemLoginUrl; ?>', 'facebook-share-dialog', 'width=800, height=500, scrollbars=yes');">
        			<span class="FBCommentIcon"><?php print($comment); ?></span>
        		</a>
        		<!--<span class="FBLikeIcon"><?php print($like); ?></span>
	        	<span class="FBShareIcon"><?php print($share); ?></span>
	        	<span class="FBCommentIcon"><?php print($comment); ?></span>-->        	
        	</div>
            <div class="fb_view_link">
				<a href="http://facebook.com/profile.php?id=<?php echo $item->from->id; ?>" class="view_link" target="_blank">View Link </a>
			</div>	
         </div>
   
<?php break; 
endforeach; ?>

<?php //exit; ?>