// src/components/SubHouseholdNode.js
import React from "react";

const SubHouseholdNode = ({ nodeDatum, toggleNode }) => (
  <g onClick={toggleNode} style={{ cursor: "pointer" }}>
    <rect width="120" height="40" x="-60" y="-20" fill="#e6e6ff" stroke="#333" />
    <text x="0" y="0" textAnchor="middle" alignmentBaseline="central">
      {nodeDatum.name}
    </text>
  </g>
);

export default SubHouseholdNode;