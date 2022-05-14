function alerta() {
    alert('NO LE ESTÉS PICANDO A COSAS QUE NO VALE');
}

function wonPeso() {
    let cantidad = parseFloat(document.getElementById("won").value);
    const won = 0.016

    let pesos = cantidad * won;

    document.getElementById("pesos").value = pesos;

    return pesos;
}

function refreshForm() {
    wones.reset();
}


