'use client';

import React from 'react';

import {
  deletePromotion,
  editCompanyInfo,
  getCompany,
  getPromotions,
} from '@/lib/api';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import Promotion from './promotion';

export interface CompanyPromotionsProps {
  companyId: string;
}

export const CompanyPromotions: React.FC<CompanyPromotionsProps> = ({
  companyId,
}) => {
  const queryClient = useQueryClient();

  const { data: company } = useQuery({
    queryKey: ['companies', companyId],
    queryFn: () => getCompany(companyId),
    staleTime: 10 * 1000,
  });

  const { data: promotions, error } = useQuery({
    queryKey: ['promotions', companyId],
    queryFn: () => getPromotions({ companyId }),
    staleTime: 10 * 1000,
    retry: (failureCount, error) => {
      if (error) {
        return false;
      }
      return failureCount < 3;
    },
  });

  const { mutateAsync } = useMutation({
    mutationFn: deletePromotion,
    onSuccess: async () => {
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

    if (promotions?.length === 1) {
      await editCompanyInfo(companyId, { hasPromotions: false });

      queryClient.invalidateQueries({
        queryKey: ['companies', companyId],
      });

      queryClient.invalidateQueries({
        queryKey: ['promotions'],
        exact: true,
      });
    }
  };

  if (!promotions?.length || error) {
    return <p>No promotions available for this company.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-8 lg:grid-cols-12 gap-5">
      {promotions?.map(promotion => (
        <div key={promotion.id} className="col-span-4">
          <Promotion promotion={promotion} onDelete={onDelete} />
        </div>
      ))}
    </div>
  );
};

export default CompanyPromotions;
