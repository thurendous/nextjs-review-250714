import { notFound } from "next/navigation";

export default async function Review({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  if (Number(reviewId) > 1000) {
    return notFound();  
  }
  return <div>Review {reviewId} for Product {productId}</div>;
}
