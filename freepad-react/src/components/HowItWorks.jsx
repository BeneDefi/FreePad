import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faRocket, faWallet } from '@fortawesome/free-solid-svg-icons';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="how-it-works">
      <h2>How FreePad Works</h2>
      <div className="steps">
        <div className="step">
            <FontAwesomeIcon 
                icon={faWallet} 
                size="4x"
                className="mb-[20px]"
            />
          <h3>Mint NFT</h3>
          <h5>Mint a one-time access NFT</h5>
        </div>
        <div className="step">
        <FontAwesomeIcon 
                icon={faRocket} 
                size="4x"
                className="mb-[20px]"
            />
          <h3>Connect Wallet</h3>
          <h5> Join IDOs</h5>
        </div>
        <div className="step">
        <FontAwesomeIcon 
                icon={faChartLine} 
                size="4x"
                className="mb-[20px]"
            />
          <h3>Join IDOs</h3>
          <h5>Join IDOs of your choice</h5>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
