import "../styles/globals.scss";
import Header from "../components/Header";
import { UserProvider } from "@auth0/nextjs-auth0";
import { ProductsProvider } from "../components/ProductsProvider";

function MyApp({ Component, pageProps }) {
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
