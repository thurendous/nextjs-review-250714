"use client";
import { useParams } from "next/navigation";

export default function NotFound() {
  const params = useParams();
  const productId = params.productId;
  const reviewId = params.reviewId;
  return (
    <div>
      <h1>404 - Review Not Found</h1>
      <p>
        The review you are looking for does not exist. Product {productId}
      </p>
      <p>Review {reviewId}</p>
    </div>
  );
}
