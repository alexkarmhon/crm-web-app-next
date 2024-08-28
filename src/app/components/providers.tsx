'use client';

import React, { PropsWithChildren, useMemo } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export interface ProvidersProps {}

export default function Providers({ children }: PropsWithChildren) {
  const client = useMemo(() => new QueryClient(), []);
  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
