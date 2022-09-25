import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import EachViewItem from "../EachViewItem/EachViewItem";
import "./View.css";

const View = ({ listView }) => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);

  return (
    <div className={listView ? "all-data-list" : "all-data-grid"}>
      {allData.map((item) => (
        <EachViewItem
          key={item.id}
          item={item}
          allData={allData}
          setAllData={setAllData}
          listView={listView}
        ></EachViewItem>
      ))}
    </div>
  );
};

export default View;
