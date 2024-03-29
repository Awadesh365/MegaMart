import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { FunnelIcon } from '@heroicons/react/20/solid'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button
} from "@material-tailwind/react";
import { data } from "../../data"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToWishList } from '../../store/ProductSlice'
const MensCard = () => {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    const [filteredMens, setFilteredMens] = useState(data)
    const navigate = useNavigate()
    const dispatch = useDispatch();
    useEffect(() => {
        const mens = data?.filter((item) => item?.category === "mens")
        setFilteredMens(mens)
    }, [])
    const handleFilter = (subcategory) => {
        if (subcategory === "all") {
            setFilteredMens(data.filter((item) => item?.category === "mens"))
        }
        else {
            const mens = data.filter((item) => item?.subcategory === subcategory && item?.category === "mens")
            setFilteredMens(mens)
        }
    }
    const addWishlist = (data) => {
        dispatch(addToWishList(data))
        navigate("/wishlist")
    }
    return (
        <div className="bg-white px-2">
            <div>
                {/* Mobile filter dialog */}
                <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-[42] lg:hidden" onClose={setMobileFiltersOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-40 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                                    <div className="flex items-center justify-between px-4">
                                        <button
                                            type="button"
                                            className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                            onClick={() => setMobileFiltersOpen(false)}
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>

                                    {/* Filters */}
                                    <div className='md:hidden flex flex-col gap-4 justify-center items-center cursor-pointer'>
                                        <h3 className='font-bold text-2xl'>Filter By Brands</h3>
                                        <hr className='bg-gray-700' />
                                        <div onClick={() => handleFilter("all")}>
                                            <h4 className='font-medium text-xl'>
                                                All
                                            </h4>
                                        </div>
                                        <div onClick={() => handleFilter("shirts")}>
                                            <h4 className='font-medium text-xl'>
                                                Shirts
                                            </h4>
                                        </div>
                                        <div onClick={() => handleFilter("shirwani")}>
                                            <h4 className='font-medium text-xl'>
                                                Shirwani
                                            </h4>
                                        </div>
                                        <div onClick={() => handleFilter("shoes")}>
                                            <h4 className='font-medium text-xl'>
                                                Shoes
                                            </h4>
                                        </div>
                                        <div onClick={() => handleFilter("jeans")}>
                                            <h4 className='font-medium text-xl'>
                                                Jeans
                                            </h4>
                                        </div>
                                        <div onClick={() => handleFilter("jackets")}>
                                            <h4 className='font-medium text-xl'>
                                                Jackets
                                            </h4>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>

                <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Mobiles</h1>
                        <div className="flex items-center ">
                            <button
                                type="button"
                                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                                onClick={() => setMobileFiltersOpen(true)}
                            >

                                <FunnelIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                            </button>
                        </div>
                    </div>

                    <section aria-labelledby="products-heading" className="pb-24 pt-6">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                            {/* Filters */}
                            <div className='hidden  md:flex flex-col gap-4 justify-start cursor-pointer'>
                                <Typography variant='h3' className='font-bold text-2xl'>Filter By Categories</Typography>
                                <hr className='bg-gray-700' />
                                <div onClick={() => handleFilter("all")}>
                                    <h4 className='font-medium text-xl'>
                                        All
                                    </h4>
                                </div>
                                <div onClick={() => handleFilter("shirts")}>
                                    <h4 className='font-medium text-xl'>
                                        Shirts
                                    </h4>
                                </div>
                                <div onClick={() => handleFilter("shirwani")}>
                                    <h4 className='font-medium text-xl'>
                                        Shirwani
                                    </h4>
                                </div>
                                <div onClick={() => handleFilter("shoes")}>
                                    <h4 className='font-medium text-xl'>
                                        Shoes
                                    </h4>
                                </div>
                                <div onClick={() => handleFilter("jeans")}>
                                    <h4 className='font-medium text-xl'>
                                        Jeans
                                    </h4>
                                </div>
                                <div onClick={() => handleFilter("jacket")}>
                                    <h4 className='font-medium text-xl'>
                                        Jackets
                                    </h4>
                                </div>
                            </div>

                            {/* Product grid */}
                            <div className="lg:col-span-3 flex flex-row flex-wrap justify-center gap-4">

                                {
                                    filteredMens.map((item, id) =>
                                        <div key={id}>

                                            <Card className="relative w-80 md:w-64 mx-auto hover:scale-105 cursor-pointer transition-all duration-300 delay-200 ease-in-out" >
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
                                                })} className='z-[41] absolute right-4 top-1 flex flex-col items-center'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                                    </svg>
                                                </div>
                                                <div className='absolute left-1 z-[41] top-6 bg-red-800 px-1 rotate-45 text-white'>
                                                    <Typography>{item?.discount}% off</Typography>
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
                                                            {item?.title.slice(0, 15)}..
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
                                                        {item?.title.slice(0, 50)}..
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
                    </section>
                </main>
            </div>
        </div>
    )
}
export default MensCard
