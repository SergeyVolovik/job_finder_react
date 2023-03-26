import { memo, useCallback, useEffect, useState } from 'react';
import { Box, Divider, Slider, TextField, Typography } from '@mui/material';
import { Content } from '@/components';

const range = [0, 99999];
const minHeight = 120;

export const JobFilter = memo(() => {
  const [value, setValue] = useState<number[]>(range);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isShowing, setShow] = useState(false);

  const filterContainerClass = isShowing ? '-top-2' : 'top-24';
  const toggleBtnClass = scrollPosition > minHeight ? 'block' : 'hidden';

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const handleScroll = useCallback(() => {
    const position = window.pageYOffset;
    setScrollPosition(position);

    if (position < 100) {
      setShow(true);
    }
  }, []);

  const toggleFilterContainer = () => setShow(!isShowing);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      className={`mb-16 p-6 sticky ${filterContainerClass} bg-white shadow shadow-silver-light drop-shadow-lg z-10 transition-all ease-in-out dark:bg-black`}
    >
      <Box className="relative">
        <Content className="flex justify-between space-x-2">
          <TextField hiddenLabel variant="filled" placeholder="Job position" />
          <Divider className="bg-blue-light" orientation="vertical" flexItem />
          <TextField hiddenLabel variant="filled" placeholder="Work location" />
          <Divider className="bg-blue-light" orientation="vertical" flexItem />
          <TextField hiddenLabel variant="filled" placeholder="Experience" />
          <Divider className="bg-blue-light" orientation="vertical" flexItem />
          <TextField hiddenLabel variant="filled" placeholder="Period" />
          <Divider className="bg-blue-light" orientation="vertical" flexItem />
          <Box>
            <Box className="w-60 flex justify-between space-x-2">
              <Typography variant="subtitle2">The salary</Typography>
              <Typography variant="subtitle2">
                ${value[0]} - ${value[1]}
              </Typography>
            </Box>
            <Slider
              min={range[0]}
              step={1}
              max={range[1]}
              getAriaLabel={() => 'Temperature range'}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
            />
          </Box>
        </Content>
        <Box
          className={`${toggleBtnClass} py-1 px-3 text-xl absolute -bottom-14 right-5 bg-white cursor-pointer`}
          onClick={toggleFilterContainer}
        >
          &#8597;
        </Box>
      </Box>
    </Box>
  );
});
