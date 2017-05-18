// TODO
// Stop player from overrideing blocks that are already taken by machine



$(document).ready(function(){    
    var playerTurn = true;
    var buttonStatus = "allowclick"; // Change to inactive once game starts
    var player = "";
    var machine = "";
    var gridObj = {1: "", 2: "", 3: "",
				   4: "", 5: "", 6: "",
				   7: "", 8: "", 9: ""};

    var gridArr = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];
    
    function machineCode() {
        
        for(i = 0; i < gridArr.length; i++) {
            
            var one = gridArr[i][0];
            var two = gridArr[i][1];
            var three = gridArr[i][2];
          
            testFxn(one, two, three);
       
                function testFxn(one, two, three) {

                    var test = [gridObj[one], gridObj[two], gridObj[three]];

                    if (test[0] === "X" && test[2] === "X" && test[1] === "") {
                        $('#' + two + '').html(machine);
                        gridObj[two] = machine;
                        playerTurn = true;
                        return;
                    }
                    else if (test[0] === "X" && test[1] === "X" && test[2] === "") {
                        $('#' + three + '').html(machine);
                        gridObj[three] = machine;
                        playerTurn = true;
                        return;
                    }
                    else if (test[1] === "X" && test[2] === "X" && test[0] === "") {
                        $('#' + one + '').html(machine);
                        gridObj[one] = machine;
                        playerTurn = true;
                        return;
                    }
                    else if (test[0] === "O" && test[2] === "O" && test[1] === "") {
                        $('#' + two + '').html(machine);
                        gridObj[two] = machine;
                        playerTurn = true;
                        return;
                    }
                    else if (test[0] === "O" && test[1] === "O" && test[2] === "") {
                        $('#' + three + '').html(machine);
                        gridObj[three] = machine;
                        playerTurn = true;
                        return;
                    }
                    else if (test[1] === "O" && test[2] === "O" && test[0] === "") {
                        $('#' + one + '').html(machine);
                        gridObj[one] = machine;
                        playerTurn = true;
                        return;
                    }

                }; 
            
        };  
        
        randFxn();
        
        
    
        function randFxn() {

            var rand = Math.floor(Math.random() * (8)) + 1; 
            if (gridObj[rand] === "") {
                gridObj[rand] = machine;
                $('#' + rand + '').html(machine);
                console.log("rand fired");
                playerTurn = true;
            }
            else randFxn();

        };

        
        
        var checkWinner2 = myFunction(machine);
        
        if (checkWinner2 === "winner") {
            alert("You Have Lost the Game!");
            buttonClick = "inactive";
        }
        
    }; 
   

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // This adds an X or O and also makes changes to the grid object
    $(".left, .middle, .right").click(function() {
		if(buttonStatus === "inactive" && playerTurn === true && gridObj[this.id] === "") {
            // Sends player to whatever was clicked
			$(this).html(player); // Sends player over to html
			gridObj[this.id] = player; // Update gridObj object
            var checkWinner2 = myFunction(player);
            if (checkWinner2 === "winner") {
                alert("You Have Won the Game!");
                buttonClick = "inactive";
            }
			playerTurn = false; 
            // Finished, now we can run machineFunction and testFxn
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
            // return "winner";
            alert(checkWhoWon + " has won the game!");
            buttonStatus = "inactive";
            
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
