var boton_encriptar = document.querySelector(".boton-encriptar");
var boton_desencriptar = document.querySelector(".boton-desencriptar");
var munieco = document.querySelector(".munieco");
var munieco_titulo = document.querySelector(".mensaje-munieco-titulo");
var munieco_parrafo = document.querySelector(".mensaje-munieco-parrafo");
var texto_parrafo = document.querySelector(".texto-parrafo");
boton_encriptar.onclick = encriptar;
boton_desencriptar.onclick = deseencriptar;


function encriptar() {
    ocultar_texto_munieco();
    texto_parrafo.textContent = encriptar_texto(recuperar_texto());

}
function deseencriptar() {
    ocultar_texto_munieco();
    texto_parrafo.textContent = desencriptar_texto(recuperar_texto());

}

function recuperar_texto() {
    var area = document.querySelector(".area");
    return area.value;
}

function ocultar_texto_munieco() {
    munieco.classList.add("ocultar");
    munieco_parrafo.classList.add("ocultar");
    munieco_titulo.classList.add("ocultar");
}

function encriptar_texto(texto) {
    let texto_inicial = texto;
    let texto_encriptado = "";

    for (let i = 0; i < texto_inicial.length; i++) {
        if (texto_inicial[i] == "a") {
            texto_encriptado = texto_encriptado + "ai";
        }
        else if (texto_inicial[i] == "e") {
            texto_encriptado = texto_encriptado + "enter";
        }
        else if (texto_inicial[i] == "i") {
            texto_encriptado = texto_encriptado + "imes";
        }
        else if (texto_inicial[i] == "o") {
            texto_encriptado = texto_encriptado + "ober";
        }
        else if (texto_inicial[i] == "u") {
            texto_encriptado = texto_encriptado + "ufat";
        }
        else {
            texto_encriptado = texto_encriptado + texto_inicial[i];
        }
        //    texto_encriptado += texto.charCodeAt(i);
    }
    return texto_encriptado;
}
function desencriptar_texto(texto) {
    let texto_inicial = texto;
    let texto_encriptado = "";

    for (let i = 0; i < texto_inicial.length; i++) {
        if (texto_inicial[i] == "a") {
            texto_encriptado += texto_inicial[i];
            i += 1;
        }
        else if (texto_inicial[i] == "e") {
            texto_encriptado += texto_inicial[i];
            i += 4;
        }
        else if (texto_inicial[i] == "i") {
            texto_encriptado += texto_inicial[i];
            i += 3;
        }
        else if (texto_inicial[i] == "o") {
            texto_encriptado += texto_inicial[i];
            i += 3;
        }
        else if (texto_inicial[i] == "u") {
            texto_encriptado += texto_inicial[i];
            i += 3;
        }
        else {
            texto_encriptado = texto_encriptado + texto_inicial[i];
        }
        //    texto_encriptado += texto.charCodeAt(i);
    }
    return texto_encriptado;
}