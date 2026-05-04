import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTheme } from '../context/theme-context';
const ThemeToggle = () => {
  const { toggleTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className=" p-3 w-[60px] h-11" />;
  }

  return (
    <button
      onClick={toggleTheme}
      className="glass-card p-3 rounded-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        <Sun
          className={`absolute inset-0 w-5 h-5 dark:text-primary text-dark transition-all duration-500 ${
            theme === 'dark'
              ? 'rotate-0 scale-100 opacity-100'
              : 'rotate-90 scale-0 opacity-0'
          }`}
        />
        <Moon
          className={`absolute inset-0 w-5 h-5 dark:text-primary text-dark transition-all duration-500 ${
            theme === 'light'
              ? 'rotate-0 scale-100 opacity-100'
              : '-rotate-90 scale-0 opacity-0'
          }`}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
