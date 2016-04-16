jQuery(document).ready(function($) {

	// responsive menu toggle
	$('nav.resp-true ul.menu li.title').click(function() {
		var selector = "nav.resp-true";
		var selector_title = selector + " ul.menu li.title";
		var selector_close = selector + " ul.menu li.close-btn";
		$(selector).css('height', 'auto');
		$(selector_title).hide();
		$(selector_close).css('top', '0').show();
	});
	
	$('nav.resp-true ul.menu li.close-btn').click(function() {
		var selector = "nav.resp-true";
		var selector_title = selector + " ul.menu li.title";
		var selector_close = selector + " ul.menu li.close-btn";
		$(selector).css('height', '55');
		$(selector_close).hide();
		$(selector_title).show();
	});


});
