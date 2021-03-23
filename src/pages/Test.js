import useFetch from "hooks/useFetch";
import ProductsList from "components/ProductsList";

const Test = () => {
  const { data: products, isPending, error } = useFetch("http://localhost:8000/products");

  console.log(products);

  return (
    <div>
      <h2>TestPage</h2>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {products && <ProductsList products={products} />}
    </div>
  );
};

export default Test;
