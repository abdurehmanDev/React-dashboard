import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SidebarData } from '../data-folder/SidebarData';
import './Styles/Navbar.css';
import { IconContext } from 'react-icons';

function Navbar(props) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    props.pass()
    setSidebar(!sidebar)
  };


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>

        <nav className={sidebar ? 'nav-menu' : 'nav-menu active'}>
          <ul className='nav-menu-items'>
            <li className='navbar-toggle'>
              <Link to='#' className={sidebar ? 'menu-bars' : 'menu-bars m-rotate'}>
                <FaIcons.FaSlackHash style={{
                  color: '#fabd74',
                  transform: 'rotate(20deg)'
                }} onClick={showSidebar} />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName} value={{ color: 'wheat' }}>
                  <Link to={item.path} className={(window.location.pathname === item.path) ? 'activeClass' : ''}>
                    {item.icon}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

      </IconContext.Provider>
    </>
  );
}

export default Navbar;