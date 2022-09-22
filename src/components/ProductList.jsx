import { useMemo, useState, useTransition } from "react";
import { getRandomName } from "../getRandomName";

// Die Zahl je nach Performance des Computers anpassen
const PRODUCTS_PER_LIST = 20_000_000;

/**
 * Generate Random Products
 * @returns Array<{
 *  id: number,
 *  name: string,
 *  isHighlighted: boolean
 * }>
 */
function generateProducts() {
  const products = [];

  let count = 0;

  while (++count < PRODUCTS_PER_LIST) {
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
  const [isPending, startTransition] = useTransition();
  const allProducts = useMemo(() => generateProducts(), []);

  const [showOnlyHighlighted, setShowOnlyHighlighted] =
    useState(false);

  const filteredProducts = allProducts.filter((product) => {
    return !showOnlyHighlighted || product.isHighlighted;
  });

  const switchProductFilter = (highlightedOnly) => {
    startTransition(() => {
      setShowOnlyHighlighted(highlightedOnly);
    });
  };

  return (
    <div
      className="product-list"
      style={{ opacity: isPending ? "0.5" : "1" }}
    >
      <div className="filterbox">
        <button
          type="button"
          className={!showOnlyHighlighted ? "active" : ""}
          onClick={() => switchProductFilter(false)}
        >
          Alle Produkte
        </button>
        <button
          type="button"
          className={showOnlyHighlighted ? "active" : ""}
          onClick={() => switchProductFilter(true)}
        >
          Nur Hervorgehobene Produkte
        </button>
      </div>

      <ul>
        {filteredProducts.slice(0, 1500).map((product) => {
          return (
            <li
              key={product.id}
              onClick={() =>
                console.log("Clicked ", product.name)
              }
            >
              {product.isHighlighted && "🌈 "}
              {product.name}
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
