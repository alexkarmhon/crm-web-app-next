import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-start-pattern-mob sm:bg-start-pattern bg-cover">
      <div className="absolute w-full h-full pointer-events-none bg-gradient-to-r from-gray-700 to-gray-900 opacity-80 flex flex-col items-center justify-center"></div>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="mb-8">
          <Image
            className="pt-3 mb-2 mx-auto filter drop-shadow-lg animateAppearBlink"
            width={70}
            height={50}
            src="/icons/logo-without-text.svg"
            alt="logo"
          />
        </div>
        <h1 className="shineEffect text-center">Welcome to Your CRM</h1>
        <p className="text-white mb-8 tracking-wide z-10">
          Manage your customers with ease.
        </p>
        <Link
          href="/dashboard"
          className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg transform transition-transform hover:scale-105 animate-pulse"
        >
          Get Started
        </Link>
      </div>
    </main>
  );
}
