import React, { useState } from 'react';
import Image from 'next/image';

export default function TestComponent() {
  const [count, setCount] = useState(0);
  
  // 修复依赖问题：添加 count 到依赖数组
  React.useEffect(() => {
    console.log(count);
  }, [count]);
  
  // 修复无障碍性和性能问题：使用 Next.js Image 组件并添加 alt
  return (
    <div>
      <Image src="/test.jpg" alt="Test image" width={100} height={100} />
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  );
} 
