      var texto = document.getElementById('txt');
      var contar = document.getElementById('txtvista');
      
      texto.addEventListener('keyup', function(){
          contar.innerText = texto.value.length;

      })