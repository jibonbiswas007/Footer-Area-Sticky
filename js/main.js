(function($) {
    "use strict";
    
    jQuery(document).ready(function($){
    	$(".header-area").sticky();

    	var footer_height = $(".footer-area").height();
    	$(".footer-wrap").css("margin-bottom", footer_height + 'px');
        
    });
    
    jQuery(window).load(function(){
        
    });
    
    
}(jQuery));