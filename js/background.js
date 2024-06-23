// Capturando o elemento input color
const inputCor = document.querySelector('.color-in');
// Capturando o elemento onde será alterado a cor de fundo
const bloco = document.querySelector('body');

// Adicionando um event listener para o evento change no input color
inputCor.addEventListener('change', function() {
    const corSelecionada = inputCor.value; // Obtém o valor da cor selecionada

    // Altera o fundo do bloco para a cor selecionada
    bloco.style.backgroundColor = corSelecionada;

    // Calcula os tons mais claros e mais escuros da cor selecionada
    const tonsMaisClaro = calcularTomMaisClaro(corSelecionada);
    const tonsMaisEscuro = calcularTomMaisEscuro(corSelecionada);

    // Altera o fundo dos blocos com os tons mais claros e mais escuros
    bloco.style.background = `linear-gradient(to right, ${tonsMaisEscuro}, ${corSelecionada}, ${tonsMaisClaro})`;
});

// Função para calcular um tom mais claro da cor
function calcularTomMaisClaro(cor) {
    // Converte a cor de hexadecimal para RGB
    const rgb = hexToRgb(cor);

    // Calcula um tom mais claro (aumentando a luminosidade)
    const tomMaisClaro = `rgb(${Math.min(rgb.r + 50, 255)}, ${Math.min(rgb.g + 50, 255)}, ${Math.min(rgb.b + 50, 255)})`;

    return tomMaisClaro;
}

// Função para calcular um tom mais escuro da cor
function calcularTomMaisEscuro(cor) {
    // Converte a cor de hexadecimal para RGB
    const rgb = hexToRgb(cor);

    // Calcula um tom mais escuro (diminuindo a luminosidade)
    const tomMaisEscuro = `rgb(${Math.max(rgb.r - 50, 0)}, ${Math.max(rgb.g - 50, 0)}, ${Math.max(rgb.b - 50, 0)})`;

    return tomMaisEscuro;
}

// Função para converter cor hexadecimal para RGB
function hexToRgb(hex) {
    // Remove o # do início, se existir
    hex = hex.replace(/^#/, '');

    // Converte cada par de caracteres hexadecimais em um valor decimal
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    // Retorna um objeto com os valores de r, g, b
    return { r, g, b };
}