<?php
<footer div="footer" role="contentinfo">
				<div id="inner-footer" >
					<?php
					$the_query = new WP_Query(array('post_type' => 'customfooter', 'page_id'=>'28'));
					while ( $the_query->have_posts() ) : $the_query->the_post();
					?>
					<div id="footer-box1" class="footer-box">
						<h3><?php the_title(); ?></h3>
						<p><?php the_excerpt(); ?></p>
					</div>
					<?php endwhile; wp_reset_query(); ?>
					<?php
					$the_query = new WP_Query(array('post_type' => 'customfooter', 'page_id'=>'30'));
					while ( $the_query->have_posts() ) : $the_query->the_post();
					?>
					<div id="footer-box2" class="footer-box">
						<h3><?php the_title(); ?></h3>	
						<p><?php the_excerpt(); ?></p>
					</div>
					<?php endwhile; wp_reset_query(); ?>
					<?php
					$the_query = new WP_Query(array('post_type' => 'customfooter', 'page_id'=>'32'));
					while ( $the_query->have_posts() ) : $the_query->the_post();
					?>
					<div id="footer-box3" class="footer-box">
						<h3><?php the_title(); ?></h3>	
						<p><?php the_content(); ?></p>
					</div>
					<?php endwhile; wp_reset_query(); ?>
				</div> <!-- end #inner-footer -->
			</footer> <!-- end footer -->
		</div> <!-- end #container -->
		<!-- all js scripts are loaded in library/bones.php -->
		<?php wp_footer(); ?>
	</body>

</html> <!-- end page. what a ride! -->