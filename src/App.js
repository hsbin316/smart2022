import faker from '@faker-js/faker';
import faker_ko from '@faker-js/faker/locale/ko';
import UserCard from './components/UserCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

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

function App() {
  const userCards = userDatas.map((userData, idx) => {
    return <UserCard userData={userData} idx={idx} />
  })

  console.log(userDatas)
  return (

    
    <div className="App">
      {userCards}
    </div>
  );
}

export default App;
