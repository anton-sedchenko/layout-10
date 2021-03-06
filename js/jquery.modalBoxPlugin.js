(function($){

	$.fn.modalBoxPlugin = function(prop){

		let popupProps = $.extend({
			height: '250',
			width: '500',
		}, prop);
		
		if (prop.type === 'post deleting') {
			return this.click(function(e){
				addModalBoxOverlay();
				addModalBox(popupProps);
				addModalBoxOverlayStyles(popupProps);
						
				$('.modal-box').fadeIn();
			});	
		}
		
		if (prop.type === 'subscribing') {
			addModalBoxOverlay();
			addModalBox(popupProps);
			addModalBoxOverlayStyles(popupProps);
			$('.modal-box').fadeIn();

			return;
		}
				 		
		return this;
	};
})(jQuery);

function addModalBoxOverlay() {
	let overlay = $('<div class="modal-box-overlay"></div>');

	$(overlay).appendTo('body');
}

function addModalBoxOverlayStyles(prop) {
	let pageHeight = $(document).height();
	let pageWidth = $(window).width();
	let mediaQuery = window.matchMedia('only screen and (max-width: 576px)');
	let modalBoxWidth = prop.width + 'px';

	if (mediaQuery.matches) {
	    modalBoxWidth = '90%';
	}

	$('.modal-box-overlay').css({
		'position': 'absolute',
		'bottom': 0,
		'top': 0,
		'width': '100%',
		'background-color': 'rgba(0,0,0, .5)', 
		'z-index': '10',
		'cursor': 'pointer'
	});
	$('.modal-box-close').css({
	    'position': 'absolute',
	    'top': '10px',
	    'right': '10px',
		'width': '30px',
		'height': '30px'
	});
	$('.modal-box-close-cross').css({
		'width': '100%',
		'height': '100%',
		'background': 'linear-gradient(to right, transparent 45%, #000 45%, #000 55%, transparent 55%), linear-gradient(to top, transparent 45%, #000 45%, #000 55%, transparent 55%)',
		'transform': 'rotate(45deg)'
	});
	$('.modal-box').css({
		'background-color': '#fff',
		'position': 'fixed',
		'top': '50vh',
		'left': '50%',
		'transform': 'translate(-50%, -50%)',
		'height': prop.height + 'px',
		'width': modalBoxWidth,
		'padding': '40px',
		'font-size': '30px',
		'text-align': 'center',
		'color': prop.textColor,
		'display': 'flex',
		'flex-direction': 'column',
		'justify-content': 'space-between',
		'align-items': 'center',
		'border-radius': '10px',
		'z-index': '30'
	});
}

function addModalBox(prop) {
	let modalBox = $('<div class="modal-box enabled"><a href="#" class="modal-box-close"><div class="modal-box-close-cross"></div></a><p>' + prop.text + '</p><button class="btn section-blog__btn modal-box-btn">Ok</button></div>');

	$(modalBox).appendTo('body');
	$('.modal-box-close').click(function() {
        $('.modal-box-overlay').fadeOut().remove();
        $('.modal-box').fadeOut().remove();
	});
	$('.modal-box-overlay').click(function() {
        $('.modal-box-overlay').fadeOut().remove();
        $('.modal-box').fadeOut().remove();
	});
    $(document).keyup(function(e) {
    	if (e.key === 'Escape') {
    	    $('.modal-box-overlay').fadeOut().remove();
        	$('.modal-box').fadeOut().remove();	
	    }
	});
	$('.modal-box-btn').click(function() {
        $('.modal-box-overlay').fadeOut().remove();
        $('.modal-box').fadeOut().remove();
	});
}

$(document).ready(function() {
	$('.section-blog__delete-btn').modalBoxPlugin({
		text: 'Are you sure you want to delete this post?',
		textColor: 'red',
		type: 'post deleting'
	});
});

$(window).on('load', function() {
	setTimeout(function() {
		if ($('.modal-box').hasClass('enabled')) {

			return false;
		} else {
			$(document).modalBoxPlugin({
				text: 'Subscribe to this blog and be the first to know about updates',
				textColor: 'green',
				type: 'subscribing'
			});
		}
	}, 10000);
});
