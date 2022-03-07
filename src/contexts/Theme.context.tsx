import React, { createContext, useCallback, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../Theme/default';

export interface ThemeContextData {
  toggleTheme(): void;
  theme: Theme;
}
export interface ThemeGlobalData {
  toggleTheme?(): void;
  theme: Theme;
}

interface Theme {
  name: string;
  colors: {
    white: string;
    bg: string;
    gray: string;
    cardColor: string;
    activeCardColor: string;
    twitter: string;
    facebook: string;
    instagram: string;
    instaOrange: string;
    instaRed: string;
    youtube: string;
    red: string;
    green: string;
  };
}

export const CustomThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(lightTheme);

  const toggleTheme = useCallback(() => {
    if (theme.name === 'light') {
      setTheme(darkTheme);
      localStorage.setItem('mode', 'dark');
    } else if (theme.name === 'dark') {
      setTheme(lightTheme);
      localStorage.setItem('mode', 'light');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
