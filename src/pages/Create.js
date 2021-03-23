import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("active");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = { location, status };

    setIsPending(true);

    fetch("http://localhost:8000/products/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    }).then(() => {
      console.log("new product added");
      setIsPending(false);
      // // history.go(-1);
      history.push("/");
    });
  };

  return (
    <div>
      <h1>Add a new product</h1>
      <form onSubmit={handleSubmit}>
        <label>Location:</label>
        <input type="text" required value={location} onChange={(e) => setLocation(e.target.value)} />

        <label>Product status:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="active">active</option>
          <option value="inactive">inactive</option>
        </select>

        {!isPending && <button>Add Product</button>}
        {isPending && <button disabled>Add product...</button>}

        <p>{location}</p>
        <p>{status}</p>
      </form>
    </div>
  );
};

export default Create;
