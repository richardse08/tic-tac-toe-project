// TODO
// See .ttt in CSS - is there easier way to make the page centered left/right

$(document).ready(function(){
	

	
	var playerTurn = true;
	var machineTurn = "";
	var algorithm = "";
	var whosTurn = ""; 
	var buttonStatus = "allowclick"; // Change to inactive once game starts
	

	$(".button-left").click(function() {
		if(buttonStatus === "allowclick") {	
			buttonStatus = "inactive";
			player = "X";
			$(".display").html("Click to Restart");
		};	
	});

	$(".button-right").click(function() {
		if(buttonStatus === "allowclick") {
			buttonStatus = "inactive";
			player = "O";
			$(".display").html("Click to Restart");
		};
	}); 

    $(".left, .middle, .right").click(function() {
		if(buttonStatus === "inactive" && playerTurn === true) {
			$(this).html(player);
			playerTurn = false; 
		};
	}); // End left/middle/right click listener
	
	$(".display").click(function() {
		playerTurn = true;
		buttonStatus = "allowclick";
	});
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}); // End of doc ready































// 	if(buttonStatus === "active" && $(".button-left").click()) {
// 		buttonStatus = "inactive";
// 		player = "X";
// 		$(".display").html("Click to Restart");
// 	};
	
// 	if(buttonStatus === "active" && $(".button-right").click()) {
// 		buttonStatus = "inactive";
// 		player = "O";
// 		$(".display").html("Click to Restart");
// 	};