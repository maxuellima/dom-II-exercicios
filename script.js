//Exercício 1 - 

const adicionaItem = (event) =>{

const novoItem = document.createElement("article")
const textoDoItem = document.createTextNode("Item novo!")
novoItem.appendChild(textoDoItem)
const containerAtual = document.getElementById("container")
containerAtual.insertAdjacentElement("beforeend", novoItem)


//Exercício 2 - 
novoItem.classList.add("item")
novoItem.setAttribute("onclick", "removeItem(event)")
}

//Exercício 3 - 
const removeItem = (event) =>{
 const cliqueNaTela = event.target
 cliqueNaTela.remove()
}

console.log(removeItem)