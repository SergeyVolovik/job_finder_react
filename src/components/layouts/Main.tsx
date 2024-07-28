import { Container } from '@mui/material';

import { LayoutProps } from '@/interfaces';

export const Main = ({ children }: LayoutProps) => {
  return <Container maxWidth="xl">{children}</Container>;
};
