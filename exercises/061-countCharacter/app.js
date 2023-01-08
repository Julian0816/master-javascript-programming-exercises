function countCharacter(str, char) {
    // your code here
    let counter = 0
    for (const letter of str) {
      if (letter == char) {
        counter++
      }
    }
    return counter
  }