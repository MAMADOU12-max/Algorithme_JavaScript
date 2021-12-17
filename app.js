 /*function findthelongestWord(string) {
    // function split separate element with specific way
    let sentence = string.split(' ');
    let longestWordLenght = 0;
    let longestWord = '';

    console.log(sentence);
    for (let index = 0; index < sentence.length; index++) {
        if(sentence[index].length > longestWordLenght) {
            longestWordLenght = sentence[index].length
            // I stock value here
            longestWord = sentence[index];
        }
    }
    return longestWord;
} */

// callback function
function findthelongestWord2(s) {
    // reduce => treat value from left to right (x, y)
    // Math.max return the greater length value between x and y and 0 to saying we start with it
    return s.split(' ').reduce((x, y) => {
          return Math.max(x, y.length);
    }, 0)
}

// console.log(findthelongestWord2("I'm trying to do and master some algorithm!"));

// const repeatStr1 = (str, num) => {
//      let final = '';

//      while(num > 0) {
//          // final str + str
//          final += str;
//          num--;
//      }
//      return final;
// }

 const repeatStr2 = (str, num) => {
    if(num < 0) {
        return "";
     }

     else {
         // put comma between them and remove the last by slice function
        let stringFinal =  (str + ','+ repeatStr2(str, num -1));
        return stringFinal.slice(0, -1);
    }
 }

/*const repeatStr3 = (str, num) => {
    // repeat => a function for repeat element
    return num > 0 ? str.repeat(num) : '';
} */
 
/*const rangeNumber = (x) => {
    
    newTable = [];
    mostGreatNum = 0;
    let numSeparated = x.toString().split('');

    let ascending =  numSeparated.sort(function(a, b){return a-b});

    return ascending;
}*/

/*
originSum = (x, sumFound) => {
     
}

const betterNear = (x) => {

     newTable = []; 
     let element = 0;
     let closest = 0;

     for (let index = 0; index < x.length; index++) {

         element = x[index];  
         // Map data
        x.map(function(item) { 
             // sum element
             newTable.push(parseInt(item) + parseInt(element));  
                // find closest
             for (let j = 0; j < newTable.length; j++) {                
                if (closest === 0) {
                    closest = newTable[j];
                } else if (newTable[j] > 0 && newTable[j] <= Math.abs(closest)) {
                    closest = newTable[j];
                } else if (newTable[j] < 0 && - newTable[j] < Math.abs(closest)) {
                    closest = newTable[j];
                }
             }
            //  console.log(newTable);
        });
               
     }

     return closest;
    //   return newTable;
}

console.log(betterNear([2, 1, 3]))
// 4, 3, 5, 3, 2, 5, 4, 6 

*/