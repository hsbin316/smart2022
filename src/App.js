import faker from '@faker-js/faker';
import faker_ko from '@faker-js/faker/locale/ko';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './App.css';

function App() {
  const userDatas = [];
  
  while(userDatas.length < 50) {
    userDatas.push({
      avatar: faker.image.avatar(),
      name: `${faker_ko.name.lastName()}${faker_ko.name.firstName()}`,
      email: faker.internet.email(),
      jobTitle: faker.name.jobTitle(),
      phoneNo: faker_ko.phone.phoneNumber()
    })
  }


  const userCards = userDatas.map((userData, idx) => {
    return <div key={idx}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={userData.avatar }
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              이름 : {userData.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              직업 : { userData.jobTitle }<br />
              이메일 : { userData.email }<br />
              전화번호 : { userData.phoneNo}<br /> 
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
    
    
    
    // <div key={idx}>
    //   <h4>{ userData.jobTitle }</h4>
    //   <img src={userData.avatar } alt="사용자 프로필용 아바타"></img>
    //   <h5>{ userData.name }</h5>
    //   { userData.email }<br />
    //   { userData.phoneNo} 
    // </div>
  })

  console.log(userDatas)
  return (
    <div className="App">
      {userCards}
    </div>
  );
}

export default App;
