import React, { useEffect, useState } from "react";
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import axios from 'axios';
import WeatherCard from "./components/WeatherCard";

import UserCardList from './components/UserCardList';
import {makeUserDatas} from './Utils';

const userDatas = makeUserDatas(5000);

function App() {
  const [useDarkMode, setUseDarkMode] = useState(true);
  const [weatherData, setWeatherData] = useState(null);
  const [apiError, setApiError] = useState(null);

  const handleChange = (event) => {
    setUseDarkMode(useDarkMode ? false : true);
  };

  useEffect(() => {     
    const callApi = async()=>{
      try{
          const result = await axios.get("https://api.openweathermap.org/data/2.5/weather?lat=37.3936&lon=126.9218&appid=eebbe88172e2435154e52729e9e7a629&lang=kr&units=metric")
          setWeatherData(result.data);
        }catch(err){
          setApiError(err);
        } 
    }
    callApi();
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
        bgcolor: 'background.default',
        color: 'text.primary',
        p: 1,
      }}>
        <WeatherCard weatherData={weatherData} apiError={apiError} />
      </Box>
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
