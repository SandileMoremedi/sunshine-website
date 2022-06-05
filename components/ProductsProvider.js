import { createContext, useReducer } from "react";
const initialValues = {
  products: 0,
  listItems: [],
  popup: false,
  total: 0,
};

const ProductsContext = createContext(initialValues);

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADDED_AN_ITEM_TO_CART":
      return {
        products: state.products + 1,
        listItems: [...state.listItems, payload],
        popup: true,
        total: state.total + payload.price,
      };
      break;
    case "REMOVED_AN_ITEM":
      var newArray = [...state.listItems];
      var index = newArray.findIndex((element) => element.id === payload.id);
      newArray.splice(index, 1);

      return {
        products: state.products - 1,
        listItems: newArray,
        popup: false,
        total: state.total - payload.price,
      };
      break;
    case "POPUP_CLOSE":
      return {
        ...state,
        popup: false,
      };
      break;

    case "ADD_PRODUCT":
      return {
        ...state,
        payload,
      };
      break;
    case "MINUS_PRODUCT":
      return {
        ...state,
        payload,
      };
      break;
    default:
      return state;
      break;
  }
};

function ProductsProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialValues);

  return (
    <ProductsContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductsContext.Provider>
  );
}

export { ProductsContext, ProductsProvider };
