export const Marquee = () => {
  const text = "✦ BRANDING ✦ WEB DESIGN ✦ UI/UX ✦ DEVELOPMENT ✦ MARKETING ✦ STRATEGY";

  return (
    <div className="py-6 bg-gradient-to-r from-amber-600/10 via-amber-500/20 to-amber-600/10 overflow-hidden">
      <div className="marquee whitespace-nowrap flex gap-12">
        <span className="text-2xl font-display text-white/20">{text}</span>
        <span className="text-2xl font-display text-white/20">{text}</span>
      </div>
    </div>
  );
};