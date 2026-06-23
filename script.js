const correctPassword = "adiee";



function unlock(){


let pass =
document.getElementById("password").value;



if(pass === correctPassword){


document.getElementById("lockScreen")
.style.display="none";


document.getElementById("main")
.classList.remove("hidden");



let music =
document.getElementById("music");


music.play();



}

else{


alert("Wrong password 😭");


}


}






let reactions = [

{
    gif:"Pictures/g5.gif",
    text:"You made me happy 😆❤️"
},

{
    gif:"Pictures/g6.gif",
    text:"Stop making me blush 😳"
},

{
    gif:"Pictures/g3.gif",
    text:"I love you ❤️"
},

{
    gif:"Pictures/g2.gif",
    text:"Super Ganda mo Adiee ❤️"
},

{
    gif:"Pictures/g1.gif",
    text:"You're my favorite person 🥰❤️"
},

{
    gif:"Pictures/g4.gif",
    text:"I miss you already 😘"
}

];


let reactionIndex = 0;

function showReaction(){

    let current = reactions[reactionIndex];

    document.getElementById("reaction").src = current.gif;
    document.getElementById("reactionText").innerHTML = current.text;

    reactionIndex++;

    if(reactionIndex >= reactions.length){
        reactionIndex = 0;
    }

}

// Floating Hearts


function createHeart(){


let heart=document.createElement("div");


heart.className="heart";


heart.innerHTML="❤️";


heart.style.left=
Math.random()*100+"vw";



heart.style.animationDuration=
(3+Math.random()*3)+"s";



document
.getElementById("hearts")
.appendChild(heart);



setTimeout(()=>{

heart.remove();

},6000);



}



setInterval(createHeart,500);