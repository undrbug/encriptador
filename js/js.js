function validar() {
  const input = document.getElementById('textoingresado');
  if(input.checkValidity()) {
    alert('Por favor, ingrese solo text, sin numeros');
    document.getElementById('textoingresado').value = "";
  } else {
    encriptar();
  }
}

function encriptar() {
  let mensajeOriginal = document.getElementById("textoingresado").value;
  let mensajeEncriptado = mensajeOriginal.replace(/u|e|i|o|a/g, reglasParaEncriptar);
  let textAreaEncriptado = document.getElementById("mensajencriptado");
  textAreaEncriptado.value = mensajeEncriptado;
  return mensajeEncriptado;
}

function desencriptar() {
    
  let mensajeEncriptado = document.getElementById("textoingresado").value;
  let mensajeOriginal = mensajeEncriptado.replace(/ufat|enter|imes|ober|ai/g, reglasParaDesencriptar);
  let textAreaEncriptado = document.getElementById("mensajencriptado");
  textAreaEncriptado.value = mensajeOriginal;
  return mensajeOriginal;
}

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

function copiar() {
  var content = document.getElementById('mensajencriptado').value;

  navigator.clipboard.writeText(content)
      .then(() => {
      console.log("texto copiado...")
  })
      .catch(err => {
      console.log('algo pasó', err);
  })

}