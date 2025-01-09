import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./NavBar.css";
import { FiHome, FiShoppingBag } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { BsFilterSquare } from "react-icons/bs";

const NavBar = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const navigate = useNavigate();

  const handleIconClick = (icon, path) => {
    setSelectedIcon(icon);
    navigate(path);
  };

  return (
    <div className="navBar">
      <FiHome
        size={30}
        color={selectedIcon === 'home' ? 'black' : '#004CFF'}
        onClick={() => handleIconClick('home', '/')}
      />
      <FiShoppingBag
        size={30}
        color={selectedIcon === 'shoppingBag' ? 'black' : '#004CFF'}
        onClick={() => handleIconClick('shoppingBag', '/cart')}
      />
      <CiHeart
        size={30}
        color={selectedIcon === 'heart' ? 'black' : '#004CFF'}
        onClick={() => handleIconClick('heart', '/favorites')}
      />
      <RxAvatar
        size={30}
        color={selectedIcon === 'avatar' ? 'black' : '#004CFF'}
        onClick={() => handleIconClick('avatar', '/profile')}
      />
      <BsFilterSquare
        size={30}
        color={selectedIcon === 'filter' ? 'black' : '#004CFF'}
        onClick={() => handleIconClick('filter', '/filter')}
      />
    </div>
  );
};

export default NavBar;