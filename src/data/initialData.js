// data/initialData.js
export const initialData = {
  members: {
    ...Array.from({ length: 100 }, (_, i) => {
      const id = `m${i + 1}`;
      return [
        id,
        {
          id,
          name: `Member ${i + 1}`,
          status: "alive",
          spouseIds: i % 2 === 0 ? [`m${i}`] : [], // Ghép đôi thành viên theo cặp
          parentIds:
            i > 2 ? [`m${Math.floor(i / 2)}`, `m${Math.floor(i / 2) + 1}`] : [],
        },
      ];
    }).reduce((acc, [id, data]) => ({ ...acc, [id]: data }), {}),
  },
  households: {
    ...Array.from({ length: 50 }, (_, i) => {
      const id = `h${i + 1}`;
      const parent1 = `m${i * 2 + 1}`;
      const parent2 = `m${i * 2 + 2}`;
      const children = Array.from(
        { length: 2 },
        (_, j) => `m${(i + 1) * 2 + j + 1}`
      );
      return [id, { id, parents: [parent1, parent2], children }];
    }).reduce((acc, [id, data]) => ({ ...acc, [id]: data }), {}),
  },
  branches: {
    ...Array.from({ length: 10 }, (_, i) => {
      const id = `b${i + 1}`;
      const household = `h${i * 5 + 1}`;
      return [id, { id, name: ` Child ${i + 1}`, household }];
    }).reduce((acc, [id, data]) => ({ ...acc, [id]: data }), {}),
  },
  family: {
    id: "f1",
    name: "Nguyen Family",
    rootAncestor: "m1",
    branches: Array.from({ length: 10 }, (_, i) => `b${i + 1}`),
  },
};
