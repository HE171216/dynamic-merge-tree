// src/components/MemberNode.js
import React from "react";

const MemberNode = ({ nodeDatum }) => (
  <g>
    <rect width="80" height="40" x="-40" y="-20" fill="#ffffcc" stroke="#666" />
    <text x="0" y="0" textAnchor="middle" alignmentBaseline="central">
      {nodeDatum.name}
      {nodeDatum.attributes.status === "deceased" && " (Deceased)"}
    </text>
  </g>
);

export default MemberNode;