import React from "react";
import "./Home.css";

import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src="./image/profile.png" alt="" />

        <div className="home__row">
          <Product
            id="1"
            title="Shoprider Chameleon GK-83"
            price={123.2932}
            image="./image/scooter1.png"
            rating={5}
          />
          <Product
            id="2"
            title="Shoprider Explorer"
            price={123}
            image="./image/scooter2.jpeg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="1"
            title="Shoprider Chameleon GK-83"
            price={123}
            image="./image/scooter1.png"
            rating={5}
          />
          <Product
            title="Shoprider Chameleon GK-83"
            price={123}
            image="./image/scooter1.png"
            rating={5}
          />
          <Product
            id="1"
            title="Shoprider Chameleon GK-83"
            price={123}
            image="./image/scooter1.png"
            rating={5}
          />
          <Product
            id="1"
            title="Shoprider Chameleon GK-83"
            price={123}
            image="./image/scooter1.png"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="1"
            title="Shoprider Chameleon GK-83"
            price={123}
            image="./image/scooter1.png"
            rating={5}
          />
          <Product
            id="1"
            title="Shoprider Chameleon GK-83"
            price={123}
            image="./image/scooter1.png"
            rating={5}
          />
          <Product
            id="1"
            title="Shoprider Chameleon GK-83"
            price={123}
            image="./image/scooter1.png"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
