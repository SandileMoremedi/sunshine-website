import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
            <Link href="/categories/fruits-and-flowers" className="text">
              Fresh Fruit and Vegetables
            </Link>
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
            <Link href="/categories/bakery" className="text">
              Bakery
            </Link>
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
            <Link href="/categories/eggs-milk" className="text">
              Milk, Cheese and Eggs
            </Link>
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
            <Link href="/categories/meat" className="text">
              Meat, Poultry and Seafood
            </Link>
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
            <Link href="/categories/frozen-food" className="text">
              Frozen Food
            </Link>
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
            <Link href="/categories/chocolate-chips-snacks" className="text">
              Chocolate, Chips and Snacks
            </Link>
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
            <Link href="/categories/beverages" className="text">
              Beverages
            </Link>
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
            <Link href="/categories/alcohol" className="text">
              Alcohol
            </Link>
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
            <Link href="/categories/household-cleaning" className="text">
              Household and Cleaning
            </Link>
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
            <Link href="/categories/personal-care-health" className="text">
              Personal Care and Health
            </Link>
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
            <Link href="/categories/baby-products" className="text">
              Baby Products
            </Link>
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
            <Link href="/categories/pet-care" className="text">
              Pet Care
            </Link>
          </article>
        </main>
      </div>
    </>
  );
};
export default Categories;
