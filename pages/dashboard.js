import { useState } from "react";
import Head from "next/head";
import Orders from "../components/Orders";
import TopStats from "../components/TopStats";
import DashboardComp from "../components/DashboardComp";
import { FaCopy } from "react-icons/fa";
import { BiBookBookmark } from "react-icons/bi";
import { MdQueryStats, MdLocalGroceryStore } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import { AiTwotoneAppstore } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
const Dashboard = () => {
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
          <TopStats />
          {menu == "dashboard" && <DashboardComp />}
          {menu == "orders" && <Orders />}
        </div>
      </main>
    </>
  );
};

export default Dashboard;
