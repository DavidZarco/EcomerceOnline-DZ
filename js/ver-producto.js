function renderProducto(){
    const producto = JSON.parse(localStorage.getItem("producto"));
    let contenido = 
    `<div class= "col-md-4 offset-md-3">
        <img src="${producto.imagen}" class="img-fluid" alt="${producto.nombre}">
        </div>
        <div class= "col-md-4">
            <h3>${producto.nombre}</h3>
            <h4 class= "text-danger">$${producto.precio}</h4>
        </div>
    </div>`;
    document.getElementById("contenido").innerHTML = contenido;


}
renderProducto();