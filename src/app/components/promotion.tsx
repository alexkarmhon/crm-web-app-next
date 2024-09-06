import React from 'react';

import { type Promotion } from '@/lib/api';
import Image from 'next/image';

import DeletePromotionButton from './delete-promotion-button';

export interface PromotionProps {
  promotion: Promotion;
  onDelete: (id: string) => void;
}

export default function Promotion({ promotion, onDelete }: PromotionProps) {
  return (
    <div className="rounded overflow-hidden bg-gray-100">
      <div className="relative w-full h-28 lg:h-40 bg-gray-300">
        {promotion.avatar && (
          <Image src={promotion.avatar} alt="promotion avatar" />
        )}
        <div className="w-14 h-14 absolute top-0 left-px rounded-br-full bg-lime-200"></div>
        <div className=" absolute top-0 right-px  bg-lime-200">
          <DeletePromotionButton onClick={() => onDelete(promotion.id)}>
            <Image
              width={32}
              height={32}
              src="/icons/remove-bookmark.svg"
              alt="remove bookmark icon"
            />
          </DeletePromotionButton>
        </div>
        <div className="w-14 h-14 absolute inset-0 py-3 pr-3 pl-0.5 rounded-br-full bg-gray-900">
          <p className="text-center text-xs font-bold text-lime-200">{`-${promotion.discount}%`}</p>
        </div>
      </div>
      <div className="flex flex-col p-5 gap-3">
        <p className="text-base font-semibold text-gray-900">
          {promotion.title}
        </p>
        <p className="text-sm text-gray-900">{promotion.description}</p>
      </div>
    </div>
  );
}
