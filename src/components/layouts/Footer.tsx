import { Box } from '@mui/material';

import { CURRENT_YEAR } from '@/constants';

export const Footer = () => (
  <Box className="w-full p-12 flex justify-center items-center fixed bottom-0 bg-white text-gray-dark border-t-2 border-blue-light z-10 dark:bg-black dark:text-white">
    © {CURRENT_YEAR} GD. All rights reserved.
  </Box>
);
