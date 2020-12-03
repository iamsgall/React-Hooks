/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useContext, useState} from 'react';
import Switch from 'react-switch';
import hookIcon from '../static/images/fish-hook.svg';
import ThemeContext from '../context/ThemeContext';

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const color = useContext(ThemeContext);

  const handleClick = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };
  return (
    <nav class='navbar navbar-expand-lg navbar-light bg-light py-3'>
      <div className='container'>
        <a
          class='navbar-brand font-weight-bold'
          href='#'
          style={{marginRight: 8, color}}
        >
          React Hooks
        </a>
        <img
          className='img-fluid'
          src={hookIcon}
          width='28'
          height='28'
          alt=''
        />
        <div class='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div class='navbar-nav ml-auto'>
            <div className='d-flex justify-content-center align-items-center'>
              <span className='font-weight-bold'>
                {' '}
                {darkMode ? 'Dark Mode' : 'Light Mode'}
              </span>
              <Switch
                onChange={handleClick}
                checked={darkMode}
                onColor='#86d3ff'
                onHandleColor='#2693e6'
                handleDiameter={30}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow='0px 1px 5px rgba(0, 0, 0, 0.6)'
                activeBoxShadow='0px 0px 1px 10px rgba(0, 0, 0, 0.2)'
                height={20}
                width={48}
                className='react-switch pl-3'
                id='material-switch'
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
