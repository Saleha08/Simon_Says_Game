let gameseq=[];
let userseq=[];
let btns=["yellow","red","purple","green"];
let started=false;
let level=0;
let h2=document.querySelector('h2');
let high=0;

document.addEventListener("keypress",function(){
 if (started==false){
    console.log("Game Started..");
    started=true;
 }
 levelup();
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
      btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
      btn.classList.remove("userFlash");
    },250);
}

function levelup(){
  userseq=[]
  level++;
  h2.innerText=`Level ${level}`;
  let randIndex=Math.floor(Math.random()*3);
  let randColor=btns[randIndex];
  let randbtn=document.querySelector(`.${randColor}`);
  gameseq.push(randColor);
  console.log(gameseq);
  gameFlash(randbtn);


}
function checkAns(idx){
 
 if (userseq[idx]==gameseq[idx]){
    if(userseq.length==gameseq.length){
        setTimeout(levelup,1000);
    }

 }else{
    high=Math.max(high,level);
    h2.innerHTML=`Game Over!Your score is <b>${level}<br>Highest score: ${high}</b><br>Press any key to restart the game.`
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },150);
    reset();

 }

}
function btnPress(){
    let btn=this;
    userFlash(btn);
    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    checkAns(userseq.length-1);

    

}
let allbtns=document.querySelectorAll(".btn");
for (let btn of allbtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}