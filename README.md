myslide
========

图片轮播

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
