const testCase = `Hello, world`;

const reverseStr = (str) => {

  // let returnStr = ''
  // for (let i = str.length - 1; i >= 0; i--) {
  //   returnStr += str[i]
  // }
  // return returnStr

  if (str.length === 1) {
    return str;
  }

  return (str.substring(str.length - 1, str.length) + reverseStr(str.substring(0, str.length - 1)))

}

console.log(reverseStr(testCase))

