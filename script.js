document.getElementById('btn').innerHTML = 'Mensaje enviado con éxito';
function enviar(){
    document.getElementById('btn').innerHTML = 'Mensaje enviado con éxito';

}

function mostrar(elemento){ 

    var text = document.getElementById('btn'+ elemento);
    var highlight = document.getElementById(elemento);

    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }

    if(highlight.style.color != "white")
      {   
        highlight.style.color = "white";        
      } else {
          highlight.style.color = "rgb(36, 198, 219)";
      }


}


