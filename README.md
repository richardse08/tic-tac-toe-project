# tic-tac-toe-project

This game will allow user to play tic-tac-toe against a computer.

The game starts with a display box telling the user they must select Xs or Ox, user cannot click anything except an X or O box. Once a selection is made, it cannot be changed until the user hits reset.

The user must then select a move. On their first move, the computer automatically takes a random spot on the board. 

The 3rd move (users second move) will likely be another block in the same row/column as their last choice. For this reason, once the player has taken the 3rd box (their second move) the computer will scan the board and see if the user has 2 out of 3 boxes filled. If so, the computer will automatically take the remaining box on the grid to thwart the users attempt to win by taking said box. If the users moves do not result in a "2/3 scenario", the computer will resort to running a function that finds a random space on the board to take.

