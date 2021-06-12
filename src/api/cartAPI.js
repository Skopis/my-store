const USER_ID = '10081987'


export const cartAPI = {
    getUserCart,
    addProductToUserCart,
    deleteCart
}


async function getUserCart() {
    fetch(`https://fakestoreapi.com/carts/user/${USER_ID}`)
        .then(res => res.json())
        .then(json => {
            console.log('getUserCart', json)
            return json
        })
}

async function addProductToUserCart(productId) {
    fetch('https://fakestoreapi.com/carts', {
        method: "POST",
        body: JSON.stringify(
            {
                userId: USER_ID,
                date: '2021 - 06 - 12',
                products: [{ productId, quantity: 1 }]
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