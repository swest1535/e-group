jQuery( function ( $ ) {
	$('#ya_konsult').click(function(){
        yaCounter46356618.reachGoal('YaKonsult'); 
		return true;	
});

	if(location.hash.length){
		var target=$('[name="'+location.hash.substr(1)+'"]');
		if(!target.length)
			target=$(location.hash);
		
		if(target.length)
			$('html,body').animate({
				scrollTop:target.offset().top-130
			},1000);
	};

});