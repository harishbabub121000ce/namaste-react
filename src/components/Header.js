import { LOGO_URL } from "../utils/constants";
import { useState } from 'react';
import { Link } from "react-router";

export const Header = () => {
  const [loginStatus, setLoginStatus] = useState('Login');
  const handleLoginClick = ()=> {
    if(loginStatus === 'Login') {
      setLoginStatus('Logout');
    } else {
      setLoginStatus('Login');
    }
  }
  return (
    <div className="flex justify-between bg-gray-100">
      <div>
        <img className="w-36" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li className="px-4 cursor-pointer"><Link to="/">Home</Link></li>
          <li className="px-4 cursor-pointer"><Link to="/about">About</Link></li>
          <li className="px-4 cursor-pointer"><Link to="/contactus">Contact Us</Link></li>
          <li className="px-4 cursor-pointer"><Link to="/groceries">Groceries</Link></li>
          <li className="px-4 cursor-pointer">Cart</li>
        </ul>
        <div className="px-10 cursor-pointer" onClick={handleLoginClick}>
          {loginStatus}
      </div>
      </div>
    </div>
  );
};