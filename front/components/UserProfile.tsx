import React, {FC} from "react";
import { Avatar, Card, Button } from 'antd';




/* 
used in AppLayout.tsx
*/

/* dummy data for now */
const dummy = {
    nickname: 'Whoya',
    Posts: [],
    Followings: [],
    Followers: [],
    isLoggedIn: true,
  };

const UserProfile:FC = ( ) => {
    return (
        <Card
          actions={[
            <div key="twit">짹짹<br />{dummy.Posts.length}</div>,
            <div key="following">팔로잉<br />{dummy.Followings.length}</div>,
            <div key="follower">팔로워<br />{dummy.Followers.length}</div>,
          ]}
        >
          <Card.Meta
            avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
            title={dummy.nickname}
          />
          <Button>로그아웃</Button>
        </Card>
      );
}

export default UserProfile;