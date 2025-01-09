import React, { useState } from 'react';
import "./NavBar.css";
import { FiHome, FiShoppingBag } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { BsFilterSquare } from "react-icons/bs";

const NavBar = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
  };

  return (
    <div className="navBar">
      <FiHome
        size={30}
        color={selectedIcon === 'home' ? 'black' : '#004CFF'}
        onClick={() => handleIconClick('home')}
      />
      <FiShoppingBag
        size={30}
        color={selectedIcon === 'shoppingBag' ? 'black' : '#004CFF'}
        onClick={() => handleIconClick('shoppingBag')}
      />
      <CiHeart
        size={30}
        color={selectedIcon === 'heart' ? 'black' : '#004CFF'}
        onClick={() => handleIconClick('heart')}
      />
      <RxAvatar
        size={30}
        color={selectedIcon === 'avatar' ? 'black' : '#004CFF'}
        onClick={() => handleIconClick('avatar')}
      />
      <BsFilterSquare
        size={30}
        color={selectedIcon === 'filter' ? 'black' : '#004CFF'}
        onClick={() => handleIconClick('filter')}
      />
    </div>
  );
};

export default NavBar;