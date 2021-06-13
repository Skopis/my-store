import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCart, checkOut } from '../store/actions/index'
//cmps
import CheckOutMsg from '../cmps/CheckOutMsg'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const TAX_RATE = 0.17;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        table: {
            minWidth: 700,
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(3),
        },
    })
);

function ccyFormat(num: number) {
    return `${num.toFixed(2)}`;
}

interface CartItems {
    title: string,
    image: string;
    qty: number;
    price: number;
}

function subtotal(items: CartItems[]) {
    if (items && items.length) return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const Cart: React.FC = () => {
    var isCheckOutDone = false
    const dispatch = useDispatch()
    const cartItems = useSelector((state: any) => state.cartItems)
    useEffect(() => {
        dispatch(getCart())
    }, [])
    const invoiceSubtotal = subtotal(cartItems) || 0;
    const invoiceTaxes = TAX_RATE * invoiceSubtotal;
    const invoiceTotal = invoiceTaxes + invoiceSubtotal;
    const classes = useStyles();
    isCheckOutDone = useSelector((state: any) => state.checkOut).isCheckOut;
    const invoiceTotalForMsg = useSelector((state: any) => state.checkOut).invoiceTotal.toFixed(2);
    const handleCheckOut = async () => {
        await dispatch(checkOut(true, invoiceTotal))
        await dispatch(getCart())
    }

    return (
        <Container fixed>
            <Link to="/"><Button className="btn" variant="contained" color="primary">Back to Products list</Button></Link>
            {cartItems.length>0 &&
                <TableContainer className={classes.table} component={Paper}>
                    <Table aria-label="spanning table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Product title</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell align="center">Image</TableCell>
                                <TableCell>Qty.</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cartItems.map((cartItem: any) => {
                                return <TableRow key={cartItem.id}>
                                    <TableCell>{cartItem.title}</TableCell>
                                    <TableCell>{cartItem.price}</TableCell>
                                    <TableCell align="center"><img className="cart-item-img" src={cartItem.image} alt="" /></TableCell>
                                    <TableCell>1</TableCell>
                                </TableRow>
                            }
                            )}
                            <TableRow>
                                <TableCell rowSpan={3} />
                                <TableCell colSpan={2}>Subtotal</TableCell>
                                <TableCell className="cart-price" align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Tax</TableCell>
                                <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                                <TableCell className="cart-price" align="right">{ccyFormat(invoiceTaxes)}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={2}>Total</TableCell>
                                <TableCell className="cart-price" align="right">{ccyFormat(invoiceTotal)}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <Button className="btn btn-check-out" variant="contained" color="primary" onClick={() => handleCheckOut()}>Check Out</Button>
                </TableContainer>}
                {isCheckOutDone && <CheckOutMsg invoiceTotalForMsg={invoiceTotalForMsg} />}
        </Container>
    );
}

export default Cart;