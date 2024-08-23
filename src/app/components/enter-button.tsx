'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import Button, { ButtonProps } from './button';

export const EnterButton = (props: ButtonProps) => {
  const router = useRouter();
  const appStarter = () => {
    router.push('/dashboard');
  };
  // setTimeout(() => {
  //   appStarter();
  // }, 5000);
  return (
    <Button {...props} onClick={appStarter}>
      Start app
    </Button>
  );
};

export default EnterButton;
