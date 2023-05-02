
//changes for first image
var randomNumber = Math.floor(Math.random()*6) + 1;
var firstImage = "dice"+randomNumber+".png";
document.querySelector("img.img1").setAttribute("src", firstImage);

//changes for second images
var randomNumber2 = Math.floor(Math.random()*6) + 1;
var secondImage = "dice"+randomNumber2+".png";
document.querySelector("img.img2").setAttribute("src", secondImage);


//To change the headings
//If player 1 wins
if(randomNumber>randomNumber2){
    document.querySelector("h1").innerHTML = " 🚩Player 1 wins";
}
//If player 2 wins
else if(randomNumber<randomNumber2){
    document.querySelector("h1").innerHTML = " Player 2 wins🚩";
}
//If it draws!
else{
    document.querySelector("h1").innerHTML = "Draw";
}
