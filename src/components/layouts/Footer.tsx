import { Box } from '@mui/material';

export const Footer = () => {
  const currentYear = new Date(Date.now()).getFullYear();
  return (
    <Box className="w-full p-12 flex justify-center items-center fixed bottom-0 bg-white text-gray-dark border-t-2 border-blue-light z-10 dark:bg-black dark:text-white">
      © {currentYear} GD. All rights reserved.
    </Box>
  );
};
