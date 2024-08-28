'use client';

import React, { ReactNode } from 'react';

import Button from './button';

export interface DeleteCompanyButtonProps {
  onClick: () => void;
  children?: ReactNode;
}

export const DeleteCompanyButton: React.FC<DeleteCompanyButtonProps> = ({
  onClick,
  children,
}) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default DeleteCompanyButton;
