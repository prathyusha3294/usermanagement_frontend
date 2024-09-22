import React from 'react';

const dashboard = () => {
    return (
        <div>
          <nav className='navbar'>
            <div>Usermanagement</div>
            <div className='desktopmenu'>
            <a href="#home" className='desktopMenuListItem' style={{ color: 'black' }}>Home</a>
              <a href="#about" className='desktopMenuListItem' style={{ color: 'black' }}>About</a>
              <a href="#experience" className='desktopMenuListItem' style={{ color: 'black' }}>Experience</a>
              <a href="#skills" className='desktopMenuListItem' style={{ color: 'black' }}>Skills</a>
              <a href="#projects" className='desktopMenuListItem' style={{ color: 'black' }}>Projects</a>
            </div>
            <a href="signup" className='desktopMenubotton'>
              Signup
            </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="login" className='desktopMenubotton'>
              login
            </a>
          </nav>++
        </div>  
      );
    };

export default dashboard
