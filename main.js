var duration=0;
const playerLive =3; 
const section = document.querySelector("section") ;
const StartBtn=document.getElementById("btn"); 

// to get pic 
const getData=()=>[ 
    {
        imgSrc :"images//1.png" , id:"1"

    },{
        imgSrc :"images//2.jpg" , id:"2"
    },{
        imgSrc :"images//3.jpg" , id:"3"
    },{
        imgSrc :"images//4.jpg" , id:"4"
    },{
        imgSrc :"images//5.jpg" , id:"5"
    },{
        imgSrc :"images//6.png" , id:"6"
    },
    {
        imgSrc :"images//1.png" , id:"1"

    },{
        imgSrc :"images//2.jpg" , id:"2"
    },{
        imgSrc :"images//3.jpg" , id:"3"
    },{
        imgSrc :"images//4.jpg" , id:"4"
    },{
        imgSrc :"images//5.jpg" , id:"5"
    },{
        imgSrc :"images//6.png" , id:"6"
    },
]


const randomiz =()=> { 
    const cardData =getData() ;
    cardData.sort(()=>Math.random()-0.5) ; 
    return cardData ;
}

let boxes = [];
var moves=0;
const cardGenerator=()=>{ 
    const cardData =randomiz(); 
    //for html 
    cardData.forEach((item ,idx) => {
    const card = document.createElement('div');
    const face = document.createElement('img'); 
    const back = document.createElement('div'); 
    card.classList ="card" ;
    face.classList ="face" ;
    back.classList ="back" ; 
    
    face.src=item.imgSrc;  
    
    let objBox={};
    let indexBox = boxes.findIndex(i => i.img == item.imgSrc);
    if( indexBox != "-1"){
        boxes[indexBox].box.push(idx);
    }  
    else
        objBox = {img: item.imgSrc, box:[idx]}
    boxes.push(objBox);
    console.log(boxes); 
    card.id=idx;

    card.onclick = function(){
        
        // to flip card 
    card.classList.toggle("ToggelCard");
    
    /// for Compare Cards 
    checkCard(idx);  
    
    moves++ 

};
    //// for push it to HTML 
    section.appendChild(card); 
    card.appendChild(face);
    card.appendChild(back);  
   
  
    });
    
};


var score=0;
let arr = [];
let arrdiv = [];


function checkCard(id){
    const clickedCard = document.getElementById(id);
    clickedCard.classList.add("flipper"); 
    const flippedCard= document.querySelectorAll(".flipper"); 

    if(arr.length == 0){
        arr.push(clickedCard.children[0].src);
        arrdiv.push(clickedCard);
    }   
    else if(clickedCard.children[0].src == arr[0]){
        console.log("match");
        arr.pop();
        arrdiv.pop();
        score++;
    }
    else{
        console.log("Not match");
        reSet(clickedCard); 
        reSet(arrdiv[0]);
        arrdiv.pop();
        arr.pop();
        console.log(clickedCard);
    }

   
}

var remainingTime=0;


/////////// start Game : 
function startGame() { 
    StartBtn.classList.add("hide"); 
    document.getElementById('timer').classList.remove('hide'); 
    timer(); 
    cardGenerator();
}

//// Timer 
function timer(){
    var sec = 3;
    var timer = setInterval(function(){
        document.getElementById('timer').innerHTML='00:'+sec;
        sec--;
        if (sec < 0 || score==6) {

            duration=59-sec-1;
            clearInterval(timer);
            // alert("your score is : "+score +"/6       your moves : "+ moves+"       the duration you take for solving this game "+duration + "seconds");
            swal({
                title: "Good job" ,
                text:"your score is : "+score +"/6      \n"+ "your moves : "+ moves+" \nthe duration you take for solving this game : "+duration + " seconds",
                icon: "success",
                button: "Ok!",
              });
        }
        remainingTime++;
    }, 1000);


  }

  // for start 
 StartBtn.addEventListener("click",()=>startGame()); 



////// Re-set cards 

 function reSet(card){ 
    var sec = .5;
    var timer = setInterval(function(){
        
        console.log(sec); 
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            card.classList.remove("ToggelCard"); 
            console.log(card);
        }
    }, 1000);
 }