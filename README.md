myslide
========

图片轮播
html:
<div class="slidewarp">
	<ul class="slide">
		<li><img src="images/1.jpg"></li>
		<li><img src="images/2.jpg"></li>
		<li><img src="images/3.jpg"></li>
		<li><img src="images/4.jpg"></li>
		<li><img src="images/5.jpg"></li>
	</ul>
	<div class="ctrl">
		<span class="ctrl_item ctrl_item_active"></span>
		<span class="ctrl_item"></span>
		<span class="ctrl_item"></span>
		<span class="ctrl_item"></span>
		<span class="ctrl_item"></span>
	</div>
	<a class="prev slide_change" href="javascript:;"></a>
	<a class="next slide_change" href="javascript:;"></a>
</div>

css: 在css/slide.css文件中


// 渐变播放
var slide = new slide({
	change:'opacity',
	changeTime:500
});

// 左右无缝滚动播放
var slide = new slide({
	change:'x',
	changeTime:500
});

// 上下无缝滚动播放
var slide = new slide({
	change:'y',
	changeTime:500
});

参数列表：

change: 1.'opacity' (默认)
		2.'x' 
		3.'y'

changeTime: 默认1000毫秒
