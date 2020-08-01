
//------------------------ Game Project---------------------------
//Do you remember the game Battleship we created before? well .... it is time to make it with the DOM!!
//We are providing you with the design of a board (in the DOM) for a player1, you have to create the board for the player2 using the id property 'board_player2' -> it is the second list (ul) in your index.html file
//First ask the players for their names (use propmt)
//Now each time the turn player clicks on any cell of the opponent's board (you have to verify if the player is clicking the right board) the program needs to verify if there is an opponent's ship in that cell. If it is then the opponent has one less ship
//We want you to store the data of each player in two Player objects. Each object has to store: name, remaining boats, and their respective board.
//Each board needs to be initialized randomly with '0' and four '1' wich means the state of the cell. Numbers 1 are representing the 4 positions of the player's ships
//Also we want you to display the name of the turn player in the tag that has the id 'turn_player'. And if there is a winner  a text with: 'Congratulationes {name_player}!! you win'
//in the index.html file you are going to find 4 more ids: 'name_player1' , 'name_player2' , 'ships_player1' , 'ships_player2'. We want to see the information of each player in the respective elements
//As our previous Battleship, the winner is the player that hits the 4 opponent's ships first
//one more Thing create a 'reset' and a 'new game' buttons as childs of the element with the id 'buttons'. the reset button has to start the game again and the new game create a new game with new players and a new random board.

const board_Player1 = document.getElementById('board_player1');
const board_Player2 = document.getElementById('board_player2');
let name1 = document.getElementById("name_player1");
let name2 = document.getElementById("name_player2");
namePlayer1 = prompt('Please enter the name for player 1');
namePlayer2 = prompt('Please enter the name for player 2');
let turn = document.getElementById("turn_player");
let cell = document.createElement('div');
let cell1;
let otherPlayer;
let currentPlayer;
let lives1 = document.getElementById('ships_player1');
let lives2 = document.getElementById('ships_player2');
//creating two buttons
const buttons = document.getElementById('buttons');
const buttonNewGame = document.createElement('button');
buttons.appendChild(buttonNewGame);
buttonNewGame.textContent = "New Game"; 
const buttonReset = document.createElement('button');
buttons.appendChild(buttonReset);
buttonReset.textContent = "Reset"; 

//creating two objects for players
  const player1 = {
    name: namePlayer1,
    gameBoard: board_Player1,
    lives: 4
  };
  const player2 = {
      name: namePlayer2,
      gameBoard: board_Player2,
      lives: 4
    };
  
    //graphing bords for both players
  function graphBoards(players){
  for (var x = 0; x < 4; x++) {
    
  const li = document.createElement('li'); // creating childs for the list (board), in this case represent a row number 'x' of the board

  for (var y = 0; y < 4; y++) {

    cell = document.createElement('div');
    cell.className = "square"; // adding css properties to make it looks like a square
    cell.textContent = `${x},${y}`;  // saves the coordinates as a string value 'x,y'
    cell.value = 0;//state of the cell
      //this function adds the click event to each cell
      cell.addEventListener( 'click', play );
      //     let cell = e.target; // get the element clicked
      //     console.log( cell.textContent) //display the coordinates in the console
      //     cell.style.visibility = 'hidden';// this  means that the contents of the element will be invisible, but the element stays in its original position and size / try it clicking on any of the black cells (in your browser) and see whats happens
      //     //cell.style.background ="purple"; //with this propertie you can change the background color of the clicked cell. try comment the line bellow and uncomment this line. Do not forget to save this file and refresh the borwser to see the changes
      // });
     
      li.appendChild(cell); //adding each cell into the row number x
    }
    players.appendChild(li); 
     //adding each row into the board
}
}


    // function for random numbers for locations of ships
    function randomValues (min,max){
      return Math.floor(Math.random()*(max-min+1))+min;
      }; 

    function createShips(){
        const squares = document.querySelectorAll(".square");
      };
      //placing ships into the cells
    function insertValues (xxx) {
      let shipCount =0;
  
    while (shipCount < 4 ){
        let x1 = randomValues(0,3);
        let y1 = randomValues(0,3);
        let row1 = xxx.getElementsByTagName('li')[x1];
        let cell1 = row1.getElementsByTagName('div')[y1];
      
        if (cell1.value === 0 ){
          cell1.value = 1;
          shipCount ++;
          console.log(x1,y1);
        } else {
          continue
        } }
      
      } 
    
      //pllaying the battleship, checking if clicket cell had a ship
    function play (e){
      let cell = e.target;
      if (cell.value === 1){
         cell.style.background = "darkblue"; 
         alert ('You hit!')
         otherPlayer.lives --;
         showNames();
         showTurn();
         showLives();
         
        }
         else {
          cell.style.background = "lightblue";
          alert ('You missed!');
          if (currentPlayer === player1){
            currentPlayer = player2;
            otherPlayer = player1;
          }
          else {
            currentPlayer = player1;
            otherPlayer = player2;
          }
          
        }
        showNames();
        showTurn();
        //showLives ();
        winnerDetermine(); 
        
    }
    // setting first random player turn
    if (Math.random() > 0.5 ){
      currentPlayer = player1;
      otherPlayer = player2;
      
    } else {
      currentPlayer = player2;
      otherPlayer = player1;
      
    };

      showNames();
      showTurn();
      showLives();

    //showing who's turn to shoot
    function showTurn (){
      turn.textContent = currentPlayer.name;
    };
    //showing names
    function showNames(){
      name1.textContent = player1.name;
      name2.textContent = player2.name;
    };
  
    //showing lives
    function showLives(){
      lives1.textContent = player1.lives;
      lives2.textContent = player2.lives;
    };
    
    //determining the winner
    function winnerDetermine (){
      if (player1.lives === 0 || player2.lives === 0){
      turn.textContent = `Congratulations you won ${currentPlayer.name} !`;

    };

  };
    
  //clearing the boards for the next game
    function removeBoard1 () {
      var removeBoard1 = document.getElementById("board_player1");
      var cell = removeBoard1.firstChild;
    
      while( cell ) {
        removeBoard1.removeChild( cell );
        cell = removeBoard1.firstChild;
      }
    }

    function removeBoard2 () {
      var removeBoard2 = document.getElementById("board_player2");
      var cell = removeBoard2.firstChild;
    
      while( cell ) {
        removeBoard2.removeChild( cell );
        cell = removeBoard2.firstChild;
      }
      };
      //reseting lives for the "reset" button
      function resetLives() {
        player1.lives = 4;
        player2.lives = 4;
      };
      //keeping same ships, but changing the color of all cells to black for "reset" button
      function resetColorBoards (){
        for (let cell of document.querySelectorAll("#board_player1>li>div")){
          cell.style.background = "black";
        }
        for (let cell of document.querySelectorAll("#board_player2>li>div")){
          cell.style.background = "black";
        }

      };

      graphBoards(board_Player1);
      graphBoards(board_Player2);
      insertValues(board_Player1);
      insertValues(board_Player2);

      //functions for the "New Game" button
      buttonNewGame.addEventListener('click', (e) =>{
        player1.name = prompt('Please enter the name for player 1');
        player2.name = prompt('Please enter the name for player 2');
        removeBoard1();
        removeBoard2();
        graphBoards(board_Player1);
        graphBoards(board_Player2);
        insertValues(board_Player1);
        insertValues(board_Player2);
        showNames();
      } );

      //functions for the "reset" button
      buttonReset.addEventListener('click', (e) =>{
        resetLives();
        resetColorBoards();

      } );

  