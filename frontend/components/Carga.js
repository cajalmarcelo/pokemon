import { useState, useEffect } from 'react';

const Loading = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ display: isVisible ? 'flex' : 'none', justifyContent: 'center', alignItems: 'center', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
      <img src="/carga.gif" alt="Loading" />
    </div>
  );
};

export default Loading;
