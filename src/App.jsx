import Cart from "./components/Cart";
import ProductList from "./components/ProductList";

function App() {
  return (
    <main className="page-container">
      <div>
        <h1 className="page-title">Desserts</h1>
        <ProductList />
      </div>
      <Cart />
    </main>
  );
}

export default App;
