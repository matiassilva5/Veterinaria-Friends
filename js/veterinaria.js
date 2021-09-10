function agregarNombreUsuario(){
    if (localStorage.getItem("usuario")!=null){
        var nomUsuario = localStorage.getItem("usuario");
        var elem = document.getElementById("usu");
        elem.innerHTML += nomUsuario;
    }
}


function mostrarLista(lista, idContenedor) {
    var contador=1;
    let contenedor = document.getElementById(idContenedor);
    for (let elemento of lista) {
        /*
        contenedor.innerHTML += `<li><h2 class="list-group-item active">Nombre: ${elemento.nombre}</h2>`;
        contenedor.innerHTML += `<p>Descripción: ${elemento.descripcion}</p>`;
        contenedor.innerHTML += `<p>Precio: ${elemento.precio}</p>`;
        contenedor.innerHTML += `<p>Disponible: ${elemento.disponible}</p></div></li>`;
        */
        contenedor.innerHTML += `<tr>
                                    <th scope="row">${contador}</th> 
                                    <td>${elemento.nombre}</td>
                                    <td>${elemento.descripcion}</td>
                                    <td>${elemento.precio}</td>
                                    <td>${elemento.disponible}</td>
                                </tr>`;
        contador++;
    }
}
/*
function obtenerLista() {
   
    
    fetch('json/veterinaria.json')
        .then(response => response.json())
        .then(json => mostrarLista(json, "tabla"))



}
*/

document.addEventListener("DOMContentLoaded", function(e){
    agregarNombreUsuario();
    var lista = JSON.parse(veterinaria);
    mostrarLista(lista, "tabla");
});