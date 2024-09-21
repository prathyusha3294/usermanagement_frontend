import React from 'react'
import './dashboard'
const dashboard = () => {
    return (
        <div>
          <nav className='navbar'>
            <div>Usermanagement</div>
            <div className='desktopmenu'>
            <a href="#home" className='desktopMenuListItem' style={{ color: 'white' }}>Home</a>
              <a href="#about" className='desktopMenuListItem' style={{ color: 'white' }}>About</a>
              <a href="#experience" className='desktopMenuListItem' style={{ color: 'white' }}>Experience</a>
              <a href="#skills" className='desktopMenuListItem' style={{ color: 'white' }}>Skills</a>
              <a href="#projects" className='desktopMenuListItem' style={{ color: 'white' }}>Projects</a>
            </div>
            <a href="signup" className='desktopMenubotton'>
              Signup
            </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="login" className='desktopMenubotton'>
              login
            </a>
          </nav>
        </div>  
      );
    };

export default dashboard
