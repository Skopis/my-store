import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
        margin: '24px auto',
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#F9F9F9'
    },
    title: {
        fontSize: 20,
    },
});
interface Props{
    invoiceTotalForMsg: number
}
const CheckOutMsg: React.FC<Props> = ({invoiceTotalForMsg}) =>{
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                Checkout completed successfully!
                </Typography>
                <Typography variant="h5" component="h2">
                Payment of ${invoiceTotalForMsg} recieved
                </Typography>
                <Typography variant="body2" component="pre" style={{marginTop: '16px'}}>
                <p>Your items are due to arrive within the next 7 business days</p>
                <p>Feel free to contact us for any questions or issues</p>
                <p>At: <a href="my-store@react.redux">my-store@react.redux</a></p>
                </Typography>
            </CardContent>
        </Card>
    );
}

export default CheckOutMsg