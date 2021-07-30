
let bady = [
    "fuck",
    "fucker",
    "fucking",
    "anal",
    "anus",
    "asshole",
    "ass",
    "assfuck",
    "assfucker",
    "asshat",
    "asskiss",
    "asskisser",
    "asslick",
    "asslicker",
    "asslover",
    "badfuck",
    "ballsack",
    "banging",
    "bastard", 
    "bazongas",
    "biatch",
    "bitch",
    "bitches",
    "blow",
    "blowjob",
    "bondage",
    "boner",
    "boob",
    "boobies",
    "boobs",
    "booby",
    "booty",
    "bootycall",
    "bra",
    "cunt",
    "cock",
    "culo",
    "teta",
    "ano",
    "coño",
    "pene",
    "verga",
    "pinga",
    "mierda",
    "vagina",
    "pussy",
    "teta",
    "tetas",
    
]

let gif = document.getElementById("gif")

function badWords(bar) {
    gif.className = "hide";
    let badWord = bar.value.split(" ");
    for(let i = 0; i < badWord.length; i++){
        for(let j = 0; j < bady.length; j++){
            if(badWord[i] == bady[j]){
                gif.className = "show"; 
            }
        }
    }
}

