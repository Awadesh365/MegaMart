import { categoryData } from "../../data";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row items-start justify-center w-full mx-autos overflow-hidden overflow-x-scroll  gap-2 md:gap-8 py-4 md:py-8 shadow-md px-4 mb-2">
      {categoryData.map((item, id) => (
        <div
          onClick={() => navigate(`${item?.category}`)}
          key={id}
          className="flex flex-col items-center flex-wrap md:flex-nowrap gap-1"
        >
          <img
            src={item?.src}
            alt="error"
            className="object-contain bg-transparent h-[50px] w-[50px] md:h-[100px] md:w-[100px] "
          />
          <p className="font-Mont font-semibold">{item?.title}</p>
        </div>
      ))}
    </div>
  );
};
export default Categories;
