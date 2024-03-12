$('.side-heading').click(function() {
    $('.side-heading').siblings().removeClass('highlight');
    $(this).siblings().addClass('highlight');
    
});