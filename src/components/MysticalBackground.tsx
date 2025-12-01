const MysticalBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ contain: 'layout style paint' }}>
      <div 
        className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl floating" 
        style={{ willChange: 'transform' }}
      />
      <div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl floating" 
        style={{ animationDelay: '1s', willChange: 'transform' }} 
      />
      <div 
        className="absolute top-1/3 right-1/4 w-48 h-48 bg-mystical-glow/5 rounded-full blur-3xl floating" 
        style={{ animationDelay: '2s', willChange: 'transform' }} 
      />
    </div>
  );
};

export default MysticalBackground;
