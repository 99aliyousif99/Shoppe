import React from "react";
import "./main.css";
import bagsImage from "../../assets/categories/bags.png";
import categoriesData from "../../Data/categories.json";
import Filter from "../../assets/filter.svg"
const Main = () => {
  return (
    <>
      <div className="main">
        <div className="top">
          <h1>Shop</h1>
          <input type="text" placeholder="clothing X" />
        </div>
        <div className="categories">
          {categoriesData.categories.map((category) => (
            <>
              <div key={category.id} className="category">
                <img src={category.image} alt={category.name} />
              </div>
            </>
          ))}
        </div>

        <div className="items">
          <h2>All Items</h2>
          <img src={Filter} alt="" />
        </div>
      </div>
    </>
  );
};

export default Main;
