function openModal() {
    document.getElementById("productModal").style.display = "block";
}

function closeModal() {
    document.getElementById("productModal").style.display = "none";
}

function comprar() {
    // alert("¡Producto añadido al carrito!");

    const productName = document.querySelector("#productModal h2").textContent;
    const mensaje = encodeURIComponent(`Deseo ordenar ${productName}`);
    const url = `https://wa.me/50245391731?text=${mensaje}`;

    window.open(url, '_blank'); // Abre WhatsApp en una nueva pestaña

    closeModal();
}

window.onclick = function (event) {
    if (event.target == document.getElementById("productModal")) {
        closeModal();
    }
}