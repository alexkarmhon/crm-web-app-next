import React from 'react';

export interface ToolbarProps {
  children: React.ReactNode;
  action?: React.ReactNode;
}

export const Toolbar = ({ children, action }: ToolbarProps) => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center gap-7 py-8 px-10">
      <div className="flex-1">{children}</div>
      {action}
    </div>
  );
};

export default Toolbar;
