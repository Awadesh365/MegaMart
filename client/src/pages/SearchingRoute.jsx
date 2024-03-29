import { useSearchParams } from "react-router-dom";
import { data } from '../data'
import { useEffect, useState } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button
} from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom'
const SearchingRoute = () => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query')
    console.log(query);
    const [results, setResults] = useState([])
    useEffect(() => {
        const fetchProducts = () => {
            const filter = data.filter((item) => item?.subcategory === query || item?.category === query)
            setResults(filter)
        }
        fetchProducts()
    }, [query])

    return (
        <div className="flex flex-col max-w-7xl mx-auto font-Poppins">
            <h2 className="text-xl text-center">Searched Products</h2>
            {
                results.length === 0 && <div className="flex justify-center items-center h-screen">
                    <p className="font-bold text-center">No such Products</p>
                </div>
            }
            <div className="flex flex-col md:flex-row md:flex-wrap mx-auto justify-center">

                {
                    results.map((item, id) =>
                        <div key={id} className="flex flex-col  justify-start items-center gap-2 p-2">
                            <Card className="relative w-80 md:w-64 mx-auto hover:scale-105 cursor-pointer transition-all duration-300 delay-200 ease-in-out" >
                                <div className='z-[41] absolute right-4 top-1 flex flex-col items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                </div>
                                <CardHeader shadow={false} floated={false} className="h-24">
                                    <img
                                        src={item?.imgSrc}
                                        alt="card-image"
                                        className="h-full w-full object-contain"
                                    />
                                </CardHeader>
                                <CardBody>
                                    <div className="mb-2 flex items-center justify-between">
                                        <Typography color="blue-gray" className="font-medium">
                                            {item?.title?.slice(0, 15)}..
                                        </Typography>
                                        <Typography color="blue-gray" className="font-medium">
                                            ₹{item?.price}
                                        </Typography>
                                    </div>
                                    <Typography
                                        variant="small"
                                        color="gray"
                                        className="font-normal opacity-75"
                                    >
                                        {item?.title?.slice(0, 20)}..
                                    </Typography>
                                    <div className='flex flex-row justify-between items-center   mt-2 gap-2 text-white '>
                                        <div className='flex flex-row items-center gap-2 bg-green-700 px-2 py-1'>
                                            <Typography variant='lead'>{item?.rating}</Typography>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                            </svg>
                                        </div>
                                        <div className='text-gray-500'>
                                            <Typography variant='lead'>10 Reviews</Typography>
                                        </div>
                                    </div>
                                </CardBody>
                                <CardFooter className="pt-0">
                                    <Button
                                        ripple={false}
                                        fullWidth={true}
                                        className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                                        onClick={() => navigate(`/${item?.id}`)}
                                    >
                                        View Details
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
export default SearchingRoute