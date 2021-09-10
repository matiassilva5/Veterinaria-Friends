function validar() {
  let usuario = document.getElementById('usuario').value;
  let pass = document.getElementById('pass').value;
  if (usuario === "") {
    alert("Ingresar usuario");
  } else if (pass === "") {
    alert("Ingresar contraseña");
  } else {
    localStorage.setItem("usuario", usuario); //setItem almacena el usuario en la posición "usuario"
    window.location.href = "veterinaria.html";
  }
}
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
  document.getElementById("login").addEventListener("click",
    function (event) {
      validar();
    })
})

