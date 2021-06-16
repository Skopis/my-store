import React from 'react';
import { useDispatch } from 'react-redux'
//actions
import { getProductForModal, addToCart, getCart } from '../store/actions/index'
//metirial-UI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({

    media: {
        height: 140,
    },
});

interface Props {
    product: {
        id: number,
        title: string,
        price: number,
        category: string,
        description: string,
        image: string
    }
}

const ProductModal: React.FC<Props> = ({ product }) => {
    const dispatch = useDispatch()
    console.log('hey')
    const classes = useStyles();
    // console.log('product', product)

    const onCloseModal = async () => {
        dispatch(getProductForModal(null))
    }

    const onAddToCart = async () => {
        await dispatch(addToCart(product))
        dispatch(getCart())
    }

    return (
        <Card className="modal-card">
            <div className="modal-img-container">
                <img className="modal-img" src={product.image} alt="" />
            </div>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {product.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {product.description}
                </Typography>
            </CardContent>

            <CardActions className="modal-btn-container">
                <Button size="small" color="primary" onClick={() => onAddToCart()}>
                    Add to Cart
                </Button>
                <Button className="close-modal-btn" size="small" color="primary" onClick={() => onCloseModal()}>
                    Close
                </Button>
            </CardActions>
        </Card>
    );
}

export default ProductModal