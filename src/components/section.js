import React from "react";
import "../App.css";
import chocImage from "../images/choc-removebg-preview.png";
import velImage from "../images/redvelvet-removebg-preview.png";
import vanImage from "../images/van-removebg-preview.png";
import chocChip from "../images/chocchip-removebg-preview.png";
import Action from "./action";
// Data for the section items
const products = [
  {
    id: 1,
    Title: "Potter's Chocolate Cake",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut arcu euismod, malesuada tortor in, faucibus justo. Duis a neque eu risus accumsan congue.",
    url: chocImage,
    price: "₦400",
    background: "linear-gradient(135deg, #7B3F00, #311a01)",
    call: { "background-color": "#603202" },
  },
  {
    id: 2,
    Title: "Potter's Red Velvet Delight",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut arcu euismod, malesuada tortor in, faucibus justo. Duis a neque eu risus accumsan congue.",
    url: velImage,
    price: "₦350",
    background: "linear-gradient(135deg, #902C3E, #42000C)",
    call: { "background-color": "#902C3E" },
  },
  {
    id: 3,
    Title: "Potter's Vanilla Surprise",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut arcu euismod, malesuada tortor in, faucibus justo. Duis a neque eu risus accumsan congue.",
    url: vanImage,
    price: "₦450",
    background: "linear-gradient(135deg, #beb48b, #61593a)",
    call: { "background-color": "#beb48b" },
  },
  {
    id: 4,
    Title: "Potter's Chocolate Chip Bite",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut arcu euismod, malesuada tortor in, faucibus justo. Duis a neque eu risus accumsan congue.",
    url: chocChip,
    price: "₦350",
    background: "linear-gradient(135deg, #beb48b, #61593a)",
    call: { "background-color": "#beb48b" },
  },
];

function Product() {
  // State to track the currently displayed item

  // Event handler for navigating to the next item

  return (
    <section
      className="featured-products"
      /*style={{ background: sectionData[currentIndex].background }}*/
    >
      <h1>Our Products</h1>
      {products.map((p) => (
        <article key={p.id} className="product-card">
          <h3>{p.Title}</h3>
          <img src={p.url} alt={p.Title} className="image" />
          <p className="product-price">{p.price}</p>
          <Action className="plink" Text="Shop Now" />
        </article>
      ))}
    </section>
  );
}

export default Product;
