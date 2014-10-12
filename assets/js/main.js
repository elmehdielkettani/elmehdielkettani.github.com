$(document).ready(function(){
	// Create a clone of the menu, right next to original.
	var $originalNav = $('nav');
	var $clonedNav = $originalNav.clone().insertAfter('nav').addClass('cloned');

	$originalNav.addClass('original');

	$clonedNav.css('position','fixed')
		.css('top','0')
		.css('margin-top','0')
		.css('z-index','500')
		.hide();

	$clonedNav.find('.arrow')
		.removeClass('fa-chevron-down')
		.addClass('fa-chevron-up');

	scrollIntervalID = setInterval(stickIt, 10);


	$(".anchor").click(function(event) {
        event.preventDefault();
        var defaultAnchorOffset = 50;
        var $anchor = $('#' + this.hash.substring(1));

        var anchorOffset = $anchor.data('anchor-offset');
        if (!anchorOffset) // for when anchor doesn't have the offset attribute like Section 4
            anchorOffset = defaultAnchorOffset;

        $('html,body').animate({
            scrollTop: $anchor.offset().top - anchorOffset
        }, 500);
    });
});

function stickIt() {
	var $originalNav = $('nav.original');
	var $clonedNav = $('nav.cloned');
	var $header = $('header');

	if ($(window).scrollTop() >= $originalNav.offset().top) {
		// Cloned element should always have same left position and
		// width as original element.
		$('.cloned').css('left',$originalNav.offset().left+'px')
			.css('top',0)
			.css('width',$originalNav.width()+'px')
			.show();

		$('.original').css('visibility','hidden');
	} else {
		// Only show the original menu.
		$('.cloned').hide();
		$('.original').css('visibility','visible');
	}

	if ($(window).scrollTop() >= $header.offset().top + $header.height()/2) {
		$('nav .arrow').removeClass('fa-chevron-down')
			.addClass('fa-chevron-up')
			.parent().attr('href', '#top');
	} else {
		$('nav .arrow').removeClass('fa-chevron-up')
			.addClass('fa-chevron-down')
			.parent().attr('href', '#work');
	}
}