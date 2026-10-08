// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    let maxNumber;

    if (num1 > num2) {
        maxNumber = num1;
    } else if (num1 < num2) {
        maxNumber = num2;
    } else {
        maxNumber = num1;
    }

    return maxNumber;
}

console.log(maxOfTwoNumbers(3, 7));
console.log(maxOfTwoNumbers(9, 2));



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(wordArray) {
    
       if(wordArray.length === 0){
        return null
    }

    let storedWords = wordArray[0];
    
    for (let i = 0; i < wordArray.length; i++){
        if(wordArray[i].length > storedWords.length){
        storedWords = wordArray[i]
        }
    }

    return storedWords;
}





// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
        let result = 0
    for (let i = 0; i < numbers.length; i++){
            result += numbers[i]
            }
            
            return result;
}





// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    if (numbers2.length === 0) {
        return 0;
    }

    const sumIteration3 = sumNumbers(numbers2);
    const sumIteration4 = numbers2.length
    let result = sumIteration3 / sumIteration4;
    return result; 
}

     

// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrayOfWords, wordToSearch) {
   if(arrayOfWords.length === 0){
    return null;
   }
    let isIncluded = arrayOfWords.includes(wordToSearch)   
   return isIncluded
}


doesWordExist(words2, 'subset');
