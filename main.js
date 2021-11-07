const playerLive =3; 
const section = document.querySelector('section') ;

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
        imgSrc :"images//6.jpg" , id:"6"
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
        imgSrc :"images//6.jpg" , id:"6"
    },
]


const randomiz =()=> { 
    const cardData =getData() ;
    cardData.sort(()=>Math.random()-0.5) ; 
    console.log(cardData);
}
//randomiz();


const cardGenerator=()=>{ 
    const cardData =randomiz(); 
    //for html 
    cardData.forEach((el) => {
    const card = document.createElement('div');
    const face = document.createElement('img'); 
    const back = document.createElement('div'); 
    card.classList ="card" ;
    face.classList ="face" ;
    back.classList ="back" ; 
    
    face=el.imgSrc ; 
    

    // here is the html 
    section.appendchild(card); 
    card.appendChild(face);
    card.appendChild(back);  

    card.addEventListener('click',function(e){ 
        checkCards(e) ;
    })
    });
    
}

function checkCards(e) { 
    const clickedCard = e.target;
    console.log(clickedCard) ;

}
