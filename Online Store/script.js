document.addEventListener('DOMContentLoaded', () => {
    const hats = document.querySelectorAll('.hat');
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;

    hats.forEach(hat => {

        hat.querySelector('.add-to-cart').addEventListener('click', () => {
            const hatName = hat.querySelector('h3').innerText;
            const hatPrice = parseFloat(hat.querySelector('p').innerText.replace('Price: $', ''));
            addToCart(hatName, hatPrice);
        });
    });
    function addToCart(name, price) {
        const cartItem = document.createElement('li');
        cartItem.innerText = `${name} - $${price}`;
        cartItems.appendChild(cartItem);

        totalPrice += price;
        totalPriceElement.innerText = totalPrice.toFixed(2);
    }
});