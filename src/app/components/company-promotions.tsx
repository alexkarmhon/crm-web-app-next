'use client';

import React from 'react';

import { deletePromotion, getPromotions } from '@/lib/api';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import Promotion from './promotion';

export interface CompanyPromotionsProps {
  companyId: string;
}

export const CompanyPromotions: React.FC<CompanyPromotionsProps> = ({
  companyId,
}) => {
  const queryClient = useQueryClient();

  const { data, isError, error } = useQuery({
    queryKey: ['promotions', companyId],
    queryFn: () => getPromotions({ companyId }),
    staleTime: 10 * 1000,
    retry: (failureCount, error) => {
      if (error) {
        return false; // Не повторювати запит якщо це 404 помилка
      }
      return failureCount < 3; // Повторювати запит до 3 разів для інших помилок
    },
  });

  const { mutateAsync } = useMutation({
    mutationFn: deletePromotion,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['promotions', companyId],
      });

      queryClient.invalidateQueries({
        queryKey: ['promotions'],
        exact: true,
      });
    },
  });

  const onDelete = async (id: string) => {
    await mutateAsync(id);
  };

  if (!data?.length || error) {
    return <p>No promotions available for this company.</p>;
  }

  return (
    <div className="grid grid-cols-12 gap-5">
      {data?.map(promotion => (
        <div key={promotion.id} className="col-span-4">
          <Promotion promotion={promotion} onDelete={onDelete} />
        </div>
      ))}
    </div>
  );
};

export default CompanyPromotions;
