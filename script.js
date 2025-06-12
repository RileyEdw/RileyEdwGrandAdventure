/* let MaxHP = 30;
let HP = 30;
let MaxMP = 10;
let MP = 10;
let Attack = 5;
let Defense = 5;
let Magic = 5;
let Bucks = 20;  to be used in later version with more mechanics
MAKE A WAFFLE HOUSE requested by jacob p*/
let place = "entrance";
let button1 = document.querySelector(".option-one");
let button2 = document.querySelector(".option-two");
let button3 = document.querySelector(".option-three");
let button4 = document.querySelector(".option-four");
let image = document.querySelector(".imageStatus");
let text = document.querySelector(".descText");
let gotAKey = false;
let gotRepellent = false;
let goblinBeaten = false;
let bucks = 0;
let debt = false;
let flattened = false;
function resetGame(){gotAKey = false;
gotRepellent = false;
goblinBeaten = false;
bucks = 0;
debt = false;
flattened = false; place = "entrance"; 
text.innerHTML="The Depths lie before you, rumored for great danger and treasure...";
image.src= "images/caveEntrance.jpg";
    button1.innerHTML = "LET'S GO IN!";
    button2.innerHTML = "Not Right Now";
    button3.innerHTML = "Not Right Now";
    button4.innerHTML = "Nah, I'm outta here!";}
function endGame(){button1.innerHTML = "Reset Game.";
    button2.innerHTML ="Thanks for Playing!";
    button3.innerHTML ="Made by Riley Edwards";
    button4.innerHTML ="Made with HTML, CSS, and JS"
}








// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.


button1.addEventListener('click', function(){
if(place == "ending"){resetGame(); return};
if(place == "entrance"){text.innerHTML= "You walk into the cave, and see a path to the west, east, as well as a door.";
    image.src="images/caveDoor.jpg";
    place = "greatdoor";
    button1.innerHTML = "Open The Door";
    button2.innerHTML = "Go to the West";
    button3.innerHTML = "Go to the East";
    button4.innerHTML = "Break Down the Door!";
    return
};
if(place == "greatdoor" && gotAKey == true){text.innerHTML="VICTORY"}
if(place == "greatdoor" && gotAKey == false){text.innerHTML="The door is locked, with a Golden Padlock."}
if(place == "evilgoblin"){text.innerHTML="The goblin readies himself. \"Let's do this. If you lose, you have to do my laundry!\"";
    place = "RPSgoblin";
    button1.innerHTML = "Use PAPER!"
    button2.innerHTML = "Use ROCK!"
    button3.innerHTML = "Use SCISSORS!"
    button4.innerHTML = "Not Right Now"
    return
}
if(place == "RPSgoblin"){text.innerHTML="The goblin used ROCK! You won! \"Aw, man. Well, you won fair and circle. You can go...\""}
});

button2.addEventListener('click', function(){
if(place == "entrance"){}
if(place == "greatdoor"){text.innerHTML= "You see a man running a store down here. There is also a path to the North.";
    image.src="images/caveShop.jpg";
    place = "store"
    button1.innerHTML = "Go to the North";
    button2.innerHTML = "Buy Dragon Repellent for 10 bucks";
    button3.innerHTML = "Buy the Golden Key for 50 bucks";
    button4.innerHTML = "Go back to the Door";
    return
}
if(place == "store" && bucks <= 10){text.innerHTML="You don't have enough money."
}
if(place == "store" && bucks >= 10 && gotRepellent == true){text.innerHTML="No more Dragon Repellent. You bought the last can earlier."}
else if(place == "store" && bucks >= 10){text.innerHTML="You buy some Dragon Repellent for 10 bucks."
    gotRepellent = true;
    bucks -= 10
}
if(place == "evilgoblin"){text.innerHTML="\"My name is Rocky, and I don't know how to read.\", he says."}
if(place == "RPSgoblin"){text.innerHTML= "The goblin also used ROCK. It's a tie! Go again!"}
});
button3.addEventListener('click', function(){
if(place == "entrance"){}
if(place == "greatdoor" && goblinBeaten == false){text.innerHTML="You see a mischievous goblin. He says: \"Wait. In order to pass, you need to beat me at rock-paper-scissors.\"";
    place = "evilgoblin";
    image.src="images/goblin.png"
    button1.innerHTML = "Play the Game";
    button2.innerHTML = "Ask who he is?";
    button3.innerHTML = "Not Right Now";
    button4.innerHTML = "Go back to the Door";
    return
}
if(place == "RPSgoblin"){text.innerHTML="The goblin used ROCK! You lost... You have to do the goblin's laundry, and it is stinky. So stinky, in fact, that you lose all feeling in your nose. The End.";
    place="ending";
    image.src="images/laundry.png"
}
});
button4.addEventListener('click', function(){
if(place == "entrance"){text.innerHTML= "A boring but reasonable choice. You go to work your 9-5 for 10 years before being replaced by AI. The End.";
    place ="ending";
    image.src="images/office.jpg";
    endGame();
};
if(place == "greatdoor"){text.innerHTML="The door fires an Ultra Beam at you. You are sent flying all the way to France. The End.";
    place ="ending";
    image.src="images/france.jpg"
    endGame()
};
});
