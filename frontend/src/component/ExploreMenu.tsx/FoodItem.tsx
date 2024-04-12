import React, { useState } from "react";
import { assets } from "../../assets/assets";
import ratingStars from "../../assets/rating_starts.png"; // Assuming the rating starts image is stored here

interface FoodItemProps {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

const FoodItem: React.FC<FoodItemProps> = ({
  id,
  name,
  price,
  description,
  image,
}) => {
  const [itemCount, setItemCount] = useState(0);

  return (
    <div>
      <div className="food-item w-auto m-auto ease-in-out rounded-md hover:opacity-75 p-1">
        <div className="food-item-img-container relative ">
          <img
            src={image}
            alt={name}
            className="w-auto border-spacing-1 rounded-2xl"
          />
          {!itemCount ? (
            <img
              className="add absolute w-10  ml-60 cursor-pointer rounded-lg bottom-0  left-5"
              onClick={() => setItemCount((prev) => prev + 1)}
              src={assets.add_icon_white} // Assuming this is your add icon
              alt="Add"
            />
          ) : (
            <div className="food-item-counter absolute ml-48  flex item gap-2   rounded-2xl bg-white bottom-0 w-fit left-4">
              {itemCount}
              <img
                onClick={() => setItemCount((prev) => prev - 1)}
                src={assets.remove_icon_red}
                alt="remove"
              />
              <p>{itemCount}</p>
              <img
                onClick={() => setItemCount((prev) => prev + 1)}
                src={assets.add_icon_green}
                alt=" add"
              />
            </div> // Show item count if greater than 0
          )}
        </div>
        <div className="food-item-name-rating flex items-center mt-5">
          <p className="text-2xl font-medium font-mono">{name}</p>
          <img
            className="w-20"
            src={ratingStars} // Use imported rating stars image
            alt="Rating Stars"
          />
        </div>
        <p className="food-item-desc text-gray-500 text-sm">{description}</p>
        <p className="food-item-price text-orange-500 font-bold mt-3 mb-0 text-lg">
          Rs.{price}
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
