
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPageNum } from '../store/actions/index'
//cmps
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';


const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            '& > *': {
                marginTop: theme.spacing(2),
                marginBottom: theme.spacing(2),
            },
        },
    }),
);

interface Props {
    productsLength: number;
}

const BasicPagination: React.FC<Props> = ({ productsLength }) => {
    const dispatch = useDispatch()
    const currentPageNum = useSelector((state: any) => state.currentPageNum)
    const handleChange = (event: any, newPageNum: number) => {
        dispatch(setPageNum(newPageNum - 1));
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Pagination page={currentPageNum + 1} count={Math.ceil(productsLength / 5)} color="primary" onChange={handleChange} />
        </div>
    );
}

export default BasicPagination