var i = 0;
var qans = 0;
var score = 0;

function loadQuestion() {
	$(".question").text(questions[i].ques);
	$("#ques1").append(questions[i].choices[0]);
	$("#ques2").append(questions[i].choices[1]);
	$("#ques3").append(questions[i].choices[2]);
	$("#ques4").append(questions[i].choices[3]);
	$(".quiz > img").attr("src", questions[i].pic);
}

function clearQuestion() {
	$(".question").text(questions[i].ques);
	$("#ques1").text(questions[i].choices[0]);
	$("#ques2").text(questions[i].choices[1]);
	$("#ques3").text(questions[i].choices[2]);
	$("#ques4").text(questions[i].choices[3]);
	$(".quiz > img").attr("src", questions[i].pic);
	$("input:checked").prop("checked", false);
}

function startGame() {
	$(".action").show();
	$("#reset").hide();
	loadQuestion();
	checkQuestion();
	
	$("#reset").click(function(){
		if(score >= 5) {
				$(".messagebox").text("Congrats! You're a new member of SHIELD!").css("color", "yellow");
			} else {
				$(".messagebox").text("You did not pass! Hit 'RESET' and try again.").css("color", "red");
			}
		setTimeout(function(){
			location.reload();}, 5000);
	});
}

function checkQuestion() {
	$("#submit").click(function() {
		var guess = $("input[type='checkbox']:checked").val();

		if($("input[type='checkbox']:checked").length > 1) {
			$(".messagebox").text("Only choose one answer").css("color", "white");
		} else if(guess == undefined) {
			$(".messagebox").text("Please choose an answer").css("color", "white");
		} else if(guess == questions[i].correct) {
			score+= 1;
			showScore();
			$(".messagebox").text("CORRECT!").css("color", "green");
			nextQuestion();
		} else {
			$(".messagebox").text("INCORRECT!").css("color", "red");
			showScore();
			nextQuestion();
		} 

		if(qans + 1 == questions.length) {
			$("#reset").fadeIn();
		}
	});
}

function showScore() {
	$("#score").text("Correct Answers: " + score);
}

function nextQuestion() {
	i+=1;
	qans+=1;
	clearQuestion();
}

$(document).ready(function(){
	$(".quiz").hide();
	$(".intro").hide();
	$("#reset").hide();

	$("#enter-btn").click(function() {
		$(this).closest("#enter-btn").hide();
		$(".logo").addClass("rotatelogo");
		$("#ENTER").addClass("newheight");
		$(".intro").fadeIn(2000);
		setTimeout(function(){
			$(".intro").hide();
			$(".quiz").fadeIn();
			showScore();}, 6000);

		startGame();
		
	});
});