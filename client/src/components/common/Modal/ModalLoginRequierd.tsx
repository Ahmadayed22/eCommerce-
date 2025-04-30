import { Modal, ModalBody, ModalHeader } from 'flowbite-react';
import React, { Dispatch, SetStateAction } from 'react';

import { HiOutlineExclamationCircle } from 'react-icons/hi';

type ModalComponentProps = {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
};
const ModalLoginRequierd = ({
  openModal,
  setOpenModal,
}: ModalComponentProps) => {
  return (
    <>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <ModalHeader />
        <ModalBody>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Login Required
            </h3>
            <div className="flex justify-center gap-4"></div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default React.memo(ModalLoginRequierd);
