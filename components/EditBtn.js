import { ProductsContext } from "./ProductsProvider";
import { useContext } from "react";
const EditBtn = () => {
  const { state, dispatch } = useContext(ProductsContext);
  return (
    <button
      className="edit"
      type="button"
      onClick={() => dispatch({ type: "EDIT_PRODUCT" })}
    >
      Edit
    </button>
  );
};
export default EditBtn;
