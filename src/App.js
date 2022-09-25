import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Popup from "./Components/Popup/Popup";
import View from "./Components/View/View";

function App() {
  const [listView, setListView] = useState(true);
  const [gridView, setGridView] = useState(false);
  const [popUp, setPopUp] = useState(false);

  return (
    <section>
      <div className="mani-div">
        <Navbar
          listView={listView}
          setListView={setListView}
          gridView={gridView}
          setGridView={setGridView}
        ></Navbar>

        <View setPopUp={setPopUp} listView={listView}></View>
      </div>
      {popUp && <Popup setPopUp={setPopUp}></Popup>}
    </section>
  );
}

export default App;
