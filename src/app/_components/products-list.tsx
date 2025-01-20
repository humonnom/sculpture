"use client";

import { api } from "~/trpc/react";

export function ProductsList() {
  const { data: products, isLoading, error } = api.products.getAll.useQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!products) return <div>No products found</div>;

  return (
    <ul className="list-disc space-y-2">
      {products.map((product) => (
        <li key={product.id} className="rounded-lg border p-4 shadow-sm">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-600">
            {product.width}x{product.height}x{product.depth}mm
          </p>
          <p className="text-gray-700">by {product.artist_name}</p>
          <p className="text-gray-500">
            {product.material} ({product.year})
          </p>
        </li>
      ))}
    </ul>
  );
}
