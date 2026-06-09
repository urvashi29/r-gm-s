import React, {
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { fetchProducts } from "./services/productService";
import ProductList from "./components/ProductList";
// import Cart from "./components/Cart";
import SearchBar from "./components/SearchBar";
import useDebounce from "./hooks/useDebounce";
import ErrorBoundary from "./components/ErrorBoundary";

const Cart = React.lazy(() => import("./components/Cart"));

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const debounceSearch = useDebounce(search);

  const loadProducts = async () => {
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const filterProducts = useMemo(() => {
    console.log("filtering products");

    return products.filter((p) => {
      console.log(`${p.title} product`);
      return p.title.toLowerCase().includes(debounceSearch.toLowerCase());
    });
  }, [debounceSearch, products]);

  const addToCart = useCallback((product) => {
    console.log("product added!");
    setCart((prev) => [...prev, product]);
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <ErrorBoundary>
      <div style={{ display: "flex", padding: "20;x" }}>
        <div style={{ flex: 2 }}>
          <SearchBar value={debounceSearch} change={setSearch} />
          <ProductList products={filterProducts} addToCart={addToCart} />
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <Cart cart={cart} />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
};

export default App;
