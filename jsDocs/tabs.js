$(document).ready(function() {
    $('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = $(this).attr('href');
 
        // Show/Hide Tabs
        $('.tabs ' + currentAttrValue).show().siblings().hide();
 
        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });

    jQuery('.nextTabButton').on('click', function() {

       var $activeTab = $('.tab-links li.active');
       var $wrapper = jQuery(this).closest('.tabs');
       var indexActive = $wrapper.find('li.active').index();

       $wrapper.find('li').eq(indexActive + 1).find('a').click();
    });

    jQuery('.backTabButton').on('click', function() {

       var $activeTab = $('.tab-links li.active');
       var $wrapper = jQuery(this).closest('.tabs');
       var indexActive = $wrapper.find('li.active').index();

       $wrapper.find('li').eq(indexActive - 1).find('a').click();
    });

});





/*Creating Tabs with HTML, CSS & jQuery*/
/*http://inspirationalpixels.com/tutorials/creating-tabs-with-html-css-and-jquery#step-jquery*/


/*-------------- v Trying to Get Back Button to Work But Unsuccessful v --------------*/

/*$(document).ready(function() {
    $('.tabs #tab2 a #back_tab1').on('click', function(e)  {
        
        $('#tab1').show().siblings().hide();

        $('.tabs .tab-links a #tab1').parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });
});
*/

/*-----------------------------------------------------------------------------------*/


/*$(".changetab").click(function() {
    $("#tabs").tabs("select", this.hash);
});

*/




/*
$(function() {

	var $tabs = $('#tabs').tabs();
	
	$(".tab").each(function(i){
	
	  var totalSize = $(".tab").size() - 1;
	
	  if (i != totalSize) {
	      next = i + 2;
   		  $(this).append("<a href='#' class='next-tab mover' rel='" + next + "'>Next Page &#187;</a>");
	  }
	  
	  if (i != 0) {
	      prev = i;
   		  $(this).append("<a href='#' class='prev-tab mover' rel='" + prev + "'>&#171; Prev Page</a>");
	  }
   		
	});
	
	$('.next-tab, .prev-tab').click(function() { 
           $tabs.tabs('select', $(this).attr("rel"));
           return false;
       });
       

});*/