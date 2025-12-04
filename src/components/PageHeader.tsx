import { memo } from "react";
import { Sparkles, Star } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = memo(({ title, subtitle }: PageHeaderProps) => {
  return (
    <header className="text-center mb-8 md:mb-12 fade-in-up">
      {/* Icons with fixed dimensions to prevent CLS */}
      <div 
        className="flex items-center justify-center gap-2 mb-4"
        style={{ minHeight: '2rem' }}
        aria-hidden="true"
      >
        <Sparkles 
          className="w-6 h-6 text-accent floating" 
          style={{ willChange: 'transform', contain: 'layout style paint' }}
        />
        <Star 
          className="w-8 h-8 text-primary floating" 
          style={{ animationDelay: '0.5s', willChange: 'transform', contain: 'layout style paint' }} 
        />
        <Sparkles 
          className="w-6 h-6 text-accent floating" 
          style={{ animationDelay: '1s', willChange: 'transform', contain: 'layout style paint' }} 
        />
      </div>
      
      {/* H1 is likely LCP element */}
      <h1 
        className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 text-gradient leading-tight"
        style={{ 
          contentVisibility: 'auto',
          containIntrinsicSize: '0 80px'
        }}
      >
        {title}
      </h1>
      
      {subtitle && (
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </header>
  );
});

PageHeader.displayName = "PageHeader";

export default PageHeader;
