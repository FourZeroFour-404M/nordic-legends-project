import React, { useEffect, useState, useRef } from 'react';
import NordicLegendsImg1 from '../Assets/images/GraphicLogo.jpg';

const Vision = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={sectionRef}
            className={`container scroll-effect vision-container ${isVisible ? 'fade-in' : ''}`}
            id='vision'
        >
            <div className='vision-container-text'>
                <h2>OUR VISION</h2>
                <p>
                    At Nordic Legends, we aim to forge a strong community of warriors, united by our passion for the North and our shared desire for glory. Together, we strengthen the Sui ecosystem, crafting a place where every raid, quest, and victory is a collective achievement. Our vision is to create a space where Vikings from all walks of life come together to grow, raid, and conquer as one mighty clan.
                </p>
                <a href="#raid"><button>Raid</button></a>
            </div>
            <img
                src={NordicLegendsImg1}
                className='coming-soon-image'
                alt="A pics showing a warrior on the background and a text of 'Nordik Legends' on top of it."
            />
        </div>
    );
};

export default Vision;
