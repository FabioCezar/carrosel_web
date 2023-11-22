document.addEventListener('DOMContentLoaded', function() {
    const carrossel = document.querySelector('.carrossel');
    const imagens = document.querySelectorAll('.carrossel img');
    let indiceAtual = 0;

    function mostrarImagem(indice) {
        imagens.forEach((imagem, index) => {
            if (index === indice) {
                imagem.style.display = 'block';
            } else {
                imagem.style.display = 'none';
            }
        });
    }

    function proximaImagem() {
        indiceAtual = (indiceAtual + 1) % imagens.length;
        mostrarImagem(indiceAtual);
    }

    function imagemAnterior() {
        indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
        mostrarImagem(indiceAtual);
    }

    setInterval(proximaImagem, 15000); // Troca a imagem a cada 15 segundos

    mostrarImagem(indiceAtual);

    window.addEventListener('resize', function() {
        imagens.forEach(imagem => {
            imagem.style.height = '100%';
        });
    });
});
