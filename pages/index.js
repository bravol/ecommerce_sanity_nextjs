import React from "react";
import FooterBanner from "../components/FooterBanner";
import Product from "../components/Product";
import { client } from "../lib/client";
import HomeSlider from "./HomeSlider";

const Home = ({ products, bannerData }) => (
  <div>
    <HomeSlider />
    <div className="products-heading">
      <h2>Best Seller Products</h2>
    </div>
    <div className="products-container">
      {products?.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};
export default Home;
