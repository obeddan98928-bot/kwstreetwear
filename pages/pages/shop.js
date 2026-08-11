import { products } from "../data/products";

export default function Shop() {
  return (
    <div className="page">
      <h1>Shop</h1>
      <div className="grid">
        {products.map((p) => (
          <a key={p.id} href={`/product/${p.id}`} className="card">
            <img src={p.images[0]} alt={p.name} />
            <h3>{p.name}</h3>
            <p>${p.price}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
