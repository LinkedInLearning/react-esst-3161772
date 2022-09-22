import { useMemo, useState, useTransition } from "react";
import { getRandomName } from "../getRandomName";

function hugeProductList() {
  const products = [];

  let count = 0;

  while (++count < 30000) {
    const isHighlighted = Math.random() > 0.4;
    products.push({
      id: count,
      isHighlighted,
      name: getRandomName(),
    });
  }

  return products;
}

export function Inputs() {
  const allProducts = useMemo(hugeProductList, []);
  const [isPending, startTransition] = useTransition();
  const [productsType, setProductsType] = useState("all");

  const filteredProducts =
    productsType === "all"
      ? allProducts
      : allProducts.filter((product) => {
          return product.isHighlighted === true;
        });

  const switchFilterTo = (productsType) => {
    startTransition(() => {
      setProductsType(productsType);
    });
  };

  return (
    <ul>
      <h1>Produkte</h1>

      {isPending && "Verarbeite Daten..."}

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

      {filteredProducts.map((product) => {
        return (
          <li key={product.id}>
            {product.isHighlighted && "🤩 "}
            {product.name} (ID={product.id})
          </li>
        );
      })}
    </ul>
  );
}
