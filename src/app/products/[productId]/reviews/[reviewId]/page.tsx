import { notFound } from "next/navigation"; 

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export default async function Review({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;

  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error('Error Loading Review');
  }
  if (Number(reviewId) > 1000) {
    return notFound();  
  }
  return <div>Review {reviewId} for Product {productId}</div>;
}
