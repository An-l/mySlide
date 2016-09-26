var slide = function(cfg) {

	var cfg = cfg || {};

	cfg = $.extend({
		change: 'opacity',
		changeTime: 1000
	}, cfg);

	var slidewarp = $('.slidewarp');
	var slide = $('.slide');
	// var slide_item = slide.find('li');
	var ctrl = $('.ctrl');
	var ctrl_item = $('.ctrl_item');
	var slide_change = $('.slide_change');
	var index = 0;
	// var len = slide_item.length;
	var timer = null;
	var height = slidewarp.height();

	//ctrl居中
	ctrl.css({
		marginLeft: -($('.ctrl').width() / 2)
	});

	switch (cfg.change) {
		case 'opacity':
			// statements_1
			slide.find('li').hide().css('opacity', '0');
			slide.find('li').eq(index).show().css('opacity', '1');
			break;
		case 'x':
			// statements_2
			// 为了实现无缝轮播
			// 将第一个li复制添加到ul最后
			slide.append(slide.find('li').eq(0).clone());

			slide.css('width', slide.width() * slide.find('li').length);

			slide.find('li').css({
				float: 'left',
				position: 'relative'
			});

			break;
		case 'y':
			// statements_3
			// 为了实现无缝轮播
			// 将第一个li复制添加到ul最后
			slide.append(slide.find('li').eq(0).clone());

			slide.css('height', height * slide.find('li').length);
			slide.find('li').css({
				float: 'left',
				position: 'relative',
				height: height
			});
			slide.find('li').find('img').css('height', height);
			break;
		default:
			alert('请检查change参数，只包括opacity、x、y');
			break;
	}

	ctrl_item.on('click', function(event) {
		var old = index;
		index = $(this).index();
		change(index, old);
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
			index = slide.find('li').length - 2;
		} else {
			index--;
		}
		change(index, old);
	});

	$('.next').on('click', function(event) {
		var old = index;
		if (index == slide.find('li').length - 1) {
			index = 0;
		} else {
			index++;
		}
		change(index, old);
	});

	autoStart();

	function autoStart(argument) {
		timer = setInterval(function(e) {
			var old = index;
			if (index >= slide.find('li').length - 1) {
				index = 0;
			} else {
				index++;
			}
			change(index, old);
		}, 2000);
	}

	function change(show, hiden) {
		switch (cfg.change) {
			case 'opacity':
				// statements_1
				slide.find('li').eq(hiden).stop().animate({
					opacity: 0
				}, cfg.changeTime);
				slide.find('li').eq(show).stop().show().animate({
					opacity: 1
				}, cfg.changeTime);
				break;
			case 'x':
				// statements_2
				var x = show * slide.find('li').width();
				slide.stop().animate({
					'marginLeft': -x
				}, cfg.changeTime, function() {
					// 为了实现无缝轮播
					// 当移动到最后一张图片时
					if (show == slide.find('li').length - 1) {
						slide.css('marginLeft', 0);
						index = show = 0;
						ctrl_item.eq(show).addClass('ctrl_item_active').siblings().removeClass('ctrl_item_active');
					}
				});
				break;
			case 'y':
				// statements_3
				var y = show * slide.find('li').height();
				slide.stop().animate({
					'marginTop': -y
				}, cfg.changeTime, function() {
					// 为了实现无缝轮播
					// 当移动到最后一张图片时
					if (show == slide.find('li').length - 1) {
						slide.css('marginTop', 0);
						index = show = 0;
						ctrl_item.eq(show).addClass('ctrl_item_active').siblings().removeClass('ctrl_item_active');
					}
				});
				break;
		}
		ctrl_item.eq(show).addClass('ctrl_item_active').siblings().removeClass('ctrl_item_active');
	}

};