import React from 'react';

import StatusLabel from '@/app/components/status-label';
import { Company, getCompany } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

export interface CompanyRowProps {
  company: Company;
}

const CompanyRow = ({ company }: CompanyRowProps) => {
  const {
    id,
    categoryTitle,
    title,
    status,
    hasPromotions,
    joinedDate,
    countryTitle,
  } = company;

  const { data } = useQuery({
    queryKey: ['companies', company.id],
    queryFn: () => getCompany(company.id),
    staleTime: 10 * 1000,
  });

  return (
    <tr className="h-14 text-center text-gray-900 bg-white">
      <td className="text-xs font-medium text-blue-700 rounded-l border-l-4 border-blue-700">
        {categoryTitle}
      </td>
      <td>
        <Link href={`/companies/${id}`} className="flex place-content-center">
          <Image
            width={24}
            height={24}
            src={'/images/logotype.png'}
            alt={'company logotype'}
            className="mr-2"
          />
          {title}
        </Link>
      </td>
      <td>
        <StatusLabel status={status}></StatusLabel>
      </td>
      <td>
        <div className="inline-flex items-center gap-1">
          <Image
            width={16}
            height={16}
            src={`/icons/${hasPromotions ? 'check' : 'x-mark'}.svg`}
            alt="promotion icon"
          />
          <span
            className={clsx(
              'text-sm font-medium',
              hasPromotions ? 'text-green-700' : 'text-red-700',
            )}
          >
            {hasPromotions ? 'Yes' : 'No'}
          </span>
        </div>
      </td>
      <td>{countryTitle}</td>
      <td className="rounded-r">
        {new Date(joinedDate).toLocaleDateString('uk-UA')}
      </td>
    </tr>
  );
};

export default CompanyRow;
