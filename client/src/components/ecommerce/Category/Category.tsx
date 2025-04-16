import TCategory from '@customTypes/TCategory';
import { Link } from 'react-router-dom';

const Category = ({ title, img, prefix }: TCategory) => {
  return (
    <div className="w-44 h-44">
      <Link to={`products/${prefix}`}>
        <div className="rounded-full bg-[#f2f2f2] mb-2">
          <img src={img} alt={title} className=" rounded-full" />
        </div>
        <h4 className="text-center text-[14px] mt-2.5">{title}</h4>
      </Link>
    </div>
  );
};

export default Category;
