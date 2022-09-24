(function( $ ) {
	
	 var observer = new MutationObserver(function(mutations) {
    
		 if ($("#posters").hasClass("poster-show")) {
			 
			 $('html, body').css({
    overflow: 'hidden'
    
});
		 }else{
			  $('html, body').css({
    overflow: 'auto'
    
});
		 }
		 
		 
  });
  var target = document.querySelector('#posters');
  observer.observe(target, {
    attributes: true
  });


	
	
	/*$(document).on('click','.mi-map', function(){
		
		//alert('s');
		if($('.descr:visible').length == 0){
			$('html, body').css({
    overflow: 'auto'
    
});

}else{
	$('html, body').css({
    overflow: 'hidden'
    
});
}
		
		
	});*/
	
	
	$(document).on('click','.upm', function(){
		alert('d');
		
		
	});
	
	
	$(document).on('click','.ord', function(){
		var mes1=$(this).attr('tit')+'\r\n'+$(this).attr('serv')+'\r\n';
		$('#mes').text(mes1);
		$('#marka_').val($(this).attr('tit'));
		$('#serv_').val($(this).attr('serv'));
	//alert();

});
	
	$(document).on('click','.ord2', function(){
		//var mes1=$(this).attr('tit')+'\r\n'+$(this).attr('serv')+'\r\n';
		//$('#mes').text(mes1);
		//$('#marka_').val($(this).attr('tit'));
		//$('#serv_').val($(this).attr('serv'));
		$('#kart').show();
	//alert();

});
	$(document).on('click','.dost_open', function(){
		//var mes1=$(this).attr('tit')+'\r\n'+$(this).attr('serv')+'\r\n';
		//$('#mes').text(mes1);
		//$('#marka_').val($(this).attr('tit'));
		//$('#serv_').val($(this).attr('serv'));
		$('#kart').hide();
		$('#dost').show();
	//alert();

});
	
			$('#dost_form').submit(function(e){
			var data=$(this).serialize();
			e.preventDefault();
				 e.stopPropagation();
			$.ajax({
  url: "/dost.php",
  type: "POST",
  data: data,
  success: function(mes){
	  console.log(mes);
    $('#dost_ok').show();
	  $('#dost_default').hide();
  }
});    
    
			
			
		});

function tabClick($item) {
	$($item).parent().parent().find('.nav-item').removeClass('active');
	$($item).parent().addClass('active');

	var activeTabID = $($item).data('tab')
	$(activeTabID).parent().find('.tab-pane').removeClass('active')
	$(activeTabID).addClass('active')
}



$('body').on('mousedown', '[data-goto_href]', function(e){
	function openInNewTab(url) {
    var link = '<a href="'+url+'" target="_blank" id="fakeLink">fakeLink</a>';
    $('body').append(link);
    $('body').find('#fakeLink')[0].click();
    $('body').find('#fakeLink').remove();
	}

 	var goto_href =  $(this).data('goto_href');
	if (goto_href != '') {
 		switch(e.which) {
        case 1: //left Click
        	window.location =	goto_href;
        	break;
        case 2: //middle Click
        	openInNewTab(goto_href);
        	break;
    }
   }
  return true;// to allow the browser to know that we handled it.
});



$(document).ready(function(){

	$('.nav-tabs .nav-link').on('click', function(e) {
		e.preventDefault();
		tabClick(this);
	})


	$('.yearsSelect .nav-tabs .nav-link').on('click', function(e) {
		e.preventDefault();
		tabClick(this);
		var $title = $(this).data('yeartitle')
		console.log($title);
		console.log();
		$('.choosenYear .section-title').text($title);
	})


	$('#problemsKeys .problemFilterItem').click(function(evnt) {
		//console.log($('#problemsVals').offset().top)
		var headerHeight = $('#top-header').outerHeight() + $('#main-header').outerHeight();
      //evt.preventDefault();
      $('html, body').stop().animate({
        scrollTop: ($('#problemsVals').offset().top - headerHeight - 100)
      }, 500);
    });

});

})( jQuery );