$(document).ready(function(){  
    
    // Initialize variables
    var playerTurn = true;
    var buttonStatus = "allowclick"; // Change to inactive once game starts
    var player = "";
    var machine = "";
    
    // Define grid
    var gridObj = {1: "", 2: "", 3: "",
				   4: "", 5: "", 6: "",
				   7: "", 8: "", 9: ""};
    
    // Define winning scenarios
    var winningMoves = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];

    
    
    // Function that allows computer to look through board and decide what move to make 
    function machineCode() {
        
            // Loop through winning scenarios and run them through checkForMoves
			for(i = 0; i < winningMoves.length; i++) {
                // Initialize 3 variables for looping through the winningMoves list
				var winningArrOne = winningMoves[i][0];
				var winningArrTwo = winningMoves[i][1];
				var winningArrThree = winningMoves[i][2];
                // Check to see if any of the 7 winning scenarios involves 2 boxes in a row filled by machine, take 3rd
                // Also check to see if any of the 7 winning scenarios involves 2 boxes filled by player, take 3rd to prevent win
				var check = checkForMoves(winningArrOne, winningArrTwo, winningArrThree);
                // Stop function and let player make a move once machine makes a move
				if (check == true) {
					break;
				}
                
			};
        
            // If checkForMoves doesn't return any defensive moves, pick a random box that isn't already taken
			if (check != true) {
				generateRandom();
			}
        
		    // Pick a random move
			function generateRandom() {
                
				var rand = Math.floor(Math.random() * (8)) + 1; 
				if (gridObj[rand] === "") {
					gridObj[rand] = machine;
					$('#' + rand + '').html(machine);
					playerTurn = true;
					return true;
				}
                else generateRandom();

			}; // End function generateRandom
		
		    // Check if a given row or column has 2 player boxes filled
            // If so take the 3rd box to avoid player taking making a winning move
            // Also ensure we leave the function once a move is made
			function checkForMoves(winningArrOne, winningArrTwo, winningArrThree) {

					var preventWin = [gridObj[winningArrOne], gridObj[winningArrTwo], gridObj[winningArrThree]];
                    // Seek out moves where machine can complete a full row/column
					if (preventWin[0] === machine && preventWin[2] === machine && preventWin[1] === "") {
						$('#' + winningArrTwo + '').html(machine);
						gridObj[winningArrTwo] = machine;
						playerTurn = true;
						return true;
					}
					else if (preventWin[0] === machine && preventWin[1] === machine && preventWin[2] === "") {
						$('#' + winningArrThree + '').html(machine);
						gridObj[winningArrThree] = machine;
						playerTurn = true;
						return true;
					}
					else if (preventWin[1] === machine && preventWin[2] === machine && preventWin[0] === "") {
						$('#' + winningArrOne + '').html(machine);
						gridObj[winningArrOne] = machine;
						playerTurn = true;
						return true;
					}
                    // If there aren't any winning moves avail to machine, make a defensive move
					else if (preventWin[0] === player && preventWin[2] === player && preventWin[1] === "") {
						$('#' + winningArrTwo + '').html(machine);
						gridObj[winningArrTwo] = machine;
						playerTurn = true;
						return true;
					}
					else if (preventWin[0] === player && preventWin[1] === player && preventWin[2] === "") {
						$('#' + winningArrThree + '').html(machine);
						gridObj[winningArrThree] = machine;
						playerTurn = true;
						return true;
					}
					else if (preventWin[1] === player && preventWin[2] === player && preventWin[0] === "") {
						$('#' + winningArrOne + '').html(machine);
						gridObj[winningArrOne] = machine;
						playerTurn = true;
						return true;
					}

			}; // End function checkForMoves(winningArrOne, winningArrTwo, winningArrThree) 

		    // After machine has made a move, be sure to check to see if the machine has won before allowing player to go
			var checkWinner = winner(machine);
			if (checkWinner === "winner") {
				alert("You Have Lost the Game!");
			} 
			else {
				playerTurn = true;
			}
			
    }; // End function machineCode() 
	
    
    
    // Player clicks a box     
    $(".left, .middle, .right").click(function() {
        // If player clicks an empty box, update that box in html AND update the gridObj to keep track of the board
        if(buttonStatus === "inactive" && playerTurn === true && gridObj[this.id] === "") {
            $(this).html(player);
            gridObj[this.id] = player;
            // Check if player won before allowing machine to run
            var checkWinner2 = winner(player);
            if (checkWinner2 === "winner") {
                alert("You Have Won the Game!");
                buttonStatus = "inactive";
            } 
            else {
                playerTurn = false; 
                machineCode();
            }
        }; 

    }); // End left/middle/right click listener
    
    
    
    // Compare the current grid to possible wins
    function winner(checkWhoWon) {
        // Machine code will pass into this each time it runs to see if player loses
        // Player clicking any box will pass in as well to see if the machine lost or if there is a draw
        if ((gridObj[1] === checkWhoWon && gridObj[2] === checkWhoWon && gridObj[3] === checkWhoWon) ||
            (gridObj[4] === checkWhoWon && gridObj[5] === checkWhoWon && gridObj[6] === checkWhoWon) ||
            (gridObj[7] === checkWhoWon && gridObj[8] === checkWhoWon && gridObj[9] === checkWhoWon) ||
            (gridObj[1] === checkWhoWon && gridObj[4] === checkWhoWon && gridObj[7] === checkWhoWon) ||
            (gridObj[2] === checkWhoWon && gridObj[5] === checkWhoWon && gridObj[8] === checkWhoWon) ||
            (gridObj[3] === checkWhoWon && gridObj[6] === checkWhoWon && gridObj[9] === checkWhoWon) ||
            (gridObj[3] === checkWhoWon && gridObj[5] === checkWhoWon && gridObj[7] === checkWhoWon) ||
            (gridObj[1] === checkWhoWon && gridObj[5] === checkWhoWon && gridObj[9] === checkWhoWon)) { 
            return "winner";
        }
		// If board is full and no winning moves exist, its a draw
        if (gridObj[1] !== "" && gridObj[2] !== "" && gridObj[3] !== "" && 
            gridObj[4] !== "" && gridObj[5] !== "" && gridObj[6] !== "" && 
            gridObj[7] !== "" && gridObj[8] !== "" && gridObj[9] !== "") {

            alert("Draw. Hit Reset to play again");
            buttonStatus = "inactive";
        }
        
    };
    
    
    
    // If player clicks restart remove all XOs from board and from grid object
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
    
    
    
    // Play as X
	$(".button-left").click(function() {
        
		if(buttonStatus === "allowclick") {	
			buttonStatus = "inactive";
			player = "X";
			machine = "O";
			$(".display").html("Click to Restart");
		}
        
	});

    
    
    // Play as O
	$(".button-right").click(function() {
        
		if(buttonStatus === "allowclick") {
			buttonStatus = "inactive";
			player = "O";
			machine = "X";
			$(".display").html("Click to Restart");
		}
        
	});     

    
    
    
}); // End of doc ready