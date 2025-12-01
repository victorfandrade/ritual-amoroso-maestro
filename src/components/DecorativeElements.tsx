const DecorativeElements = () => {
  return (
    <>
      <div 
        className="absolute top-32 right-8 w-24 h-24 border-2 border-primary/20 rounded-full floating" 
        style={{ willChange: 'transform' }}
      />
      <div 
        className="absolute bottom-32 left-8 w-32 h-32 border border-accent/20 rounded-full floating" 
        style={{ animationDelay: '1s', willChange: 'transform' }} 
      />
    </>
  );
};

export default DecorativeElements;
