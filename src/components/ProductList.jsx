import { useMemo, useState, useTransition } from "react";
import { getRandomName } from "../getRandomName";

function hugeProductList() {
  const products = [];

  let count = 0;

  while (++count < 5_000_000) {
    const isHighlighted = count % 2 === 0;
    products.push({
      id: count,
      isHighlighted,
      name: getRandomName(),
    });
  }

  return products;
}

function SingleProductList() {
  const allProducts = useMemo(() => hugeProductList(), []);
  // const [isPending, startTransition] = useTransition();
  const [productsType, setProductsType] = useState("all");

  const filteredProducts =
    productsType === "all"
      ? allProducts
      : allProducts.filter((product) => {
          return product.isHighlighted === true;
        });

  const switchFilterTo = (productsType) => {
    setProductsType(productsType);
  };

  return (
    <div className="product-list">
      <div className="filterbox">
        <button
          type="button"
          onClick={() => switchFilterTo("all")}
        >
          Alle Produkte
        </button>
        <button
          type="button"
          onClick={() => switchFilterTo("highlighted")}
        >
          Nur Hervorgehobene Produkte
        </button>
      </div>

      <ul>
        {filteredProducts.slice(0, 1500).map((product) => {
          return (
            <li key={product.id}>
              {product.isHighlighted && "🎩 "}
              {product.name} (ID={product.id})
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function ProductList() {
  return (
    <div className="double-product-list">
      <SingleProductList />
      <SingleProductList />
    </div>
  );
}
