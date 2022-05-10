

function rollDice(){
    let randomNumber= Math.random();
randomNumber=Math.floor(randomNumber*6+1);

let picture="images/dice"+randomNumber+".png";

 document.querySelector(".img1").setAttribute("src", picture);
 let randomNumber2= Math.random();
randomNumber2=Math.floor(randomNumber2*6+1);

let picture2="images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",picture2);

if(randomNumber>randomNumber2){
    document.querySelector("h1").innerHTML= player1Name+"  win "  ;
}else if (randomNumber==randomNumber2){
    document.querySelector("h1").innerHTML=" It's a Tie! "
}
else{
    document.querySelector("h1").innerHTML= player2Name+" win ";

}
}


changeName= ()=>{
    player1Name=prompt("player 1's name: ")
    player2Name=prompt("player 2's name: ")


    document.querySelector(".player1").innerHTML=player1Name;
    document.querySelector(".player2").innerHTML=player2Name;

}