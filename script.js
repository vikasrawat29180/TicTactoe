console.log("welcome to tictactoe");
let music=new Audio("music.mp3");
// let turn=new Audio("ting.mp3");
let audioTurn=new Audio("ting.mp3")
let gameoverAudio=new Audio("gameover.mp3");
 let gameover=false;
let reset=document.getElementById('reset');


let turn ="X";
//Funtion to change the turn
const changeTurn=()=>{
    return turn ==="X"?"O":"X"

}
//funtion to check  for a win
const checkWin=()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
wins.forEach(e =>{
    if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) &&(boxtext[e[0]].innerText===boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !=="")){

        document.querySelector('.info').innerText=boxtext[e[0]].innerText+" won";
        gameover=true;
        // document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width='200px'
        let imgElement = document.querySelector('.imgBox img');
        if (imgElement) {
            imgElement.style.width = '200px';
        }


    }
})
 

}

//Game Logic
// music.play();
 let boxes=document.getElementsByClassName("box");
 Array.from(boxes).forEach(element=>{
  let boxtext=element.querySelector('.boxtext');
  element.addEventListener('click',()=>{
    if(boxtext.innerText===''){
        boxtext.innerText=turn;
       turn= changeTurn();
        audioTurn.play();
        checkWin();
        if(!gameover){

            document.getElementsByClassName("info")[0].innerText="Turn for"+turn
        }

    }
  })


 })

 reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext')
    Array.from(boxtexts).forEach(element=>{
        element.innerText=""
    })
    turn="X";
    gameover=false
    document.getElementsByClassName("info")[0].innerText="Turn for"+turn
    let imgElement = document.querySelector('.imgBox img');
        if (imgElement) {
            imgElement.style.width = '00px';
        }
 })