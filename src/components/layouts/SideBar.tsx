import { Box } from '@mui/material';
import { LayoutProps } from '@/types';

export const SideBar = ({ className, children }: LayoutProps) => {
  return (
    <Box className={className} component="aside">
      {children}
    </Box>
  );
};
