import { storageService } from "../services/storage.service"

export const cartAPI = {
    getCart,
    addToCart,
    deleteCart
}


async function getCart() {
    console.log('getCart at Cart service')
    const cartItems = await storageService.query('cartItems')
    console.log('cartItems at cart API getCart', cartItems)
    return cartItems || []
}

async function addToCart(product) {
    var cartItems = await getCart()
    console.log('cartItems at cart API addToCart before', cartItems)
    product.qty = 1
    cartItems.push(product)
    console.log('cartItems at cart API addToCart after', cartItems)
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
            console.log('addProductToUserCart', json)
            return json
        })
}

async function deleteCart() {
    fetch('https://fakestoreapi.com/carts/6', {
        method: "DELETE"
    })
        .then(res => res.json())
        .then(json => {
            console.log('deleteCart', json)
            return json
        })
}