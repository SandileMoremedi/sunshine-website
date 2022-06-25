import "../styles/globals.scss";
import Header from "../components/Header";
import { UserProvider } from "@auth0/nextjs-auth0";
import { ProductsProvider } from "../components/ProductsProvider";
import DeleteModal from "../components/DeleteModal";

function MyApp({ Component, pageProps }) {
  return (
      <ProductsProvider>
        <Header />
        <Component {...pageProps} />
        <DeleteModal />
      </ProductsProvider>
  );
}

export default MyApp;
