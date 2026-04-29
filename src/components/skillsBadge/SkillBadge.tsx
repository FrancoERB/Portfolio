interface SkillBadgeProps {
  name: string;
  icon: string;
}
const SkillBadge = ({ name, icon }: SkillBadgeProps) => {
  return (
    <div className="glass-card border-white/20  px-6 py-3 inline-flex items-center gap-2 hover:scale-105 transition-transform duration-300">
      {icon && <span className="text-xl">{icon}</span>}
      <span className="font-medium">{name}</span>
    </div>
  );
};

export default SkillBadge;
