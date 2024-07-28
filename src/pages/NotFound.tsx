import { NavLink } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

export const NotFound = () => {
  return (
    <Box className="bg-white min-h-screen px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <Box className="max-w-max mx-auto">
        <Typography
          className="font-extrabold text-blue sm:text-5xl"
          variant="h2"
        >
          404
        </Typography>
        <Box className="sm:ml-6">
          <Box className="sm:border-l sm:border-gray-200 sm:pl-6">
            <Typography
              className="font-extrabold text-yellow tracking-tight sm:text-5xl"
              variant="h2"
            >
              Page not found
            </Typography>
            <Typography
              className="mt-1 text-base text-gray-500"
              variant="subtitle2"
            >
              Please check the URL in the address bar and try again.
            </Typography>
          </Box>
          <Box className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
            <NavLink
              to="/"
              className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md shadow-sm border border-black hover:border-blue hover:text-blue focus:outline-none"
            >
              Go back home
            </NavLink>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
