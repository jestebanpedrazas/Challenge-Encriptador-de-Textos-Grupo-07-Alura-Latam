// Función para encriptar el texto
function encriptarTexto(texto) {
    const llaves = { 'e': 'enter', 'i': 'imes', 'a': 'ai', 'o': 'ober', 'u': 'ufat' };
    return texto.replace(/[eioua]/g, letra => llaves[letra]);
}

// Función para desencriptar el texto
function desencriptarTexto(texto) {
    const llaves = { 'enter': 'e', 'imes': 'i', 'ai': 'a', 'ober': 'o', 'ufat': 'u' };
    return texto.replace(/enter|imes|ai|ober|ufat/g, grupo => llaves[grupo]);
}

// Función para copiar el texto al portapapeles
function copiarTexto(idElemento) {
    const texto = document.getElementById(idElemento).value;
    navigator.clipboard.writeText(texto);
}

// Función que sirve para limpiar el campo de texto
function limpiarCampo(idElemento) {
    document.getElementById(idElemento).value = '';
}

// Función para encriptar el texto y mostrarlo en la caja de desencriptar
function encriptarYMostrar() {
    const texto = document.getElementById('textoEncriptar').value;
    const textoEncriptado = encriptarTexto(texto);
    document.getElementById('textoDesencriptar').value = textoEncriptado;
}

// Función para desencriptar el mensaje y mostrarlo en la caja de encriptar
function desencriptarYMostrar() {
    const texto = document.getElementById('textoDesencriptar').value;
    const textoDesencriptado = desencriptarTexto(texto);
    document.getElementById('textoEncriptar').value = textoDesencriptado;
}

// Conexión de las funciones del archivo js con el html
document.getElementById('botonEncriptar').addEventListener('click', encriptarYMostrar);
document.getElementById('botonDesencriptar').addEventListener('click', desencriptarYMostrar);
document.getElementById('copiarBotonEncriptar').addEventListener('click', function () {
    copiarTexto('textoEncriptar');
});
document.getElementById('CopiarBotonDesencriptar').addEventListener('click', function () {
    copiarTexto('textoDesencriptar');
});
document.getElementById('borrarBotonEncriptar').addEventListener('click', function () {
    limpiarCampo('textoEncriptar');
});
document.getElementById('borrarBotonDesencriptar').addEventListener('click', function () {
    limpiarCampo('textoDesencriptar');
});
