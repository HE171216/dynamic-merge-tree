// src/App.js
import React from "react";
import FamilyNode from "./components/FamilyNode";
import { initialData } from "./data/initialData";
import { buildTreeData } from "./utils/buildTreeData";
import "./styles/App.css";

const App = () => {
  const treeData = buildTreeData(
    initialData.family,
    initialData.members,
    initialData.branches,
    initialData.households
  );

  return (
    <div className="App">
      <h1>Dynamic Family Tree</h1>
      <FamilyNode
        family={initialData.family}
        members={initialData.members}
        branches={initialData.branches}
        households={initialData.households}
        treeData={treeData}
      />
    </div>
  );
};

export default App;