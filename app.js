resultado = document.getElementById('resultado');

function lerId(id) {
        resultado.innerHTML += id;  
}

function resetar(){
    resultado.innerHTML = '';
}

function calcular() {
    try {
        resultado.innerHTML = eval(resultado.innerHTML);
    } catch {
        resultado.innerHTML = "Erro";
    }
}