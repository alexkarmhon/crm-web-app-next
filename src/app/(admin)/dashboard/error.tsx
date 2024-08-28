'use client';

import React from 'react';

import Button from '@/app/components/button';
import Image from 'next/image';

export interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="relative flex h-screen items-center justify-center bg-gray-900">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700 opacity-70"></div>

      <div className="relative z-10 text-center text-gray-100">
        <Image
          className="pt-3 mb-2 mx-auto animate-pulse"
          width={70}
          height={50}
          src="/icons/logo-without-text.svg"
          alt="logo"
        />
        <h2 className="text-2xl font-semibold text-yellow-200 mb-4">
          Та щоб тобі горя не було!
        </h2>
        <p className="text-lg text-gray-300 mb-6">
          Наші технічні спеціалісти вже отримали по жопі і працюють над
          усуненням проблеми.
        </p>
        <Button
          onClick={() => reset()}
          customClassName="inline-block px-6 py-4 bg-yellow-400 text-gray-900 text-lg font-semibold rounded-lg shadow-lg hover:bg-yellow-700 transition-transform transform hover:scale-105"
        >
          Повернутися на головну
        </Button>
      </div>
    </div>
  );
}
