// TODO: Declare any global variables we need
let headsRolls = 0
let tailsRolls = 0

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('flip').addEventListener('click', function () {
        let flippedHeads = Math.random() < 0.5
        if (flippedHeads) {
           document.getElementById('penny-image').src= 'assets/images/penny-heads.jpg'
            document.getElementById('message').textContent = 'You Flipped Heads!'
            headsRolls += 1
        }
        else {
            document.getElementById('penny-image').src= 'assets/images/penny-tails.jpg'
            document.getElementById('message').textContent = 'You Flipped Tails!'
            tailsRolls += 1
        }
    } )

    

    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})



