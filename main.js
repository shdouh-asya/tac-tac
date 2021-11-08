
const playerLive =3; 
const section = document.querySelector("section") ;

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


const cardGenerator=()=>{ 
    const cardData =randomiz(); 
    //for html 
    cardData.forEach((item) => {
    const card = document.createElement('div');
    const face = document.createElement('img'); 
    const back = document.createElement('div'); 
    card.classList ="card" ;
    face.classList ="face" ;
    back.classList ="back" ; 
    
    face.src=item.imgSrc ; 
    
    // here is the html 
    section.appendChild(card); 
    card.appendChild(face);
    card.appendChild(back);  
   
   card.addEventListener("click",(e)=>{
       card.classList.toggle("ToggelCard");
   })
    });
    
};





function checkCards(e) { 
    const clickedCard = e.target;
    console.log(clickedCard) ;

}
cardGenerator();

