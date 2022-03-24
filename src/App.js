import React, { useEffect, useState } from "react";
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import UserCardList from './components/UserCardList';
import {makeUserDatas} from './Utils';

const userDatas = makeUserDatas(5000);

function App() {
  const [useDarkMode, setUseDarkMode] = useState(true);

  const handleChange = (event) => {
    setUseDarkMode(useDarkMode ? false : true);
  };

  useEffect(() => {     
    console.log("component did mount")   
  },[]);  

  useEffect(() => {     
    console.log(`theme 변경됨 => ${useDarkMode}`)   
  },[useDarkMode]);

  return (
    <ThemeProvider theme={createTheme({
        palette: {
          mode: useDarkMode? 'dark' : 'light',
        },
      })
    }>
      <Box sx={{
        height: '100%',
        bgcolor: 'background.default',
        color: 'text.primary',
        p: 1,
      }}>
        <Switch
          checked={useDarkMode}
          color="warning"
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      <Container maxWidth="lg" sx={{p:1}}>
        <UserCardList userDatas={userDatas} />
      </Container>
    </Box>
  </ThemeProvider>
  );
}

export default App;
