// JavaScript Document


	$(document).ready(function () {
		// initiates responsive slide gallery			
		var settings = function() {
			var dynamicWidth =$(window).width();
			$('.parallax_section div.home_howard_slider .slide img').css('padding-right',dynamicWidth * 0.02745);
			$('.parallax_section div.home_howard_slider .slide img').css('padding-left',dynamicWidth * 0.02745);
			dynamicWidth = dynamicWidth  * 0.2516;
			var settings1 = {
				mode: 'vertical',
				infiniteLoop:false,
				slideWidth: 451,
				minSlides: 3,
				maxSlides: 3,
				moveSlides: 1	
			};
			var settings2 = {
				infiniteLoop:false,
				slideWidth: dynamicWidth,
				minSlides: 1,
				maxSlides: 4,
				moveSlides: 1
			};
			return ($(window).width()<=640) ? settings1 : settings2;
		}

		var mySlider;

		function tourLandingScript() {
			mySlider.reloadSlider(settings());
		}

		mySlider = $('.parallax_section div.home_howard_slider').bxSlider(settings());
		$(window).resize(tourLandingScript);

				
		var settings_1 = function() {
			var dynamicWidth =$(window).width();
			$('#news_events-carousel .slide').css('padding-right',dynamicWidth * 0.0130718);
			$('#news_events-carousel .slide').css('padding-left',dynamicWidth * 0.0130718);
			dynamicWidth = dynamicWidth  * 0.202614;
			var settings1 = {
				mode: 'vertical',
				infiniteLoop:false,
				slideWidth: 270,
				minSlides: 2,
				maxSlides: 2,
				moveSlides: 1
			};
			var settings2 = {
				infiniteLoop:false,
				slideWidth: dynamicWidth,
				minSlides: 1,
				maxSlides: 5,
				moveSlides: 1
			};
			return ($(window).width()<=640) ? settings1 : settings2;
		}

		var mySlider_1;

		function tourLandingScript_1() {
			mySlider_1.reloadSlider(settings_1());
		}

		mySlider_1 = $('#announcements-carousel,#events-carousel,#news_events-carousel').bxSlider(settings_1());
		$(window).resize(tourLandingScript_1);

		buttonClick();
	});
	

	$(window).resize(function(){
			if($(window).width() > 640)	{
							
					entireScript();
					buttonClick();
			var dynamicWidth =$(window).width();
			$('.parallax_section div.home_howard_slider .slide').css('margin-right',dynamicWidth * 0.02287);
			$('.parallax_section div.home_howard_slider .slide').css('margin-left',dynamicWidth * 0.03267);
			$('#news_events-carousel .slide').css('padding-right',dynamicWidth * 0.0130718);
			$('#news_events-carousel .slide').css('padding-left',dynamicWidth * 0.0130718);
			}
			else{
				//$('.bx-wrapper .bx-viewport').css('height','1300px');
				//$('#home_howard .bx-wrapper .bx-viewport').css('height','1483px');
			}
	});
		
	function entireScript(){		
		var sectionHeight = 0;
		if($('body').hasClass('news_events'))
			sectionHeight = 400/1530;
		else if($('body').hasClass('schools_colleges'))
			sectionHeight = 583/1530;
		else
			sectionHeight=1000/1530;
		sectionHeight = sectionHeight * $('.inner_container').width();
		$('.parallax_section > section').css('height',sectionHeight);
		}
	
	
	function buttonClick(){
		 // Slider Gray Event for announcements section//
		  $('.bx-next').click(function(){
			  var sectionDiv = $(this).parent().parent().parent();
			  if(!$(sectionDiv).find('div > div > .slide:last-child').hasClass('new_gray')){
				  if(!$(sectionDiv).find('div > div > .slide:last-child').hasClass('gray')){
					  if($(sectionDiv).parent().attr('id') === 'home_howard'){
					    var backgroundPos = $('#home_howard').css('backgroundPosition').split(" ");
					$('#home_howard').animate({'background-position': parseInt(backgroundPos[0].replace("px",""))+20 +'px top'},1000);	
					  }
					$(sectionDiv).find('div > div > .slide').each(function() {
							var selected_class = $(this);
							if(selected_class.hasClass('new_gray')){
								selected_class.removeClass('new_gray').addClass('gray');					
								}
					});		  
					$(sectionDiv).find('div > div > .slide').each(function() {
						var selected_class = $(this);
						if(selected_class.hasClass('gray')){
							selected_class.next().addClass('new_gray');
							selected_class.removeClass('gray');					
							}
					});
				  }
			  }
		});
		  $('.bx-prev').click(function(){	
			  var sectionDiv = $(this).parent().parent().parent();			
			  if(!$(sectionDiv).find('div > div > .slide:first-child').hasClass('gray')){
				  if(!$(sectionDiv).find('div > div > .slide:first-child').hasClass('new_gray')){
					  if($(sectionDiv).parent().attr('id') === 'home_howard'){
					    var backgroundPos = $('#home_howard').css('backgroundPosition').split(" ");
					$('#home_howard').animate({'background-position': parseInt(backgroundPos[0].replace("px",""))-20 +'px top'},1000);	
					  }
					$(sectionDiv).find('div > div > .slide').each(function() {
						var selected_class = $(this);
						if(selected_class.hasClass('new_gray')){
							selected_class.removeClass('new_gray').addClass('gray');					
							}
					});		  
					$(sectionDiv).find('div > div > .slide').each(function() {
						var selected_class = $(this);
						if(selected_class.hasClass('gray')){
							selected_class.prev().addClass('new_gray');
							selected_class.removeClass('gray');					
							}
					});
				  }
			  }
		});	
		}
	
   $(window).load(function(){ 	
			 var addNewSpan = '<span class="arrow submenu"></span>';
		$('.primary ul.menu_level1 ul').each(function(){
			$(this).before(addNewSpan);
			});
			if($(window).width() > 640)
				entireScript();					
			$('.primary ul.menu_level1 span.submenu').click(function(){
				$(this).toggleClass("down");
				$(this).next().toggle();
				});
			$('header .responsive_menu_icon a').click(function(){
				$(this).parent().next().toggle();
			});
			
			if($(window).width()>1024){
				$(window).scroll(function(){
				
					// Parallax section images effects
					var height =0,height1=0, homeAcademicsHeight=0,parallaxLeft=0,parallaxRight=0,parallaxTop=0,parallaxBottom=0,homeAthleticsHeight=0;var test;
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
					var sectionSlider = $('.inner_container > section.slider').height();
					var alertSection = $('.inner_container > .alert_section').height();
					var newsEvents = $('.inner_container > .news_events').height();
					var windowHeight = $(window).height();
					var homeAcademics = $('.inner_container > .parallax_section > #home_academics').height();
					var homeHoward = $('.inner_container > .parallax_section > #home_howard').height();
					var homeAthletics = $('.inner_container > .parallax_section > #home_athletics').height();
					height = sectionSlider + alertSection + newsEvents - windowHeight ; 	
					height1 = sectionSlider + alertSection + newsEvents + homeAcademics +homeHoward - windowHeight ;
					if($('body').hasClass('news_events'))
						{
							height=0;
							var mainTopSection=$('.inner_container > .main_top_section').height();
							var announcements= $('.inner_container > .announcements').height();
							var events= $('.inner_container > .events').height();
							height = 145 + sectionSlider +mainTopSection + announcements + events -windowHeight;
						}
					if($('body').hasClass('schools_colleges'))
						{
							height=0;
							var mainTopSection= $('.inner_container > .main_top_section').height();
							var announcements= $('.inner_container > .announcements').height();
							var events= $('.inner_container > .three_col_section').height();
							height = 145 + sectionSlider +mainTopSection + announcements + events -windowHeight;
						}
					homeAcademicsHeight = height +homeAcademics;									
					homeAthleticsHeight = height1 +homeAthletics;
					var scrollTop = $(window).scrollTop();
					if(scrollTop < height){
						parallaxOutside();					
						}				
					if((scrollTop > height)&&(scrollTop < homeAcademicsHeight))
						{
							var selectedSection = $('.inner_container > .parallax_section > #home_academics');
							test= selectedSection.height() - (homeAcademicsHeight - scrollTop);
							scrollParallax(selectedSection , test);	
							$('.inner_container > .parallax_section > #home_academics').animate({'background-position':'0px 0px'},5000);							
						}
					if((scrollTop > height1)&&(scrollTop < homeAthleticsHeight))
						{
							var selectedSection = $('.inner_container > .parallax_section > #home_athletics');						
							test= selectedSection.height() - (homeAthleticsHeight - scrollTop);
							scrollParallax(selectedSection , test);
							$('.inner_container > .parallax_section > #home_athletics').animate({'background-position':'0px 0px'},5000);											
						}	
			
				
				
				function scrollParallax(selectedSection ,test)
						{
						var parallax_Top = $(selectedSection).find('.parallax_top').height()+ 80;
						var parallax_TopValue= (parallax_Top/selectedSection.height())* test;
						var parallax_TopValueNew =  (($(selectedSection).find('.parallax_top').height()) * -1)+ parallax_TopValue;//80 will remove//		
						
						if(!$('body').hasClass('news_events'))		
							parallax_TopValueNew = parallax_TopValueNew+60;
						if($('body').hasClass('news_events'))		
							parallax_TopValueNew = parallax_TopValueNew-20;
						$(selectedSection).find('.parallax_top').css('top',parallax_TopValueNew+'px' );
						
						var parallax_Left = $(selectedSection).find('.parallax_left').width();
						var parallax_LeftValue= (parallax_Left/selectedSection.height())* test;
						var parallax_LeftValueNew =  (($(selectedSection).find('.parallax_left').width()) * -1)+ parallax_LeftValue;
						$(selectedSection).find('.parallax_left').css('left',parallax_LeftValueNew+'px' );
						
						var parallax_Right = $(selectedSection).find('.parallax_right').width();
						var parallax_RightValue= (parallax_Right/selectedSection.height())* test;
						var parallax_RightValueNew =  (($(selectedSection).find('.parallax_right').width()) * -1)+ parallax_RightValue;
						$(selectedSection).find('.parallax_right').css('right',parallax_RightValueNew+'px' );
						
						var parallax_Bottom = $(selectedSection).find('.parallax_bottom').height()+30;
						var parallax_BottomValue= (parallax_Bottom/selectedSection.height())* test;
						var parallax_BottomValueNew =  (($(selectedSection).find('.parallax_bottom').height()) * -1)+ parallax_BottomValue;
						if($('body').hasClass('news_events'))		
							parallax_BottomValueNew = parallax_BottomValueNew-30;
						$(selectedSection).find('.parallax_bottom').css('bottom',parallax_BottomValueNew+'px' );						
						
					}
				});
			}
		
		//trigger function
		$('.announcements > .bx-has-controls-direction > .bx-controls-direction > .bx-prev').click(function(){
			$('.announcements .bx-wrapper .bx-prev').trigger('click');
			});
		
		$('.announcements > .bx-has-controls-direction > .bx-controls-direction > .bx-next').click(function(){
			$('.announcements .bx-wrapper .bx-next').trigger('click');
			});
		//Right side menu for sub pages//
		/*$('.main_top_section .two_col_section .two_col_right li').click(function(){
				$(this).find('ul').toggle();
			});*/
			
		// Right side menu Toggle //
		var height= $('section.slider > .right_menu > ul').height();
		$('section.slider > .right_menu > div > span').css('height',height);
		$('section.slider > .right_menu > ul').css('display','none');
		$('section.slider > .right_menu > div').click(function(){
			if($(this).parent().hasClass("active"))
				$(this).find('img').attr("src","images/arrow_white.png");
			else			
				$(this).find('img').attr("src","images/arrow_white_active.png");
			$(this).parent().toggleClass("active");
			
		});
		
		// Scroll Icon //		
		$('.top_scroll_icon').on("click",function(){
			$('html,body').animate({ scrollTop: 0 }, "2000");
		}); 
		
		// Mani slider //
		$('.flexslider').flexslider({
		  animation: "fade",
		  start: function(slider){
			$('body').removeClass('loading');
		  }
		});  			
	 		
});




