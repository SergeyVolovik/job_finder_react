import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { Box, Typography } from '@mui/material';

import { LocationDropdownProps } from '@/interfaces';

export const LocationDropdown = ({ className }: LocationDropdownProps) => {
  return (
    <Box
      className={`flex item-center space-x-2 underline underline-offset-2 cursor-pointer ${className}`}
    >
      <FmdGoodIcon className="fill-gray relative top-0.5" />
      <Typography variant="subtitle1">Kharkiv</Typography>
    </Box>
  );
};
