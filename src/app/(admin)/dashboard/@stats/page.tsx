import React from 'react';

import DashboardCard from '@/app/components/dashboard-card';
import StatCard, { StatCardType } from '@/app/components/stat-card';
import { getSummaryStats, SummaryStats } from '@/lib/api';

export interface PageProps {}

const labelByStat: Record<keyof SummaryStats, string> = {
  promotions: 'Total promotions',
  categories: 'Total categories',
  newCompanies: 'New companies',
  activeCompanies: 'Total active companies',
};

export default async function Page({}: PageProps) {
  const data = await getSummaryStats({
    next: { revalidate: 5 },
  });

  return (
    // <div className="grid grid-cols-12 gap-5">
    <DashboardCard label={'Statistics'}>
      <div className="grid grid-cols-6 gap-3 md:grid-cols-9 md:gap-3 lg:grid lg:grid-cols-12 lg:gap-5">
        {(Object.keys(labelByStat) as (keyof typeof data)[]).map(key => (
          <div key={key} className="col-span-3">
            <StatCard
              type={StatCardType.Gradient}
              label={labelByStat[key]}
              counter={data[key]}
            />
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}
