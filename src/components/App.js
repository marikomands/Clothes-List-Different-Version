import React from "react";
import CategoryList from "./CategoryList";
import TypeList from "./TypeList";
import ItemList from "./ItemList";

const App = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Sulis</h2>
      <div className="categoryTypeFlex">
        <CategoryList />
        <TypeList />
      </div>
      <div className="itemFlex">
        <ItemList />
      </div>
    </div>
  );
};

export default App;
