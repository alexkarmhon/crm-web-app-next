'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  const router = useRouter();
  return <div></div>;
}
