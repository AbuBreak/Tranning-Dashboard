import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box } from '@mui/material';

export default function SelectField() {
    const [job, setJob] = React.useState('');

    const handleChange = (event) => {
        setJob(event.target.value);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <FormControl fullWidth>
                <InputLabel id="job-select-label">Job</InputLabel>
                <Select
                    labelId="job-select-label"
                    id="job-select"
                    value={job}
                    onChange={handleChange}
                    label="Job Title"
                >
                    <MenuItem value={'se'}>Software Engineer</MenuItem>
                    <MenuItem value={'fullStack'}>Full-Stack Developer</MenuItem>
                    <MenuItem value={'mb'}>Mobile App Developer</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}