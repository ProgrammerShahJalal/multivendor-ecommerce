import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const StoreName = () => {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Store Name
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="storeName"
                        label="Store Name"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="storeSlug"
                        label="Store Slug"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="storeEmail"
                        label="Store Email"
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
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="storeLogo"
                        label="Store Logo"
                        fullWidth
                        autoComplete="given-logo"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="storeBanner"
                        label="Store Banner"
                        fullWidth
                        autoComplete="given-banner"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="storeDescription"
                        label="Store Description"
                        fullWidth
                        autoComplete="given-description"
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

export default StoreName;