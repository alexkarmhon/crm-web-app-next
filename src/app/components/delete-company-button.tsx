'use client';

import React, { ButtonHTMLAttributes, ReactNode } from 'react';

import Button from './button';

export interface DeleteCompanyButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  companyId: string;
}

export const DeleteCompanyButton: React.FC<DeleteCompanyButtonProps> = ({
  companyId,
}) => {
  return (
    <Button onClick={() => console.log(`delete company ${companyId}`)}>
      Delete company
    </Button>
  );
};

export default DeleteCompanyButton;
