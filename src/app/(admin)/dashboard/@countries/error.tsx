'use client';

import React from 'react';

import Image from 'next/image';

export interface ErrorProps {
  reset: () => void;
}

export default function Error({ reset }: ErrorProps) {
  return (
    <div
      className="relative flex h-full items-center justify-center bg-gray-100"
      onClick={() => reset()}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700 opacity-70"></div>

      <div className="relative z-10 text-center text-gray-900">
        <Image
          className="pt-3 mb-2 mx-auto animate-pulse"
          width={35}
          height={25}
          src="/icons/logo-without-text.svg"
          alt="logo"
        />
        <h2 className="text-l font-semibold text-gray-700 mb-4">
          Хм, здається, ця сторінка подалася в невідоме!
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Можливо, вона вирушила в космос або просто заблукала. Вибачте за
          незручності!
        </p>
      </div>
    </div>
  );
}
