'use client';

import React from 'react';

import PromotionForm from '@/app/components/promotion-form';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  const router = useRouter();

  return (
    <div className="py-6 px-10">
      <button
        type="button"
        onClick={() => router.back()}
        className="flex p-1 border-l border-gray-300 absolute right-10"
      >
        <Image
          src={'/icons/arrow-back.svg'}
          alt={'exit icon'}
          width={18}
          height={18}
        />
        Go back
      </button>
      <PromotionForm companyId={params.id} />
    </div>
  );
}
