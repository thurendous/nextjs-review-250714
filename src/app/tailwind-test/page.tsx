import { ThemeToggle } from '../_components/ThemeToggle';

export default function TailwindTest() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">🎨 Tailwind CSS 测试页面</h1>
        <ThemeToggle />
      </div>
      
      <div className="bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-600 text-green-700 dark:text-green-300 px-4 py-3 rounded mb-6">
        <strong>✅ 成功！</strong> 如果你能看到这个提示框，说明 Tailwind CSS 正在工作！现在还支持深色模式切换！
      </div>

      {/* 主题切换演示 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">🌓 主题切换演示</h2>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            点击右上角的按钮来切换主题模式。这个页面会实时响应主题变化！
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded border border-blue-200 dark:border-blue-700">
              <h3 className="font-semibold text-blue-800 dark:text-blue-200">浅色模式</h3>
              <p className="text-blue-600 dark:text-blue-300">明亮清爽的界面设计</p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900 rounded border border-purple-200 dark:border-purple-700">
              <h3 className="font-semibold text-purple-800 dark:text-purple-200">深色模式</h3>
              <p className="text-purple-600 dark:text-purple-300">护眼的暗色界面设计</p>
            </div>
          </div>
        </div>
      </section>

      {/* 颜色测试 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">颜色测试</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-red-500 dark:bg-red-600 text-white p-4 rounded text-center">红色</div>
          <div className="bg-blue-500 dark:bg-blue-600 text-white p-4 rounded text-center">蓝色</div>
          <div className="bg-green-500 dark:bg-green-600 text-white p-4 rounded text-center">绿色</div>
          <div className="bg-yellow-500 dark:bg-yellow-600 text-black dark:text-white p-4 rounded text-center">黄色</div>
        </div>
      </section>

      {/* 布局测试 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">布局测试</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 bg-blue-50 dark:bg-blue-900 p-4 rounded border border-blue-200 dark:border-blue-700">
            <h3 className="font-semibold text-blue-800 dark:text-blue-200">响应式列 1</h3>
            <p className="text-blue-600 dark:text-blue-300">这是第一列，在移动设备上会堆叠显示</p>
          </div>
          <div className="flex-1 bg-purple-50 dark:bg-purple-900 p-4 rounded border border-purple-200 dark:border-purple-700">
            <h3 className="font-semibold text-purple-800 dark:text-purple-200">响应式列 2</h3>
            <p className="text-purple-600 dark:text-purple-300">这是第二列，在桌面设备上会并排显示</p>
          </div>
        </div>
      </section>

      {/* 组件测试 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">组件测试</h2>
        <div className="space-y-4">
          {/* 按钮 */}
          <div className="flex flex-wrap gap-3">
            <button className="bg-blue-500 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-800 text-white font-bold py-2 px-4 rounded transition-colors">
              主要按钮
            </button>
            <button className="bg-transparent hover:bg-blue-500 dark:hover:bg-blue-600 text-blue-700 dark:text-blue-400 font-semibold hover:text-white py-2 px-4 border border-blue-500 dark:border-blue-400 hover:border-transparent rounded transition-colors">
              次要按钮
            </button>
            <button className="bg-red-500 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-800 text-white font-bold py-2 px-4 rounded transition-colors">
              危险按钮
            </button>
          </div>

          {/* 卡片 */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">卡片组件</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">这是一个使用 Tailwind CSS 创建的卡片组件，现在支持深色模式！</p>
            <div className="flex justify-between items-center">
              <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm px-2 py-1 rounded">标签</span>
              <button className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">了解更多 →</button>
            </div>
          </div>
        </div>
      </section>

      {/* 工具类测试 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">工具类测试</h2>
        <div className="space-y-2">
          <p className="text-sm text-gray-500 dark:text-gray-400">小号文本</p>
          <p className="text-base text-gray-700 dark:text-gray-300">正常文本</p>
          <p className="text-lg text-gray-800 dark:text-gray-200 font-medium">中号文本</p>
          <p className="text-xl text-gray-900 dark:text-gray-100 font-semibold">大号文本</p>
          <p className="text-2xl text-blue-600 dark:text-blue-400 font-bold">超大文本</p>
        </div>
      </section>

      {/* 间距和边距测试 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">间距测试</h2>
        <div className="space-y-4">
          <div className="p-2 bg-red-200 dark:bg-red-800 border-2 border-red-400 dark:border-red-600 text-red-800 dark:text-red-200 rounded">padding: 8px</div>
          <div className="p-4 bg-green-200 dark:bg-green-800 border-2 border-green-400 dark:border-green-600 text-green-800 dark:text-green-200 rounded">padding: 16px</div>
          <div className="p-6 bg-blue-200 dark:bg-blue-800 border-2 border-blue-400 dark:border-blue-600 text-blue-800 dark:text-blue-200 rounded">padding: 24px</div>
          <div className="p-8 bg-purple-200 dark:bg-purple-800 border-2 border-purple-400 dark:border-purple-600 text-purple-800 dark:text-purple-200 rounded">padding: 32px</div>
        </div>
      </section>

      {/* 状态提示 */}
      <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900 border-l-4 border-blue-400 dark:border-blue-500">
        <div className="flex">
          <div className="flex-shrink-0">
            <div className="w-5 h-5 bg-blue-400 dark:bg-blue-500 rounded-full"></div>
          </div>
          <div className="ml-3">
            <p className="text-sm text-blue-700 dark:text-blue-300">
              <strong>测试完成！</strong> 现在支持深色模式切换，所有样式都会根据主题自动调整。
            </p>
          </div>
        </div>
      </div>

      {/* 主题功能说明 */}
      <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900 border border-yellow-200 dark:border-yellow-700 rounded">
        <h3 className="text-lg font-medium text-yellow-800 dark:text-yellow-200 mb-2">🌓 主题切换功能</h3>
        <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
          <li>• <strong>Light 模式</strong>：明亮的浅色主题</li>
          <li>• <strong>Dark 模式</strong>：护眼的深色主题</li>
          <li>• <strong>System 模式</strong>：跟随系统设置自动切换</li>
          <li>• <strong>记忆功能</strong>：选择会保存在 localStorage 中</li>
          <li>• <strong>平滑过渡</strong>：主题切换有动画效果</li>
        </ul>
      </div>
    </div>
  );
} 