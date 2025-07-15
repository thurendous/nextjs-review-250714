// 这是一个私有文件夹中的工具文件
// 不会被路由系统识别，只能被其他文件导入使用

export function formatDate(date: Date): string {
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// 常量定义
export const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://api.myapp.com' 
  : 'http://localhost:3001';

export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB 
