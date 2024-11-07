import React from "react";
import "../App.css";
import { CTA } from "./action";
export default function Hero() {
  return (
    <section className="hero">
      <h1>Welcome to Potter's D'elite Bakery</h1>
      <h2>Where Every Bite is a Masterpiece</h2>
      <p>
        Indulge in the finest, handcrafted pastries made with love and the
        freshest ingredients. From warm, flaky croissants to decadent cakes, our
        bakery offers a delightful experience for every sweet tooth.
      </p>
      <CTA />
    </section>
  );
}
