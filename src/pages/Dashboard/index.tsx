import React from 'react';

import Header from '../../components/Header';
import { useTheme } from '../../contexts/Theme.context';

// import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { toggleTheme } = useTheme();

  const handleToggleTheme = () => {
    toggleTheme();
  };
  return (
    <div>
      <button onClick={handleToggleTheme}>Texto</button>
      <Header />
    </div>
  );
};

export default Dashboard;
