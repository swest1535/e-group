
 jQuery(function($){
   $("#tel").mask("+375 99 999 99 99");
   });
   
   
document.addEventListener( 'wpcf7mailsent', function( event ) {
if ( '9301' == event.detail.contactFormId ) {
    var div = document.getElementById('consult_ок');
    var div2 = document.getElementById('consult_default');
        div.style.display = 'table';
        div2.style.display = 'none';
       setTimeout(function(){
        div2.style.display = 'table';
        div.style.display = 'none';
      }, 2000); 
}
}, false ); 

