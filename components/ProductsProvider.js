import { createContext, useReducer } from "react";
const initialValues = {
  products: 0,
  listItems: [],
  popup: false,
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
      };
      break;
    case "REMOVED_AN_ITEM":
      (state, payload) => {
        let newArr = [...state.listItems];
        let index = newArr.findIndex((element) => {
          element.id === payload;
        });
        newArr.splice(index, 1);

        return newArr;
      };
      return {
        products: state.products - 1,
        listItems: newArr,
        popup: false,
      };
      break;
    case "POPUP_CLOSE":
      return {
        ...state,
        popup: false,
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
