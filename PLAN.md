# tic-tac-toe-project
This game will allow user to play tic-tac-toe against a computer

Design plan -



No. 1
// First scenario is user vs user (two player mode)
// This should be fairly straight forward and should involve 
// Prompt user to choose X or O
// Given user clicks X, make a score card appear that is holding a couple of divs, 
// divs should X and O at zero, also ask Player 1 (X/O) to make their move
// Same code if user chose O instead


No. 2
// When player 1 clicks a box in the grid, push that players selected character to html
// Once that occurs, check if player has one (ie, if box 1&2&2 = x then do this -- will write design for this later)
// Note: May do this each time, even though nobody can win after only one turn, just to keep it simple and flowing
// Note: Try to use .this for above code

No. 3 
// Write win function to detect if player won
// Part I: Each time player 1 or player 2 or machine enters a choice,
// run checker to see if anyone has one
// Part II: If a there is a winner, send message to say they won, 
// then wait a couple seconds and reset the game
// OR perhaps just prompt them to reset so they can view who winner is indefinitely



No. 4
// Second scenario should be user vs machine
// This should definitely involve using delays so its more realistic
// ie, after player has made a selection, wait 1-2 seconds before machine pushes,
// then allow user to make their move

No. 5
// Research how to win or tie at tic-tac-toe
// Research this for both machine going first and player going first
// Write algorithm to handle responses
