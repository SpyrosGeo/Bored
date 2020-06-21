import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function Selector({handleSelectType,activityType,getActivity}) {
    const classes = useStyles();
    return (
        <div className="App">
             <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Activities</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={activityType}
                    onChange={handleSelectType}
                >
                    <MenuItem value={"education"}>Education</MenuItem>
                    <MenuItem value={"recreational"}>Recreational</MenuItem>
                    <MenuItem value={"cooking"}>Cooking</MenuItem>
                    <MenuItem value={"social"}>Social</MenuItem>
                    <MenuItem value={"diy"}>DIY</MenuItem>
                    <MenuItem value={"charity"}>Charity</MenuItem>
                    <MenuItem value={"relaxation"}>Relaxation</MenuItem>
                    <MenuItem value={"music"}>Music</MenuItem>
                    <MenuItem value={"busywork"}>Busywork</MenuItem>

                </Select>
            </FormControl>
            <Button onClick={getActivity} variant="contained" color="primary">give a Suggestion</Button>
        </div>
    )
}
