import { useContext } from "react";
import { ProductsContext } from "./ProductsProvider";
const DeleteBtn = ({ product }) => {
  const { dispatch } = useContext(ProductsContext);
  return (
    <button
      className="delete"
      onClick={() => {
        dispatch({
          type: "DELETE_ACTIVATE",
          payload: product,
        });
      }}
    >
      Delete
    </button>
  );
};
export default DeleteBtn;
