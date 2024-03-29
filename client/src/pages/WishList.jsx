import { useSelector, useDispatch } from 'react-redux'
import {
    Card,
    CardBody,
    Typography,
    Button
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom"
import { RxCross2 } from "react-icons/rx";
import { removeFromWishList } from '../store/ProductSlice'
const WishList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { wishList } = useSelector((state) => state?.product)
    return (
        <div className='flex flex-col items-center'>
            <h2 className='font-bold text-xl md:text-2xl py-2'>WishList</h2>

            <div className="flex flex-col  justify-center items-center md:px-24 mx-auto h-full md:h-screen">

                <hr className='bg-gray-700' />
                <div className='flex flex-col md:flex-row md:flex-wrap md:justify-center md:items-center gap-2 md:gap-4'>
                    {
                        wishList.length === 0 && <div className="mx-auto p-4 bg-white flex  flex-col items-center justify-center rounded-md shadow-lg">
                            <h1 className="font-titleFont text-xl font-bold">
                                Your WishList is Empty
                            </h1>
                            <Link to="/">
                                <button className="mt-6 rounded-md cursor-pointer text-white bg-green-700 px-8 py-2 font-titleFont font-semibold text-lg">
                                    Continue Shopping
                                </button>
                            </Link>
                        </div>
                    }
                    {wishList?.map((item, id) =>
                        <div key={id} className="flex flex-row md:flex-wrap">
                            <Card className="relative w-48 md:w-64 mx-auto hover:scale-105 cursor-pointer transition-all duration-300 delay-200 ease-in-out" >
                                <Typography className="absolute text-xs top-1 left-3 z-[40] bg-red-700 px-2  text-white">{item?.subcategory}</Typography>
                                <div onClick={() => dispatch(removeFromWishList(item?.id))} className='z-[41] absolute right-4 top-0 flex flex-col items-center'>
                                    <RxCross2 />
                                </div>
                                <CardBody>
                                    <div className="mb-2 flex flex-col items-center ">
                                        <img
                                            src={item?.imgSrc}
                                            alt="card-image"
                                            className="md:h-[200px] h-[100px] w-[100px] md:w-[300px] object-contain"
                                        />
                                        <div className="py-2 flex flex-col justify-start md:justify-center items-center">
                                            <Typography color="blue-gray" className="text-xs md:text-sm md:font-medium font-Poppins">
                                                {item?.name}
                                            </Typography>
                                            <Typography color="blue-gray" className="font-bold font-Poppins">
                                                ₹{item?.price}
                                            </Typography>
                                        </div>

                                    </div>
                                    <Button
                                        ripple={false}
                                        fullWidth={true}
                                        className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 font-Poppins"
                                        onClick={() => navigate(`/${item?.id}`)}
                                    >
                                        Check Out
                                    </Button>
                                </CardBody>
                            </Card>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}
export default WishList