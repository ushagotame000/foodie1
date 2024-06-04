import React from "react";
import { assets } from "../../assets/assets";

const Add = () => {
  return (
    <>
      <div className="add w-2/3 ml-7 mt-12  bg-gray-200 font-normal font-serif">
        <form className="flex-col flex  gap-3">
          <div className="add-img w-32 ">
            <p>Upload Image</p>
            <label htmlFor="image">
              <img src={assets.upload_area} alt="" />
            </label>
            <input type="file" id="image" hidden required />
          </div>
          <div className="add-product-name w-72 ">
            <p>Product name</p>
            <input
              type="text"
              name="name"
              placeholder="Type here"
              className=" w-full p-2"
            />
          </div>
          <div className="add-product-description  flex-col">
            <p>Product description</p>
            <textarea
              name="description"
              rows="6"
              placeholder="Write content here"
              className="w-full"
            ></textarea>
          </div>
          <div className="add-category-price flex gap-8">
            <div className="add-category flex-col">
              <p>Product Category</p>
              <select name="category" className="p-2 ml-4">
                <option value="Salad">Salad</option>
                <option value="Rolls">Rolls</option>
                <option value="Desert">Deserts</option>
                <option value="Sandwich">Sandwich</option>
                <option value="Cake">Cake</option>
                <option value="Pure Veg">Pure Veg</option>
                <option value="Pasta">Pasta</option>
                <option value="Noodles">Noodles</option>
              </select>
            </div>
            <div className="add-price flex-col">
              <p>Product Price</p>
              <input
                className="p-2 "
                type="Number"
                name="price"
                placeholder="Rs."
              />
            </div>
          </div>
          <button
            type="submit"
            className="add-btn max-w-32 border-none p-3 bg-black text-white cursor-pointer "
          >
            ADD
          </button>
        </form>
      </div>
    </>
  );
};

export default Add;
