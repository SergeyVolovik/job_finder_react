import { Box } from '@mui/material';

import { LayoutProps } from '@/interfaces';

export const SideBar = ({ className, children }: LayoutProps) => {
  return (
    <Box className={className} component="aside">
      {children}
    </Box>
  );
};
