import Head from "next/head";
import { useState } from "react";

const Categories = () => {
  const [nav, setNav] = useState("first");
  return (
    <>
      <Head>
        <title>Sunshine Cash & Carry | Categories</title>
      </Head>
      <div className="categories">
        <h1>List of Categories</h1>
        <ul className="categories__ul">
          <li className="first">Fresh&nbsp;Fruit&nbsp;and&nbsp;Vegetables</li>
          <li>Bakery</li>
          <li>Milk,&nbsp;Cheese&nbsp;and&nbsp;Eggs</li>
          <li>Meat,&nbsp;Poultry&nbsp;and&nbsp;Seafood</li>
          <li>Frozen&nbsp;Food</li>
          <li>Chocolate,&nbsp;Chips&nbsp;and&nbsp;Snacks</li>
          <li>Beverages</li>
          <li>Alcohol</li>
          <li>Household&nbsp;and&nbsp;Cleaning</li>
          <li>Personal&nbsp;Care&nbsp;and&nbsp;Health</li>
          <li>Baby&nbsp;Products</li>
          <li>Pet&nbsp;Care</li>
        </ul>
      </div>
    </>
  );
};
export default Categories;
