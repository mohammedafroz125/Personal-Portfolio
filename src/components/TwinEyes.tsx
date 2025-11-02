import { useEffect, useRef, useState } from 'react';

const TwinEyes = () => {
  const eyeContainerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!eyeContainerRef.current) return;

  const rect = eyeContainerRef.current.getBoundingClientRect();
      const containerCenterX = rect.left + rect.width / 2;
      const containerCenterY = rect.top + rect.height / 2;
      
      // Calculate angle between container center and cursor
      const angle = Math.atan2(e.clientY - containerCenterY, e.clientX - containerCenterX);
      
  // Limit pupil movement range (smaller since eyes will be taller than wide)
  const maxMove = 5;
      setRotation({
        x: Math.cos(angle) * maxMove,
        y: Math.sin(angle) * maxMove
      });
    };

    // Synchronized blinking for both eyes
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200); // 200ms blink duration
  }, 4000); // Exactly 4 seconds between blinks

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(blinkInterval);
    };
  }, []);

  // Single eye component
  const Eye = () => (
    <div
      className="w-4 h-6 border border-gray-300 dark:border-gray-600 relative overflow-hidden transition-all duration-200 flex items-center justify-center"
      // vertical oval (height > width); keep sclera white regardless of theme
      style={{
        backgroundColor: '#ffffff',
        // uniform 50% radius produces smooth oval when width != height
        borderRadius: isBlinking ? '2px' : '50%',
        height: isBlinking ? '2px' : undefined,
      }}
    >
      <div
        className={`absolute w-[9px] h-[9px] bg-black dark:bg-gray-900 rounded-full transition-all duration-200 ${
          isBlinking ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          top: '50%',
          left: '50%',
          transform: `translate(-50%, -50%) translate(${rotation.x}px, ${rotation.y}px)`,
        }}
      />
    </div>
  );

  return (
    <div 
      ref={eyeContainerRef}
      className="flex gap-1 items-center ml-4"
      style={{ height: '24px' }} // Match navbar height
    >
      <Eye />
      <Eye />
    </div>
  );
};

export default TwinEyes;