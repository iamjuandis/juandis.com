import { useEffect, useState } from 'react';
import useDarkMode from 'use-dark-mode';
import { darkTheme, lightTheme } from '../../assets/style/themes';
import { ThemeProvider } from 'styled-components';

const Provider = ({ children }: any) => {
  const { value } = useDarkMode(false, { storageKey: undefined, onChange: undefined });
  const theme = value ? darkTheme : lightTheme;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const body = <ThemeProvider theme={theme}>{children}</ThemeProvider>;

  // prevents ssr flash for mismatched dark mode
  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{body}</div>;
  }
  return body;
};

export default Provider;
