import { Button, Select } from 'flowbite-react';

const CartItem = () => {
  return (
    <div className="flex justify-between items-center pb-2.5 mb-2.5 border-b-1 border-[#d4d4d6]">
      <div className="flex">
        <div>
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
            alt="title"
            className="h-44 bg-[#f2f2f2] block"
          />
        </div>
        <div className="ml-2.5 flex flex-col w-36">
          <h2 className="text-[16px] mb-3 w-full">test</h2>
          <h3 className="text-[13px]">30 JOD</h3>
          <Button
            color="dark"
            outline
            className=" mt-auto cursor-pointer text-white"
          >
            Remove
          </Button>
        </div>
      </div>

      <div>
        <span className="d-block mb-1">Quantity</span>
        <Select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </Select>
      </div>
    </div>
  );
};

export default CartItem;
