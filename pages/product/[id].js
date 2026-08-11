import { products } from "../../data/products";

export default function ProductPage({ product }) {
  if (!product) return <div className="page">Product not found.</div>;

  return (
    <div className="page">
      <h1>{product.name}</h1>
      <img src={product.images[0]} alt={product.name} />
      <p>${product.price}</p>

      {product.colors && <p>Colors: {product.colors.join(", ")}</p>}
      {product.sizes && <p>Sizes: {product.sizes.join(", ")}</p>}

      <button>Add to Cart</button>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const product = products.find((p) => p.id === id) || null;

  return { props: { product } };
}
