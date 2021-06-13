import { storageService } from "../services/storage.service"

export const cartAPI = {
    getCart,
    addToCart,
    deleteCart,
    checkOut
}


async function getCart() {
    const cartItems = await storageService.query('cartItems')
    return cartItems || []
}

async function addToCart(product) {
    var cartItems = await getCart()
    product.qty = 1
    cartItems.push(product)
    storageService.saveToStorage('cartItems', cartItems)

    return fetch(`https://fakestoreapi.com/carts/`, {
        method: "POST",
        body: JSON.stringify(
            {
                userId: 1,
                date: '2021 - 06 - 12',
                products: [{ productId: product.id, quantity: 1 }]
            }
        )
    })
        .then(res => res.json())
        .then(json => {
            return json
        })
}

async function checkOut(didCheckOut) {
    if(!didCheckOut) return {isCheckOut: didCheckOut, emptyCart:[]}
    var isCheckOut = false;
    const emptyCart = await deleteCart()
    console.log('checkout done!')
    isCheckOut = true;
    return { isCheckOut, emptyCart }
}

async function deleteCart() {
    storageService.saveToStorage('cartItems', [])
    return fetch('https://fakestoreapi.com/carts/6', {
        method: "DELETE"
    })
        .then(res => res.json())
        .then(json => {
            console.log('deleteCart', json)
            return []
        })
}