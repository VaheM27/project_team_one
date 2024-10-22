import { useReducer } from "react";
import { shopReducer, initialState } from "./shopReducer";

import "./Shop.css";


const ShopPage = () => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const filterByPriceRange = (min, max) => {
    dispatch({ type: "FILTER_BY_PRICE", payload: [min, max] });
    dispatch({ type: "APPLY_FILTERS" });
  };

  const filterByBrand = (brand) => {
    dispatch({ type: "FILTER_BY_BRAND", payload: brand });
    dispatch({ type: "APPLY_FILTERS" });
  };

  const filterByColor = (color) => {
    dispatch({ type: "FILTER_BY_COLOR", payload: color });
    dispatch({ type: "APPLY_FILTERS" });
  };

  const filterBySize = (size) => {
    dispatch({ type: "FILTER_BY_SIZE", payload: size });
    dispatch({ type: "APPLY_FILTERS" });
  };
  

  return (
    <div className="shop-page">
      <aside className="filter-section">
        <h1 className="filter-title">Filters</h1>

        <h3 className="filter-heading">Sizes</h3>
        <div className="size-section">
          <ul className="size-filters">
            {["S", "M", "L", "XL"].map((size) => (
              <li key={size} onClick={() => filterBySize(size)}>
                {size}
              </li>
            ))}
          </ul>
        </div>

        <h2 className="filter-heading">Colors</h2>
        <div className="color-filters">
          {[
            "#FF5733",
            "#33FF57",
            "#3357FF",
            "#FF33F6",
            "#5733FF",
            "#FF33A1",
            "#33FFF6",
            "#F6FF33",
            "#57FF33",
            "#3357F6",
          ].map((color, index) => (
            <div
              key={index}
              className="color-box"
              onClick={() => filterByColor(color)}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        <h2 className="filter-heading">Prices</h2>
        <ul className="price-filters">
          <li onClick={() => filterByPriceRange(0, 50)}>$0 - $50</li>
          <li onClick={() => filterByPriceRange(50, 100)}>$50 - $100</li>
          <li onClick={() => filterByPriceRange(100, 150)}>$100 - $150</li>
          <li onClick={() => filterByPriceRange(150, 200)}>$150 - $200</li>
          <li onClick={() => filterByPriceRange(200, 300)}>$200 - $300</li>
        </ul>

        <h2 className="filter-heading">Brands</h2>
        <div className="brand-section">
          <ul className="brand-filters">
            {["Minimog", "Retrolie", "Brook", "Learts", "Vagabond", "Abby"].map(
              (brand) => (
                <li key={brand} onClick={() => filterByBrand(brand)}>
                  {brand}
                </li>
              )
            )}
          </ul>
        </div>
      </aside>

      <div className="product-list">
        <div className="products">
          {state.filteredProducts.length > 0 ? (
            state.filteredProducts.map((product) => (
              <div key={product.id} className="product">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">Price: ${product.price}</p>
                <div className="color-palette">
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className="color-box"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <p className="product-sizes">
                  Sizes: {product.sizes.join(", ")}
                </p>
              </div>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>
    </div>

  );
};

export default ShopPage;