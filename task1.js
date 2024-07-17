// Задача 1
// Исправьте код так, чтобы результатом выполнения функции logArrayInfo([1, 2, 3]) было:
// 1
// 2
// 3
// Done!
function addDelay() {
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

async function logWithDelay(text) {
  await addDelay();
  console.log(text);
}

async function logArrayInfo(array) {
  array.forEach(async (item, index) => {
    if (index === array.length - 1) {
      await logWithDelay(item);
      console.log("Done!");
    } else {
      await logWithDelay(item);
    }
  });
}

logArrayInfo([1, 2, 3]);