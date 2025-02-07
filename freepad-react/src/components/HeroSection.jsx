import React, { useEffect, useRef } from 'react';

const HeroSection = () => {
  const textElements = useRef(null);
  const texts = ["WELCOME TO FREEPAD"];
  let speed = 100;
  let textIndex = 0;
  let characterIndex = 0;

  useEffect(() => {
    function typeWriter() {
      if (characterIndex < texts[textIndex].length) {
        textElements.current.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter, speed);
      } else {
        setTimeout(eraseText, 1000);
      }
    }

    function eraseText() {
      if (textElements.current.innerHTML.length > 0) {
        textElements.current.innerHTML = textElements.current.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
      } else {
        textIndex = (textIndex + 1) % texts.length;
        characterIndex = 0;
        setTimeout(typeWriter, 500);
      }
    }

    typeWriter();
  }, []);

  return (
    <div className="hero">
      <div className="typewriter">
        <span ref={textElements}></span><label style={{ color: 'white' }}>|</label>
      </div>
      <div className="hero-content">
        <p>Revolutionizing Decentralized Fundraising.</p>
        <div className="hero-buttons">
          <button className="btn-primary">NFT MINTING COMING SOON!!!</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
