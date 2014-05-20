var index;
var score;

function loadQuestion(i) {
	$(".question").text(questions[i].ques);
	$("#ques1").append(questions[i].choices[0]);
	$("#ques2").append(questions[i].choices[1]);
	$("#ques3").append(questions[i].choices[2]);
	$("#ques4").append(questions[i].choices[3]);
}

function progBar() {
	$(".prog-bar").css({"-webkit-animation-play-state": "running"});
	setTimeout(function() {
		$(".prog-bar").css({"-webkit-animation-play-state": "paused"})
		}, 1750);
}

function clearQuestion(i) {
	$(".question").text(questions[i].ques);
	$("#ques1").text(questions[i].choices[0]);
	$("#ques2").text(questions[i].choices[1]);
	$("#ques3").text(questions[i].choices[2]);
	$("#ques4").text(questions[i].choices[3]);
	$("input:checked").prop("checked", false);
}

function startGame() {
	$(".action").show();
	loadQuestion(index);
	
	$("#submit").on("click", function() {
		var guess = $(this).closest(".action").find("input:checked").val();
		if($("input[type='checkbox']:checked").length > 1) {
			alert("Only choose one answer");
		} else if(guess == undefined) {
			alert("Please choose an answer");
		} else if(guess == questions[index].correct) {
			alert("Correct Answer!");
			startGame(index+=1);
			//progBar();
			clearQuestion(index+=1);
		} else if(guess !== questions[index].correct) {
			alert("Incorrect Answer!");
			startGame(index+=1);
			//progBar();
			clearQuestion(index+=1);
		}
	});
	if(index > questions.length) {
		$(".reset").show();
	} 
}

$(document).ready(function(){
	$(".quiz").hide();
	$(".reset").hide();

	$("#enter-btn").on("click", function() {
		$(this).closest("#ENTER").fadeOut("slow");
		$(".quiz").fadeIn("slow");

	});

	$(".intro").on("click", "button", function(){
		index = 0;
		score = 0;
		startGame();
	});
});