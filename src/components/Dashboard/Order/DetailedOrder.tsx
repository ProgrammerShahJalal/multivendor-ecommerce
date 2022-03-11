import { useNavigate, useParams } from "react-router-dom"
import { GetOrderDetails } from "../../../Services/OrderApi/GetOrderDetails"
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import DatePicker from '@mui/lab/DatePicker';
import Select from '@mui/material/Select';
import { useState } from "react";
import { UpdateOrder } from "../../../Services/OrderApi/UpdateOrder";
import { DeleteOrder } from "../../../Services/OrderApi/DeleteOrder";
import { toast } from 'react-toastify';

export default function DetailedOrder() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [data, setData] = useState<any>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [date, setDate] = useState<Date | null>(null);
    const [status, setStatus] = useState<string | null>(null);
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    // SINGLE ORDER DETAILS
    GetOrderDetails(id, data, setData, setIsLoading)

    // UPDATE ORDER STATUS
    const updateOrderValue = (details) => {
        if (status !== null || date !== null) {
            UpdateOrder(details._id, status, date, setData, setIsLoading, navigate, details)
        } else {
            toast.info(`Already upto date`, {
                position: 'bottom-left'
            })
            navigate('/dashboard/orders')
        }

    }
    // DELETE ORDER
    const deleteOrderFunc = (id) => {
        DeleteOrder(id, setIsLoading, navigate)
    }

    console.log(status, date);


    return (
        <>

            {
                isLoading ? 'Loading' :
                    data?.map(details => {

                        return <div key={details._id} className="py-4 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
                            <div className="flex justify-start item-start space-y-2 flex-col">
                                <h1 className="text-3xl dark:text-dark lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Order #{details.paymentDetails.createdId}</h1>
                                <p className="text-base dark:text-dark-300 font-medium leading-6 text-zinc-700">{details.paymentDetails.date}</p>
                            </div>
                            <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                                <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                                    <div className="flex flex-col justify-start items-start dark:text-zinc-100 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full drop-shadow-md rounded">
                                        <p className="text-lg md:text-xl dark:text-zinc-700	font-semibold leading-6 xl:leading-5 text-zinc-700	">Customer’s Cart</p>


                                        {details.products.map(product => {
                                            return <div key={product._id} className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                                                <div className="pb-4 md:pb-8 w-full md:w-40">
                                                    <img className="w-full hidden md:block" src={product.image} alt={product.title} />
                                                    <img className="w-full md:hidden" src={product.image} alt={product.title} />
                                                </div>
                                                <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                                                    <div className="w-full flex flex-col justify-start items-start space-y-8">
                                                        <h3 className="text-xl dark:text-zinc-700 xl:text-2xl font-semibold leading-6 text-zinc-700	">{product.title}</h3>
                                                        <div className="flex justify-start items-start flex-col space-y-2">
                                                            <p className="text-sm dark:text-zinc-700	 leading-none text-zinc-700"><span className="dark:text-gray-400 text-zinc-700">Category: </span> {product.category}</p>
                                                            {product.attributes ? product.attributes.map(attr => {
                                                                return <p className="text-sm dark:text-zinc-700	 leading-none text-zinc-700"><span className="dark:text-gray-400 text-gray-300">{attr.name}: </span> {attr.value}</p>
                                                            }) : ''}

                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between space-x-8 items-start w-full">
                                                        <p className="text-base dark:text-zinc-700	 xl:text-lg leading-6">${product.price}
                                                            {/* <span className="text-indigo-600 line-through"> $45.00</span> */}
                                                        </p>
                                                        <p className="text-base dark:text-zinc-700	 xl:text-lg leading-6 text-gray-800">{product.cartQuantity}</p>
                                                        <p className="text-base dark:text-zinc-700	 xl:text-lg font-semibold leading-6 text-gray-800">${product.price * product.cartQuantity}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        })}


                                    </div>
                                    <div className="flex justify-center flex-col md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                                        <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-zinc-50	 dark:bg-zinc-50 space-y-6 drop-shadow-md rounded">
                                            <h3 className="text-xl dark:text-zinc-700	 font-semibold leading-5 dark:text-zinc-700">Summary</h3>
                                            <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                                <div className="flex justify-between w-full">
                                                    <p className="text-base dark:text-zinc-700	 leading-4 dark:text-zinc-700">Subtotal</p>
                                                    <p className="text-base dark:text-zinc-700 leading-4 text-zinc-700">${details.paymentDetails.amount / 100}</p>
                                                </div>
                                                <div className="flex justify-between items-center w-full">
                                                    <p className="text-base dark:text-zinc-700	 leading-4 text-gray-800">Discount
                                                        {/* <span className="bg-gray-200 p-1 text-xs font-medium dark:bg-white dark:text-zinc-700 leading-3 text-gray-800">STUDENT</span> */}
                                                    </p>
                                                    <p className="text-base dark:text-zinc-700 leading-4 text-zinc-700">-$00.00 (0%)</p>
                                                </div>
                                                <div className="flex justify-between items-center w-full">
                                                    <p className="text-base dark:text-zinc-700	 leading-4 text-gray-800">Shipping</p>
                                                    <p className="text-base dark:text-zinc-700 leading-4 text-zinc-700">$0.00</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-between items-center w-full">
                                                <p className="text-base dark:text-zinc-700 font-semibold leading-4 text-gray-800">Total</p>
                                                <p className="text-base dark:text-zinc-700 font-semibold leading-4 text-zinc-700">${details.paymentDetails.amount / 100}</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-zinc-50 dark:bg-zinc-50 space-y-6 drop-shadow-md rounded">
                                            <h3 className="text-xl dark:text-zinc-700 font-semibold leading-5 text-gray-800">Delivery Date</h3>
                                            <div className="flex justify-between items-start w-full">
                                                <div className="flex justify-center items-center space-x-4">
                                                    <div className="w-8 h-8">
                                                        <img className="w-full h-full" alt="logo" src="https://i.ibb.co/L8KSdNQ/image-3.png" />
                                                    </div>
                                                    <div className="flex flex-col justify-start items-center">
                                                        <p className="text-lg leading-6 dark:text-zinc-700	 font-semibold text-gray-800">Delivery Status<br />

                                                        </p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                                                        <InputLabel id="demo-controlled-open-select-label">Status</InputLabel>
                                                        <Select
                                                            labelId="demo-controlled-open-select-label"
                                                            id="demo-controlled-open-select"
                                                            open={open}
                                                            onClose={handleClose}
                                                            onOpen={handleOpen}
                                                            value={details.status || status}
                                                            label="Status"
                                                            onChange={(e) => setStatus(e.target.value)}
                                                        >
                                                            <MenuItem value={'Pending'}>
                                                                <em>Pending</em>
                                                            </MenuItem>
                                                            <MenuItem value={'Packed'}>Packed</MenuItem>
                                                            <MenuItem value={'Shipped'}>Shipped</MenuItem>
                                                            <MenuItem value={'Delivered'}>Delivered</MenuItem>
                                                            <MenuItem value={'Cancel'}>Cancel</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </div>
                                                {/* <p className="text-sm px-4 py-1 font-semibold bg-indigo-500 rounded-full leading-6 dark:text-white text-white"> {details.status}</p> */}
                                            </div>
                                            <div className="w-full delivery-date">
                                                {/* <button className="drop-shadow-md text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 py-5 w-96 md:w-full  text-base font-medium leading-4 text-white">View Carrier Details</button> */}
                                                <LocalizationProvider sx={{ width: 100 }} dateAdapter={AdapterDateFns}>
                                                    <DatePicker

                                                        label="Delivery Date"
                                                        value={details.deliveryDate || date}
                                                        minDate={new Date()}
                                                        onChange={(newValue) => {
                                                            setDate(details.deliveryDate || newValue);
                                                        }}
                                                        renderInput={(params) => <TextField {...params} />}
                                                    />
                                                </LocalizationProvider>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-zinc-50 drop-shadow-md rounded dark:bg-zinc-50 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
                                    <h3 className="text-xl dark:text-zinc-700	 font-semibold leading-5 text-gray-800">Customer</h3>
                                    <div className="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
                                        <div className="flex flex-col justify-start items-start flex-shrink-0">
                                            <div className="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                                                <img src="https://i.ibb.co/5TSg7f6/Rectangle-18.png" alt="avatar" />
                                                <div className="flex justify-start items-start flex-col space-y-2">
                                                    <p className="text-base dark:text-zinc-700	 font-semibold leading-4 text-left text-gray-800">{details.billing.name}</p>
                                                    <p className="text-sm dark:text-zinc-700 leading-5 text-zinc-700">10 Previous Orders</p>
                                                </div>
                                            </div>

                                            <div className="flex justify-center text-gray-800 dark:text-zinc-700	 md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                                                <i className="fa-solid fa-envelope"></i>
                                                <p className="cursor-pointer text-sm leading-5 ">{details.paymentDetails.email}</p>
                                            </div>
                                            <div className="flex justify-center text-gray-800 dark:text-zinc-700	 md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                                                <i className="fa-solid fa-phone"></i>
                                                <p className="cursor-pointer text-sm leading-5 ">{details.billing.phone}</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
                                            <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
                                                <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                                                    <p className="text-base dark:text-zinc-700	 font-semibold leading-4 text-center md:text-left text-gray-800">Shipping Address</p>
                                                    <p className="w-48 lg:w-full dark:text-zinc-700 xl:w-48 text-center md:text-left text-sm leading-5 text-zinc-700">{`${details.billing.line1}, ${details.billing.city} ${details.billing.country} ${details.billing.postal_code}`}</p>
                                                </div>
                                                <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4">
                                                    <p className="text-base dark:text-zinc-700	 font-semibold leading-4 text-center md:text-left text-gray-800">Billing Address</p>
                                                    <p className="w-48 lg:w-full dark:text-zinc-700 xl:w-48 text-center md:text-left text-sm leading-5 text-zinc-700">{`${details.billing.line1}, ${details.billing.city} ${details.billing.country} ${details.billing.postal_code}`}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex w-full justify-center items-center md:justify-start md:items-start">
                                                    <button onClick={() => deleteOrderFunc(details._id)} className="mt-6 md:mt-0	 py-5 drop-shadow-md text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 w-96 2xl:w-full text-base font-medium leading-4 text-gray-800">Delete</button>
                                                </div>
                                                <div className="flex w-full justify-center items-center md:justify-start md:items-start">
                                                    <button onClick={() => updateOrderValue(details)} className="mt-6 py-5 drop-shadow-md text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-96 2xl:w-full text-base font-medium leading-4 text-gray-800">Save</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
            }
        </>
    )
}