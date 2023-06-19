const productos = [
    {id:1, nombre:"Medallón de carne Good Mark 4 u. sin TACC", imagen: "https://carrefourar.vtexassets.com/arquivos/ids/176849-1200-auto?v=637468574521070000&width=1200&height=auto&aspect=true" , precio:694.68 , marca: "GOOD MARK"},
    {id:2, nombre:"Hamburguesa Paty express 4 u.", imagen: "https://carrefourar.vtexassets.com/arquivos/ids/176840-1200-auto?v=637468574499770000&width=1200&height=auto&aspect=true" , precio:638.00 , marca:"PATY"},
    {id:3, nombre:"Hamburguesa Paty clásico 12 u.", imagen: "https://carrefourar.vtexassets.com/arquivos/ids/196179-1200-auto?v=637522913490630000&width=1200&height=auto&aspect=true" , precio:2975.00 , marca:"PATY"},
    {id:4, nombre:"Hamburguesa Carrefour clásica 12 u.", imagen: "https://carrefourar.vtexassets.com/arquivos/ids/176884-1200-auto?v=637468574640400000&width=1200&height=auto&aspect=true" , precio:2964.00, marca:"CARREFOUR"},
    {id:5, nombre:"Hamburguesa Unión Ganadera de carne 4 u. sin TACC", imagen: "https://carrefourar.vtexassets.com/arquivos/ids/176866-1200-auto?v=637468574568000000&width=1200&height=auto&aspect=true" , precio:772.50 , marca: "UNIÓN GANADERA"},
    {id:6, nombre:"Hamburguesa Paty clásico 4 u.", imagen: "https://carrefourar.vtexassets.com/arquivos/ids/196178-1200-auto?v=637522913484630000&width=1200&height=auto&aspect=true" , precio:1090.00 , marca:"PATY"},
    {id:7, nombre:"Hamburguesa Carrefour clásica 20 u.", imagen: "https://carrefourar.vtexassets.com/arquivos/ids/176887-1200-auto?v=637468574649000000&width=1200&height=auto&aspect=true" , precio:4900.00, marca:"CARREFOUR"},
    {id:8, nombre:"Hamburguesa Swift clásica 4 u.", imagen: "https://carrefourar.vtexassets.com/arquivos/ids/176790-1200-auto?v=637468574363170000&width=1200&height=auto&aspect=true" , precio:1005.00, marca:"SWIFT"}

];



function guardarProductosLS() {
    localStorage.setItem("productos", JSON.stringify(productos));
}
function cargarProductosLS(){
    return JSON.parse(localStorage.getItem("productos"));
}

guardarProductosLS();
