// TODO
// Stop player from overrideing blocks that are already taken by machine



$(document).ready(function(){    
    var playerTurn = true;
    var buttonStatus = "allowclick"; // Change to inactive once game starts
    var player = "";
    var machine = "";
    var count = 0;
    var gridObj = {1: "", 2: "", 3: "",
				   4: "", 5: "", 6: "",
				   7: "", 8: "", 9: ""};

   

    
    var gridArr = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];
    
    
    // First create a simple function that grabs ONE item at i=0 and check if its taken or not
    function machineCode() {
        
        var rand = Math.floor((Math.random() * 9) + 1);
        
        if(gridObj[rand] === "") {
            $("#" + rand + "").html(machine);
            gridObj[rand] = machine;
            console.log(machine);
        } else machineCode;
        
        playerTurn = true;
        
    };
   
    
    
    
    
    
    
    
   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // This adds an X or O and also makes changes to the grid object
    $(".left, .middle, .right").click(function() {
		if(buttonStatus === "inactive" && playerTurn === true && gridObj[this.id] === "") {
            // Sends player to whatever was clicked
            console.log("inside of left middle right");
			$(this).html(player); // Sends player over to html
			gridObj[this.id] = player; // Update gridObj object
            count++;
            // Check if they won BEFORE we let machine go again
            var checkWinner2 = myFunction(player);
                if (checkWinner2 === "winner") {
                    alert("You Have Won the Game!");
                }
            // Ensure that the player cant keep playing until machine goes
			playerTurn = false; 
            // Finished, now we can run machineFunction and testFxn
            console.log(gridObj);
			machineCode();
            // testFxn(alpha, bravo, charlie);
		};
        // testFxn(alpha, bravo, charlie);
	}); // End left/middle/right click listener

    
    
    
    // Function to check who won the game
    function myFunction(checkWhoWon) {
        
        if ((gridObj[1] === checkWhoWon && gridObj[2] === checkWhoWon && gridObj[3] === checkWhoWon) ||
            (gridObj[4] === checkWhoWon && gridObj[5] === checkWhoWon && gridObj[6] === checkWhoWon) ||
            (gridObj[7] === checkWhoWon && gridObj[8] === checkWhoWon && gridObj[9] === checkWhoWon) ||
            (gridObj[1] === checkWhoWon && gridObj[4] === checkWhoWon && gridObj[7] === checkWhoWon) ||
            (gridObj[2] === checkWhoWon && gridObj[5] === checkWhoWon && gridObj[8] === checkWhoWon) ||
            (gridObj[3] === checkWhoWon && gridObj[6] === checkWhoWon && gridObj[9] === checkWhoWon) ||
            (gridObj[3] === checkWhoWon && gridObj[5] === checkWhoWon && gridObj[7] === checkWhoWon) ||
            (gridObj[1] === checkWhoWon && gridObj[5] === checkWhoWon && gridObj[9] === checkWhoWon)){ 
            return "winner";
            
        };
        
    };
    
    
    
    
    // Reset grid, reset message, remove X/Os from html, re-allow clicks
	$(".display").click(function() { 
		gridObj = {1: "", 2: "", 3: "",
				   4: "", 5: "", 6: "",
				   7: "", 8: "", 9: ""};
		$("#1").html("");
		$("#2").html("");
		$("#3").html("");
		$("#4").html("");
		$("#5").html("");
		$("#6").html("");
		$("#7").html("");
		$("#8").html("");
		$("#9").html("");
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
		}
	});

    
    
    
	$(".button-right").click(function() {
		if(buttonStatus === "allowclick") {
			buttonStatus = "inactive";
			player = "O";
			machine = "X";
			$(".display").html("Click to Restart");
		}
	});     

    

    
}); // End of doc ready
