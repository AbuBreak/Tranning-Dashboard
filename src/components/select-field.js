import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box , FormHelperText} from '@mui/material';

/*
import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';

const SelectField = ({ value, onChange, error }) => {
    return (
        <FormControl fullWidth error={!!error}>
            <InputLabel id="job-select-label">Job</InputLabel>
            <Select
                labelId="job-select-label"
                value={value}
                onChange={onChange}
            >
                <MenuItem value="se">Software Engineer</MenuItem>
                <MenuItem value="fullStack">Full-Stack Developer</MenuItem>
                <MenuItem value="mb">Mobile App Developer</MenuItem>
            </Select>
            {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
    );
};

export default SelectField;
*/
export default function CustomSelectField(props) {
    // const [job, setJob] = React.useState('');

    // const handleChange = (event) => {
    //     setJob(event.target.value);
    // };

    return (
        <Box sx={{ width: '100%', margin: 'normal', }}>
            <FormControl fullWidth error={!!props.error}>
                <InputLabel id="job-select-label">Job</InputLabel>
                <Select
                    labelId="job-select-label"
                    value={props.value}
                    onChange={props.onChange}
                >
                    <MenuItem value={'se'}>Software Engineer</MenuItem>
                    <MenuItem value={'fullStack'}>Full-Stack Developer</MenuItem>
                    <MenuItem value={'mb'}>Mobile App Developer</MenuItem>
                </Select>
            {props.error && <FormHelperText>{props.error}</FormHelperText>}

            </FormControl>
        </Box>
    );
}