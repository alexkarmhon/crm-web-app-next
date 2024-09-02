'use client';

import React from 'react';

import DashboardCard from '@/app/components/dashboard-card';
import Loader from '@/app/components/loader/loader';
import StatCard, { StatCardType } from '@/app/components/stat-card';
import { getCategories, getCompanies } from '@/lib/api';
import getCountById from '@/lib/utils/getCountById';
import { useQuery } from '@tanstack/react-query';

export interface PageProps {}

export default function Page({}: PageProps) {
  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: () => getCategories(),
    staleTime: 10 * 1000,
  });
  const { data: companies } = useQuery({
    queryKey: ['companies'],
    queryFn: () => getCompanies(),
    staleTime: 10 * 1000,
  });

  if (!categories || !companies) {
    return <Loader />;
  }

  const counts = getCountById(companies, 'categoryId');

  return (
    <DashboardCard label="Categories of companies">
      <div className="grid grid-cols-12 gap-3 pb-5 px-5">
        {categories?.map(({ id, title }) => (
          <div key={id} className="col-span-3">
            <StatCard
              type={StatCardType.Dark}
              label={title}
              counter={counts[id] || 0}
            />
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}
