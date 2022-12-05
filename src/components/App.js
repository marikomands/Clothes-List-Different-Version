import React from "react";
import CategoryList from "./CategoryList";
import TypeList from "./TypeList";
import ItemList from "./ItemList";

const App = () => {
  return (
    <div>
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
