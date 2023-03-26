import { Container } from '@mui/material';
import { LayoutProps } from '@/types';

export const Main = ({ children }: LayoutProps) => {
  return <Container maxWidth="xl">{children}</Container>;
};
