'use client';

import { useState } from 'react';

export function ClientComponentDemo() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setCount(count + 1);
    setMessage(`你点击了 ${count + 1} 次！`);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
        客户端组件示例
      </h3>
      
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <button
            onClick={handleClick}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
          >
            点击我 ({count})
          </button>
          
          <button
            onClick={() => {
              setCount(0);
              setMessage('');
            }}
            className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors"
          >
            重置
          </button>
        </div>
        
        {message && (
          <div className="p-3 bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 rounded">
            {message}
          </div>
        )}
        
        <div className="text-sm text-gray-600 dark:text-gray-400">
          <p>💡 <strong>注意</strong>：这个组件使用了 &apos;use client&apos; 指令</p>
          <p>🔍 <strong>功能</strong>：包含 useState 和事件处理</p>
          <p>📝 <strong>重点</strong>：metadata 不在这里定义，而是在页面文件中</p>
        </div>
      </div>
    </div>
  );
} 