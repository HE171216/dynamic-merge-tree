// src/components/HouseholdNode.js
import React from "react";

const HouseholdNode = ({ nodeDatum, toggleNode }) => (
  <g onClick={toggleNode} style={{ cursor: "pointer" }}>
    <rect width="140" height="40" x="-70" y="-20" fill="#ccccff" stroke="#333" />
    <text x="0" y="0" textAnchor="middle" alignmentBaseline="central">
      {nodeDatum.name}
    </text>
  </g>
);

export default HouseholdNode;