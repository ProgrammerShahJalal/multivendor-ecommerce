import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UseAuth from '../../hooks/UseAuth';
import { clearCart } from '../../redux/cartSlice';
import { affiliateCommission } from '../../Services/Affiliate/AffiliateCommission';


// type NewUser = {
//     name: string,
//     email: string,
//     card: number,
//     selected: string,

// }

const CheckoutForm = () => {
    const { cart, cartTotal } = useSelector((state: any) => state.cart)
    const { user } = UseAuth()
    const date = new Date().toDateString()
    const stripe = useStripe();
    const elements = useElements();
    const dispatch: any = useDispatch()

    const nameRef = React.useRef<HTMLInputElement>(null)
    const emailRef = React.useRef<HTMLInputElement>(null)
    const addressRef = React.useRef<HTMLInputElement>(null)
    const countryRef = React.useRef<HTMLSelectElement>(null)
    const phoneRef = React.useRef<HTMLInputElement>(null)
    const cityRef = React.useRef<HTMLInputElement>(null)
    const stateRef = React.useRef<HTMLInputElement>(null)
    const zipRef = React.useRef<HTMLInputElement>(null)


    const [error, setError] = React.useState<string | undefined>();
    const [success, setSuccess] = React.useState('');
    const [processing, setProcessing] = React.useState(false);
    const [clientSecret, setClientSecret] = React.useState('');

    React.useEffect(() => {
        fetch('https://guarded-ocean-73313.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ cartTotal })
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret));
    }, [cartTotal]);


    const handleSubmit = async (e) => {
        e.preventDefault();


        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        setProcessing(true);
        const { error, paymentMethod }: any = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            setError(error.message);
            setSuccess('');
        }
        else {
            setError('');
            console.log(paymentMethod);
        }

        // payment intent
        const { paymentIntent, error: intentError }: any = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: nameRef.current?.value,
                        email: emailRef.current?.value || user.email,
                        phone: phoneRef.current?.value,
                        address: {
                            country: countryRef.current?.value,
                            line1: addressRef.current?.value,
                            city: cityRef.current?.value,
                            postal_code: zipRef.current?.value,
                            state: stateRef.current?.value,

                        },
                    },
                },
            },
        );

        if (intentError) {
            setError(intentError.message);
            setSuccess('');
        }
        else {
            setError('');
            setSuccess('Your payment processed successfully.')

            // save to database
            // const payment = {
            //     amount: paymentIntent.amount,
            //     billing: paymentIntent.billing_details,
            //     created: paymentIntent.created,
            //     last4: paymentMethod.card.last4,
            //     transaction: paymentIntent?.client_secret.slice('_secret')[0]
            // }

            await fetch('https://guarded-ocean-73313.herokuapp.com/dashboard/orders', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    products: [...cart], paymentDetails: {
                        createdId: paymentIntent.created,
                        date,
                        amount: paymentIntent.amount,
                        email: emailRef.current?.value,
                        billing: paymentIntent.billing_details,
                        last4: paymentMethod.card.last4,
                        transaction: paymentIntent?.client_secret.slice('_secret')[0]
                    },
                    status: 'Pending',
                    billing: {
                        country: countryRef.current?.value,
                        name: nameRef.current?.value,
                        phone: phoneRef.current?.value,
                        line1: addressRef.current?.value,
                        city: cityRef.current?.value,
                        postal_code: zipRef.current?.value,
                        state: stateRef.current?.value,
                    }
                })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        alert('Order Successfully added')
                        dispatch(clearCart())
                        const ref: any = localStorage.getItem("affiliate_Link")
                        const affiliateLink = JSON.parse(ref)
                        affiliateCommission(affiliateLink, paymentIntent.amount)
                    }
                }).finally(() => setProcessing(false))

        }


    }

    return (
        <div className="h-screen grid grid-cols-3">
            <div className="lg:col-span-2 col-span-3 bg-indigo-50 space-y-8 px-12">
                <div className="mt-8 p-4 relative flex flex-col sm:flex-row sm:items-center bg-white shadow rounded-md ">
                    <div className="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0">
                        <div className="text-yellow-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 sm:w-5 h-6 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div className="text-sm font-medium ml-3">Checkout</div>
                    </div>
                    <div className="text-sm tracking-wide text-gray-500 mt-4 sm:mt-0 sm:ml-4">Complete your shipping and payment details below.</div>
                    <div className="absolute sm:relative sm:top-auto sm:right-auto ml-auto right-4 top-4 text-gray-400 hover:text-gray-800 cursor-pointer">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </div>
                </div>
                <div className="rounded-md">
                    <form onSubmit={handleSubmit} className='p-3' id="payment-form" method="POST" action="">
                        <div>
                            <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">Shipping & Billing Information</h2>
                            <fieldset className="mb-3 bg-white shadow rounded text-gray-600">
                                <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                    <span className="text-right px-2">Name</span>
                                    <input name="name" ref={nameRef} className="focus:outline-none px-3" placeholder="Try Odinsson" />
                                </label>
                                <label className="inline-flex w-2/4 border-b border-gray-200 py-3">
                                    <span className="text-right px-2">Email</span>
                                    <input defaultValue={user.email} name="email" ref={emailRef} className="focus:outline-none px-3" placeholder="unitymart@gmail.com" />
                                </label>
                                <label className="xl:w-2/4 xl:inline-flex py-3 items-start  border-b border-gray-200">
                                    <span className="text-right  xl:px-0 xl:text-none">Phone</span>
                                    <input name="phone" ref={phoneRef} className="focus:outline-none px-3" placeholder="+880170000" />
                                </label>
                                <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                    <span className="text-right px-2">Address</span>
                                    <input name="address" ref={addressRef} className="focus:outline-none px-3" placeholder="10 Street XYZ 654" />
                                </label>
                                <label className="flex border-b border-gray-200 h-12 py-3 items-start">
                                    <span className="text-right px-2">City</span>
                                    <input name="city" ref={cityRef} className="focus:outline-none px-3" placeholder="San Francisco" />
                                </label>
                                <label className="inline-flex w-2/4 border-gray-200 py-3">
                                    <span className="text-right px-2 ">State</span>
                                    <input name="state" ref={stateRef} className="focus:outline-none px-3" placeholder="CA" />
                                </label>
                                <label className="xl:w-1/4 xl:inline-flex py-3 items-start flex xl:border-none border-t border-gray-200">
                                    <span className="text-right  xl:px-0 xl:text-none">ZIP</span>
                                    <input name="postal_code" ref={zipRef} className="focus:outline-none px-3" placeholder="98603" />
                                </label>
                                <label className="flex border-t border-gray-200 h-12 py-3 items-center select relative">
                                    <span className="text-right px-2">Country</span>
                                    <div id="country" className="focus:outline-none px-3 w-full flex items-center">
                                        <select ref={countryRef} name="country" className="border-none bg-transparent flex-1 cursor-pointer appearance-none focus:outline-none">
                                            <option value="AU">Australia</option>
                                            <option value="BE">Belgium</option>
                                            <option value="BD">Bangladesh</option>
                                            <option value="IN">India</option>
                                            <option value="BR">Brazil</option>
                                            <option value="CA">Canada</option>
                                            <option value="CN">China</option>
                                            <option value="DK">Denmark</option>
                                            <option value="FI">Finland</option>
                                            <option value="FR">France</option>
                                            <option value="DE">Germany</option>
                                            <option value="HK">Hong Kong</option>
                                            <option value="IE">Ireland</option>
                                            <option value="IT">Italy</option>
                                            <option value="JP">Japan</option>
                                            <option value="LU">Luxembourg</option>
                                            <option value="MX">Mexico</option>
                                            <option value="NL">Netherlands</option>
                                            <option value="PL">Poland</option>
                                            <option value="PT">Portugal</option>
                                            <option value="SG">Singapore</option>
                                            <option value="ES">Spain</option>
                                            <option value="TN">Tunisia</option>
                                            <option value="GB">United Kingdom</option>
                                            {/* <option value="US" selected="selected">All Country</option> */}
                                        </select>
                                    </div>
                                </label>
                            </fieldset>
                        </div>
                        <div className='py-3 px-1 rounded bg-white shadow'>
                            <CardElement
                                options={{
                                    style: {

                                        base: {
                                            fontSize: '16px',
                                            backgroundColor: '#fff',
                                            color: '#424770',
                                            '::placeholder': {
                                                color: '#aab7c4',
                                            },
                                        },
                                        invalid: {
                                            color: '#9e2146',
                                        },
                                    },
                                }}
                            />
                        </div>
                        {processing ? <h2>loading..</h2> : <button type="submit" className='submit-button mt-6 px-4 py-3 rounded-full bg-indigo-600 text-white focus:ring focus:outline-none w-full text-xl font-semibold transition-colors' >
                            Pay ${cartTotal}
                        </button>}
                    </form>
                </div>
                {error}
                {success}

            </div>
            <div className="col-span-1 bg-white lg:block hidden">
                <h1 className="py-6 border-b-2 text-xl text-gray-600 px-8">Order Summary</h1>
                <ul className="py-6 border-b space-y-6 px-8">
                    {
                        cart.map(item => {
                            return <li className="grid grid-cols-6 gap-2 border-b-1">
                                <div className="col-span-1 self-center">
                                    <img src={item.image} alt="Product" className="rounded w-full" />
                                </div>
                                <div className="flex flex-col col-span-3 pt-2">
                                    <span className="text-gray-600 text-md font-semi-bold">{item.title}</span>
                                    <span className="text-gray-400 text-sm inline-block pt-2">{item.category}</span>
                                </div>
                                <div className="col-span-2 pt-3">
                                    <div className="flex items-center space-x-2 text-sm justify-between">
                                        <span className="text-gray-400">{item.cartQuantity} x ${item.price}</span>
                                        <span className="text-indigo-600 font-semibold inline-block">${item.price * item.cartQuantity}</span>
                                    </div>
                                </div>
                            </li>
                        })
                    }

                </ul>
                <div className="px-8 border-b">
                    <div className="flex justify-between py-4 text-gray-600">
                        <span>Subtotal</span>
                        <span className="font-semibold text-indigo-600 ">${cartTotal}</span>
                    </div>
                    <div className="flex justify-between py-4 text-gray-600">
                        <span>Shipping</span>
                        <span className="font-semibold text-indigo-600 ">Free</span>
                    </div>
                </div>
                <div className="font-semibold text-xl px-8 flex justify-between py-8 text-gray-600">
                    <span>Total</span>
                    <span>${cartTotal}</span>
                </div>
            </div>
        </div>
    );
}

export default CheckoutForm;


