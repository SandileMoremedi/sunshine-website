import { createContext, useReducer } from "react";
import sanityconfig from "../sanityconfig";
const initialValues = {
  products: 0,
  listItems: [],
  popup: false,
  total: 0,
  deleteState: false,
  deleteId: "",
  user: null,
};

const ProductsContext = createContext(initialValues);

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    // Adding an item in the cart and updating the listItems
    case "ADDED_AN_ITEM_TO_CART":
      return {
        products: state.products + 1,
        listItems: [...state.listItems, payload],
        popup: true,
        total: state.total + payload.price,
      };
      break;

    //Logging in to the app and the changing the state of the app
    case "LOGGED_IN":
      return {
        ...state,
        user: payload,
      };
      break;

    //Logging out to the app and changing the state of the app
    case "LOGGED_OUT":
      return {
        ...state,
        user: null,
      };
      break;

    // Removing items from the listItems
    case "REMOVED_AN_ITEM":
      var newArray = [...state.listItems];
      var index = newArray.findIndex((element) => element.id === payload.id);
      newArray.splice(index, 1);

      return {
        products: state.products - 1,
        listItems: newArray,
        popup: false,
        total: state.total - payload.price,
        authentication: null,
      };
      break;

    // After adding an item, we need to show a popup
    case "POPUP_CLOSE":
      return {
        ...state,
        popup: false,
      };
      break;

    // Adding a product number

    case "ADD_PRODUCT":
      return {
        ...state,
        payload,
      };
      break;

    // Subtracting the number of products being ordered
    case "MINUS_PRODUCT":
      return {
        ...state,
        payload,
      };
      break;

    // Removing a product from the products from Sanity.io
    case "DELETE_PRODUCT":
      sanityconfig.delete(payload);
      return {
        ...state,
      };
      break;

    //Showing a modal for deleting items
    case "DELETE_ACTIVATE":
      return {
        ...state,
        deleteState: true,
        deleteId: payload._id,
      };
      break;

    // Removing the modal and cancelling the process
    case "CANCEL_PRODUCT":
      return {
        ...state,
        deleteState: false,
        deleteId: "",
      };
      break;
    default:
      return state;
      break;
  }
};

// Making the provider to pass at the _app file
function ProductsProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialValues);

  return (
    <ProductsContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductsContext.Provider>
  );
}

export { ProductsContext, ProductsProvider };
