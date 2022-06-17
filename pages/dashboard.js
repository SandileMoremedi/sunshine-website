import { useState } from "react";
import Head from "next/head";
import Orders from "../components/Orders";
const Dashboard = () => {
  const [menu, setMenu] = useState("orders");
  return (
    <>
      <Head>
        <title>Sunshine Cash & Carry | Dashboard</title>
      </Head>
      <main className="dashboard">
        <nav>
          <button>Orders</button>
          <button>Customers</button>
          <button>Analytics</button>
          <button>Products</button>
          <button>Setting</button>
        </nav>
        {menu == "orders" && <Orders />}
      </main>
    </>
  );
};

export default Dashboard;
