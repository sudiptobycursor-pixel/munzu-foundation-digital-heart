import { useLanguage } from '@/contexts/LanguageContext';

interface PageHeroProps {
  badge: string;
  title: string;
  titleHighlight?: string;
  titleEnd?: string;
  subtitle: string;
  backgroundImage: string;
}

const PageHero = ({ badge, title, titleHighlight, titleEnd, subtitle, backgroundImage }: PageHeroProps) => {
  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/60 to-foreground/80" />
        
        {/* Animated grain texture */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]" />
        </div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center py-32">
        {/* Badge */}
        <span className="inline-block px-5 py-2.5 bg-accent/90 text-foreground rounded-full text-sm font-medium mb-6 animate-fade-in-down shadow-lg">
          {badge}
        </span>

        {/* Title */}
        <h1 className="heading-display text-background mb-6 animate-fade-in-up text-shadow-lg">
          {title}{' '}
          {titleHighlight && (
            <span className="text-accent">{titleHighlight}</span>
          )}
          {titleEnd && ` ${titleEnd}`}
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-background/80 max-w-2xl mx-auto animate-fade-in-up delay-200 leading-relaxed">
          {subtitle}
        </p>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-background/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-accent rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default PageHero;
