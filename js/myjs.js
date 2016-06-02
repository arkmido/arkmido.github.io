$(document).ready(function(){

	 
	/*  ==========================================
	*	~~ Materialize Section ~~
	*/	
	$('.button-collapse').sideNav();
	$('.parallax').parallax();
	$('.slider').slider({fullwidth: false});
	/* End of script ========================== */


	/*  ==========================================
	*	~~ Scroll animate script ~~
	*/
	$('a[href*=\\#').each(function(){

		if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
			&& location.hostname == this.hostname && this.hash.replace(/#/,'')) {

			var $targetId = $(this.hash);
			var $targetAnchor = $('[name='+this.hash.slice(1)+']');
			var $target = $targetId.length ? $targetId : 
								$targetAnchor.length ? $targetAnchor : false;
			if($target){
				var targetOffset = $target.offset().top;
				$(this).click(function(){
					$("html, body").animate({scrollTop: targetOffset}, 850);
					return false;
				});
			}
		}
	});
	/* End of script ========================== */

});