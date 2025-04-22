import { TProduct } from '@customTypes/TProduct';

import { Button, Select } from 'flowbite-react';
import React from 'react';
type TCartItemsListProps = TProduct & {
  changeQunatityHandler: (id: number, quantity: number) => void;
  removeItemHandler: (id: number) => void;
};

const CartItem = ({
  id,
  title,
  img,
  price,
  max,
  quantity,
  changeQunatityHandler,
  removeItemHandler,
}: TCartItemsListProps) => {
  console.log('render');
  const renderOption = Array(max)
    .fill(0)
    .map((_, index) => {
      const qunatitiy = index++;
      return (
        <option key={qunatitiy} value={qunatitiy}>
          {qunatitiy}
        </option>
      );
    });

  const chagneQuantity = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const quantity = +event.target.value;
    changeQunatityHandler(id, quantity);
  };

  const removeItem = () => {
    removeItemHandler(id);
  };
  return (
    <div className="flex justify-between items-center pb-2.5 mb-2.5 border-b-1 border-[#d4d4d6]">
      <div className="flex">
        <div className="w-44 h-44">
          <img
            src={img}
            alt={title}
            className="h-full w-full rounderd object-cover bg-[#f2f2f2] block"
          />
        </div>
        <div className="ml-2.5 flex flex-col w-36">
          <h2 className="text-[16px] mb-3 w-full">{title}</h2>
          <h3 className="text-[13px]">{price.toFixed(2)} JOD</h3>
          <Button
            onClick={removeItem}
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
        <Select value={quantity} onChange={chagneQuantity}>
          {renderOption}
        </Select>
      </div>
    </div>
  );
};

export default React.memo(CartItem);
