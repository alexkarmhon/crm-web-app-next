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
/////////////////////////////////////////////////////////////////////////////////////////////////////
// import DashboardCard from '@/app/components/dashboard-card';
// import SummaryTable from '@/app/components/summary-table';
// import SummaryTableCell from '@/app/components/summary-table-cell';
// import SummaryTableHeader from '@/app/components/summary-table-header';
// import { buildUrl, getCompanies, getPromotions } from '@/lib/api';
// import getActualPromotions from '@/lib/utils/getActualPromotions';
// import Image from 'next/image';
// import useSWR from 'swr';

// export interface PageProps {}

// const fetcher = (url: string) => fetch(url).then(res => res.json());

// export default function Page({}: PageProps) {
//   const { data: promotions } = useSWR(buildUrl('promotions'), fetcher);
//   const { data: companies } = useSWR(buildUrl('companies'), fetcher);

//   if (!promotions || !companies) return <div>Loading...</div>;

//   const actualPromotions = getActualPromotions(promotions, companies);

//   return (
//     <DashboardCard label="Promotions">
//       <SummaryTable
//         headers={
//           <>
//             <SummaryTableHeader>Company</SummaryTableHeader>
//             <SummaryTableHeader>Name</SummaryTableHeader>
//             <SummaryTableHeader align="center">%</SummaryTableHeader>
//           </>
//         }
//       >
//         {actualPromotions.map(({ id, title, companyTitle, discount }) => (
//           <tr key={id}>
//             <SummaryTableCell>
//               <div className="flex">
//                 <Image
//                   width={20}
//                   height={20}
//                   src="/images/logotype.png"
//                   alt="company logotype"
//                   className="mr-1"
//                 />
//                 {companyTitle}
//               </div>
//             </SummaryTableCell>
//             <SummaryTableCell>{title}</SummaryTableCell>
//             <SummaryTableCell align="center">{`-${discount}%`}</SummaryTableCell>
//           </tr>
//         ))}
//       </SummaryTable>
//     </DashboardCard>
//   );
// }

////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useEffect, useState } from 'react';

// import DashboardCard from '@/app/components/dashboard-card';
// import SummaryTable from '@/app/components/summary-table';
// import SummaryTableCell from '@/app/components/summary-table-cell';
// import SummaryTableHeader from '@/app/components/summary-table-header';
// import { Company, getCompanies, getPromotions, Promotion } from '@/lib/api';
// import getActualPromotions from '@/lib/utils/getActualPromotions';
// import Image from 'next/image';

// export interface PageProps {}

// export default function Page({}: PageProps) {
//   // const promotions = await getPromotions();
//   // const companies = await getCompanies();

//   // const actualPromotions = getActualPromotions(promotions, companies);

//   const [promotions, setPromotions] = useState<Promotion[]>([]);
//   const [companies, setCompanies] = useState<Company[]>([]);
//   const [actualPromotions, setActualPromotions] = useState<Promotion[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const promotions = await getPromotions();
//       const companies = await getCompanies();
//       const actualPromotions = getActualPromotions(promotions, companies);

//       setPromotions(promotions);
//       setCompanies(companies);
//       setActualPromotions(actualPromotions);
//     };

//     fetchData();
//   }, []);

//   return (
//     <DashboardCard label="Promotions">
//       <SummaryTable
//         headers={
//           <>
//             <SummaryTableHeader>Company</SummaryTableHeader>
//             <SummaryTableHeader>Name</SummaryTableHeader>
//             <SummaryTableHeader align="center">%</SummaryTableHeader>
//           </>
//         }
//       >
//         {actualPromotions.map(({ id, title, companyTitle, discount }) => (
//           <tr key={id}>
//             <SummaryTableCell>
//               <div className="flex">
//                 <Image
//                   width={20}
//                   height={20}
//                   src="/images/logotype.png"
//                   alt="company logotype"
//                   className="mr-1"
//                 />
//                 {companyTitle}
//               </div>
//             </SummaryTableCell>
//             <SummaryTableCell>{title}</SummaryTableCell>
//             <SummaryTableCell align="center">{`-${discount}%`}</SummaryTableCell>
//           </tr>
//         ))}
//       </SummaryTable>
//     </DashboardCard>
//   );
// }
