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
            document.getElementById('heads').textContent = headsRolls
            let total = headsRolls + tailsRolls
            document.getElementById('heads-percent').textContent = percentHeads + '%'
        }
        else {
            document.getElementById('penny-image').src= 'assets/images/penny-tails.jpg'
            document.getElementById('message').textContent = 'You Flipped Tails!'
            tailsRolls += 1
            document.getElementById('tails').textContent = tailsRolls
            let total = headsRolls + tailsRolls
            document.getElementById('tails-percent').textContent = percentTails + '%'
        }
    } )
    if (total > 0) {
        // Calculate percentage of heads and tails
        percentHeads = Math.round((headsRolls / total) * 100)
        percentTails = Math.round((tailsRolls / total) * 100)
    }
})



