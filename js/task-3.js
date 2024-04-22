function filterArray(numbers, value) {
    // Створюємо порожній масив для зберігання підходящих чисел
    let filteredArray = [];
  
    // Проходимося по кожному елементу масиву
    for (let i = 0; i < numbers.length; i++) {
      // Перевіряємо, чи поточний елемент більший за вказане значення
      if (numbers[i] > value) {
        // Якщо так, додаємо його до фільтрованого масиву
        filteredArray.push(numbers[i]);
      }
    }
  
    // Повертаємо фільтрований масив
    return filteredArray;
  }
  
  // Перевірка роботи функції
  console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
  console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
  console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
  console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
  console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]