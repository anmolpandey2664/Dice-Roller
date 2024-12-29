document.getElementById("roll-button").addEventListener("click", function() {
    //  a random number between 1 and 6
    const diceNumber = Math.floor(Math.random() * 6) + 1;
  
    // Update the dice image and number
    document.getElementById("dice-image").src = `dice${diceNumber}.png`;
    document.getElementById("dice-number").textContent = diceNumber;
  });

  