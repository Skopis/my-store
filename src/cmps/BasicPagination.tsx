
import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { useDispatch } from 'react-redux';
import { setPageNum } from '../store/actions/index'


const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            '& > *': {
                marginTop: theme.spacing(2),
            },
        },
    }),
);


interface Props {
    productsLength: number;
}


const BasicPagination: React.FC<Props> = ({ productsLength }) => {
    const dispatch = useDispatch()
    // event: React.MouseEvent<HTMLButtonElement> | null
    const handleChange = (event: any, newPageNum: number) => {
        console.log(newPageNum, 'newPageNum')
        dispatch(setPageNum(newPageNum - 1));
    };

    console.log('productsLength', productsLength)
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Pagination count={Math.ceil(productsLength / 5)} color="primary" onChange={handleChange} />
        </div>
    );
}

export default BasicPagination