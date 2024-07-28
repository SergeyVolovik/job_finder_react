import { memo } from 'react';

import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Typography
} from '@mui/material';

import { details } from '@/utils';

const checkboxTheme = {
  color: '#c3c3c3',
  '&.Mui-checked': {
    color: '#3c6cdc'
  }
};

export const JobDetailsFilter = memo(() => {
  return (
    <Box className="w-full pr-12 bg-white dark:bg-black">
      <Typography className="mb-12 font-medium" variant="h5">
        Details
      </Typography>
      <Box className="space-y-8">
        {details.map((d) => (
          <Box key={d.filterSection} className="space-y-8">
            <Divider variant="inset" className="ml-0 mr-12" />
            <Box className="space-y-2">
              <Typography variant="subtitle2" className="text-gray">
                {d.filterSection}
              </Typography>
              <FormGroup>
                {d.params.map((p, i) => (
                  <FormControlLabel
                    key={i}
                    className="max-w-max"
                    control={<Checkbox sx={checkboxTheme} />}
                    label={<span className="text-sm text-black">{p}</span>}
                  />
                ))}
              </FormGroup>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
});
