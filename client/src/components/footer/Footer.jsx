const Footer = () => {
  return (
    <div className="flex flex-col bg-black/90  mx-auto justify-center py-4">
      <div className="flex  flex-row flex-wrap gap-8 px-4 w-[95%] md:w-full mx-auto md:px-0 md:gap-16 justify-center text-white py-2 font-Poppins">
        <div className="flex flex-col gap-2">
          <div className="hover:border-b-2 hover:border-gray-300 cursor-pointer">
            <p className="text-xs md:text-lg font-bold">Watches</p>
          </div>
          <div className="flex flex-col text-xs md:text-lg justify-center items-start gap-1 text-white">
            <p>MVMT</p>
            <p>VAN HEUSEN</p>
            <p>MICHAEl KLIEN</p>
            <p>WROGN</p>
            <p>Curren</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="hover:border-b-2 hover:border-gray-300 cursor-pointer">
            <p className=" font-bold text-xs md:text-lg">Laptops</p>
          </div>
          <div className="flex flex-col text-xs md:text-lg justify-center items-start  gap-1 text-white">
            <p>Acer</p>
            <p>MSI</p>
            <p>Chuwi</p>
            <p>Infinix</p>
            <p>Asus</p>
            <p>Lenovo</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="hover:border-b-2 hover:border-gray-300 cursor-pointer">
            <p className=" font-bold text-xs md:text-lg">Mobiles</p>
          </div>
          <div className="flex flex-col text-xs md:text-lg justify-center items-start gap-1 text-white">
            <p>Samsung</p>
            <p>Redmi</p>
            <p>Apple</p>
            <p>Vivo</p>
            <p>OnePlus</p>
            <p>Poco</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="hover:border-b-2 hover:border-gray-300 cursor-pointer">
            <p className="text-xs md:text-lg font-bold">Men&apos;s</p>
          </div>
          <div className="flex flex-col text-xs md:text-lg  justify-center items-start gap-1 text-white">
            <p>Shirts</p>
            <p>Jeans</p>
            <p>Jackets</p>
            <p>Shirwanis</p>
            <p>Shoes</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="hover:border-b-2 hover:border-gray-300 cursor-pointer">
            <p className="text-xs md:text-lg  font-bold">Women&apos;s</p>
          </div>
          <div className="flex flex-col text-xs md:text-lg   justify-start items-start gap-1 text-white">
            <p> shoes</p>
            <p>saree</p>
            <p>shorts</p>
            <p>blouses</p>
            <p>plazzos</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="hover:border-b-2 hover:border-gray-300 cursor-pointer">
            <p className="text-xs md:text-lg font-bold">Groceries</p>
          </div>
          <div className="flex flex-col text-xs md:text-lg justify-center items-start gap-1 text-white">
            <p>Powder</p>
            <p>Chocolate</p>
            <p>Dry Fruits</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center px-4 ">
        <div>
          <ul className="text-gray-300 text-sm gap-2 md:gap-4 py-2 mt-4 flex">
            <li className="font-normal text-[12px] hover:underline cursor-pointer text-[#DDD] leading-3">
              Conditions of Use
            </li>
            <li className="font-normal text-[12px] hover:underline cursor-pointer text-[#DDD] leading-3">
              Privacy Notice
            </li>
            <li className="font-normal text-[12px] hover:underline cursor-pointer text-[#DDD] leading-3">
              Your Ads Privacy Choices
            </li>
          </ul>
        </div>
        <div>
          <p className="font-normal text-[12px] text-[#DDD] leading-3">
            © MegaMart Pvt Ltd.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
