import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkModeBody = () => {
    const body = document.querySelector('body') || null;
    if (!isDarkMode) {
      body?.classList.add('dark');
    } else {
      body?.classList.remove('dark');
    }
  };

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      setIsDarkMode(true);
      toggleDarkModeBody();
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    toggleDarkModeBody();
    localStorage.setItem('darkMode', `${!isDarkMode}`);
  };

  return { isDarkMode, toggleDarkMode };
};
