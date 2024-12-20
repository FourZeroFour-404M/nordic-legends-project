import React, { useState, useEffect } from 'react';
import Warrior1 from '../Assets/images/Sneak-Peaks/Warrior-Base.jpg';
import Warrior2 from '../Assets/images/Sneak-Peaks/Common-Warrior-Base-2.jpg';
import ShieldMaiden1 from '../Assets/images/Sneak-Peaks/Shieldmaiden-base.jpg';

const Introduction = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`container introduction-container ${fadeIn ? 'fade-in' : ''}`}>
      {/* Glowing background effect */}
      <div
        style={{
          position: 'absolute',
          backgroundColor: '#03FE01CC',
          width: '200px',
          height: '200px',
          zIndex: '-10px',
          filter: 'blur(120px)',
          right: '450px',
          top: '150px',
        }}
      ></div>

      {/* Text Section */}
      <div className="introduction-text">
        <h1>NORDIC LEGENDS</h1>
        <p>
          Nordic Legends is a Viking-themed, community-driven ecosystem anchored by The Nordic Legends Genesis Collection, a limited set of 300 hand-crafted NFTs on the Sui network. These NFTs—featuring Warriors and Shieldmaidens—offer rarity-based rewards, staking opportunities, and future ecosystem perks.
        </p>
        <div className="button-group">
          <a href="#raid"><button className="raid-button">Raid</button></a>
          <a href="#collection"><button className="collections-button">Collections</button></a>
        </div>
      </div>

      {/* Image Section */}
      <div className="introduction-img">
        <img className="image-right1" src={ShieldMaiden1} alt="Shield Maiden art" />
        <img className="image-top" src={Warrior1} alt="Warrior 1 art" />
        <img className="image-right2" src={Warrior2} alt="Warrior 2 art" />
      </div>
    </div>
  );
};

export default Introduction;
