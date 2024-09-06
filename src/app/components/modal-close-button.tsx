import React from 'react';

import Image from 'next/image';

export interface ModalCloseButtonProps {
  onClose: () => void;
}

export const ModalCloseButton: React.FC<ModalCloseButtonProps> = ({
  onClose,
}) => {
  return (
    <button type="button" onClick={onClose} className="">
      <Image
        width={24}
        height={24}
        src={'/icons/x-close.svg'}
        alt="promotion icon"
        className="fill-gray-700 stroke-slate-700 absolute top-5 right-5 flex content-center items-center p-0.5 border-none outline-0"
      />
    </button>
  );
};

export default ModalCloseButton;
