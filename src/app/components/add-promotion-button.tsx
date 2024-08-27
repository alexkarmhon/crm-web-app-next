'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import Button from './button';

export interface AddPromotionButtonProps {
  companyId: string;
}

export const AddPromotionButton: React.FC<AddPromotionButtonProps> = ({
  companyId,
}) => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push(`/companies/${companyId}/new-promotion`)}
    >
      Add promotion
    </Button>
  );
};

export default AddPromotionButton;
