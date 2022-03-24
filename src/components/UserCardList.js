
import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import UserCard from './UserCard';
import {paginate} from '../Utils';

function UserCardList(props) {
    const pageContentsCount = 6;
    const [pageNo, setPageNo] = useState(1);
    const [currentUserData, setCurrentUserData] = useState(paginate(props.userDatas, pageContentsCount, pageNo));

    const handleChangePageNo = (event, value) => {
        setPageNo(value);
        setCurrentUserData(paginate(props.userDatas, pageContentsCount, value));
    }

    const userCards = currentUserData.map((userData, idx) => {
        return <Grid item xs={1} sm={2} md={4} key={idx}> 
          <UserCard userData={userData} />
        </Grid>
      })

    return [
        <Grid container spacing={{ xs: 2, md: 3}} columns={{ xs: 4, sm: 4, md: 12}}>
            {userCards}
        </Grid>,
        <Pagination
            color="secondary"
            count={Math.ceil(props.userDatas.length / pageContentsCount)}
            page={pageNo}
            onChange={handleChangePageNo}
        />
    ]
}

export default UserCardList;