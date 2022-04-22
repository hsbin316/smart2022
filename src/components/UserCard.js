import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {useState, useEffect} from 'react';
import {getRandomInt} from '../Utils'; 

function UserCard(props) {
  const { userData, idx } = props;
  const [fontColor,setFontColor] = useState(null);

  useEffect(()=>{
    const changeFontColor = () =>{
      setFontColor(`rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})`)
    }
    setInterval(changeFontColor,5000);
  },[])
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
            <Typography gutterBottom variant="h5" component="div" color={fontColor}>
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
    </div>;
}

export default UserCard;
