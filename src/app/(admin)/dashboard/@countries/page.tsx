'use client';

import React from 'react';

import DashboardCard from '@/app/components/dashboard-card';
import Loader from '@/app/components/loader/loader';
import { getCompanies, getCountries } from '@/lib/api';
import getCountByCountryTitle from '@/lib/utils/getCountByCountryTitle';
import { useQuery } from '@tanstack/react-query';
import clsx from 'clsx';
import Image from 'next/image';

export interface PageProps {}

export default function Page({}: PageProps) {
  const { data: countries } = useQuery({
    queryKey: ['countries'],
    queryFn: () => getCountries(),
    staleTime: 10 * 1000,
  });
  const { data: companies } = useQuery({
    queryKey: ['companies'],
    queryFn: () => getCompanies(),
    staleTime: 10 * 1000,
  });

  if (!companies || !countries) return <Loader />;

  const counts = getCountByCountryTitle(countries, companies);

  return (
    <DashboardCard label="Countries of companies">
      <div className="relative pb-5 px-5 gap-2 lg:flex-row-reverse lg:mt-auto">
        <Image
          width={395}
          height={262}
          src="/images/world.svg"
          alt="world"
          className="lg:w-300 lg:h-200 mx-auto"
        />
        <div className="grid gap-2 grid-cols-3 mx-auto md:mt-auto">
          {countries?.map(({ id, title }) => (
            <p
              key={id}
              className={clsx(
                'text-sm text-gray-900 font-medium leading-none',
                'before:inline-block before:w-2 before:h-2 before:rounded-full before:align-middle before:mr-2 before:bg-purple-200',
              )}
            >{`${title} - ${counts[title] || 0}`}</p>
          ))}
          <p
            className={clsx(
              'text-sm text-gray-900 font-medium',
              'before:inline-block before:w-2 before:h-2 before:rounded-full before:align-middle before:mr-2 before:bg-purple-200',
            )}
          >
            Other - {counts['Unknown']}
          </p>
        </div>
      </div>
    </DashboardCard>
  );
}
