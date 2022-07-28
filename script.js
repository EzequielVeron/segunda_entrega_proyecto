class Producto {
	constructor(nombre, marca, precio, stock) {

		this.nombre = nombre;
		this.marca = marca;
		this.precio = precio;
		this.stock = stock;
	}
}

const producto1 = new Producto(1, "barra de chocolate", "Chocolatory", 400, 50);
const producto2 = new Producto(2, "bocadito dulce de leche", "woow", 200, 120);
const producto3 = new Producto(3, "tableta de chocolate", "Chocolatory", 600, 100);
const producto4 = new Producto(4, "chocolate de leche", "Chocolatory", 400, 75);

/////////////////////////////////////////////////////////////////////////////
const productos = [];

const arrayProductos = [producto1, producto2, producto3, producto4];

///////////////////////////////////////////////////////////////
////*/mi storage para guardar lo que ingresa el usuario */
if (localStorage.getItem("productos")){
    Producto= JSON.parse(localStorage.getItem("productos"))}
    else{
    localStorage.setItem("productos",JSON.stringify(productos))
};




///////////////////////////////////////////////////////////////



const form = document.getElementById("idForm");
const divproducts = document.getElementById("divProducts");
const botonProducts= document.getElementById("botonProducts");
/*Agrego el evento*/

form.addEventListener('submit', (event) => {
    event.preventDefault()


    let producto = document.getElementById('idProductos').value;
    let marca = document.getElementById('idMarcas').value;
    let precio = document.getElementById('idPrecios').value;
    let stock = document.getElementById ('idStock').value;
    
    let product = new Producto(product, marca, precio, stock);
    product.push(producto);
    console.log(producto);
    localStorage.setItem("productos", JSON.stringify (productos});
    form.reset();
});

botonProducts.addEventListener("click", () => {
    let arrayProductos = JSON.parse(localStorage.getItem("productos"))
        divproducts.innerHTML = ""
        arrayProductos.forEach((producto, indice) => {
            divproducts.innerHTML+= `
            <div class="card" id="producto${indice}" style="width: 18rem; margin:3px;">
                <div class="card-body">
                    <h3 class="card-title">${producto.producto}</h3>
                    <p class="card-text">${producto.marca}</p>
                    <p class="card-text">${producto.precio}</p>
                </div>
            </div>
            
            `
            
        });

    arrayProductos.forEach((producto, indice) => {
        let botonProducts = document.getElementById (`producto${indice}`).lastElementChild.lastElementChild
    botonProducts.addEventListener("click", ()=>{
        document.getElementById ( `producto${indice}`).remove()
        producto.splice(indice,1)
        localStorage.setItem("productos", JSON.stringify(productos))
        console.log(`${producto.nombre} Eliminado`)
    });
    
    });

});



