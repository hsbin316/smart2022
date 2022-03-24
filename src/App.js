import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import faker_ko from '@faker-js/faker/locale/ko';
import faker from '@faker-js/faker';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import UserCard from './components/UserCard';
import Pagination from '@mui/material/Pagination';

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const userDatas = [];
  
while(userDatas.length < 13) {
  userDatas.push({
    avatar: `images/${getRandomIntInclusive(1,5)}.jpg`,
    name: `${faker_ko.name.lastName()}${faker_ko.name.firstName()}`,
    email: faker.internet.email(),
    jobTitle: faker.name.jobTitle(),
    phoneNo: faker_ko.phone.phoneNumber()
  })
}

function App() {
  const pageContentsCount = 6;
  const [useDarkMode, setUseDarkMode] = useState(true);
  const [pageNo, setPageNo] = useState(1);

  const handleChangePageNo = (event, value) => {
    setPageNo(value);
  }

  const handleChange = (event) => {
    setUseDarkMode(event.target.checked);
  };

  useEffect(() => {
    console.log("component did mount")
  },[]);

  useEffect(() => {
    console.log(`theme 변경됨 => ${useDarkMode}`)
  },[useDarkMode]);

  const userCards = userDatas.map((userData, idx) => {
    return <Grid item xs={1} sm={2} md={4} key={idx}> 
      <UserCard userData={userData} idx={idx} />
    </Grid>
  })

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
        <Grid container spacing={{ xs: 2, md: 3}} columns={{ xs: 4, sm: 4, md: 12}}>
          {userCards}
        </Grid>
        <Pagination
          color="secondary"
          count={Math.ceil(userDatas.length / pageContentsCount)}
          page={pageNo}
          onChange={handleChangePageNo}
        />
      </Container>
    </Box>
  </ThemeProvider>
  );
}

export default App;
