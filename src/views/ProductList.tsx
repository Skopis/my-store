import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
//actions
import { getProductList } from '../store/actions/index'
import { addToCart } from '../store/actions/index'
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



const useStyles = makeStyles({
    table: {
        minWidth: 700,
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
        dispatch(getProductList(selectedCategory))
    }, [selectedCategory])
    const products = useSelector((state: any) => state.productList)
    const productsForDisplay = products.slice(currentPageNum * productsPerPage, currentPageNum * productsPerPage + productsPerPage)

    const classes = useStyles();

    return (
        <Container fixed>
            <Filter />
            {productsForDisplay && productsForDisplay.length && <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product title</TableCell>
                            <TableCell align="right">Price ($)</TableCell>
                            <TableCell align="center">Image</TableCell>
                            <TableCell align="right">Add to cart</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {productsForDisplay.map((product: productObj) => (
                            <TableRow key={product.id}>
                                <TableCell component="th" scope="row">
                                    {product.title}
                                </TableCell>
                                <TableCell align="center">{product.price}</TableCell>
                                <TableCell align="center"><img className="product-img" src={product.image} alt="" /></TableCell>
                                <TableCell align="center">
                                    <AddShoppingCartIcon onClick={() => dispatch(addToCart(product))} />
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