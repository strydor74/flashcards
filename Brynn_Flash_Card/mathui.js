$(document).ready(function() {

    var nextURL;
    var quizURL = "mathQuiz.html";
    var qsOperation = $("form#operationMenu input[type=radio]:checked").val();
    var qsLevel = $("form#levelMenu input[type=radio]:checked").val();

    $("form#operationMenu input[type=radio]").click(function() {
  		qsOperation = $("form#operationMenu input[type=radio]:checked").val();
	});
	
	$("form#levelMenu input[type=radio]").click(function() {
  		qsLevel = $("form#levelMenu input[type=radio]:checked").val();
	});
	

	$("form#operationMenu").submit(function(event) {
  		$("#operationMenu").hide();
  		$("#levelMenu").show();
 		event.preventDefault();
	});
	
	
	$("form#levelMenu").submit(function(event) {
  		nextURL = quizURL + "?quizOperation=" + qsOperation + "&quizLevel=" + qsLevel;
  		window.open(nextURL, '_self');
 		event.preventDefault();
	});


	

});//end document ready


