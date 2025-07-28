// var typed = new Typed(".typing-header", {
//     strings: ["Fight Food Waste. Build a Sustainable Future."],
//     typeSpeed: 100,
//     backSpeed: 100,
//     loop: true
// });

// var displayPledge = document.getElementById("pledgeReturned");
// var myButton = document.getElementById("myButton");

// if(myButton) {
//     myButton.addEventListener("click", showPledge);
// }

// function showPledge() {
//     var displayName = document.getElementById("name").value;
//     var food = document.getElementById("food").value;
//     var action = document.getElementById("action").value;
    
//     displayPledge.innerHTML = "I, " + displayName + " am committing to reducing food waste. This week, I will try to not waste " + food + " , and I will do that by " + action + ".";
// }

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Typed.js only if the element exists
    var typingElement = document.querySelector(".typing-header");
    if (typingElement) {
        var Typed = new Typed(".typing-header", {
            strings: ["Fight Food Waste. Build a Sustainable Future."],
            typeSpeed: 100,
            backSpeed: 100,
            loop: true
        });
    }

    // Set up pledge functionality
    var displayPledge = document.getElementById("pledgeReturned");
    var myButton = document.getElementById("myButton");

    if(myButton && displayPledge) {
        myButton.addEventListener("click", showPledge);
    }

    function showPledge() {
        var displayName = document.getElementById("name").value;
        var food = document.getElementById("food").value;
        var action = document.getElementById("action").value;
        
        if (displayName && food && action) {
            displayPledge.innerHTML = "I, " + displayName + " am committing to reducing food waste. This week, I will try to not waste " + food + " , and I will do that by " + action + ".";
        } else {
            displayPledge.innerHTML = "Please fill in all fields to create your pledge.";
        }
    }
});