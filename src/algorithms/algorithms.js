/** 1.1 - A function that finds and removes instances of four identical consecutive lowercase letters.
 *  The function should delete as a few letters as possible.
 * @param str
 * @returns {*}
 */
export const maxThreeConsecutiveLetters = (str) => {

    const regEx = new RegExp(/(.)\1\1+/, 'g');

    str = str.replaceAll(regEx, (s, letter) => {
        return letter + letter + letter;
    });

    return str;

};


/** 1.2 - A function that takes an array of numbers and returns the maximum sum of two numbers whose digits have an odd sum.
 * @param numbers
 * @returns {number}
 */
export const maxOddSum = (numbers = []) => {

    // generate test data.
    // numbers = Array.from({length: 150000}, () => Math.floor(Math.random() * 1500000) + 1);

    let maxOdd = 0;
    let maxEven = 0;

    for(let i = 0; i < numbers.length; i++) {
        maxOdd = numbers[i] % 2 === 1 && numbers[i] > maxOdd ? numbers[i] : maxOdd;
        maxEven = numbers[i] % 2 === 0 && numbers[i] > maxEven ? numbers[i] : maxEven;
    }

    return maxOdd + maxEven;
};