let formato = 24;

    function formatoHora(f){
      formato = f;
      relogio();
    }

    function relogio(){
      
      let data = new Date();
      let intervalo = 'AM';

      let hora = String(data.getHours()).padStart(2, '0');
      let min = String(data.getMinutes()).padStart(2, '0');
      let seg = String(data.getSeconds()).padStart(2, '0');

      if(hora >= 12 && formato == 12){
        hora = String(hora -= 12).padStart(2, '0');
        intervalo = 'PM';
      }

      if(hora == 0 && formato == 12){
        hora = 12;
      }

      let visor = document.getElementById('visor');

      if( formato == 12 ){
        visor.innerHTML = hora + ':' + min + ':' + seg + ' ' + intervalo;
      } else {
        visor.innerHTML = hora + ':' + min + ':' + seg;
      }
    }

    setInterval(relogio, 1000);