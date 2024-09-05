import React from 'react';

import clsx from 'clsx';

import styles from './styles.module.css';

export enum StatCardType {
  Dark = 'dark',
  Gradient = 'gradient',
}

export interface StatCardProps {
  type: StatCardType;
  label: string;
  counter: number;
}

export const StatCard = ({ type, label, counter }: StatCardProps) => {
  return (
    <div
      className={clsx(
        'rounded',
        type === StatCardType.Dark &&
          'pt-3 px-3 h-28 bg-gray-900 odd:text-purple-200 even:text-lime-200 text-right',
        type === StatCardType.Gradient && [
          styles.gradient,
          'h-36 p-5 sm:p-7 bg-purple-200 text-gray-900 text-left',
        ],
      )}
    >
      <p
        className={clsx(
          'text-left before:w-2 sm:before:w-4 before:h-0.5 before:rounded',
          type === StatCardType.Dark &&
            'text-[8px] text-zinc-50 before:block before:mb-2 before:bg-zinc-50 lg:text-sm',
          type === StatCardType.Gradient &&
            'text-xs mb-auto before:inline-block before:mr-2 before:align-middle before:bg-gray-900 text-center sm:text-pretty sm:text-sm',
        )}
      >
        {label}
      </p>
      <p
        className={clsx(
          type === StatCardType.Gradient &&
            'mt-auto text-6xl font-semibold text-center sm:text-pretty',
          type === StatCardType.Dark && 'text-5xl md:text-6xl lg:text-5xl',
        )}
      >
        {counter}
      </p>
    </div>
  );
};

export default StatCard;
