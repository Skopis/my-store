// import axios from 'axios'; - need to remove axios module if I'm not using it
import { storageService } from "../services/storage.service"


export const productAPI = {
    query,
    queryByCategory,
    getCategories
}


async function query(selectedCategory = '') {
    if (selectedCategory === '') {
        const productList = await storageService.query('productList')

        if (!productList || !productList.length) {
            console.log('getting data from API')
            return fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(json => {
                    storageService.saveToStorage('productList', json)
                    return json
                })
        }
        console.log('getting data from local storage')
        return productList;
    }
    else {
        return queryByCategory(selectedCategory);
    }
}


function queryByCategory(category) {
    return fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(res => res.json())
        .then(json => {
            return json
        })
}


async function getCategories() {
    const categories = await storageService.query('categories')

    if (!categories || !categories.length) {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(json => {
                storageService.saveToStorage('categories', json)
                return json
            })
    }
    return categories;
}