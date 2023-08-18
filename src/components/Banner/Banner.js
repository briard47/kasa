import React from 'react';

function Banner({ banner, title, alt, className }) {
    return (
        <section className='banner'>
            <img src={banner} alt={alt} className={className}></img>
            <h1 className="banner--text">{title}</h1>
        </section>
    );
};

export default Banner;