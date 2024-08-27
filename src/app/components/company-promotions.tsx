'use client';

import React from 'react';

import { deletePromotion, getPromotions } from '@/lib/api';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import Promotion from './promotion';

export interface CompanyPromotionsProps {
  companyId: string;
}

export default function CompanyPromotions({
  companyId,
}: CompanyPromotionsProps) {
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ['promotions', companyId],
    queryFn: () => getPromotions({ companyId }),
    staleTime: 10 * 1000,
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

  return (
    <div className="grid grid-cols-12 gap-5">
      {data?.map(promotion => (
        <div key={promotion.id} className="col-span-4">
          <Promotion promotion={promotion} onDelete={onDelete} />
        </div>
      ))}
    </div>
  );
}
