"use client";

import { useEffect, useState } from "react";
import { type Products } from "@prisma/client";

export function ProductsList() {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    void fetchProducts();
  }, []);

  return (
    <ul className="list-disc space-y-2">
      {products.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}
