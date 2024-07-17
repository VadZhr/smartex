// Задача 3
// Необходимо найти сумму всех вершин, значение которых кратно 2

const tree = {
    value: 3,
    children: [
      {
        value: 1,
        children: [],
      },
      {
        value: 4,
        children: [],
      },
      {
        value: 3,
        children: [
          {
            value: 8,
            children: [
              {
                value: 2,
                children: [],
              },
              {
                value: 5,
  
                children: [],
              },
            ],
          },
          {
            value: 0,
            children: [],
          },
        ],
      },
    ],
  };
  // Решил через рекурсию
  function summOfVert(vert) {
    let summ = 0;
    if (vert.value % 2 === 0) {
      summ += vert.value;
    }
    if (vert.children.length) {
      vert.children.forEach((el) => (summ += summOfVert(el)));
    }
    return summ;
  }
  console.log(summOfVert(tree));