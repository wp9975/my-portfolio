import React, { useEffect, useState } from 'react';


const Birds = () => {
    const [startAnimation, setStartAnimation] = useState(false);

    const checkScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const reachedBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
    
      setStartAnimation(reachedBottom);
    };
    
    useEffect(() => {
      window.addEventListener('scroll', checkScroll);
      return () => window.removeEventListener('scroll', checkScroll);
    }, []);

  return (
    <div>
      <img
        src="/gif/bird.gif"
        alt="bird"
        className={`absolute z-10 h-24 ${startAnimation ? 'animate-bird-1' : 'hidden'}`}
      />
      <img
        src="/gif/bird.gif"
        alt="bird"
        className={`absolute z-10 h-24 ${startAnimation ? 'animate-bird-2' : 'hidden'}`}
      />
      <img
        src="/gif/bird.gif"
        alt="bird"
        className={`absolute z-10 h-24 ${startAnimation ? 'animate-bird-3' : 'hidden'}`}
      />
    </div>
  );
};

export default Birds;
