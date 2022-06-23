import { useState } from "react";
import Head from "next/head";
import Orders from "../components/Orders";
import Analytics from "../components/Analytics";
import TopStats from "../components/TopStats";
import DashboardComp from "../components/DashboardComp";
import { BiBookBookmark } from "react-icons/bi";
import { MdQueryStats, MdLocalGroceryStore } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import { AiTwotoneAppstore } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import Products from "../components/Products";
import sanityconfig from "../sanityconfig.js";
const Dashboard = ({ data }) => {
  const [menu, setMenu] = useState("dashboard");
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
              <DashboardComp />
            </>
          )}
          {menu == "orders" && <Orders />}
          {menu == "analytics" && <Analytics />}
          {menu == "products" && <Products data={data} />}
        </div>
      </main>
    </>
  );
};

export default Dashboard;
export const getServerSideProps = async () => {
  const data = await sanityconfig.fetch(
    `
    *[_type == "products"]{_id, title, slug, "ProductImage": mainImage.asset->url, price, quantity}
    `
  );
  return {
    props: {
      data,
    },
  };
};
