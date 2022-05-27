import { createContext, useReducer } from "react";

const initialValues = {
  products: 0,
  listItems: [],
};

// const reducer = (state, action) =>{
//     const { type, payload} = action

//     switch (type) {
//         case value:

//             break;

//         default:
//             break;
//     }
// }

const ProductsContext = createContext(initialValues);

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADDED_A_PRODUCT":
      return {
        ...state,
        val: payload,
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