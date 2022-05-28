import { createContext, useReducer } from "react";
const initialValues = {
  products: 0,
  listItems: [],
  authenticated: false,
};

const ProductsContext = createContext(initialValues);

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADDED_AN_ITEM_TO_CART":
      return {
        products: state.products + 1,
        listItems: [...state.listItems, payload],
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
