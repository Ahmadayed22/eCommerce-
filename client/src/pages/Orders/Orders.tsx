import { Heading } from '@components/common';
import { Loading } from '@components/feedbaks';
import { resetOrderStatus, thunkGetOrders } from '@store/orders/ordersSlice';
import { useAppDispatch, useAppSelector } from '@store/reduxHooks';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from 'flowbite-react';
import { useEffect } from 'react';

const Orders = () => {
  const { loading, error, orderList } = useAppSelector((state) => state.orders);
  const dispatch = useAppDispatch();
  const viewDetailsHandler = (id: number) => {
    const productDetails = orderList.find((order) => order.id === id);
    console.log(productDetails);
  };
  useEffect(() => {
    dispatch(thunkGetOrders());

    return () => {
      dispatch(resetOrderStatus());
    };
  }, [dispatch]);
  return (
    <>
      <Heading title="My Order" />
      <Loading loading={loading} error={error} type="cart">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeadCell>Order Number</TableHeadCell>
              <TableHeadCell>Items</TableHeadCell>
              <TableHeadCell>Total Price</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderList.map((el) => (
              <TableRow key={el.id}>
                <TableCell>#{el.id}</TableCell>
                <TableCell>
                  {el.items.length} item(s)
                  {' / '}
                  <span
                    onClick={() => viewDetailsHandler(el.id)}
                    className="cursor-pointer decoration-1"
                  >
                    Product Details
                  </span>
                </TableCell>
                <TableCell>{el.subtotal.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Loading>
    </>
  );
};

export default Orders;
