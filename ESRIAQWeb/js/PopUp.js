$.fn.popOpen = function(){
	
	popID = 'popup_name'; //Get Popup Name
	popURL = '#?w=600'; //Get Popup href to define size
	
	//Pull Query & Variables from href URL
	query= popURL.split('?');
	dim= query[1].split('&');
	popWidth = dim[0].split('=')[1]; //Gets the first query string value
	
	
	//Fade in the Popup and add close button
	$('#' + popID).fadeIn().css({ 'width': Number( popWidth ) }).prepend('<a href="#" class="close"><img src="/riskquim/css/img/close_pop.png" class="btn_close" title="Close Window" alt="Close" /></a>');
	
	//Define margin for center alignment (vertical + horizontal) - we add 80 to the height/width to accomodate for the padding + border width defined in the css
	var popMargTop = ($('#' + popID).height() + 80) / 2;
	var popMargLeft = ($('#' + popID).width() + 80) / 2;
	
	//Apply Margin to Popup
	$('#' + popID).css({ 
		'margin-top' : -popMargTop,
		'margin-left' : -popMargLeft
	});
	
	//Fade in Background
	$('body').append('<div id="fade"></div>'); //Add the fade layer to bottom of the body tag.
	$('#fade').css({'filter' : 'alpha(opacity=80)'}).fadeIn(); //Fade in the fade layer 
	
};

//Close Popups and Fade Layer
$('a.close, #fade').live('click', function() { //When clicking on the close or fade layer...
	$('#fade , .popup_block').fadeOut(function() {
		$('#fade, a.close').remove();  //fade them both out
	});
	return false;
});
