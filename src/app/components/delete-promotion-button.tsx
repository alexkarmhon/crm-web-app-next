import React, { ButtonHTMLAttributes, ReactNode } from 'react';

export interface DeletePromotionButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  children?: ReactNode;
}

export const DeletePromotionButton: React.FC<DeletePromotionButtonProps> = ({
  onClick,
  children,
  ...rest
}) => {
  return (
    <button {...rest} onClick={onClick}>
      {children}
    </button>
  );
};

export default DeletePromotionButton;
