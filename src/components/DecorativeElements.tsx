import { memo } from "react";

const DecorativeElements = memo(() => {
  return (
    <>
      {/* Fixed dimensions and positions to prevent CLS */}
      <div 
        className="absolute w-24 h-24 border-2 border-primary/20 rounded-full floating"
        style={{ 
          top: '8rem', 
          right: '2rem',
          willChange: 'transform',
          contain: 'layout style paint'
        }}
        aria-hidden="true"
      />
      <div 
        className="absolute w-32 h-32 border border-accent/20 rounded-full floating"
        style={{ 
          bottom: '8rem', 
          left: '2rem',
          animationDelay: '1s',
          willChange: 'transform',
          contain: 'layout style paint'
        }}
        aria-hidden="true"
      />
    </>
  );
});

DecorativeElements.displayName = "DecorativeElements";

export default DecorativeElements;
