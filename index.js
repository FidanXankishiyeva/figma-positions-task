let div= document.querySelector('.page-3-left-box')
let aTag=document.createElement('a')
aTag.innerText = 'Read More'
div.append (aTag)

let collajDiv=document.querySelector('.card-box')
collajDiv.style.background = '#F9B572'


let text = document.querySelector('.h4Text')
text.innerText='Best marketing tools'

function number (a){
    a++
    console.log(a);
}
number(5)
number(9)
