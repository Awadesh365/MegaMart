import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  increaseQty,
  decreaseQty,
  removeItem,
  resetCart,
} from "../store/ProductSlice";
import axios from "axios";

const CartPage = () => {
  const dispatch = useDispatch();
  const item = useSelector((state) => state?.product?.products);
  const [totalAmt, setTotalAmt] = useState("");
  useEffect(() => {
    const calTotalAmt = () => {
      let price = 0;
      item.map((product) => {
        price += product.price * product.quantity;
        return price;
      }, []);
      setTotalAmt(price);
    };
    calTotalAmt();
  }, [item]);

  const handleRemove = (payload) => {
    dispatch(removeItem(payload));
  };

  const orderNow = async (amount) => {
    const {
      data: { key },
    } = await axios.get("http://localhost:8000/api/payment/getkey");
    const {
      data: { order },
    } = await axios.post("http://localhost:8000/api/payment/checkout", {
      amount,
    });

    /**
     *
     * TODO: For Future Stripe integration
     */
    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Ecommerce",
      description: "Stripe",
      image:
        "https://lh3.googleusercontent.com/a/ACg8ocJFEy5iM5n0P_pk8b4knn7k6rqoppxnXc2HfY4FI0iv=s360-c-no",
      order_id: order.id,
      callback_url: "http://localhost:8000/api/payment/paymentverification",
      prefill: {
        name: "MegaMart",
        email: "36awadesh@gmail.com",
        contact: "(+91) 9058261129",
      },
      notes: {
        address: "MegaMart Pvt Ltd.",
      },
      theme: {
        color: "#121212",
      },
    };
    // const stripe = new window.Razorpay(options);
    // razor.open();
  };
  return (
    <div className="w-full bg-gray-100 p-4 min-h-screen font-Poppins">
      {item.length > 0 ? (
        <div className="container mx-auto  grid grid-cols-5 gap-8 align-middle">
          <div className="w-full bg-white px-4 col-span-5 xl:col-span-4">
            <div className="font-titleFont hidden xl:flex items-center justify-between border-b-[1px] border-b-gray-400 py-3">
              <h1 className="text-3xl font-semibold">Shopping Cart</h1>
              <h3 className="text-xl font-semibold">Subtotal</h3>
            </div>
            <div>
              {item.map((item) => (
                <div
                  key={item.id}
                  className="w-full border-b-[1px] border-b-gray-300 p-4 md:p-0 md:py-4 flex items-center gap-6"
                >
                  <div className="w-full flex flex-col md:flex-row items-center gap-6">
                    <div className="w-full md:w-2/5 xl:w-1/5">
                      <img
                        className="w-full h-44 object-contain"
                        src={item?.imgSrc}
                        alt="productImg"
                      />
                    </div>
                    <div className="w-full flex flex-col gap-2 xl:gap-1">
                      <h2 className="font-semibold text-lg">{item?.title}</h2>
                      <p className="text-base">
                        Unit Price:
                        <span className="font-semibold"> ₹{item.price}</span>
                      </p>
                      <div className="bg-[#F0F2F2] flex justify-center items-center gap-2 w-36 py-1 text-center drop-shadow-lg rounded-md">
                        <p className="text-base font-normal">Qty:</p>
                        <p
                          onClick={() => {
                            dispatch(decreaseQty(item.id));
                          }}
                          className="cursor-pointer bg-gray-200 px-2 rounded-sm hover:bg-gray-400 font-semibold duration-300"
                        >
                          -
                        </p>
                        <p className="font-titleFont text-base font-semibold text-amazon_blue">
                          {item.quantity}
                        </p>
                        <p
                          onClick={() => dispatch(increaseQty(item.id))}
                          className="cursor-pointer bg-gray-200 px-2 rounded-sm hover:bg-gray-400 font-semibold duration-300"
                        >
                          +
                        </p>
                      </div>
                      <button
                        onClick={() => handleRemove(item?.id)}
                        className="bg-red-500 w-36 py-1 rounded-lg text-white mt-2 hover:bg-red-700 active:bg-red-900 duration-300"
                      >
                        Delete Item
                      </button>
                    </div>

                    <div className="w-full md:w-24">
                      <p className="text-lg xl:w-24 font-titleFont font-semibold">
                        ₹{item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div onClick={() => dispatch(resetCart())} className="w-full py-4">
              <button className="px-10 py-2 bg-red-500 hover:bg-red-600 active:bg-red-500 text-white rounded-lg font-titleFont font-semibold text-lg tracking-wide">
                Clear Cart
              </button>
            </div>
          </div>
          <div className="col-span-5 md:col-span-3 lg:col-span-2 xl:col-span-1 bg-white h-52 flex items-center p-4">
            <div>
              <p className="flex gap-2 items-start text-sm">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="bg-white text-green-500 rounded-full"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                Your order qualifies for FREE Shipping Choose this option at
                checkout. See details....
              </p>
              <div>
                <p className="font-semibold px-6 py-1 flex items-center justify-between">
                  Total: <span className="text-lg font-bold">₹{totalAmt}</span>
                </p>
              </div>
              <button
                onClick={() => orderNow(totalAmt)}
                className="w-full  font-medium text-base text-white  bg-green-700 duration-200 py-1.5 rounded-md mt-3"
              >
                Proceed to Buy
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center gap-4 py-10">
          <div className="w-96 p-4 bg-white flex  flex-col items-center rounded-md shadow-lg">
            <h1 className="font-titleFont text-xl font-bold">
              Your Cart feels lonely.
            </h1>
            <p className="text-sm text-center">
              Your Shopping cart lives to serve. Give it purpose - fill it with
              books, electronics, videos, etc. and make it happy.
            </p>
            <Link to="/">
              <button className="mt-6 rounded-md cursor-pointer text-white bg-green-700 px-8 py-2 font-titleFont font-semibold text-lg">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default CartPage;
