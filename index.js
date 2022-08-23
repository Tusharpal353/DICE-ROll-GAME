var randomnumber1 = Math.floor(Math.random()*6+1);
var randomImage="dice"+randomnumber1+".png";
var randomImagesource="images/"+randomImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImagesource);

// var randomnumber2 =Math.floor(Math.random()*6)+1;
// var ranImagesource2="images/dice"+ randomNumber2+".png";
// document.querySelectorAll("img")[0].setAttribute("src",ranImagesource2)





var randomnumber2 = Math.floor(Math.random()*6+1);
var randomImage2="dice"+randomnumber2+".png";
var randomImagesource2="images/"+randomImage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImagesource2);



/*
var randomnumber2 = Math.floor(Math.random()*6)+1;
var randomImage2="images/"+randomnumber1+".png";
// var randomImagesource2="images/"+randomImage;
// var image2=document.querySelectorAll("img")[0];
// image2.setAttribute("src",randomImagesource);
var randomImagesource2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImage2); 
*/

// var randomImage2 = "images/dice"+ randomnumber2+".png";
// document.querySelectorAll("img")[1].randomImage2.setAttribute("src",randomImage2);

if (randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="player 1 wins"
}
else if(randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML="player 2 wins"
}