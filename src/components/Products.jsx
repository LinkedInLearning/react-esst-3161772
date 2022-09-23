import {
  useDeferredValue,
  useEffect,
  useMemo,
  useState,
  useTransition,
} from "react";
import { getRandomName } from "../getRandomName";

// Die Zahl je nach Performance des Computers anpassen
const PRODUCTS_PER_LIST = 5_000_000;

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
  const [searchText, setSearchText] = useState("");
  const delayedSearchText = useDeferredValue(searchText);
  const allProducts = useMemo(() => generateProducts(), []);

  const filteredProducts = useMemo(
    () =>
      allProducts.filter((product) => {
        return product.name
          .toLowerCase()
          .includes(delayedSearchText);
      }),
    [delayedSearchText]
  );

  return (
    <div className="product-list">
      <div className="filterbox">
        <input
          type="text"
          placeholder="Hier filtern"
          onChange={(e) => setSearchText(e.target.value)}
        />
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

export function Products() {
  return (
    <div className="product-lists">
      <SingleProductList />
    </div>
  );
}
