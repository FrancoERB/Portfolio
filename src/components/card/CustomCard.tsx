type CustomCardProps = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
};

export const CustomCard = ({
  title,
  description,
  image,
  tags,
  link,
}: CustomCardProps) => {
  return (
    <div className="relative h-[400px] rounded-3xl overflow-hidden group flex-[0_0_90%] md:flex-[0_0_45%] lg:flex-[0_0_30%] mx-2">
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 bg-white/5 blur-md border border-white/20 opacity-60"
        style={{ backgroundImage: `url(${image})` }}
      />

      <div className="absolute inset-4 bg-white/70 glass-card p-8 flex flex-col justify-between transition-all duration-500 hover:inset-2">
        <div>
          <h3 className="text-2xl font-semibold mb-3 text-foreground">
            {title}
          </h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full text-xs font-medium bg-[hsl(var(--color-primary))]/30 text-primary border border-[hsl(var(--color-primary))]/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-text-optional-primary font-medium hover:gap-3 transition-all mt-4"
          >
            Ver proyecto
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

export default CustomCard;
