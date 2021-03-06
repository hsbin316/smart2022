import React,{useState,useEffect} from 'react';
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';

import {weather_mapping_data, cityLatLon} from "../dataset/WeatherData";    // weatherData import 처리

function WeatherCard(props) {
    const {id} = props;
    const {cityName} = props;
    const defaultCityName = localStorage.getItem(id+'_city') || "안양";
    // const defaultCityName = localStorage.getItem(id+'_city') || cityName;       // defaultCityname 설정 (현재 사용 x)
    const [weatherData, setWeatherData] = useState(null);                       
    const [apiError, setApiError] = useState(null);
    const findCity = cityLatLon.find(data=> data.name === defaultCityName);
    // const findCity = cityLatLon.find(data=> data.name === cityName); 
    const [selectedCityData, setSelectedCityData] = useState(findCity);
    
    

    const selectHandleChange = (event) => {
        console.log(event.target.value);
        const cityName = event.target.value;
        const findCityLatLon = cityLatLon.find(data => data.name === cityName)
        localStorage.setItem(id+'_city',findCityLatLon.name);
        setSelectedCityData(findCityLatLon)
    }

    useEffect(() => {
        const cityName = selectedCityData.name;
        const cityGetDate = cityName+'_저장시간';
        if(Date.now() - localStorage.getItem(cityGetDate) / 1000 / 60 > 60){
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${selectedCityData.lat}&lon=${selectedCityData.lon}&appid=eebbe88172e2435154e52729e9e7a629&lang=kr&units=metric`)
            .then(res=> {
              setWeatherData(res.data);
              localStorage.setItem(cityName, JSON.stringify(res.data));
              localStorage.setItem(cityGetDate,Date.now());
            })
            .catch(err => {
              setApiError(err);
            })
        } else {
          console.log("미만호출");
          setWeatherData(JSON.parse(localStorage.getItem('weather_data')));
        }
        console.log("component did mount") 
      },[selectedCityData]);



    const makeWeatherInfo = () => {
        const {temp, temp_min, temp_max, feels_like, humidity} = weatherData.main;
        const {icon,main} = weatherData.weather[0];
        const parseWeatherData = weather_mapping_data[main] ? weather_mapping_data[main] : weather_mapping_data['Mist'];

        const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        // return <Grid container direction="column" justifyContent="center" alignItems="baseline">
        return <Grid container item xs={3} sm={5} md={4}>
            <FormControl>
                <InputLabel id="selected-city-label">도시</InputLabel>
                <Select
                    labelId="city-selected-label"
                    id="selected-city"
                    value={selectedCityData.name}
                    label="도시"
                    onChange={selectHandleChange}
                >
                    {cityLatLon.map((city)=> <MenuItem value={city.name}>{city.name}</MenuItem>)}
                </Select>
            </FormControl>
            <Typography>{`현재날씨: ${parseWeatherData.name}`}</Typography>
            <parseWeatherData.icon sx={{fontSize:125,color:'red'}} />
            <img src={iconUrl} alt="현재날씨 아이콘" />
            <Typography>{`현재온도 : ${temp}℃ 체감온도 ${feels_like}℃`}</Typography>
            <Typography>{`최저기온 : ${temp_min}℃ 최고기온 ${temp_max}℃ 습도: ${humidity}%`}</Typography>
        </Grid>
    }

    return<>                                                                {/* 삼항연산자를 이용하여 날씨정보가 있으면 makeWeatherInfo()를 리턴 없으면 날씨정보 없음 리턴 */}
        {apiError ?
            <Typography>{apiError.message}</Typography>
            :
            weatherData?
                makeWeatherInfo()
                :
                <Typography>날씨정보 없음</Typography>
        }
    </>
}

export default WeatherCard;                                                 // WeatherCard export 처리