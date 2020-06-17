import React from 'react';

import { 
  Container, 
  Profile, 
  Avatar, 
  UserData, 
  Icons, 
  MicIcon, 
  HeadphoneIcon, 
  SettingsIcon 
} from './styles';

interface Props {
  userName: string;
  userHashtag: string;
}

const UserInfo: React.FC<Props> = ({
  userName,
  userHashtag
}) => {
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong>{userName}</strong>
          <span>{userHashtag}</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  )
};

export default UserInfo;