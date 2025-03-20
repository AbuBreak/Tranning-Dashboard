import React, { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box, FormHelperText } from '@mui/material';

export default function CustomSelectField(props) {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        // Fetch data from the mock API
        fetch('http://localhost:3001/jobs')
            .then((response) => response.json())
            .then((data) => setMenuItems(data))
            .catch((error) => console.error('Error fetching jobs:', error));
    }, []);

    return (
        <Box sx={{ width: '100%', margin: 'normal' }}>
            <FormControl fullWidth error={!!props.error}>
                <InputLabel id="job-select-label">Job</InputLabel>
                <Select
                    labelId="job-select-label"
                    id="job-select"
                    value={props.value}
                    onChange={props.onChange}
                    label="Job"
                >
                    {menuItems.map((item) => (
                        <MenuItem key={item.id} value={item.id}>
                            {item.name}
                        </MenuItem>
                    ))}
                </Select>
                {props.error && <FormHelperText>{props.error}</FormHelperText>}
            </FormControl>
        </Box>
    );
}