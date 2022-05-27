import Header from "../components/Header";
import "../styles/globals.scss";
import { UserProvider } from "@auth0/nextjs-auth0";
import { useState } from "react";
import { ProductsProvider } from "../components/ProductsProvider";

function MyApp({ Component, pageProps }) {
  const [checkoutItems, setCheckoutItems] = useState(["no", "be"]);
  return (
    <UserProvider>
      <ProductsProvider>
        <Header />
        <Component {...pageProps} />
      </ProductsProvider>
    </UserProvider>
  );
}

export default MyApp;
