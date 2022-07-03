import { useContext } from "react";
import { ProductsContext } from "./ProductsProvider";
export default function DeleteModal() {
  const { dispatch, state } = useContext(ProductsContext);
  if (state.deleteState) {
    return (
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
    );
  }
  if (state.editState) {
    return (
      <div className="deleteModal__background">
        <div className="editModal">
          <div className="editModal__top">
            <h3>Edit Products</h3>
            <button>X</button>
          </div>
          <form className="editModal__form">
            <label htmlFor="title">Title</label>
            <input type="text" placeholder="e.g. Omo" id="title" />
            <label htmlFor="price">Price</label>
            <input type="number" placeholder="e.g 500" id="price" />
            <label htmlFor="description">Description</label>
            <label htmlFor="input">Image</label>
            <input type="file" name="image" id="image" />
          </form>
        </div>
      </div>
    );
  }
  if (state.addingProduct) {
    return (
      <div className="deleteModal__background">
        <div className="addForm">
          <h1>Add Product</h1>
          <form className="addingProducts">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" placeholder="e.g. Omo Detergent" />
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="10"
            ></textarea>
            <label htmlFor="image">Image</label>
            <input type="file" id="image" />
            <label htmlFor="quantity">Quantity Currently Available</label>
            <input type="number" id="quantity" />
          </form>
          <div className="buttons">
            <button
              type="button"
              className="cancel"
              onClick={() => dispatch({ type: "CANCEL_PRODUCT" })}
            >
              Cancel
            </button>
            <button
              type="button"
              className="delete"
              onClick={() => {
                dispatch({ type: "CANCEL_PRODUCT" });
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}
