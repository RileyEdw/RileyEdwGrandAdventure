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
waffledisplay = document.querySelector(".waffleslot");
let fireballKnown = false;
firedisplay = document.querySelector(".fireballslot");
let goblinBeaten = false;
let bucks = 3;
buckdisplay = document.querySelector(".moneyCount");
let debt = false;
let flattened = false;
let job = false;
let idol = false;
function resetGame(){gotAKey = false;
gotRepellent = 1;
gotWaffle = 1;
goblinBeaten = false;
bucks = 3;
updateMoney();
keydisplay.innerHTML="";
repeldisplay.innerHTML="";
waffledisplay.innerHTML="";
firedisplay.innerHTML="";
debt = false;
job = false;
idol = false;
fireballKnown = false;
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
function returnToDoor(){text.innerHTML="You go back to the Door.<br> You feel like you're being watched.";
    image.src="images/caveDoor.jpg";
    place = "greatdoor";
    button1.innerHTML = "Open The Door";
    button2.innerHTML = "Go to the West";
    button3.innerHTML = "Go to the East";
    button4.innerHTML = "Break Down the Door!";
if(fireballKnown == true){button4.innerHTML = "Cast FIREBALL at the door!"};
if(flattened == true && gotAKey == false){button1.innerHTML = "Slip under the Door."};
if(gotAKey == true){button1.innerHTML = "UNLOCK THE DOOR."}
}

button1.addEventListener('click', function(){
if(place == "ending"){resetGame(); return};
if(place == "entrance"){text.innerHTML= "You walk into the cave, and see a path to the west, east, as well as a door. <br>You feel like you're being watched...";
    image.src="images/caveDoor.jpg";
    place = "greatdoor";
    button1.innerHTML = "Open The Door";
    button2.innerHTML = "Go to the West";
    button3.innerHTML = "Go to the East";
    button4.innerHTML = "Break Down the Door!";
    return
};
if(place == "greatdoor" && flattened == true){text.innerHTML = "You slip under the door and see the Chest of Unlimited Gold!<br>Unfortunately, you can't take it back under the door, as it's too big. You don't feel like you're being watched.";
    place = "behinddoor";
    image.src="images/treasure.jpg"
    button1.innerHTML = "Break down the Door!"
    button2.innerHTML = "Look for another exit."
    button3.innerHTML = "Not Right Now."
    if(fireballKnown== true){button3.innerHTML = "Cast Fireball on the door."}
    button4.innerHTML = "Slip back under the Door."
    return
}
if(place == "behinddoor"){text.innerHTML = "You can't do much to it, due to being as flat as paper. <br>The door doesn't react at all, though."}
if(place == "store"){text.innerHTML = "You move forward and see a large red dragon flying in a huge room ahead. The wind is intense.";
    place = "dragonentry";
    button1.innerHTML = "Approach the Dragon."
    button2.innerHTML = "Not Right Now."
    if(gotWaffle==2){button2.innerHTML = "Throw in a Waffle!"}
    button3.innerHTML = "Not Right Now."
    if(fireballKnown == true){button3.innerHTML = "Cast FIREBALL!"}
    button4.innerHTML = "Go back to the Store."
}
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
if(place == "wafflehouse" && bucks >= 8 && gotWaffle == 1){text.innerHTML="You buy a waffle for 8 bucks. <br> You're not hungry, though, so you put it in your pocket."
    gotWaffle = 2;
    waffledisplay.innerHTML = "A Tasty Waffle";
    bucks -= 8;
    updateMoney()
}
if(place == "temple"){text.innerHTML="You grab the 20 bucks. Suddenly, a boulder drops from the ceiling, crushing you and rolling outside.<br>You aren't badly hurt, but you're as flat as paper. You did lose the 20 bucks, though.";
    place = "fork";
    flattened = true;
    idol = true;
    image.src="images/forkRoad.jpg"
    button1.innerHTML ="Not Right Now.";
    button2.innerHTML ="Go Left."
    button3.innerHTML ="Go Right."
    button4.innerHTML ="Go back to the Cave."
    return
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
if(place == "behinddoor"){text.innerHTML="It looks like there's a hole in the ceiling, but it's just a glowing crystal formation."}
if(place == "store" && bucks <= 15){text.innerHTML="You don't have enough money."
}
if(place == "store" && bucks >= 15 && gotRepellent > 1){text.innerHTML="No more Dragon Repellent. You bought the last can earlier."}
else if(place == "store" && bucks >= 15){text.innerHTML="You buy some Dragon Repellent for 15 bucks."
    gotRepellent = 2;
    repeldisplay.innerHTML = "Dragon Repellent"
    bucks -= 15
    updateMoney()
}
if(place == "dragonentry" && gotWaffle == 2){text.innerHTML="You throw the waffle into the dragon's room. It swoops down and starts eating it!<br>It's distracted!"}
if(place == "evilgoblin"){text.innerHTML="\"My name is Rocky, and I don't know how to read.\", he says."}
if(place == "RPSgoblin"){text.innerHTML= "The goblin also used ROCK. It's a tie! Go again!"}
if(place == "chillgoblin"){text.innerHTML="\"My name is Rocky, and I don't know how to read.\", he says."}
if(place == "fork"){text.innerHTML="You follow the path to a local Waffle House. There's a wizard parrot named Jacob working as a cashier.";
    place = "wafflehouse"
    button1.innerHTML ="Buy a Waffle for 8 bucks."
    button2.innerHTML ="Ask for a job."
    button3.innerHTML ="Ask him to teach you magic."
    button4.innerHTML ="Leave the Waffle House."
    image.src="images/wafflehouse.jpg"
    return
}
if(place == "wafflehouse" && job == false){text.innerHTML="You are hired! You serve a couple customers until an angry woman comes up.<br> You start to tell her about the Waffle Charity Program, and she says: \"Just put the fries in the bag.\"";
    place = "job";
    button1.innerHTML = "Not Right Now.";
    button2.innerHTML = "ACCEPT.";
    button3.innerHTML = "REFUSE.";
    button4.innerHTML = "Not Right Now.";
    return
}
if(place == "wafflehouse" && job == true){text.innerHTML="You were already fired from here."}
if(place == "job"){text.innerHTML = "You put the fries in the bag. You continue to serve customers very well, and work your way<br> up the corporate ladder over 40 years. Eventually, you become the CEO of Waffle House. The End.";
    endGame()
    place = "ending";
    image.src="images/CEOoffice.jpg";
    buckdisplay.innerHTML = "2.4 Million Dollars."
}
if(place == "temple" && gotRepellent==2){text.innerHTML ="You take out the can of Dragon Repellent, and then swap it for the 20 bucks.<br> As you're leaving, a boulder rolls down and blocks the exit.";
    place = "fork";
    bucks += 20
    gotRepellent = 3
    repeldisplay.innerHTML=""
    updateMoney()
    idol = true;
    image.src="images/forkRoad.jpg"
    button1.innerHTML ="Not Right Now.";
    button2.innerHTML ="Go Left."
    button3.innerHTML ="Go Right."
    button4.innerHTML ="Go back to the Cave."
    return}
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
if(place == "behinddoor" && fireballKnown == true){text.innerHTML="You cast FIREBALL on the door, and it shatters into pieces! <br>The magical power of the door is left there, and you absorb it. You realize every type of magic that there is.<br>For many years, stories are told about you, the Legendary Mage! The End.";
    image.src="images/wizard.jpg";
    place="ending";
    firedisplay.innerHTML="All Magic"
    endGame();
}
if(place == "RPSgoblin"){text.innerHTML="The goblin used ROCK! You lost... You have to do the goblin's laundry, and it is stinky. <br>So stinky, in fact, that you lose all feeling in your nose. The End.";
    place="ending";
    image.src="images/laundry.png";
    endGame();
}
if(place == "chillgoblin" && debt == false){text.innerHTML="\"Sure, here you go.\" The goblin hands you 5 bucks.";
    debt = true;
    bucks += 5;
    updateMoney();
    console.log(bucks)
    return
}
if(place == "chillgoblin" && debt == true){text.innerHTML="\"You already owe me 10 bucks. Go get a job, I dunno.\""}
if(place == "fork" && idol == false){text.innerHTML="You enter into an ancient temple. You can see 20 bucks folded into the shape of a golden idol.";
    place = "temple";
    button1.innerHTML = "Grab it!"
    button2.innerHTML = "Missing Required Item."
    if(gotRepellent==2){button2.innerHTML = "Swap the Repellent for the Idol."}
    button3.innerHTML = "Missing Required Item."
    if(gotWaffle==2){button3.innerHTML = "Swap the Waffle for the Idol."}
    button4.innerHTML = "Leave the Temple."
    image.src="images/idol.jpg"
    return
}
if(place == "fork" && idol == true){text.innerHTML="There's a huge boulder covering the entrance. I wonder who caused that to show up."}
if(place == "wafflehouse" && fireballKnown == false){text.innerHTML="\"Okay, sure.\" Jacob the Wizard Parrot teaches you how to cast basic fire magic.";
    fireballKnown = true;
    firedisplay.innerHTML = "Fire Magic";
    return}
if(place == "wafflehouse" && fireballKnown == true){text.innerHTML="\"If I teach you any more, you will legally be my apprentice, <br> and that has a bunch of complex forms you need to fill out.\""}
if(place == "job"){text.innerHTML = "You tell the angry woman to GET OUT! <br>You are fired soon after, but still paid 10 bucks for your work.";
    job = true;
    bucks += 10;
    updateMoney()
    place = "wafflehouse"
    button1.innerHTML ="Buy a Waffle for 8 bucks."
    button2.innerHTML ="Ask for a job."
    button3.innerHTML ="Ask him to teach you magic."
    button4.innerHTML ="Leave the Waffle House"
    return;
}
if(place == "temple" && gotWaffle==2){text.innerHTML ="You take a bite out of the waffle to adjust the weight, and then swap it for the 20 bucks.<br> As you're leaving, a boulder rolls down and blocks the exit.";
    place = "fork";
    bucks += 20
    gotWaffle = 3
    waffledisplay.innerHTML=""
    updateMoney()
    idol = true;
    image.src="images/forkRoad.jpg"
    button1.innerHTML ="Not Right Now.";
    button2.innerHTML ="Go Left."
    button3.innerHTML ="Go Right."
    button4.innerHTML ="Go back to the Cave."
    return
}
});
/* BUTTON 4 */
button4.addEventListener('click', function(){
if(place == "entrance"){text.innerHTML= "A boring but reasonable choice. You go to work your 9-5 for 10 years before being replaced by AI. The End.";
    place ="ending";
    image.src="images/office.jpg";
    endGame();
};
if(place == "greatdoor" && fireballKnown == false){text.innerHTML="The door is NOT going to tolerate that. The door fires an Powerful Beam at you. You are sent flying all the way to France. The End.";
    place ="ending";
    image.src="images/france.jpg"
    endGame()
};
if(place == "greatdoor" && fireballKnown == true){text.innerHTML="The door sees your spell and casts a barrier to block it."};
if(place == "store"){returnToDoor()};
if(place == "evilgoblin"){returnToDoor()};
if(place == "chillgoblin"){returnToDoor()};
if(place == "behinddoor"){returnToDoor()};
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
if(place =="temple"){text.innerHTML="You return to the fork in the road."
    place = "fork";
    image.src="images/forkRoad.jpg"
    button1.innerHTML ="Not Right Now.";
    button2.innerHTML ="Go Left."
    button3.innerHTML ="Go Right."
    button4.innerHTML ="Go back to the Cave."
}
});
