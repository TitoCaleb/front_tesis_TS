import { useEffect, useState } from "react";
import Carditem from "../Components/Carditem";
import Searchbar from "../Components/Searchbar";
import { Product } from "../Domain/Producto";

function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:4000/api/v1/products", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await data.json();
      setProducts(result);
    };
    fetchData();
  }, []);

  return (
    <section id="body">
      <div className="searchbar_section">
        <Searchbar />
      </div>

      <div className="title_section">
        <h1>Productos</h1>
      </div>

      <div className="card_section">
        {products.map((product) => (
          <Carditem key={product.id} producto={product} />
        ))}
      </div>
    </section>
  );
}

export default Home;
