import React, { useEffect, useState } from "react";
import {
    Typography,
    TextField,
    Button,
    Stepper,
    Step,
    StepLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
    useForm,
    Controller,
    FormProvider,
    useFormContext,
} from "react-hook-form";
import { Container, Grid, Paper } from "@mui/material";
import { AddVendorToDB } from "../../../Services/VendorApi/AddVendorToDB";
import { useNavigate } from "react-router-dom";
import { addUserToDB } from "../../../Services/AddUserToDB/AddUserToDB";
import { GetUserDetails } from "../../../Services/UsersApi/GetUserDetails";
import UseAuth from "../../../hooks/UseAuth";

const useStyles = makeStyles((theme) => ({
    button: {
        marginRight: theme.spacing(1),
    },
}));

function getSteps() {
    return ['Vendor store', 'Store address', 'Payment details', 'Customer support', 'Confirm your selling']
}
const VendorStore = () => {
    const { control } = useFormContext();
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Controller
                        control={control}
                        name="storeName"
                        render={({ field }) => (
                            <TextField
                                required
                                id="storeName"
                                label="Store Name"
                                fullWidth
                                autoComplete="given-name"
                                variant="standard"
                                {...field}
                            />
                        )}
                    />

                </Grid>
                <Grid item xs={12} md={6}>
                    <Controller
                        control={control}
                        name="storeSlug"
                        render={({ field }) => (
                            <TextField
                                required
                                id="storeSlug"
                                label="Store Slug"
                                fullWidth
                                autoComplete="given-name"
                                variant="standard"
                                {...field}
                            />
                        )}
                    />

                </Grid>
                <Grid item xs={12} md={6}>
                    <Controller
                        control={control}
                        name="storeEmail"
                        render={({ field }) => (
                            <TextField
                                required
                                id="storeEmail"
                                label="Store Email"
                                type="email"
                                fullWidth
                                autoComplete="given-name"
                                variant="standard"
                                {...field}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Controller
                        control={control}
                        name="phoneNumber"
                        render={({ field }) => (
                            <TextField
                                required
                                id="phoneNumber"
                                label="Phone Number"
                                fullWidth
                                type="number"
                                autoComplete="given-name"
                                variant="standard"
                                {...field}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Controller
                        control={control}
                        name="storeLogo"
                        render={({ field }) => (
                            <TextField
                                required
                                id="storeLogo"
                                label="Store Logo"
                                type="url"
                                fullWidth
                                placeholder="Logo url"
                                variant="standard"
                                {...field}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Controller
                        control={control}
                        name="storeBanner"
                        render={({ field }) => (
                            <TextField
                                required
                                id="storeBanner"
                                label="Store Banner"
                                fullWidth
                                type="url"
                                placeholder="Banner url"
                                autoComplete="given-name"
                                variant="standard"
                                {...field}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        control={control}
                        name="storeDescription"
                        render={({ field }) => (
                            <TextField
                                required
                                id="storeDescription"
                                label="Store Description"
                                fullWidth
                                autoComplete="given-name"
                                variant="standard"
                                {...field}
                            />
                        )}
                    />
                </Grid>


            </Grid>
        </>
    );
};
const StoreAddress = () => {
    const { control } = useFormContext();
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Controller
                        control={control}
                        name="firstName"
                        render={({ field }) => (
                            <TextField
                                required
                                id="firstName"
                                label="First name"
                                fullWidth
                                autoComplete="given-name"
                                variant="standard"
                                {...field}
                            />
                        )}
                    />

                </Grid>
                <Grid item xs={12} sm={6}>
                    <Controller
                        control={control}
                        name="lastName"
                        render={({ field }) => (
                            <TextField
                                required
                                id="lastName"

                                label="Last name"
                                fullWidth
                                autoComplete="family-name"
                                variant="standard"
                                {...field}
                            />
                        )}
                    />

                </Grid>
                <Grid item xs={12}>

                </Grid>
                <Grid item xs={12}>
                    <Controller
                        control={control}
                        name="address"
                        render={({ field }) => (
                            <TextField
                                id="address"

                                label="Address line"
                                fullWidth
                                autoComplete="shipping address-line2"
                                variant="standard"
                                {...field}
                            />
                        )}
                    />

                </Grid>
                <Grid item xs={12} sm={6}>
                    <Controller
                        control={control}
                        name="city"
                        render={({ field }) => (
                            <TextField
                                required
                                id="city"

                                label="City"
                                fullWidth
                                autoComplete="shipping address-level2"
                                variant="standard"
                                {...field}
                            />
                        )}
                    />

                </Grid>
                <Grid item xs={12} sm={6}>
                    <Controller
                        control={control}
                        name="state"
                        render={({ field }) => (
                            <TextField
                                id="state"

                                label="State/Province/Region"
                                fullWidth
                                variant="standard"
                                {...field}
                            />
                        )}
                    />

                </Grid>
                <Grid item xs={12} sm={6}>
                    <Controller
                        control={control}
                        name="zip"
                        render={({ field }) => (
                            <TextField
                                required
                                id="zip"
                                label="Zip / Postal code"
                                fullWidth
                                autoComplete="shipping postal-code"
                                variant="standard"
                                {...field}
                            />
                        )}
                    />

                </Grid>
                <Grid item xs={12} sm={6}>
                    <Controller
                        control={control}
                        name="country"
                        render={({ field }) => (
                            <TextField
                                required
                                id="country"
                                label="Country"
                                fullWidth
                                autoComplete="shipping country"
                                variant="standard"
                                {...field}
                            />
                        )}
                    />

                </Grid>

            </Grid>
        </>
    );
};
const PaymentDetails = () => {
    const { control } = useFormContext();
    return (
        <>
            <Grid container spacing={3}>

                <Grid item xs={12} md={6}>
                    <Controller
                        control={control}
                        name="paypalNumber"
                        render={({ field }) => (
                            <TextField
                                required
                                id="paypalNumber"
                                label="Your Paypal"
                                fullWidth
                                type='number'
                                autoComplete="paypal-number"
                                variant="standard"
                                {...field}
                            />
                        )}
                    />

                </Grid>

            </Grid>
        </>
    );
};
const CustomerSupport = () => {
    const { control } = useFormContext();
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Controller
                        control={control}
                        name="supportEmail"
                        render={({ field }) => (
                            <TextField
                                required
                                id="supportEmail"
                                label="Support Email"
                                fullWidth
                                type='email'
                                autoComplete="given-email"
                                variant="standard"
                                {...field}
                            />
                        )}
                    />

                </Grid>
                <Grid item xs={12} md={6}>
                    <Controller
                        control={control}
                        name="supportPhoneNumber"
                        render={({ field }) => (
                            <TextField
                                required
                                id="supportPhoneNumber"
                                label="Phone number"
                                fullWidth
                                type='number'
                                autoComplete="Phone-number"
                                variant="standard"
                                {...field}
                            />
                        )}
                    />

                </Grid>


            </Grid></>
    );
};
const ConfirmVendor = () => {
    return <Typography align="center" variant="h6" gutterBottom>
        Lets Go to the Dashboard
    </Typography>
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return <VendorStore />;

        case 1:
            return <StoreAddress />;
        case 2:
            return <PaymentDetails />;
        case 3:
            return <CustomerSupport />;
        case 4:
            return <ConfirmVendor />;
        default:
            return "unknown step";
    }
}

const VendorInformations = () => {
    const classes = useStyles();
    const methods = useForm({
        defaultValues: {
            storeName: "",
            storeSlug: "",
            storeEmail: "",
            phoneNumber: "",
            storeLogo: "",
            storeBanner: "",
            storeDescription: "",
            firstName: "",
            lastName: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            country: "",
            paypalNumber: "",
            supportEmail: "",
            supportPhoneNumber: ""
        },
    });
    const { user } = UseAuth()
    useEffect(() => {
        fetch(`https://young-springs-82149.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                localStorage.setItem("userDetails", JSON.stringify(data))
            })
    }, [user])

    const [activeStep, setActiveStep] = useState<number>(0);
    const [skippedSteps, setSkippedSteps] = useState<any>([]);
    const steps = getSteps();
    const navigate = useNavigate()
    const isStepOptional = (step) => {
        return step === 1 || step === 2;
    };

    const isStepSkipped = (step) => {
        return skippedSteps.includes(step);
    };

    const handleNext = (data) => {
        if (activeStep === steps.length - 1) {
            AddVendorToDB(data, navigate)
        } else {
            setActiveStep(activeStep + 1);
            setSkippedSteps(
                skippedSteps.filter((skipItem) => skipItem !== activeStep)
            );
        }
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const handleSkip = () => {
        if (!isStepSkipped(activeStep)) {
            setSkippedSteps([...skippedSteps, activeStep]);
        }
        setActiveStep(activeStep + 1);
    };

    // const onSubmit = (data) => {
    //   console.log(data);
    // };
    return (
        <div>
            <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4" align="center">
                        Vendor Details
                    </Typography>
                    <Stepper alternativeLabel activeStep={activeStep}>
                        {steps.map((step, index) => {
                            const labelProps: any = {};
                            const stepProps: any = {};
                            if (isStepOptional(index)) {
                                labelProps.optional = (
                                    <Typography
                                        variant="caption"
                                        align="center"
                                        style={{ display: "block" }}
                                    >
                                        optional
                                    </Typography>
                                );
                            }
                            if (isStepSkipped(index)) {
                                stepProps.completed = false;
                            }
                            return (
                                <Step {...stepProps} key={index}>
                                    <StepLabel {...labelProps}>{step}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>

                    {activeStep === steps.length ? (<>
                        <Typography variant="h3" align="center">
                            Thank You, You are now a vendor and you can be able to upload products and earn through our website.
                        </Typography>
                        <Button
                            className={classes.button}
                            variant="contained"
                            color="primary"
                            onClick={handleSkip}
                        >
                            Go to the Dashboard
                        </Button>
                    </>

                    ) : (
                        <>
                            <FormProvider {...methods}>
                                <form onSubmit={methods.handleSubmit(handleNext)}>
                                    {getStepContent(activeStep)}

                                    <div className="mt-7 flex justify-end">
                                        <Button
                                            className={classes.button}
                                            disabled={activeStep === 0}
                                            onClick={handleBack}
                                        >
                                            back
                                        </Button>
                                        {isStepOptional(activeStep) && (
                                            <Button
                                                className={classes.button}
                                                variant="contained"
                                                color="primary"
                                                onClick={handleSkip}
                                            >
                                                skip
                                            </Button>
                                        )}
                                        <Button
                                            className={classes.button}
                                            variant="contained"
                                            color="primary"
                                            // onClick={handleNext}
                                            type="submit"
                                        >
                                            {activeStep === steps.length - 1 ? "Finish" : "Next"}
                                        </Button>
                                    </div>
                                </form>
                            </FormProvider>
                        </>
                    )}
                </Paper>
            </Container>
        </div>
    );
};

export default VendorInformations;