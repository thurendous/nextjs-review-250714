'use client';

import { ThemeToggle, SimpleThemeToggle } from '../_components/ThemeToggle';
import { useTheme } from '../_components/ThemeProvider';

export default function ThemeDemo() {
  const { theme, actualTheme } = useTheme();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          🌓 主题切换演示
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          体验完整的 Dark/Light 模式切换功能
        </p>
      </div>

      {/* 当前状态显示 */}
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 mb-8 border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">当前状态</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
            <h3 className="font-semibold text-blue-800 dark:text-blue-200">设置的主题</h3>
            <p className="text-blue-600 dark:text-blue-300 text-xl font-mono">{theme}</p>
          </div>
          <div className="p-4 bg-green-50 dark:bg-green-900 rounded-lg">
            <h3 className="font-semibold text-green-800 dark:text-green-200">实际显示</h3>
            <p className="text-green-600 dark:text-green-300 text-xl font-mono">{actualTheme}</p>
          </div>
        </div>
      </div>

      {/* 主题切换控件 */}
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 mb-8 border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">主题切换控件</h2>
        <div className="space-y-6">
          
          {/* 完整切换按钮 */}
          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">完整主题切换</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Light → Dark → System → Light</p>
            </div>
            <ThemeToggle />
          </div>

          {/* 简单切换按钮 */}
          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">简单切换</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Light ↔ Dark</p>
            </div>
            <SimpleThemeToggle />
          </div>
        </div>
      </div>

      {/* 视觉效果演示 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        
        {/* 浅色模式预览 */}
        <div className="bg-white border-2 border-yellow-400 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">☀️</span>
            <h3 className="text-xl font-bold text-gray-900">浅色模式</h3>
          </div>
          <div className="space-y-3">
            <div className="h-4 bg-blue-500 rounded"></div>
            <div className="h-4 bg-green-500 rounded w-3/4"></div>
            <div className="h-4 bg-purple-500 rounded w-1/2"></div>
            <div className="p-3 bg-gray-100 text-gray-800 rounded text-sm">
              明亮清爽的界面设计，适合白天使用
            </div>
          </div>
        </div>

        {/* 深色模式预览 */}
        <div className="bg-gray-900 border-2 border-blue-400 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🌙</span>
            <h3 className="text-xl font-bold text-white">深色模式</h3>
          </div>
          <div className="space-y-3">
            <div className="h-4 bg-blue-400 rounded"></div>
            <div className="h-4 bg-green-400 rounded w-3/4"></div>
            <div className="h-4 bg-purple-400 rounded w-1/2"></div>
            <div className="p-3 bg-gray-800 text-gray-200 rounded text-sm">
              护眼的深色界面，适合夜间使用
            </div>
          </div>
        </div>
      </div>

      {/* 组件展示 */}
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 mb-8 border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">响应式组件展示</h2>
        
        {/* 按钮组 */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">按钮样式</h3>
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-lg transition-colors">
              主要按钮
            </button>
            <button className="px-4 py-2 bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white rounded-lg transition-colors">
              成功按钮
            </button>
            <button className="px-4 py-2 bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 text-white rounded-lg transition-colors">
              危险按钮
            </button>
            <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
              次要按钮
            </button>
          </div>
        </div>

        {/* 卡片组 */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">卡片样式</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-700 rounded-lg">
              <h4 className="font-semibold text-red-800 dark:text-red-200">错误提示</h4>
              <p className="text-red-600 dark:text-red-300 text-sm">这是一个错误消息</p>
            </div>
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900 border border-yellow-200 dark:border-yellow-700 rounded-lg">
              <h4 className="font-semibold text-yellow-800 dark:text-yellow-200">警告提示</h4>
              <p className="text-yellow-600 dark:text-yellow-300 text-sm">这是一个警告消息</p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded-lg">
              <h4 className="font-semibold text-green-800 dark:text-green-200">成功提示</h4>
              <p className="text-green-600 dark:text-green-300 text-sm">这是一个成功消息</p>
            </div>
          </div>
        </div>

        {/* 表单元素 */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">表单元素</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                输入框
              </label>
              <input
                type="text"
                placeholder="请输入内容..."
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                选择框
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors">
                <option>选项 1</option>
                <option>选项 2</option>
                <option>选项 3</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* 功能特点 */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900 rounded-xl p-6 border border-blue-200 dark:border-blue-700">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">功能特点</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <span className="text-green-500 text-xl">✅</span>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">自动保存</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">主题选择自动保存到 localStorage</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-green-500 text-xl">✅</span>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">平滑过渡</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">主题切换有 0.3s 的动画效果</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-green-500 text-xl">✅</span>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">系统同步</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">支持跟随系统主题设置</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-green-500 text-xl">✅</span>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">全局生效</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">整个应用统一的主题管理</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 