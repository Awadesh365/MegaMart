import Banner from "../components/banner/Banner";
import Brand from "../components/brands/Brand";
import Categories from "../components/category/Categories";
import Newsletter from "../components/newsLetter/NewsLetter";
import Sliders from "../components/slider/Sliders";

const Home = () => {
  return (
    <div className="flex px-1 md:px-4 py-4 flex-col">
      <Categories />
      <Banner />
      <Sliders />
      <Brand />
      <Newsletter />
    </div>
  );
};
export default Home;
