import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import { useAccount } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const NavBar = () => {
  const { isConnected } = useAccount();
  
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const themeToggleButton = useRef(null);
  
    useEffect(() => {
      
      if (theme === 'dark') {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.add('light-mode');
      }
      
      return () => {
        if (themeToggleButton.current) {
          themeToggleButton.current.removeEventListener('click', toggleTheme);
        }
      };
    }, [theme]);
  
    const toggleTheme = () => {
      document.body.classList.toggle('light-mode');
      document.body.classList.toggle('dark-mode');
  
      const newTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    };
    
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-holder" style={{ paddingBottom: '30px' }}>
          <div className="logo">
            <img className="logo-img" src="logoFreepad.png" alt="logo-img" />
            <div className="logo-text">
              Free<span>Pad</span>
            </div>
          </div>
          <div className="logo-text">Simplifying Decentralized Fundraising</div>
        </div>

        <div className="links">
          <div className="link"><a href="index.html">Home &#128293;</a></div>
          <div className="link"><a href="doc.html">About &#x1F914;</a></div>
          <div className="link"><a href="#">KYC &#128274;</a></div>
          <div className="links-btn">
            <a href="/mint-nft" className="link-btn">Mint NFT</a>
            <ConnectButton />
          </div>
        </div>

        <div className="toggle-container">
          <button className="toggle-btn" id="theme-toggle" onClick={toggleTheme}>
            <img className="toggle-img" src="brightness.png" alt="brightness" />
          </button>
        </div>

        <FontAwesomeIcon 
          icon={faBars} 
          size="2x" 
          onClick={toggleDropdown} 
          className="hamburg"
        />
      </div>

      {isDropdownOpen && (
        <div className="dropdown">
          <div className="links">
            <a href="index.html">Home &#128293;</a>
            <a href="doc.html">About &#x1F914;</a>
            <a href="#">KYC &#128274;</a>
            <div className="links-btn">
              <a href="/mint-nft" className="link-btn">Mint NFT</a>
              <ConnectButton />
              {/* <a className="link-btn">Connect Wallet &#9662;</a> */}
            </div>
          </div>
          <FontAwesomeIcon 
            icon={faXmark} 
            size="2x" 
            color="#333" 
            className="cancel"
            onClick={toggleDropdown}
          />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
