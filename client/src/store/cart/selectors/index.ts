import { RootState } from '@store/Store';
import { createSelector } from '@reduxjs/toolkit';
const getCartTotalQuantitySelector = createSelector(
  (state: RootState) => state.cart.items,
  (items) => {
    const totalQuantity = Object.values(items).reduce(
      (acc, currValue) => acc + currValue,
      0
    );
    return totalQuantity;
  }
);

export { getCartTotalQuantitySelector };
