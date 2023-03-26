import { Badge, IconButton, Tooltip, Zoom } from '@mui/material';
import { IconProps } from '@/types';

export const IconBtnWithBadge = ({ title, positionTooltip, badgeContent, children }: IconProps) => {
  return (
    <Tooltip title={title} TransitionComponent={Zoom} placement={positionTooltip}>
      <IconButton>
        <Badge badgeContent={badgeContent} color="error">
          {children}
        </Badge>
      </IconButton>
    </Tooltip>
  );
};
