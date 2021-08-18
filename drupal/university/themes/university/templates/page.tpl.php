<?php global $base_path; $themePath = $base_path.drupal_get_path('theme','howard'); ?>
<div class="container pull-left">
	<div class="inner_container">
		<section class="slider">
			<div class="transparent_img top"></div>
			<header>
				<div class="inner_content">
					<div class="row">
						<div class="col-lg-4 col-md-3 col-sm-3 col-xs-6">
							<?php if ($logo):
							?>
							<a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" id="logo" class="logo"> <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" /> </a>
							<?php endif; ?>
						</div>
						<div class="col-lg-8 col-md-9 col-sm-9 col-xs-6">
							<div class="top_section">
								<?php print render($page['top_links']); ?>
							</div>
							<div class="responsive_menu_icon">
								 <a href="javascript:void(0);"><img  src="<?php print $themePath; ?>/images/responsive_menu.png" alt="" /></a>
								 <a href="javascript:void(0);"><img src="<?php print $themePath; ?>/images/responsive_search.png" alt="" /></a>
							</div>
							<div class="primary">
								<?php print render($page['main_menu']); ?>
							</div>
						</div>
					</div>
				</div>
			</header>
			<?php
				if ($page['featured_slider']) :
					print render($page['featured_slider']);
				endif;
			?>
			<?php if($page['float_block']): ?>
			<div class="right_menu">
				<div>
					<span> <img src="<?php print $themePath; ?>/images/arrow_white.png" alt="" /> </span>
				</div>
				<?php print render($page['float_block']); ?>
			</div>
			<?php endif; ?>
		</section>
		<?php if ($messages) : print $messages;	endif; ?>
		<?php if(!drupal_is_front_page()): ?>
		<div class="main_top_section <?php print($socialShareClass.' '.$stripedBG); ?>">
			<div class="inner_content">
				<?php print $breadcrumb;
				if(empty($hidePageTitle) || $hidePageTitle == 0): ?>
					<div class="row">
                    	<div class="col-xs-12">
                        	<h1 class="title" id="page-title"> <?php print $title; ?> </h1>
                        </div>
                    </div>
				<?php endif;
					if(empty($hideShareIcons) || $hideShareIcons == 0):?>
                    
					<div class="row">
                    	<div class="col-xs-12">
							<?php print render($page['social_share']);?>
                        </div>
                    </div>
					<?php endif; 
					$colClass = ((empty($page['sidebar']) || (!empty($hideSideMenu) && $hideSideMenu == 1)) && empty($altSideImg)) ? 'col-xs-12' : 'col-lg-8 col-md-8 col-sm-8 col-xs-12';
					$slidebarFlag = ((empty($page['sidebar']) || (!empty($hideSideMenu) && $hideSideMenu == 1)) && empty($altSideImg)) ? false : true;
				?>
				 <?php global $user;
			  $check = array_intersect(array('content author', 'administrator','content moderator','site admin'), array_values($user->roles));
	 if (empty($check) ? FALSE : TRUE) { ?>
				<?php if ($tabs && strtolower(arg(0) != 'user')): ?>
			        <div class="tabs">
			          <?php print render($tabs); ?>
			        </div>
			    <?php endif;
	 } ?>
     			<div class="row">
                    <div class="main-content <?php print($colClass); ?>">
                        <?php print render($page['content']); ?>
                    </div>
                    <?php if($slidebarFlag): ?>
                    <div class="side-bar col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <?php if(!empty($altSideImg)):
                            print($altSideImg);
                        endif;
                        if(!empty($page['sidebar']) && (empty($hideSideMenu) || $hideSideMenu == 0)):
                            print render($page['sidebar']); 
                        endif; ?>
                    </div>
                </div>    
				<?php endif; ?>
			</div>
		</div>
		<?php endif;
			if(!empty($page['feature'])):
		?>
		<div class="page-content">
			<?php print render($page['feature']); ?>
		</div>
		<?php endif;
		if(drupal_is_front_page()): ?>
		<div class="connect_section">
			<div class="inner_content">
				<div class="row">
					<div class="col-xs-12">
						<h2 class="text-center">Connect With Howard</h2>
					</div>
				</div>
				<div class="row">
					<?php print render($page['social_media']); ?>
				</div>
				<div class="row">
					<div class="col-xs-12">
						<div class="more_btn">
							<a href="contact">contact us</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<?php endif; ?>		
	</div>
	<div class="footer_section">
		<div class="inner_content">
			<div class="row">
				<div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
					<?php print render($page['footer_left']); ?>
				</div>
				<div class="col-lg-7 col-md-7 col-sm-12 col-xs-12">
					<div class="footer_cont">
						<!--<span>Contact Us</span>-->
						<?php print render($page['footer_right']); ?>
						<div class="row">							
							<div class="col-xs-12">
								<div class="footer_btm">
									<?php if ($logo): 
									$footer_logo = $themePath."/images/footer_logo.png";
									if(theme_get_setting('sublogo_path')){
										$footer_logo = file_create_url(theme_get_setting('sublogo_path'));
									}?>
									<a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" id="logo" class="logo"> <img src="<?php print $footer_logo; ?>" alt="<?php print t('Home'); ?>" /> </a>
									<?php endif; ?>
									<?php print render($page['footer_bottom']); ?>
								</div>
							</div>
						</div>	
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="top_scroll_icon">
	<a href="javascript:void(0);"><img src="<?php print $themePath; ?>/images/top_scroll_img.png" alt=""></a>
</div>
