function renderProductos(){
    let productos = cargarProductosLS();
    let contenido = "";

    productos.forEach(producto => {
        contenido += `<div class= "col-md-3 mb-4">
        <a href="ver-producto.html" onClick="verProducto(${producto.id}) class="text-decoration-none" >
        <div class="card text-center">
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
            <div class="card-body">
                <p class="card-text text-danger">$${producto.precio}</p>
                <p>${producto.nombre}</p>
            </div>
        </div>
      </a>
      </div>`;
        
    });

    document.getElementById("contenido").innerHTML = contenido;
}

function verProducto(id){
    let productos = cargarProductosLS(); 
    let producto = productos.find(item => item.id == id);
    localStorage.setItem("producto", JSON.stringify(producto));
    

}

renderProductos();
renderBotonCarrito();