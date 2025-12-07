import { memo } from "react";
import { Sparkles, Star } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = memo(({ title, subtitle }: PageHeaderProps) => {
  return (
    <header className="text-center mb-12 fade-in-up">
      <div className="flex items-center justify-center gap-2 mb-4" aria-hidden="true">
        <Sparkles className="w-6 h-6 text-accent floating" />
        <Star className="w-8 h-8 text-primary floating" style={{ animationDelay: '0.5s' }} />
        <Sparkles className="w-6 h-6 text-accent floating" style={{ animationDelay: '1s' }} />
      </div>
      <h1 className="text-4xl md:text-5xl font-serif mb-4 text-gradient">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </header>
  );
});

PageHeader.displayName = 'PageHeader';

export default PageHeader;