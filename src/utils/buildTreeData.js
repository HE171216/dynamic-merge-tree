// export const buildTreeData = (family, members, branches, households) => {
//   // Member node (rectangular)
//   const getMemberNode = (memberId) => ({
//     id: memberId,
//     name: members[memberId].name,
//     type: "member",
//     attributes: { status: members[memberId].status },
//     children: [],
//   });

//   // Household node with sub-households for multiple wives
//   const buildHouseholdNode = (householdId) => {
//     const household = households[householdId];
//     const husbandId = household.parents[0]; // First parent is husband
//     const husbandNode = getMemberNode(husbandId);
//     const wifeIds = household.parents.slice(1); // Remaining parents are wives

//     const subHouseholds = wifeIds.map((wifeId) => {
//       const wifeNode = getMemberNode(wifeId);
//       const children = household.children
//         .filter((childId) => members[childId].parentIds.includes(wifeId))
//         .map((childId) =>
//           households[childId]
//             ? buildHouseholdNode(childId)
//             : getMemberNode(childId)
//         );
//       return {
//         id: `${householdId}-${wifeId}`,
//         name: `${members[wifeId].name}'s Family`,
//         type: "subhousehold",
//         children: [wifeNode, ...children],
//         _collapsed: true,
//       };
//     });

//     return {
//       id: householdId,
//       name: `Household of ${members[husbandId].name}`,
//       type: "household",
//       children: [husbandNode, ...subHouseholds],
//       _collapsed: true,
//     };
//   };

//   // Branch node
//   const buildBranchNode = (branchId) => ({
//     id: branchId,
//     name: branches[branchId].name,
//     type: "branch",
//     children: [],
//     _collapsed: true,
//   });

//   // Root Ancestor node
//   const rootAncestorNode = {
//     id: family.rootAncestor,
//     name: members[family.rootAncestor].name,
//     type: "rootAncestor",
//     children: family.branches.map(buildBranchNode),
//     _collapsed: true,
//   };

//   return {
//     collapsed: {
//       id: family.id,
//       name: family.name,
//       type: "family",
//       children: [],
//       _collapsed: false,
//     },
//     expanded: rootAncestorNode,
//     branches: family.branches.reduce((acc, branchId) => {
//       acc[branchId] = buildHouseholdNode(branches[branchId].household);
//       return acc;
//     }, {}),
//   };
// };

export const buildTreeData = (family, members, branches, households) => {
  // Member node (rectangular)
  const getMemberNode = (memberId) => ({
    id: memberId,
    name: members[memberId].name,
    type: "member",
    attributes: { status: members[memberId].status },
    children:
      members[memberId].children?.map((childId) =>
        households[childId]
          ? buildHouseholdNode(childId)
          : getMemberNode(childId)
      ) || [],
  });

  // Household node with sub-households for multiple spouses
  const buildHouseholdNode = (householdId) => {
    const household = households[householdId];
    const headAccountNode = getMemberNode(household.head_account_id);

    const spouseNodes =
      members[household.head_account_id].spouseIds?.map((spouse) => {
        const spouseNode = getMemberNode(spouse.wifeId || spouse.husbandId);
        const children = spouseNode.children;
        return {
          ...spouseNode,
          children: children,
        };
      }) || [];

    return {
      id: householdId,
      name: household.household_name,
      type: "household",
      children: [headAccountNode, ...spouseNodes],
      _collapsed: true,
    };
  };

  // Branch node
  const buildBranchNode = (branchId) => ({
    id: branchId,
    name: branches[branchId].name,
    type: "branch",
    children: [],
    _collapsed: true,
  });

  // Root Ancestor node
  const rootAncestorNode = {
    id: family.rootAncestor,
    name: members[family.rootAncestor].name,
    type: "rootAncestor",
    children: family.branches.map(buildBranchNode),
    _collapsed: true,
  };

  return {
    collapsed: {
      id: family.id,
      name: family.name,
      type: "family",
      children: [],
      _collapsed: false,
    },
    expanded: rootAncestorNode,
    branches: family.branches.reduce((acc, branchId) => {
      acc[branchId] = buildHouseholdNode(branches[branchId].household);
      return acc;
    }, {}),
  };
};
