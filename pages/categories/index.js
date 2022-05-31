import Head from "next/head";
import { useState } from "react";
import Image from "next/image";

const Categories = () => {
  return (
    <>
      <Head>
        <title>Sunshine Cash & Carry | Categories</title>
      </Head>
      <div className="categories">
        <h1>List of Categories</h1>
        <main className="categories__main">
          <article className="main__item">
            <div className="image">
              <Image
                src="/eggs.jpg"
                layout="fill"
                objectFit="cover"
                alt="product"
              />
            </div>
            <a href="/categories/fruits-and-flowers" className="text">
              Fresh Fruit and Vegetables
            </a>
          </article>
          <article className="main__item">
            <div className="image">
              <Image
                src="/eggs.jpg"
                layout="fill"
                objectFit="cover"
                alt="product"
              />
            </div>
            <a href="/categories/bakery" className="text">
              Bakery
            </a>
          </article>
          <article className="main__item">
            <div className="image">
              <Image
                src="/eggs.jpg"
                layout="fill"
                objectFit="cover"
                alt="product"
              />
            </div>
            <a href="/categories/milk-cheese-eggs" className="text">
              Milk, Cheese and Eggs
            </a>
          </article>
          <article className="main__item">
            <div className="image">
              <Image
                src="/eggs.jpg"
                layout="fill"
                objectFit="cover"
                alt="product"
              />
            </div>
            <a href="/categories/meat" className="text">
              Meat, Poultry and Seafood
            </a>
          </article>
          <article className="main__item">
            <div className="image">
              <Image
                src="/eggs.jpg"
                layout="fill"
                objectFit="cover"
                alt="product"
              />
            </div>
            <a href="/categories/frozen-food" className="text">
              Frozen Food
            </a>
          </article>

          <article className="main__item">
            <div className="image">
              <Image
                src="/eggs.jpg"
                layout="fill"
                objectFit="cover"
                alt="product"
              />
            </div>
            <a href="/categories/chocolate-chips-snacks" className="text">
              Chocolate, Chips and Snacks
            </a>
          </article>
          <article className="main__item">
            <div className="image">
              <Image
                src="/eggs.jpg"
                layout="fill"
                objectFit="cover"
                alt="product"
              />
            </div>
            <a href="/categories/beverages" className="text">
              Beverages
            </a>
          </article>
          <article className="main__item">
            <div className="image">
              <Image
                src="/eggs.jpg"
                layout="fill"
                objectFit="cover"
                alt="product"
              />
            </div>
            <a href="/categories/alcohol" className="text">
              Alcohol
            </a>
          </article>
          <article className="main__item">
            <div className="image">
              <Image
                src="/eggs.jpg"
                layout="fill"
                objectFit="cover"
                alt="product"
              />
            </div>
            <a href="/categories/household-cleaning" className="text">
              Household and Cleaning
            </a>
          </article>
          <article className="main__item">
            <div className="image">
              <Image
                src="/eggs.jpg"
                layout="fill"
                objectFit="cover"
                alt="product"
              />
            </div>
            <a href="/categories/personal-care-health" className="text">
              Personal Care and Health
            </a>
          </article>
          <article className="main__item">
            <div className="image">
              <Image
                src="/eggs.jpg"
                layout="fill"
                objectFit="cover"
                alt="product"
              />
            </div>
            <a href="/categories/baby-products" className="text">
              Baby Products
            </a>
          </article>
          <article className="main__item">
            <div className="image">
              <Image
                src="/eggs.jpg"
                layout="fill"
                objectFit="cover"
                alt="product"
              />
            </div>
            <a href="/categories/pet-care" className="text">
              Pet Care
            </a>
          </article>
        </main>
      </div>
    </>
  );
};
export default Categories;
