
const btns = document.querySelectorAll("button");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    switch(e.target.id){
        case 'btn-prueba':Swal.fire('Esta es la primera prueba');break;
        case 'btn-pregunta':Swal.fire('Pregunta','esta es una pregunta','question');break;
        case 'btn-error':Swal.fire('Error','este es un error','error');break;
        case 'btn-peligro':Swal.fire('Cuidado','esta es una alerta','warning');break;
    }
  });
});