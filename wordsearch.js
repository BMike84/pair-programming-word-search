const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map((ls) => ls.join(""));
    for (l of horizontalJoin) {
      if (l.includes(word)) return true;
    }

    //vertical
    let vertical = [];
    let nestarr= [];
    for (let i = 0; i < letters[0].length; i++) {
      for (let j = 0; j < letters.length; j++) {
          nestarr.push(letters[j][i]);
      }
      vertical.push(nestarr);
      nestarr = [];
    }
  //   const verticalJoin = vertical.map((el) => el.join(""));
  const verticalJoin = join(vertical);
    for (r of verticalJoin) {
        if (r.includes(word)) return true;
    }
  
    //diagnal
    let diagonal = [];
    let nestedDiagonals = [];
    for (let i = 0; i < letters[0].length; i++) {
      for (let j = 0; j < letters.length; j++) {
          nestedDiagonals.push(letters[j][i]);
          i++;
      }
      diagonal.push(nestedDiagonals);
      nestedDiagonals = [];
    }
    const diagonalJoin = diagonal.map((el) => el.join(""));
    for (r of diagonalJoin) {
        if (r.includes(word)) return true;
    }
    return false;
  };
  
  const join = (arr) => {
  return arr.map((el) => el.join(""));
  }
  
  module.exports = wordSearch;