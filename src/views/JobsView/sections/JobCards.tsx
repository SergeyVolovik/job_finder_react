import { memo } from 'react';

import { Box, Grid, Pagination } from '@mui/material';

import { JobCard } from '@/features';
import { mockCards } from '@/utils';

const paginationStyle = {
  '& .MuiPaginationItem-root': {
    '&.Mui-selected': {
      background: '#3c6cdc',
      color: '#ffffff',
      borderRadius: '50%',
      '&:hover': {
        background: '#3c6cdc'
      }
    }
  }
};

export const JobCards = memo(() => {
  return (
    <Box className="flex-1 bg-white dark:bg-black">
      <Grid container spacing={2}>
        {mockCards.map((cardData) => (
          <JobCard key={cardData.id} {...cardData} />
        ))}
      </Grid>
      <Pagination
        sx={paginationStyle}
        className="flex justify-center mt-8"
        count={20}
        size="large"
      />
    </Box>
  );
});
