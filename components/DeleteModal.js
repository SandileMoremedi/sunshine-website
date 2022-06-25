import { useContext } from "react";
import { ProductsContext } from "./ProductsProvider";
export default function DeleteModal() {
  const { dispatch, state } = useContext(ProductsContext);
  return (
    state.deleteState && (
      <div className="deleteModal__background">
        <div className="deleteModal">
          <h3>Are Sure You Want To Delete This?</h3>
          <p>
            By deleting this there is no way of returning the result of the
            action.
          </p>
          <div className="buttons__delete">
            <button
              className="cancel__delete"
              onClick={() => {
                dispatch({ type: "CANCEL_PRODUCT" });
              }}
            >
              Cancel
            </button>
            <button
              className="delete__confirm"
              onClick={() => {
                dispatch({ type: "DELETE_PRODUCT", payload: state.deleteId });
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    )
  );
}
