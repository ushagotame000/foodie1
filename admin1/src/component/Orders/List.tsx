import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

// Define the FoodItem type
interface FoodItem {
  image: string;
  name: string;
  category: string;
  price: number;
}

const List: React.FC = () => {
  const url = "http://localhost:5000";
  const [list, setList] = useState<FoodItem[]>([]);

  const fetchList = async () => {
    const response = await axios.get<{ success: boolean; data: FoodItem[] }>(
      `${url}/api/food/list`
    );

    console.log(response.data);

    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <div className="list flex-col w-3/4 p-3 ">
        <p>Food List</p>
        <div className="table-list">
          <div
            className="table-title bg-slate-200 p-3  hidden sm:inline-grid 
       grid-cols-6
        px-3 py-4  font-serif "
          >
            <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>Price</b>
            <b>Action</b>
          </div>
          {list.map((item, index) => {
            return (
              <div
                key={index}
                className="list-table-format  grid sm:grid-cols-5   grid-cols-3 items-center gap-2 px-3 py-4 border  border-slate-100 font-serif  "
              >
                <img
                  src={`${url}/images/${item.image}`}
                  alt={item.name}
                  className="w-12 "
                />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>Rs.{item.price}</p>
                <p>X</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default List;
