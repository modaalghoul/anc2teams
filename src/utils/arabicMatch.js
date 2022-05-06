function arabicMatch(input, checkStatement) {
    input = input.replace(/ |"|'/g, '')
    checkStatement = checkStatement.replace(/ |"|'/g, '')
    let regexString = ''
  
    for (let i = 0; i < input.length; i++) {
      switch (input[i]) {
        case 'أ':
        case 'ا':
        case 'آ':
        case 'إ':
          regexString = regexString + "[أإاآ]"
          break;
  
        case 'ه':
        case 'ة':
          regexString = regexString + "[هة]"
          break;
  
        case 'ى':
        case 'ي':
          regexString = regexString + "[ىي]"
          break;
  
        default:
          regexString = regexString + input[i]
          break;
      }
    }
  
    const regex = new RegExp(regexString)
    if (checkStatement.match(regex)) {
      return true
    } else {
      return false
    }
  }

// function arabicMatch(input, checkStatement) {
//     let regexString = ''

//     for (let i = 0; i < input.length; i++) {
//         switch (input[i]) {
//             case 'أ':
//             case 'ا':
//             case 'آ':
//             case 'إ':
//                 regexString = regexString + "[أإاآ]"
//                 break;

//             case 'ه':
//             case 'ة':
//                 regexString = regexString + "[هة]"
//                 break;

//             case 'ى':
//             case 'ي':
//                 regexString = regexString + "[ىي]"
//                 break;

//             default:
//                 regexString = regexString + input[i]
//                 break;
//         }
//     }

//     const regex = new RegExp(regexString)
//     if (checkStatement.match(regex)) {
//         return true
//     } else {
//         return false
//     }
// }


export default arabicMatch