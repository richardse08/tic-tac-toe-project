
$(document).ready(function(){
	
    var playerTurn = true;
	var buttonStatus = "allowclick"; // Change to inactive once game starts
	var player = "";
	var machine = "";
	var test = "";
    
    var gridObj = {0: "", 1: "", 2: "",
				   3: "", 4: "", 5: "",
				   6: "", 7: "", 8: ""};
	var gridArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];


	function machineFunction(){
		
        if (gridObj[4] === "") {
            var test4 = ('#' + 4 + '');			
			$(test4).html(machine);
			gridObj[4] = machine;
			playerTurn = true;
        } 
		else if (gridObj[0] === "") {
		var test0 = ('#' + 0 + '');			
			$(test0).html(machine);
			gridObj[0] = machine;
			playerTurn = true;
		}
		else if (gridObj[2] === "") {
		var test2 = ('#' + 2 + '');			
			$(test2).html(machine);
			gridObj[2] = machine;
			playerTurn = true;
		}
		else if (gridObj[6] === "") {
		var test6 = ('#' + 6 + '');			
			$(test6).html(machine);
			gridObj[6] = machine;
			playerTurn = true;
		}
		else if (gridObj[8] === "") {
			var test8 = ('#' + 8 + '');			
			$(test2).html(machine);
			gridObj[8] = machine;
			playerTurn = true;
		}

        if ((gridObj[0] === machine && gridObj[1] === machine && gridObj[2] === machine) ||
            (gridObj[3] === machine && gridObj[4] === machine && gridObj[5] === machine) ||
            (gridObj[6] === machine && gridObj[7] === machine && gridObj[8] === machine) ||
            (gridObj[0] === machine && gridObj[3] === machine && gridObj[6] === machine) ||
            (gridObj[1] === machine && gridObj[4] === machine && gridObj[7] === machine) ||
            (gridObj[2] === machine && gridObj[5] === machine && gridObj[8] === machine) ||
            (gridObj[2] === machine && gridObj[4] === machine && gridObj[6] === machine) ||
            (gridObj[0] === machine && gridObj[4] === machine && gridObj[8] === machine)){ 
            console.log("You Lose!");
            alert("You Lose!");
            return;
        };
    };      
            
            
            
            
          
////////////////////////////////////////////////////////////////////////////////////////////////////////////


	
	
	
	
	
	
	
	
	


	
	

	

	
    
    
	
	
	
	
	
    

    
    
    // This adds an X or O and also makes changes to the grid object
    $(".left, .middle, .right").click(function() {
        
		if(buttonStatus === "inactive" && playerTurn === true) {
            
			$(this).html(player);
			gridObj[this.id] = player;
			
			// Check to see if there is a win/lose/tie
			if(gridObj[0] === player && gridObj[1] === player && gridObj[2] === player) {
				console.log("You Win!");
				alert("You Win!");
				return;
			};
			if(gridObj[3] === player && gridObj[4] === player && gridObj[5] === player) {
				console.log("You Win!");
				alert("You Win!");
				return;
			};
			if(gridObj[6] === player && gridObj[7] === player && gridObj[8] === player) {
				console.log("You Win!");
				alert("You Win!");
				return;
			};
			if(gridObj[0] === player && gridObj[3] === player && gridObj[6] === player) {
				console.log("You Win!");
				alert("You Win!");
				return;
			};
			if(gridObj[1] === player && gridObj[4] === player && gridObj[7] === player) {
				console.log("You Win!");
				alert("You Win!");
				return;
			};
			if(gridObj[2] === player && gridObj[5] === player && gridObj[8] === player) {
				console.log("You Win!");
				alert("You Win!");
				return;
			};
			if(gridObj[2] === player && gridObj[4] === player && gridObj[6] === player) {
				console.log("You Win!");
				alert("You Win!");
				return;
			};
			if(gridObj[0] === player && gridObj[4] === player && gridObj[8] === player) {
				console.log("You Win!");
				alert("You Win!");
				return;
			};
			
			playerTurn = false; 
			machineFunction();
			
		};
        
	}); // End left/middle/right click listener
	
    
	
	
	
	
	
	
	
	
	
	
	
	
	
    

    function randomMove(myMin, myMax) {
		return Math.floor(
			Math.random() * (myMax - myMin + 1)
		) + myMin;
	};
    
    
    
    
    
	$(".display").click(function() { // Reset grid, reset message, remove X/Os from html, re-allow clicks
		gridObj = {0: "", 1: "", 2: "",
				   3: "", 4: "", 5: "",
				   6: "", 7: "", 8: ""};
		$("#0").html("");
		$("#1").html("");
		$("#2").html("");
		$("#3").html("");
		$("#4").html("");
		$("#5").html("");
		$("#6").html("");
		$("#7").html("");
		$("#8").html("");
		$(".display").html("Let's Play! Xs or Os?");
		buttonStatus = "allowclick";
		playerTurn = true;
	});
    
    
    
    
    
 
    
    
    
    
    
    
    
    
	$(".button-left").click(function() {
		if(buttonStatus === "allowclick") {	
			buttonStatus = "inactive";
			player = "X";
			machine = "O";
			$(".display").html("Click to Restart");
		};	
	});

    
    
	$(".button-right").click(function() {
		if(buttonStatus === "allowclick") {
			buttonStatus = "inactive";
			player = "O";
			machine = "X";
			$(".display").html("Click to Restart");
		};
	}); 

    
    

    
    
    
    
    
    
    
    
    
    
    
    
}); // End of doc ready
