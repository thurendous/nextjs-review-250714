"use client";

import { startTransition, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ErrorBoundary({ 
  error,
  reset 
}: { 
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // 记录错误到控制台（生产环境可以发送到错误监控服务）
    console.error('Review page error:', error);
  }, [error]);

  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 border border-red-200">
        <div className="flex items-center mb-4">
          <div className="bg-red-100 rounded-full p-2 mr-3">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-xl font-bold text-red-800">页面加载出错</h1>
        </div>
        
        <div className="mb-6">
          <p className="text-gray-600 mb-2">很抱歉，评论页面遇到了问题：</p>
          <div className="bg-red-100 border border-red-200 rounded p-3">
            <p className="text-red-700 font-mono text-sm">{error.message}</p>
            {error.digest && (
              <p className="text-red-500 text-xs mt-1">错误ID: {error.digest}</p>
            )}
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => reload()}
            className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors"
          >
            🔄 重试加载
          </button>
          
          <button
            onClick={() => window.history.back()}
            className="w-full bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition-colors"
          >
            ← 返回上一页
          </button>
          
          <button
            onClick={() => window.location.href = '/products'}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          >
            🏠 回到产品列表
          </button>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200">
          <details className="text-sm">
            <summary className="cursor-pointer text-gray-500 hover:text-gray-700">
              技术详情
            </summary>
            <div className="mt-2 space-y-2 text-xs text-gray-600">
              <p><strong>错误类型:</strong> {error.constructor.name}</p>
              <p><strong>发生时间:</strong> {new Date().toLocaleString()}</p>
              <p><strong>页面路径:</strong> {typeof window !== 'undefined' ? window.location.pathname : 'Unknown'}</p>
              {error.stack && (
                <details className="mt-2">
                  <summary className="cursor-pointer text-gray-400">调用栈</summary>
                  <pre className="mt-1 bg-gray-100 p-2 rounded text-xs overflow-auto max-h-32">
                    {error.stack}
                  </pre>
                </details>
              )}
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}
