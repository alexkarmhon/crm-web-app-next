'use client';

import React, { useEffect, useState } from 'react';

import Button, { ButtonProps } from './button';

export const ErrorTriggerButton = (props: ButtonProps) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count > 2) {
      throw new Error('Unexpended error');
    }
  }, [count]);
  return (
    <Button {...props} onClick={() => setCount(count + 1)}>
      Error Trigger
    </Button>
  );
};

export default ErrorTriggerButton;
