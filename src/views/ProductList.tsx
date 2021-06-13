import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
//actions
import { getProductList, getCart, addToCart, setPageNum, getProductForModal} from '../store/actions/index'
//metirial-UI
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
//cmps
import BasicPagination from '../cmps/BasicPagination';
import Filter from '../cmps/Filter';
import ProductModal from '../cmps/ProductModal';


const useStyles = makeStyles({
    table: {
        minWidth: 700,
        backgroundColor: '#F9F9F9',
    },
});
interface productObj {
    id: number,
    title: string,
    price: number,
    category: string,
    description: string,
    image: string
}

const ProductList: React.FC = () => {
    const dispatch = useDispatch()

    const selectedCategory = useSelector((state: any) => state.selectedCategory)
    const currentPageNum = useSelector((state: any) => state.currentPageNum)

    const productsPerPage = 5;
    
    useEffect(() => {
        async function aFunc() {
            await dispatch(getProductList(selectedCategory))
            await dispatch(setPageNum(0))
        }
        aFunc()
    }, [selectedCategory])
    
    const products = useSelector((state: any) => state.productList)
    const productsForDisplay = products.slice(currentPageNum * productsPerPage, currentPageNum * productsPerPage + productsPerPage)
    const productForModal = useSelector((state: any) => state.productForModal)
    const classes = useStyles();

    const handleAddToCart = async (product: productObj, ev: any) => {
        ev.stopPropagation()
        await dispatch(addToCart(product))
        dispatch(getCart())
    }

    const handleSort = async (sortBy:string) =>{
        dispatch(getProductList(selectedCategory, sortBy))
    }

    const handleOpenProductModal = async (product: productObj) =>{
        console.log('product', product)
        dispatch(getProductForModal(product.id))
        console.log('productForModal', productForModal)
    }

    return (
        <Container className="main-content-container" fixed>
            <Filter />
            {productForModal &&  productForModal.id && <ProductModal product={productForModal}/>}
            {productsForDisplay && productsForDisplay.length>0 && <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow className="table-header">
                            <TableCell onClick={()=>handleSort('title')}>Product title</TableCell>
                            <TableCell onClick={()=>handleSort('price')} align="right">Price ($)</TableCell>
                            <TableCell align="center">Image</TableCell>
                            <TableCell align="right">Add to cart</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {productsForDisplay.map((product: productObj) => (
                            <TableRow onClick={()=>handleOpenProductModal(product)} key={product.id} className="table-content">
                                <TableCell component="th" scope="row">
                                    {product.title}
                                </TableCell>
                                <TableCell align="center">{product.price}</TableCell>
                                <TableCell align="center"><img className="product-img" src={product.image} alt="" /></TableCell>
                                <TableCell align="center">
                                    <AddShoppingCartIcon className="add-to-cart-icon" onClick={(event) => handleAddToCart(product, event)} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>}
            <BasicPagination productsLength={products.length} />
        </Container>
    );
}

export default ProductList;