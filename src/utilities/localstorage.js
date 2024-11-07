const getStoredCart = () => {
    const storedCartString = localStorage.getItem('cart');
    if (storedCartString) {
        return JSON.parse(storedCartString);
    }
    return [];
}

const saveCartTOLS = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
}

const addToLS = (name) => {
    const cart = getStoredCart();
    cart.push(name);
    saveCartTOLS(cart);
}

export {addToLS , getStoredCart};