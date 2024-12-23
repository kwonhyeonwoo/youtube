import React, { useCallback } from "react";
import Profile from "../Profile";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { Auth } from "user";
const ProfileContainer = () => {
  const navigate = useNavigate();
  const user = useSelector<RootState, Auth>((state) => state.auth.user);
  const ProfileEditNav = useCallback(() => {
    navigate("/profile/edit");
  }, [navigate]);
  return <Profile userData={user} ProfileEditNav={ProfileEditNav} />;
};

export default ProfileContainer;
