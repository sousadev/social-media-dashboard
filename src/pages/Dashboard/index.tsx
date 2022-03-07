import React, { useContext, useEffect, useState } from 'react';

import Header from '../../components/Header';
import { useTheme } from '../../contexts/Theme.context';
import Switch from 'react-input-switch';
import { ThemeContext } from 'styled-components';
import Toggle from '../../components/Toggle/Toggle';
import { Content } from './styles';

// import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { toggleTheme, theme: themeConf } = useTheme();
  const { name: theme } = useContext(ThemeContext);
  const [switchState, setSwitchState] = useState(theme);

  const handleToggleTheme = () => {
    toggleTheme();
    setSwitchState(theme);
  };

  useEffect(() => {
    setSwitchState(theme);
  }, []);

  return (
    <Content>
      <Header nrFollowers={23}>
        <span>Dark Mode </span>
        <Switch
          value={switchState}
          on={'light'}
          off={'dark'}
          styles={{
            backgroundColor:
              'linear-gradient(97deg, rgba(34,97,195,1) 0%, rgba(45,253,170,1) 100%)',
          }}
          onChange={handleToggleTheme}
        />
      </Header>

      {/* <Toggle label='Dark Mode' onClick={() => handleToggleTheme()} /> */}
      {/* <button onClick={handleToggleTheme}>Texto</button> */}
    </Content>
  );
};

export default Dashboard;
