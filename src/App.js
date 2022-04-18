import React, { useEffect, useState } from "react";
import './App.css';                                                       //App.css import처리
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';

import WeatherCard from "./components/WeatherCard";                         // WeatherCard import처리
import UserCardList from './components/UserCardList';                       // UserCard import처리
import {makeUserDatas} from './Utils';                                      // UserDatas import처리


const userDatas = makeUserDatas(100);

function App() {
  const [useDarkMode, setUseDarkMode] = useState(true);

  const handleChange = (event) => {
    setUseDarkMode(useDarkMode ? false : true);
  };

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
      minHeight: '100%',
      bgcolor: 'background.default',
      color: 'text.primary',
      p: 1,
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 2, md: 3}} columns={{ xs: 4, sm: 4, md: 12}}>      {/*weatherCard호출 및 Grid지정*/}
          {/* {
            [1,2,3,4,5,6,7,8,9].map((no)=> {
              return <WeatherCard id={no} />
            })
          } */}
          <WeatherCard cityName="안양" />
          <WeatherCard cityName="서울" />
          <WeatherCard cityName="부산" />
        </Grid>
        <Switch
          checked={useDarkMode}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        <UserCardList userDatas={userDatas} />
      </Container>
    </Box> 
  </ThemeProvider>
  );
}

export default App;
