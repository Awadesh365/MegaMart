import { useEffect, useState } from "react"
import axios from 'axios'
import { Card, Typography, Button, Chip } from "@material-tailwind/react";
import { Link } from 'react-router-dom'



const Orders = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/payment/getOrders')
                setOrders(response?.data)
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchOrders()
    }, [])
    const formatTime = (time) => {
        const options = { year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", seconds: "numeric" }
        return new Date(time).toLocaleString("en-US", options)
    }
    return (
        <div className="flex flex-col justify-center items-center md:justify-start font-Poppins">
            <div>
                <h2 className="text-xl md:text-2xl font-bold py-2">Orders</h2>
            </div>
            {
                orders.length === 0 && <div className="flex h-screen flex-col items-center py-8 justify-center">
                    <Typography>No Orders Yet!</Typography>
                    <Link to="/">
                        <Button>Home</Button>
                    </Link>
                </div>
            }
            {
                orders.length > 0 && <Card className=" w-full md:w-[50%] mx-auto overflow-scroll h-screen">
                    <table className="w-full min-w-3xl table-auto text-left">
                        <thead>
                            <tr>
                                <th

                                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                                >
                                    <Typography
                                        variant="h5"
                                        color="blue-gray"
                                        className="font-bold leading-none opacity-70"
                                    >
                                        Order_id
                                    </Typography>
                                </th>

                                <th

                                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                                >
                                    <Typography
                                        variant="h5"
                                        color="blue-gray"
                                        className="font-bold leading-none opacity-70"
                                    >
                                        Payment_id
                                    </Typography>
                                </th>
                                <th

                                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                                >
                                    <Typography
                                        variant="h5"
                                        color="blue-gray"
                                        className="font-bold leading-none opacity-70"
                                    >
                                        Delivery Status
                                    </Typography>
                                </th>

                                <th

                                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                                >
                                    <Typography
                                        variant="h5"
                                        color="blue-gray"
                                        className="font-bold leading-none opacity-70"
                                    >
                                        Date
                                    </Typography>
                                </th>

                                <th

                                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                                >
                                    <Typography
                                        variant="h5"
                                        color="blue-gray"
                                        className="font-bold leading-none opacity-70"
                                    >
                                        Payment
                                    </Typography>
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            {orders.map((item, _id) => {
                                const isLast = _id === orders.length - 1;
                                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
                                return (
                                    <tr key={name}>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {item?.razorpay_order_id}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {item?.razorpay_payment_id}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                Shipped
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {formatTime(item?.createdAt)}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal flex flex-row items-center"
                                            >
                                                <Chip size="sm"
                                                    variant="ghost"
                                                    value="Success"
                                                    color={
                                                        "green"
                                                    } />
                                            </Typography>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </Card>
            }

        </div>

    )
}
export default Orders