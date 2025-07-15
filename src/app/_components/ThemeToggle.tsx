'use client';

import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const { theme, setTheme, actualTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  const getIcon = () => {
    if (theme === 'light') return '☀️';
    if (theme === 'dark') return '🌙';
    return '💻'; // system
  };

  const getLabel = () => {
    if (theme === 'light') return 'Light';
    if (theme === 'dark') return 'Dark';
    return 'System';
  };

  return (
    <button
      onClick={toggleTheme}
      className={`
        inline-flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors
        ${actualTheme === 'dark' 
          ? 'bg-gray-800 text-white border-gray-600 hover:bg-gray-700' 
          : 'bg-white text-gray-900 border-gray-300 hover:bg-gray-50'
        }
      `}
      title={`当前: ${getLabel()} (实际显示: ${actualTheme === 'dark' ? '深色' : '浅色'})`}
    >
      <span className="text-lg">{getIcon()}</span>
      <span className="text-sm font-medium">{getLabel()}</span>
    </button>
  );
}

// 简化版本的切换按钮 - 只在 light 和 dark 之间切换
export function SimpleThemeToggle() {
  const { theme, actualTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    console.log('🔄 切换前状态:', { theme, actualTheme });
    
    // 简单地在 light 和 dark 之间切换，不使用 system
    const newTheme = actualTheme === 'dark' ? 'light' : 'dark';
    
    console.log('🔄 设置新主题:', newTheme);
    setTheme(newTheme);
  };

  console.log('🎨 SimpleThemeToggle 渲染:', { theme, actualTheme });

  return (
    <button
      onClick={toggleTheme}
      className={`
        w-12 h-12 rounded-full border-2 transition-all duration-300 flex items-center justify-center text-xl
        ${actualTheme === 'dark'
          ? 'bg-yellow-400 border-yellow-300 text-gray-900 hover:bg-yellow-300'
          : 'bg-gray-800 border-gray-700 text-yellow-400 hover:bg-gray-700'
        }
      `}
      title={`当前: ${actualTheme}, 点击切换到: ${actualTheme === 'dark' ? 'light' : 'dark'}`}
    >
      {actualTheme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
} 