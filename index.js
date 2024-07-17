// Задача 1
// Исправьте код так, чтобы результатом выполнения функции logArrayInfo([1, 2, 3]) было:
// 1
// 2
// 3
// Done!
// function addDelay() {
//   return new Promise((resolve) => setTimeout(resolve, 3000));
// }

// async function logWithDelay(text) {
//   await addDelay();
//   console.log(text);
// }

// async function logArrayInfo(array) {
//   array.forEach(async (item, index) => {
//     if (index === array.length - 1) {
//       await logWithDelay(item);
//       console.log("Done!");
//     } else {
//       await logWithDelay(item);
//     }
//   });
// }

// logArrayInfo([1, 2, 3]);

// function createCats() {
//   let cats = [];
//   var i = 0;

//   while (i < 10) {
//     // Тут нужно было передать индекс как параметр в функцию, и в ней сдеалть замыкание
//     let cat = function (i) {
//       return () => console.log(`My index is ${i}`);
//     };

//     cats.push(cat(i));
//     i++;
//   }
//   return cats;
// }

// let animals = createCats();

// animals[0]();
// animals[5]();

// CONSOLE
//----------
// "My index is 0"
// "My index is 5"

// const tree = {
//   value: 3,
//   children: [
//     {
//       value: 1,
//       children: [],
//     },
//     {
//       value: 4,
//       children: [],
//     },
//     {
//       value: 3,
//       children: [
//         {
//           value: 8,
//           children: [
//             {
//               value: 2,
//               children: [],
//             },
//             {
//               value: 5,

//               children: [],
//             },
//           ],
//         },
//         {
//           value: 0,
//           children: [],
//         },
//         {
//           value: 3,
//           children: [{ value: 4, children: [] }],
//         },
//       ],
//     },
//   ],
// };
// // Решил через рекурсию
// function summOfVert(vert) {
//   let summ = 0;
//   if (vert.value % 2 === 0) {
//     summ += vert.value;
//   }
//   if (vert.children.length) {
//     vert.children.forEach((el) => (summ += summOfVert(el)));
//   }
//   return summ;
// }
// console.log(summOfVert(tree));
