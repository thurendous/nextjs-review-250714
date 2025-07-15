'use client';

import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
        计数器示例
      </h1>
      
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <div className="text-center">
          <div className="text-6xl font-bold text-blue-600 dark:text-blue-400 mb-6">
            {count}
          </div>
          
          <div className="space-x-4">
            <button
              onClick={() => setCount(count - 1)}
              className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-colors"
            >
              减少
            </button>
            
            <button
              onClick={() => setCount(0)}
              className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors"
            >
              重置
            </button>
            
            <button
              onClick={() => setCount(count + 1)}
              className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
            >
              增加
            </button>
          </div>
        </div>
      </div>
      
      <p className="mt-6 text-gray-600 dark:text-gray-400 text-center max-w-md">
        这是一个客户端组件示例，使用 useState 来管理状态。
        注意页面的 metadata 是在服务器组件中定义的。
      </p>
    </div>
  );
} 