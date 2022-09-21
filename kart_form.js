

  var closeKart = document.getElementById('kart_close');
		
	closeKart.addEventListener('click', function() {
	  form = document.getElementById('kart');
    form.style.display= 'none';	 
  });
  

     var elements = document.getElementsByClassName("kart_open");
		
		for (var i = 0; i < elements.length; i++) {
    var form = elements[i];
		 form.addEventListener('click', function() {
	     form = document.getElementById('kart');
           form.style.display= 'block';
  }); 
  
	}
  
  
  var varopen = document.querySelector(".dost_open");
		
		 varopen.addEventListener('click', function() {
	     form = document.getElementById('kart');
           form.style.display= 'none';
  }); 
 
