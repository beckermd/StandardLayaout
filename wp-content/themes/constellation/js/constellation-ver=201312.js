jQuery(function($) {
	// instantiate the home slider height: 350, width: 978,
	if ($('#home_slider')) {
		$('#home_slider').bjqs({
			animtype: 'fade',
			animspeed: 6000,
			width: 978, 
			height: 115,
			nexttext: '&gt;',
			prevtext: '&lt;',
			showmarkers: false,
			centercontrols: false
		});
	}

	if ($('#page_slider')) {
		$('#page_slider').bjqs({
			animtype: 'fade',
			animspeed: 6000,
			width: 978,
			height: 220,
			nexttext: '&gt;',
			prevtext: '&lt;',
			showcontrols: false,
			showmarkers: false,
			centercontrols: false
		});
	}

});
