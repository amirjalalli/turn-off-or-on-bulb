let bulbImg = document.getElementById('blub')
let btn = document.getElementById('btn')

let blubFlag = false


function turnOffOrOn () {
    // alert('turn on')
    if (blubFlag) {
        bulbImg.setAttribute('src','pics/bulboff.gif')
        btn.innerHTML = 'turn on'
        blubFlag = false
    } else {
        bulbImg.setAttribute('src','pics/bulbon.gif')
        btn.innerHTML = 'turn off'
        blubFlag = true
    }
}

console.log(blubFlag)