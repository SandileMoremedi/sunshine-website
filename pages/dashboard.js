// React Imports
import { useState } from "react";
// NextJS Imports
import Head from "next/head";
// Components
import Orders from "../components/Orders";
import Analytics from "../components/Analytics";
import TopStats from "../components/TopStats";
import DashboardComp from "../components/DashboardComp";
import Products from "../components/Products";
// React Icons Imports
import { BiBookBookmark } from "react-icons/bi";
import { MdQueryStats, MdLocalGroceryStore } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import { AiTwotoneAppstore } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
// Sanity Imports
import sanityconfig from "../sanityconfig.js";
// Firebase Imports
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { app } from "../firebaseConfig";

const Dashboard = ({ data, users }) => {
  const [menu, setMenu] = useState("dashboard");
  console.log(users);
  //TODO: add the firebase config details in the next.config.js file

  return (
    <>
      <Head>
        <title>Sunshine Cash & Carry | Dashboard</title>
      </Head>
      <main className="dashboard">
        <nav>
          <button
            className={menu == "dashboard" ? "dashboard open" : "dashboard"}
            onClick={() => setMenu("dashboard")}
          >
            <AiTwotoneAppstore />
            Dashboard
          </button>
          <button
            className={
              menu == "orders" ? "orders-button open" : "orders-button"
            }
            onClick={() => setMenu("orders")}
          >
            <BiBookBookmark />
            Orders
          </button>
          <button
            className={menu == "customers" ? "customers open" : "customers"}
            onClick={() => setMenu("customers")}
          >
            <BsFillPersonFill />
            Customers
          </button>
          <button
            className={menu == "analytics" ? "analytics open" : "analytics"}
            onClick={() => setMenu("analytics")}
          >
            <MdQueryStats />
            Analytics
          </button>
          <button
            className={menu == "products" ? "products open" : "products"}
            onClick={() => setMenu("products")}
          >
            <MdLocalGroceryStore />
            Products
          </button>
          <button
            className={menu == "settings" ? "settings open" : "settings"}
            onClick={() => setMenu("settings")}
          >
            <AiFillSetting />
            Settings
          </button>
        </nav>
        <div className="dashboard-left">
          {menu == "dashboard" && (
            <>
              <TopStats />
              <DashboardComp users={users} />
            </>
          )}
          {menu == "orders" && <Orders users={users} />}
          {menu == "analytics" && <Analytics />}
          {menu == "products" && (
            <>
              <Products data={data} />
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default Dashboard;

export async function getServerSideProps() {
  const data = await sanityconfig.fetch(
    `
    *[_type == "products"]{_id, title, slug, "ProductImage": mainImage.asset->url, price, quantity}
    `
  );

  const firestoreRef = getFirestore(app);
  const colRef = collection(firestoreRef, "orders");
  const usersPromise = await getDocs(colRef);
  const userDocs = usersPromise.docs;
  const users = [];
  userDocs.map((client) => {
    users.push({
      ...client.data(),
      id: client.id,
    });
  });

  return {
    props: {
      data,
      users,
    },
  };
}
