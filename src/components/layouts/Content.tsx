import { Container } from '@mui/material';
import { LayoutProps } from '@/types';

export const Content = ({ className, children }: LayoutProps) => {
  return (
    <Container className={className} maxWidth="xl">
      {children}
    </Container>
  );
};
