'use client';

import { useState } from 'react';
import { formatDate, validateEmail, generateId, capitalize, API_BASE_URL, MAX_FILE_SIZE } from '../_lib/utils';

export default function UtilsDemo() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  
  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);
  const isEmailValid = email ? validateEmail(email) : false;
  const randomId = generateId();

  return (
    <div style={{ padding: "20px", fontFamily: "Arial", maxWidth: "800px" }}>
      <h1>Next.js 私有文件夹工具函数演示</h1>
      <p>这个页面演示了如何使用 <code>_lib/utils.ts</code> 中的工具函数。</p>
      
      <div style={{ backgroundColor: "#f5f5f5", padding: "15px", borderRadius: "5px", marginBottom: "20px" }}>
        <h3>📅 日期格式化</h3>
        <p><strong>当前日期：</strong> {formattedDate}</p>
        <code>formatDate(new Date())</code>
      </div>

      <div style={{ backgroundColor: "#f5f5f5", padding: "15px", borderRadius: "5px", marginBottom: "20px" }}>
        <h3>📧 邮箱验证</h3>
        <input
          type="email"
          placeholder="输入邮箱地址"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ 
            padding: "8px", 
            marginRight: "10px", 
            border: "1px solid #ccc", 
            borderRadius: "4px",
            width: "200px"
          }}
        />
        <span style={{ 
          color: isEmailValid ? 'green' : 'red',
          fontWeight: 'bold'
        }}>
          {email ? (isEmailValid ? '✅ 有效' : '❌ 无效') : '请输入邮箱'}
        </span>
        <br />
        <code>validateEmail(&quot;{email}&quot;)</code>
      </div>

      <div style={{ backgroundColor: "#f5f5f5", padding: "15px", borderRadius: "5px", marginBottom: "20px" }}>
        <h3>🆔 随机ID生成</h3>
        <p><strong>随机ID：</strong> <code>{randomId}</code></p>
        <button 
          onClick={() => window.location.reload()}
          style={{ 
            padding: "8px 16px", 
            backgroundColor: "#007bff", 
            color: "white", 
            border: "none", 
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          生成新ID
        </button>
        <br />
        <code>generateId()</code>
      </div>

      <div style={{ backgroundColor: "#f5f5f5", padding: "15px", borderRadius: "5px", marginBottom: "20px" }}>
        <h3>🔤 首字母大写</h3>
        <input
          type="text"
          placeholder="输入文本"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ 
            padding: "8px", 
            marginRight: "10px", 
            border: "1px solid #ccc", 
            borderRadius: "4px",
            width: "200px"
          }}
        />
        <br />
        <p><strong>处理后：</strong> {name ? capitalize(name) : '请输入文本'}</p>
        <code>capitalize(&quot;{name}&quot;)</code>
      </div>

      <div style={{ backgroundColor: "#f5f5f5", padding: "15px", borderRadius: "5px", marginBottom: "20px" }}>
        <h3>🔧 常量演示</h3>
        <p><strong>API Base URL：</strong> <code>{API_BASE_URL}</code></p>
        <p><strong>最大文件大小：</strong> <code>{MAX_FILE_SIZE} 字节</code> ({Math.round(MAX_FILE_SIZE / 1024 / 1024)} MB)</p>
      </div>

      <div style={{ backgroundColor: "#e8f5e8", padding: "15px", borderRadius: "5px" }}>
        <h3>💡 私有文件夹的优势</h3>
        <ul>
          <li>✅ 代码组织清晰</li>
          <li>✅ 避免意外的路由创建</li>
          <li>✅ 逻辑分离明确</li>
          <li>✅ 便于维护和重用</li>
        </ul>
      </div>

      <div style={{ backgroundColor: "#fff3cd", padding: "15px", borderRadius: "5px", marginTop: "20px" }}>
        <h3>📂 文件结构</h3>
        <pre style={{ backgroundColor: "#f8f8f8", padding: "10px", borderRadius: "3px" }}>
{`app/
├── _lib/
│   ├── utils.ts       # 工具函数 (当前演示)
│   └── constants.ts   # 常量定义
├── utils-demo/
│   └── page.tsx       # 当前页面
└── 其他页面...`}
        </pre>
      </div>

      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <p style={{ color: "#666" }}>
          💡 提示：尝试修改输入框中的值，查看实时的函数效果！
        </p>
      </div>
    </div>
  );
} 
