

let container = document.getElementById('container')
let inputText = document.getElementById('inputText')

function createChild(){
    let div = document.createElement('div')
    div.className = 'div-main'

    let divTextEl = document.createElement('h3')
    divTextEl.className = 'div-text'
    divTextEl.innerText = inputText.value

    let divBtnEl = document.createElement('button')
    divBtnEl.className = 'div-btn'
    divBtnEl.innerText = 'Delete'
    divBtnEl.onclick = function () {
        div.remove()
    }

    div.appendChild(divTextEl)
    div.appendChild(divBtnEl)

    container.appendChild(div)
}
console.log(createChild)

