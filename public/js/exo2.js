// a
let divParent = document.getElementById('exo-copy-img')
let divContainer = document.getElementById('mignon-container')
let image = divContainer.querySelector('img').getAttribute('src')
let copieImage = new Image()
copieImage.src= image
let btn = divParent.querySelector('button')
btn.addEventListener('click', ()=>{
    divContainer.appendChild(copieImage)
})

// b

let divSuppr = document.getElementById('mignon2-container')
let imageSuppr = divSuppr.querySelectorAll('img')
imageSuppr.forEach(element => {
    element.addEventListener('click', ()=>{
        element.remove()
    })
});


// c
let divLi = document.getElementById('exo-add-li')
let liTotal = divLi.querySelectorAll('li')
let li = document.createElement('li')
li.innerHTML="num 2 Test j'écris blablablabla"
console.log(liTotal[0])


    liTotal.forEach(element => {
        element.addEventListener("click", ()=>{
           if(element==liTotal[0]) { 
            element.append(li)}
            else if(element ==liTotal[1]){
                element.prepend(li)
            }
        })
    });


    // d

    let div_submit = document.getElementById("exo-li-from-input")
    let btnSubmit = div_submit.querySelectorAll("button")
    let ulSubmit = div_submit.querySelector("ul")
    let mesLi = ulSubmit.querySelectorAll('li')
    console.log(mesLi[0])
    let inputSubmit = div_submit.querySelector('input')

    btnSubmit[0].addEventListener('click', ()=>{
            let newLi = document.createElement('li')
            newLi.innerText=inputSubmit.value
            ulSubmit.appendChild(newLi)
            inputSubmit.value = " "
    })
   let random = Math.floor(Math.random()*ulSubmit.children.length)
   let choix = mesLi[random]

    btnSubmit[1].addEventListener('click', ()=>{
        btnSubmit[1].style.backgroundColor="green"
        mesLi[0].addEventListener('click', ()=>{
            let variable = mesLi[0].innerText
            mesLi[0].innerText = choix.innerText
            mesLi[random]=variable

            });
        })
  console.log(ulSubmit.children.length)