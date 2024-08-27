import React from 'react';

import { Company } from '@/lib/api';
import clsx from 'clsx';
import Image from 'next/image';

import StatusLabel from './status-label';

export interface CompanyRowProps {
  company: Company;
}

export default function CompanyRow({ company }: CompanyRowProps) {
  return (
    <tr className="h-14 text-center text-gray-900 bg-white">
      <td className="text-xs font-medium text-blue-700 rounded-1 border-l-4 border-blue-700">
        {company.categoryTitle}
      </td>
      <td>
        <div className="inline-flex">
          <Image
            width={24}
            height={24}
            src="/images/logotype.png"
            alt="company logotype"
            className="mr-1"
          />
          <a href={`/companies/${company.id}`}>{company.title}</a>
        </div>
      </td>
      <td>
        <StatusLabel status={company.status} />
      </td>
      <td>
        <div className="inline-flex items-center">
          <Image
            width={24}
            height={24}
            src={`icons/${company.hasPromotions ? 'check' : 'x-mark'}.svg`}
            alt="promotion icon"
          />
          <span
            className={clsx(
              'text-m font-medium',
              company.hasPromotions ? 'text-green-700' : 'text-red-700',
            )}
          >
            {company.hasPromotions ? 'Yes' : 'No'}
          </span>
        </div>
      </td>
      <td>{company.countryTitle}</td>
      <td className="rounded-r">
        {new Date(company.joinedDate).toLocaleDateString('uk-UA')}
      </td>
    </tr>
  );
}
