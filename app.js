function converter(){
    let valor = parseFloat(document.getElementById("amount__input").value);
    let resultCampo = document.getElementById("resultado");
    let unidadeEntrada = document.getElementById("entry__input").value;
    let unidadeSaida = document.getElementById("exit__input").value;

    // Converter para metros (unidade padrão)
    var valorEmMetros = converterParaMetros(valor, unidadeEntrada);

    // Converter para a unidade desejada
    var resultado = converterDeMetros(valorEmMetros, unidadeSaida);

    // Inserir resposta no campo 'Resultado'
    resultCampo.textContent = `${resultado}`;
}

function resetar(){
    location.reload(); //Atualiza a pagina
}

function converterParaMetros(valor, unidadeEntrada) {
    switch (unidadeEntrada) {
        case "milimetros":
            return valor / 1000;
        case "centimetros":
            return valor / 100;
        case "metros":
            return valor;
        case "kilometros":
            return valor * 1000;
        default:
            return NaN; 
    }
}

function converterDeMetros(valorEmMetros, unidadeSaida) {
    switch (unidadeSaida) {
        case "milimetros":
            return valorEmMetros * 1000;
        case "centimetros":
            return valorEmMetros * 100;
        case "metros":
            return valorEmMetros;
        case "kilometros":
            return valorEmMetros / 1000;
        default:
            return NaN;
    }
}