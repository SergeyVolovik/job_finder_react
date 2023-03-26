import { memo } from 'react';
import { ArrowDropDown } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { Counter } from '@/components';

export const JobHeader = memo(() => {
  return (
    <Box className="mb-12 flex items-center justify-between">
      <Typography className="space-x-4" variant="h5">
        <span className="font-medium">Recommended jobs</span>
        <Counter amount={640} />
      </Typography>
      <Box className="group flex items-center space-x-2 cursor-pointer">
        {/* dropdown */}
        <span className="text-gray">Sort by</span>
        <span className="text-blue">Last posted</span>
        <ArrowDropDown className="fill-gray relative -top-1 group-hover:fill-black" />
      </Box>
    </Box>
  );
});
