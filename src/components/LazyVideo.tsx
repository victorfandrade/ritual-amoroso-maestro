import { useEffect, useRef, useState } from "react";

interface LazyVideoProps {
  src: string;
  title: string;
  className?: string;
}

export const LazyVideo = ({ src, title, className = "" }: LazyVideoProps) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { rootMargin: "50px" }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={videoRef} className={className} style={{ minHeight: "315px" }}>
      {isIntersecting ? (
        <iframe
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-lg"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full bg-muted animate-pulse rounded-lg" />
      )}
    </div>
  );
};
