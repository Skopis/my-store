import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            '& > *': {
                marginTop: theme.spacing(2),
            },
        },
    }),
);

export default function BasicPagination() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {/* <Pagination count={10} /> */}
            <Pagination count={10} color="primary" /> {/* count will be : total number of products / 5(products per page) */}
            {/* <Pagination count={10} disabled /> */}
        </div>
    );
}