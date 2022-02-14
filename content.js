// Define all movements
let movements = [
    {"top": "jump squat", "bottom":"20 reps"},
    {"top": "jumping jack", "bottom":"100 reps"},
    {"top": "plank", "bottom":"30 secs"},
    {"top": "lunges", "bottom":"20 reps each side"},
    {"top": "abs crunch", "bottom":"20 reps"},
    {"top": "hollow body hold", "bottom":"45 secs"},
    {"top": "mountain climber", "bottom":"20 reps"},
    {"top": "high knees", "bottom":"40 reps"},
    {"top": "banded kickback", "bottom":"20 reps each side"},
    {"top": "sumo squat", "bottom":"30 reps"},
    {"top": "glute bridge", "bottom":"30 reps"}
]

// Create a function that yell at the user to move
function yell() {
    // Generate random movement
    let randomMovement = Math.floor(Math.random() * movements.length)
    let top = movements[randomMovement]["top"]
    let bottom = movements[randomMovement]["bottom"]

    // Generate img URL
    let imgURL = "http://memegen.link/custom/" + escape(top) + "/" + escape(bottom) + ".jpg?alt=https://i.imgur.com/CsCgN7Ll.png&width=400"

    // Empty array to save orignal img src
    let imgSrc = []

    // Turn all img into grumpy cat
    let imgs = document.getElementsByTagName("img")
    for (let i=0, n=imgs.length; i<n; i++) {
        
        //save the original img src
        imgSrc[i] = imgs[i].src

        //change image source
        imgs[i].src = imgURL
    }

    
    

}

// Escape the special characters in memegen URL
function escape(s){
    // https://github.com/jacebrowning/memegen#special-characters
    const escapeDict = [["-", "--"], [" ", "-"], ["_", "__"], ["?", "~q"], ["%", "~p"], ["#", "~h"], ["/", "~s"], ["\"", "''"]]

    for (let i=0, n=escapeDict.length; i<n; i++) {
        s = s.replaceAll(escapeDict[i][0], escapeDict[i][1])
    }

    return s
}
// Yell every 5 mins
setInterval(yell(), 5 * 60 * 1000)
