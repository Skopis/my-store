import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Paper from '@material-ui/core/Paper';
import BasicPagination from '../cmps/BasicPagination';
import Container from '@material-ui/core/Container';
import Filter from '../cmps/Filter';


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


interface Props {
    products: {
        id: string,
        title: string,
        price: string,
        category: string,
        description: string,
        image: string
    }[];
}

const ProductList: React.FC<Props> = ({ products }) => {
    console.log('products', products)
    const classes = useStyles();
    return (
        <Container fixed>
            <Filter />
            {products && products.length && <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product title</TableCell>
                            <TableCell align="right">Price ($)</TableCell>
                            <TableCell align="right">Image</TableCell>
                            <TableCell align="right">Add to cart</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell component="th" scope="row">
                                    {product.title}
                                </TableCell>
                                <TableCell align="right">{product.price}</TableCell>
                                <TableCell align="right"><img className="product-img" src={product.image} alt="" /></TableCell>
                                <TableCell align="right">
                                    <AddShoppingCartIcon />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>}
            <BasicPagination />
        </Container>
    );
}

export default ProductList;