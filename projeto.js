

const paginas = document.querySelectorAll(".pagina");

function mostrarPagina(indice){

    paginas.forEach((pagina)=>{

        pagina.classList.remove("ativa");

    });

    paginas[indice].classList.add("ativa");
}




const contador = document.getElementById("contador");

if (contador) {

    const dataInicio = new Date("2025-09-25T15:58:00");

    function atualizarContador() {

        const agora = new Date();

        let diferenca = agora - dataInicio;

        if (diferenca < 0) {
            diferenca = 0;
        }

        const dias = Math.floor(
            diferenca / (1000 * 60 * 60 * 24)
        );

        const horas = Math.floor(
            (diferenca % (1000 * 60 * 60 * 24))
            / (1000 * 60 * 60)
        );

        const minutos = Math.floor(
            (diferenca % (1000 * 60 * 60))
            / (1000 * 60)
        );

        const segundos = Math.floor(
            (diferenca % (1000 * 60))
            / 1000
        );

        contador.innerHTML = `
            <div>${dias} Dias ❤️</div>
            <br>
            <div>${horas} Horas</div>
            <br>
            <div>${minutos} Minutos</div>
            <br>
            <div>${segundos} Segundos</div>
        `;
    }

    atualizarContador();
    setInterval(atualizarContador, 1000);
}




const heartsContainer = document.querySelector(".hearts");

function criarCoracao() {

    if (!heartsContainer) return;

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const coracoes = [
        "♡",
        "♥",
        "💕",
        "💗"
    ];

    heart.innerHTML =
        coracoes[
            Math.floor(
                Math.random() * coracoes.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        Math.random() * 20 + 15 + "px";

    heart.style.animationDuration =
        Math.random() * 3 + 3 + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(criarCoracao, 400);




const elementos = document.querySelectorAll(
    ".card, .texto-card, .motivo"
);

const observer = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {

            entrada.target.style.opacity = "1";
            entrada.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.1
});

elementos.forEach((elemento) => {

    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(40px)";
    elemento.style.transition = ".8s";

    observer.observe(elemento);

});




let paginaAtual = 0;

document.addEventListener("keydown", (e) => {

    if (e.key === "ArrowRight") {

        if (paginaAtual < paginas.length - 1) {

            paginaAtual++;
            mostrarPagina(paginaAtual);

        }

    }

    if (e.key === "ArrowLeft") {

        if (paginaAtual > 0) {

            paginaAtual--;
            mostrarPagina(paginaAtual);

        }

    }

});




mostrarPagina(0);