import { memo } from 'react';
import { Outlet } from 'react-router-dom';

import { Box, StyledEngineProvider } from '@mui/material';

import { Content, Footer, Header, NavigationBar, Toast } from '@/components';
import { HeaderAvatar, LocationDropdown } from '@/features';
import { useTopScroll } from '@/hooks';

export const App = memo(() => {
  useTopScroll();

  return (
    <>
      <Box className="mb-36 bg-white z-20 dark:bg-black">
        <StyledEngineProvider injectFirst>
          <Header>
            <Content className="flex justify-between items-center space-x-2">
              <NavigationBar />
              <LocationDropdown />
              <HeaderAvatar />
            </Content>
          </Header>
          <Outlet />
          <Toast />
        </StyledEngineProvider>
      </Box>
      <Footer />
    </>
  );
});
