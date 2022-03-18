import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const CustomerSupport = () => {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Customer Support
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="supportEmail"
                        label="Support Email"
                        fullWidth
                        autoComplete="given-email"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="phoneNumber"
                        label="Phone number"
                        fullWidth
                        autoComplete="Phone-number"
                        variant="standard"
                    />
                </Grid>


            </Grid>
        </React.Fragment>
    );
};

export default CustomerSupport;