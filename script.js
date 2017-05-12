// TODO
// See .ttt in CSS - is there easier way to make the page centered left/right

$(document).ready(function(){
	

	//Just leave these extra variables for now
    var machineTurn = "";
	var algorithm = "";
	var whosTurn = ""; 
    
    var playerTurn = true;
	var buttonStatus = "allowclick"; // Change to inactive once game starts
//	var playerTurn = true;
	var machineTurn = "";
	var player = "";
	var test = "";
    
    var gridObj = {rowA1: "", rowA2: "", rowA3: "",
				   rowB1: "", rowB2: "", rowB3: "",
				   rowC1: "", rowC2: "", rowC3: ""};
    
    
    
    
    
    
    

    
    
    
    
    
    
    $(".display").click(function() {
        
        gridObj = {rowA1: "", rowA2: "", rowA3: "",
				   rowB1: "", rowB2: "", rowB3: "",
				   rowC1: "", rowC2: "", rowC3: ""};
        buttonStatus = "allowclick";
        playerTurn = true;
        
    });
    
    
    
    
    $(".left, .middle, .right").click(function() {
        
		if(buttonStatus === "inactive" && playerTurn === true) {
            
			$(this).html(player);
			gridObj[this.id] = player;
			playerTurn = false; 
            
		};
        
	}); // End left/middle/right click listener
	
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
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

    
    

    
    
    
    
    
    
    
    
    
    
    
    
}); // End of doc ready























//    
//    $(".left, .middle, .right").click(function() {
//		
//			$(this).html(player);
//            
//			gridObj[this.id] = player;
//			console.log(gridObj);
//
////            buttonStatus = "inactive"
//		
//	}); // End left/middle/right click listener
//    
//    
//    







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