import { Carousel } from "@material-tailwind/react";

const Banner = () => {
  return (
    <Carousel
      transition={{ duration: 2 }}
      autoplay
      loop
      className="relative mx-auto md:w-full z-[40]"
    >
      <div>
        <img
          src="/assets/bannerImgOne.jpg"
          alt="error"
          className="object-contain md:object-fill md:h-[300px] md:w-full"
        />
      </div>
      <div>
        <img
          src="/assets/bannerImgTwo.jpg"
          alt="error"
          className="object-contain md:object-fill md:h-[300px] md:w-full"
        />
      </div>
      <div>
        <img
          src="/assets/bannerImgThree.jpg"
          alt="error"
          className="object-contain md:object-fill md:h-[300px] md:w-full"
        />
      </div>
      <div className="h-[20%]">
        <img
          src="/assets/bannerImgFour.jpg"
          alt="error"
          className="object-contain md:object-fill md:h-[300px] md:w-full"
        />
      </div>
      <div className="h-[20%]">
        <img
          src="/assets/bannerImgFive.jpg"
          alt="error"
          className="object-contain md:object-fill md:h-[300px] md:w-full"
        />
      </div>
    </Carousel>
  );
};
export default Banner;
