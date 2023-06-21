function renderProductos(){
    let productos = cargarProductosLS();
    let contenido = "";

    productos.forEach(producto => {
        contenido += `<div class= "col-md-3 mb-4">
        <div class="card text-center h-100">
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
            <div class="card-body">
                <p class="card-text text-danger">$${producto.precio}</p>
                <p>${producto.nombre}</p>
                <p><button class="btn btn-primary" onClick="verProducto(${producto.id});">Ver Producto</button></p>
                <p><button class="btn btn-success" onClick="agregarProducto(${producto.id});">Añadir al Carrito</button></p>
            </div>
        </div>
      </div>`;
        
    });

    document.getElementById("contenido").innerHTML = contenido;
}

function verProducto(id){
    let productos = cargarProductosLS(); 
    let producto = productos.find(item => item.id === id);
    localStorage.setItem("producto", JSON.stringify(producto));
    location.href = "../pages/ver-producto.html"; //Redireccionar a la página pasada por parámetro
}

renderProductos();
renderBotonCarrito();