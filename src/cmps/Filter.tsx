import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
//actions
import { getCategories, setCategory } from '../store/actions/index';
//metirial-UI
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(3),
            minWidth: 120,
            cursor: 'context-menu',
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }),
);

export default function SimpleSelect() {
    const dispatch = useDispatch();
    const categories = useSelector((state: any) => state.categories)
    
    useEffect(() => {
        dispatch(getCategories())
    }, [])

    const selectedCategory = useSelector((state: any) => state.selectedCategory)
    const classes = useStyles();

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        dispatch(setCategory(event.target.value as string))
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
                {categories.length > 0 && <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={selectedCategory}
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {categories.map((category: string) => {
                        return <MenuItem key={category} value={category}>{category.charAt(0).toUpperCase() + category.slice(1)} </MenuItem>
                    })}
                </Select>}
                <FormHelperText>Choose a Category you're interested in</FormHelperText>
            </FormControl>
        </div>
    );
}