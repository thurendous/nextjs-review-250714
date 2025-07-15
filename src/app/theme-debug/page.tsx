'use client';

import { useTheme } from '../_components/ThemeProvider';
import { ThemeToggle, SimpleThemeToggle } from '../_components/ThemeToggle';
import { useEffect, useState } from 'react';

export default function ThemeDebug() {
  const { theme, setTheme, actualTheme } = useTheme();
  const [htmlClasses, setHtmlClasses] = useState('');
  const [systemTheme, setSystemTheme] = useState('');

  useEffect(() => {
    // 实时监控 HTML 类名变化
    const updateHtmlClasses = () => {
      setHtmlClasses(document.documentElement.className);
    };

    // 检查系统主题
    const checkSystemTheme = () => {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setSystemTheme(isDark ? 'dark' : 'light');
    };

    updateHtmlClasses();
    checkSystemTheme();

    // 定期更新（每500ms）
    const interval = setInterval(() => {
      updateHtmlClasses();
      checkSystemTheme();
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        🔍 主题切换调试页面
      </h1>

      {/* 调试信息 */}
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 mb-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">实时状态监控</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
            <h3 className="font-semibold text-blue-800 dark:text-blue-200 text-sm">设置的主题</h3>
            <p className="text-blue-600 dark:text-blue-300 text-xl font-mono">{theme}</p>
          </div>
          
          <div className="p-4 bg-green-50 dark:bg-green-900 rounded-lg">
            <h3 className="font-semibold text-green-800 dark:text-green-200 text-sm">实际主题</h3>
            <p className="text-green-600 dark:text-green-300 text-xl font-mono">{actualTheme}</p>
          </div>
          
          <div className="p-4 bg-purple-50 dark:bg-purple-900 rounded-lg">
            <h3 className="font-semibold text-purple-800 dark:text-purple-200 text-sm">系统主题</h3>
            <p className="text-purple-600 dark:text-purple-300 text-xl font-mono">{systemTheme}</p>
          </div>
          
          <div className="p-4 bg-orange-50 dark:bg-orange-900 rounded-lg">
            <h3 className="font-semibold text-orange-800 dark:text-orange-200 text-sm">HTML类名</h3>
            <p className="text-orange-600 dark:text-orange-300 text-sm font-mono break-all">
              {htmlClasses || 'none'}
            </p>
          </div>
        </div>
      </div>

      {/* 主题切换控件 */}
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 mb-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">主题切换测试</h2>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">完整切换</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Light → Dark → System</p>
            </div>
            <ThemeToggle />
          </div>
          
          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">简单切换</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Light ↔ Dark</p>
            </div>
            <SimpleThemeToggle />
          </div>
        </div>
      </div>

      {/* 手动测试按钮 */}
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 mb-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">手动测试</h2>
        
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setTheme('light')}
            className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition-colors"
          >
            ☀️ Light
          </button>
          <button
            onClick={() => setTheme('dark')}
            className="px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors"
          >
            🌙 Dark
          </button>
          <button
            onClick={() => setTheme('system')}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
          >
            💻 System
          </button>
        </div>
      </div>

      {/* 视觉测试区域 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">颜色测试</h3>
          <div className="space-y-3">
            <div className="h-8 bg-red-500 dark:bg-red-600 rounded flex items-center justify-center text-white text-sm">
              红色 {actualTheme === 'dark' ? '(深色版)' : '(浅色版)'}
            </div>
            <div className="h-8 bg-blue-500 dark:bg-blue-600 rounded flex items-center justify-center text-white text-sm">
              蓝色 {actualTheme === 'dark' ? '(深色版)' : '(浅色版)'}
            </div>
            <div className="h-8 bg-green-500 dark:bg-green-600 rounded flex items-center justify-center text-white text-sm">
              绿色 {actualTheme === 'dark' ? '(深色版)' : '(浅色版)'}
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">文本测试</h3>
          <div className="space-y-2">
            <p className="text-gray-900 dark:text-gray-100">主要文本颜色</p>
            <p className="text-gray-700 dark:text-gray-300">次要文本颜色</p>
            <p className="text-gray-500 dark:text-gray-500">提示文本颜色</p>
            <p className="text-blue-600 dark:text-blue-400">链接文本颜色</p>
          </div>
        </div>
      </div>

      {/* 故障排除 */}
      <div className="bg-yellow-50 dark:bg-yellow-900 border border-yellow-200 dark:border-yellow-700 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-yellow-800 dark:text-yellow-200 mb-4">
          🚨 故障排除检查列表
        </h2>
        
        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-2">
            <span className={htmlClasses.includes('dark') || htmlClasses.includes('light') ? 'text-green-600' : 'text-red-600'}>
              {htmlClasses.includes('dark') || htmlClasses.includes('light') ? '✅' : '❌'}
            </span>
            <div>
              <strong>HTML 类名:</strong> {htmlClasses || "未检测到主题类"}
              <br />
              <span className="text-gray-600 dark:text-gray-400">
                应该包含 &apos;dark&apos; 或 &apos;light&apos; 类
              </span>
            </div>
          </div>
          
          <div className="flex items-start gap-2">
            <span className="text-green-600">✅</span>
            <div>
              <strong>Tailwind 配置:</strong> darkMode: &apos;class&apos; 已启用
              <br />
              <span className="text-gray-600 dark:text-gray-400">
                在 tailwind.config.js 中配置
              </span>
            </div>
          </div>
          
          <div className="flex items-start gap-2">
            <span className="text-green-600">✅</span>
            <div>
              <strong>ThemeProvider:</strong> 已正确包装应用
              <br />
              <span className="text-gray-600 dark:text-gray-400">
                在 layout.tsx 中使用
              </span>
            </div>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-white dark:bg-gray-800 rounded border">
          <strong className="text-gray-900 dark:text-gray-100">💡 如果主题切换不工作:</strong>
          <ol className="mt-2 ml-4 list-decimal text-gray-700 dark:text-gray-300 text-sm">
            <li>检查浏览器控制台是否有错误</li>
            <li>确认 HTML 元素上是否有 &apos;dark&apos; 或 &apos;light&apos; 类</li>
            <li>验证 CSS 变量是否正确定义</li>
            <li>重启开发服务器</li>
          </ol>
        </div>
      </div>
    </div>
  );
} 