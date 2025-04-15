import { Button } from 'flowbite-react';

const Product = () => {
  return (
    <div className="w-32 flex flex-col justify-between">
      <div className="w-full h-44 bg-[#f2f2f2] block">
        <img
          src="https://eg.hm.com/assets/styles/HNM/14482498/6103a8463876770c30cdba3535b7be1f333315fe/2/image-thumb__3464789__product_listing/cb91f8f128ac2125e0ec3a008a2e8d2497d15434.jpg"
          alt=""
        />
      </div>
      <h2 className="text-[18px] mt-2.5 mb-3 w-full truncate">Title</h2>
      <h3 className="text-[12px]">10 EGP</h3>
      <Button style={{ color: 'white' }}>Add to cart</Button>
    </div>
  );
};

export default Product;
