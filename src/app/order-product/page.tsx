'use client'
import { useRouter } from 'next/navigation';

export default function OrderProduct() {
    const router = useRouter();
  return (
    <div>
      <h1>Order Product</h1>
      <button onClick={() => router.push('/')}>
        Click order product
      </button>
    </div>
  );
}
