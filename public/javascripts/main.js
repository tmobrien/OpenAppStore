
$(function() {
	// Turn on Animation for App Tiles
	$('.bar').mosaic({
		animation: 'slide',
		speed: 150,
	});
	
	$('#appsubmit').click(function(e) {
		e.preventDefault();
		$('#addform').submit();
	})
});
