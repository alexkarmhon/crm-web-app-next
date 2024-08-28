import React from 'react';

import DashboardCard from '@/app/components/dashboard-card';
import SummaryTable from '@/app/components/summary-table';
import SummaryTableCell from '@/app/components/summary-table-cell';
import SummaryTableHeader from '@/app/components/summary-table-header';
import { getSummarySales } from '@/lib/api';
import Image from 'next/image';

export interface PageProps {}

type Sale = {
  companyId: number;
  companyTitle: string;
  sold: number;
  income: number;
};

export default async function Page({}: PageProps) {
  const data = await getSummarySales();

  // const data: Sale[] = await new Promise<Sale[]>(resolve => {
  //   setTimeout(async () => {
  //     const result = await getSummarySales();
  //     resolve(result);
  //   }, 2000);
  // });

  return (
    <DashboardCard label="Sales details">
      <SummaryTable
        headers={
          <>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader align="center">Sold</SummaryTableHeader>
            <SummaryTableHeader align="center">Income</SummaryTableHeader>
          </>
        }
      >
        {data.map(({ companyId, companyTitle, sold, income }) => (
          <tr key={companyId}>
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
            <SummaryTableCell align="center">{sold}</SummaryTableCell>
            <SummaryTableCell align="center">{`$${income}`}</SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>
    </DashboardCard>
  );
}
