import {
    Card,
    CardBody,
    Typography,
    Button
} from "@material-tailwind/react";
import ArrowLeft from "../arrows/ArrowLeft"
import ArrowRight from "../arrows/ArrowRight"
import { useEffect, useState } from "react"
import { data } from "../../data"
import { useNavigate } from "react-router-dom"
import { addToWishList } from "../../store/ProductSlice";
import { useDispatch } from 'react-redux'
const MobilesSlide = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [mobiles, setMobiles] = useState(data)
    useEffect(() => {
        const fetchMobiles = () => {
            const filteredMobiles = data.filter((mob) => mob?.category === "mobiles")
            setMobiles(filteredMobiles)
        }
        fetchMobiles()
    }, [])

    const scrollLeft = () => {
        let slider = document.getElementById('slider' + 4);
        slider.scrollLeft = slider.scrollLeft - 500
    }
    const scrollRight = () => {
        let slider = document.getElementById('slider' + 4);
        slider.scrollLeft = slider.scrollLeft + 500
    }
    const addWishlist = (data) => {
        dispatch(addToWishList(data))
        navigate("/wishlist")
    }
    return (
        <div className="flex flex-col justify-center py-2  mx-auto w-full">
            <div>
                <Typography className="text-center text-xl md:text-2xl font-Poppins md:text-start py-2 font-bold md:ml-16">Best Of Mobiles</Typography>
            </div>
            <div className="flex flex-row justify-center relative">
                <div onClick={scrollLeft} className="hidden md:inline-flex absolute left-1 z-[40] top-40 bg-gray-500 p-3 rounded-full cursor-pointer">
                    <ArrowLeft />
                </div>
                <div id={"slider" + 4} className="flex flex-row overflow-x-scroll relative gap-4 py-2 px-4">
                    {mobiles?.map((item, id) =>
                        <div key={id} className="flex flex-row">
                            <Card className="relative w-48 md:w-64 mx-auto hover:scale-105 cursor-pointer transition-all duration-300 delay-200 ease-in-out" >
                                <Typography className=" absolute text-xs top-1 left-3 z-[40] bg-red-700 px-2  text-white">{item?.subcategory}</Typography>
                                <div onClick={() => addWishlist({
                                    id: item?.id,
                                    imgSrc: item?.imgSrc,
                                    name: item?.name,
                                    title: item?.title,
                                    category: item?.category,
                                    subcategory: item?.subcategory,
                                    price: item?.price,
                                    rating: item?.rating,
                                    msg: ""
                                })} className='z-[41] absolute right-4 top-0 flex flex-col items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                </div>
                                <CardBody>
                                    <div className="mb-2 flex flex-col items-center ">
                                        <img
                                            src={item?.imgSrc}
                                            alt="card-image"
                                            className="md:h-[200px] h-[100px] w-[100px] md:w-[300px] object-contain"
                                        />
                                        <div className="flex flex-col justify-start md:justify-center items-center py-2">
                                            <Typography color="blue-gray" className="text-xs   md:text-sm md:font-medium font-Poppins">
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
                <div onClick={scrollRight} className="hidden md:inline-flex absolute right-1 z-[40] top-40 bg-gray-500 p-3 rounded-full cursor-pointer">
                    <ArrowRight />
                </div>
            </div>
        </div>
    )
}
export default MobilesSlide