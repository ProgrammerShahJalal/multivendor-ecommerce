import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const CoustomerSupport = () => {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Coustomer Support
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

                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveCard" value="yes" />}
                        label="Remember credit card details for next time"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default CoustomerSupport;