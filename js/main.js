function tocaSom (idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio);
    
    if (elemento && elemento.localName === 'audio' ) {
        elemento.play();
    }
    else {
           console.log('Elemento não encontrado ou seletor inválido.')
    }
 }

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

     const tecla = listaDeTeclas[contador];
     const instrumento = tecla.classList[1];
     const idAudio = `#som_${instrumento}`;//template string
     //console.log(idAudio);
    
     tecla.onclick = function () {
        tocaSom(idAudio)
    }
     
     tecla.onkeydown = function (evento) {

        //console.log (evento.code == 'Space')

         if (evento.code === 'Space' || evento.code === 'Enter') {
         tecla.classList.add('ativa')
      }
       
    }

     tecla.onKeyup = function () {
        tecla.classList.remove('ativa')
     }
    
    //console.log(contador);
}





/*let contador = 0;
//enquanto
while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //template string
    const idAudio = `#som_${instrumento}`;
     //console.log(idAudio);
    tecla.onclick = function () {
        tocaSom(idAudio)
    }

contador = contador + 1;*/

   //console.log(contador);