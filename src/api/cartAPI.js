import { storageService } from "../services/storage.service"

export const cartAPI = {
    getCart,
    addToCart,
    deleteCart,
    checkOut,
    getProductById
}


async function getCart() {
    const cartItems = await storageService.query('cartItems')
    return cartItems || []
}

async function addToCart(product) {
    var cartItems = await getCart()
    if (!cartItems || !cartItems.length) {
        product.qty = 1
        cartItems.push(product)
        await addNewItemToCart(product)
        storageService.saveToStorage('cartItems', cartItems)
        return product
    }
    var cartItem = cartItems.find(cartItem => cartItem.id === product.id)
    if (!cartItem) {
        product.qty = 1
        cartItems.push(product)
        await addNewItemToCart(product)
    }
    else {
        product.qty = cartItem.qty + 1
        cartItem.qty++
        await updateItemInCart(product)
    }
    storageService.saveToStorage('cartItems', cartItems)
    return product
}

async function updateItemInCart(product) {
    return fetch('https://fakestoreapi.com/carts/7', {
        method: "PUT",
        body: JSON.stringify(
            {
                userId: 1,
                date: '2019 - 12 - 10',
                products: [{ productId: product.id, quantity: 3 }]
            }
        )
    })
        .then(res => res.json())
        .then(json => console.log(json))
}

async function addNewItemToCart(product) {
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
    if (!didCheckOut) return { isCheckOut: didCheckOut, emptyCart: [] }
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

async function getProductById(productId) {
    if (productId === null) return {}
    return fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(res => res.json())
        .then(json => {
            console.log('getProductById', json)
            return json
        })
}