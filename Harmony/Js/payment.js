// ----------------đếm số---------------
function decreaseQuantity() {
    var quantity = document.getElementById('quantity');
    if (quantity.value > 1) {
        quantity.value = parseInt(quantity.value) - 1;
    }
}

function increaseQuantity() {
    var quantity = document.getElementById('quantity');
    quantity.value = parseInt(quantity.value) + 1;
}
// ----------------đếm số---------------