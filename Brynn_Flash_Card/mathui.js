$(document).ready(function() {

    var nextURL = $("form#operationMenu input[type=radio]:checked").val();

    $("form#operationMenu input[type=radio]").click(function() {
  		nextURL = $(this).val();
  		 console.log(nextURL);
	});
	

	$("form#operationMenu").submit(function(event) {
  		window.open(nextURL, '_self');
 		event.preventDefault();
	});

});//end document ready