const boxes=document.querySelectorAll(".box");


const title=document.querySelector(".title-of-game");

const newGameButton=document.querySelector(".new-game");

let playerMove;

let grid;

const winPosition=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];


function changePlayer(){
  if(playerMove==="X")
    playerMove="O";
  else {
    playerMove="X";
  }
  title.innerText=`Current Player- ${playerMove}`;
}

function checkForWinner()
{
  let winner="";
 
  winPosition.forEach((each)=>{
    if((grid[each[0]]==grid[each[1]])&&(grid[each[0]]==grid[each[2]])&&(grid[each[2]]==grid[each[1]])&& (grid[each[0]]!=""||grid[each[0]]!=""||grid[each[0]]!=""))
    {
      if(grid[each[0]]==='X')
      {
        winner="X";
      }
      else {
        winner="O";
      }
        boxes.forEach((box)=>{
          box.style.pointerEvents="none";
        })

        boxes[each[0]].classList.add("win");
        boxes[each[1]].classList.add("win");
        boxes[each[2]].classList.add("win");

    }
  
});

 
if(winner!=="")
{
  title.innerText=`Winner is- ${winner}`; 
  newGameButton.classList.add("active");
  return;
}


let cnt=0;
grid.forEach((box)=>{
  if(box!=="") cnt++;
});

if(cnt===9)
{
  title.innerText=`Game Tie.`;
  newGameButton.classList.add("active");
}
}

function playGame()
{
  playerMove="X";
  grid=["","","","","","","","",""];
 
  boxes.forEach((box, index)=>{
      box.innerText="";
      boxes[index].style.pointerEvents="all";

      box.classList=`box box${index+1}`;
});
   newGameButton.classList.remove("active");
   title.innerText=`Current Player- ${playerMove}`;
  
};

playGame();

function handleclick(index)
{
  if(grid[index]===""){
    boxes[index].innerText=playerMove;
    grid[index]=playerMove;
     boxes[index].style.pointerEvents="none";
    changePlayer();
    checkForWinner();
  }
}


boxes.forEach((box,index)=>{
  box.addEventListener("click",()=>{
    handleclick(index);
  })
})

newGameButton.addEventListener("click",playGame);
