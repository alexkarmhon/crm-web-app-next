'use client';

import React from 'react';

import { RocketLaunchIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

export interface GlobalErrorProps {
  error: Error;
}

export default function GlobalError({ error }: GlobalErrorProps) {
  return (
    <html>
      <body>
        <div className="relative flex h-screen items-center justify-center bg-gray-100">
          <div className="absolute inset-0 bg-gradient-to-r from-red-800 via-red-600 to-red-400 opacity-70"></div>

          <div className="relative z-10 text-center text-gray-900">
            <div className="flex justify-center items-center mb-6">
              <RocketLaunchIcon className="h-24 w-24 text-red-500" />
            </div>
            <Image
              className="py-2 mb-2 mx-0 flex place-content-center"
              width={75}
              height={50}
              src="/icons/logo-without-text.svg"
              alt="logo"
            />
            <h1 className="flex place-content-center text-8xl font-extrabold text-gray-800 mb-4"></h1>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Ой, щось пішло не так! 🚀
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Ми не змогли виконати ваш запит. Наші технічні спеціалісти вже
              працюють над усуненням проблеми.
            </p>
            <Link
              href="/"
              className="inline-block px-6 py-4 bg-red-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-red-800 transition-transform transform hover:scale-105"
            >
              Повернутися на головну
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
