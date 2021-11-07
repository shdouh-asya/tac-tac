const data = [
    { img: "m1.png", count: 2 , width: "100px"},
    { img: "m2.png", count: 2 , width: "100px"},
    { img: "m3.png", count: 2 , width: "100px"},
    { img: "m4.png", count: 2 , width: "100px"},
    { img: "m5.png", count: 2, width: "100px" },
    { img: "m6.png", count: 2 , width: "100px"}
]

data.sort(() => Math.random() - 0.5);
/* console.log(data); */

const length = data.length;
for (let index = 0; index < length*2; index++) {
    let randomNum = Math.floor(Math.random() * data.length);

    let insertImg = document.getElementById("img");
    /* insertImg.src = "images/"+data[randomNum].img; */
    console.log(insertImg);

    data[randomNum].count--;
    console.log(data);
    if(data[randomNum].count == 0)
        data.splice(randomNum, 1);
    

}

/* (data.length)*2 */