// A
let div = document.getElementById('exo-counter')
console.log(div)
let btn = div.querySelector("button")
let span = Number(div.querySelector("span").innerText)
let spanD = div.querySelector('span')

btn.addEventListener("click", (e) => {
    span += 1
    spanD.innerText = span
})
// B

let divSquare = document.getElementById('square')
divSquare.addEventListener('click', () => {
    divSquare.classList.toggle("on")
    divSquare.classList.toggle("off")

    if (divSquare.className == "on") {
        divSquare.innerText = "ON"
    } else {
        divSquare.innerText = "OFF"
    }
})

// C

let h2 = document.querySelectorAll("h2")
console.log(h2)

let index = 1
window.addEventListener('keydown', (event) => {
    if (event.key == "6" & index < h2.length) {
        h2.forEach(element => {
            element.innerText = index + element.innerText
            index++
        });
    }
})

// d
let count = 0
let multiClick = document.getElementById('multi-click')

multiClick.addEventListener("click", ()=>{

    if(count==0 || count == 3){
        multiClick.style.borderRadius = "50%"
        count=0
    }
    if(count==1){
        multiClick.style.backgroundColor="red"
    }
    if(count==2){
        setTimeout(() => {
            multiClick.style.backgroundColor=""
            multiClick.style.borderRadius="0%"
        }, 500)
         ;
    }

    count++


})

// e

let change = document.getElementById('pick-color')
let changerPara = document.getElementById('para')
change.addEventListener('change', ()=>{
    changerPara.style.color = change.value
})

   



