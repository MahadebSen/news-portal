import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import View from "./Components/View/View";

function App() {
  const [listView, setListView] = useState(true);
  const [gridView, setGridView] = useState(false);

  return (
    <div className="mani-div">
      <Navbar
        listView={listView}
        setListView={setListView}
        gridView={gridView}
        setGridView={setGridView}
      ></Navbar>
      <View listView={listView}></View>
    </div>
  );
}

export default App;
