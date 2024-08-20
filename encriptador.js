let nuevo_texto;

function aparecerEncriptacion() {
    document.querySelector('#mensajeNoEncontrado').setAttribute('style','display:none');
    document.querySelector('#mostrarMensaje').setAttribute('style','display:true');
    return;
}


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function encriptar(){
    aparecerEncriptacion()
    let texto_a_encriptar = document.getElementById('texto_encriptar').value;
    nuevo_texto = texto_a_encriptar.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector("#texto_encriptar").value;
    asignarTextoElemento('p',`${nuevo_texto}`);
    return; 
}

function desencriptar(){
    aparecerEncriptacion()
    let texto_a_desencriptar = document.getElementById('texto_encriptar').value;
    nuevo_texto = texto_a_desencriptar.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.querySelector("#texto_encriptar").value;
    asignarTextoElemento('p',`${nuevo_texto}`);
    return; 
}


function copiarTexto() {
  let textoACopiar = document.querySelector('.texto_encriptado').innerText;
  navigator.clipboard.writeText(textoACopiar).then(() => {
    alert("Texto copiado");
  }).catch(err => {
    console.error("Error al copiar el texto: ", err);
  });
}