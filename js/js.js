//Funcion que valida si el texto ingresado cumple con las condiciones solicitadas
function validar() {
  const expReg = new RegExp(/\d/);
  let textoIngresado = document.getElementById("ingreso").value;
  if (!expReg.test(textoIngresado)) {
      encriptar(textoIngresado);
  } else {
      alert("Por favor verifiar la cadena ingresada");
      document.getElementById("ingreso").value = "";
      location.reload(true);
  }
}
//Funcion del boton encriptar
function encriptar(texto) {
  //insertamos el texto ingresado ya encriptado al textarea 2
  document.getElementById("salida").value = texto.replace(/u|e|i|o|a/g, reglasParaEncriptar);
  //vaciamos el textarea donde se ingresa el texto a encriptar
  document.getElementById('ingreso').value = "";
}
//reglas para encriptar el texto ingresado 
const reglasParaEncriptar = (char) => {
  const patron = {
    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober',
    u: 'ufat',
  };
  return patron[char];
}
//Funcion del boton desencriptar
function desencriptar() {
  //guardo el texto ingresado en el textarea "ingreso" en la variable mensajeEncriptado
  let mensajeEncriptado = document.getElementById("ingreso").value;
  //desencripto el texto de la variable mensajeEncriptado y la guardo en la variable mensajeOriginal
  let mensajeOriginal = mensajeEncriptado.replace(/ufat|enter|imes|ober|ai/g, reglasParaDesencriptar);
  //agrego el contenido de la variable mensajeOriginal en el textArea2 "salida"
  document.getElementById("salida").value = mensajeOriginal;
}
//reglas para desencriptar el texto ingresado 
const reglasParaDesencriptar = (char) => {
  const patron = {
    ai: 'a',
    enter: 'e',
    imes: 'i',
    ober: 'o',
    ufat: 'u',
  };
  return patron[char];
}
//funcion para el boton copiar del textarea con el mensaje encriptado. No valida si esta vacio.
function copiar() {
  //copio el clipboard el texto contenido en el textArea2 "salida"
  navigator.clipboard.writeText(document.getElementById("salida").value)
      .then(() => {
      console.log("texto copiado...")
  })
      .catch(err => {
      console.log('aaaaaaalgo pasóooooo', err);
  })
}

