import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { getCategories } from '../store/actions/index';
import { setCategory } from '../store/actions/index';
import { useEffect } from 'react';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(3),
            // margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }),
);

export default function SimpleSelect() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategories())
    }, [])
    const categories = useSelector((state: any) => state.categories)
    const selectedCategory = useSelector((state: any) => state.selectedCategory)
    const classes = useStyles();

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        dispatch(setCategory(event.target.value as string))
    };

    return (
        <div>
            {categories && categories.length && <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={selectedCategory}
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {categories.map((category: string) => {
                        return <MenuItem key={category} value={category}>{category} </MenuItem>
                    })}

                </Select>
                <FormHelperText>Choose a Category you're interested in</FormHelperText>
            </FormControl>}
        </div>
    );
}