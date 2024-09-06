'use client';

import React, { ReactNode } from 'react';

import { getCompanies } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';

import CompanyRow from './company-row';

export interface CompanyTableProps {}

const headers = [
  'Category',
  'Company',
  'Status',
  'Promotion',
  'Country',
  'Joined date',
];

export const CompanyTable = ({}: CompanyTableProps) => {
  const { data } = useQuery({
    queryKey: ['companies'],
    queryFn: () => getCompanies(),
    staleTime: 10 * 1000,
  });
  return (
    <div className="py-4 px-5 sm:py-8 sm:px-10 bg-gray-100">
      <table className="table-auto w-full border-separate border-spacing-y-2">
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th
                key={i}
                className=" text-xs first-of-type:hidden last-of-type:hidden lg:first-of-type:table-cell lg:last-of-type:table-cell pb-2 sm:text-sm lg:text-base text-center md:pb-5 font-light text-gray-900"
              >
                <p>{header}</p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map(company => (
            <CompanyRow key={company.id} company={company} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyTable;
