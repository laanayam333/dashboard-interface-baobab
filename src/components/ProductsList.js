import { Link } from "react-router-dom";

const ProductsList = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <Link to={`/products/${product.id}`}>
          <h1>{product.location}</h1>
        </Link>
      ))}
    </div>
  );
};

export default ProductsList;
