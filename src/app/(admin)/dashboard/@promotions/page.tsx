'use client';

import React from 'react';

import DashboardCard from '@/app/components/dashboard-card';
import Loader from '@/app/components/loader/loader';
import SummaryTable from '@/app/components/summary-table';
import SummaryTableCell from '@/app/components/summary-table-cell';
import SummaryTableHeader from '@/app/components/summary-table-header';
import { getCompanies, getPromotions } from '@/lib/api';
import getActualPromotions from '@/lib/utils/getActualPromotions';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';

export interface PageProps {}

export default function Page({}: PageProps) {
  const { data: companies } = useQuery({
    queryKey: ['companies'],
    queryFn: () => getCompanies(),
    staleTime: 10 * 1000,
  });
  const { data: promotions } = useQuery({
    queryKey: ['promotions'],
    queryFn: () => getPromotions(),
    staleTime: 10 * 1000,
  });

  return (
    <DashboardCard label="Promotions">
      <SummaryTable
        headers={
          <>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader>Name</SummaryTableHeader>
            <SummaryTableHeader align="center">%</SummaryTableHeader>
          </>
        }
      >
        {!companies && (
          <tr>
            <SummaryTableCell>
              <Loader />
            </SummaryTableCell>
          </tr>
        )}
        {companies &&
          promotions &&
          getActualPromotions(promotions, companies).map(
            ({ id, title, companyTitle, discount }) => (
              <tr key={id}>
                <SummaryTableCell>
                  <div className="flex">
                    <Image
                      width={20}
                      height={20}
                      src="/images/logotype.png"
                      alt="company logotype"
                      className="mr-1"
                    />
                    {companyTitle}
                  </div>
                </SummaryTableCell>
                <SummaryTableCell>{title}</SummaryTableCell>
                <SummaryTableCell align="center">{`-${discount}%`}</SummaryTableCell>
              </tr>
            ),
          )}
      </SummaryTable>
    </DashboardCard>
  );
}
