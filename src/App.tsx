import React from 'react';
import { CustomThemeProvider } from './contexts/Theme.context';
import Dashboard from './pages/Dashboard';
import Global from './Theme/global';

function App() {
  return (
    <CustomThemeProvider>
      <Global />
      <Dashboard />
    </CustomThemeProvider>
  );
}

export default App;
