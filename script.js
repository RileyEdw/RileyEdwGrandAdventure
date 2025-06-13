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
keydisplay = document.querySelector(".keyslot")
let gotRepellent = 1;
repeldisplay = document.querySelector(".repelslot");
let gotWaffle = 1;
waffledisplay = document.querySelector(".waffleslot")
let goblinBeaten = false;
let bucks = 2;
buckdisplay = document.querySelector(".moneyCount")
let debt = false;
let flattened = false;
function resetGame(){gotAKey = 1;
gotRepellent = 1;
gotWaffle = 1;
goblinBeaten = false;
bucks = 2;
debt = false;
flattened = false; place = "entrance"; 
text.innerHTML="The Depths lie before you, rumored for great danger and treasure... <br> By the way, a Not Right Now means there is no option available for that button for that decision.";
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
function updateMoney(){buckdisplay.innerHTML = (bucks) + " bucks"}

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
if(place == "greatdoor" && gotAKey == false){text.innerHTML="The door is locked, with a Golden Padlock. There is a thin gap under the door, though..."}
if(place == "evilgoblin"){text.innerHTML="The goblin readies himself. \"Let's do this. If you lose, you have to do my laundry!\"";
    place = "RPSgoblin";
    button1.innerHTML = "Use PAPER!"
    button2.innerHTML = "Use ROCK!"
    button3.innerHTML = "Use SCISSORS!"
    button4.innerHTML = "Not Right Now"
    return
}
if(place == "RPSgoblin"){text.innerHTML="The goblin used ROCK! You won! \"Aw, man. Well, you won fair and circle. You can go...\"";
    place = "chillgoblin";
    goblinBeaten = true
    button1.innerHTML ="Keep Going Forward.";
    button2.innerHTML ="Ask who he is.";
    button3.innerHTML ="Ask to borrow some cash.";
    button4.innerHTML ="Go back to the Door";
    return
}
if(place == "chillgoblin"){text.innerHTML="The path leads out of the cave and to a fork in the road. Looks like you can go left or right.";
    place = "fork";
    image.src="images/forkRoad.jpg"
    button1.innerHTML ="Not Right Now.";
    button2.innerHTML ="Go Left."
    button3.innerHTML ="Go Right."
    button4.innerHTML ="Go back to the Cave."
    return
}
if(place == "wafflehouse" && bucks <= 8){text.innerHTML="You don't have enough money."}
if(place == "wafflehouse" && bucks >= 8 && gotWaffle > 1){text.innerHTML="\"I'm sorry. Due to shortages, we are only allowing one waffle per person today\"<br> says Jacob the Parrot."}
if(place == "wafflehouse" && bucks >= 8){text.innerHTML="You buy a waffle for 8 bucks. <br> You're not hungry, though, so you put it in your pocket."
    gotWaffle = 2;
    repeldisplay.innerHTML = "A Tasty Waffle";
    bucks -= 8;
    updateMoney()
}
});
/*BUTTON 2, LEFT */
button2.addEventListener('click', function(){
if(place == "entrance"){}
if(place == "greatdoor"){text.innerHTML= "You see a talking rock named Jehanna running a store. <br>There is also a path to the North.";
    image.src="images/caveShop.jpg";
    place = "store"
    button1.innerHTML = "Go to the North";
    button2.innerHTML = "Buy Dragon Repellent for 15 bucks";
    button3.innerHTML = "Buy the Golden Key for 50 bucks";
    button4.innerHTML = "Go back to the Door";
    return
}
if(place == "store" && bucks <= 15){text.innerHTML="You don't have enough money."
}
if(place == "store" && bucks >= 15 && gotRepellent > 1){text.innerHTML="No more Dragon Repellent. You bought the last can earlier."}
else if(place == "store" && bucks >= 15){text.innerHTML="You buy some Dragon Repellent for 15 bucks."
    gotRepellent = 2;
    repeldisplay.innerHTML = "Can of Dragon Repellent"
    bucks -= 15
    updateMoney()
}
if(place == "evilgoblin"){text.innerHTML="\"My name is Rocky, and I don't know how to read.\", he says."}
if(place == "RPSgoblin"){text.innerHTML= "The goblin also used ROCK. It's a tie! Go again!"}
if(place == "chillgoblin"){text.innerHTML="\"My name is Rocky, and I don't know how to read.\", he says."}
if(place == "fork"){text.innerHTML="You follow the path to a local Waffle House. There's a wizard parrot named Jacob working as a cashier.";
    place = "wafflehouse"
    button1.innerHTML ="Buy a Waffle for 8 bucks."
    button2.innerHTML ="Ask for a job."
    button3.innerHTML ="Ask him to teach you magic."
    button4.innerHTML ="Leave the Waffle House"
    image.src="images/wafflehouse.jpg"
    return
}
});
/*BUTTON 3, RIGHT*/
button3.addEventListener('click', function(){
if(place == "entrance"){}
if(place == "greatdoor" && goblinBeaten == false){text.innerHTML="You see a mischievous goblin. He says: \"Wait. In order to pass, you need to beat me at rock-paper-scissors.\"";
    place = "evilgoblin";
    image.src="images/goblin.png"
    button1.innerHTML = "Play the Game";
    button2.innerHTML = "Ask who he is.";
    button3.innerHTML = "Not Right Now";
    button4.innerHTML = "Go back to the Door";
    return
}
if(place == "greatdoor" && goblinBeaten == true){text.innerHTML="You pass the goblin again. \"What's good, buddy?\"";
    place = "chillgoblin";
    image.src="images/goblin.png"
    button1.innerHTML ="Keep Going Forward.";
    button2.innerHTML ="Ask who he is.";
    button3.innerHTML ="Ask to borrow some cash.";
    button4.innerHTML ="Go back to the Door";
    return
}
if(place == "store" && bucks <= 50){text.innerHTML="You don't have enough money."
}
if(place == "store" && bucks >= 50 && gotAKey == false){text.innerHTML="You buy the Golden Key for 50 bucks.";
    gotAKey = true;
    keydisplay.innerHTML = "The Golden Key";
    bucks -= 50}
if(place == "RPSgoblin"){text.innerHTML="The goblin used ROCK! You lost... You have to do the goblin's laundry, and it is stinky. <br>So stinky, in fact, that you lose all feeling in your nose. The End.";
    place="ending";
    image.src="images/laundry.png";
    endGame();
}
if(place == "chillgoblin" && debt == false){text.innerHTML="\"Sure, here you go.\" The goblin hands you 10 bucks.";
    debt = true;
    bucks += 10;
    updateMoney();
    console.log(bucks)
    return
}
if(place == "chillgoblin" && debt == true){text.innerHTML="\"You already owe me 10 bucks. Go get a job, I dunno.\""}
if(place == "wafflehouse"){text.innerHTML="\"Okay, sure.\""}
});
/* BUTTON 4 */
button4.addEventListener('click', function(){
if(place == "entrance"){text.innerHTML= "A boring but reasonable choice. You go to work your 9-5 for 10 years before being replaced by AI. The End.";
    place ="ending";
    image.src="images/office.jpg";
    endGame();
};
if(place == "greatdoor"){text.innerHTML="The door is NOT going to tolerate that. The door fires an Ultra Beam at you. You are sent flying all the way to France. The End.";
    place ="ending";
    image.src="images/france.jpg"
    endGame()
};
if(place == "store"){text.innerHTML="You go back to the Door.";
    image.src="images/caveDoor.jpg";
    place = "greatdoor";
    button1.innerHTML = "Open The Door";
    button2.innerHTML = "Go to the West";
    button3.innerHTML = "Go to the East";
    button4.innerHTML = "Break Down the Door!";
};
if(place == "evilgoblin"){text.innerHTML="You go back to the Door.";
    image.src="images/caveDoor.jpg";
    place = "greatdoor";
    button1.innerHTML = "Open The Door";
    button2.innerHTML = "Go to the West";
    button3.innerHTML = "Go to the East";
    button4.innerHTML = "Break Down the Door!";
};
if(place == "chillgoblin"){text.innerHTML="You go back to the Door.";
    image.src="images/caveDoor.jpg";
    place = "greatdoor";
    button1.innerHTML = "Open The Door";
    button2.innerHTML = "Go to the West";
    button3.innerHTML = "Go to the East";
    button4.innerHTML = "Break Down the Door!";
};
if(place == "fork"){text.innerHTML="You pass the goblin again. \"What's good, buddy?\"";
    place = "chillgoblin";
    image.src="images/goblin.png"
    button1.innerHTML ="Keep Going Forward.";
    button2.innerHTML ="Ask who he is.";
    button3.innerHTML ="Ask to borrow some cash.";
    button4.innerHTML ="Go back to the Door";
    return
}
if(place =="wafflehouse"){text.innerHTML="You return to the fork in the road."
    place = "fork";
    image.src="images/forkRoad.jpg"
    button1.innerHTML ="Not Right Now.";
    button2.innerHTML ="Go Left."
    button3.innerHTML ="Go Right."
    button4.innerHTML ="Go back to the Cave."
}
});
