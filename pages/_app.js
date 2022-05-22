import Header from "../components/Header";
import "../styles/globals.scss";
import { AnimateSharedLayout } from "framer-motion";
import { UserProvider } from "@auth0/nextjs-auth0";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <AnimateSharedLayout>
        <Header />
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </UserProvider>
  );
}

export default MyApp;
