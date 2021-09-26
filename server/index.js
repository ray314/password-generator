const express = require('express')
const app = express()
const port = 5000

const generateChars = (characters, length) => {
  var result = "";
  var charArr = characters.split("");
  if (length > characters.length) {
    charArr.concat(charArr);
  }

  shuffle(charArr);
  for (var i = 0; i < length; i++) {
    result += charArr.pop();
  }
  return result;
}

/**
 * Fisher-Yates Shuffle algorithm
 * @param {*} array 
 * @returns A shuffled array
 */
const shuffle = (array) => {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

const replaceWithHTMLNames = (charArr) => {
  for (var i = 0; i < charArr.length; i++) {
    switch (charArr[i]) {
      case '<':
        charArr[i] = '&lt;';
        break;
      case '>':
        charArr[i] = '&gt;';
        break;
      case '&':
        charArr[i] = '&amp;';
        break;
      case '\"':
        charArr[i] = '&quot;';
        break;
      case '\'':
        charArr[i] = '&apos;';
        break;

      default:
        break;
    }
  }
}

app.get('/', (req, res) => {
  var charactersU = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var charactersL = 'abcdefghijklmnopqrstuvwxyz';
  var charactersN = '0123456789';
  var charactersS = '`~!@#$%^*()-_=+[{]}|;:.,/?<>&\'\"\\';

  var result = "";
  var arr = [];
  result += generateChars(charactersU, 4) +
    generateChars(charactersL, 4) +
    generateChars(charactersN, 4) +
    generateChars(charactersS, 4);


  arr = result.split("");
  //console.log(arr);
  shuffle(arr);
  replaceWithHTMLNames(arr);
  //console.log(arr);
  result = arr.join("");
  console.log(result);
  res.send("<p>Password is: " + result + "</p>");
})
https://runkit.com/
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// RegExp: ^(?:([A-Za-z])(?!.{2,}\1))*$ duplicate characters
// [^A-Za-z0-9]{4} special characters