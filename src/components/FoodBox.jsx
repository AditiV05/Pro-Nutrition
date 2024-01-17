import React, { useState } from "react";

const FoodBox = ({ food, selectedItems, setSelectedItems }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddItem = () => {
    const existingItemIndex = selectedItems.findIndex(
      (item) => item.id === food.id
    );

    if (existingItemIndex !== -1) {
      const updatedItems = [...selectedItems];
      updatedItems[existingItemIndex].quantity += quantity;
      setSelectedItems(updatedItems);
    } else {
      const newItem = {
        id: food.id,
        name: food.name,
        calories: food.cal,
        quantity: quantity,
      };
      setSelectedItems([...selectedItems, newItem]);
    }

    setQuantity(1);
  };

  const handleResetItem = (itemId) => {
    const updatedItems = selectedItems.filter((item) => item.id !== itemId);
    setSelectedItems(updatedItems);
  };

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={food.img} alt={food.name} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{food.name}</strong> <br />
              <small>{food.cal} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="control">
              <button className="button is-info" onClick={handleAddItem}>
                +
              </button>
            </div>
          </div>
        </div>
      </article>

      {selectedItems.map((item) => (
        <div key={item.id} className="selected-item">
          <p>{`${item.quantity} ${item.name} = ${
            item.quantity * item.calories
          } calories`}</p>
          <button onClick={() => handleResetItem(item.id)}>Reset</button>
        </div>
      ))}
    </div>
  );
};

export default FoodBox;
