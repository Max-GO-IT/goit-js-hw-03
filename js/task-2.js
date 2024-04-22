function makeArray(firstArray, secondArray, maxLength) {
    // Перевіряємо, чи не перевищує довжина нового масиву maxLength
    if (firstArray.length + secondArray.length <= maxLength) {
      // Якщо не перевищує, повертаємо об'єднання двох масивів
      return [...firstArray, ...secondArray];
    } else {
      // Якщо перевищує, повертаємо обрізану версію об'єднання з довжиною maxLength
      return [...firstArray, ...secondArray].slice(0, maxLength);
    }
  }
  
  // Перевірка роботи функції
  console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
  console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
  console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
  console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
  console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
  console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
  