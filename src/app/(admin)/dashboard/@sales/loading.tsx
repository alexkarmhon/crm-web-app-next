import React from 'react';

import Loader from '@/app/components/loader/loader';

export interface LoadingProps {}

export default function Loading({}: LoadingProps) {
  return (
    <div className="flex items-baseline content-center gap-2">
      Loading
      <Loader />
    </div>
  );
}
