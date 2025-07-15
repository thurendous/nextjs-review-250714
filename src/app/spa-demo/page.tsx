'use client';

import { useState, useEffect } from 'react';

// 模拟 API 数据
const mockTodos = [
  { id: 1, text: '学习 Next.js', completed: false },
  { id: 2, text: '构建纯前端应用', completed: true },
  { id: 3, text: '部署到静态托管', completed: false },
];

export default function SPADemo() {
  const [todos, setTodos] = useState(mockTodos);
  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState('all');
  const [mounted, setMounted] = useState(false);

  // 防止服务端渲染不一致
  useEffect(() => {
    setMounted(true);
    // 模拟从 localStorage 加载数据
    const saved = localStorage.getItem('spa-todos');
    if (saved) {
      setTodos(JSON.parse(saved));
    }
  }, []);

  // 保存到 localStorage
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('spa-todos', JSON.stringify(todos));
    }
  }, [todos, mounted]);

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: newTodo.trim(),
        completed: false
      }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  if (!mounted) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial", maxWidth: "600px", margin: "0 auto" }}>
      <h1>📱 纯前端 SPA 演示 - Todo 应用</h1>
      
      <div style={{ backgroundColor: "#e8f5e8", padding: "15px", borderRadius: "5px", marginBottom: "20px" }}>
        <h3>🎯 这是一个完全在浏览器中运行的应用</h3>
        <ul>
          <li>✅ 使用 localStorage 持久化数据</li>
          <li>✅ 客户端状态管理</li>
          <li>✅ 响应式交互</li>
          <li>✅ 可以静态部署</li>
        </ul>
      </div>

      {/* 添加新 Todo */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="添加新任务..."
          style={{
            padding: "10px",
            marginRight: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            width: "300px"
          }}
        />
        <button
          onClick={addTodo}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          添加
        </button>
      </div>

      {/* 过滤器 */}
      <div style={{ marginBottom: "20px" }}>
        {(['all', 'active', 'completed'] as const).map(filterType => (
          <button
            key={filterType}
            onClick={() => setFilter(filterType)}
            style={{
              padding: "8px 16px",
              marginRight: "10px",
              backgroundColor: filter === filterType ? "#007bff" : "#f8f9fa",
              color: filter === filterType ? "white" : "#333",
              border: "1px solid #ccc",
              borderRadius: "4px",
              cursor: "pointer"
            }}
          >
            {filterType === 'all' ? '全部' : filterType === 'active' ? '待完成' : '已完成'}
          </button>
        ))}
      </div>

      {/* Todo 列表 */}
      <div>
        {filteredTodos.length === 0 ? (
          <p style={{ textAlign: "center", color: "#666", fontStyle: "italic" }}>
            {filter === 'all' ? '暂无任务' : filter === 'active' ? '没有待完成任务' : '没有已完成任务'}
          </p>
        ) : (
          filteredTodos.map(todo => (
            <div
              key={todo.id}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px",
                marginBottom: "8px",
                backgroundColor: todo.completed ? "#f8f9fa" : "white",
                border: "1px solid #eee",
                borderRadius: "4px"
              }}
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                style={{ marginRight: "10px" }}
              />
              <span
                style={{
                  flex: 1,
                  textDecoration: todo.completed ? "line-through" : "none",
                  color: todo.completed ? "#666" : "#333"
                }}
              >
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                style={{
                  padding: "4px 8px",
                  backgroundColor: "#dc3545",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "12px"
                }}
              >
                删除
              </button>
            </div>
          ))
        )}
      </div>

      {/* 统计信息 */}
      <div style={{ 
        marginTop: "20px", 
        padding: "15px", 
        backgroundColor: "#f8f9fa", 
        borderRadius: "4px",
        textAlign: "center"
      }}>
        <p>
          总计: {todos.length} | 
          待完成: {todos.filter(t => !t.completed).length} | 
          已完成: {todos.filter(t => t.completed).length}
        </p>
      </div>

      {/* 技术说明 */}
      <div style={{ 
        marginTop: "30px", 
        padding: "15px", 
        backgroundColor: "#fff3cd", 
        borderRadius: "4px",
        border: "1px solid #ffeaa7"
      }}>
        <h4>💡 技术特点</h4>
        <ul>
          <li><strong>纯客户端</strong>：所有逻辑都在浏览器中执行</li>
          <li><strong>本地存储</strong>：数据保存在浏览器 localStorage 中</li>
          <li><strong>状态管理</strong>：使用 React useState 管理应用状态</li>
          <li><strong>响应式</strong>：实时更新UI，无需刷新页面</li>
          <li><strong>可部署</strong>：可以构建为静态文件部署到任何CDN</li>
        </ul>
      </div>

      {/* 构建部署说明 */}
      <div style={{ 
        marginTop: "20px", 
        padding: "15px", 
        backgroundColor: "#e8f5e8", 
        borderRadius: "4px"
      }}>
        <h4>🚀 部署步骤</h4>
        <pre style={{ backgroundColor: "#f8f8f8", padding: "10px", borderRadius: "3px" }}>
{`# 1. 配置 next.config.ts
output: 'export'

# 2. 构建应用
npm run build

# 3. 部署 out/ 目录到静态托管
# - Vercel: vercel --prod
# - Netlify: netlify deploy --prod  
# - GitHub Pages: gh-pages -d out`}
        </pre>
      </div>
    </div>
  );
} 