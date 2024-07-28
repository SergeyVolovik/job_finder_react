import { Container } from '@mui/material';

import { LayoutProps } from '@/interfaces';

export const Content = ({ className, children }: LayoutProps) => {
  return (
    <Container className={className} maxWidth="xl">
      {children}
    </Container>
  );
};
