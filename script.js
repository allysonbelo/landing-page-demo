//aplica a classe .show no container ao clicar no botão de menu
document.querySelector(".menu").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show")
)

//aplica a classe .scrolling no cabeçalho ao rolar a página
window.addEventListener("scroll", function () {
    let header = document.querySelector("header")
    header.classList.toggle("scrolling", window.scrollY > 0)
})

//pega a posição exata de um determinado elemento na página
const p = document.querySelector("#posicao")
const posicoes = p.getBoundingClientRect()
console.log(posicoes)