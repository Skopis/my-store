// import axios from 'axios'; - need to remove axios module if I'm not using it


export const productAPI = {
    query,
    queryByCategory,
    getCategories
}


async function query() {
    console.log('hi query() on productAPI')
    return fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
            console.log('query() on productAPI', json)
            return json
        })
}

async function queryByCategory(category) {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(res => res.json())
        .then(json => {
            console.log(`queryByCategory ${category}`, json)
            return json
        })
}

async function getCategories() {
    fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(json => {
            console.log('getCategories', json)
            return json
        })
}