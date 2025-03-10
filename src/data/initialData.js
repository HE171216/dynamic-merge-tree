// // src/data/initialData.js
export const initialData = {
  members: {
    m1: {
      id: "m1",
      name: "John",
      status: "alive",
      spouseIds: ["m2", "m3"],
      parentIds: [],
    },
    m2: {
      id: "m2",
      name: "Jane",
      status: "alive",
      spouseIds: ["m1"],
      parentIds: [],
    },
    m3: {
      id: "m3",
      name: "Mary",
      status: "alive",
      spouseIds: ["m1"],
      parentIds: [],
    },
    m4: {
      id: "m4",
      name: "Alice",
      status: "alive",
      spouseIds: ["m5"],
      parentIds: ["m1", "m2"],
    }, // Head of Branch b1
    m5: {
      id: "m5",
      name: "Charlie",
      status: "alive",
      spouseIds: ["m4"],
      parentIds: [],
    },
    m6: {
      id: "m6",
      name: "David",
      status: "alive",
      spouseIds: [],
      parentIds: ["m1", "m2"],
    },
    m7: {
      id: "m7",
      name: "Emma",
      status: "alive",
      spouseIds: [],
      parentIds: ["m1", "m3"],
    },
    m8: {
      id: "m8",
      name: "Frank",
      status: "alive",
      spouseIds: [],
      parentIds: ["m4", "m5"],
    },
  },
  households: {
    h1: { id: "h1", parents: ["m1", "m2"], children: ["m4", "m6"] }, // John & Jane
    h2: { id: "h2", parents: ["m1", "m3"], children: ["m7"] }, // John & Mary
    h3: { id: "h3", parents: ["m4", "m5"], children: ["m8"] }, // Alice & Charlie (Head of Branch b1)
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

// export const initialData = {
//   members: {
//     ...Array.from({ length: 100 }, (_, i) => {
//       const id = `m${i + 1}`;
//       return [
//         id,
//         {
//           id,
//           name: `Member ${i + 1}`,
//           status: "alive",
//           spouseIds: i % 2 === 0 ? [`m${i}`] : [], // Ghép đôi thành viên theo cặp
//           parentIds: i > 2 ? [`m${Math.floor(i / 2)}`, `m${Math.floor(i / 2) + 1}`] : [],
//         },
//       ];
//     }).reduce((acc, [id, data]) => ({ ...acc, [id]: data }), {}),
//   },
//   households: {
//     ...Array.from({ length: 50 }, (_, i) => {
//       const id = `h${i + 1}`;
//       const parent1 = `m${i * 2 + 1}`;
//       const parent2 = `m${i * 2 + 2}`;
//       const children = Array.from({ length: 2 }, (_, j) => `m${(i + 1) * 2 + j + 1}`);
//       return [id, { id, parents: [parent1, parent2], children }];
//     }).reduce((acc, [id, data]) => ({ ...acc, [id]: data }), {}),
//   },
//   branches: {
//     ...Array.from({ length: 10 }, (_, i) => {
//       const id = `b${i + 1}`;
//       const household = `h${i * 5 + 1}`;
//       return [id, { id, name: `Branch ${i + 1}`, household }];
//     }).reduce((acc, [id, data]) => ({ ...acc, [id]: data }), {}),
//   },
//   family: {
//     id: "f1",
//     name: "Nguyen Family",
//     rootAncestor: "m1",
//     branches: Array.from({ length: 10 }, (_, i) => `b${i + 1}`),
//   },
// };
