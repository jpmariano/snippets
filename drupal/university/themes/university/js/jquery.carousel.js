/*
 * jQuery Carousel Plugin v1.0
 * http://richardscarrott.co.uk/posts/view/jquery-carousel-plugin
 *
 * Copyright (c) 2010 Richard Scarrott
 *
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Requires jQuery v1.4+
 *
 */

// prototypal inheritance
if (typeof Object.create !== 'function') {
	Object.create = function (o) {
		function F() {}
		F.prototype = o;
		return new F();
	};
}

(function($) {
	// ie alias
	var headache;// = $.browser.msie && $.browser.version.substr(0,1)<9;

	// carousel
	var Carousel = {
		settings: {
			itemsPerPage: 1,
			itemsPerTransition: 1,
			noOfRows: 1,
			pagination: true,
			nextPrevLinks: true,
			speed: 'normal',
			easing: 'swing'
		},
		init: function(el, options) {
			if (!el.length) {return false;}
			this.options = $.extend({}, this.settings, options);
			this.itemIndex = 0;	
			this.container = el;
			this.runner = this.container.find('ul');
			this.items = this.runner.children('li');
			this.noOfItems = this.items.filter(function() {
    return $(this).css('display') == 'list-item';
}).length;
			this.setRunnerWidth();
			if (this.noOfItems <= this.options.itemsPerPage) {return false;} // bail if there are too few items to paginate
			this.insertMask();
			this.noOfPages = Math.ceil((this.noOfItems - this.options.itemsPerPage) / this.options.itemsPerTransition) + 1;
			if (this.options.pagination) {this.insertPagination();}
			if (this.options.nextPrevLinks) {this.insertNextPrevLinks();}
			this.updateBtnStyles();
		},
		insertMask: function() {
			this.runner.wrap('<div class="mask" />');
			this.mask = this.container.find('div.mask');

			// set mask height so items can be of varying height
			var maskHeight = this.runner.outerHeight(true);
			this.mask = this.container.find('div.mask');
			this.mask.height(maskHeight);
		},
		setRunnerWidth: function() {
			var newHeight = this.items.outerWidth(true) * this.noOfItems;
			if(newHeight > 450) newHeight = 450;
			
			this.noOfItems = Math.round(this.noOfItems / this.options.noOfRows);
			var width =  this.items.outerWidth(true) * this.noOfItems;
			//alert(this.items.outerWidth(true) +"@"+ this.noOfItems);
			this.runner.width(width);
		},
		insertPagination: function() {
			var i, links = [];
			this.paginationLinks = $('<ol class="pagination-links" />');
			for (i = 0; i < this.noOfPages; i++) {
				links[i] = '<li><a href="#item-' + i + '">' + (i + 1) + '</a></li>';
			}
			this.paginationLinks
				.append(links.join(''))
				.appendTo(this.container)
				.find('a')
					.bind('click.carousel', $.proxy(this, 'paginationHandler'));
		},
		paginationHandler: function(e) {
			this.itemIndex = e.target.hash.substr(1).split('-')[1] * this.options.itemsPerTransition;
			this.animate();
			return false;
		},
		insertNextPrevLinks: function() {
			this.prevLink = $('<a href="#" class="prev">Prev</a>')
								.bind('click.carousel', $.proxy(this, 'prevItem'))
								.appendTo(this.container);
			this.nextLink = $('<a href="#" class="next">Next</a>')
								.bind('click.carousel', $.proxy(this, 'nextItem'))
								.appendTo(this.container);
		},
		nextItem: function() {
			this.itemIndex = this.itemIndex + this.options.itemsPerTransition;
			this.animate();
			return false;
		},
		prevItem: function() {
			this.itemIndex = this.itemIndex - this.options.itemsPerTransition;
			this.animate();
			return false;
		},
		updateBtnStyles: function() {
			if (this.options.pagination) {
				this.paginationLinks
					.children('li')
						.removeClass('current')
						.eq(Math.ceil(this.itemIndex / this.options.itemsPerTransition))
							.addClass('current');
			}

			if (this.options.nextPrevLinks) {
				this.nextLink
					.add(this.prevLink)
						.removeClass('disabled');
				if (this.itemIndex === (this.noOfItems - this.options.itemsPerPage)) {
					this.nextLink.addClass('disabled');
				} 
				else if (this.itemIndex === 0) {
					this.prevLink.addClass('disabled');
				}
			}
		},
		animate: function() {
			var nextItem, pos;
			// check whether there are enough items to animate to
			if (this.itemIndex > (this.noOfItems - this.options.itemsPerPage)) {
				this.itemIndex = this.noOfItems - this.options.itemsPerPage; // go to last panel - items per transition
			}
			if (this.itemIndex < 0) {
				this.itemIndex = 0; // go to first
			}
			nextItem = this.items.eq(this.itemIndex);
			pos = nextItem.position();

			if (headache) {
				this.runner
					.stop()
					.animate({left: -pos.left}, this.options.speed, this.options.easing);
			}
			else {
				this.mask
					.stop()
					.animate({scrollLeft: pos.left}, this.options.speed, this.options.easing);
			}
			this.updateBtnStyles();
		}
	};
	
	// bridge
	$.fn.carousel = function(options) {
		return this.each(function() {
			var obj = Object.create(Carousel);
			obj.init($(this), options);
			$.data(this, 'carousel', obj);
		});
	};
	
	// updated carousel
	var updatedCarousel = {
		settings: {
			itemsPerPage: 1,
			itemsPerTransition: 1,
			noOfRows: 1,
			pagination: true,
			nextPrevLinks: true,
			speed: 'normal',
			easing: 'swing',
			activeFilter: "all",
		},
		init: function(el, options) {
			if (!el.length) {return false;}
			this.options = $.extend({}, this.settings, options);
			this.itemIndex = 0;	
			this.container = el;
			this.runner = this.container.find('ul');
			this.items = this.runner.children('li');
			var i = 0;
			this.items.each(function(){
				if($(this).css('display') == 'list-item')
				i++;
			});
			
			var activeClass =  this.options.activeFilter;
			
			this.noOfItems = this.items.filter(function() {
    return $(this).css('display') == 'list-item' && ($(this).hasClass(activeClass) || activeClass == 'all');
}).length;
			this.noOfItemsActual = this.items.filter(function() {
    return $(this).css('display') == 'list-item' && ($(this).hasClass(activeClass) || activeClass == 'all');
}).length;

			this.setRunnerWidth();
			this.updateIsotope();
			if (this.noOfItems <= this.options.itemsPerPage) {return false;} // bail if there are too few items to paginate
			this.insertMask();
			this.noOfPages = Math.ceil((this.noOfItems - this.options.itemsPerPage) / this.options.itemsPerTransition) + 1;
			
			if (this.options.pagination) {this.insertPagination();}
			if (this.options.nextPrevLinks) {this.insertNextPrevLinks();}
			this.updateBtnStyles();
		},
		insertMask: function() {
			this.runner.wrap('<div class="mask" />');
			this.mask = this.container.find('div.mask');

			// set mask height so items can be of varying height
			var maskHeight = this.runner.outerHeight(true);
			this.mask = this.container.find('div.mask');
			this.mask.height(maskHeight);
			
			var itemWidth = this.items.width();
			var maskWidth = itemWidth * this.options.itemsPerPage;
			this.mask.width(maskWidth);
		},
		setRunnerWidth: function() {
			this.consumedNoItems = this.noOfItems;
			this.noOfItems = Math.ceil(this.noOfItems / this.options.noOfRows);
			if(this.consumedNoItems < 15){ 
				this.consumedNoItems = 5;
			}else{
				this.consumedNoItems = this.noOfItems;
			}
			//var width =  this.items.outerWidth(true) * this.noOfItems;
			var width =  this.items.outerWidth(true) * this.consumedNoItems;
			this.runner.width(width);
		},
		updateIsotope: function(){
			// height
			var itemHeight = this.items.height();
			var itemWidth = this.items.width();
			var noOfRowsDefined = this.options.noOfRows;
			var maxHeight = itemHeight * this.options.noOfRows;
			var newHeight = this.items.outerWidth(true) * this.noOfItemsActual;
			if(newHeight > maxHeight) newHeight = maxHeight;
			this.runner.height(newHeight);
			// items position
			var activeClass =  this.options.activeFilter;
			var consumedNoItems = this.consumedNoItems;
			var itemsPerPage = this.options.itemsPerPage;
			this.items.filter(function() {return $(this).css('display') === 'list-item' && ($(this).hasClass(activeClass) || activeClass == 'all');}).each(function(key, value){
				//alert($(this).attr("class")+"@"+$(this).html());
				//if($(this).hasClass(activeClass)){
					var indexPosition = key;
					key = key + 1;
					var left = 0;
					var top = 0;
					var floorValue = 0;
					var modValue = 0;
					if(consumedNoItems == 5){
						if(key > itemsPerPage){
							modValue = Math.floor(indexPosition / itemsPerPage);
						}
						floorValue = (key - 1) % itemsPerPage;
					}else{
						floorValue = Math.floor(indexPosition / noOfRowsDefined);
						modValue = indexPosition; 
						if(key > noOfRowsDefined){
							modValue = (key - 1) % noOfRowsDefined;
						}
					}
					if(key > 1){left = floorValue * itemWidth; top = modValue * itemHeight; }
					$(this).css({"left": left, "top": top});
					key++;
				//}
			});
		},
		insertPagination: function() {
			var i, links = [];
			this.paginationLinks = $('<ol class="pagination-links" />');
			for (i = 0; i < this.noOfPages; i++) {
				links[i] = '<li><a href="#item-' + i + '">' + (i + 1) + '</a></li>';
			}
			this.paginationLinks
				.append(links.join(''))
				.appendTo(this.container)
				.find('a')
					.bind('click.carousel', $.proxy(this, 'paginationHandler'));
		},
		paginationHandler: function(e) {
			this.itemIndex = e.target.hash.substr(1).split('-')[1] * this.options.itemsPerTransition;
			this.animate();
			return false;
		},
		insertNextPrevLinks: function() {
			$('<div class="pagination-nextprev-link"></div>').appendTo(this.container);
			this.prevLink = $('<a href="#" class="prev">Prev</a>')
								.bind('click.carousel', $.proxy(this, 'prevItem'))
								.appendTo(this.container.find(".pagination-nextprev-link"));
			this.nextLink = $('<a href="#" class="next">Next</a>')
								.bind('click.carousel', $.proxy(this, 'nextItem'))
								.appendTo(this.container.find(".pagination-nextprev-link"));
			this.container.find(".pagination-nextprev-link").clone(true).prependTo(this.container).addClass("cloned");
		},
		nextItem: function() {
			this.itemIndex = this.itemIndex + this.options.itemsPerTransition;
			this.animate();
			return false;
		},
		prevItem: function() {
			this.itemIndex = this.itemIndex - this.options.itemsPerTransition;
			this.animate();
			return false;
		},
		updateBtnStyles: function() {
			if (this.options.pagination) {
				this.paginationLinks
					.children('li')
						.removeClass('current')
						.eq(Math.ceil(this.itemIndex / this.options.itemsPerTransition))
							.addClass('current');
			}

			if (this.options.nextPrevLinks) {
				this.nextLink
					.add(this.prevLink)
						.removeClass('disabled');
				if (this.itemIndex === (this.noOfItems - this.options.itemsPerPage)) {
					this.nextLink.addClass('disabled');
				} 
				else if (this.itemIndex === 0) {
					this.prevLink.addClass('disabled');
				}
			}
		},
		animate: function() {
			var nextItem, pos;
			// check whether there are enough items to animate to
			if (this.itemIndex > (this.noOfItems - this.options.itemsPerPage)) {
				this.itemIndex = this.noOfItems - this.options.itemsPerPage; // go to last panel - items per transition
			}
			if (this.itemIndex < 0) {
				this.itemIndex = 0; // go to first
			}
			nextItem = this.items.eq(this.itemIndex);
			//pos = nextItem.position();
			pos = this.items.width() * this.itemIndex;

			if (headache) {
				this.runner
					.stop()
					.animate({left: -pos.left}, this.options.speed, this.options.easing);
			}
			else {
				this.mask
					.stop()
					.animate({scrollLeft: pos}, this.options.speed, this.options.easing);
			}
			this.updateBtnStyles();
		}
	};
	
	// bridge
	$.fn.updatedCarousel = function(options) {
		return this.each(function() {
			var obj = Object.create(updatedCarousel);
			obj.init($(this), options);
			$.data(this, 'updatedCarousel', obj);
		});
	};
	
})(jQuery);