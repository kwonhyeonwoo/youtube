import React from 'react'
import "./css/index.css";
import { Auth } from 'user';
import NotProfile from '../NotProfile/NotProfile';
type Props = {
    userData:Auth;
  ProfileEditNav:()=>void;
};
const Profile = ({ userData:{email,profile,nickName},ProfileEditNav }: Props) => {
  return (
    <div className="profile-wrapper">
      {/* 
            좌측 프로필사진,
            우측 이름,닉네임, 이메일 등
            정보수정 버튼 
        */}
      {profile ? "" : <NotProfile />}
      <div className="profile-info-box">
        <p className='profile-nickname'>{nickName}</p>
        <p className='profile-email'>{email}</p>
      </div>
    </div>
  );
};

export default Profile