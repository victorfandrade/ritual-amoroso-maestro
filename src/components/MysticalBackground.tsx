import { memo } from "react";

const MysticalBackground = memo(() => {
  return (
    <div 
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Fixed dimensions to prevent CLS, using transform for GPU compositing */}
      <div 
        className="absolute w-64 h-64 bg-primary/10 rounded-full blur-3xl floating"
        style={{ 
          top: '5rem', 
          left: '2.5rem',
          willChange: 'transform',
          contain: 'layout style paint'
        }} 
      />
      <div 
        className="absolute w-96 h-96 bg-accent/10 rounded-full blur-3xl floating"
        style={{ 
          bottom: '5rem', 
          right: '2.5rem',
          animationDelay: '1s',
          willChange: 'transform',
          contain: 'layout style paint'
        }} 
      />
      <div 
        className="absolute w-48 h-48 bg-mystical-glow/5 rounded-full blur-3xl floating"
        style={{ 
          top: '33%', 
          right: '25%',
          animationDelay: '2s',
          willChange: 'transform',
          contain: 'layout style paint'
        }} 
      />
    </div>
  );
});

MysticalBackground.displayName = "MysticalBackground";

export default MysticalBackground;
