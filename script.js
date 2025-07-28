var typingElement = document.querySelector(".typing-header");
if (typingElement) {
    var Typed = new Typed(".typing-header", {
        strings: ["Fight Food Waste. Build a Sustainable Future."],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
    });
}

var displayPledge = document.getElementById("pledgeReturned");
var myButton = document.getElementById("myButton");

if(myButton) {
    myButton.addEventListener("click", showPledge);
}

function showPledge() {
    var displayName = document.getElementById("name").value;
    var food = document.getElementById("food").value;
    var action = document.getElementById("action").value;
    
    displayPledge.innerHTML = "I, " + displayName + ", am committing to reducing food waste. This week, I will try to not waste " + food + ", and I will do that by " + action + ".";
}

var factList = [
  "More than 80 percent of Americans discard perfectly good food because they misunderstand expiration labels.",
  "Wasting food contributes to 11 percent of the world’s greenhouse gas emissions.",
  "Nearly 35 million people across America live with food insecurity. 10 million of them are children.",
    "Americans discard more food than any other country, nearly 40 million tons — or 30-40 percent of the entire US food supply.",
    "One-third of all food produced around the world is wasted.",
];

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

if (myButton) {
  myButton.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if(count == factList.length) {
    count = 0;
  }
}