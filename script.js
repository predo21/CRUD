let arrayProdutos = []
let nomeItem = document.getElementById("nomeItem")
let valorItem = document.getElementById("valorItem")



function cadastrar() {

    let produto = {

        nomeProduto: "",

        valorProduto: "",

    }


    arrayProdutos = JSON.parse(localStorage.getItem("produtosLoja"))

    if (arrayProdutos == null) {
        arrayProdutos = []

        produto.nomeProduto = nomeItem.value
        produto.valorProduto = valorItem.value

        arrayProdutos.push(produto)

        localStorage.setItem('produtosLoja', JSON.stringify(arrayProdutos))
    } else {

        produto.nomeProduto = nomeItem.value
        produto.valorProduto = valorItem.value

        arrayProdutos.push(produto)

        localStorage.setItem('produtosLoja', JSON.stringify(arrayProdutos))
    }


}

///////////////////////////////////////////////////////////////////////////////////////////////


let nomeDeletaItem = document.getElementById("deletaItem")


function deletar() {


    arrayProdutos = JSON.parse(localStorage.getItem("produtosLoja"))

    pontos = 0


    for (let i = 0; i < arrayProdutos.length; i++) {



        if (nomeDeletaItem.value == arrayProdutos[i].nomeProduto) {

            arrayProdutos.splice(i, 1)

            localStorage.setItem("produtosLoja", JSON.stringify(arrayProdutos))

        } else {

            pontos += 1

            if (pontos === arrayProdutos.length) {

                alert('Produto não encontrado.')

            }

        }


    }

}

/////////////////////////////////////////////////////////////////////////////////////////////

let nomeAlterar = document.getElementById("alterarNome")
let valorAlterado = document.getElementById("alterarValor")


function alterar() {
    pontos = 0

    for (let i = 0; i < arrayProdutos.length; i++) {

        if (nomeAlterar.value == arrayProdutos[i].nomeProduto) {
            arrayProdutos = JSON.parse(localStorage.getItem("produtosLoja"))

            arrayProdutos[i].valorProduto = valorAlterado.value

            localStorage.setItem("produtosLoja", JSON.stringify(arrayProdutos))

        } else {

            pontos += 1

            if (pontos === arrayProdutos.length) {
                alert('Produto não encontrado.')
            }
        }
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////

function listar()

{
    let lista = ""


    for (i = 0; i < arrayProdutos.length; i++) {

        lista += "Nome: " + arrayProdutos[i].nomeProduto + "<br>" + "Valor: " + arrayProdutos[i].valorProduto + "<br>" + "<br>"

    }

    document.getElementById("lista").innerHTML = "LISTAS DOS PRODUTOS:" + "<br> <br> " + lista

}