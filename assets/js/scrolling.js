$(document).ready(function(){

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
					$(".nav-header li a").removeClass("active");
					$(this).addClass("active");
					$("html, body").animate({scrollTop: targetOffset}, 850);
					return false;
				});
			}
		}

	});

});