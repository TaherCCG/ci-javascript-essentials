$('#reset').click(function(){
	$(this).siblings().children().removeClass('red').removeClass('yellow').removeClass('green').removeClass('large-font');
});

$('#card-btn-1').click(function(){
	$('#card p').first().addClass('red');
});

$('#card-btn-2').click(function(){
	$('#card p').last().addClass('yellow');
});

$('#filter').click(function(){
	$('p').filter('.special').addClass('green');
});
