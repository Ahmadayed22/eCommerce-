import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Spinner,
} from 'flowbite-react';
import React, { Dispatch, SetStateAction } from 'react';
type TModelProps = {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  totalPrice: number;
  handlePlaceOrderConfirm: () => void;
  error: string | null;
  loading: boolean;
  setIsError: Dispatch<SetStateAction<string | null>>;
};

const ModalPlacingOrder = ({
  openModal,
  setOpenModal,
  totalPrice,
  handlePlaceOrderConfirm,
  error,
  loading,
  setIsError,
}: TModelProps) => {
  const handleConfirmButton = (): void => {
    handlePlaceOrderConfirm();
  };

  return (
    <div>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <ModalHeader>Placing Order</ModalHeader>
        <ModalBody>
          <div className="space-y-6 p-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Are you sure you want to place oreder with Subtotal :{totalPrice}
              {!loading && error && <p className="mt-2.5">{error}</p>}
            </p>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button className="cursor-pointer" onClick={handleConfirmButton}>
            {loading ? (
              <>
                <Spinner
                  color="info"
                  aria-label="Alternate  Spinner button  "
                  size="sm"
                />
                <span className="pl-3">Loading...</span>
              </>
            ) : (
              'Confirm'
            )}
          </Button>
          <Button
            className="cursor-pointer"
            color="gray"
            onClick={() => {
              setOpenModal(false);
              setIsError(null);
            }}
          >
            Decline
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default React.memo(ModalPlacingOrder);
