import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 flex flex-col items-center justify-center">
        <div className="mb-8">
          <Image
            className="pt-3 mb-2 mx-auto filter drop-shadow-lg animateAppearBlink"
            width={70}
            height={50}
            src="/icons/logo-without-text.svg"
            alt="logo"
          />
        </div>
        <h1 className="shineEffect">Welcome to Your CRM</h1>
        <p className="text-gray-400 mb-8 tracking-wide">
          Manage your customers with ease.
        </p>
        <Link
          href="/dashboard"
          className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg transform transition-transform hover:scale-105"
        >
          Get Started
        </Link>
        <div className="absolute inset-0 pointer-events-none">
          <div className="bg-gradient-to-r from-gray-800 to-transparent h-1/2 w-1/4 absolute top-0 left-0 opacity-50"></div>
          <div className="bg-gradient-to-l from-gray-800 to-transparent h-1/2 w-1/4 absolute bottom-0 right-0 opacity-50"></div>
        </div>
      </div>
    </main>
  );
}
