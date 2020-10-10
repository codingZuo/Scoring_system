var img = d3.select('.origin img'),
	zoom = d3.select('.zoom'),
	origin = d3.select('.origin');
d3.select('svg').on('mousemove', function (e){
	// console.log('herehere')
	e = e || window.event
	var x = e.clientX,
	    y = e.clientY;
	 console.log($('.origin img'))
     var imgwidth = $('.origin img')[0].offsetWidth,
     	 imgheight = $('.origin img')[0].offsetHeight,
     	 imgx = $('.origin img')[0].offsetLeft,
     	 imgy = $('.origin img')[0].offsetTop;
     d3.select('.details img').style('width', 2*imgwidth + 'px').style('height', 2* imgheight+'px');
     // console.log(imgheight, imgwidth)

     if (x < imgx || x > imgx + imgwidth || y < imgy || y > imgy + imgheight)
    {
        d3.select('.zoom').style('display', 'none');
        d3.select('.details').style('display', 'none');
        return;
    }

     // // 对.zoom盒子移动范围进行限制
     tx = x < imgx ? imgx : x;
     tx = x > (imgx + imgwidth - 100) ? (imgx + imgwidth - 100) : x;
     ty = y < imgy ? imgy : y;
     ty = y > (imgy + imgheight - 100) ? (imgy + imgheight - 100) : y;

     d3.select('.zoom').style('left', tx + 'px')
     d3.select('.zoom').style('top', ty + 'px')
     d3.select('.details').style('left', tx + 'px')
     d3.select('.details').style('top', ty + 100 + 'px')
     d3.select('.zoom').style('display', 'block');
	 d3.select('.details').style('display', 'block');
	 d3.select('.details img').style('left', -2 * (tx - imgx)+ 'px')
     d3.select('.details img').style('top', -2 *(ty - imgy) + 'px')
     console.log('here ', imgx, imgy, tx - imgx, ty -imgy)
	 // var details = document.querySelector('.details');
	 // details.style.backgroundPosition = ((tx - imgx) / imgwidth * 100  + '% ') + ((ty - imgy) / imgheight * 100 + '%')

})

d3.select('#left').on('mousemove', function (e){
	console.log('hover')
	e = e || window.event
	var x = e.clientX,
	    y = e.clientY;
    var imgwidth = $('.origin img')[0].offsetWidth,
     	 imgheight = $('.origin img')[0].offsetHeight,
     	 imgx = $('.origin img')[0].offsetLeft,
     	 imgy = $('.origin img')[0].offsetTop;
    if (x < imgx || x > imgx + imgwidth || y < imgy || y > imgy + imgheight)
    {
        d3.select('.zoom').style('display', 'none');
        d3.select('.details').style('display', 'none');
        return;
    }

})
