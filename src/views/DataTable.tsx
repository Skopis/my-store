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
import { productAPI } from '../api/product'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(title: string, price: number, thumbnail: string) {
    return { title, price, thumbnail };
}

const rows = [
    createData('Product1', 159, 'img1.jpg'),
    createData('Product2', 237, 'img2.jpg'),
    createData('Product3', 262, 'img3.jpg'),
    createData('Product4', 305, 'img4.jpg'),
    createData('Product5', 356, 'img5.jpg'),
];

const DataTable: React.FC = () => {
    const classes = useStyles();
const res = productAPI.query()
    return (
        <Container fixed>
            <Filter />
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product title</TableCell>
                            <TableCell align="right">Price ($)</TableCell>
                            <TableCell align="right">Image thumbnail
                            </TableCell>
                            <TableCell align="right">Add to cart</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.title}>
                                <TableCell component="th" scope="row">
                                    {row.title}
                                </TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                <TableCell align="right">{row.thumbnail}</TableCell>
                                <TableCell align="right">
                                    <AddShoppingCartIcon />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <BasicPagination />
        </Container>
    );
}

export default DataTable