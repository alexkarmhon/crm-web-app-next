import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

export interface NotFoundProps {}

export default function NotFound({}: NotFoundProps) {
  return (
    <div className="relative flex h-screen items-center justify-center bg-gray-100">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700 opacity-70"></div>

      <div className="relative z-10 text-center text-gray-900">
        <Image
          className="pt-3 mb-2 mx-auto animate-pulse"
          width={70}
          height={50}
          src="/icons/logo-without-text.svg"
          alt="logo"
        />
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Хм, здається, ця сторінка подалася в невідоме!
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Можливо, вона вирушила в космос або просто заблукала. Вибачте за
          незручності!
        </p>
        <Link
          href="/companies"
          className="inline-block px-6 py-4 bg-gray-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-gray-800 transition-transform transform hover:scale-105"
        >
          Повернутися до компаній
        </Link>
      </div>
    </div>
  );
}
