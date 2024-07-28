import { AppBar } from '@mui/material';

import { LayoutProps } from '@/interfaces';

export const Header = ({ children }: LayoutProps) => {
  return (
    <AppBar
      className="p-7 text-black bg-white border-b-2 border-blue-light shadow-none z-20 dark:bg-black"
      position="sticky"
    >
      {children}
    </AppBar>
  );
};
