import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../hooks/redux';
import user from '../img/icons/auth/profile.svg';
import { authSlice } from '../store/slices/authSlice';

interface UserProfileProps {
  username: string;
}

function UserProfile({username}: UserProfileProps) {

  const dispatch = useAppDispatch();

  const[isAcive, setIsActive] = useState(false);

  const logoutHandler = (event: React.MouseEvent) => {
    event.preventDefault()
    dispatch(authSlice.actions.logout());
  }

  return (
  <div className="profile">
    <img src={user} alt="фото профиля" className='profile__photo' />
    <span className='profile__name'>{username}</span>
    <button className='profile__button' onClick={()=> setIsActive(!isAcive)}></button>
    <div className={`profile__dropdown ${isAcive && "profile__dropdown_active"}`} id="myDropdown">
      <Link to="#" className='profile__dropdown-link' onClick={logoutHandler}>Выйти</Link>
    </div>
  </div> );
}

export default UserProfile;
