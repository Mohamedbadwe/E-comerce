import ProductCard from "@/app/_compoents/ProductCard/ProductCard";
import { ProductType, SingleType } from "@/app/types/route.misr";
import { Brandcard, BrandDetails } from "@/Servies/routemisr.servies";
import Link from "next/link";
import React from "react";

export default async function page(props: { params: { id: string } }) {
  const params = await props.params;
  const id = params.id;
  const Brandcards: SingleType | null = await Brandcard(id);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {!Brandcards ? (
        <div className="col-span-full text-center text-gray-500 text-lg">
          No products available for this brand 😢
        </div>
      ) : (
        Brandcards.map((product) => (
          <Link href={`/productdetails/${product.id}`} key={product.id}>
            <ProductCard product={product} />
          </Link>
        ))
      )}
    </div>
  );
}
