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
				var check = checkFunction(one, two, three);
				if (check == true) {
					break;
				}
                
			};
        
			if (check != true) {
				randFunction();
			}
		
			function randFunction() {
                
				var rand = Math.floor(Math.random() * (8)) + 1; 
				if (gridObj[rand] === "") {
					gridObj[rand] = machine;
					$('#' + rand + '').html(machine);
					console.log("rand fired");
					playerTurn = true;
					return true;
				}
                else randFunction();

			}; // End function randFunction
		
		
			function checkFunction(one, two, three) {

					var test = [gridObj[one], gridObj[two], gridObj[three]];
					if (test[0] === "X" && test[2] === "X" && test[1] === "") {
						$('#' + two + '').html(machine);
						gridObj[two] = machine;
						console.log("conditional fired");
						playerTurn = true;
						return true;
					}
					else if (test[0] === "X" && test[1] === "X" && test[2] === "") {
						$('#' + three + '').html(machine);
						gridObj[three] = machine;
						console.log("conditional fired");
						playerTurn = true;
						return true;
					}
					else if (test[1] === "X" && test[2] === "X" && test[0] === "") {
						$('#' + one + '').html(machine);
						gridObj[one] = machine;
						console.log("conditional fired");
						playerTurn = true;
						return true;
					}
					else if (test[0] === "O" && test[2] === "O" && test[1] === "") {
						$('#' + two + '').html(machine);
						gridObj[two] = machine;
						console.log("conditional fired");
						playerTurn = true;
						return true;
					}
					else if (test[0] === "O" && test[1] === "O" && test[2] === "") {
						$('#' + three + '').html(machine);
						gridObj[three] = machine;
						console.log("conditional fired");
						playerTurn = true;
						return true;
					}
					else if (test[1] === "O" && test[2] === "O" && test[0] === "") {
						$('#' + one + '').html(machine);
						gridObj[one] = machine;
						console.log("conditional fired");
						playerTurn = true;
						return true;
					}

			}; // End function checkFunction(one, two, three) 

		
			var checkWinner = myFunction(machine);
			if (checkWinner === "winner") {
				alert("You Have Lost the Game!");
			} 
			else {
				playerTurn = true;
			}
			
    }; // End function machineCode() ///////////////////////////////////////////////////////
	
         
    $(".left, .middle, .right").click(function() {

        if(buttonStatus === "inactive" && playerTurn === true && gridObj[this.id] === "") {
            $(this).html(player);
            gridObj[this.id] = player;
            var checkWinner2 = myFunction(player);
            if (checkWinner2 === "winner") {
                alert("You Have Won the Game!");
                buttonStatus = "inactive";
            } 
            else {
                playerTurn = false; 
                machineCode();
            }
        }; // End conditional

    }); // End left/middle/right click listener
    
    
    function myFunction(checkWhoWon) {
        
        if ((gridObj[1] === checkWhoWon && gridObj[2] === checkWhoWon && gridObj[3] === checkWhoWon) ||
            (gridObj[4] === checkWhoWon && gridObj[5] === checkWhoWon && gridObj[6] === checkWhoWon) ||
            (gridObj[7] === checkWhoWon && gridObj[8] === checkWhoWon && gridObj[9] === checkWhoWon) ||
            (gridObj[1] === checkWhoWon && gridObj[4] === checkWhoWon && gridObj[7] === checkWhoWon) ||
            (gridObj[2] === checkWhoWon && gridObj[5] === checkWhoWon && gridObj[8] === checkWhoWon) ||
            (gridObj[3] === checkWhoWon && gridObj[6] === checkWhoWon && gridObj[9] === checkWhoWon) ||
            (gridObj[3] === checkWhoWon && gridObj[5] === checkWhoWon && gridObj[7] === checkWhoWon) ||
            (gridObj[1] === checkWhoWon && gridObj[5] === checkWhoWon && gridObj[9] === checkWhoWon)) { 
            return "winner";
            alert(checkWhoWon + " has won the game!");
            buttonStatus = "inactive";
        }
		
        if (gridObj[1] !== "" && gridObj[2] !== "" && gridObj[3] !== "" && 
         gridObj[4] !== "" && gridObj[5] !== "" && gridObj[6] !== "" && 
         gridObj[7] !== "" && gridObj[8] !== "" && gridObj[9] !== "") {

         alert("Draw. Hit Reset to play again");
         buttonStatus = "inactive";
        }
        
    };
    
    
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
