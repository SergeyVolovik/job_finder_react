import { Typography } from '@mui/material';

import { Content } from '@/components';

export const UserProfile = () => {
  return (
    <Content className="p-16 flex flex-grow items-center justify-center">
      <Typography className="text-3xl font-bold underline" variant="h1">
        User Profile
      </Typography>
    </Content>
  );
};
