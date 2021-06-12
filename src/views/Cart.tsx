import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCart } from '../store/actions/index'
//cmps
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
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
        },
    })
);

function ccyFormat(num: number) {
    return `${num.toFixed(2)}`;
}

function priceRow(qty: number, price: number) {
    return qty * price;
}

function createRow(image: string, qty: number, price: number) {
    const Totalprice = priceRow(qty, price);
    return { image, qty, price: Totalprice };
}

interface CartItems {
    image: string;
    qty: number;
    price: number;
}

function subtotal(items: CartItems[]) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
    createRow('Paperclips (Box)', 100, 1.15),
    createRow('Paper (Case)', 10, 45.99),
    createRow('Waste Basket', 2, 17.99),
];

const Cart: React.FC = () => {
    const dispatch = useDispatch()
    
    const cartItems = useSelector((state: any) => state.cartItems)
    useEffect(() => {
        console.log('useEffect for Cart')
        dispatch(getCart())
    }, [])
    const invoiceSubtotal = subtotal(cartItems);
    const invoiceTaxes = TAX_RATE * invoiceSubtotal;
    const invoiceTotal = invoiceTaxes + invoiceSubtotal;
    const classes = useStyles();
    console.log('cartItems at cart', cartItems)
    return (
        <Container fixed>
            {cartItems && cartItems.length &&
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
                                <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Tax</TableCell>
                                <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                                <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={2}>Total</TableCell>
                                <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <Button variant="contained" color="primary">Check Out</Button>
                </TableContainer>}
        </Container>
    );
}

export default Cart;


////////////////////////////////////////////////////////////////////////////////////



// const Cart: React.FC = () => {
//     const dispatch = useDispatch()

//     const cartItems = useSelector((state: any) => state.cartItems)
//     useEffect(() => {
//         console.log('useEffect for Cart')
//         dispatch(getCart())
//     }, [])

//     return (
//         <Container fixed>
//             {cartItems && cartItems.length && <div>
//                 <div>Hello Cart</div>
//                 {cartItems.map((cartItem: any) => {
//                     return <TableContainer component={Paper}>
//                     </TableContainer>
//                 })}

//                 <Button variant="contained" color="primary">Check Out</Button>
//             </div>}

//         </Container>
//     )
// }

// export default Cart

//////////////////////////////////////////////////////////////
//will use later the code below:

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

// const TAX_RATE = 0.07;

// const useStyles = makeStyles({
//   table: {
//     minWidth: 700,
//   },
// });

// function ccyFormat(num: number) {
//   return `${num.toFixed(2)}`;
// }

// function priceRow(qty: number, unit: number) {
//   return qty * unit;
// }

// function createRow(desc: string, qty: number, unit: number) {
//   const price = priceRow(qty, unit);
//   return { desc, qty, unit, price };
// }

// interface Row {
//   desc: string;
//   qty: number;
//   unit: number;
//   price: number;
// }

// function subtotal(items: Row[]) {
//   return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
// }

// const rows = [
//   createRow('Paperclips (Box)', 100, 1.15),
//   createRow('Paper (Case)', 10, 45.99),
//   createRow('Waste Basket', 2, 17.99),
// ];

// const invoiceSubtotal = subtotal(rows);
// const invoiceTaxes = TAX_RATE * invoiceSubtotal;
// const invoiceTotal = invoiceTaxes + invoiceSubtotal;

// export default function SpanningTable() {
//   const classes = useStyles();

//   return (
//     <TableContainer component={Paper}>
//       <Table className={classes.table} aria-label="spanning table">
//         <TableHead>
//           <TableRow>
//             <TableCell align="center" colSpan={3}>
//               Details
//             </TableCell>
//             <TableCell align="right">Price</TableCell>
//           </TableRow>
//           <TableRow>
//             <TableCell>Desc</TableCell>
//             <TableCell align="right">Qty.</TableCell>
//             <TableCell align="right">Unit</TableCell>
//             <TableCell align="right">Sum</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow key={row.desc}>
//               <TableCell>{row.desc}</TableCell>
//               <TableCell align="right">{row.qty}</TableCell>
//               <TableCell align="right">{row.unit}</TableCell>
//               <TableCell align="right">{ccyFormat(row.price)}</TableCell>
//             </TableRow>
//           ))}
//           <TableRow>
//             <TableCell rowSpan={3} />
//             <TableCell colSpan={2}>Subtotal</TableCell>
//             <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
//           </TableRow>
//           <TableRow>
//             <TableCell>Tax</TableCell>
//             <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
//             <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
//           </TableRow>
//           <TableRow>
//             <TableCell colSpan={2}>Total</TableCell>
//             <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
//           </TableRow>
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }