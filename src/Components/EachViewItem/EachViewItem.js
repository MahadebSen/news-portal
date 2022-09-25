import React from "react";
import "./EachViewItem.css";
import { HiX } from "react-icons/hi";
import { useState } from "react";

const EachViewItem = ({ item, allData, setAllData, listView }) => {
  const { id, title, body } = item;
  const [popUp, setPopUp] = useState(false);

  const handleCross = (id) => {
    setAllData(allData.filter((item) => item.id !== id));
  };

  const handlePopUp = () => {
    setPopUp(true);
  };

  return (
    <div>
      {listView ? (
        <div onClick={handlePopUp} className="each-view-list">
          <div className="info-div-list">
            <p className="title">
              {title.length > 20 ? title.slice(0, 10) + ".." : title}
            </p>
            <p>{body.length > 100 ? body.slice(0, 150) + ".." : body}</p>
            <p className="date">{Date().slice(0, 28)}</p>
          </div>

          <div onClick={() => handleCross(id)} className="cross-div-list">
            <HiX className="cross-list-view" />
          </div>
        </div>
      ) : (
        <div onClick={handlePopUp} className="each-view-grid">
          <div className="info-div-grid">
            <div onClick={() => handleCross(id)} className="cross-div-grid">
              <HiX className="cross-grid-view" />
            </div>
            <p className="title">
              {title.length > 20 ? title.slice(0, 10) + ".." : title}
            </p>
            <p>{body.length > 100 ? body.slice(0, 150) + ".." : body}</p>
            <p className="date">{Date().slice(0, 28)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EachViewItem;
