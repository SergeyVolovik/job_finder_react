import { memo, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material';
import { Content, Footer, Header, NavigationBar, Toast } from '@/components';
import { LocationDropdown, HeaderAvatar } from '@/features';

export const App = memo(() => {
  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <>
      <div className="mb-36 bg-white z-20 dark:bg-black">
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
      </div>
      <Footer />
    </>
  );
});
