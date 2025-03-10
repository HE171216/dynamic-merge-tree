// export default FamilyNode;
import React, { useState } from "react";
import Tree from "react-d3-tree";
import MemberNode from "./MemberNode";
import HouseholdNode from "./HouseholdNode";
import SubHouseholdNode from "./SubHouseholdNode";
import BranchNode from "./BranchNode";

const FamilyNode = ({ family, members, branches, households, treeData }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedBranches, setExpandedBranches] = useState({});
  const [translate, setTranslate] = useState({
    x: window.innerWidth / 2,
    y: 50,
  });

  const toggleBranch = (branchId) => {
    setExpandedBranches((prev) => ({
      ...prev,
      [branchId]: !prev[branchId] ? treeData.branches[branchId] : null,
    }));
  };

  const renderCustomNodeElement = ({ nodeDatum, toggleNode }) => {
    const handleClick = () => {
      if (nodeDatum.children && nodeDatum.children.length > 0) {
        toggleNode();
      }
    };

    switch (nodeDatum.type) {
      case "family":
        return (
          <g onClick={() => setIsExpanded(true)} style={{ cursor: "pointer" }}>
            <rect
              width="120"
              height="40"
              x="-60"
              y="-20"
              fill="#ffcccc"
              stroke="#333"
            />
            <text x="0" y="0" textAnchor="middle" alignmentBaseline="central">
              {nodeDatum.name}
            </text>
          </g>
        );
      case "rootAncestor":
        return (
          <g onClick={() => setIsExpanded(false)} style={{ cursor: "pointer" }}>
            <rect
              width="100"
              height="40"
              x="-50"
              y="-20"
              fill="#ffd700"
              stroke="#333"
            />
            <text x="0" y="0" textAnchor="middle" alignmentBaseline="central">
              {nodeDatum.name}
            </text>
          </g>
        );
      case "branch":
        return (
          <g
            onClick={() => toggleBranch(nodeDatum.id)}
            style={{ cursor: "pointer" }}
          >
            <rect
              width="100"
              height="40"
              x="-50"
              y="-20"
              fill="#ccffcc"
              stroke="#333"
            />
            <text x="0" y="0" textAnchor="middle" alignmentBaseline="central">
              {nodeDatum.name}
            </text>
          </g>
        );
      case "household":
        return <HouseholdNode nodeDatum={nodeDatum} toggleNode={handleClick} />;
      case "subhousehold":
        return (
          <SubHouseholdNode nodeDatum={nodeDatum} toggleNode={handleClick} />
        );
      case "member":
        return <MemberNode nodeDatum={nodeDatum} />;
      default:
        return null;
    }
  };

  const baseTree = isExpanded ? treeData.expanded : treeData.collapsed;
  const branchNodes = Object.values(expandedBranches).filter(Boolean);

  const mergedTree = {
    ...baseTree,
    children: [
      ...baseTree.children.map((child) => {
        if (child.type === "branch" && expandedBranches[child.id]) {
          return expandedBranches[child.id];
        }
        return child;
      }),
    ],
  };

  return (
    <div className="family-node">
      <div style={{ width: "100%", height: "800px" }}>
        <Tree
          data={mergedTree}
          orientation="vertical"
          renderCustomNodeElement={renderCustomNodeElement}
          zoomable={true}
          translate={translate}
          collapsible={true}
          onUpdate={({ translate }) => setTranslate(translate)}
          pathFunc="step"
        />
      </div>
    </div>
  );
};

export default FamilyNode;
// import React, { useState } from "react";
// import Tree from "react-d3-tree";
// import MemberNode from "./MemberNode";
// import HouseholdNode from "./HouseholdNode";
// import SubHouseholdNode from "./SubHouseholdNode";
// import BranchNode from "./BranchNode";

// const FamilyNode = ({ family, members, branches, households, treeData }) => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [expandedBranches, setExpandedBranches] = useState({});
//   const [translate, setTranslate] = useState({
//     x: window.innerWidth / 2,
//     y: 50,
//   });

//   const toggleBranch = (branchId) => {
//     setExpandedBranches((prev) => ({
//       ...prev,
//       [branchId]: !prev[branchId] ? treeData.branches[branchId] : null,
//     }));
//   };

//   const renderCustomNodeElement = ({ nodeDatum, toggleNode }) => {
//     const handleClick = () => {
//       if (nodeDatum.children && nodeDatum.children.length > 0) {
//         toggleNode();
//       }
//     };

//     switch (nodeDatum.type) {
//       case "family":
//         return (
//           <g onClick={() => setIsExpanded(true)} style={{ cursor: "pointer" }}>
//             <rect
//               width="120"
//               height="40"
//               x="-60"
//               y="-20"
//               fill="#ffcccc"
//               stroke="#333"
//             />
//             <text x="0" y="0" textAnchor="middle" alignmentBaseline="central">
//               {nodeDatum.name}
//             </text>
//           </g>
//         );
//       case "rootAncestor":
//         return (
//           <g onClick={() => setIsExpanded(false)} style={{ cursor: "pointer" }}>
//             <rect
//               width="100"
//               height="40"
//               x="-50"
//               y="-20"
//               fill="#ffd700"
//               stroke="#333"
//             />
//             <text x="0" y="0" textAnchor="middle" alignmentBaseline="central">
//               {nodeDatum.name}
//             </text>
//           </g>
//         );
//       case "branch":
//         return (
//           <g
//             onClick={() => toggleBranch(nodeDatum.id)}
//             style={{ cursor: "pointer" }}
//           >
//             <rect
//               width="100"
//               height="40"
//               x="-50"
//               y="-20"
//               fill="#ccffcc"
//               stroke="#333"
//             />
//             <text x="0" y="0" textAnchor="middle" alignmentBaseline="central">
//               {nodeDatum.name}
//             </text>
//           </g>
//         );
//       case "household":
//         return <HouseholdNode nodeDatum={nodeDatum} toggleNode={handleClick} />;
//       case "subhousehold":
//         return (
//           <SubHouseholdNode nodeDatum={nodeDatum} toggleNode={handleClick} />
//         );
//       case "member":
//         return <MemberNode nodeDatum={nodeDatum} />;
//       default:
//         return null;
//     }
//   };

//   const baseTree = isExpanded ? treeData.expanded : treeData.collapsed;
//   const branchNodes = Object.values(expandedBranches).filter(Boolean);

//   const mergedTree = {
//     ...baseTree,
//     children: [
//       ...baseTree.children.map((child) => {
//         if (child.type === "branch" && expandedBranches[child.id]) {
//           return expandedBranches[child.id];
//         }
//         return child;
//       }),
//     ],
//   };

//   return (
//     <div className="family-node">
//       <div style={{ width: "100%", height: "800px" }}>
//         <Tree
//           data={mergedTree}
//           orientation="vertical"
//           renderCustomNodeElement={renderCustomNodeElement}
//           zoomable={true}
//           translate={translate}
//           collapsible={true}
//           onUpdate={({ translate }) => setTranslate(translate)}
//           pathFunc="step"
//           separation={{ siblings: 0.5, nonSiblings: 0.5 }} // Adjust separation between nodes
//           nodeSize={{ x: 200, y: 100 }} // Adjust node size
//         />
//       </div>
//     </div>
//   );
// };

// export default FamilyNode;
