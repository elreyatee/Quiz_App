var i = 0;
var qans = 0;

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
	loadQuestion();
	checkQuestion();

	/*if(qans == questions.length) {*/
		$("#reset").fadeIn();
	
	$("#reset").click(function(){
		location.reload();
	});
}

function checkQuestion() {
	$("#submit").click(function() {
		var guess = $("input[type='checkbox']:checked").val();
		console.log("guess: " + guess);

		if($("input[type='checkbox']:checked").length > 1) {
			$(".messagebox").text("Only choose one answer").css("color", "white");
		} else if(guess == undefined) {
			$(".messagebox").text("Please choose an answer").css("color", "white");
		} else if(guess == questions[i].correct) {
			$(".messagebox").text("CORRECT!").css("color", "green");
			nextQuestion();
		} else {
			$(".messagebox").text("INCORRECT!").css("color", "red");
			nextQuestion();
		} 
		console.log(qans);
	});
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
			$(".quiz").fadeIn();}, 6000);

		startGame();
	});
});