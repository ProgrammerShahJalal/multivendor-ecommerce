import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_KgaIBFneeLYYJnvovSnTw9dU00TkTPc6K9');

const Checkout = () => {

    return (

        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>

    );
};

export default Checkout;
