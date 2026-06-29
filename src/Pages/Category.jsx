import { useParams } from "react-router-dom";
import { products } from "../data/products";

export default function CategoryPage() {
  const { slug } = useParams();

  const categoryProducts = products[slug] || [];

  return (
    <div className="container">
      <h2>{slug.replace(/-/g, " ")}</h2>

      <div className="row">
        {categoryProducts.map((item) => (
          <div className="col-md-4" key={item.id}>
            <div className="card">
              <img src={item.image} alt={item.name} />
              <h5>{item.name}</h5>
              <p>₹ {item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}