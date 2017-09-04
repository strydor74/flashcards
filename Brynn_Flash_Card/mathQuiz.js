$(document).ready(function() {
    console.log( "ready!" );

	var divisor1, divisor2, product, quotient, multiplier, multiplicand, randNum1, randNum2, sum, diff;
	var swap = 0;
	var LOWRANGE_NUM1 = 1;
	var HIRANGE_NUM1 = 12;
	var LOWRANGE_NUM2 = 1;
	var HIRANGE_NUM2 = 12;
	var tryCounter = 0;
	var correctAnswer;
	var totalIncorrect = 0;
	var totalCorrect = 0;
	var totalQuestions = 4;
	var currentQuestion = 0;
	var myAnswer;
	var firstAnswer;

	function getRandomInt(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function resetPage() {
	  $("#qtext").text("Question ");
	  totalIncorrect = 0;
	  totalCorrect = 0;
	  currentQuestion = 0;
	  tryCounter = 1;
	  $("#submitAnswer").css('display','block');
	  $("#totalCorrect").text("");
	  $("#totalIncorrect").text("");
	  $("#totalQuestions").text("");
	  initPage();
	}

	function initPage() {
		currentQuestion++;
		randNum1 = getRandomInt(LOWRANGE_NUM1,HIRANGE_NUM1);
		console.log( "randNum1: "+randNum1 );
		randNum2 = getRandomInt(LOWRANGE_NUM2,HIRANGE_NUM2);
		console.log( "randNum2: "+randNum2 );
		
		
		sum = (randNum1 + randNum2);
		console.log( "sum: "+sum );
		tryCounter = 1;
		if (randNum1 < randNum2)
		{
			swap = randNum1;
			randNum1 = randNum2;
			randNum2 = swap;
		}
		multiplier = randNum2;
		multiplicand = randNum1;
		console.log( "multiplier = randNum2: "+multiplier );
		console.log( "multiplicand = randNum2: "+multiplicand );
		$("#multiplicand").text(multiplicand);
		$("#multiplier").text(multiplier);
		//if (menuChoice == multiplication) {
		
		correctAnswer = (multiplier + multiplicand); //replace with product, sum, etc }
		console.log( "correctAnswer: "+correctAnswer );

		//elseif (menuchoice == division){
		//correctAnswer = quotient}
		$("#correctAnswer").text(correctAnswer);
		$("#currentQuestion").css('display','inline');
		$("#currentQuestion").text(currentQuestion);
		$("#submitAnswer").css('display','block');
		$("#submitButton").css('display','block');
		$("#nextQuestion").css('display','none');
		$("#problem").css('display', 'block');
		$("#tryAgain").css('display','none');
		$("#showResults").css('display','none');
		$("#question").css('display', 'block');
		$("#qtext").css('display', 'inline');
		$("#submitAnswer").val("").focus();
		$("#rejoinder").text("");
	}

	function showResults(){
	  
	    $("#qtext").text("Here are your results!");
	    $("#totalCorrect").text("Number of questions answered correctly: "+totalCorrect);
	    $("#totalIncorrect").text("Number of questions answered incorrectly: "+totalIncorrect);
	    $("#totalQuestions").text("Total number of questions in this quiz: "+totalQuestions);
	    $("#statistics").css('display', 'block');
	    $("#totalCorrect").css('display', 'block');
	    $("#totalIncorrect").css('display', 'block');
	    $("#totalQuestions").css('display', 'block');
	    $("#currentQuestion").css('display','none');
	    $("#submitButton").css('display','none');
	    $("#showResults").css('display','none');
	    $("#nextQuestion").css('display','none');
	    $("#tryAgain").css('display','block');
	    $("#tryAgain").focus();
	    $("#question").css('display', 'none');
	    $("#problem").css('display', 'none');
	    $("#submitAnswer").css('display','none');	    
	}

	function myFunction(theAnswer) {
	  	correctAnswer = (multiplier + multiplicand);
	  
	  	if (currentQuestion < totalQuestions)
	  	{
	    	if (tryCounter <= 3)
	    	{
	      		if (theAnswer == correctAnswer)
	      		{
			        $("#rejoinder").text("Correct!");
			        totalCorrect++;			        
			        $("#nextQuestion").css('display','block');
			        $("#nextQuestion").focus();
			        $("#submitButton").css('display','none');
	        	}
	      		else
	      		{ 
		        	$("#submitAnswer").val("").focus();; 
		        	if (tryCounter == 1)
		          	{
		            	$("#rejoinder").text("Sorry, but "+theAnswer+" isn't correct. Try again.");
		            	firstAnswer = theAnswer;
		          	}
		        	if (tryCounter == 2)
		          	{
		          		if (theAnswer != firstAnswer)
		            		$("#rejoinder").text("Sorry, but "+theAnswer+" isn't correct. Nor was your first answer of "+firstAnswer+". Try again.");
		          		else
		            		$("#rejoinder").text("Sorry, but "+theAnswer+" was what you answered for your first attempt. One more try.");
		          	}
		        	if (tryCounter == 3)
		          	{
			            $("#rejoinder").text("Sorry, but the correct answer is "+correctAnswer+". Let's try another question.");
			            $("#nextQuestion").css('display','block');
			            $("#nextQuestion").focus();
			            $("#submitButton").css('display','none');
			            totalIncorrect++;
		            }
	      		}
	    	}
		  	tryCounter++;
	  	}
	  
		if (currentQuestion == totalQuestions)
		{
		    if (tryCounter <= 3)
		    {
		      	if (theAnswer == correctAnswer)
		      	{
			        $("#rejoinder").text("Correct!");
			        totalCorrect++;
			        if (((totalCorrect + totalIncorrect)==totalQuestions) && (currentQuestion>0)&&(currentQuestion==totalQuestions))
			        {
			        	$("#showResults").css('display','block');
			        	$("#showResults").focus();
			       		$("#submitButton").css('display','none');
			       		$("#nextQuestion").css('display','none');
			        }
		      	}
	      		else
	      		{
				    $("#submitAnswer").val("").focus();; 
				    if (tryCounter == 1)
				    {
				      	$("#rejoinder").text("Sorry, but "+theAnswer+" isn't correct. Try again.");
				     	firstAnswer = theAnswer;
				    }
				    if (tryCounter == 2)
				    {
				    	if (theAnswer != firstAnswer)
				      		$("#rejoinder").text("Sorry, but "+theAnswer+" isn't correct. Nor was your first answer of "+firstAnswer+". Try again.");
				    	else
				      		$("#rejoinder").text("Sorry, but "+theAnswer+" was what you answered for your first attempt. One more try.");
				    }
				    if (tryCounter == 3)
				    {
				      	totalIncorrect++;
				      	$("#rejoinder").text("Sorry, but the correct answer is "+correctAnswer+". We would try another question but this is the last question in this quiz.");
				      	if (((totalCorrect + totalIncorrect)==totalQuestions) && (currentQuestion>0)&&(currentQuestion==totalQuestions))
				      	{
				          	$("#showResults").css('display','block');
				          	$("#showResults").focus();
				          	$("#submitButton").css('display','none');
				          	$("#nextQuestion").css('display','none');
				      	}
				    }
	        	}
	      		tryCounter++;
	    	}    
	  	}
	}

	$("#submitButton").click(function(){
	  	myAnswer = $("#submitAnswer").val();
	   	myFunction(myAnswer);
	});//end submit button click
	
	$('#submitAnswer').on('keypress', function (e) {
         if(e.which === 13){
            myAnswer = $("#submitAnswer").val();
	   		myFunction(myAnswer);
         }
   });

	$("#tryAgain").click(function(){
	   	resetPage();
	}); //end reset page on try again click

	$("#showResults").click(function(){
	   	showResults();
	}); //end showResults

	$("#nextQuestion").click(function(){
	  initPage();
	}); //end nextQuestion

	initPage(); //make sure page is properly initialized if refreshed
	
	
//Parse Query String
	
	function getParameterByName(name, url) {
    	if (!url) url = window.location.href;
    	name = name.replace(/[\[\]]/g, "\\$&");
    	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        	results = regex.exec(url);
    	if (!results) return null;
    	if (!results[2]) return '';
    	return decodeURIComponent(results[2].replace(/\+/g, " "));
	}
	
	var quizOperation = getParameterByName('quizOperation'); 
	var quizLevel = getParameterByName('quizLevel'); 
	
	console.log("Query String: quizOperation = " + quizOperation);
	console.log("Query String: quizLevel = " + quizLevel);
	
	if(quizOperation=="addition"){
		console.log("Set symbol to +");
		
		if(quizLevel=="1"){
		console.log("Set variables for addition level 1");
		}
		else if(quizLevel=="2"){
		console.log("Set variables for addition level 2");
		}
		else if(quizLevel=="3"){
		console.log("Set variables for addition level 3");
		}
		else {
		console.log("Redirect visitor to Level state of selector page");
		}
	}
	
	else if(quizOperation=="subtraction"){
		console.log("Set symbol to -");
		
		if(quizLevel=="1"){
		console.log("Set variables for subtraction level 1");
		}
		else if(quizLevel=="2"){
		console.log("Set variables for subtraction level 2");
		}
		else if(quizLevel=="3"){
		console.log("Set variables for subtraction level 3");
		}
		else {
		console.log("Redirect visitor to Level state of selector page");
		}
	}
	
	else if(quizOperation=="multiplication"){
		console.log("Set symbol to *");
		
		if(quizLevel=="1"){
		console.log("Set variables for multiplication level 1");
		}
		else if(quizLevel=="2"){
		console.log("Set variables for multiplication level 2");
		}
		else if(quizLevel=="3"){
		console.log("Set variables for multiplication level 3");
		}
		else {
		console.log("Redirect visitor to Level state of selector page");
		}
	}
	
	else if(quizOperation=="division"){
		console.log("Set symbol to /");
		
		if(quizLevel=="1"){
		console.log("Set variables for division level 1");
		}
		else if(quizLevel=="2"){
		console.log("Set variables for division level 2");
		}
		else if(quizLevel=="3"){
		console.log("Set variables for division level 3");
		}
		else {
		console.log("Redirect visitor to Level state of selector page");
		}
	}
	
	else {
		console.log("Redirect visitor to Operation state of selector page");
	}

});//end document ready