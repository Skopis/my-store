// import axios from 'axios'; - need to remove axios module if I'm not using it
import { storageService } from "../services/storage.service"


export const productAPI = {
    query,
    queryByCategory,
    getCategories
}


async function query(selectedCategory = '', sortBy = '') {
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
        return sort(productList, sortBy);
    }
    else {
        const itemsByCategory = await queryByCategory(selectedCategory)
        return sort(itemsByCategory, sortBy);
    }
}

function sort(productList, sortBy) {
    switch (sortBy) {
        case 'title':
            return productList.sort((a, b) => {
                if (a.title > b.title) return 1
                else if (a.title < b.title) return -1
                else return 0
            });
        case 'price':
            return productList.sort((a, b) => a.price - b.price);
        default:
            return productList;
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
        return fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(json => {
                storageService.saveToStorage('categories', json)
                return json
            })
    }
    return categories;
}