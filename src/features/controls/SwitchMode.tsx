import { DarkMode, LightMode } from '@mui/icons-material';
import { IconButton, Tooltip, Zoom } from '@mui/material';

import { useDarkMode } from '@/hooks';

/**
 * We show DarkMode icon because default mode is light
 */
const iconClasses = 'className="fill-gray cursor-pointe';

export const SwitchMode = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const icon = isDarkMode ? (
    <DarkMode className={`${iconClasses} fill-gray-dark`} />
  ) : (
    <LightMode className={`${iconClasses} fill-yellow`} />
  );

  return (
    <Tooltip
      title={isDarkMode ? 'Dark Mode' : 'Light Mode'}
      TransitionComponent={Zoom}
    >
      <IconButton onClick={toggleDarkMode}>{icon}</IconButton>
    </Tooltip>
  );
};
