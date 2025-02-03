import React, { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import "../styles.css";

export default function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const PAGE_SIZE = 10;
  const totalPages = Math.ceil(products.length / PAGE_SIZE);
  const fetchProducts = async () => {
    const json = await fetch("https://dummyjson.com/products?limit=500");
    const data = await json.json();
    setProducts(data?.products);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  const handlePageClick = (n) => {
    setPage(n);
  };
  const start = page * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const handlePrevPage = () => {
    setPage((prevpage) => prevpage - 1);
  };
  const handleNextPage = () => {
    setPage((prevpage) => prevpage + 1);
  };
  return (
    <div className="App">
      <h2>Pagination </h2>
      <button className="page" onClick={handlePrevPage} disabled={page === 0}>
        ◀️
      </button>
      {[...Array(totalPages).keys()].map((ele) => (
        <span
          className={`page ${ele === page ? "active-page" : null}`}
          onClick={() => handlePageClick(ele)}
        >
          {ele}
        </span>
      ))}
      <button
        className="page"
        onClick={handleNextPage}
        disabled={page === totalPages - 1}
      >
        ▶️
      </button>

      <div className="product-container">
        {products?.slice(start, end).map((product) => {
          return <ProductCard product={product} />;
        })}
      </div>
    </div>
  );
}
