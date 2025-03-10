// export const initialData = {
//   members: {
//     m1: {
//       id: "m1",
//       name: "John",
//       status: "alive",
//       spouseIds: ["m2", "m3"],
//       parentIds: [],
//     },
//     m2: {
//       id: "m2",
//       name: "Jane",
//       status: "alive",
//       spouseIds: ["m1"],
//       parentIds: [],
//     },
//     m3: {
//       id: "m3",
//       name: "Mary",
//       status: "alive",
//       spouseIds: ["m1"],
//       parentIds: [],
//     },
//     m5: {
//       id: "m5",
//       name: "Charlie",
//       status: "alive",
//       spouseIds: ["m4"],
//       parentIds: [],
//     },
//     m4: {
//       id: "m4",
//       name: "Alice",
//       status: "alive",
//       spouseIds: ["m5"],
//       parentIds: ["m1", "m2"],
//     }, // Head of Branch b1

//     m6: {
//       id: "m6",
//       name: "David",
//       status: "alive",
//       spouseIds: [],
//       parentIds: ["m1", "m2"],
//     },
//     m7: {
//       id: "m7",
//       name: "Emma",
//       status: "alive",
//       spouseIds: [],
//       parentIds: ["m1", "m3"],
//     },
//     m8: {
//       id: "m8",
//       name: "Frank",
//       status: "alive",
//       spouseIds: [],
//       parentIds: ["m4", "m5"],
//     },
//   },
//   households: {
//     h1: { id: "h1", parents: ["m1", "m2"], children: ["m4", "m6"] }, // John & Jane
//     h2: { id: "h2", parents: ["m1", "m3"], children: ["m7"] }, // John & Mary
//     h3: { id: "h3", parents: ["m4", "m5"], children: ["m8"] }, // Alice & Charlie (Head of Branch b1)
//   },
//   branches: {
//     b1: { id: "b1", name: "Alice's Branch", household: "h3", head: "m4" }, // Explicitly defining the head
//   },
//   family: {
//     id: "f1",
//     name: "Nguyen Family",
//     rootAncestor: "m1",
//     branches: ["b1"],
//   },
// };
export const initialData = {
  members: {
    m1: {
      id: "m1",
      name: "John",
      status: "alive",
      spouseIds: [{ wifeId: "m2" }, { wifeId: "m3" }],
      parentIds: { fatherId: null, motherId: null },
      children: ["m4", "m6", "m7"],
    },
    m2: {
      id: "m2",
      name: "Jane",
      status: "alive",
      spouseIds: [{ husbandId: "m1" }],
      parentIds: { fatherId: null, motherId: null },
      children: ["m4", "m6"],
    },
    m3: {
      id: "m3",
      name: "Mary",
      status: "alive",
      spouseIds: [{ husbandId: "m1" }],
      parentIds: { fatherId: null, motherId: null },
      children: ["m7"],
    },
    m5: {
      id: "m5",
      name: "Charlie",
      status: "alive",
      spouseIds: [{ wifeId: "m4" }],
      parentIds: { fatherId: null, motherId: null },
      children: ["m8"],
    },
    m4: {
      id: "m4",
      name: "Alice",
      status: "alive",
      spouseIds: [{ husbandId: "m5" }, { husbandId: "m9" }],
      parentIds: { fatherId: "m1", motherId: "m2" },
      children: [],
    }, // Head of Branch b1

    m6: {
      id: "m6",
      name: "David",
      status: "alive",
      spouseIds: [],
      parentIds: { fatherId: "m1", motherId: "m2" },
      children: [],
    },
    m7: {
      id: "m7",
      name: "Emma",
      status: "alive",
      spouseIds: [],
      parentIds: { fatherId: "m1", motherId: "m3" },
      children: [],
    },
    m8: {
      id: "m8",
      name: "Frank",
      status: "alive",
      spouseIds: [],
      parentIds: { fatherId: "m5", motherId: "m4" },
      children: [],
    },
    m9: {
      id: "m9",
      name: "Bob",
      status: "alive",
      spouseIds: [{ wifeId: "m4" }],
      parentIds: { fatherId: null, motherId: null },
      children: [],
    },
  },
  households: {
    h1: {
      id: "h1",
      parent_household_id: null,
      head_account_id: "m1",
      household_name: "John's Household",
    }, // John
    h3: {
      id: "h3",
      parent_household_id: null,
      head_account_id: "m4",
      household_name: "Alice's Household",
    }, // Alice (Head of Branch b1)
  },
  branches: {
    b1: { id: "b1", name: "Alice's Branch", household: "h3", head: "m4" }, // Explicitly defining the head
  },
  family: {
    id: "f1",
    name: "Nguyen Family",
    rootAncestor: "m1",
    branches: ["b1"],
  },
};
