import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import Product from "./Product";

const Search = ({ cart, setCart }) => {
  const { term } = useParams();
  const [filterData, setFilterData] = useState([]);
  //funtion for filtering DAta,every time the term changes the data is chnaged

  useEffect(() => {
    const filteredData = () => {
      const data = items.filter((p) =>
        p.title.toLowerCase().includes(term.toLowerCase())
      );
      setFilterData(data);
    };

    //calling the filteredData  funtion to do the work
    filteredData();
  }, [term]);

  return <Product cart={cart} setCart={setCart} items={filterData} />;
};

export default Search;
