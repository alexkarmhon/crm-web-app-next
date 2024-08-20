'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import Button from './button';

export interface EnterButtonProps {}

export const EnterButton = ({}: EnterButtonProps) => {
  const router = useRouter();
  const appStarter = () => {
    router.push('/dashboard');
  };
  // setTimeout(() => {
  //   appStarter();
  // }, 5000);
  return <Button onClick={appStarter}>Start app</Button>;
};

export default EnterButton;
