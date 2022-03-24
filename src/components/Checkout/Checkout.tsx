import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Helmet } from 'react-helmet-async';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_KgaIBFneeLYYJnvovSnTw9dU00TkTPc6K9');

const Checkout = () => {

    return (
        <>
            <Helmet>
                <title>Checkout :: Unity Mart</title>
                <meta
                    name="description"
                    content="Buy products from Unity Mart."
                />
                <link rel="canonical" href="/checkout" />
            </Helmet>
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </>

    );
};

export default Checkout;
