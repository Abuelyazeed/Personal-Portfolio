import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext({
  theme: '',
  toggleTheme: () => {},
});

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'light'
  );

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  function handleTheme() {
    console.log(theme);
    setTheme((PrevTheme) => (PrevTheme === 'light' ? 'dark' : 'light'));
  }

  const ctxValue = {
    theme: theme,
    toggleTheme: handleTheme,
  };

  return (
    <ThemeContext.Provider value={ctxValue}>{children}</ThemeContext.Provider>
  );
}
