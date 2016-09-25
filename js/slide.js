var slide = function (cfg) {
	
	var cfg =  cfg || {};

	cfg = $.extend({
		change:'opacity'
	},cfg);
	
	var slidewarp = $('.slidewarp');
	var slide = $('.slide');
	var slide_item = slide.find('li');
	var ctrl = $('.ctrl');
	var ctrl_item = $('.ctrl_item');
	var slide_change = $('.slide_change');
	var index = 0;
	var len = slide_item.length;
	var timer = null;

	switch (cfg.change) {
		case 'opacity':
			// statements_1
			ctrl.css({
				marginLeft: -($('.ctrl').width()/2)
			});
			slide_item.hide().css('opacity', '0');
			slide_item.eq(index).show().css('opacity', '1');
			break;
		case 'x':
			// statements_2
			ctrl.css({
				marginLeft: -($('.ctrl').width()/2)
			});

			slide.css('width',slide.width()*len);

			slide_item.css({
				float: 'left',
				position: 'relative'
			});
			break;
		case 'y':
			// statements_3
			break;
		default:
			// statements_def
			break;
	}


	

	ctrl_item.on('click', function(event) {
		var old = index;
		index = $(this).index();
		change(index,old);
	});

	slidewarp.on('mouseover', function(event) {
		clearInterval(timer);
		slide_change.css('opacity', '.6');
	});

	slidewarp.on('mouseleave', function(event) {
		autoStart();
		slide_change.css('opacity', '.2');
	});


	$('.prev').on('click', function(event) {
		var old = index;

		if (index == 0) {
			index = len-1;
		}else {
			index--;
		}
		change(index,old);
	});

	$('.next').on('click', function(event) {
		var old = index;
		if (index == len-1) {
			index = 0;
		}else {
			index++;
		}
		change(index,old);
	});

	autoStart();

	function autoStart (argument) {
		timer = setInterval(function (e) {
		var old = index;
		if (index >= len-1) {
			index = 0;
		}else {
			index++;
		}
		change(index,old);
	},2000);
	}

	function change (show,hiden) {
		switch (cfg.change) {
		case 'opacity':
			// statements_1
			slide_item.eq(hiden).animate({opacity:0},1000);
			slide_item.eq(show).show().animate({opacity:1},1000);
			break;
		case 'x':
			// statements_2
			var x = show * slide_item.width();
			slide.animate({'marginLeft':-x});
			break;
		case 'y':
			// statements_3
			break;
		}
		ctrl_item.eq(show).addClass('ctrl_item_active').siblings().removeClass('ctrl_item_active');
	}

};
	