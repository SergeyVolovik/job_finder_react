import { NavLink } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { finderLogo } from '@/assets';
import { Logo } from '@/components/ui';
import { LayoutProps } from '@/types';

export const NavigationBar = ({ children }: LayoutProps) => {
  const getActiveClass = (isActive: boolean) => {
    return isActive
      ? 'transition ease-in-out text-blue hover:underline hover:underline-offset-4'
      : 'transition ease-in-out hover:underline hover:underline-offset-4';
  };

  return (
    <>
      <NavLink className="flex items-center space-x-2" to="/">
        <Logo className="w-10 h-10 fill-blue" imgSrc={finderLogo} />
        <Typography className="font-semibold" variant="h5">
          Finder
        </Typography>
      </NavLink>
      <Box className="flex items-center space-x-8 lg:space-x-20">
        <NavLink to="/search" className={({ isActive }) => getActiveClass(isActive)}>
          Looking for
        </NavLink>
        <NavLink to="/hiring" className={({ isActive }) => getActiveClass(isActive)}>
          Hiring
        </NavLink>
        {children}
      </Box>
    </>
  );
};
