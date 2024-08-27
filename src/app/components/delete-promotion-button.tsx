import React, { ReactNode } from 'react';

export interface DeletePromotionButtonProps
  extends Partial<React.ButtonHTMLAttributes<HTMLButtonElement>> {
  onClick: () => void;
  children?: ReactNode;
}

export default function DeletePromotionButton({
  onClick,
  children,
  ...rest
}: DeletePromotionButtonProps) {
  return (
    <button type="button" {...rest} onClick={onClick}>
      {children}
    </button>
  );
}
