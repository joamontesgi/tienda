function init(){
    var productos = document.getElementById("productos");
    productos= productos.innerHTML=
    `
    <div>
        <label> Producto A </label>
        <input min="1" type="number" name="" id="cantidad">
        <button class="btn btn-primary" type="button" onclick="carrito()">Agregar</button>
    </div>`;
}

function carrito() {
    let card = document.getElementById("card")
    let cantidad = document.getElementById("cantidad").value

    card.innerHTML=
    `
    <div>
        <h6>cantidad:${cantidad}</h6>  
    </div>
    `
    alert ("producto agregado")
}
