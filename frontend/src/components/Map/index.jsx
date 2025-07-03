import React, { useState, useEffect } from 'react';
const Map = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isDesktop) {
    return (
      <iframe
        width='723'
        height='595'
        src='https://www.openstreetmap.org/export/embed.html?bbox=-117.16262340545656%2C46.998387625432144%2C-117.1355438232422%2C47.00962576917104&amp;layer=mapnik'
        style={{ border: 0 }}
        allowFullScreen
        loading='lazy'
      />
    );
  }

  return (
    <div
      style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' }}
    >
      <iframe
        src='https://www.openstreetmap.org/export/embed.html?bbox=-117.16262340545656%2C46.998387625432144%2C-117.1355438232422%2C47.00962576917104&amp;layer=mapnik'
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 0,
        }}
        allowFullScreen
        loading='lazy'
      />
    </div>
  );
};

export default Map;
