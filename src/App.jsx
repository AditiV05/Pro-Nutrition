import React, { useState } from "react";
import FoodBox from "./components/FoodBox";
import Search from "./components/Search";
import foodsData from "../resources/FoodData";

const App = () => {
  const [foods, setFoods] = useState(foodsData);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSearch = (query) => {
    const filteredFoods = foodsData.filter((food) =>
      food.name.toLowerCase().includes(query.toLowerCase())
    );
    setFoods(filteredFoods);
  };

  return (
    <div>
      <Search onSearch={handleSearch} />

      {foods.map((food) => (
        <FoodBox
          key={food.id}
          food={food}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
      ))}
    </div>
  );
};

export default App;
