import React from "react";

const BranchNode = ({ nodeDatum, toggleNode }) => (
  <g onClick={toggleNode} style={{ cursor: "pointer" }}>
    <rect width="100" height="40" x="-50" y="-20" fill="#ccffcc" stroke="#333" />
    <text x="0" y="0" textAnchor="middle" alignmentBaseline="central">
      {nodeDatum.name}
    </text>
  </g>
);

export default BranchNode;
