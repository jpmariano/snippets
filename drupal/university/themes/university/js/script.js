// JavaScript Document
(function($, Drupal, window, document, undefined) {
// JavaScript Document	
	var windowResized = 1;
	var winWidth = window.innerWidth;
	$(document).ready(function(e) {	
		/*Primary Menu level - highlight*/
		$('.primary ul.menu_level1 ul.menu_level2 ul.menu_level3 > li').hover(function(){
		   $(this).parent().parent().css('background-color','#fff');   
		  },function(){
		   $(this).parent().parent().css('background-color',''); 
		});

        $('.primary ul.menu_level1').hover( function(){
           $('body').toggleClass('main_menu_is-active');
        });
		/*Primary Menu level - highlight ends*/
	
		var sectionHeight = 0;
		if($('body').hasClass('news-and-events'))
			sectionHeight = 500/1530;
		else if($('body').hasClass('schools-and-colleges'))
			sectionHeight = 583/1530;
		else
			sectionHeight=1000/1530;
		sectionHeight = sectionHeight * $('.inner_container').width();
		$('.parallax_section section').css('height',sectionHeight);
		
		// responsive-menu changes -Start		
			var pathToTheme = Drupal.settings.basePath + "sites/all/themes/";
			var closeSpan = '<div class="arrow close"><a href="javascript:void(0);"><img  src="'+pathToTheme+'howard/images/responsive_menu1.png" alt="" /></a></div>';
			$( ".top_section #block-menu-menu-top-menu .content ul" ).addClass("top_menu");
			var top_menu = $( ".top_section #block-menu-menu-top-menu .content" ).html();
			var search_form = $( ".top_section #block-search-form .content" ).html();
			$( ".primary #block-system-main-menu ul.menu_level1" ).before( search_form );
			$( ".primary #block-system-main-menu ul.menu_level1" ).after( top_menu );
			$( ".primary #block-system-main-menu ul.top_menu" ).after( closeSpan );
			$('.primary ul.menu_level1 span.submenu').click(function(){
				$(this).toggleClass("down");
				$(this).next().toggle();
				});
				
			$('.primary	.close').click(function(){
				$(".primary	").slideToggle(); //Menu toggle for responsive
			});
			
			
			if (window.innerWidth <= 640) {
			var sectionHeight = 0;
		if($('body').hasClass('news_events'))
			sectionHeight = 400/640;
		else if($('body').hasClass('schools_colleges'))
			sectionHeight = 583/640;
		else
			sectionHeight=800/640;
		sectionHeight = sectionHeight * $('.inner_container').width();
		$('.parallax_section section').css('height',sectionHeight);//Set parallaxsection Height
		
		//Change the Home page Image slider style
			/*if($("body").hasClass("front")){
		$("#block-views-header-slideshows-block .slides a img").each(function(){
				  var curSrc = $(this).attr('src');
				  curSrc = curSrc.replace("howard_home_slider", "howard_slider_responsive");
				  // curSrc = curSrc.replace("styles", "");  
				  $(this).attr('src', curSrc); 
				  });
				 }
				 //Change the Other pages Image slider style
				 if($("body").hasClass("not-front")){
		$("#block-views-header-slideshows-block-1 .slides a img").each(function(){
				  var curSrc = $(this).attr('src');
				  curSrc = curSrc.replace("howard_slider", "howard_responsive");
				  //curSrc = curSrc.replace("styles", "");
				  $(this).attr('src', curSrc); 
				  });	
				  }	*/			 
				 }
		// responsive-menu changes -End		
		// Header - Search and primary menu
		
		$('#search-block-form input').attr('placeholder', 'SEARCH');// Set place holder for search form
		$('#search-block-form input').attr('size', 20);
		$('#search-block-form.google-cse .form-submit').val('.');
		
		// Howard by numbers - Make grayed blocks
		if($("#block-views-independent-blocks-block .howard_by_numbers").length > 0){
			$("#block-views-independent-blocks-block .howard_by_numbers .slide").eq(0).addClass("gray head");
			$("#block-views-independent-blocks-block .howard_by_numbers .slide").eq(3).addClass("gray tail");
		}
		
		// Fields of study
		 
		//$(".region-feature #block-views-fields-of-study-block .item-list ul li ul li").slice(12).css( "background-color", "red" );
	// $(".region-feature #block-views-fields-of-study-block .item-list ul li ul").hover(
         // function () {
           // $(this).closest('li').children('a').addClass('active');
         // }, 
         // function () {
            // $(this).closest('li').children('a').removeClass('active');
         // }
     // );
// 
		// $(".region-feature #block-views-fields-of-study-block .item-list ul li ul").each(function(){
			// $(this).find('li').slice(24).hide();			
    	 // var url = $(this).closest('li').find('.extra').find('a').attr('href');
         // $(this).append( '<a href='+url+' class="see_all">See All fields in a list</a>' );
         // });
       $(".region-feature #block-views-fields-of-study-block .view-content > .item-list > ul > li").hover( function () {
		  $(".region-feature #block-views-fields-of-study-block .view-content > .item-list > ul > li").removeClass('show');
		  $(this).addClass('show');
		  $(".region-feature #block-views-fields-of-study-block .view-content > .item-list > ul").css('min-height','0px');
		  $(this).parent().css('min-height',$(this).find('ul').height() +'px');
		}); 
		
		//Fields of Study Other Lists
		//JP added this in 01.08.14 in order to make the subsequent fields of study lists function exactly like the original views lists from which they were duplicated. This code was copied from the original code above. 
		  $(".region-feature #block-views-fields-of-study-block-2 .view-content > .item-list > ul > li").hover( function () {
		  $(".region-feature #block-views-fields-of-study-block-2 .view-content > .item-list > ul > li").removeClass('show');
		  $(this).addClass('show');
		  $(".region-feature #block-views-fields-of-study-block-2 .view-content > .item-list > ul").css('min-height','0px');
		  $(this).parent().css('min-height',$(this).find('ul').height() +'px');
		}); 
		$(".region-feature #block-views-fields-of-study-block-3 .view-content > .item-list > ul > li").hover( function () {
		  $(".region-feature #block-views-fields-of-study-block-3 .view-content > .item-list > ul > li").removeClass('show');
		  $(this).addClass('show');
		  $(".region-feature #block-views-fields-of-study-block-3 .view-content > .item-list > ul").css('min-height','0px');
		  $(this).parent().css('min-height',$(this).find('ul').height() +'px');
		}); 
		$(".region-feature #block-views-fields-of-study-block-4 .view-content > .item-list > ul > li").hover( function () {
		  $(".region-feature #block-views-fields-of-study-block-4 .view-content > .item-list > ul > li").removeClass('show');
		  $(this).addClass('show');
		  $(".region-feature #block-views-fields-of-study-block-4 .view-content > .item-list > ul").css('min-height','0px');
		  $(this).parent().css('min-height',$(this).find('ul').height() +'px');
		}); 
		
         //Make Social Share windows Popup
    	$('.social-share .social-share-facebook,.social-share .social-share-twitter').click(function(e){  
    	 	var share_url = $(this).attr('href'); 
       		window.open(share_url, "yyyyy", "width=480,height=360,resizable=no,toolbar=no,menubar=no,location=no,status=no");
           	return false;
        });
        $('.main_top_section .inner_content .region-content .block-webform h2 a').click(function(e){  
    	   return false;
        });
        
        // Wrap Div in schools and colleges
       if (window.innerWidth > 640) {
         var divs = $("#block-views-schools-college-block .view-content > div.school-college-det");
            for(var i = 0; i < divs.length; i+=3) {
               divs.slice(i, i+3).wrapAll("<div class='new'></div>");
            }          
          
			$("#block-views-schools-college-block .view-content .new").each(function(){
				var maxHeight = 0;
				$(this).find(".school-college-det").each(function(){
				if ($(this).height() > maxHeight) {
			   	 maxHeight = $(this).height();
				  }
				   $(this).height(maxHeight);
				});
			});
			$( "ul.menu_level3 li" ).has( "ul.menu_level4" ).addClass( "sub-menu" );
		}
		if (window.innerWidth <= 1024) {
        /* if($("body").hasClass("front")){
         	//Change the Home page Image slider style
		$("#block-views-header-slideshows-block .slides a img").each(function(){
				  var curSrc = $(this).attr('src');
				  curSrc = curSrc.replace("howard_home_slider", "howard_ipad_home_slider");
				  // curSrc = curSrc.replace("styles", "");  
				  $(this).attr('src', curSrc); 
				  });
				 }
				 //Change the Other page Image slider style
				 if($("body").hasClass("not-front")){
		$("#block-views-header-slideshows-block-1 .slides a img").each(function(){
				  var curSrc = $(this).attr('src');
				  curSrc = curSrc.replace("howard_slider", "howard_ipad_slider");
				  //curSrc = curSrc.replace("styles", "");
				  $(this).attr('src', curSrc); 
				  });	
				  }	*/
		}
		 if (window.innerWidth > 480){
			 var maxHeight = 0;
			// var max_Height = 0;
			$(".footer_section .footer_left_menu li").each(function(){
				$(this).find(".menu_level").each(function(){
				if ($(this).height() > maxHeight) {
			   	 maxHeight = $(this).height();
				  }
				 
				});				  
			});		
		 }
		 
		 /*ISOTOPE Starts*/
		 if($('.isotopeContainer').length > 0){
			 var $container = $('.isotopeContainer');
				$container.isotope({
					filter: '*',
					animationOptions: {
						//duration: 750,
						easing: 'linear',
						queue: false
					}
				});
				
				$('.isotopeFilters .section_left a').click(function(){ //$('.isocarousel').carousel('destroy');
					windowResized = 0;
					var selector = $(this).attr('data-filter');
					$('.isotopeFilters .section_left .current').removeClass('current');
					$(this).addClass('current');
					
						//setTimeout(function(){
							$container.isotope({
								layoutMode: 'fitRows',
								filter: selector,
								animationOptions: {	
									duration: 750,
									easing: 'linear',
									queue: false
								}
							 });
						//}, 3000);
				}); 
				
				$container.isotope( 'on', 'layoutComplete', function( isoInstance, laidOutItems ) {
				if(windowResized == 0){
				var bxSliderResponsive = $('.bx-viewport').length;
					if($('.isocarousel .isotopeContainer').parent().hasClass("mask")){
						/*Remove bx-slider wrapper*/
						$('.bx-viewport').unwrap();
						$('.bx-viewport .mask').unwrap();
						$('.bx-controls.bx-has-pager').remove();
						/*Remove Isotope mask wrapper*/
						$('.isocarousel .isotopeContainer').unwrap();
						$('.isocarousel .isotopeContainer').removeAttr("style");					
						$('.pagination-links').remove();
						$('.pagination-nextprev-link').remove();
						$('.prev').remove();
						$('.next').remove();					
					}
					var activeTab = $(".isotopeFilters a.current").attr("id");
					if(winWidth >= 768){
						//if(bxSliderResponsive == 0){
							$('.isocarousel').updatedCarousel({
								itemsPerPage: 5,
								itemsPerTransition: 1,
								easing: 'linear',
								noOfRows: 3,
								activeFilter: activeTab,
							});
						//}
					}else{
						$('.isocarousel .bx-controls .bx-pager .bx-pager-item:first-child a').trigger('click');
						/*isoCarousel.reloadSlider({
								mode: 'vertical',						
								infiniteLoop: false,
								slideWidth: 400,
								minSlides: 3,
								maxSlides: 3,
								moveSlides: 1
						});*/
						//isoCarousel = $('.isocarousel').bxSlider();
					}
					//setTimeout(function(){
						
					//}, 1000);
					var isotopeMargin = 0;
					$('.pagination-isocarousel').remove();
					if(!$('.isocarousel .isotopeContainer').parent().hasClass("mask") && winWidth > 640){
						//isotopeMargin = "10%";
						if($('.isocarousel .pagination-nextprev-link.cloned').length == 0){
							$('.isocarousel').prepend('<div class="pagination-isocarousel"></div>');
						}
					}					
						
					//$(".isocarousel ul.isotopeContainer").css({"margin-left": isotopeMargin});
					}
				});
			}
			/*ISOTOPE Ends*/
			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
				if(winWidth >= 768){
					$('.primary ul.menu_level1 > li' ).hover(function(e){						
						$('.menu_level2').hide();
						$(this).find('.menu_level2').show();
					});
					$('.primary ul.menu_level2 > li' ).hover(function(e){
						$('.menu_level3').hide();
						$(this).find('.menu_level3').show();
					});
					$('.primary ul.menu_level3 > li' ).hover(function(e){
						$('.menu_level4').hide();
						$(this).find('.menu_level4').show();
					});
				}
			}else if(winWidth >= 768){
				$('.primary ul.menu_level1 > li' ).mouseenter(function(){
					$('.menu_level3').hide();
					$('.menu_level4').hide();
					$('.menu_level2').slideUp('fast');
					$(this).find('.menu_level2').slideDown('fast');
				});
				$('.primary ul.menu_level2 > li' ).mouseenter(function(e){
					//$('.menu_level4').slideUp('fast');
					if($(this).find('.menu_level3').length > 0 && $(this).find('.menu_level3').css('display') == 'none'){						
						//$('.menu_level3').slideUp('fast');
						$(this).find('.menu_level3').slideDown('fast');	
					}					
				});
				$('.primary ul.menu_level3 > li' ).mouseenter(function(e){
					if($(this).find('.menu_level4').length > 0 && $(this).find('.menu_level4').css('display') == 'none'){
						//$(this).addClass('hover');
						$('.menu_level4').slideUp('fast');
						$(this).find('.menu_level4').slideDown('fast');
					}else{
						//$(this).removeClass('hover');
					}
				});
				$('.primary ul.menu_level1 > li' ).mouseleave(function(){
					$('.primary ul.menu_level1 ul' ).hide();
				});
			}
    });
     //Set Slider width and Height   
	var bxSliderCarousel = new Array();
	var howardHomeSlider = new Array();
	var isoCarousel;
	var isotopeCarouselBx;
	if(window.innerWidth >= 768){
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	 		$(window).on( "orientationchange", function( event ) {
	 			var sliderWidth = $('.howard_bx_carousel').width();	
	 			winWidth = window.innerWidth;
				$('.carousel.module .slide').css('padding-right',winWidth * 0.0127718);
				$('.carousel.module .slide').css('padding-left',winWidth * 0.0127718);
				dynamicWidth = sliderWidth  * 0.199214;
				$('.carousel.module .slide').css('max-width',dynamicWidth + 'px');
				$('.carousel.module .slide').css('min-width',dynamicWidth + 'px');
				
				$('.home_howard_slider .slide').css('padding-right',winWidth * 0.0230718);
				$('.home_howard_slider .slide').css('padding-left',winWidth * 0.0230718);
				numSlideWidth = winWidth  * 0.243614;
				$('.home_howard_slider .slide').css('max-width',numSlideWidth + 'px');
				$('.home_howard_slider .slide').css('min-width',numSlideWidth + 'px');	
				$('.howard_by_numbers #home_howard .bx-viewport').css('min-height',0);
				if(winWidth <= 640){
					var viewportHeight = 0;
					try{
						viewportHeight = $('.howard_by_numbers #home_howard .bx-viewport').css('height') !== undefined ? $('.howard_by_numbers #home_howard .bx-viewport').css('height').split('px')[0] : $('.howard_by_numbers #home_howard .bx-viewport').height();
					}catch(ex) {
					}
					$('.howard_by_numbers #home_howard .bx-viewport').css('min-height', eval(viewportHeight) + 90 + 'px');
				}			
			});
		}else{
			
		}
	}
	$(window).resize(function(){
		var height= $('section.slider .right_menu .content ul').height();
		$('section.slider > .right_menu > div > span').css('height',height);
		var oldWidth = winWidth;
		winWidth = window.innerWidth;
		if((oldWidth > 640 && winWidth <= 640) || (oldWidth <= 640 && winWidth >= 640)){
			var slideDets = $('.carousel.module .single_detail');
			$('.carousel.module .slide').css('max-width','100%');
			//$('.carousel.module .slide').css('min-width',dynamicWidth + 'px');
			if($('.carousel.module .single_detail').parent().hasClass('slide')){
				slideDets.unwrap();	
			}
			for(var i = 0; i < bxSliderCarousel.length; i++){
				bxSliderCarousel[i].destroySlider();	
			}
			for(var i = 0; i < howardHomeSlider.length; i++){
				howardHomeSlider[i].destroySlider();	
			}
			if(oldWidth > 640 && winWidth <= 640){
				$('.home_howard_slider .slide').css('max-width','70%');
				$('.home_howard_slider .slide').css('min-width','none');
			}
			// destroy isotope carousel 
			if(oldWidth <= 640 && winWidth > 640){
				if($(".isocarousel .isotopeContainer").length > 0){
					isotopeCarouselBx.destroySlider();
				}
			}
			Drupal.attachBehaviors();
		}else if(oldWidth >640 && winWidth > 640){
			var sliderWidth = $('.howard_bx_carousel').width();			
			$('.carousel.module .slide').css('padding-right',sliderWidth * 0.0127718);
			$('.carousel.module .slide').css('padding-left',sliderWidth * 0.0127718);
			dynamicWidth = sliderWidth  * 0.199214;
			$('.carousel.module .slide').css('max-width',dynamicWidth + 'px');
			$('.carousel.module .slide').css('min-width',dynamicWidth + 'px');				
			
			$('.home_howard_slider .slide').css('padding-right',sliderWidth * 0.0230718);
			$('.home_howard_slider .slide').css('padding-left',sliderWidth * 0.0230718);
			numSlideWidth = winWidth  * 0.243614;
			$('.home_howard_slider .slide').css('max-width',numSlideWidth + 'px');
			$('.home_howard_slider .slide').css('min-width',numSlideWidth + 'px');
			if($(".isocarousel .isotopeContainer").length > 0){
				Drupal.attachBehaviors();
			}
		}else if(oldWidth <= 640 && winWidth <= 640){
			$('.howard_by_numbers #home_howard .bx-viewport').css('min-height',0);
			var viewportHeight = 0;
			try{
				viewportHeight = $('.howard_by_numbers #home_howard .bx-viewport').css('height') !== undefined ? $('.howard_by_numbers #home_howard .bx-viewport').css('height').split('px')[0] : $('.howard_by_numbers #home_howard .bx-viewport').height();
			}catch(ex) {
			}
			$('.howard_by_numbers #home_howard .bx-viewport').css('min-height', eval(viewportHeight) + 90 + 'px');
		}
	});
    Drupal.behaviors.HowardRotatorCarousel = {
		attach : function(context, settings) {
			var height= $('section.slider .right_menu .content ul').height();
			$('section.slider > .right_menu > div > span').css('height',height);
			/* Rotator */
			var count = 0;
			var first, second;
			var rows = 1;
			var slideWidth = 270; var numSlideWidth = 300; var index = 0;
			var mode = 'horizontal'; if (winWidth <= 640) { mode = 'vertical'; }
			$('.carousel.module').addClass(mode);
			var sliderWidth = $('.howard_bx_carousel').width();
			if(winWidth >= 1024 && winWidth <= 1525){ slideWidth = 240; numSlideWidth = 250;}
			var dynamicWidth =window.innerWidth;
			$('.carousel').each(function(){
				sliderWidth = $(this).closest('.howard_bx_carousel').width();
				count++;
				$(this).addClass('carousel_'+count);
				var maxSlides = 5;
				var minSlides = 1;
				if (winWidth <= 640) {
					maxSlides = 3; minSlides = 3;					
				}else{
					if($(this).hasClass('rows_2')) rows = 2;
					else if($(this).hasClass('rows_3')) rows = 3;
					else if($(this).hasClass('rows_4')) rows = 4;
				}
				var startElem = $(this).find(".single_detail.start_here");
				index = Math.floor(startElem.index(".carousel_"+count+" .single_detail") / rows) - 2;
				var divs = $(this).find(".single_detail");
				var portClass = $(this).hasClass('isotope') ? 'portfolioContainer' : '';
				if($(this).find('.slide').length == 0){
					for(var i = 0; i < divs.length; i+=rows) {
					  divs.slice(i, i+rows).wrapAll('<div class="slide '+portClass+'" />');
					}
				}
				$(this).find('.slide').css('padding-right',sliderWidth * 0.0127718);
				$(this).find('.slide').css('padding-left',sliderWidth * 0.0127718);
				dynamicWidth = sliderWidth  * 0.173614;
				if($(this).hasClass('news_events_carousel rows_2')){
					$(this).find(".single_detail.start_here").parent().addClass('partition');
					$(this).find('.slide').each(function(){
						if($(this).hasClass('partition')){
							return false;
						}
						$(this).addClass('news');
					});
					$(this).find('.slide.news').each(function(){
						first = $(this).find('.single_detail:first').clone();
						second = $(this).find('.single_detail:last').clone();
						$(this).find('.single_detail:first').replaceWith(second);
						$(this).find('.single_detail:last').replaceWith(first);
					});
				}
				if(!$(this).hasClass('isotope') && winWidth > 640){
					$(this).find(".single_detail.start_here").parent().prev().prev().addClass('gray head');
					$(this).find(".single_detail.start_here").parent().next().next().addClass('gray tail');
				}
				if(!$(this).parent().hasClass('bx-viewport')){
					bxSliderCarousel[count-1] = $(this).bxSlider({
						touchEnabled: false,
						mode: mode,
						startSlide: index,
						infiniteLoop: false,
						slideWidth: dynamicWidth,
						minSlides: minSlides,
						maxSlides: maxSlides,
						moveSlides: 1
					});					
				}
			});
			$('.home_howard_slider .slide').css('padding-right',winWidth * 0.0230718);
			$('.home_howard_slider .slide').css('padding-left',winWidth * 0.0230718);
			numSlideWidth = winWidth  * 0.200614;
			count = 0;
			$('.home_howard_slider').each(function(){
				if(!$(this).parent().hasClass('bx-viewport')){
					howardHomeSlider[count] = $(this).bxSlider({
						mode: mode,
						infiniteLoop: false,
						slideWidth: numSlideWidth,
						minSlides: 3,
						maxSlides: 4,
						moveSlides: 1
					});
					count++;
					if(winWidth <= 640){
						setTimeout(function(){
							var viewportHeight = $('.howard_by_numbers #home_howard .bx-viewport .slide').height();						
							$('.howard_by_numbers #home_howard .bx-viewport').css('min-height', (viewportHeight * 3) + 90 + 'px');
						}, 2000);
					}					
				}
			});
			$('.bx-controls.custom a',context).once(function(){
				$(this).click(function(){
					if($(this).hasClass('bx-prev')){
						$(this).closest('.bx-controls').parent().find('.bx-wrapper .bx-controls .bx-prev').trigger('click');
					}else if($(this).hasClass('bx-next')){
						$(this).closest('.bx-controls').parent().find('.bx-wrapper .bx-controls .bx-next').trigger('click');
					}
				});
			});	
					
			if(winWidth <= 640){
				//alert($(this).closest('.block-howard').find('.bx-next').attr('class'));
				$('.block-howard').find('.bx-next').click();
			}
			
			 // ############################
           	if(winWidth >= 640){
				windowResized = 1;
				/*Remove bx-slider wrapper*/
				if($('.isocarousel .bx-viewport').length > 0){
					$('.isocarousel .bx-viewport').unwrap();
					$('.isocarousel .bx-viewport .isotopeContainer').unwrap();
					$('.isocarousel .bx-controls.bx-has-pager').remove();
					$('.isocarousel .isotopeContainer li').removeClass("slide");
					// reset li style values
					$('ul.isotopeContainer li').removeAttr("style");
					// set slider item position to absolute
					$('ul.isotopeContainer li').css({"position": "absolute"});
				}
				// remove isoptope slider carousel
				if($('.isocarousel .isotopeContainer').parent().hasClass("mask")){
					/*Remove Isotope mask wrapper*/
					$('.isocarousel .isotopeContainer').unwrap();
					$('.isocarousel .isotopeContainer').removeAttr("style");					
					$('.pagination-links').remove();
					$('.pagination-nextprev-link').remove();
					$('.prev').remove();
					$('.next').remove();					
				}
				// build isoptope carousel
           		if(!$('.isocarousel .isotopeContainer').parent().hasClass("mask")){
		           	$('.isocarousel').updatedCarousel({
						itemsPerPage: 5,
						itemsPerTransition: 1,
						easing: 'linear',
						noOfRows: 3
					});
				}
			}else{
				if($('.isocarousel .isotopeContainer').parent().hasClass("mask")){
					$('.isocarousel .isotopeContainer').unwrap();
					$('.isocarousel .isotopeContainer').removeAttr("style");					
					$('.pagination-links').remove();
					$('.pagination-nextprev-link').remove();
					$('.prev').remove();
					$('.next').remove();					
				}
			
				$('.isocarousel .isotopeContainer li').addClass('slide');
				if(!$('.isocarousel .isotopeContainer').parent().hasClass("bx-viewport")){
					isotopeCarouselBx = $('.isocarousel .isotopeContainer').bxSlider({
						mode: 'vertical',						
						infiniteLoop: false,
						slideWidth: 300,
						minSlides: 3,
						maxSlides: 3,
						moveSlides: 1
					});
					// set slider item position to absolute
					$('ul.isotopeContainer li').css({"position": "absolute"});
				}
			}
			
           
           // ############################
		}
	};
	
  // Set height and width of Contact us Map
	Drupal.behaviors.HowardbyNumbersCarousel = {
		attach : function(context, settings) {
			$('header .responsive_menu_icon a',context).once(function(){
			$(this).click(function(){
				$(this).parent().next().slideToggle();
			  });
			});
			/*$('#block-system-main',context).once(function(){
				if (window.innerWidth <= 800) {
			$(this).contents().find("iframe").css("height","400px");
			$(this).contents().find("iframe").css("width","500px");
			}
			});*/
		}
	};
	
// Add div class for Submenu
	Drupal.behaviors.menuChange = {
		attach : function(context, settings) {
			$('.primary ul.menu_level1 ul',context).once(function(){
			
		   var addNewSpan = '<span class="arrow submenu"></span>';
		   $(this).each(function(){
			  $(this).before(addNewSpan);
			  });
			
		});
		var height= $('section.slider .right_menu .content ul').height();
		$('section.slider > .right_menu > div > span').css('height',height);
		//$('section.slider .right_menu div.region-float-block').css('display','none');		
		$('section.slider > .right_menu div:first',context).once(function(){
			$(this).click(function(){
				var imgSrc = $(this).find('img').attr("src");
				var index = imgSrc.lastIndexOf('/');
				var menuWidth = $('.right_menu .region-float-block').width();
				imgSrc = imgSrc.substring(0, index+1);
				if($(this).parent().hasClass("active_block")){
					imgSrc += 'arrow_white_active.png';					
					$('.right_menu').css('transform', 'translateX('+menuWidth+'px)').css('-ms-transform', 'translateX('+menuWidth+'px)').css('-webkit-transform', 'translateX('+menuWidth+'px)').css('-moz-transform', 'translateX('+menuWidth+'px)');
				}else{
					imgSrc += 'arrow_white.png';	
					$('.right_menu').css('transform', 'translateX(0)').css('-ms-transform', 'translateX(0)').css('-webkit-transform', 'translateX(0)').css('-moz-transform', 'translateX(0)');								
				}
				$(this).parent().toggleClass("active_block");
				$(this).find('img').attr("src",imgSrc);		
			});				
		});
	 }
	};
		// Drupal.behaviors.SubmenuChange = {
		// attach : function(context, settings) {	
			// $('.primary ul.menu_level1 span.submenu',context).once(function(){
		     // $(this).click(function(){
				// $(this).toggleClass("down");
				// $(this).next().toggle();
				// });
		// });
	 // }
	// };
    $(window).load(function(){
	parallaxEffect();		
		
		$('section.slider .right_menu').addClass("active_block");
		// Scroll Icon //		
		$('.top_scroll_icon').on("click",function(){
			$('html,body').animate({ scrollTop: 0 }, "2000");
		}); 
	  
		// Parallax section images effects
		var height =0,height1=0, homeAcademicsHeight=0,parallaxLeft=0,parallaxRight=0,parallaxTop=0,parallaxBottom=0,homeAthleticsHeight=0;var test;
		
		$(window).scroll(function(){
			var windowTop = $(window).scrollTop();			
			var windowHeight = $(window).height();
		if (window.innerWidth >= 641) {
			if(windowTop > windowHeight){
				$('.top_scroll_icon').show();
			}else{
				$('.top_scroll_icon').hide();
			}
			}
			$('.inner_container .parallax_section').each(function(){
				var parallaxElement = $(this).find(".parallax-panel");
				var panelHeight = parallaxElement.height();
				var offsetValue = parallaxElement.offset().top;
				//console.log(offsetValue);
				height = offsetValue - windowHeight;
				parallaxHeightFromTop = height + panelHeight;
				
				var scrollTop = $(window).scrollTop();
				if(scrollTop < height){
					parallaxOutside();					
				}				
				if((scrollTop > height)&&(scrollTop < parallaxHeightFromTop))
				{
					var selectedSection = parallaxElement;
					test= selectedSection.height() - (parallaxHeightFromTop - scrollTop);
					scrollParallax(selectedSection , test);	
					parallaxElement.animate({'background-position':'0px 0px'},5000);					
					//parallaxEffect();					
				}
			 });
	    });
});

/*Parallax functions*/
function scrollParallax(selectedSection ,test)
{
	var parallax_Top = $(selectedSection).find('.parallax_top').height();
	var parallax_TopValue= (parallax_Top/selectedSection.height())* test;
	var parallax_TopValueNew =  (($(selectedSection).find('.parallax_top').height()) * -1)+ parallax_TopValue;//80 will remove//		
	
	if(!$('body').hasClass('news-and-events'))		
		parallax_TopValueNew = parallax_TopValueNew+60;
	if($('body').hasClass('news-and-events'))
		parallax_TopValueNew = parallax_TopValueNew-20;
	$(selectedSection).find('.parallax_top').css('top',parallax_TopValueNew+'px' );
	
	var parallax_Left = $(selectedSection).find('.parallax_left').width();
	var parallax_LeftValue= (parallax_Left/selectedSection.height())* test;
	var parallax_LeftValueNew =  (($(selectedSection).find('.parallax_left').width()) * -1)+ parallax_LeftValue+3;
	$(selectedSection).find('.parallax_left').css('left',parallax_LeftValueNew+'px' );
	
	var parallax_Right = $(selectedSection).find('.parallax_right').width();
	var parallax_RightValue= (parallax_Right/selectedSection.height())* test;
	var parallax_RightValueNew =  (($(selectedSection).find('.parallax_right').width()) * -1)+ parallax_RightValue;
	if($(selectedSection).attr('id') == 'home_athletics')
		{
			if (window.innerWidth >= 1530)
				parallax_RightValueNew = parallax_RightValueNew + 280 ;
			if ((window.innerWidth) >= 1024 && (window.innerWidth) < 1530)
				parallax_RightValueNew = parallax_RightValueNew + 200 ;
		}
	$(selectedSection).find('.parallax_right').css('right',parallax_RightValueNew+'px' );
	
	var parallax_Bottom = $(selectedSection).find('.parallax_bottom').height()+30;
	var parallax_BottomValue= (parallax_Bottom/selectedSection.height())* test;
	var parallax_BottomValueNew =  (($(selectedSection).find('.parallax_bottom').height()) * -1)+ parallax_BottomValue;
	if($('body').hasClass('news-and-events'))		
		parallax_BottomValueNew = parallax_BottomValueNew-30;
	$(selectedSection).find('.parallax_bottom').css('bottom',parallax_BottomValueNew+'px' );						
	
}
//Set parallax top,height
function parallaxOutside(){
	$('.inner_container > .parallax_section section').each(function(){
		parallaxLeft = $(this).find('.parallax_left');
		parallaxLeft.css('left','-'+parallaxLeft.width()+'px');
		parallaxRight = $(this).find('.parallax_right');
		parallaxRight.css('right','-'+parallaxRight.width()+'px');
		parallaxTop = $(this).find('.parallax_top');
		parallaxTop.css('top','-'+parallaxTop.height()+'px');
		parallaxBottom = $(this).find('.parallax_bottom');
		parallaxBottom.css('bottom','-'+parallaxBottom.height()+'px');
	}); 
	$('.inner_container > .parallax_section > #home_academics , .inner_container > .parallax_section > #home_athletics').css('background-position','0px 40em');
}

/**
 * Parallax Scrolling Tutorial
 * For NetTuts+
 *  
 * Author: Mohiuddin Parekh
 *	http://www.mohi.me
 * 	@mohiuddinparekh   
 */
function parallaxEffect(){

// Cache the Window object
	$window = $(window);
				
   $('section[data-type="background"]').each(function(){
		 var $bgobj = $(this); // assigning the object
						
		  $(window).scroll(function() {
						
			// Scroll the background at var speed
			// the yPos is a negative value because we're scrolling it UP!								
			var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
			
			// Put together our final background position
			var coords = '50% '+ yPos + 'px';
		
			// Move the background
			$bgobj.css({ backgroundPosition: coords });
			
		}); // window scroll Ends
	
	 });
  }

/* 
 * Create HTML5 elements for IE's sake
 */

//document.createElement("article");
//document.createElement("section");

})(jQuery, Drupal, this, this.document);


/*Fields of Study -- Earl -- 1.23.15*/
/*
		$(function() {
			$( ".collapse dl" ).click(function() {
			$( this ).toggleClass( "active", 1000 );
			});
		});
*/