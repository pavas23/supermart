import productContext from "./ProductContext";
import { useState } from "react";

const ProductState = (props) => {
  const [product, setProduct] = useState({});

  return (
    <productContext.Provider
      value={{
        product: product,
        setProduct: setProduct,
      }}
    >
      {props.children}
    </productContext.Provider>
  );
};

export default ProductState;
