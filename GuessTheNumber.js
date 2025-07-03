//get all nodes from html
const againbtn=document.querySelector(".again-btn");
const number=document.querySelector(".number");
const inputnumber=document.querySelector("#number-box");
const checkbtn=document.querySelector(".check-btn");
const msg=document.querySelector(".message");
const score=document.querySelector(".given-score")
const highscore=document.querySelector(".highscore")

//generate a random num and score
let random=Math.trunc(Math.random()*20)+1;
let scores=20;
console.log(random);
console.log(scores);

//check btn functionality
const checkBtnFunc=()=>{
    const guessed=Number(inputnumber.value);
    if(!guessed){
        msg.textContent="Not entered any value";
    }else if(guessed===random){
        msg.textContent="YOU WON!!!";
        document.querySelector("body").style.backgroundColor="green"; 
        number.textContent=guessed;      
        highscore.textContent=scores;
        

    }else if(guessed<random){
        scores-=1;
        score.textContent=scores;
        msg.textContent="Too low"
    }else if(guessed>random){
        scores-=1;
        score.textContent=scores;
        msg.textContent="Too high";
    }
}
checkbtn.addEventListener("click",checkBtnFunc);

//again btn
const againbtnFunc=()=>{
    document.querySelector("body").style.backgroundColor="black";
    inputnumber.value="";
    number.textContent="?";  
    score.textContent="20";
    msg.textContent="Guess The Number..."
   


}
againbtn.addEventListener("click",againbtnFunc);