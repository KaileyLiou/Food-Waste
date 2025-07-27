var typed = new Typed(".typing-header", {
    strings: ["Fight Food Waste. Build a Sustainable Future."],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});

var displayName = document.getElementById("name");
var button = document.getElementById("myButton");

button.addEventListener("click", showPledge);

function showPledge() {
  var text = document.getElementById("myText").value;
  displayName.innerHTML = "I, " + text + " am committing to reducing food waste. This week, I will try to not waste " + food + " , and I will do that by " + action + ".";
}