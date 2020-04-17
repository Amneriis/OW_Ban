let banList = [];
let degats = document.getElementsByClassName('dps')
let support = document.getElementsByClassName('supp')
let tank = document.getElementsByClassName('tank')

for (let counter = 0; counter < 4; counter++) {
    if (counter < 2) {
        round1()
    } else if (counter == 2) {
        round2()
    } else {
        round3()
    }
}


function round1() {
    for (let i = 0; i < degats.length; i++) {
        degats[i].addEventListener("click", e => {
            banList.push(e.target);
            e.target.style.display = "none";
            console.log(e.target);
            document.getElementById('ban-list').innerHTML += `<img src='${e.target.src}' alt='${e.target.alt}' >`

        })
    }
}

function round2() {
    for (let i = 0; i < support.length; i++) {
        support[i].addEventListener("click", e => {
            banList.push(e.target);
            e.target.style.display = "none";
            console.log(e.target);
            document.getElementById('ban-list').innerHTML += `<img src='${e.target.src}' alt='${e.target.alt}' >`
            counter++
        })
    }
}

function round3() {
    for (let i = 0; i < tank.length; i++) {
        tank[i].addEventListener("click", e => {
            banList.push(e.target);
            e.target.style.display = "none";
            console.log(e.target);
            document.getElementById('ban-list').innerHTML += `<img src='${e.target.src}' alt='${e.target.alt}' >`
            counter++
        })
    }
}