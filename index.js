const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pw1El = document.getElementById("pw-btn-1")
let pw2El = document.getElementById("pw-btn-2")
let charLength = 15

function getRandomChar() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
 }

function generatePw() {
    pw1El.textContent = ""
    pw2El.textContent = ""
    for (i = 0; i < charLength; i++) {
        pw2El.textContent += getRandomChar()
        pw1El.textContent += getRandomChar()
    }
}

