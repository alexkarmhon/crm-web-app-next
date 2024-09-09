import React from 'react';

import StatusLabel from '@/app/components/status-label';
import { Company, getCompany } from '@/lib/api';
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

  return (
    <tr className="h-10  sm:h-14 text-center text-gray-900 bg-white">
      <td className="hidden text-s lg:text-base place-content-center font-medium text-blue-700 lg:table-cell lg:rounded-l lg:border-l-4 border-blue-700">
        {categoryTitle}
      </td>
      <td>
        <Link
          href={`/companies/${id}`}
          className="flex place-content-center text-xs sm:text-sm"
        >
          <Image
            width={24}
            height={24}
            src={'/images/logotype.png'}
            alt={'company logotype'}
            className="hidden sm:block sm:w-[18px] sm:h-[18px] md:w-[24px] md:h-[24px] mr-2"
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
      <td className="hidden lg:table-cell rounded-r">
        {new Date(joinedDate).toLocaleDateString('uk-UA')}
      </td>
    </tr>
  );
};

export default CompanyRow;
